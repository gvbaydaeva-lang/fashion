import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/fashion"
  ),
  title: "ELISTA FASHION SHOW 2026",
  description:
    "Первый масштабный межрегиональный fashion-показ в Калмыкии. 23 мая 2026, Элиста.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
