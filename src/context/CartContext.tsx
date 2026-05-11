"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { TICKET_TIERS, type TicketTier } from "@/data/tickets";

export type CartLine = {
  tier: TicketTier;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  add: (tierId: string, qty?: number) => void;
  setQty: (tierId: string, qty: number) => void;
  remove: (tierId: string) => void;
  clear: () => void;
  totalRub: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = useCallback((tierId: string, qty = 1) => {
    const tier = TICKET_TIERS.find((t) => t.id === tierId);
    if (!tier) return;
    setLines((prev) => {
      const existing = prev.find((l) => l.tier.id === tierId);
      if (existing) {
        return prev.map((l) =>
          l.tier.id === tierId ? { ...l, qty: l.qty + qty } : l
        );
      }
      return [...prev, { tier, qty }];
    });
  }, []);

  const setQty = useCallback((tierId: string, qty: number) => {
    if (qty <= 0) {
      setLines((prev) => prev.filter((l) => l.tier.id !== tierId));
      return;
    }
    setLines((prev) =>
      prev.map((l) => (l.tier.id === tierId ? { ...l, qty } : l))
    );
  }, []);

  const remove = useCallback((tierId: string) => {
    setLines((prev) => prev.filter((l) => l.tier.id !== tierId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const { totalRub, itemCount } = useMemo(() => {
    const totalRub = lines.reduce(
      (sum, l) => sum + l.tier.priceRub * l.qty,
      0
    );
    const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);
    return { totalRub, itemCount };
  }, [lines]);

  const value = useMemo(
    () => ({
      lines,
      add,
      setQty,
      remove,
      clear,
      totalRub,
      itemCount,
    }),
    [lines, add, setQty, remove, clear, totalRub, itemCount]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
