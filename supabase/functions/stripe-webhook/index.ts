import { corsHeaders, errorResponse, jsonResponse } from "../_shared/http.ts";
import { getSupabaseAdminClient } from "../_shared/supabaseAdmin.ts";
import { verifyStripeWebhookSignature } from "../_shared/stripe.ts";

type StripeEvent = {
  id: string;
  type: string;
  created: number;
  data: {
    object: Record<string, unknown>;
  };
};

async function insertBookingEvent(bookingId: string, eventType: string, payload: unknown) {
  const supabase = getSupabaseAdminClient();
  await supabase.from("booking_events").insert({
    booking_id: bookingId,
    event_type: eventType,
    event_payload: payload,
    triggered_by: "stripe_webhook",
  });
}

async function resolveBookingIdFromCheckoutSession(checkoutSessionId: string): Promise<string | null> {
  const supabase = getSupabaseAdminClient();
  const { data } = await supabase
    .from("bookings")
    .select("id")
    .eq("stripe_checkout_session_id", checkoutSessionId)
    .maybeSingle();

  return data?.id ?? null;
}

async function handleCheckoutCompleted(event: StripeEvent) {
  const object = event.data.object;
  const checkoutSessionId = String(object.id ?? "");
  const metadata = (object.metadata as Record<string, string> | undefined) ?? {};
  const bookingId = metadata.booking_id || (await resolveBookingIdFromCheckoutSession(checkoutSessionId));

  if (!bookingId) {
    throw new Error("Missing booking_id in checkout.session.completed event");
  }

  const amountTotal = Number(object.amount_total ?? 0);
  const currency = String(object.currency ?? "usd").toLowerCase();
  const paymentIntentId = object.payment_intent ? String(object.payment_intent) : null;
  const stripeCustomerId = object.customer ? String(object.customer) : null;

  const supabase = getSupabaseAdminClient();

  const { error: bookingError } = await supabase
    .from("bookings")
    .update({
      status: "confirmed",
      payment_status: "paid",
      availability_status: "reserved",
      amount_paid: Math.max(0, Math.trunc(amountTotal)),
      stripe_checkout_session_id: checkoutSessionId,
      stripe_customer_id: stripeCustomerId,
    })
    .eq("id", bookingId);

  if (bookingError) throw bookingError;

  const { error: availabilityError } = await supabase
    .from("availability_blocks")
    .update({ status: "reserved" })
    .eq("booking_id", bookingId);

  if (availabilityError) throw availabilityError;

  const { error: paymentSessionError } = await supabase.from("payment_sessions").upsert(
    {
      booking_id: bookingId,
      provider: "stripe",
      checkout_session_id: checkoutSessionId,
      payment_intent_id: paymentIntentId,
      status: "paid",
      currency,
      amount_total: Math.max(0, Math.trunc(amountTotal)),
      amount_received: Math.max(0, Math.trunc(amountTotal)),
      raw_payload: object,
    },
    { onConflict: "checkout_session_id" },
  );

  if (paymentSessionError) throw paymentSessionError;

  await insertBookingEvent(bookingId, "stripe_checkout_session_completed", {
    stripe_event_id: event.id,
    stripe_checkout_session_id: checkoutSessionId,
    amount_total: amountTotal,
    currency,
  });

  return { bookingId, checkoutSessionId };
}

async function handleCheckoutExpired(event: StripeEvent) {
  const object = event.data.object;
  const checkoutSessionId = String(object.id ?? "");
  const metadata = (object.metadata as Record<string, string> | undefined) ?? {};
  const bookingId = metadata.booking_id || (await resolveBookingIdFromCheckoutSession(checkoutSessionId));

  if (!bookingId) {
    throw new Error("Missing booking_id in checkout.session.expired event");
  }

  const supabase = getSupabaseAdminClient();

  const { error: bookingError } = await supabase
    .from("bookings")
    .update({
      payment_status: "expired",
      availability_status: "released",
      status: "pending",
    })
    .eq("id", bookingId);

  if (bookingError) throw bookingError;

  const { error: availabilityError } = await supabase
    .from("availability_blocks")
    .update({ status: "released" })
    .eq("booking_id", bookingId);

  if (availabilityError) throw availabilityError;

  const { error: paymentSessionError } = await supabase
    .from("payment_sessions")
    .update({
      status: "expired",
      raw_payload: object,
    })
    .eq("checkout_session_id", checkoutSessionId);

  if (paymentSessionError) throw paymentSessionError;

  await insertBookingEvent(bookingId, "stripe_checkout_session_expired", {
    stripe_event_id: event.id,
    stripe_checkout_session_id: checkoutSessionId,
  });

  return { bookingId, checkoutSessionId };
}

