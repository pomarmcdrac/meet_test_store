import Link from "next/link";
import MiniCart from "./MiniCart";

export default function Header() {
  return (
    <header>
      <Link href="/products" className="nav-link">
        Products
      </Link>
      <div aria-live="polite">
        <MiniCart />
      </div>
    </header>
  );
}
