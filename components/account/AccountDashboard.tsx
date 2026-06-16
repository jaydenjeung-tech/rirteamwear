"use client";

import Link from "next/link";
import { OrderHistory } from "@/components/account/OrderHistory";
import { useAuth } from "@/components/providers/AuthProvider";

export function AccountDashboard() {
  const { user, profile, loading, signOut } = useAuth();

  if (loading) {
    return <p className="text-sm text-rir-muted">Loading your account...</p>;
  }

  if (!user) {
    return (
      <div className="border border-rir-black/10 bg-rir-gray p-8 text-center">
        <p className="mb-4 font-bold uppercase tracking-wide text-rir-black">
          Sign in to view your account
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/auth/login"
            className="bg-rir-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
          >
            Log In
          </Link>
          <Link
            href="/auth/register"
            className="border border-rir-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:border-rir-red hover:text-rir-red"
          >
            Create Account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="border border-rir-black/10 bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
              Your Account
            </p>
            <h2 className="text-xl font-black uppercase tracking-tight text-rir-black">
              {profile?.full_name ?? user.email}
            </h2>
            <p className="mt-1 text-sm text-rir-muted">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={() => signOut()}
            className="text-sm font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/shop"
          className="border border-rir-black/10 bg-rir-gray p-6 transition-colors hover:border-rir-red"
        >
          <p className="font-bold uppercase tracking-wide text-rir-black">
            Continue Shopping
          </p>
          <p className="mt-2 text-sm text-rir-muted">
            Browse individual shop products
          </p>
        </Link>
        <Link
          href="/cart"
          className="border border-rir-black/10 bg-rir-gray p-6 transition-colors hover:border-rir-red"
        >
          <p className="font-bold uppercase tracking-wide text-rir-black">
            View Cart
          </p>
          <p className="mt-2 text-sm text-rir-muted">
            Review items before checkout
          </p>
        </Link>
      </div>

      <div className="border border-rir-black/10 bg-white p-6">
        <h3 className="mb-4 font-bold uppercase tracking-wide text-rir-black">
          Order History
        </h3>
        <OrderHistory />
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
        >
          Questions about an order? Contact us &rarr;
        </Link>
      </div>
    </div>
  );
}
