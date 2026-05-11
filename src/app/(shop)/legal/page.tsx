export const metadata = {
  title: "Оферта — ELISTA FASHION SHOW",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-ink">Публичная оферта (шаблон)</h1>
      <p className="mt-4 text-sm text-muted">
        Замените этот текст на юридически выверенный документ перед приёмом реальных платежей.
      </p>
      <div className="prose prose-neutral mt-10 max-w-none text-muted">
        <ol className="list-decimal space-y-4 pl-5 text-ink/90">
          <li>
            Настоящий документ является демонстрационным шаблоном договора розничной
            купли-продажи билета на мероприятие ELISTA FASHION SHOW.
          </li>
          <li>
            Организатор оставляет за собой право изменять программу при сохранении
            общего формата мероприятия.
          </li>
          <li>
            Возврат денежных средств регулируется внутренними правилами организатора
            и законодательством РФ.
          </li>
          <li>
            Персональные данные обрабатываются в целях исполнения заказа и информирования
            о мероприятии.
          </li>
        </ol>
      </div>
    </div>
  );
}
