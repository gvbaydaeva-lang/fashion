import type { Metadata } from "next";
import "@/styles/elista-landing.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gvbaydaeva-lang.github.io/fashion"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "ELISTA FASHION SHOW 2026",
  description:
    "Первый масштабный межрегиональный fashion-показ в Калмыкии. 23 мая 2026, Элиста.",
  openGraph: {
    title: "ELISTA FASHION SHOW 2026",
    description: "23 мая. Элиста. ВК «Агро-Тег».",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/media/2026-05-11%2017.36.42.jpg`,
      },
    ],
  },
};

export default function ElistaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
