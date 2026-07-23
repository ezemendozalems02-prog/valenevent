"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"

const facilitators = [
  {
    name: "Nahuel Martínez",
    role: "Facilitador de Inmersión en Hielo",
    description: "Especialista en trabajo corporal y expansión de la conciencia a través del frío.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    instagram: "@nahuel.ice",
  },
  {
    name: "Luciana Vega",
    role: "Guía de Breathwork",
    description: "Facilitadora de respiración consciente y conexión interior con más de 10 años de experiencia.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    instagram: "@luciana.breath",
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
            Facilitadores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Quienes te{" "}
            <span className="text-gradient">guiarán</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Profesionales experimentados que te acompañarán con presencia, 
            contención y sabiduría en cada paso del camino.
          </p>
        </div>

        {/* Facilitators Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            Conocer más sobre el equipo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
