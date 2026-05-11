"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { createDemoOrder } from "@/lib/demoOrder";

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, totalRub, itemCount, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      email: String(form.get("email") || ""),
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      items: lines.map((l) => ({
        tierId: l.tier.id,
        qty: l.qty,
        priceRub: l.tier.priceRub,
      })),
      totalRub,
    };

    try {
      const result = createDemoOrder(payload);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      clear();
      router.push(`/success?order=${encodeURIComponent(result.orderId)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось оформить заказ");
    } finally {
      setLoading(false);
    }
  }

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(n);

  if (itemCount === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <h1 className="font-serif text-3xl text-ink">Корзина пуста</h1>
        <p className="mt-3 text-muted">
          Добавьте билеты на странице тарифов, затем вернитесь сюда.
        </p>
        <Link
          href="/tickets"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm font-semibold text-paper"
        >
          К билетам
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-ink">Оформление</h1>
      <p className="mt-2 text-muted">
        Демо-форма: оплата не списывается, номер заказа создаётся в браузере (статический
        сайт на GitHub Pages).
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <form
          onSubmit={onSubmit}
          className="space-y-6 lg:col-span-3"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink">
              Имя и фамилия
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none ring-accent/30 transition focus:ring-2"
              placeholder="Анна Иванова"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink">
              Email для билетов
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none ring-accent/30 transition focus:ring-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink">
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none ring-accent/30 transition focus:ring-2"
              placeholder="+7 900 000-00-00"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-muted">
            <input type="checkbox" required className="mt-1 rounded border-ink/20" />
            <span>
              Соглашаюсь с{" "}
              <Link href="/legal" className="text-ink underline underline-offset-2">
                условиями покупки
              </Link>{" "}
              и обработкой персональных данных.
            </span>
          </label>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-paper transition hover:bg-ink/90 disabled:opacity-60 lg:w-auto lg:px-12"
          >
            {loading ? "Отправка…" : "Подтвердить заказ (демо)"}
          </button>
        </form>

        <aside className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="font-serif text-xl text-ink">Ваш заказ</h2>
          <ul className="mt-4 space-y-3 border-b border-ink/10 pb-4">
            {lines.map((l) => (
              <li key={l.tier.id} className="flex justify-between text-sm">
                <span>
                  {l.tier.name} × {l.qty}
                </span>
                <span className="text-muted">
                  {formatPrice(l.tier.priceRub * l.qty)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex justify-between font-serif text-xl text-ink">
            <span>Итого</span>
            <span>{formatPrice(totalRub)}</span>
          </p>
          <p className="mt-4 text-xs text-muted">
            В продакшене здесь будет виджет банка или Stripe. Сейчас демо создаёт номер
            заказа без сервера.
          </p>
        </aside>
      </div>
    </div>
  );
}
