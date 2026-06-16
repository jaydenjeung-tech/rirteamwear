import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

const footerLinks = {
  shop: [
    { href: "/shop", label: "Shop All" },
    { href: "/shop?category=apparel", label: "Apparel" },
    { href: "/shop?category=mouthguard", label: "Mouthguards" },
    { href: "/shop?category=accessories", label: "Accessories" },
    { href: "/cart", label: "Cart" },
  ],
  team: [
    { href: "/team", label: "Team Orders" },
    { href: "/team/products", label: "Team Catalog" },
    { href: "/team/products?category=apparel", label: "Team Apparel" },
    { href: "/team/products?category=gear", label: "Team Gear" },
    { href: "/contact", label: "Get a Quote" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/auth/register", label: "Create Account" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-rir-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="RiR Teamwear"
              width={140}
              height={56}
              className="mb-4 h-14 w-auto"
            />
            <p className="mb-2 text-lg font-bold uppercase tracking-wide">
              {BRAND.philosophy}
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Shop for yourself or outfit your entire team. Two clear paths, one
              brand built on respect.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-rir-red">
              Shop · Individual
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              For Teams · Wholesale
            </h3>
            <ul className="space-y-2">
              {footerLinks.team.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-rir-red">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <span>{BRAND.email}</span>
            <span>{BRAND.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
