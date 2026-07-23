"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Shield, Eye, Layers, Gem, Heart, Star } from "lucide-react"

const differentiators = [
  {
    icon: Eye,
    title: "Identidad, no motivación",
    description: "La motivación dura poco. Una decisión cambia una dirección. Trabajamos sobre quién elegís ser, no sobre cómo sentirte bien un rato.",
  },
  {
    icon: Shield,
    title: "Sin humo ni fórmulas mágicas",
    description: "No creemos en promesas vacías ni en el pensamiento positivo como solución. Creemos en decirte la verdad y actuar en consecuencia.",
  },
  {
    icon: Layers,
    title: "Contra la conformidad",
    description: "No competimos con otros eventos. Competimos contra esa voz que dice \"estoy bien así\" cuando en realidad sabés que no lo estás.",
  },
  {
    icon: Heart,
    title: "Vos sos la protagonista",
    description: "Acá nadie te rescata ni te crea dependencia. Generamos protagonistas: nuestro trabajo termina cuando dejás de necesitarnos.",
  },
  {
    icon: Gem,
    title: "Experiencia premium",
    description: "Cada detalle está cuidado: el espacio, la luz, la atmósfera. Nada improvisado, todo diseñado para invitarte a respirar más profundo.",
  },
  {
    icon: Star,
    title: "Una comunidad que sostiene",
    description: "El evento no termina cuando termina: empieza ahí. Te llevás una red de mujeres que eligieron lo mismo que vos.",
  },
]

export function WhatMakesUsDifferent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ice" />
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Qué hace diferente a{" "}
            <span className="text-gradient">esta experiencia</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            No somos un evento motivacional, ni un retiro, ni una capacitación.
            Somos una experiencia de expansión de identidad, diseñada con intención y excelencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl glass-card hover:bg-secondary/50 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
