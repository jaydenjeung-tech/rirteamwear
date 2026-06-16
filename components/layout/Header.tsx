"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CartButton } from "@/components/cart/CartButton";
import { JourneySwitcher } from "@/components/journey/JourneySwitcher";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/Button";
import { getJourneyFromPath } from "@/lib/journeys";

const secondaryLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const journey = getJourneyFromPath(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-rir-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="RiR Teamwear"
            width={120}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <JourneySwitcher />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-rir-red ${
                pathname === link.href ? "text-rir-red" : "text-rir-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <CartButton />
          <Link
            href={user ? "/account" : "/auth/login"}
            className="text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:text-rir-red"
          >
            {user ? "Account" : "Log In"}
          </Link>
          {journey === "team" && (
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          )}
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-rir-black transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-rir-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-rir-black transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-rir-black/10 bg-white px-4 py-4 md:hidden">
          <div className="mb-4">
            <JourneySwitcher />
          </div>
          <nav className="flex flex-col gap-4">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-semibold uppercase tracking-wider ${
                  pathname === link.href ? "text-rir-red" : "text-rir-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <CartButton />
            <Link
              href={user ? "/account" : "/auth/login"}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-rir-black"
            >
              {user ? "Account" : "Log In"}
            </Link>
            <Button href="/contact" size="sm" className="w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
