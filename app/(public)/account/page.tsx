import type { Metadata } from "next";
import { AccountDashboard } from "@/components/account/AccountDashboard";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your RiR Teamwear account and orders.",
};

export default function AccountPage() {
  return (
    <>
      <section className="bg-rir-dark px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rir-red">
            Account
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            My Account
          </h1>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <AccountDashboard />
        </div>
      </section>
    </>
  );
}
