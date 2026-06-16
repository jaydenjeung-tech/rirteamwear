import Image from "next/image";
import Link from "next/link";
import { JourneyBanner } from "@/components/journey/JourneyBanner";
import { ProductImage } from "@/components/products/ProductImage";
import { Button } from "@/components/ui/Button";
import { JOURNEY } from "@/lib/journeys";
import { formatPrice, VOLUME_TIERS } from "@/lib/pricing";
import {
  CATEGORY_LABELS,
  getProductFeatures,
  getTeamRelatedProducts,
  isRetailAvailable,
  type Product,
} from "@/lib/products";

interface TeamProductDetailProps {
  product: Product;
}

export function TeamProductDetail({ product }: TeamProductDetailProps) {
  const related = getTeamRelatedProducts(product);
  const features = getProductFeatures(product);
  const retailAlso = isRetailAvailable(product);

  return (
    <>
      {retailAlso && (
        <JourneyBanner current="team" productName={product.name} />
      )}

      <section className="border-b border-rir-black/10 bg-rir-dark px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
            <Link href="/team" className="transition-colors hover:text-rir-red">
              For Teams
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/team/products"
              className="transition-colors hover:text-rir-red"
            >
              Catalog
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={JOURNEY.team.categoryPath(product.category)}
              className="transition-colors hover:text-rir-red"
            >
              {CATEGORY_LABELS[product.category]}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{product.name}</span>
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
                Team Wholesale · {CATEGORY_LABELS[product.category]}
              </p>
              <h1 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-rir-muted">
                {product.description}
              </p>

              <div className="mt-8 grid gap-6 border border-rir-black/10 bg-rir-gray p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
                    Wholesale From
                  </p>
                  <p className="mt-1 text-3xl font-black text-rir-black">
                    {formatPrice(product.basePrice)}
                    <span className="text-base font-normal text-rir-muted">
                      /unit
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-rir-muted">
                    Minimum Order
                  </p>
                  <p className="mt-1 text-3xl font-black text-rir-black">
                    {product.minQuantity}
                    <span className="text-base font-normal text-rir-muted">
                      {" "}
                      units
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rir-muted">
                  Available Sizes
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="border border-rir-black/10 bg-white px-3 py-1.5 text-sm font-medium text-rir-black"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Request a Quote
                </Button>
                <Button href="/auth/register" variant="ghost" size="lg">
                  Register Your Gym
                </Button>
              </div>

              {retailAlso && (
                <div className="mt-6 border border-rir-black/10 bg-white p-5">
                  <p className="text-sm font-semibold text-rir-black">
                    Only need one for yourself?
                  </p>
                  <Link
                    href={JOURNEY.shop.productPath(product.id)}
                    className="mt-2 inline-block text-sm font-bold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
                  >
                    Buy individually in the Shop &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rir-black/10 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-rir-black">
                Volume Pricing
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-rir-muted">
                The more your team orders, the more you save. Per-unit prices for{" "}
                {product.name.toLowerCase()}:
              </p>
              <div className="divide-y divide-rir-black/10 border border-rir-black/10">
                {VOLUME_TIERS.map((tier) => {
                  const unitPrice = product.basePrice * tier.multiplier;
                  const qtyLabel =
                    tier.maxQty === null
                      ? `${tier.minQty}+ units`
                      : `${tier.minQty}–${tier.maxQty} units`;

                  return (
                    <div
                      key={tier.minQty}
                      className="flex items-center justify-between bg-rir-gray/50 px-4 py-3 sm:px-6"
                    >
                      <div>
                        <p className="text-sm font-semibold text-rir-black">
                          {qtyLabel}
                        </p>
                        <p className="text-xs text-rir-muted">{tier.discount}</p>
                      </div>
                      <p className="text-lg font-bold text-rir-red">
                        {formatPrice(unitPrice)}
                        <span className="text-sm font-normal text-rir-muted">
                          /unit
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-rir-black">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-rir-muted">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rir-red"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-4 border-rir-black bg-rir-gray p-6">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-rir-black">
                  Team Order Process
                </h3>
                <p className="text-sm leading-relaxed text-rir-muted">
                  Request a quote, upload your logo, approve the design proof,
                  and we handle production. Typical turnaround is 3–4 weeks.
                </p>
                <Link
                  href="/team"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
                >
                  How team orders work &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-rir-black/10 bg-rir-gray px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-xl font-black uppercase tracking-tight text-rir-black">
              Related Team Products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={JOURNEY.team.productPath(item.id)}
                  className="group border border-rir-black/10 bg-white transition-colors hover:border-rir-black"
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
                      From {formatPrice(item.basePrice)}/unit · Min.{" "}
                      {item.minQuantity}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-rir-dark px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            Ready to Outfit Your Team?
          </h2>
          <p className="mb-8 text-white/60">
            Tell us your quantities and timeline. We&apos;ll send a custom quote
            within 1 business day.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a Quote
            </Button>
            <Button href="/team/products" variant="outline" size="lg">
              Browse Team Catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
