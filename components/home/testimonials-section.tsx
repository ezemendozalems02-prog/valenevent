"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote: "La inmersión en hielo fue el momento más transformador de mi vida. Descubrí una fortaleza interior que no sabía que tenía.",
    author: "María García",
    role: "Emprendedora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "Llegué buscando calma y encontré una conexión profunda conmigo mismo. El breathwork cambió mi forma de respirar y de vivir.",
    author: "Lucas Fernández",
    role: "Atleta profesional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "Una experiencia que todos deberían vivir al menos una vez. Sales siendo otra persona, más presente y más viva.",
    author: "Carolina Ruiz",
    role: "Terapeuta holística",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
]

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-ocean" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="relative safe-area">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Testimonios
          </span>
          <h2 className="mobile-heading-md font-bold text-foreground mb-0 text-balance">
            Lo que se llevan{" "}
            <span className="text-gradient">quienes lo viven</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl glass-card transition-all duration-700 hover:sm:-translate-y-2",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary/30 mb-4 sm:mb-6 sm:w-8 sm:h-8" />

              {/* Quote */}
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-6 sm:mb-8 italic line-clamp-4">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-cover bg-center border-2 border-primary/30 shrink-0"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-foreground truncate">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground truncate">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative corner - hidden on mobile */}
              <div className="hidden sm:block absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/testimonios" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver más testimonios
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform hidden sm:block sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
