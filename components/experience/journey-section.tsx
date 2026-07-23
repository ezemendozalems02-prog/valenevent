"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Heart, Wind, Snowflake, Sparkles, Sun, Moon } from "lucide-react"

const journeySteps = [
  {
    icon: Heart,
    title: "Apertura del Espacio",
    description: "Comenzamos creando un ambiente seguro y sagrado. Nos presentamos, establecemos intenciones y preparamos el campo energético para la experiencia.",
  },
  {
    icon: Wind,
    title: "Regulación del Sistema Nervioso",
    description: "A través de ejercicios de grounding y técnicas de respiración suave, preparamos tu cuerpo para lo que viene. Calmamos la mente y activamos el sistema parasimpático.",
  },
  {
    icon: Sun,
    title: "Breathwork Profundo",
    description: "Una sesión intensa de respiración consciente que libera tensiones acumuladas, expande tu capacidad pulmonar y te lleva a estados alterados de conciencia de forma natural.",
  },
  {
    icon: Snowflake,
    title: "Inmersión en Hielo",
    description: "El momento cumbre. Te sumergís en agua helada mientras aplicás todo lo aprendido. El frío se convierte en tu maestro, revelando tu fortaleza interior.",
  },
  {
    icon: Moon,
    title: "Integración Profunda",
    description: "Después del frío, viene la calma. Un espacio para procesar, descansar y permitir que el cuerpo integre la experiencia mientras te rehidratas y recuperas.",
  },
  {
    icon: Sparkles,
    title: "Cierre Expansivo",
    description: "Sound journey, meditación guiada y círculo de cierre. Anclamos los aprendizajes y nos preparamos para llevar esta transformación a la vida cotidiana.",
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
            Cada momento está diseñado para prepararte para el siguiente, 
            creando una experiencia integral que trabaja cuerpo, mente y espíritu.
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
