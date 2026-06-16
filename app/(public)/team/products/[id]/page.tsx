import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamProductDetail } from "@/components/catalog/TeamProductDetail";
import {
  getProductById,
  getTeamProducts,
  isTeamAvailable,
} from "@/lib/products";

interface TeamProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getTeamProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: TeamProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || !isTeamAvailable(product)) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — Team`,
    description: product.description,
  };
}

export default async function TeamProductPage({
  params,
}: TeamProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || !isTeamAvailable(product)) {
    notFound();
  }

  return <TeamProductDetail product={product} />;
}
