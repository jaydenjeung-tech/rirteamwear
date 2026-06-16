import type { Metadata } from "next";
import Link from "next/link";
import { CartContents } from "@/components/cart/CartContents";
import { CheckoutButton } from "@/components/cart/CheckoutButton";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your cart and checkout.",
};

export default function CartPage() {
  return (
    <>
      <section className="bg-rir-dark px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Your Cart
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Shopping Cart
          </h1>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <CartContents />
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-rir-black/10 pt-8 sm:flex-row sm:items-center">
            <Link
              href="/shop"
              className="text-sm font-semibold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
            >
              &larr; Continue Shopping
            </Link>
            <CheckoutButton />
          </div>
        </div>
      </section>
    </>
  );
}
