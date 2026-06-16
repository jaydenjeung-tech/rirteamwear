import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind RiR Teamwear — Raise In Respect. Custom martial arts gear built on discipline, respect, and performance.",
};

const values = [
  {
    title: "Respect",
    description:
      "Respect is the foundation of every martial art. We carry that philosophy into every product we make and every relationship we build.",
  },
  {
    title: "Quality",
    description:
      "Your team deserves gear that performs as hard as they train. We partner with top manufacturers to deliver durable, professional-grade products.",
  },
  {
    title: "Community",
    description:
      "We exist to serve martial arts gyms and teams. Your success on and off the mats is our mission.",
  },
  {
    title: "Simplicity",
    description:
      "Ordering custom gear shouldn't be complicated. Our platform makes it easy to upload designs, track orders, and reorder.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-rir-dark px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-rir-red">
            Our Story
          </p>
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Raise In Respect
          </h1>
          <p className="text-lg leading-relaxed text-white/60">
            RiR Teamwear was born from the mats — built by people who understand
            that martial arts is more than sport. It&apos;s discipline, community,
            and mutual respect.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-rir-black">
              Built for Gyms,<br />By People Who Get It
            </h2>
            <div className="space-y-4 text-rir-muted leading-relaxed">
              <p>
                Every gym owner knows the struggle: finding reliable custom gear
                at fair prices, managing bulk orders across sizes, chasing down
                proofs, and hoping everything arrives before competition season.
              </p>
              <p>
                RiR Teamwear exists to solve that. We built a platform where gym
                owners and coaches can browse products, upload their logo, enter
                quantities by size, and track their order from design review all
                the way to delivery — without endless email chains.
              </p>
              <p>
                The name RiR — <strong className="text-rir-black">Raise In Respect</strong> — 
                reflects the core value of martial arts culture. On the mats, you
                bow before you train. You respect your partner, your coach, and
                yourself. That same respect drives how we treat every customer
                and every order.
              </p>
            </div>
          </div>
          <div className="relative aspect-square bg-rir-gray">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <span className="mb-2 text-8xl font-black text-rir-red/20">RiR</span>
              <span className="text-sm font-bold uppercase tracking-widest text-rir-black/40">
                Custom Martial Arts Gear
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-rir-red" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-rir-gray px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
              What We Stand For
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-l-4 border-rir-red bg-white p-8"
              >
                <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-rir-black">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-rir-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            All Disciplines
          </p>
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
            We Serve Every Martial Art
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "BJJ",
              "MMA",
              "Karate",
              "Taekwondo",
              "Muay Thai",
              "Boxing",
              "Judo",
              "Wrestling",
              "Krav Maga",
            ].map((sport) => (
              <span
                key={sport}
                className="border border-rir-black/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-rir-black"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rir-black/10 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-rir-black">
            Partner With RiR
          </h2>
          <p className="mb-8 text-rir-muted">
            Whether you&apos;re outfitting a competition team or stocking your pro shop,
            we&apos;re ready to help.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/team" size="lg">
              Team Orders
            </Button>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-rir-black transition-colors hover:text-rir-red"
            >
              Shop Individual
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
