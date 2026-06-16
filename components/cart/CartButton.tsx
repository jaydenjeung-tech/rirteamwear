"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";

export function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:text-rir-red"
      aria-label={`Cart, ${itemCount} items`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M6 6h15l-1.5 9h-12L6 6z" />
        <path d="M6 6L5 3H2" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-rir-red px-1 text-[10px] font-bold text-white sm:static sm:h-5 sm:min-w-5 sm:text-xs">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
