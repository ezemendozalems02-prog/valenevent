"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Sparkles, Heart, Brain, Zap } from "lucide-react"

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background elements - optimized for mobile */}
      <div className="absolute inset-0 gradient-ocean" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="hidden sm:block absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="relative safe-area">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Qué es AWAKEN
            </span>
            <h2 className="mobile-heading-md font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
              Una experiencia inmersiva de{" "}
              <span className="text-gradient">transformación interior</span>
            </h2>
            <div className="flex flex-col gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                AWAKEN es mucho más que un evento: es un viaje profundo hacia tu interior. Una experiencia cuidadosamente diseñada que combina el poder de la respiración consciente, la inmersión en hielo y la meditación.
              </p>
              <p className="hidden sm:block">
                En un espacio seguro y contenido, te guiamos a través de un proceso de reconexión con tu cuerpo, mente y espíritu. Aquí, cada respiración se convierte en una herramienta de liberación.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {[
                { icon: Sparkles, text: "Expansión consciente" },
                { icon: Heart, text: "Conexión profunda" },
                { icon: Brain, text: "Claridad mental" },
                { icon: Zap, text: "Energía renovada" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg glass-card hover:bg-secondary/50 transition-colors duration-300 text-xs sm:text-sm"
                >
                  <item.icon size={16} className="text-primary shrink-0 sm:w-5 sm:h-5" />
                  <span className="text-foreground line-clamp-2">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="relative">
              {/* Glow behind image - hidden on mobile */}
              <div className="hidden sm:block absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform scale-90" />
              
              {/* Main image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden glass-card p-1 sm:p-2">
                <div 
                  className="aspect-[4/5] rounded-lg sm:rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80')`,
                  }}
                />
              </div>

              {/* Floating card - optimized for mobile */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 glass p-3 sm:p-4 rounded-lg sm:rounded-xl max-w-[160px] sm:max-w-[200px] animate-float text-xs sm:text-sm">
                <div className="text-lg sm:text-2xl font-bold text-gradient">4+ horas</div>
                <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2">de transformación</div>
              </div>

              {/* Decorative element - hidden on mobile for performance */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full animate-breathe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
