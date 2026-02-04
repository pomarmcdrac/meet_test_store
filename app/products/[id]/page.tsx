import { getProductById } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return {
    title: `${product.title} - Meet Test Store`,
    description: product.description,
    alternates: {
      canonical: `https://localhost:3000/products/${product.id}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.description,
    price: product.price,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
    },
  };

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link href="/products">Back to products</Link>
      </nav>
      <div className="product-layout">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
