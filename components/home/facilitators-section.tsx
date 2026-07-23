"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"

const facilitators = [
  {
    name: "Valentina",
    role: "Creadora de Estás Para Más",
    description: "No viene a decirte qué hacer con tu vida. Ya vivió ese camino y hoy extiende una mano para acompañar a otras mujeres a recorrerlo.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    instagram: "@estasparamas",
  },
]

export function FacilitatorsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
            Quién Te Guía
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            La protagonista{" "}
            <span className="text-gradient">sos vos</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Valentina no es el centro de esta historia: es quien la facilita.
            Su trabajo termina cuando dejás de necesitarla para tomar decisiones.
          </p>
        </div>

        {/* Facilitators Grid */}
        <div className="grid gap-8 max-w-md mx-auto">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl overflow-hidden transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${facilitator.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {facilitator.name}
                    </h3>
                    <p className="text-primary text-sm mb-3">{facilitator.role}</p>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      {facilitator.description}
                    </p>
                  </div>
                  <a
                    href={`https://instagram.com/${facilitator.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary/20 transition-colors shrink-0"
                    aria-label={`Instagram de ${facilitator.name}`}
                  >
                    <Instagram size={20} className="text-foreground" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link 
            href="/facilitadores" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            Conocer la historia de Valentina
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
