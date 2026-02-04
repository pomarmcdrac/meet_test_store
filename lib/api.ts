import { Product } from "../type/product";

export async function getProducts(limit?: number): Promise<Product[]> {
  const params = limit ? `?limit=${limit}` : "";
  const res = await fetch(`https://fakestoreapi.com/products${params}`);

  return res.json();
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
}
