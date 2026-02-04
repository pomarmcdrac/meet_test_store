import { Product } from "../type/product";
import Link from "next/link";
import Image from "next/image";
import "../styles/global.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <Link href={`/products/${product.id}`} className="view-details">
        View details
      </Link>
    </div>
  );
}
