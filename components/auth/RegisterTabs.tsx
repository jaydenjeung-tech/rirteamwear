"use client";

import Link from "next/link";
import { useState } from "react";
import { IndividualRegisterForm } from "@/components/auth/IndividualRegisterForm";
import { Button } from "@/components/ui/Button";

type RegisterTab = "individual" | "gym";

export function RegisterTabs() {
  const [tab, setTab] = useState<RegisterTab>("individual");

  return (
    <div className="w-full max-w-md border border-rir-black/10 bg-white p-8 sm:p-10">
      <h1 className="mb-2 text-2xl font-black uppercase tracking-tight text-rir-black">
        Create Account
      </h1>
      <p className="mb-6 text-sm text-rir-muted">
        Shop as an individual, or register your gym for custom team orders.
      </p>

      <div className="mb-8 flex border border-rir-black/10">
        <button
          type="button"
          onClick={() => setTab("individual")}
          className={`flex-1 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
            tab === "individual"
              ? "bg-rir-red text-white"
              : "bg-white text-rir-black hover:bg-rir-gray"
          }`}
        >
          Individual
        </button>
        <button
          type="button"
          onClick={() => setTab("gym")}
          className={`flex-1 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
            tab === "gym"
              ? "bg-rir-red text-white"
              : "bg-white text-rir-black hover:bg-rir-gray"
          }`}
        >
          Gym / Team
        </button>
      </div>

      {tab === "individual" ? (
        <IndividualRegisterForm />
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-rir-muted">
            Gym registration includes an approval process. Our team reviews each
            application before granting access to the team ordering portal.
          </p>
          <Button href="/contact" className="w-full">
            Apply for Gym Account
          </Button>
        </div>
      )}

      <Link
        href="/auth/login"
        className="mt-6 block text-center text-sm font-semibold uppercase tracking-wider text-rir-muted transition-colors hover:text-rir-red"
      >
        Already have an account? Log In
      </Link>
    </div>
  );
}
