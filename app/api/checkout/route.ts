import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const token = process.env.MP_ACCESS_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: "Mercado Pago no está configurado (falta MP_ACCESS_TOKEN)." },
      { status: 503 },
    )
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000"
  const price = Number(process.env.MP_TICKET_PRICE ?? 180000)

  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          id: "epm-entrada-bsas-2026",
          title: "Estás Para Más · Entrada · Edición Buenos Aires",
          quantity: 1,
          unit_price: price,
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `${origin}/?pago=exitoso#inscripcion`,
        failure: `${origin}/?pago=error#inscripcion`,
        pending: `${origin}/?pago=pendiente#inscripcion`,
      },
      auto_return: "approved",
      statement_descriptor: "ESTAS PARA MAS",
    }),
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: "No se pudo crear la preferencia de pago." },
      { status: 502 },
    )
  }

  const preference = await res.json()
  return NextResponse.json({ init_point: preference.init_point })
}
