import Link from "next/link";
import { ProductImage } from "@/components/products/ProductImage";
import { formatPrice } from "@/lib/pricing";
import { JOURNEY } from "@/lib/journeys";
import {
  CATEGORY_LABELS,
  getRetailMinQuantity,
  getRetailPrice,
  type Product,
  type ProductCategory,
} from "@/lib/products";

interface ShopCatalogProps {
  products: Product[];
  activeCategory?: ProductCategory;
}

const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "apparel", label: "Apparel" },
  { id: "mouthguard", label: "Mouthguards" },
  { id: "accessories", label: "Accessories" },
];

function shopCategoryHref(category?: ProductCategory) {
  return category ? `/shop?category=${category}` : "/shop";
}

export function ShopCatalog({ products, activeCategory }: ShopCatalogProps) {
  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const href = shopCategoryHref(
            cat.id === "all" ? undefined : cat.id
          );
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

      {products.length === 0 ? (
        <p className="text-sm text-rir-muted">No products in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group border border-rir-black/10 bg-white transition-colors hover:border-rir-red"
            >
              <Link href={JOURNEY.shop.productPath(product.id)}>
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  aspect="4/3"
                />
              </Link>
              <div className="p-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                  {CATEGORY_LABELS[product.category]}
                </p>
                <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-rir-black">
                  <Link
                    href={JOURNEY.shop.productPath(product.id)}
                    className="transition-colors hover:text-rir-red"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-rir-muted">
                  {product.description}
                </p>
                <div className="flex items-center justify-between border-t border-rir-black/10 pt-4">
                  <div>
                    <p className="text-lg font-bold text-rir-black">
                      {formatPrice(getRetailPrice(product))}
                    </p>
                    <p className="text-xs text-rir-muted">
                      Min. {getRetailMinQuantity(product)} · Ships to you
                    </p>
                  </div>
                  <Link
                    href={JOURNEY.shop.productPath(product.id)}
                    className="bg-rir-red px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
