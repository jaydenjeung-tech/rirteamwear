export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}

export interface CheckoutItem extends CartItem {
  name: string;
  unitPrice: number;
  imageUrl: string;
}

export interface CustomerProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  created_at: string;
}

export interface RetailOrder {
  id: string;
  customer_id: string | null;
  stripe_session_id: string | null;
  email: string;
  items: CheckoutItem[];
  subtotal: number;
  total: number;
  status: string;
  shipping_address: Record<string, string> | null;
  created_at: string;
}
