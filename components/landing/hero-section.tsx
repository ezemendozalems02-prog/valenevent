import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

const eventFacts = [
  { icon: Calendar, label: "Lunes 17 de Agosto (feriado)" },
  { icon: Clock, label: "9:00 a 20:00 hs" },
  { icon: MapPin, label: "Salón premium, Buenos Aires" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:min-h-screen">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center order-2 lg:order-1 safe-area py-14 sm:py-16 lg:py-24">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 animate-fade-in">
              <span className="w-8 h-px bg-plum" />
              <span className="text-[11px] sm:text-xs font-medium text-plum uppercase tracking-[0.18em]">
                Evento presencial · Edición Buenos Aires
              </span>
            </div>

            <h1 className="mobile-heading-lg mb-6 animate-fade-in animation-delay-200 text-balance">
              <span className="block text-foreground">Hay una forma de vivir</span>
              <span className="block text-gradient mt-1">que todavía no conocés.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 sm:mb-10 leading-relaxed animate-fade-in animation-delay-400">
              Un día para dejar de vivir por inercia y empezar a vivir por elección.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in animation-delay-600">
              <Link href="#inscripcion" className="w-full sm:w-auto">
                <Button className="button-mobile bg-primary hover:bg-plum text-primary-foreground px-8 py-6 text-base group transition-colors duration-500">
                  <span className="flex items-center justify-center gap-2">
                    Reservar mi lugar
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="#experiencia" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="button-mobile border-stone bg-transparent hover:bg-soft-white text-foreground px-8 py-6 text-base"
                >
                  Descubrir la experiencia
                </Button>
              </Link>
            </div>

            {/* Event facts strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 pt-6 border-t border-stone/70 animate-fade-in animation-delay-800">
              {eventFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-2 sm:px-5 sm:first:pl-0 sm:border-l sm:first:border-l-0 border-stone/70"
                >
                  <fact.icon size={16} strokeWidth={1.5} className="text-plum shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1555725305-e823b44548de?w=1600&q=80"
            alt="Mujeres reunidas en un evento Estás Para Más"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-background/20 lg:via-transparent lg:to-transparent" />

          {/* Cupos badge */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-stone/60">
            <span className="text-[11px] sm:text-xs font-medium text-plum-deep uppercase tracking-[0.1em]">
              Cupos limitados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
