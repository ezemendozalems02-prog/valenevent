"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  Eye, 
  Flame,
  Wind,
  Sparkles,
  Target,
  RefreshCw,
  Users,
  Crown
} from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Claridad Mental",
    description: "El frío y la respiración limpian la mente de ruido, permitiéndote pensar con más nitidez y tomar mejores decisiones.",
    category: "Mental",
  },
  {
    icon: Heart,
    title: "Conexión Mente-Cuerpo",
    description: "Aprendés a escuchar las señales de tu cuerpo y a moverte con mayor conciencia en tu día a día.",
    category: "Físico",
  },
  {
    icon: Zap,
    title: "Energía Vital Renovada",
    description: "Salís con una sensación de vitalidad y energía que perdura días después de la experiencia.",
    category: "Energético",
  },
  {
    icon: Shield,
    title: "Resiliencia Mental",
    description: "El entrenamiento del frío fortalece tu capacidad para enfrentar desafíos y mantenerte firme bajo presión.",
    category: "Mental",
  },
  {
    icon: Eye,
    title: "Mayor Presencia",
    description: "Desarrollás la capacidad de estar verdaderamente presente, aquí y ahora, sin distracciones mentales.",
    category: "Espiritual",
  },
  {
    icon: Flame,
    title: "Liberación Emocional",
    description: "El breathwork profundo permite soltar emociones atrapadas y patrones que ya no te sirven.",
    category: "Emocional",
  },
  {
    icon: Wind,
    title: "Regulación del Estrés",
    description: "Aprendés técnicas que podés usar en tu vida diaria para manejar el estrés y la ansiedad.",
    category: "Mental",
  },
  {
    icon: Sparkles,
    title: "Expansión de Consciencia",
    description: "Accedés a estados expandidos de conciencia de forma natural, sin sustancias externas.",
    category: "Espiritual",
  },
  {
    icon: Target,
    title: "Enfoque y Concentración",
    description: "La disciplina del frío entrena tu mente para mantener el foco incluso en condiciones adversas.",
    category: "Mental",
  },
  {
    icon: RefreshCw,
    title: "Reset del Sistema Nervioso",
    description: "Reiniciás tu sistema nervioso, pasando de estados de estrés crónico a equilibrio parasimpático.",
    category: "Físico",
  },
  {
    icon: Users,
    title: "Sentido de Comunidad",
    description: "Te conectás con personas afines, creando vínculos profundos basados en experiencias compartidas.",
    category: "Social",
  },
  {
    icon: Crown,
    title: "Confianza Interior",
    description: "Después de atravesar el hielo, sentís una confianza profunda en tu capacidad de superar cualquier cosa.",
    category: "Emocional",
  },
]

export function BenefitsGrid() {
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
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Beneficios que{" "}
            <span className="text-gradient">transforman</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estos son algunos de los cambios que experimentan quienes viven la experiencia AWAKEN.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-2xl glass-card hover:bg-secondary/50 transition-all duration-700 hover:-translate-y-1",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Category badge */}
              <span className="absolute top-4 right-4 text-xs text-primary/70 tracking-wider uppercase">
                {benefit.category}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon size={24} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
