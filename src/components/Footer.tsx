import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-serif text-lg tracking-widest">FASHION NIGHT</p>
          <p className="mt-2 max-w-xs text-sm text-paper/60">
            Независимый фэшн-ивент. Билеты продаются через официальный сайт.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Контакты
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li>
              <a href="mailto:tickets@fashionnight.example" className="hover:text-paper">
                tickets@fashionnight.example
              </a>
            </li>
            <li>+7 (495) 000-00-00</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Документы
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/legal" className="text-paper/70 hover:text-paper">
                Оферта и политика
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} Fashion Night. Демо-репозиторий.
      </div>
    </footer>
  );
}
