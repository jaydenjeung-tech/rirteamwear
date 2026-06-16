import type { Metadata } from "next";
import { ShopCatalog } from "@/components/catalog/ShopCatalog";
import { JourneyBanner } from "@/components/journey/JourneyBanner";
import {
  getRetailProducts,
  type ProductCategory,
} from "@/lib/products";

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Buy martial arts apparel, mouthguards, and accessories for yourself. Order online, ships to your door.",
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategory | undefined;

  let products = getRetailProducts();
  if (activeCategory) {
    products = products.filter((p) => p.category === activeCategory);
  }

  return (
    <>
      <JourneyBanner current="shop" />

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Individual Shopping
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-rir-black sm:text-5xl">
            Shop
          </h1>
          <p className="mt-4 max-w-xl text-rir-muted">
            Apparel, mouthguards, and gear for personal use. Pick your size,
            add to cart, and check out — we ship straight to you.
          </p>
        </div>
      </section>

      <section className="border-t border-rir-black/10 bg-rir-gray px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ShopCatalog products={products} activeCategory={activeCategory} />
        </div>
      </section>
    </>
  );
}
