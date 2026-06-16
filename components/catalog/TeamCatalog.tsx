import Link from "next/link";
import { ProductImage } from "@/components/products/ProductImage";
import { formatPrice } from "@/lib/pricing";
import { JOURNEY } from "@/lib/journeys";
import {
  CATEGORY_LABELS,
  type Product,
  type ProductCategory,
} from "@/lib/products";

interface TeamCatalogProps {
  products: Product[];
  activeCategory?: ProductCategory;
}

const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "apparel", label: "Apparel" },
  { id: "gear", label: "Gear" },
  { id: "mouthguard", label: "Mouthguards" },
  { id: "accessories", label: "Accessories" },
];

function teamCategoryHref(category?: ProductCategory) {
  return category
    ? `/team/products?category=${category}`
    : "/team/products";
}

export function TeamCatalog({ products, activeCategory }: TeamCatalogProps) {
  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const href = teamCategoryHref(
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
                  ? "bg-rir-black text-white"
                  : "border border-rir-black/10 text-rir-black hover:border-rir-black"
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="group border border-rir-black/10 bg-white transition-colors hover:border-rir-black"
          >
            <Link href={JOURNEY.team.productPath(product.id)}>
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
                  href={JOURNEY.team.productPath(product.id)}
                  className="transition-colors hover:text-rir-red"
                >
                  {product.name}
                </Link>
              </h2>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-rir-muted">
                {product.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1">
                {product.sizes.slice(0, 4).map((size) => (
                  <span
                    key={size}
                    className="border border-rir-black/10 px-2 py-0.5 text-xs text-rir-muted"
                  >
                    {size}
                  </span>
                ))}
                {product.sizes.length > 4 && (
                  <span className="px-2 py-0.5 text-xs text-rir-muted">
                    +{product.sizes.length - 4}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-rir-black/10 pt-4">
                <div>
                  <p className="text-lg font-bold text-rir-black">
                    From {formatPrice(product.basePrice)}
                    <span className="text-sm font-normal text-rir-muted">
                      /unit
                    </span>
                  </p>
                  <p className="text-xs text-rir-muted">
                    Min. {product.minQuantity} units · Custom logo
                  </p>
                </div>
                <Link
                  href={JOURNEY.team.productPath(product.id)}
                  className="bg-rir-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-rir-red"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
