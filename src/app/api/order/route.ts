import { NextResponse } from "next/server";

/** In-memory store for demo only — resets on server restart */
const orders: string[] = [];

type OrderItem = { tierId: string; qty: number; priceRub: number };

type Body = {
  email?: string;
  name?: string;
  phone?: string;
  items?: OrderItem[];
  totalRub?: number;
};

function randomId() {
  return `FN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  const { email, name, phone, items, totalRub } = body;
  if (!email || !name || !phone) {
    return NextResponse.json(
      { error: "Заполните имя, email и телефон" },
      { status: 400 }
    );
  }
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Корзина пуста" }, { status: 400 });
  }

  const computed = items.reduce((s, i) => s + (i.priceRub || 0) * (i.qty || 0), 0);
  if (typeof totalRub === "number" && Math.abs(totalRub - computed) > 1) {
    return NextResponse.json({ error: "Сумма заказа не совпадает" }, { status: 400 });
  }

  const orderId = randomId();
  orders.push(orderId);

  return NextResponse.json({
    orderId,
    message: "Демо-заказ создан",
    received: { email, name, phone, items, totalRub: computed },
  });
}
