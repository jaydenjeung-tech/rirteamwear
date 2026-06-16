"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JOURNEY, getJourneyFromPath } from "@/lib/journeys";

export function JourneySwitcher() {
  const pathname = usePathname();
  const active = getJourneyFromPath(pathname);

  return (
    <div className="flex border border-rir-black/10">
      <Link
        href={JOURNEY.shop.catalogPath}
        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors sm:px-5 sm:text-sm ${
          active === "shop"
            ? "bg-rir-red text-white"
            : "bg-white text-rir-black hover:bg-rir-gray"
        }`}
      >
        Shop
      </Link>
      <Link
        href={JOURNEY.team.basePath}
        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors sm:px-5 sm:text-sm ${
          active === "team"
            ? "bg-rir-black text-white"
            : "bg-white text-rir-black hover:bg-rir-gray"
        }`}
      >
        For Teams
      </Link>
    </div>
  );
}
