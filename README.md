# ELISTA FASHION SHOW — сайт и билеты

Демонстрационный проект на **Next.js 14** (App Router, TypeScript): лендинг **ELISTA FASHION SHOW** (вёрстка из `elista_fashion_show_landing_video_in_50.html`), раздел **билетов** (единый тариф 1500 ₽), корзина, оформление и API-заглушка заказа.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — лендинг. Билеты: [http://localhost:3000/tickets](http://localhost:3000/tickets).

Сборка:

```bash
npm run build
npm start
```

## Медиа

Положите файлы в `public/media/`:

- `IMG_5690.MP4` — видео в блоке «50+»
- `2026-05-11 17.36.42.jpg` — постер видео и превью для соцсетей (можно заменить своим снимком)

## Структура

| Путь | Назначение |
|------|------------|
| `src/app/(elista)/page.tsx` | Лендинг ELISTA |
| `src/styles/elista-landing.css` | Стили лендинга |
| `src/app/(shop)/tickets/page.tsx` | Выбор билета |
| `src/app/(shop)/checkout/page.tsx` | Оформление заказа |
| `src/app/(shop)/success/page.tsx` | Успешный заказ |
| `src/app/api/order/route.ts` | POST заказа (демо) |
| `src/data/tickets.ts` | Событие и тарифы |

## Продакшен

Платежи, БД/CRM, почта с билетом, юридические тексты на `/legal`.
