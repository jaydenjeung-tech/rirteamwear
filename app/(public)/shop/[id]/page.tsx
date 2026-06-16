import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopProductDetail } from "@/components/catalog/ShopProductDetail";
import {
  getProductById,
  getRetailProducts,
  isRetailAvailable,
} from "@/lib/products";

interface ShopProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getRetailProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ShopProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || !isRetailAvailable(product)) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — Shop`,
    description: product.description,
  };
}

export default async function ShopProductPage({ params }: ShopProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || !isRetailAvailable(product)) {
    notFound();
  }

  return <ShopProductDetail product={product} />;
}
