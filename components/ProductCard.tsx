import { Product } from "../type/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
