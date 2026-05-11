export type OrderItem = { tierId: string; qty: number; priceRub: number };

export type OrderPayload = {
  email: string;
  name: string;
  phone: string;
  items: OrderItem[];
  totalRub: number;
};

function randomId() {
  return `FN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

/** Демо-заказ без сервера (для статического экспорта на GitHub Pages). */
export function createDemoOrder(
  body: OrderPayload
): { ok: true; orderId: string } | { ok: false; error: string } {
  const { email, name, phone, items, totalRub } = body;
  if (!email || !name || !phone) {
    return { ok: false, error: "Заполните имя, email и телефон" };
  }
  if (!Array.isArray(items) || items.length === 0) {
    return { ok: false, error: "Корзина пуста" };
  }

  const computed = items.reduce(
    (s, i) => s + (i.priceRub || 0) * (i.qty || 0),
    0
  );
  if (typeof totalRub === "number" && Math.abs(totalRub - computed) > 1) {
    return { ok: false, error: "Сумма заказа не совпадает" };
  }

  return { ok: true, orderId: randomId() };
}
