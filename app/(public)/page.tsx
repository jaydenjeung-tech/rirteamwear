import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/products/ProductImage";
import { CATEGORIES } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";

const steps = [
  {
    number: "01",
    title: "Place Your Order",
    description:
      "Choose products, enter sizes and quantities, upload your logo, and submit your custom order online.",
  },
  {
    number: "02",
    title: "We Produce",
    description:
      "Our team reviews your design, sends a proof for approval, and coordinates production with our manufacturing partners.",
  },
  {
    number: "03",
    title: "Delivered to Your Team",
    description:
      "Your custom gear ships directly to your gym. Track every step from production to delivery.",
  },
];

const testimonials = [
  {
    quote:
      "RiR made it effortless to outfit our entire competition team. The rashguards looked incredible and held up through months of hard rolling.",
    name: "Coach Marcus T.",
    gym: "Elite BJJ Academy, Texas",
  },
  {
    quote:
      "From logo upload to delivery, the process was smooth. Our students wear their team gear with pride every single day.",
    name: "Sarah K.",
    gym: "Respect Dojo, California",
  },
  {
    quote:
      "The tiered pricing made bulk orders affordable for our gym. Quality gear, professional service — exactly what we needed.",
    name: "Coach David R.",
    gym: "Iron Fist MMA, Florida",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  shirt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M6.5 3h3l1.5 3h2L14.5 3h3l2 4v14H4.5V7l2-4z" />
    </svg>
  ),
  helmet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 2C7 2 3 5 3 9v2h18V9c0-4-4-7-9-7z" />
      <path d="M3 11v3c0 4 4 7 9 7s9-3 9-7v-3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="3" y="7" width="18" height="14" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  ),
};

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:min-h-[80vh]">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-rir-dark/75" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(226,75,74,0.15)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rir-red">
            RiR Teamwear
          </p>
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Raise In Respect
          </h1>
          <p className="mb-10 max-w-xl text-lg text-white/70 sm:text-xl">
            Custom Martial Arts Gear for Your Team
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Start Your Order
            </Button>
            <Button href="/products" variant="outline" size="lg">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
              What We Make
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
              Product Categories
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group border border-rir-black/10 bg-rir-gray p-6 transition-colors hover:border-rir-red hover:bg-white"
              >
                <div className="mb-4 text-rir-red transition-colors group-hover:text-rir-black">
                  {categoryIcons[cat.icon]}
                </div>
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-rir-black">
                  {cat.name}
                </h3>
                <p className="text-sm leading-relaxed text-rir-muted">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-rir-gray px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
              Simple Process
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative border-l-4 border-rir-red bg-white p-8">
                <span className="mb-4 block text-4xl font-black text-rir-red/20">
                  {step.number}
                </span>
                <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-rir-black">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-rir-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
                Popular Items
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <div
                key={product.id}
                className="group border border-rir-black/10 transition-colors hover:border-rir-red"
              >
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  aspect="square"
                />
                <div className="p-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    {product.category}
                  </p>
                  <h3 className="mb-2 font-bold uppercase tracking-wide text-rir-black">
                    {product.name}
                  </h3>
                  <p className="mb-3 text-sm text-rir-muted line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-sm font-semibold text-rir-black">
                    From ${product.basePrice}/unit
                    <span className="font-normal text-rir-muted">
                      {" "}
                      · Min. {product.minQuantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-rir-dark px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
              Trusted by Gyms
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              What Coaches Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border border-white/10 bg-white/5 p-8"
              >
                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-bold uppercase tracking-wide text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/40">{t.gym}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rir-red px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Ready to Gear Up Your Team?
          </h2>
          <p className="mb-8 text-white/80">
            Get a custom quote for your gym. No minimum commitment to inquire —
            we&apos;ll work with your budget and timeline.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" variant="inverse">
              Get a Quote
            </Button>
            <Button
              href="/auth/register"
              variant="outline"
              size="lg"
            >
              Register Your Gym
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
