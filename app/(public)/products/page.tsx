import { redirect } from "next/navigation";

interface ProductsRedirectProps {
  searchParams: Promise<{ category?: string; shop?: string }>;
}

export default async function ProductsRedirect({
  searchParams,
}: ProductsRedirectProps) {
  const { category, shop } = await searchParams;

  if (shop === "retail") {
    const params = category ? `?category=${category}` : "";
    redirect(`/shop${params}`);
  }

  const params = category ? `?category=${category}` : "";
  redirect(`/team/products${params}`);
}
