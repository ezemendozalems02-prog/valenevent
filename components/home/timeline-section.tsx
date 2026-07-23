"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const timelineSteps = [
  {
    time: "15:00",
    title: "Llegada y Bienvenida",
    description: "Recepción en el espacio, presentaciones y preparación del ambiente para comenzar la experiencia.",
  },
  {
    time: "15:30",
    title: "Preparación Emocional",
    description: "Ejercicios de grounding, regulación del sistema nervioso y establecimiento de intenciones personales.",
  },
  {
    time: "16:00",
    title: "Breathwork Guiado",
    description: "Sesión intensa de respiración consciente para expandir tu capacidad y acceder a estados elevados.",
  },
  {
    time: "17:00",
    title: "Inmersión en Hielo",
    description: "El momento cumbre: enfrentar el frío conscientemente mientras descubres tu fortaleza interior.",
  },
  {
    time: "17:45",
    title: "Integración y Descanso",
    description: "Espacio de calma para procesar la experiencia, hidratación y reconexión con el cuerpo.",
  },
  {
    time: "18:30",
    title: "Cierre Expansivo",
    description: "Sound journey, meditación final y círculo de cierre para anclar los aprendizajes.",
  },
]

export function TimelineSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative safe-area">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
            El Recorrido
          </span>
          <h2 className="mobile-heading-md font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Cómo se vive{" "}
            <span className="text-gradient">la experiencia</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Un viaje cuidadosamente diseñado donde cada momento te prepara para el siguiente.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 last:mb-0 transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  "md:even:flex-row-reverse"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={cn(
                  "flex-1 ml-8 sm:ml-10 md:ml-0",
                  "md:even:text-right md:even:pr-8 md:even:ml-0 md:odd:md:pr-8"
                )}>
                  <span className="text-xs sm:text-sm text-primary font-medium">{step.time}</span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mt-1 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {step.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-1 md:mt-2">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary relative">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
