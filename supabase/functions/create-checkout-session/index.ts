import { corsHeaders, errorResponse, jsonResponse } from "../_shared/http.ts";
import { getSupabaseAdminClient } from "../_shared/supabaseAdmin.ts";
import { createStripeCheckoutSession } from "../_shared/stripe.ts";

type CreateCheckoutSessionRequest = {
  bookingId: string;
  successUrl: string;
  cancelUrl: string;
};

function isValidUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
  if (!stripeSecretKey) {
    return errorResponse("Missing STRIPE_SECRET_KEY", 500);
  }

  let payload: CreateCheckoutSessionRequest;

  try {
    payload = await req.json();
  } catch {
    return errorResponse("Invalid JSON body", 400);
  }

  if (!payload?.bookingId || !payload.successUrl || !payload.cancelUrl) {
    return errorResponse("bookingId, successUrl and cancelUrl are required", 400);
  }

  if (!isValidUrl(payload.successUrl) || !isValidUrl(payload.cancelUrl)) {
    return errorResponse("successUrl and cancelUrl must be valid URLs", 400);
  }

  const supabase = getSupabaseAdminClient();

  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .select("id, booking_reference, amount_total, currency, payment_status, status, customers!inner(email)")
    .eq("id", payload.bookingId)
    .single();

  if (bookingError || !booking) {
    return errorResponse("Booking not found", 404, bookingError);
  }

  if (booking.payment_status === "paid") {
    return errorResponse("Booking already paid", 409);
  }

  if (!Number.isFinite(booking.amount_total) || booking.amount_total <= 0) {
    return errorResponse("Booking amount must be greater than 0", 409);
  }

  const customerEmail = booking.customers?.email;
  if (!customerEmail) {
    return errorResponse("Booking is missing customer email", 500);
  }

  let stripeSession;
  try {
    stripeSession = await createStripeCheckoutSession({
      stripeSecretKey,
      amountTotal: booking.amount_total,
      currency: booking.currency,
      bookingReference: booking.booking_reference,
      bookingId: booking.id,
      customerEmail,
      successUrl: payload.successUrl,
      cancelUrl: payload.cancelUrl,
    });
  } catch (error) {
    return errorResponse("Stripe session creation failed", 502, {
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }

  const { error: paymentSessionError } = await supabase.from("payment_sessions").upsert(
    {
      booking_id: booking.id,
      provider: "stripe",
      checkout_session_id: stripeSession.id,
      payment_intent_id: stripeSession.payment_intent,
      status: "pending",
      currency: booking.currency,
      amount_total: booking.amount_total,
      amount_received: 0,
      raw_payload: stripeSession,
    },
    { onConflict: "checkout_session_id" },
  );

  if (paymentSessionError) {
    return errorResponse("Checkout session created but payment session persistence failed", 500, {
      stripeSessionId: stripeSession.id,
      paymentSessionError,
    });
  }

  const { error: bookingUpdateError } = await supabase
    .from("bookings")
    .update({
      stripe_checkout_session_id: stripeSession.id,
      payment_status: "pending",
      status: "awaiting_payment",
    })
    .eq("id", booking.id);

  if (bookingUpdateError) {
    return errorResponse("Checkout session created but booking update failed", 500, {
      stripeSessionId: stripeSession.id,
      bookingUpdateError,
    });
  }

  const { error: eventError } = await supabase.from("booking_events").insert({
    booking_id: booking.id,
    event_type: "checkout_session_created",
    event_payload: {
      stripe_checkout_session_id: stripeSession.id,
      stripe_status: stripeSession.status,
    },
    triggered_by: "edge_function",
  });

  if (eventError) {
    return errorResponse("Checkout session created but event logging failed", 500, {
      stripeSessionId: stripeSession.id,
      eventError,
    });
  }

  return jsonResponse({
    bookingId: booking.id,
    checkoutSessionId: stripeSession.id,
    checkoutUrl: stripeSession.url,
  });
});
