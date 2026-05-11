import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashion Night — билеты на фэшн-мероприятие",
  description:
    "Показ коллекций, afterparty и нетворкинг. Купите билеты на Fashion Night онлайн.",
  openGraph: {
    title: "Fashion Night — билеты",
    description: "Весенний показ и вечеринка в Москве.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
