# ELISTA FASHION SHOW — сайт и билеты

Next.js 14 (App Router), статический экспорт для **GitHub Pages** (`basePath: /fashion`).

## Локальная разработка

Сайт открывается с префиксом `/fashion`:

```bash
npm install
npm run dev
```

Адрес: [http://localhost:3000/fashion/](http://localhost:3000/fashion/)

## Сборка (`out/`)

```bash
export NEXT_PUBLIC_SITE_URL=https://gvbaydaeva-lang.github.io/fashion
npm run build
```

Результат в папке **`out/`** — её содержимое публикуется на GitHub Pages.

## GitHub Pages

1. **Settings → Pages → Build and deployment** — источник: **GitHub Actions** (не «Deploy from a branch» с README).
2. Запушьте ветку `main`: сработает workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), соберётся проект и задеплоится артефакт из `out/`.
3. Сайт: [https://gvbaydaeva-lang.github.io/fashion/](https://gvbaydaeva-lang.github.io/fashion/)

Для корректных абсолютных ссылок в метаданных при сборке в CI задано `NEXT_PUBLIC_SITE_URL`. Локально можно задать то же значение или `http://localhost:3000/fashion`.

## Медиа

Файлы в `public/media/` попадают в `out/media/` с префиксом `/fashion/media/...` в HTML.

## Структура

| Путь | Назначение |
|------|------------|
| `next.config.mjs` | `output: 'export'`, `basePath`, `assetPrefix`, `images.unoptimized` |
| `src/app/(elista)/page.tsx` | Лендинг (`assetUrl` для видео и постера) |
| `src/lib/assetUrl.ts` | Префикс для путей к `public/` |
| `src/lib/demoOrder.ts` | Демо-заказ без API (статический хостинг) |
| `public/.nojekyll` | Отключает Jekyll на GitHub Pages |

## Продакшен

Платежи и бэкенд — отдельный хостинг; на GitHub Pages только статика.
