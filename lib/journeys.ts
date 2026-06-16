export type Journey = "shop" | "team";

export const JOURNEY = {
  shop: {
    id: "shop" as const,
    label: "Shop",
    tagline: "Buy for yourself",
    description: "Order 1 or more. Pay online. Ships to your door.",
    basePath: "/shop",
    catalogPath: "/shop",
    productPath: (id: string) => `/shop/${id}`,
    categoryPath: (category: string) => `/shop?category=${category}`,
  },
  team: {
    id: "team" as const,
    label: "For Teams",
    tagline: "Wholesale for gyms",
    description: "Bulk custom orders with your logo. Volume pricing.",
    basePath: "/team",
    catalogPath: "/team/products",
    productPath: (id: string) => `/team/products/${id}`,
    categoryPath: (category: string) => `/team/products?category=${category}`,
  },
} as const;

export function getJourneyFromPath(pathname: string): Journey | null {
  if (pathname.startsWith("/shop")) return "shop";
  if (pathname.startsWith("/team")) return "team";
  if (pathname === "/cart" || pathname.startsWith("/checkout")) return "shop";
  return null;
}
