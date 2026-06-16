"use client";

import { useState, type FormEvent } from "react";
import { SPORT_TYPES } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-rir-red bg-rir-red/5 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-rir-black">
          Message Received
        </h3>
        <p className="text-sm text-rir-muted">
          Thanks for reaching out! We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
            placeholder="Coach John Smith"
          />
        </div>
        <div>
          <label htmlFor="gym" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
            Gym / Team Name
          </label>
          <input
            id="gym"
            name="gym"
            type="text"
            required
            className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
            placeholder="Elite BJJ Academy"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
            placeholder="coach@gym.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sport" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
          Sport Type
        </label>
        <select
          id="sport"
          name="sport"
          required
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
        >
          <option value="">Select a discipline</option>
          {SPORT_TYPES.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="product" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
        >
          <option value="">Select a product (optional)</option>
          <option value="apparel">Apparel (Tees, Rashguards, Hoodies)</option>
          <option value="gear">Gear (Gloves, Headgear, Mitts)</option>
          <option value="mouthguard">Mouthguards</option>
          <option value="accessories">Accessories</option>
          <option value="multiple">Multiple Products</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
          Estimated Quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
          placeholder="e.g. 50 rashguards, 100 t-shirts"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-rir-black/20 bg-white px-4 py-3 text-sm text-rir-black outline-none transition-colors focus:border-rir-red"
          placeholder="Tell us about your team, timeline, and any design requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-rir-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c] disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
