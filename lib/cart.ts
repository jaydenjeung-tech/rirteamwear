import type { CartItem } from "@/types";
import {
  getProductById,
  getRetailMinQuantity,
  getRetailPrice,
  isRetailAvailable,
} from "@/lib/products";

export const CART_STORAGE_KEY = "rir-cart";

export function cartItemKey(item: Pick<CartItem, "productId" | "size">): string {
  return `${item.productId}:${item.size}`;
}

export function parseCartItemKey(key: string): { productId: string; size: string } {
  const [productId, ...sizeParts] = key.split(":");
  return { productId, size: sizeParts.join(":") };
}

export function getCartLineTotal(item: CartItem): number {
  const product = getProductById(item.productId);
  if (!product) return 0;
  return getRetailPrice(product) * item.quantity;
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + getCartLineTotal(item), 0);
}

export function validateCartItem(item: CartItem): string | null {
  const product = getProductById(item.productId);
  if (!product) return "Product not found";
  if (!isRetailAvailable(product)) return `${product.name} is not available for individual purchase`;
  if (!product.sizes.includes(item.size)) return `Invalid size for ${product.name}`;
  if (item.quantity < getRetailMinQuantity(product)) {
    return `Minimum quantity for ${product.name} is ${getRetailMinQuantity(product)}`;
  }
  return null;
}

export function validateCart(items: CartItem[]): string | null {
  if (items.length === 0) return "Your cart is empty";
  for (const item of items) {
    const error = validateCartItem(item);
    if (error) return error;
  }
  return null;
}
