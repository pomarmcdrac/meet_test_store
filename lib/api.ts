import { Product } from "../type/product";

const API_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};

export async function getProducts(limit?: number): Promise<Product[]> {
  const params = limit ? `?limit=${limit}` : "";
  const url = `https://fakestoreapi.com/products${params}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache results for 1 hour
      headers: API_HEADERS,
    });

    if (!res.ok) {
      console.error(
        `Status: ${res.status} | Failed to fetch products from ${url}`,
      );
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error in getProducts:", error);
    throw error;
  }
}

export async function getProductById(id: number): Promise<Product> {
  const url = `https://fakestoreapi.com/products/${id}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: API_HEADERS,
    });

    if (!res.ok) {
      console.error(`Status: ${res.status} | Failed to fetch product ${id}`);
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Fetch error in getProductById for ID ${id}:`, error);
    throw error;
  }
}
