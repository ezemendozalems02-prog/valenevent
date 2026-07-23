"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-breathe" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-breathe animation-delay-2000" />
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-8 animate-float">
            <Sparkles size={28} className="text-primary" />
          </div>

          {/* Manifesto text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 italic">
            &quot;Esto no es solo una práctica. Es un portal.&quot;
          </p>

          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            El momento de{" "}
            <span className="text-gradient">transformarte</span>{" "}
            es ahora
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            No esperes el momento perfecto. Créalo. Reserva tu lugar en la 
            próxima experiencia AWAKEN y comienza tu viaje hacia tu versión 
            más expandida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reserva">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Reservar mi lugar
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 text-foreground px-10 py-6 text-lg"
              >
                Contactar
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Cupos limitados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Espacio seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Facilitadores certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
