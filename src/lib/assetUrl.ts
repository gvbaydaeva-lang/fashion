/** Публичные файлы с учётом `basePath` (GitHub Pages). */
export function assetUrl(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalized}`;
}
