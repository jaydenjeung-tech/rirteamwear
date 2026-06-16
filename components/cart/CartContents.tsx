"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { cartItemKey } from "@/lib/cart";
import { formatPrice } from "@/lib/pricing";
import { getProductById, getRetailPrice } from "@/lib/products";

export function CartContents() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="border border-rir-black/10 bg-rir-gray p-10 text-center">
        <p className="mb-4 text-lg font-bold uppercase tracking-wide text-rir-black">
          Your cart is empty
        </p>
        <p className="mb-6 text-sm text-rir-muted">
          Browse our shop-ready products and add items to get started.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-rir-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
        >
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;

        const key = cartItemKey(item);
        const lineTotal = getRetailPrice(product) * item.quantity;

        return (
          <div
            key={key}
            className="flex gap-4 border border-rir-black/10 bg-white p-4 sm:p-6"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-rir-gray sm:h-24 sm:w-24">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <Link
                  href={`/shop/${product.id}`}
                  className="font-bold uppercase tracking-wide text-rir-black transition-colors hover:text-rir-red"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-rir-muted">Size: {item.size}</p>
                <p className="text-sm text-rir-muted">
                  {formatPrice(getRetailPrice(product))} each
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-rir-black/20">
                  <button
                    type="button"
                    onClick={() => updateQuantity(key, item.quantity - 1)}
                    className="px-3 py-2 text-sm font-bold text-rir-black hover:bg-rir-gray"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="min-w-8 px-2 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(key, item.quantity + 1)}
                    className="px-3 py-2 text-sm font-bold text-rir-black hover:bg-rir-gray"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className="min-w-16 text-right font-bold text-rir-black">
                  {formatPrice(lineTotal)}
                </p>
                <button
                  type="button"
                  onClick={() => removeItem(key)}
                  className="text-xs font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border border-rir-black/10 bg-rir-gray p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-rir-muted">
            Subtotal
          </span>
          <span className="text-2xl font-black text-rir-black">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="mt-2 text-xs text-rir-muted">
          Shipping and tax calculated at checkout.
        </p>
      </div>
    </div>
  );
}
