import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Register Your Gym",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-rir-gray px-4 py-20">
      <div className="w-full max-w-md border border-rir-black/10 bg-white p-8 sm:p-10">
        <h1 className="mb-2 text-2xl font-black uppercase tracking-tight text-rir-black">
          Register Your Gym
        </h1>
        <p className="mb-8 text-sm text-rir-muted">
          Online gym registration is coming soon. Contact us today to start your
          first custom order.
        </p>
        <div className="flex flex-col gap-3">
          <Button href="/contact" className="w-full">
            Get a Quote
          </Button>
          <Link
            href="/auth/login"
            className="text-center text-sm font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
          >
            Already registered? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
