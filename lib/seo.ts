import { Metadata } from "next";
import { getProductById } from "./api";

export const SITE_NAME = "Meet Test Store";
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return {
    title: `${product.title} - ${SITE_NAME}`,
    description: product.description,
    alternates: {
      canonical: `${BASE_URL}/products/${product.id}`,
    },
  };
}
