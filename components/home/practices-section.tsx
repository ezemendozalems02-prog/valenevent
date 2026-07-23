"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Wind, Snowflake, Brain, Music, Activity, Sparkles } from "lucide-react"

const practices = [
  {
    icon: Wind,
    title: "Breathwork",
    description: "Técnicas de respiración consciente para liberar tensiones, expandir tu capacidad pulmonar y acceder a estados de consciencia elevados.",
  },
  {
    icon: Snowflake,
    title: "Inmersión en Hielo",
    description: "Sumérgete en agua helada y descubre tu fortaleza interior. Un portal hacia la superación de límites mentales y el despertar de tu energía vital.",
  },
  {
    icon: Brain,
    title: "Meditación",
    description: "Prácticas guiadas para aquietar la mente, encontrar claridad y conectar con tu esencia más profunda en un estado de presencia plena.",
  },
  {
    icon: Music,
    title: "Sound Journey",
    description: "Un viaje sonoro inmersivo con cuencos tibetanos, gongs y frecuencias sanadoras que te transportan a estados de relajación profunda.",
  },
  {
    icon: Activity,
    title: "Body Reset",
    description: "Movimiento consciente y liberación somática para resetear tu sistema nervioso y reconectar con la sabiduría de tu cuerpo.",
  },
  {
    icon: Sparkles,
    title: "Integración Consciente",
    description: "El momento de integrar las experiencias vividas, dar sentido a las sensaciones y anclar los aprendizajes en tu vida cotidiana.",
  },
]

export function PracticesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div className="relative safe-area">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Las Prácticas
          </span>
          <h2 className="mobile-heading-md font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Un viaje a través de{" "}
            <span className="text-gradient">múltiples dimensiones</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Cada práctica está diseñada para complementarse y crear una experiencia holística.
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {practices.map((practice, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl glass-card hover:bg-secondary/60 transition-all duration-500 cursor-pointer",
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <practice.icon size={24} className="text-primary" />
                </div>
                {/* Icon glow */}
                <div className="absolute inset-0 w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-gradient transition-all duration-300">
                {practice.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {practice.description}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
