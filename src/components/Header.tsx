"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/tickets", label: "Билеты" },
  { href: "/checkout", label: "Оформление" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.2em] text-ink sm:text-2xl"
        >
          ELISTA FASHION SHOW
        </Link>
        <nav className="flex items-center gap-1 sm:gap-6">
          {nav.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-2 py-1 text-sm font-medium transition-colors sm:px-3 ${
                  active
                    ? "bg-ink text-paper"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/checkout"
            className="ml-2 flex min-w-[2.5rem] items-center justify-center rounded-full border border-ink/20 bg-ink px-3 py-1.5 text-sm font-medium text-paper transition hover:bg-ink/90"
          >
            Корзина
            {itemCount > 0 && (
              <span className="ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs text-ink">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
