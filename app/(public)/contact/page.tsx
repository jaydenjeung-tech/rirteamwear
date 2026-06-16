import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a custom quote for your martial arts team. Contact RiR Teamwear today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-rir-dark px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Get In Touch
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-white/60">
            Ready to gear up your team? Fill out the form and we&apos;ll send
            you a custom quote within 1 business day.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-rir-black">
              Request a Quote
            </h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="border border-rir-black/10 bg-rir-gray p-8">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-rir-black">
                Contact Info
              </h2>
              <dl className="space-y-6">
                <div>
                  <dt className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm text-rir-black transition-colors hover:text-rir-red"
                    >
                      {BRAND.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                      className="text-sm text-rir-black transition-colors hover:text-rir-red"
                    >
                      {BRAND.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    Response Time
                  </dt>
                  <dd className="text-sm text-rir-muted">
                    Within 1 business day
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-bold uppercase tracking-widest text-rir-red">
                    Service Area
                  </dt>
                  <dd className="text-sm text-rir-muted">
                    United States — shipping nationwide
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-l-4 border-rir-red bg-white p-6">
              <h3 className="mb-2 font-bold uppercase tracking-wide text-rir-black">
                Factory Partners Welcome
              </h3>
              <p className="text-sm leading-relaxed text-rir-muted">
                Are you a manufacturer interested in partnering with RiR
                Teamwear? We&apos;d love to hear from you. Mention
                &ldquo;Manufacturing Partnership&rdquo; in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
