import type { Metadata } from "next";
import Link from "next/link";
import { ClearCartOnSuccess } from "@/components/cart/ClearCartOnSuccess";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function CheckoutSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center bg-rir-gray px-4 py-20">
      <ClearCartOnSuccess />
      <div className="w-full max-w-lg border border-rir-black/10 bg-white p-8 text-center sm:p-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
          Order Confirmed
        </p>
        <h1 className="mb-4 text-3xl font-black uppercase tracking-tight text-rir-black">
          Thank You
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-rir-muted">
          Your payment was successful. We&apos;ll send a confirmation email
          with your order details and tracking info once your items ship.
        </p>
        {session_id && (
          <p className="mb-6 text-xs text-rir-muted">
            Order reference: {session_id.slice(0, 20)}...
          </p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/account"
            className="bg-rir-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
          >
            View Account
          </Link>
          <Link
            href="/shop"
            className="border border-rir-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:border-rir-red hover:text-rir-red"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
