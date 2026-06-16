import Image from "next/image";
import Link from "next/link";
import { ProductPurchasePanel } from "@/components/cart/ProductPurchasePanel";
import { JourneyBanner } from "@/components/journey/JourneyBanner";
import { ProductImage } from "@/components/products/ProductImage";
import { Button } from "@/components/ui/Button";
import { JOURNEY } from "@/lib/journeys";
import { formatPrice } from "@/lib/pricing";
import {
  CATEGORY_LABELS,
  getRetailMinQuantity,
  getRetailPrice,
  getShopRelatedProducts,
  isTeamAvailable,
  type Product,
} from "@/lib/products";

interface ShopProductDetailProps {
  product: Product;
}

export function ShopProductDetail({ product }: ShopProductDetailProps) {
  const related = getShopRelatedProducts(product);
  const teamAlso = isTeamAvailable(product);

  return (
    <>
      <JourneyBanner current="shop" productName={product.name} />

      <section className="border-b border-rir-black/10 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rir-muted">
            <Link href="/shop" className="transition-colors hover:text-rir-red">
              Shop
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={JOURNEY.shop.categoryPath(product.category)}
              className="transition-colors hover:text-rir-red"
            >
              {CATEGORY_LABELS[product.category]}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-rir-black">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden border border-rir-black/10 bg-rir-gray">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
                Individual Purchase
              </p>
              <h1 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-rir-muted">
                {product.description}
              </p>

              <div className="mt-8 grid gap-6 border border-rir-red/20 bg-rir-red/5 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
                    Price
                  </p>
                  <p className="mt-1 text-3xl font-black text-rir-black">
                    {formatPrice(getRetailPrice(product))}
                    <span className="text-base font-normal text-rir-muted">
                      /unit
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
                    Ships To
                  </p>
                  <p className="mt-1 text-xl font-black text-rir-black">
                    Your Door
                    <span className="mt-1 block text-sm font-normal text-rir-muted">
                      Min. {getRetailMinQuantity(product)} unit
                      {getRetailMinQuantity(product) > 1 ? "s" : ""}
                    </span>
                  </p>
                </div>
              </div>

              <ProductPurchasePanel product={product} />

              {teamAlso && (
                <div className="mt-6 border border-rir-black/10 bg-rir-gray p-5">
                  <p className="text-sm font-semibold text-rir-black">
                    Need these for your whole team?
                  </p>
                  <p className="mt-1 text-sm text-rir-muted">
                    Team orders include custom logos, bulk pricing, and design
                    proofs.
                  </p>
                  <Link
                    href={JOURNEY.team.productPath(product.id)}
                    className="mt-3 inline-block text-sm font-bold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
                  >
                    View team wholesale options &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-rir-black/10 bg-rir-gray px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-xl font-black uppercase tracking-tight text-rir-black">
              More in {CATEGORY_LABELS[product.category]}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={JOURNEY.shop.productPath(item.id)}
                  className="group border border-rir-black/10 bg-white transition-colors hover:border-rir-red"
                >
                  <ProductImage
                    src={item.imageUrl}
                    alt={item.name}
                    aspect="4/3"
                  />
                  <div className="p-5">
                    <h3 className="font-bold uppercase tracking-wide text-rir-black">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-rir-muted">
                      {formatPrice(getRetailPrice(item))}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
