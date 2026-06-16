"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { formatPrice } from "@/lib/pricing";
import type { RetailOrder } from "@/types";

export function OrderHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<RetailOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    const supabase = createClient();
    supabase
      .from("retail_orders")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setOrders((data as RetailOrder[]) ?? []);
        setLoading(false);
      });
  }, [user]);

  if (!user) return null;

  if (loading) {
    return <p className="text-sm text-rir-muted">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <p className="text-sm text-rir-muted">
        No orders yet. Your purchases will appear here after checkout.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-rir-black/10 bg-rir-gray p-4 sm:p-5"
        >
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-rir-red">
                {order.status}
              </p>
              <p className="font-semibold text-rir-black">
                {new Date(order.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-lg font-bold text-rir-black">
              {formatPrice(order.total)}
            </p>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-rir-muted">
            {order.items.map((item) => (
              <li key={`${item.productId}-${item.size}`}>
                {item.name} — {item.size} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
