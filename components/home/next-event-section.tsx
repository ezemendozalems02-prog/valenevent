"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export function NextEventSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-glow" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] animate-breathe" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-48 h-40 sm:h-48 bg-accent/10 rounded-full blur-[60px] sm:blur-[80px] animate-breathe animation-delay-2000" />

      <div className="relative safe-area">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Próxima Experiencia
          </span>
          <h2 className="mobile-heading-md font-bold text-foreground mb-0 text-balance">
            Tu momento de{" "}
            <span className="text-gradient">transformación</span>{" "}
            te espera
          </h2>
        </div>

        {/* Event Card */}
        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-1000 delay-200",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl sm:rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left - Image */}
                <div className="relative aspect-video md:aspect-auto">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:bg-gradient-to-r" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs sm:text-sm font-medium">
                    Cupos limitados
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                    AWAKEN Experience
                  </h3>

                  <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-muted-foreground">
                      <Calendar size={18} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>Sábado 15 de Mayo</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-muted-foreground">
                      <Clock size={18} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>15:00 - 19:00 hs</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>Espacio Consciente, Palermo</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-muted-foreground">
                      <Users size={18} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>8 de 15 lugares disponibles</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex justify-between text-xs sm:text-sm mb-2">
                      <span className="text-muted-foreground">Disponibilidad</span>
                      <span className="text-primary">53%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: "53%" }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link href="/reserva" className="flex-1">
                      <Button className="button-mobile bg-primary hover:bg-primary/90 text-primary-foreground group text-xs sm:text-sm">
                        Reservar mi lugar
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform hidden sm:block" />
                      </Button>
                    </Link>
                    <Link href="/eventos/awaken-mayo" className="hidden sm:block">
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/10 text-xs sm:text-sm">
                        Ver detalle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View all events link */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/eventos" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver todos los eventos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
