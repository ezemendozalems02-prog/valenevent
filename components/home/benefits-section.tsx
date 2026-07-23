"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Mejora de la conexión mente-cuerpo",
  "Aumento de presencia y enfoque",
  "Fortalecimiento de la resiliencia mental",
  "Regulación del estrés y la ansiedad",
  "Mayor tolerancia al disconfort",
  "Claridad mental renovada",
  "Liberación emocional profunda",
  "Sensación de energía vital",
]

export function BenefitsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-ice" />
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative safe-area">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Image */}
          <div className={cn(
            "relative order-2 lg:order-1 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="relative">
              {/* Main image */}
              <div 
                className="aspect-square rounded-xl sm:rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80')`,
                }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent rounded-xl sm:rounded-2xl" />

              {/* Quote card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass p-3 sm:p-6 rounded-lg sm:rounded-xl">
                <p className="text-sm sm:text-lg font-medium text-foreground italic line-clamp-2">
                  &quot;Como te enfrentas al hielo, te enfrentas a la vida.&quot;
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  — AWAKEN
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={cn(
            "order-1 lg:order-2 transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Beneficios
            </span>
            <h2 className="mobile-heading-md font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
              Transforma tu relación{" "}
              <span className="text-gradient">contigo mismo</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Cada experiencia AWAKEN está diseñada para generar cambios reales y duraderos en tu vida.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1">
                    <Check size={10} className="text-primary" />
                  </div>
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/beneficios">
              <Button 
                size="sm"
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 text-foreground group text-xs sm:text-sm"
              >
                Descubrir todos
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform hidden sm:block" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
