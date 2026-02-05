import { Product } from "../type/product";

const API_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function getProducts(limit?: number): Promise<Product[]> {
  const params = limit ? `?limit=${limit}` : "";
  const url = `https://fakestoreapi.com/products${params}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: API_HEADERS,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function getProductById(id: number): Promise<Product> {
  const url = `https://fakestoreapi.com/products/${id}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: API_HEADERS,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}
