import { errorResponse, jsonResponse, corsHeaders } from "../_shared/http.ts";
import { getSupabaseAdminClient } from "../_shared/supabaseAdmin.ts";

type CreateBookingRequest = {
  customer: {
    authUserId?: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    locale?: string;
  };
  trip: {
    pickupDatetime: string;
    dropoffDatetime?: string;
    estimatedDurationMinutes?: number;
    pickupLocation: string;
    dropoffLocation: string;
    vehicleClass: string;
    passengerCount: number;
    luggageCount?: number;
    specialRequests?: string;
  };
  pricing: {
    amountTotal: number;
    currency?: string;
  };
  metadata?: Record<string, unknown>;
};

function parseIsoDate(value: string): Date | null {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  let payload: CreateBookingRequest;

  try {
    payload = await req.json();
  } catch {
    return errorResponse("Invalid JSON body", 400);
  }

  const { customer, trip, pricing, metadata } = payload ?? {};

  if (!customer?.email || !customer.firstName || !customer.lastName) {
    return errorResponse("customer.email, customer.firstName and customer.lastName are required", 400);
  }

  if (!trip?.pickupDatetime || !trip.pickupLocation || !trip.dropoffLocation || !trip.vehicleClass) {
    return errorResponse("trip payload is incomplete", 400);
  }

  if (!Number.isFinite(trip.passengerCount) || trip.passengerCount <= 0) {
    return errorResponse("trip.passengerCount must be a positive number", 400);
  }

  if (!Number.isFinite(pricing?.amountTotal) || pricing.amountTotal < 0) {
    return errorResponse("pricing.amountTotal must be a positive integer amount in cents", 400);
  }

  const pickupDate = parseIsoDate(trip.pickupDatetime);
  if (!pickupDate) {
    return errorResponse("trip.pickupDatetime must be a valid ISO datetime", 400);
  }

  const dropoffDate = trip.dropoffDatetime
    ? parseIsoDate(trip.dropoffDatetime)
    : new Date(pickupDate.valueOf() + (trip.estimatedDurationMinutes ?? 120) * 60_000);

  if (!dropoffDate) {
    return errorResponse("trip.dropoffDatetime must be a valid ISO datetime", 400);
  }

  if (dropoffDate <= pickupDate) {
    return errorResponse("trip.dropoffDatetime must be after trip.pickupDatetime", 400);
  }

  const supabase = getSupabaseAdminClient();

  const normalizedEmail = customer.email.trim().toLowerCase();
  const normalizedCurrency = (pricing.currency ?? "usd").toLowerCase();

  const { data: dbCustomer, error: customerError } = await supabase
    .from("customers")
    .upsert(
      {
        auth_user_id: customer.authUserId ?? null,
        email: normalizedEmail,
        first_name: customer.firstName.trim(),
        last_name: customer.lastName.trim(),
        phone: customer.phone?.trim() || null,
        locale: customer.locale ?? "en",
      },
      { onConflict: "email" },
    )
    .select("id")
    .single();

  if (customerError || !dbCustomer) {
    return errorResponse("Unable to upsert customer", 500, customerError);
  }

  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .insert({
      customer_id: dbCustomer.id,
      pickup_datetime: pickupDate.toISOString(),
      dropoff_datetime: dropoffDate.toISOString(),
      pickup_location: trip.pickupLocation.trim(),
      dropoff_location: trip.dropoffLocation.trim(),
      vehicle_class: trip.vehicleClass.trim(),
      passenger_count: Math.trunc(trip.passengerCount),
      luggage_count: Math.max(0, Math.trunc(trip.luggageCount ?? 0)),
      special_requests: trip.specialRequests?.trim() || null,
      amount_total: Math.trunc(pricing.amountTotal),
      currency: normalizedCurrency,
      status: "awaiting_payment",
      payment_status: "unpaid",
      availability_status: "held",
      hold_expires_at: new Date(Date.now() + 15 * 60_000).toISOString(),
      metadata: metadata ?? {},
    })
    .select("id, booking_reference, status, payment_status, amount_total, currency")
    .single();

  if (bookingError || !booking) {
    return errorResponse("Unable to create booking", 500, bookingError);
  }

  const { error: blockError } = await supabase.from("availability_blocks").upsert(
    {
      booking_id: booking.id,
      vehicle_class: trip.vehicleClass.trim(),
      starts_at: pickupDate.toISOString(),
      ends_at: dropoffDate.toISOString(),
      status: "held",
    },
    { onConflict: "booking_id" },
  );

  if (blockError) {
    return errorResponse("Booking created but availability hold failed", 500, {
      bookingId: booking.id,
      blockError,
    });
  }

  const { error: eventError } = await supabase.from("booking_events").insert({
    booking_id: booking.id,
    event_type: "booking_created_api",
    event_payload: {
      source: "create-booking",
      hold_expires_at: new Date(Date.now() + 15 * 60_000).toISOString(),
    },
    triggered_by: "edge_function",
  });

  if (eventError) {
    return errorResponse("Booking created but event logging failed", 500, {
      bookingId: booking.id,
      eventError,
    });
  }

  return jsonResponse(
    {
      booking,
      next_action: "create_checkout_session",
    },
    201,
  );
});
