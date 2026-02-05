import { getProducts } from "@/lib/api";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import "@/styles/global.css";

export const dynamic = "force-dynamic";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const limit = 3;

  const allProducts = await getProducts();
  const displayProducts = allProducts.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
  );

  if (!allProducts) {
    return <div className="container">No products found</div>;
  }

  return (
    <div className="container">
      <h1 className="products-title">Products</h1>
      <div className="products-grid">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <Link
          href={`/products?page=${currentPage - 1}`}
          className={`page-btn ${currentPage <= 1 ? "disabled" : ""}`}
        >
          &lt;
        </Link>
        <span>{currentPage}</span>
        <Link
          href={`/products?page=${currentPage + 1}`}
          className={`page-btn ${currentPage >= Math.ceil(allProducts.length / limit) ? "disabled" : ""}`}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}
