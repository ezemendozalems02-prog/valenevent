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
    icon: Shield,
    title: "Responsabilidad antes que excusas",
    description: "Responsabilidad no es cargar con todo: es recuperar el poder. Mientras todo dependa del entorno, siempre habrá algo que esperar.",
    category: "Principio",
  },
  {
    icon: Eye,
    title: "Verdad antes que comodidad",
    description: "La transformación ocurre cuando una mujer se anima a decirse la verdad. Y actúa en consecuencia.",
    category: "Principio",
  },
  {
    icon: Flame,
    title: "Acción antes que perfección",
    description: "Ninguna transformación importante empezó cuando todo estuvo resuelto. Todas empezaron cuando alguien decidió dejar de esperar.",
    category: "Principio",
  },
  {
    icon: Sparkles,
    title: "Expansión antes que conformidad",
    description: "Expandirse es dejar de vivir dentro de los límites de la persona que fuiste hasta hoy. Pensar, elegir y vivir más grande.",
    category: "Principio",
  },
  {
    icon: Users,
    title: "Comunidad antes que individualismo",
    description: "Las mujeres no necesitan competir entre ellas. Necesitan verse, escucharse, sostenerse y celebrarse.",
    category: "Principio",
  },
  {
    icon: Crown,
    title: "Identidad antes que motivación",
    description: "La motivación dura poco. Una decisión cambia una dirección. El resultado siempre llega después de la identidad, nunca antes.",
    category: "Principio",
  },
  {
    icon: Brain,
    title: "Claridad de dirección",
    description: "Dejás de preguntarte \"¿será que esto es todo?\" y empezás a preguntarte \"¿qué tipo de vida quiero construir de ahora en adelante?\".",
    category: "Te llevás",
  },
  {
    icon: Target,
    title: "Una decisión tomada",
    description: "No una lista de tareas ni una carpeta de apuntes: una decisión concreta sobre la vida que vas a dejar de aceptar.",
    category: "Te llevás",
  },
  {
    icon: RefreshCw,
    title: "Una mirada nueva",
    description: "Volvés a tu casa y ya no podés mirar tu vida con los mismos ojos. Una vez que ves una posibilidad más grande, es muy difícil volver a conformarte.",
    category: "Te llevás",
  },
  {
    icon: Heart,
    title: "Tu propia voz",
    description: "Volvés a hacerte la pregunta que la vida correcta silenció: ¿esta vida realmente me representa?",
    category: "Te llevás",
  },
  {
    icon: Zap,
    title: "Poder personal",
    description: "No buscamos motivarte: buscamos que recuperes el poder de crear una realidad distinta. Eso nadie te lo puede dar ni quitar.",
    category: "Te llevás",
  },
  {
    icon: Wind,
    title: "Una comunidad real",
    description: "El evento no termina cuando termina: empieza ahí. Te vas acompañada por mujeres que eligieron lo mismo que vos.",
    category: "Te llevás",
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
            Nuestros principios y{" "}
            <span className="text-gradient">lo que te llevás</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Toda decisión dentro de Estás Para Más responde a estos principios. Sin promesas exageradas: profundidad, verdad y humanidad.
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
