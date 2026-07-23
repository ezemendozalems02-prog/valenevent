"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { User, Target, Heart, Lightbulb, Zap, Users } from "lucide-react"

const audiences = [
  {
    icon: Heart,
    title: "Buscadores de reconexión",
    description: "Personas que sienten la necesidad de volver a conectar consigo mismas, con su cuerpo y sus emociones.",
  },
  {
    icon: Target,
    title: "Superadores de límites",
    description: "Quienes desean atravesar sus límites mentales y descubrir de qué son realmente capaces.",
  },
  {
    icon: Lightbulb,
    title: "Gestores de estrés",
    description: "Personas que buscan herramientas para manejar el estrés, la ansiedad y la presión del día a día.",
  },
  {
    icon: Zap,
    title: "Buscadores de expansión",
    description: "Quienes están en un camino de crecimiento personal y buscan experiencias que aceleren su evolución.",
  },
  {
    icon: User,
    title: "Atletas y emprendedores",
    description: "Profesionales de alto rendimiento que buscan optimizar su mente y cuerpo para lograr más.",
  },
  {
    icon: Users,
    title: "Personas en transición",
    description: "Quienes atraviesan procesos de cambio y buscan claridad, fuerza y una nueva perspectiva.",
  },
]

export function TargetAudience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
              A Quién Va Dirigido
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Esta experiencia{" "}
              <span className="text-gradient">es para vos</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No importa tu edad, condición física o experiencia previa. AWAKEN está 
              diseñada para cualquier persona que sienta el llamado a explorar su 
              interior y descubrir su verdadero potencial.
            </p>
            <div 
              className="aspect-video rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80')`,
              }}
            />
          </div>

          {/* Right - Audience Grid */}
          <div className="grid gap-4">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={cn(
                  "group flex items-start gap-4 p-5 rounded-xl glass-card hover:bg-secondary/50 transition-all duration-500",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <audience.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
