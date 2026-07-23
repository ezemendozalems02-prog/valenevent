"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Video/Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80')`,
          }}
        />
        {/* Animated glow orbs - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-breathe z-5" />
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-accent/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[100px] animate-breathe animation-delay-2000 z-5" />
      </div>

      {/* Content */}
      <div className="relative z-20 safe-area text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-8 animate-fade-in text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground tracking-wide">
              Próxima: 15 de Mayo
            </span>
          </div>

          {/* Main headline */}
          <h1 className="mobile-heading-lg font-bold leading-tight mb-4 sm:mb-6 animate-fade-in animation-delay-200">
            <span className="block text-foreground">Despierta tu energía.</span>
            <span className="block text-gradient mt-2">Expande tu conciencia.</span>
            <span className="block text-foreground/90 mt-2">Reconecta con tu poder.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in animation-delay-400">
            Experiencias inmersivas de breathwork, inmersión en hielo, meditación y presencia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in animation-delay-600">
            <Link href="/eventos">
              <Button 
                className="button-mobile bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver próximos eventos
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
                </span>
              </Button>
            </Link>
            <Link href="/reserva" className="hidden sm:block">
              <Button 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 text-foreground px-6 sm:px-8 py-5 sm:py-6"
              >
                Reservar lugar
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16 max-w-xl mx-auto animate-fade-in animation-delay-800">
            {[
              { value: "500+", label: "Experiencias" },
              { value: "15", label: "Cupos" },
              { value: "100%", label: "Cuidados" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
