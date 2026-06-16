import { redirect } from "next/navigation";
import {
  getProductById,
  isRetailAvailable,
  isTeamAvailable,
} from "@/lib/products";

interface ProductRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function ProductRedirect({ params }: ProductRedirectProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    redirect("/shop");
  }

  if (isRetailAvailable(product)) {
    redirect(`/shop/${id}`);
  }

  if (isTeamAvailable(product)) {
    redirect(`/team/products/${id}`);
  }

  redirect("/shop");
}
