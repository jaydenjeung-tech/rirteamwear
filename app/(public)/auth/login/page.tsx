import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In",
  description: "Sign in to your RiR Teamwear account.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-rir-gray px-4 py-20">
      <div className="w-full max-w-md border border-rir-black/10 bg-white p-8 sm:p-10">
        <h1 className="mb-2 text-2xl font-black uppercase tracking-tight text-rir-black">
          Log In
        </h1>
        <p className="mb-8 text-sm text-rir-muted">
          Sign in to track orders and check out faster.
        </p>
        <LoginForm />
        <Link
          href="/auth/register"
          className="mt-6 block text-center text-sm font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
        >
          Don&apos;t have an account? Create one
        </Link>
        <Link
          href="/contact"
          className="mt-3 block text-center text-xs font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
        >
          Gym / team orders — Get a Quote
        </Link>
      </div>
    </div>
  );
}
