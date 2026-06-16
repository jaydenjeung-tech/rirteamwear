"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

export function LoginForm() {
  const router = useRouter();
  const { signIn, configured } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn(email, password);
    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    router.push("/account");
  }

  if (!configured) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-rir-muted">
          Login is not configured yet. You can shop as a guest and check out
          without an account.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-rir-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c]"
        >
          Shop Products
        </Link>
        <Link
          href="/contact"
          className="block text-center text-sm font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
        >
          Team orders — Get a Quote
        </Link>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-rir-black/20 bg-white px-4 py-3 text-sm outline-none focus:border-rir-red"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-rir-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c93d3c] disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
