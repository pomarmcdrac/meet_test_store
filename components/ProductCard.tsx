import { Product } from "../type/product";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import "../styles/global.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </Link>
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-card-actions">
        <Link href={`/products/${product.id}`} className="view-details">
          Details
        </Link>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
