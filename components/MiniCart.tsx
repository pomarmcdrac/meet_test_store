"use client";

import { useCart } from "@/lib/cart";

export default function MiniCart() {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="mini-cart">
      <span>{totalItems} items</span>
      <span>Total: ${totalPrice.toFixed(2)}</span>
      {totalItems > 0 && (
        <button
          onClick={clearCart}
          className="clear-cart-btn"
          title="Clear Cart"
        >
          Clear cart
        </button>
      )}
    </div>
  );
}
