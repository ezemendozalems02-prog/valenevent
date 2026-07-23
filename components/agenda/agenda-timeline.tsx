"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Heart, Wind, Coffee, Music, Sparkles, Compass, Sun } from "lucide-react"

const schedule = [
  {
    time: "Mañana",
    icon: Heart,
    title: "Bienvenida",
    description: "Llegás a un espacio cuidado hasta el último detalle. Recepción, café y un ambiente que desde el primer minuto te invita a respirar más profundo.",
    duration: "Apertura",
  },
  {
    time: "Primer bloque",
    icon: Wind,
    title: "La Vida Correcta",
    description: "El punto de partida: ponerle nombre a esa vida que funciona, que cumple, que todos aprueban, pero que no termina de representarte.",
    duration: "Acto I",
  },
  {
    time: "Segundo bloque",
    icon: Sun,
    title: "La Verdad",
    description: "Un espacio de honestidad radical con vos misma. Sin exposición, sin presión: lo que trabajás es tuyo y compartís solo lo que elijas.",
    duration: "Acto II",
  },
  {
    time: "Mediodía",
    icon: Coffee,
    title: "Pausa y Encuentro",
    description: "Almuerzo y conversación. Tiempo para conocer a las mujeres que están recorriendo el mismo camino que vos.",
    duration: "Pausa",
  },
  {
    time: "Tercer bloque",
    icon: Compass,
    title: "La Decisión",
    description: "El momento central de la experiencia. Dejar de esperar el momento perfecto y elegir conscientemente la dirección de tu vida.",
    duration: "Acto III",
  },
  {
    time: "Cuarto bloque",
    icon: Music,
    title: "La Expansión",
    description: "Diseñás tu vida elegida: qué tipo de mujer necesitás convertirte para construir la vida que soñás. La identidad primero, el resultado después.",
    duration: "Acto IV",
  },
  {
    time: "Cierre",
    icon: Sparkles,
    title: "La Comunidad",
    description: "El cierre no es un final: es un comienzo. Te vas con una decisión tomada, una dirección clara y una comunidad que sostiene.",
    duration: "Cierre",
  },
]

export function AgendaTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {schedule.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex gap-8 mb-12 last:mb-0 transition-all duration-700",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content Card */}
                <div className={cn(
                  "flex-1 ml-20 md:ml-0",
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                )}>
                  <div className={cn(
                    "glass-card p-6 rounded-2xl hover:bg-secondary/50 transition-colors",
                    index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                  )}>
                    {/* Time badge */}
                    <div className={cn(
                      "flex items-center gap-2 mb-3",
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    )}>
                      <span className="text-sm font-medium text-primary">{item.time}</span>
                      <span className="text-xs text-muted-foreground">({item.duration})</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon on timeline */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10">
                  <item.icon size={24} className="text-primary" />
                </div>

                {/* Empty space for alternating */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
