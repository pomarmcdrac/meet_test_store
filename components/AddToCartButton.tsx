"use client";

import { useCart } from "@/lib/cart";
import { Product } from "@/type/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart(product)}>Add to cart</button>;
}
