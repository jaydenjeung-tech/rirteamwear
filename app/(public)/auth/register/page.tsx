import type { Metadata } from "next";
import { RegisterTabs } from "@/components/auth/RegisterTabs";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create an individual account to shop, or register your gym for custom team orders.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-rir-gray px-4 py-20">
      <RegisterTabs />
    </div>
  );
}
