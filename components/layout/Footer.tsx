import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

const footerLinks = {
  shop: [
    { href: "/products", label: "All Products" },
    { href: "/products?category=apparel", label: "Apparel" },
    { href: "/products?category=gear", label: "Gear" },
    { href: "/products?category=mouthguard", label: "Mouthguards" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Get a Quote" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-rir-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
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
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {BRAND.tagline} for martial arts gyms, dojos, and teams across
              the United States. Built on respect, crafted for performance.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-rir-red">
              Shop
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
