"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Heart, Wind, Sparkles, Sun, Moon, Compass } from "lucide-react"

const journeySteps = [
  {
    icon: Heart,
    title: "La Llegada",
    description: "Entrás a un espacio donde todo está pensado hasta el último detalle. Elegancia, calma y aire: desde el primer minuto sentís que ese día es distinto.",
  },
  {
    icon: Wind,
    title: "La Vida Correcta",
    description: "Le ponemos nombre a eso que venís sintiendo hace tiempo: una vida que funciona, que cumple, que todos aprueban… pero que no termina de representarte.",
  },
  {
    icon: Sun,
    title: "La Verdad",
    description: "El momento de decirte la verdad. No la que esperan los demás: la tuya. Porque la transformación ocurre cuando una mujer se anima a decírsela y actúa en consecuencia.",
  },
  {
    icon: Compass,
    title: "La Decisión",
    description: "El punto de inflexión de la jornada. Dejar de esperar el momento perfecto, dejar de aceptar menos, y elegir conscientemente una dirección nueva.",
  },
  {
    icon: Moon,
    title: "La Expansión",
    description: "Diseñás cómo se ve una vida elegida: qué tipo de mujer necesitás convertirte para construir la vida que soñás. El resultado llega después de la identidad, nunca antes.",
  },
  {
    icon: Sparkles,
    title: "La Comunidad",
    description: "El cierre no es un final: es un comienzo. Te vas con una comunidad de mujeres que tomaron la misma decisión, porque ninguna transformación importante ocurre completamente sola.",
  },
]

export function JourneySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
            El Recorrido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Qué sucede durante{" "}
            <span className="text-gradient">la jornada</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada momento responde una pregunta y abre otra.
            No es una agenda de charlas: es un recorrido diseñado para llevarte hasta una decisión.
          </p>
        </div>

        {/* Journey Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl glass-card transition-all duration-700 hover:-translate-y-2",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
