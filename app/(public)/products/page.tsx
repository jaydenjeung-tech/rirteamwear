import Link from "next/link";
import { ProductImage } from "@/components/products/ProductImage";
import {
  CATEGORY_LABELS,
  PRODUCTS,
  type ProductCategory,
} from "@/lib/products";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata = {
  title: "Products",
  description:
    "Browse custom martial arts apparel, gear, mouthguards, and accessories. Team pricing available.",
};

const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "apparel", label: "Apparel" },
  { id: "gear", label: "Gear" },
  { id: "mouthguard", label: "Mouthguards" },
  { id: "accessories", label: "Accessories" },
];

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategory | undefined;

  const filtered =
    activeCategory && activeCategory in CATEGORY_LABELS
      ? PRODUCTS.filter((p) => p.category === activeCategory)
      : PRODUCTS;

  return (
    <>
      <section className="bg-rir-dark px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Catalog
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Products
          </h1>
          <p className="mt-4 max-w-xl text-white/60">
            Custom gear for your team. Bulk pricing tiers available — the more
            you order, the more you save.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const href =
                cat.id === "all" ? "/products" : `/products?category=${cat.id}`;
              const isActive =
                cat.id === "all" ? !activeCategory : activeCategory === cat.id;

              return (
                <Link
                  key={cat.id}
                  href={href}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-rir-red text-white"
                      : "border border-rir-black/10 text-rir-black hover:border-rir-red hover:text-rir-red"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {/* Product grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="group border border-rir-black/10 transition-colors hover:border-rir-red"
              >
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  aspect="4/3"
                />
                <div className="p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    {CATEGORY_LABELS[product.category]}
                  </p>
                  <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-rir-black">
                    {product.name}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-rir-muted">
                    {product.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="border border-rir-black/10 px-2 py-0.5 text-xs text-rir-muted"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-rir-black/10 pt-4">
                    <div>
                      <p className="text-lg font-bold text-rir-black">
                        ${product.basePrice}
                        <span className="text-sm font-normal text-rir-muted">
                          /unit
                        </span>
                      </p>
                      <p className="text-xs text-rir-muted">
                        Min. order: {product.minQuantity}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-rir-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-rir-red"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pricing tiers info */}
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
