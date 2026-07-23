"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Heart, Wind, Snowflake, Coffee, Music, Sparkles } from "lucide-react"

const schedule = [
  {
    time: "15:00 - 15:30",
    icon: Heart,
    title: "Bienvenida y Apertura",
    description: "Recepción en el espacio, presentaciones del grupo, establecimiento de acuerdos y apertura del espacio sagrado. Te guiamos para soltar el día y conectar con el momento presente.",
    duration: "30 min",
  },
  {
    time: "15:30 - 16:00",
    icon: Wind,
    title: "Preparación y Grounding",
    description: "Ejercicios de regulación del sistema nervioso, técnicas de respiración suave y establecimiento de intenciones personales. Preparamos tu cuerpo y mente para lo que viene.",
    duration: "30 min",
  },
  {
    time: "16:00 - 16:45",
    icon: Wind,
    title: "Breathwork Profundo",
    description: "Sesión intensa de respiración consciente guiada. Trabajamos patrones respiratorios que liberan tensiones, expanden tu capacidad y te llevan a estados elevados de conciencia.",
    duration: "45 min",
  },
  {
    time: "16:45 - 17:30",
    icon: Snowflake,
    title: "Inmersión en Hielo",
    description: "El momento cumbre. Preparación mental, entrada gradual al agua helada y permanencia consciente. Aplicás todo lo aprendido mientras descubrís tu fortaleza interior.",
    duration: "45 min",
  },
  {
    time: "17:30 - 18:00",
    icon: Coffee,
    title: "Integración y Descanso",
    description: "Espacio de calma para procesar la experiencia. Hidratación, snacks saludables y tiempo para que el cuerpo vuelva a su temperatura natural mientras integras lo vivido.",
    duration: "30 min",
  },
  {
    time: "18:00 - 18:45",
    icon: Music,
    title: "Sound Journey",
    description: "Viaje sonoro inmersivo con cuencos tibetanos, gongs y frecuencias sanadoras. Un espacio para relajarte profundamente y permitir que la experiencia se asiente.",
    duration: "45 min",
  },
  {
    time: "18:45 - 19:00",
    icon: Sparkles,
    title: "Cierre y Despedida",
    description: "Círculo de cierre, compartir de experiencias y anclaje de aprendizajes. Nos despedimos con herramientas concretas para llevar esta transformación a tu vida diaria.",
    duration: "15 min",
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
