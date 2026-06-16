"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useCart } from "@/components/providers/CartProvider";
import { validateCart } from "@/lib/cart";
import { formatPrice } from "@/lib/pricing";
import { isStripeConfigured } from "@/lib/stripe-client";

export function CheckoutButton() {
  const { items, subtotal } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    const validationError = validateCart(items);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!isStripeConfigured()) {
      setError(
        "Online checkout is not configured yet. Add Stripe keys to your environment."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customerEmail: user?.email ?? undefined,
          customerId: user?.id ?? undefined,
        }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        setError(data.error ?? "Checkout failed. Please try again.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      {error && (
        <p className="border border-rir-red/30 bg-rir-red/5 p-3 text-sm text-rir-red">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-rir-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c] disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Redirecting..." : `Checkout — ${formatPrice(subtotal)}`}
      </button>
    </div>
  );
}
