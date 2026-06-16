import { NextResponse } from "next/server";
import type { CartItem } from "@/types";
import { validateCart } from "@/lib/cart";
import {
  getProductById,
  getRetailPrice,
} from "@/lib/products";
import { getSiteUrl, getStripe } from "@/lib/stripe";

interface CheckoutRequest {
  items: CartItem[];
  customerEmail?: string;
  customerId?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequest;
    const { items, customerEmail, customerId } = body;

    const validationError = validateCart(items);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const stripe = getStripe();
    const siteUrl = getSiteUrl();

    const lineItems = items.map((item) => {
      const product = getProductById(item.productId)!;
      const unitPrice = getRetailPrice(product);

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: `Size: ${item.size}`,
            images: product.imageUrl.startsWith("http")
              ? [product.imageUrl]
              : [`${siteUrl}${product.imageUrl}`],
          },
          unit_amount: Math.round(unitPrice * 100),
        },
        quantity: item.quantity,
      };
    });

    const checkoutItems = items.map((item) => {
      const product = getProductById(item.productId)!;
      return {
        ...item,
        name: product.name,
        unitPrice: getRetailPrice(product),
        imageUrl: product.imageUrl,
      };
    });

    const subtotal = checkoutItems.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
      customer_email: customerEmail,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      metadata: {
        customer_id: customerId ?? "",
        items: JSON.stringify(checkoutItems),
        subtotal: subtotal.toString(),
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
