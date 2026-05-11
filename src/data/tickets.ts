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
  title: "FASHION NIGHT",
  subtitle: "Весенний показ и afterparty",
  date: "2026-06-14T19:00:00+03:00",
  dateLabel: "14 июня 2026, 19:00",
  venue: "Loft «Серебряный», Москва, ул. Рочдельская, 15",
  tagline: "Показ коллекций, музыка, бар и нетворкинг в одном вечере.",
} as const;

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "standard",
    name: "Standard",
    priceRub: 3500,
    description: "Вход на показ и welcome drink.",
    perks: ["Место в зале", "Welcome drink", "Доступ к бару"],
  },
  {
    id: "vip",
    name: "VIP",
    priceRub: 8900,
    description: "Лучшие места и встреча с дизайнерами.",
    perks: ["Ряды 1–3", "2 напитка", "Meet & greet", "Подарочный lookbook"],
    limited: true,
    remaining: 42,
  },
  {
    id: "backstage",
    name: "Backstage",
    priceRub: 15000,
    description: "Закулисье, фото и эксклюзивный сет.",
    perks: ["Backstage tour", "Фото с моделями", "Private lounge", "Limited merch"],
    limited: true,
    remaining: 12,
  },
];
