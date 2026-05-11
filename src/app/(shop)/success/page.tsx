import Link from "next/link";

type Props = { searchParams: { order?: string } };

export default function SuccessPage({ searchParams }: Props) {
  const orderId = searchParams.order ?? "—";

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-2xl">
        ✓
      </div>
      <h1 className="mt-6 font-serif text-3xl text-ink">Заказ принят</h1>
      <p className="mt-3 text-muted">
        Номер заказа:{" "}
        <span className="font-mono text-sm text-ink">{orderId}</span>
      </p>
      <p className="mt-4 text-sm text-muted">
        В демо-режиме письмо с QR не отправляется. Подключите почтовый сервис и
        платёжного провайдера для продакшена.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full border border-ink/20 px-8 py-3 text-sm font-semibold text-ink hover:border-ink/40"
      >
        На главную
      </Link>
    </div>
  );
}
