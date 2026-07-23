"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

const included = [
  "Jornada completa de la experiencia, guiada por Valentina",
  "Espacio premium, preparado y ambientado",
  "Almuerzo, café y estaciones de bebidas durante el día",
  "Material de trabajo personal exclusivo del evento",
  "Dinámicas individuales y en comunidad",
  "Acceso a la comunidad Estás Para Más",
  "Sorpresas pensadas para vos durante la jornada",
]

const whatToBring = [
  "Ropa con la que te sientas cómoda y vos",
  "Algo para anotar (si preferís el papel)",
  "Disposición para decirte la verdad",
]

const notIncluded = [
  "Transporte al lugar del evento",
  "Alojamiento (para quienes viajan de otras ciudades)",
]

export function WhatsIncluded() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* What's included */}
          <div className={cn(
            "glass-card p-8 rounded-2xl transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Qué incluye la experiencia
            </h3>
            <ul className="flex flex-col gap-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to bring */}
          <div className={cn(
            "glass-card p-8 rounded-2xl transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Qué traer
            </h3>
            <ul className="flex flex-col gap-3">
              {whatToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not included */}
          <div className={cn(
            "glass-card p-8 rounded-2xl transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              No incluye
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} className="text-destructive" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Importante:</span> Te enviamos toda la información de logística por email después de tu reserva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
