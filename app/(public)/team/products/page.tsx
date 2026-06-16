import type { Metadata } from "next";
import Link from "next/link";
import { TeamCatalog } from "@/components/catalog/TeamCatalog";
import { JOURNEY } from "@/lib/journeys";
import {
  getTeamProducts,
  type ProductCategory,
} from "@/lib/products";

interface TeamProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata: Metadata = {
  title: "Team Catalog",
  description:
    "Browse custom wholesale martial arts gear for gyms and teams. Volume pricing and custom logos.",
};

export default async function TeamProductsPage({
  searchParams,
}: TeamProductsPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategory | undefined;

  let products = getTeamProducts();
  if (activeCategory) {
    products = products.filter((p) => p.category === activeCategory);
  }

  return (
    <>
      <section className="bg-rir-dark px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Team Wholesale
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Team Catalog
          </h1>
          <p className="mt-4 max-w-xl text-white/60">
            Custom gear with your gym logo. Every product below is available for
            bulk team orders with volume discounts.
          </p>
          <Link
            href={JOURNEY.shop.catalogPath}
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-rir-red"
          >
            Buying for yourself? Go to Shop &rarr;
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <TeamCatalog products={products} activeCategory={activeCategory} />

          <div className="mt-16 border border-rir-black/10 bg-rir-gray p-8 sm:p-10">
            <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-rir-black">
              Volume Pricing
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { qty: "12–49", discount: "Base price" },
                { qty: "50–99", discount: "10% off" },
                { qty: "100–199", discount: "15% off" },
                { qty: "200–499", discount: "20% off" },
                { qty: "500+", discount: "30% off" },
              ].map((tier) => (
                <div key={tier.qty} className="bg-white p-4 text-center">
                  <p className="text-lg font-bold text-rir-red">{tier.discount}</p>
                  <p className="text-sm text-rir-muted">{tier.qty} units</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