async function handlePaymentFailed(event: StripeEvent) {
  const object = event.data.object;
  const metadata = (object.metadata as Record<string, string> | undefined) ?? {};
  const bookingId = metadata.booking_id;
  const paymentIntentId = object.id ? String(object.id) : null;

  if (!bookingId) {
    throw new Error("Missing booking_id in payment_intent.payment_failed event");
  }

  const supabase = getSupabaseAdminClient();

  const { error: bookingError } = await supabase
    .from("bookings")
    .update({
      payment_status: "failed",
      status: "awaiting_payment",
      availability_status: "held",
    })
    .eq("id", bookingId);

  if (bookingError) throw bookingError;

  if (paymentIntentId) {
    const { error: paymentSessionError } = await supabase
      .from("payment_sessions")
      .update({
        status: "failed",
        raw_payload: object,
      })
      .eq("payment_intent_id", paymentIntentId);

    if (paymentSessionError) throw paymentSessionError;
  }

  await insertBookingEvent(bookingId, "stripe_payment_intent_failed", {
    stripe_event_id: event.id,
    stripe_payment_intent_id: paymentIntentId,
  });

  return { bookingId, paymentIntentId };
}

async function handleChargeRefunded(event: StripeEvent) {
  const object = event.data.object;
  const paymentIntentId = object.payment_intent ? String(object.payment_intent) : null;

  if (!paymentIntentId) {
    throw new Error("Missing payment_intent in charge.refunded event");
  }

  const supabase = getSupabaseAdminClient();
  const { data: paymentSession, error: paymentLookupError } = await supabase
    .from("payment_sessions")
    .select("booking_id")
    .eq("payment_intent_id", paymentIntentId)
    .single();

  if (paymentLookupError || !paymentSession) {
    throw new Error("Booking not found for payment_intent_id");
  }

  const bookingId = paymentSession.booking_id;

  const { error: bookingError } = await supabase
    .from("bookings")
    .update({
      payment_status: "refunded",
      status: "cancelled",
      availability_status: "released",
    })
    .eq("id", bookingId);

  if (bookingError) throw bookingError;

  const { error: availabilityError } = await supabase
    .from("availability_blocks")
    .update({ status: "released" })
    .eq("booking_id", bookingId);

  if (availabilityError) throw availabilityError;

  const { error: paymentSessionError } = await supabase
    .from("payment_sessions")
    .update({
      status: "refunded",
      raw_payload: object,
    })
    .eq("payment_intent_id", paymentIntentId);

  if (paymentSessionError) throw paymentSessionError;

  await insertBookingEvent(bookingId, "stripe_charge_refunded", {
    stripe_event_id: event.id,
    stripe_payment_intent_id: paymentIntentId,
  });

  return { bookingId, paymentIntentId };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  const signatureHeader = req.headers.get("stripe-signature");
  if (!signatureHeader) {
    return errorResponse("Missing stripe-signature header", 400);
  }

  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!webhookSecret) {
    return errorResponse("Missing STRIPE_WEBHOOK_SECRET", 500);
  }

  const rawBody = await req.text();
  const isValidSignature = await verifyStripeWebhookSignature({
    signatureHeader,
    rawBody,
    webhookSecret,
  });

  if (!isValidSignature) {
    return errorResponse("Invalid Stripe signature", 400);
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return errorResponse("Invalid Stripe event payload", 400);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const result = await handleCheckoutCompleted(event);
        return jsonResponse({ received: true, handled: event.type, result });
      }
      case "checkout.session.expired": {
        const result = await handleCheckoutExpired(event);
        return jsonResponse({ received: true, handled: event.type, result });
      }
      case "payment_intent.payment_failed": {
        const result = await handlePaymentFailed(event);
        return jsonResponse({ received: true, handled: event.type, result });
      }
      case "charge.refunded": {
        const result = await handleChargeRefunded(event);
        return jsonResponse({ received: true, handled: event.type, result });
      }
      default:
        return jsonResponse({ received: true, handled: "ignored", eventType: event.type });
    }
  } catch (error) {
    return errorResponse("Failed to process Stripe event", 500, {
      eventType: event.type,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
