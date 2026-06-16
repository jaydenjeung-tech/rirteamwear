"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/pricing";
import {
  getRetailMinQuantity,
  getRetailPrice,
  type Product,
} from "@/lib/products";

interface ProductPurchasePanelProps {
  product: Product;
}

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(getRetailMinQuantity(product));
  const [added, setAdded] = useState(false);

  const unitPrice = getRetailPrice(product);
  const minQty = getRetailMinQuantity(product);

  function handleAddToCart() {
    addItem({ productId: product.id, size, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div id="shop" className="mt-8 border border-rir-red/20 bg-rir-red/5 p-6">
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
        Add to Cart
      </p>
      <p className="mb-6 text-sm text-rir-muted">
        Select your size and quantity. Checkout online — no quote needed.
      </p>

      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
            Price
          </p>
          <p className="mt-1 text-3xl font-black text-rir-black">
            {formatPrice(unitPrice)}
            <span className="text-base font-normal text-rir-muted">/unit</span>
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
            Min. Order
          </p>
          <p className="mt-1 text-3xl font-black text-rir-black">
            {minQty}
            <span className="text-base font-normal text-rir-muted"> units</span>
          </p>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="size"
          className="mb-2 block text-xs font-bold uppercase tracking-widest text-rir-muted"
        >
          Size
        </label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
        >
          {product.sizes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="mb-2 block text-xs font-bold uppercase tracking-widest text-rir-muted"
        >
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min={minQty}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(minQty, parseInt(e.target.value, 10) || minQty))
          }
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-rir-red px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
        <Link
          href="/cart"
          className="flex-1 border border-rir-black/20 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:border-rir-red hover:text-rir-red"
        >
          View Cart
        </Link>
      </div>

      <p className="mt-4 text-center text-xs text-rir-muted">
        Total: {formatPrice(unitPrice * quantity)}
      </p>
    </div>
  );
}
