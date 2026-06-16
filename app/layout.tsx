import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "RiR Teamwear — Custom Martial Arts Gear",
    template: "%s | RiR Teamwear",
  },
  description:
    "Raise In Respect. Custom team apparel, gear, and mouthguards for martial arts gyms and dojos across the United States.",
  openGraph: {
    title: "RiR Teamwear — Custom Martial Arts Gear",
    description:
      "Raise In Respect. Custom martial arts gear for your team.",
    siteName: "RiR Teamwear",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
