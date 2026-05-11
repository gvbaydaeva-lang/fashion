"use client";

import type { TicketTier } from "@/data/tickets";
import { useCart } from "@/context/CartContext";

type Props = { tier: TicketTier };

export function TicketCard({ tier }: Props) {
  const { add, lines, setQty } = useCart();
  const line = lines.find((l) => l.tier.id === tier.id);
  const qty = line?.qty ?? 0;

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <article className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-ink">{tier.name}</h3>
          {tier.limited && (
            <p className="mt-1 text-xs uppercase tracking-wider text-accent">
              Лимитированный тариф
              {tier.remaining != null && ` · осталось ~${tier.remaining}`}
            </p>
          )}
        </div>
        <p className="font-serif text-2xl text-ink whitespace-nowrap">
          {formatPrice(tier.priceRub)}
        </p>
      </div>
      <p className="mt-3 text-sm text-muted">{tier.description}</p>
      <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-ink/80">
        {tier.perks.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {qty === 0 ? (
          <button
            type="button"
            onClick={() => add(tier.id, 1)}
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition hover:bg-ink/90"
          >
            В корзину
          </button>
        ) : (
          <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-2 py-1">
            <button
              type="button"
              aria-label="Меньше"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg hover:bg-ink/5"
              onClick={() => setQty(tier.id, qty - 1)}
            >
              −
            </button>
            <span className="min-w-[2rem] text-center text-sm font-medium">{qty}</span>
            <button
              type="button"
              aria-label="Больше"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg hover:bg-ink/5"
              onClick={() => setQty(tier.id, qty + 1)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
