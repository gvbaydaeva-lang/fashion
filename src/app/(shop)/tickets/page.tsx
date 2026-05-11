import Link from "next/link";
import { TicketCard } from "@/components/TicketCard";
import { EVENT, TICKET_TIERS } from "@/data/tickets";

export const metadata = {
  title: "Билеты — ELISTA FASHION SHOW",
  description: "Единый входной билет на ELISTA FASHION SHOW 2026.",
};

export default function TicketsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {EVENT.dateLabel}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">Билеты</h1>
        <p className="mt-3 text-muted">
          Все цены с учётом сервисного сбора. Возврат по правилам оферты до даты
          мероприятия.
        </p>
      </div>

      <div className="mt-12 grid max-w-xl gap-6 md:grid-cols-1">
        {TICKET_TIERS.map((tier) => (
          <TicketCard key={tier.id} tier={tier} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted">
        Уже выбрали? Перейдите к{" "}
        <Link href="/checkout" className="font-medium text-ink underline-offset-4 hover:underline">
          оформлению заказа
        </Link>
        .
      </p>
    </div>
  );
}
