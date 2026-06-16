"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

export function IndividualRegisterForm() {
  const router = useRouter();
  const { signUp, configured } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signUp(email, password, fullName);
    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/account"), 1500);
  }

  if (!configured) {
    return (
      <div className="border border-rir-black/10 bg-rir-gray p-6">
        <p className="text-sm text-rir-muted">
          Individual accounts require Supabase configuration. You can still shop
          as a guest — add items to your cart and check out without an account.
        </p>
        <Link
          href="/shop"
          className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-rir-red transition-colors hover:text-rir-black"
        >
          Shop now &rarr;
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="border border-rir-red bg-rir-red/5 p-6 text-center">
        <p className="font-bold uppercase tracking-wide text-rir-black">
          Account Created
        </p>
        <p className="mt-2 text-sm text-rir-muted">
          Redirecting to your account...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="border border-rir-red/30 bg-rir-red/5 p-3 text-sm text-rir-red">
          {error}
        </p>
      )}
      <div>
        <label
          htmlFor="fullName"
          className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm outline-none focus:border-rir-red"
          placeholder="Alex Johnson"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm outline-none focus:border-rir-red"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-rir-black"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm outline-none focus:border-rir-red"
          placeholder="At least 8 characters"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-rir-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c] disabled:opacity-60"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
