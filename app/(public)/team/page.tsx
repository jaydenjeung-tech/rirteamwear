import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JOURNEY } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "For Teams",
  description:
    "Custom wholesale martial arts gear for gyms and competition teams. Bulk pricing, custom logos, design proofs.",
};

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us what you need — products, sizes, quantities, and your timeline. No commitment to start.",
  },
  {
    number: "02",
    title: "Upload & Approve",
    description:
      "Send your gym logo. We create a design proof for your approval before anything goes to production.",
  },
  {
    number: "03",
    title: "We Produce & Ship",
    description:
      "Once approved, we coordinate manufacturing and ship your custom gear directly to your gym.",
  },
];

export default function TeamLandingPage() {
  return (
    <>
      <section className="bg-rir-dark px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-rir-red">
            Wholesale · Custom · Bulk
          </p>
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Team Orders
          </h1>
          <p className="text-lg leading-relaxed text-white/60">
            Built for gym owners and coaches ordering custom gear for their
            entire team. Upload your logo, get volume pricing, and approve every
            design before production.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/team/products" size="lg">
              Browse Team Catalog
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-rir-black/10 bg-rir-red/5 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-rir-black">
            <strong>Not ordering for a team?</strong> If you just need gear for
            yourself, our Shop is the right place.
          </p>
          <Link
            href={JOURNEY.shop.catalogPath}
            className="shrink-0 text-sm font-bold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
          >
            Go to Shop &rarr;
          </Link>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-rir-black">
              How Team Orders Work
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-l-4 border-rir-black bg-rir-gray p-8"
              >
                <span className="mb-4 block text-4xl font-black text-rir-black/10">
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

      <section className="bg-rir-gray px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-rir-black/10 bg-white p-8">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-rir-black">
                Shop vs. Team Orders
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-rir-red">Shop (Individual)</dt>
                  <dd className="mt-1 text-rir-muted">
                    Buy 1+ items for yourself. Pay online. Standard designs ship
                    fast.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-rir-black">Team (Wholesale)</dt>
                  <dd className="mt-1 text-rir-muted">
                    Bulk orders with your gym logo. Minimum quantities apply.
                    Volume discounts up to 30% off.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="border border-rir-black/10 bg-white p-8">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-rir-black">
                Who Team Orders Are For
              </h3>
              <ul className="space-y-2 text-sm text-rir-muted">
                <li>— Martial arts gym and dojo owners</li>
                <li>— Competition team coaches</li>
                <li>— School programs outfitting athletes</li>
                <li>— Anyone ordering 6+ custom pieces with a logo</li>
              </ul>
              <Button href="/auth/register" variant="ghost" className="mt-6">
                Register Your Gym
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
