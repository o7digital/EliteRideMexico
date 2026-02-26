# Backend skeleton: Supabase + Stripe

## What is included

- Migration SQL:
  - `customers`
  - `bookings`
  - `availability_blocks`
  - `payment_sessions`
  - `booking_events`
  - `crm_sync_jobs` (kept for later CRM integration)
- Edge functions:
  - `create-booking`
  - `create-checkout-session`
  - `stripe-webhook`
  - `list-bookings` (for internal dashboard)

## Flow

1. Frontend calls `create-booking`.
2. Frontend calls `create-checkout-session` with `bookingId`.
3. Customer pays via Stripe Checkout URL.
4. Stripe calls `stripe-webhook`.
5. Webhook updates booking/payment state in Supabase.
6. Internal dashboard reads bookings through `list-bookings`.

## Deploy order

1. Apply migration:
   ```bash
   supabase db push
   ```
2. Add secrets (from `supabase/.env.example`) to the project:
   ```bash
   cp supabase/.env.example supabase/.env.local
   # edit supabase/.env.local with real keys
   supabase secrets set --env-file supabase/.env.local
   ```
3. Deploy functions:
   ```bash
   supabase functions deploy create-booking
   supabase functions deploy create-checkout-session
   supabase functions deploy stripe-webhook
   supabase functions deploy list-bookings
   ```
4. Configure Stripe webhook endpoint to:
   - `https://<project-ref>.functions.supabase.co/stripe-webhook`
   - Events:
     - `checkout.session.completed`
     - `checkout.session.expired`
     - `payment_intent.payment_failed`
     - `charge.refunded`

## Endpoint payloads

### create-booking

`POST /functions/v1/create-booking`

```json
{
  "customer": {
    "email": "client@example.com",
    "firstName": "Ana",
    "lastName": "Lopez",
    "phone": "+52...",
    "locale": "es"
  },
  "trip": {
    "pickupDatetime": "2026-03-05T16:30:00Z",
    "dropoffDatetime": "2026-03-05T18:00:00Z",
    "pickupLocation": "Cancun Airport",
    "dropoffLocation": "Tulum Downtown",
    "vehicleClass": "SUV",
    "passengerCount": 4,
    "luggageCount": 3
  },
  "pricing": {
    "amountTotal": 14500,
    "currency": "usd"
  }
}
```

### create-checkout-session

`POST /functions/v1/create-checkout-session`

```json
{
  "bookingId": "<uuid>",
  "successUrl": "https://eliteridemexico.com/booking/success",
  "cancelUrl": "https://eliteridemexico.com/booking/cancel"
}
```

### list-bookings (dashboard)

`GET /functions/v1/list-bookings?status=confirmed&limit=50`

Required header:

```txt
x-dashboard-token: <DASHBOARD_API_TOKEN>
```

## CRM integration later

`crm_sync_jobs` is already in schema so CRM sync can be added later without redesigning core booking/payment tables.

## Astro dashboard page

- Route: `/dashboard/reservations`
- File: `src/pages/dashboard/reservations.astro`
- It calls `list-bookings` directly and asks for:
  - Supabase Functions URL
  - `DASHBOARD_API_TOKEN`
