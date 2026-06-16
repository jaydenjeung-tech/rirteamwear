import Link from "next/link";
import { JOURNEY } from "@/lib/journeys";

export function JourneyPathCards() {
  return (
    <section className="bg-rir-gray px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            How Can We Help?
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-rir-muted">
            Two ways to order — pick the one that fits you. No overlap, no
            confusion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href={JOURNEY.shop.catalogPath}
            className="group border-2 border-rir-red bg-white p-8 transition-colors hover:bg-rir-red"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red group-hover:text-white/80">
              {JOURNEY.shop.tagline}
            </p>
            <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-rir-black group-hover:text-white">
              {JOURNEY.shop.label}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-rir-muted group-hover:text-white/80">
              {JOURNEY.shop.description} Apparel, mouthguards, accessories — buy
              online with your card.
            </p>
            <ul className="mb-8 space-y-2 text-sm text-rir-black group-hover:text-white/90">
              <li className="flex gap-2">
                <span className="text-rir-red group-hover:text-white">✓</span>
                No minimum — order 1 or more
              </li>
              <li className="flex gap-2">
                <span className="text-rir-red group-hover:text-white">✓</span>
                Add to cart &amp; pay online
              </li>
              <li className="flex gap-2">
                <span className="text-rir-red group-hover:text-white">✓</span>
                Ships to your home
              </li>
            </ul>
            <span className="inline-block bg-rir-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white group-hover:bg-white group-hover:text-rir-red">
              Shop Now
            </span>
          </Link>

          <Link
            href={JOURNEY.team.basePath}
            className="group border-2 border-rir-black bg-rir-dark p-8 transition-colors hover:border-rir-red"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
              {JOURNEY.team.tagline}
            </p>
            <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-white">
              {JOURNEY.team.label}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              {JOURNEY.team.description} Custom logo on every item. Built for
              gyms, dojos, and competition teams.
            </p>
            <ul className="mb-8 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-rir-red">✓</span>
                Bulk orders with volume discounts
              </li>
              <li className="flex gap-2">
                <span className="text-rir-red">✓</span>
                Upload your gym logo
              </li>
              <li className="flex gap-2">
                <span className="text-rir-red">✓</span>
                Design proof before production
              </li>
            </ul>
            <span className="inline-block border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors group-hover:bg-rir-red group-hover:border-rir-red">
              Team Orders
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
