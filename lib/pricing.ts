export function getPricePerUnit(basePrice: number, quantity: number): number {
  if (quantity >= 500) return basePrice * 0.7;
  if (quantity >= 200) return basePrice * 0.8;
  if (quantity >= 100) return basePrice * 0.85;
  if (quantity >= 50) return basePrice * 0.9;
  return basePrice;
}

export function formatPrice(amount: number): string {
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}

export const VOLUME_TIERS = [
  { minQty: 12, maxQty: 49, discount: "Base price", multiplier: 1 },
  { minQty: 50, maxQty: 99, discount: "10% off", multiplier: 0.9 },
  { minQty: 100, maxQty: 199, discount: "15% off", multiplier: 0.85 },
  { minQty: 200, maxQty: 499, discount: "20% off", multiplier: 0.8 },
  { minQty: 500, maxQty: null, discount: "30% off", multiplier: 0.7 },
] as const;
