"use client";

import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard key={product.id} product={product} />
          <Link href={`/products/${product.id}`}>See more details</Link>
        </div>
      ))}
    </div>
  );
}
