import Link from "next/link";
import { EVENT } from "@/data/tickets";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(135deg, #faf8f5 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 70% 0%, rgba(201, 169, 98, 0.25), transparent),
              linear-gradient(180deg, #0a0a0a08, transparent)
            `,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.35em] text-accent opacity-0 [animation-delay:0.05s]">
            Москва · {EVENT.dateLabel}
          </p>
          <h1 className="animate-fade-up mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-ink opacity-0 [animation-delay:0.12s] sm:text-5xl lg:text-6xl">
            {EVENT.title}
          </h1>
          <p className="animate-fade-up mt-4 max-w-xl text-lg text-muted opacity-0 [animation-delay:0.2s]">
            {EVENT.tagline}
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4 opacity-0 [animation-delay:0.28s]">
            <Link
              href="/tickets"
              className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-paper transition hover:bg-ink/90"
            >
              Купить билеты
            </Link>
            <a
              href="#details"
              className="rounded-full border border-ink/20 px-8 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
            >
              Подробнее
            </a>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Вечер, который собирает индустрию
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              На сцене — дизайнеры из России и СНГ, live-сеты и бар от партнёров.
              Программа рассчитана на три часа: показ, пауза для общения и
              afterparty с диджеем.
            </p>
            <ul className="mt-8 space-y-4 text-ink">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-medium">Локация.</strong> {EVENT.venue}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-medium">Дресс-код.</strong> Smart casual,
                  приветствуется экспериментальный стиль.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-medium">Возраст.</strong> 18+
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Расписание
            </p>
            <dl className="mt-6 space-y-6">
              {[
                ["19:00", "Открытие, welcome drink"],
                ["19:30", "Показ коллекций"],
                ["20:45", "Перерыв, нетворкинг"],
                ["21:30", "Afterparty"],
              ].map(([time, label]) => (
                <div key={time} className="flex gap-6 border-b border-ink/5 pb-6 last:border-0 last:pb-0">
                  <dt className="w-16 shrink-0 font-serif text-xl text-ink">{time}</dt>
                  <dd className="text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink py-16 text-paper sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="font-serif text-3xl sm:text-4xl">
            {EVENT.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-paper/70">
            Билеты с QR-кодом придут на email сразу после оплаты (в демо — после
            отправки формы).
          </p>
          <Link
            href="/tickets"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-3 text-sm font-semibold text-ink transition hover:bg-accent/90"
          >
            Выбрать тариф
          </Link>
        </div>
      </section>
    </>
  );
}
