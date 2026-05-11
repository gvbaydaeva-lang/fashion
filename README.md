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

Если открывается **README**, значит в репозитории включён **не тот** источник публикации.

1. Откройте **Settings → Pages → Build and deployment**.
2. В поле **Source** выберите **GitHub Actions** (не *Deploy from a branch* и не корень ветки `main` — там нет `index.html`, GitHub показывает README).
3. Убедитесь, что workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) есть в `main` и последний запуск завершился успешно (вкладка **Actions**).
4. Сайт после деплоя: [https://gvbaydaeva-lang.github.io/fashion/](https://gvbaydaeva-lang.github.io/fashion/) — в корне лежит **`index.html`** из папки **`out/`** сборки Next.js.

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
