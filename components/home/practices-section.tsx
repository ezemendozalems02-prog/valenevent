"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Eye, Compass, Sparkles, Users, Gem, Flame } from "lucide-react"

const practices = [
  {
    icon: Eye,
    title: "La Verdad",
    description: "El primer paso no es aprender más: es animarte a decirte la verdad. Poner en palabras eso que venís sintiendo hace tiempo y que nadie más ve desde afuera.",
  },
  {
    icon: Compass,
    title: "La Decisión",
    description: "Ninguna transformación importante empezó cuando todo estuvo resuelto. Todas empezaron cuando alguien decidió dejar de esperar. Acá se toma esa decisión.",
  },
  {
    icon: Sparkles,
    title: "La Expansión",
    description: "Dejar de vivir dentro de los límites de la persona que fuiste hasta hoy. Pensar más grande, elegir más grande, permitirte ocupar un lugar más grande.",
  },
  {
    icon: Gem,
    title: "La Identidad",
    description: "Una identidad no se encuentra: se construye. Aparece cada vez que tomás decisiones alineadas con la mujer que querés ser.",
  },
  {
    icon: Users,
    title: "La Comunidad",
    description: "Ninguna transformación importante ocurre completamente sola. Una mujer que ve a otra vivir con valentía entiende que ella también puede hacerlo.",
  },
  {
    icon: Flame,
    title: "La Acción",
    description: "El conocimiento no transforma: las decisiones sí. Te vas del evento con una dirección clara, no con una carpeta de apuntes.",
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
            Los Pilares
          </span>
          <h2 className="mobile-heading-md font-bold text-foreground mb-4 sm:mb-6 text-balance">
            No es un evento.{" "}
            <span className="text-gradient">Es una decisión.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            No vendemos información. Cada momento del día está diseñado alrededor de una sola idea: existe una vida mucho más grande de la que hoy creés posible.
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
