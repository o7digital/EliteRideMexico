const encoder = new TextEncoder();

export type CreateCheckoutSessionInput = {
  stripeSecretKey: string;
  amountTotal: number;
  currency: string;
  bookingReference: string;
  bookingId: string;
  customerEmail: string;
  successUrl: string;
  cancelUrl: string;
};

export type StripeCheckoutSession = {
  id: string;
  object: string;
  url: string;
  status: string;
  payment_status: string;
  payment_intent: string | null;
  amount_total: number | null;
  currency: string | null;
  customer: string | null;
  metadata: Record<string, string>;
};

function appendField(params: URLSearchParams, key: string, value: string | number | boolean | undefined) {
  if (value === undefined || value === null) return;
  params.append(key, String(value));
}

export async function createStripeCheckoutSession(input: CreateCheckoutSessionInput): Promise<StripeCheckoutSession> {
  const params = new URLSearchParams();

  appendField(params, "mode", "payment");
  appendField(params, "success_url", input.successUrl);
  appendField(params, "cancel_url", input.cancelUrl);
  appendField(params, "customer_email", input.customerEmail);
  appendField(params, "client_reference_id", input.bookingReference);
  appendField(params, "metadata[booking_id]", input.bookingId);
  appendField(params, "metadata[booking_reference]", input.bookingReference);
  appendField(params, "line_items[0][quantity]", 1);
  appendField(params, "line_items[0][price_data][currency]", input.currency.toLowerCase());
  appendField(params, "line_items[0][price_data][unit_amount]", input.amountTotal);
  appendField(params, "line_items[0][price_data][product_data][name]", `Elite Ride Booking ${input.bookingReference}`);
  appendField(params, "payment_intent_data[metadata][booking_id]", input.bookingId);
  appendField(params, "payment_intent_data[metadata][booking_reference]", input.bookingReference);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${input.stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const responseText = await response.text();
  const payload = responseText ? JSON.parse(responseText) : {};

  if (!response.ok) {
    const message = payload?.error?.message ?? "Stripe checkout session creation failed";
    throw new Error(message);
  }

  return payload as StripeCheckoutSession;
}

function parseStripeSignature(headerValue: string): { timestamp: string; signatures: string[] } {
  const parts = headerValue.split(",");
  const timestamp = parts.find((segment) => segment.startsWith("t="))?.slice(2);
  const signatures = parts
    .filter((segment) => segment.startsWith("v1="))
    .map((segment) => segment.slice(3));

  if (!timestamp || signatures.length === 0) {
    throw new Error("Malformed Stripe-Signature header");
  }

  return { timestamp, signatures };
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return mismatch === 0;
}

export async function verifyStripeWebhookSignature(params: {
  signatureHeader: string;
  rawBody: string;
  webhookSecret: string;
  toleranceSeconds?: number;
}): Promise<boolean> {
  const { signatureHeader, rawBody, webhookSecret, toleranceSeconds = 300 } = params;
  const { timestamp, signatures } = parseStripeSignature(signatureHeader);

  const timestampSeconds = Number(timestamp);
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (!Number.isFinite(timestampSeconds) || Math.abs(nowSeconds - timestampSeconds) > toleranceSeconds) {
    return false;
  }

  const signedPayload = `${timestamp}.${rawBody}`;

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(webhookSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const computed = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(signedPayload));
  const expectedSignature = bytesToHex(new Uint8Array(computed));

  return signatures.some((candidate) => timingSafeEqual(candidate, expectedSignature));
}
