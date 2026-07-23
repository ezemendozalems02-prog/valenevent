"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { User, Target, Heart, Lightbulb, Zap, Users } from "lucide-react"

const audiences = [
  {
    icon: Heart,
    title: "La que vive una vida correcta",
    description: "Una vida estable, que desde afuera parece suficiente, pero que en silencio sabe que no la representa del todo.",
  },
  {
    icon: Lightbulb,
    title: "La que se dice \"cuando tenga tiempo\"",
    description: "La que viene postergando sus sueños esperando tener más plata, más confianza o estar más preparada.",
  },
  {
    icon: Target,
    title: "La que ya consumió de todo",
    description: "Libros, cursos, podcasts. Le sobra información y aun así su vida sigue exactamente en el mismo lugar.",
  },
  {
    icon: Zap,
    title: "La que quiere elegir, no reaccionar",
    description: "La que está lista para dejar de esperar que algo cambie afuera y empezar a crear su propia realidad.",
  },
  {
    icon: User,
    title: "La que confundió estabilidad con plenitud",
    description: "La que aprendió a convivir con un vacío que ya ni siquiera sabe explicar, y piensa \"capaz la vida es esto\".",
  },
  {
    icon: Users,
    title: "La que no quiere hacerlo sola",
    description: "La que busca una comunidad de mujeres que se vean, se escuchen, se sostengan y se celebren.",
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
              Estás Para Más no es para mujeres que están mal.
              Es para mujeres que están demasiado conformes con una vida correcta.
              Si alguna de estas frases te suena propia, esta experiencia fue pensada para vos.
            </p>
            <div 
              className="aspect-video rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&q=80')`,
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
