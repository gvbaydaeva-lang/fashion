export type TicketTier = {
  id: string;
  name: string;
  priceRub: number;
  description: string;
  perks: string[];
  limited?: boolean;
  remaining?: number;
};

export const EVENT = {
  title: "ELISTA FASHION SHOW",
  subtitle: "Первый масштабный межрегиональный fashion-показ в Калмыкии.",
  date: "2026-05-23T19:00:00+03:00",
  dateLabel: "23 мая 2026 • Элиста",
  venue: "ВК «Агро-Тег», Элиста",
  tagline: "Мода, масштаб и новая энергия Калмыкии.",
} as const;

/** Единый тариф, как на лендинге */
export const TICKET_TIERS: TicketTier[] = [
  {
    id: "entrance",
    name: "Входной билет",
    priceRub: 1500,
    description:
      "Доступ к основной программе ELISTA FASHION SHOW: показы дизайнеров, медийная атмосфера, фото- и видеозоны, главный хедлайнер вечера.",
    perks: [
      "Показы дизайнеров",
      "Медийная атмосфера",
      "Фото- и видеозоны",
      "Главный хедлайнер вечера",
    ],
  },
];
