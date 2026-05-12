# ELISTA FASHION SHOW — сайт и билеты

В репозитории два уровня:

- **GitHub Pages** — публикуется **только статика**: точная копия [`elista_fashion_show_landing_video_in_50.html`](elista_fashion_show_landing_video_in_50.html) как `index.html` + `IMG_5690.MP4` рядом (см. [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)). **Next.js для Pages не собирается.**
- **Next.js** — опционально для локальной разработки (`npm run dev`) и раздела билетов.

## GitHub Pages (лендинг 1-в-1 с HTML-файлом)

В корне репозитория лежат **`index.html`** (байт-в-байт копия [`elista_fashion_show_landing_video_in_50.html`](elista_fashion_show_landing_video_in_50.html)), **`IMG_5690.MP4`** и **`.nojekyll`**, чтобы при публикации **из ветки** GitHub Pages отдавал статический лендинг, а не Jekyll/README.

1. **Settings → Pages** — либо **GitHub Actions** (workflow собирает папку `site/`), либо **Deploy from a branch** → корень `main` (тогда используются файлы в корне репозитория).
2. После деплоя: [https://gvbaydaeva-lang.github.io/fashion/](https://gvbaydaeva-lang.github.io/fashion/)

При правках исходного файла `elista_fashion_show_landing_video_in_50.html` синхронизируйте корень:

```bash
cp elista_fashion_show_landing_video_in_50.html index.html
cp public/media/IMG_5690.MP4 ./IMG_5690.MP4
```

Если открывается **README**, в корне нет `index.html` или не выбран корректный источник публикации / не обновлён деплой.

## Локальная разработка Next.js

```bash
npm install
npm run dev
```

С префиксом `/fashion`: [http://localhost:3000/fashion/](http://localhost:3000/fashion/)

## Сборка Next (папка `out/`)

```bash
export NEXT_PUBLIC_SITE_URL=https://gvbaydaeva-lang.github.io/fashion
npm run build
```

Используется для локального/альтернативного деплоя Next; **GitHub Pages в этом репозитории настроен на чистый HTML из workflow выше.**

## Медиа для лендинга

- Исходник видео в репозитории: `public/media/IMG_5690.MP4` (копируется в корень сайта как `IMG_5690.MP4` для деплоя).

## Продакшен

Платежи и бэкенд — отдельный хостинг; на GitHub Pages только статический лендинг из файла.
