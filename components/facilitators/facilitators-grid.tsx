"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Instagram, Quote } from "lucide-react"

const facilitators = [
  {
    name: "Valentina",
    role: "Creadora de Estás Para Más",
    bio: "Valentina también tuvo una vida correcta: una vida estable, que desde afuera parecía suficiente y que todos aprobaban. Hasta que un día se animó a hacerse la pregunta que venía evitando: ¿esta vida realmente me representa? Estás Para Más nace de ese camino. No de una teoría, sino de la experiencia real de dejar de aceptar menos y construir una vida elegida conscientemente. Hoy su trabajo es abrir ese mismo espacio para otras mujeres.",
    focus: "Expansión de identidad, decisiones conscientes, comunidad femenina",
    message: "Mi trabajo no es que me sigas. Es que aprendas a confiar en vos misma, hasta que no me necesites para tomar decisiones.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    instagram: "@estasparamas",
  },
]

export function FacilitatorsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative safe-area">
        <div className="flex flex-col gap-10 sm:gap-16">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-all duration-1000",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className={cn(
                "relative",
                index % 2 === 1 ? "md:order-2" : ""
              )}>
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50" />
                <div className="relative aspect-[3/4] rounded-lg sm:rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${facilitator.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Instagram link */}
                  <a
                    href={`https://instagram.com/${facilitator.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-2 sm:p-3 rounded-full glass hover:bg-primary/20 transition-colors touch-target"
                    aria-label={`Instagram de ${facilitator.name}`}
                  >
                    <Instagram size={18} className="sm:w-6 sm:h-6 text-foreground" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                index % 2 === 1 ? "md:order-1" : ""
              )}>
                <span className="text-xs sm:text-sm text-primary tracking-wider uppercase font-medium">{facilitator.role}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-1 sm:mt-2 mb-3 sm:mb-4">
                  {facilitator.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-4">
                  {facilitator.bio}
                </p>

                <div className="mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-medium text-foreground">Enfoque:</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{facilitator.focus}</p>
                </div>

                {/* Quote */}
                <div className="p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl glass-card border-l-4 border-primary">
                  <Quote size={16} className="text-primary/50 mb-2 sm:mb-3 sm:w-6 sm:h-6" />
                  <p className="text-xs sm:text-sm text-foreground italic line-clamp-3">
                    &quot;{facilitator.message}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
