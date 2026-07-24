"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2, Lock } from "lucide-react"

const TICKET_PRICE_DISPLAY =
  process.env.NEXT_PUBLIC_TICKET_PRICE_DISPLAY ?? "$180.000"

const includes = [
  "Jornada completa presencial (9:00 a 20:00 hs)",
  "Materiales de trabajo impresos",
  "Coffee breaks y almuerzo",
  "Acceso a la comunidad Estás Para Más",
]

type PaymentStatus = "idle" | "loading" | "error"

export function CheckoutSection() {
  const [status, setStatus] = useState<PaymentStatus>("idle")
  const [paymentResult, setPaymentResult] = useState<string | null>(null)

  useEffect(() => {
    const result = new URLSearchParams(window.location.search).get("pago")
    if (result) setPaymentResult(result)
  }, [])

  const handleCheckout = async () => {
    setStatus("loading")
    try {
      const res = await fetch("/api/checkout", { method: "POST" })
      const data = await res.json()
      if (res.ok && data.init_point) {
        window.location.href = data.init_point
        return
      }
      const fallback = process.env.NEXT_PUBLIC_MP_PAYMENT_LINK
      if (fallback) {
        window.location.href = fallback
        return
      }
      setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="inscripcion" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-ice" />
      <div className="relative safe-area">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-plum uppercase tracking-[0.18em] mb-4">
            Inscripción
          </span>
          <h2 className="mobile-heading-md text-foreground text-balance mb-4">
            Reservá tu lugar.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            La decisión más importante no se toma el día del evento. Se toma hoy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {paymentResult === "exitoso" && (
            <div className="mb-6 p-5 rounded-lg bg-card border border-plum/30 text-center">
              <p className="font-serif text-xl text-plum-deep mb-1">Tu lugar está reservado.</p>
              <p className="text-sm text-muted-foreground">
                Vas a recibir la confirmación y los detalles por email.
              </p>
            </div>
          )}
          {paymentResult === "pendiente" && (
            <div className="mb-6 p-5 rounded-lg bg-card border border-stone text-center">
              <p className="text-sm text-muted-foreground">
                Tu pago está en proceso. Te avisamos por email apenas se acredite.
              </p>
            </div>
          )}
          {paymentResult === "error" && (
            <div className="mb-6 p-5 rounded-lg bg-card border border-destructive/40 text-center">
              <p className="text-sm text-muted-foreground">
                El pago no pudo completarse. Podés intentarlo de nuevo cuando quieras.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 rounded-lg border border-stone/70 overflow-hidden bg-card">
            {/* Venue image */}
            <div className="relative min-h-[220px] md:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=1000&q=80"
                alt="Salón premium, Buenos Aires"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-charcoal/10" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="block text-[11px] font-medium text-lavender-pale/80 uppercase tracking-[0.14em] mb-1">
                  El lugar
                </span>
                <span className="block text-sm sm:text-base text-soft-white">
                  Salón premium, Buenos Aires
                </span>
              </div>
            </div>

            {/* Price card */}
            <div className="p-8 sm:p-10">
              <div className="text-center md:text-left mb-8">
                <span className="block text-[11px] font-medium text-muted-foreground/70 uppercase tracking-[0.16em] mb-3">
                  Entrada · Edición Buenos Aires
                </span>
                <div className="font-serif text-5xl sm:text-6xl font-medium text-foreground">
                  {TICKET_PRICE_DISPLAY}
                </div>
                <span className="block text-xs text-muted-foreground mt-2">
                  ARS · hasta 6 cuotas con Mercado Pago
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} strokeWidth={2} className="text-plum shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleCheckout}
                disabled={status === "loading"}
                className="w-full h-14 bg-plum hover:bg-plum-deep text-soft-white text-base transition-colors duration-500"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" />
                    Preparando tu pago…
                  </span>
                ) : (
                  "Quiero vivir esta experiencia"
                )}
              </Button>

              {status === "error" && (
                <p className="mt-4 text-center text-sm text-destructive">
                  No pudimos iniciar el pago. Escribinos por{" "}
                  <a
                    href="https://wa.me/5493541694363?text=Hola!%20Quiero%20reservar%20mi%20lugar%20en%20Estás%20Para%20Más"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-plum"
                  >
                    WhatsApp
                  </a>{" "}
                  y lo resolvemos juntas.
                </p>
              )}

              <p className="mt-6 flex items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground/80">
                <Lock size={12} strokeWidth={1.5} />
                Pago seguro procesado por Mercado Pago
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Cupos limitados por diseño de la experiencia.
          </p>
        </div>
      </div>
    </section>
  )
}
