create extension if not exists pgcrypto;

DO $$
BEGIN
  CREATE TYPE booking_status AS ENUM (
    'pending',
    'awaiting_payment',
    'confirmed',
    'cancelled',
    'completed'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  CREATE TYPE payment_status AS ENUM (
    'unpaid',
    'pending',
    'paid',
    'failed',
    'refunded',
    'expired'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE SEQUENCE IF NOT EXISTS booking_reference_seq START 1000;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.assign_booking_reference()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.booking_reference IS NULL OR NEW.booking_reference = '' THEN
    NEW.booking_reference := 'ERM-' || LPAD(NEXTVAL('booking_reference_seq')::text, 7, '0');
  END IF;

  RETURN NEW;
END;
$$;

CREATE TABLE IF NOT EXISTS public.customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id uuid UNIQUE REFERENCES auth.users(id) ON DELETE SET NULL,
  email text NOT NULL UNIQUE CHECK (email = LOWER(email)),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  locale text NOT NULL DEFAULT 'en',
  crm_contact_id text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_reference text UNIQUE,
  customer_id uuid NOT NULL REFERENCES public.customers(id) ON DELETE RESTRICT,
  pickup_datetime timestamptz NOT NULL,
  dropoff_datetime timestamptz NOT NULL,
  pickup_location text NOT NULL,
  dropoff_location text NOT NULL,
  vehicle_class text NOT NULL,
  passenger_count smallint NOT NULL CHECK (passenger_count > 0 AND passenger_count <= 20),
  luggage_count smallint NOT NULL DEFAULT 0 CHECK (luggage_count >= 0),
  special_requests text,
  currency char(3) NOT NULL DEFAULT 'usd',
  amount_total integer NOT NULL CHECK (amount_total >= 0),
  amount_paid integer NOT NULL DEFAULT 0 CHECK (amount_paid >= 0),
  status booking_status NOT NULL DEFAULT 'pending',
  payment_status payment_status NOT NULL DEFAULT 'unpaid',
  availability_status text NOT NULL DEFAULT 'held' CHECK (availability_status IN ('held', 'reserved', 'released')),
  hold_expires_at timestamptz,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  CONSTRAINT dropoff_after_pickup CHECK (dropoff_datetime > pickup_datetime),
  CONSTRAINT amount_paid_not_greater_than_total CHECK (amount_paid <= amount_total)
);

CREATE TABLE IF NOT EXISTS public.availability_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL UNIQUE REFERENCES public.bookings(id) ON DELETE CASCADE,
  vehicle_class text NOT NULL,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'held' CHECK (status IN ('held', 'reserved', 'released')),
  created_at timestamptz NOT NULL DEFAULT NOW(),
  CONSTRAINT availability_ends_after_starts CHECK (ends_at > starts_at)
);

CREATE TABLE IF NOT EXISTS public.payment_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  provider text NOT NULL DEFAULT 'stripe',
  checkout_session_id text NOT NULL UNIQUE,
  payment_intent_id text UNIQUE,
  status payment_status NOT NULL DEFAULT 'pending',
  currency char(3) NOT NULL,
  amount_total integer NOT NULL CHECK (amount_total >= 0),
  amount_received integer NOT NULL DEFAULT 0 CHECK (amount_received >= 0),
  raw_payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.booking_events (
  id bigserial PRIMARY KEY,
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  event_payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  triggered_by text NOT NULL DEFAULT 'system',
  created_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.crm_sync_jobs (
  id bigserial PRIMARY KEY,
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'succeeded', 'failed')),
  attempt_count integer NOT NULL DEFAULT 0,
  last_error text,
  next_attempt_at timestamptz NOT NULL DEFAULT NOW(),
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS bookings_customer_id_idx ON public.bookings(customer_id);
CREATE INDEX IF NOT EXISTS bookings_pickup_datetime_idx ON public.bookings(pickup_datetime);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON public.bookings(status, payment_status);
CREATE INDEX IF NOT EXISTS availability_blocks_vehicle_class_idx ON public.availability_blocks(vehicle_class, starts_at, ends_at);
CREATE INDEX IF NOT EXISTS payment_sessions_booking_id_idx ON public.payment_sessions(booking_id, status);
CREATE INDEX IF NOT EXISTS booking_events_booking_id_created_at_idx ON public.booking_events(booking_id, created_at DESC);
CREATE INDEX IF NOT EXISTS crm_sync_jobs_status_next_attempt_idx ON public.crm_sync_jobs(status, next_attempt_at);

