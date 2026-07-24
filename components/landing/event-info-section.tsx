import { Calendar, Clock, MapPin, Users } from "lucide-react"

const details = [
  { icon: Calendar, label: "Fecha", value: "Lunes 17 de Agosto, 2026 (feriado)" },
  { icon: Clock, label: "Duración", value: "Jornada completa · 9:00 a 20:00 hs" },
  { icon: MapPin, label: "Lugar", value: "Salón premium, Buenos Aires" },
  { icon: Users, label: "Modalidad", value: "Presencial · Cupos limitados" },
]

export function EventInfoSection() {
  return (
    <section id="evento" className="relative section-padding overflow-hidden">
      <div className="safe-area">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-plum uppercase tracking-[0.18em] mb-4">
            El evento
          </span>
          <h2 className="mobile-heading-md text-foreground text-balance">
            Un día. Una decisión.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/60 border border-stone/60 rounded-lg overflow-hidden">
          {details.map((item) => (
            <div key={item.label} className="bg-card p-6 sm:p-8 flex flex-col gap-3">
              <item.icon size={20} strokeWidth={1.5} className="text-plum" />
              <span className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-[0.14em]">
                {item.label}
              </span>
              <span className="text-sm sm:text-base text-foreground leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          La dirección exacta se envía al confirmar tu inscripción.
        </p>
      </div>
    </section>
  )
}
