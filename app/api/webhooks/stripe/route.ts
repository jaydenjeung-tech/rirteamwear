import { NextResponse } from "next/server";
import type { CheckoutItem } from "@/types";
import { createAdminClient } from "@/lib/supabase/admin";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing webhook signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const items = JSON.parse(session.metadata?.items ?? "[]") as CheckoutItem[];
      const subtotal = Number(session.metadata?.subtotal ?? 0);
      const customerId = session.metadata?.customer_id || null;

      const supabase = createAdminClient();
      const shippingDetails =
        "shipping_details" in session && session.shipping_details
          ? (session.shipping_details as {
              name?: string | null;
              address?: {
                line1?: string | null;
                line2?: string | null;
                city?: string | null;
                state?: string | null;
                postal_code?: string | null;
                country?: string | null;
              } | null;
            })
          : null;

      await supabase.from("retail_orders").insert({
        customer_id: customerId || null,
        stripe_session_id: session.id,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id ?? null,
        email: session.customer_details?.email ?? session.customer_email ?? "",
        items,
        subtotal,
        total: (session.amount_total ?? 0) / 100,
        status: "paid",
        shipping_address: shippingDetails?.address
          ? {
              name: shippingDetails.name ?? "",
              line1: shippingDetails.address.line1 ?? "",
              line2: shippingDetails.address.line2 ?? "",
              city: shippingDetails.address.city ?? "",
              state: shippingDetails.address.state ?? "",
              postal_code: shippingDetails.address.postal_code ?? "",
              country: shippingDetails.address.country ?? "",
            }
          : null,
      });
    } catch {
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
