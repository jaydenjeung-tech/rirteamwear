import Link from "next/link";
import { JOURNEY, type Journey } from "@/lib/journeys";

interface JourneyBannerProps {
  current: Journey;
  productName?: string;
}

export function JourneyBanner({ current, productName }: JourneyBannerProps) {
  const other = current === "shop" ? JOURNEY.team : JOURNEY.shop;

  if (current === "shop") {
    return (
      <div className="border-b border-rir-black/10 bg-rir-black px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Ordering for your gym or competition team?
          </p>
          <Link
            href={other.basePath}
            className="text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-rir-red"
          >
            Switch to team wholesale &rarr;
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-rir-black/10 bg-rir-gray px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-rir-muted">
          {productName
            ? `Buying ${productName} for yourself?`
            : "Just need one for yourself?"}
        </p>
        <Link
          href={other.catalogPath}
          className="text-xs font-bold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
        >
          Shop individual instead &rarr;
        </Link>
      </div>
    </div>
  );
}
