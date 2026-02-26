import { corsHeaders, errorResponse, jsonResponse } from "../_shared/http.ts";
import { getSupabaseAdminClient } from "../_shared/supabaseAdmin.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "GET") {
    return errorResponse("Method not allowed", 405);
  }

  const dashboardToken = Deno.env.get("DASHBOARD_API_TOKEN");
  if (!dashboardToken) {
    return errorResponse("Missing DASHBOARD_API_TOKEN", 500);
  }

  const receivedToken = req.headers.get("x-dashboard-token");
  if (!receivedToken || receivedToken !== dashboardToken) {
    return errorResponse("Unauthorized", 401);
  }

  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const paymentStatus = url.searchParams.get("paymentStatus");
  const dateFrom = url.searchParams.get("dateFrom");
  const dateTo = url.searchParams.get("dateTo");
  const limit = Math.min(Number(url.searchParams.get("limit") ?? 50), 100);

  const supabase = getSupabaseAdminClient();

  let query = supabase
    .from("bookings")
    .select(
      "id, booking_reference, pickup_datetime, dropoff_datetime, pickup_location, dropoff_location, vehicle_class, amount_total, amount_paid, currency, status, payment_status, availability_status, created_at, customers!inner(first_name, last_name, email, phone)",
    )
    .order("created_at", { ascending: false })
    .limit(Number.isFinite(limit) && limit > 0 ? limit : 50);

  if (status) {
    query = query.eq("status", status);
  }

  if (paymentStatus) {
    query = query.eq("payment_status", paymentStatus);
  }

  if (dateFrom) {
    query = query.gte("pickup_datetime", dateFrom);
  }

  if (dateTo) {
    query = query.lte("pickup_datetime", dateTo);
  }

  const { data, error } = await query;

  if (error) {
    return errorResponse("Failed to list bookings", 500, error);
  }

  return jsonResponse({ bookings: data ?? [] });
});
