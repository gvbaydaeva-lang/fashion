# Fashion Night — продажа билетов

Демонстрационный сайт на **Next.js 14** (App Router, TypeScript, Tailwind): лендинг фэшн-мероприятия, выбор тарифов, корзина в React Context, форма оформления и API-заглушка заказа.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Сборка продакшена:

```bash
npm run build
npm start
```

## Структура

| Путь | Назначение |
|------|------------|
| `src/app/page.tsx` | Главная: герой, детали, расписание |
| `src/app/tickets/page.tsx` | Тарифы билетов |
| `src/app/checkout/page.tsx` | Оформление и отправка заказа |
| `src/app/success/page.tsx` | Страница после успешного заказа |
| `src/app/api/order/route.ts` | POST: валидация и номер заказа (без БД) |
| `src/data/tickets.ts` | Данные события и тарифов |
| `src/context/CartContext.tsx` | Корзина на клиенте |

## Что подключить для продакшена

- Платёжный провайдер (ЮKassa, Stripe и т.д.).
- База данных или CRM для заказов вместо in-memory в API.
- Отправка email с QR/билетом (Resend, SendGrid, Unisender).
- Юридические тексты вместо шаблона на `/legal`.

## Лицензия

Используйте код свободно для своего проекта.
