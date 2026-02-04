import { useState } from "react";

export function CartContext() {
  const [cart, setCart] = useState([]);
}

export function CartProvider({ children }: { children: React.ReactNode }) {}