DROP TRIGGER IF EXISTS set_customers_updated_at ON public.customers;
CREATE TRIGGER set_customers_updated_at
BEFORE UPDATE ON public.customers
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS set_bookings_updated_at ON public.bookings;
CREATE TRIGGER set_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS set_payment_sessions_updated_at ON public.payment_sessions;
CREATE TRIGGER set_payment_sessions_updated_at
BEFORE UPDATE ON public.payment_sessions
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS set_crm_sync_jobs_updated_at ON public.crm_sync_jobs;
CREATE TRIGGER set_crm_sync_jobs_updated_at
BEFORE UPDATE ON public.crm_sync_jobs
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS assign_booking_reference_trigger ON public.bookings;
CREATE TRIGGER assign_booking_reference_trigger
BEFORE INSERT ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.assign_booking_reference();

CREATE OR REPLACE FUNCTION public.log_booking_inserted_event()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.booking_events (booking_id, event_type, event_payload, triggered_by)
  VALUES (
    NEW.id,
    'booking_created',
    jsonb_build_object(
      'status', NEW.status,
      'payment_status', NEW.payment_status,
      'amount_total', NEW.amount_total
    ),
    'db_trigger'
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS booking_inserted_event_trigger ON public.bookings;
CREATE TRIGGER booking_inserted_event_trigger
AFTER INSERT ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.log_booking_inserted_event();

CREATE OR REPLACE FUNCTION public.log_booking_status_change_event()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF (OLD.status IS DISTINCT FROM NEW.status)
     OR (OLD.payment_status IS DISTINCT FROM NEW.payment_status)
     OR (OLD.availability_status IS DISTINCT FROM NEW.availability_status) THEN
    INSERT INTO public.booking_events (booking_id, event_type, event_payload, triggered_by)
    VALUES (
      NEW.id,
      'booking_state_changed',
      jsonb_build_object(
        'old_status', OLD.status,
        'new_status', NEW.status,
        'old_payment_status', OLD.payment_status,
        'new_payment_status', NEW.payment_status,
        'old_availability_status', OLD.availability_status,
        'new_availability_status', NEW.availability_status
      ),
      'db_trigger'
    );
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS booking_status_change_event_trigger ON public.bookings;
CREATE TRIGGER booking_status_change_event_trigger
AFTER UPDATE OF status, payment_status, availability_status ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.log_booking_status_change_event();

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_events ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'customers' AND policyname = 'customers_select_own'
  ) THEN
    CREATE POLICY customers_select_own
      ON public.customers
      FOR SELECT
      TO authenticated
      USING (auth_user_id = auth.uid());
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'customers' AND policyname = 'customers_update_own'
  ) THEN
    CREATE POLICY customers_update_own
      ON public.customers
      FOR UPDATE
      TO authenticated
      USING (auth_user_id = auth.uid())
      WITH CHECK (auth_user_id = auth.uid());
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'bookings' AND policyname = 'bookings_select_own'
  ) THEN
    CREATE POLICY bookings_select_own
      ON public.bookings
      FOR SELECT
      TO authenticated
      USING (
        EXISTS (
          SELECT 1
          FROM public.customers c
          WHERE c.id = bookings.customer_id
            AND c.auth_user_id = auth.uid()
        )
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'payment_sessions' AND policyname = 'payment_sessions_select_own'
  ) THEN
    CREATE POLICY payment_sessions_select_own
      ON public.payment_sessions
      FOR SELECT
      TO authenticated
      USING (
        EXISTS (
          SELECT 1
          FROM public.bookings b
          JOIN public.customers c ON c.id = b.customer_id
          WHERE b.id = payment_sessions.booking_id
            AND c.auth_user_id = auth.uid()
        )
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'booking_events' AND policyname = 'booking_events_select_own'
  ) THEN
    CREATE POLICY booking_events_select_own
      ON public.booking_events
      FOR SELECT
      TO authenticated
      USING (
        EXISTS (
          SELECT 1
          FROM public.bookings b
          JOIN public.customers c ON c.id = b.customer_id
          WHERE b.id = booking_events.booking_id
            AND c.auth_user_id = auth.uid()
        )
      );
  END IF;
END $$;
