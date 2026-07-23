"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Instagram, Quote } from "lucide-react"

const facilitators = [
  {
    name: "Nahuel Martínez",
    role: "Facilitador de Inmersión en Hielo",
    bio: "Nahuel descubrió el poder transformador del frío hace más de 8 años durante un retiro en las montañas. Desde entonces, ha dedicado su vida a estudiar y compartir esta práctica ancestral con un enfoque moderno y consciente. Certificado en el Método Wim Hof y en técnicas de respiración avanzada, ha guiado a más de 500 personas en su encuentro con el hielo.",
    focus: "Trabajo corporal, superación de límites mentales, expansión de la consciencia",
    message: "El hielo no es el destino, es el camino. Cada inmersión es una oportunidad de conocerte un poco más.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    instagram: "@nahuel.ice",
  },
  {
    name: "Luciana Vega",
    role: "Guía de Breathwork y Meditación",
    bio: "Luciana es facilitadora de respiración consciente y conexión interior con más de 10 años de experiencia. Formada en distintas tradiciones de pranayama, breathwork holotrópico y meditación, combina técnicas ancestrales con neurociencia moderna. Su pasión es crear espacios seguros donde las personas puedan soltar, sentir y reconectar con su esencia.",
    focus: "Respiración consciente, liberación emocional, estados expandidos de consciencia",
    message: "La respiración es el puente entre tu mundo interno y externo. Cuando aprendés a respirar conscientemente, aprendés a vivir plenamente.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    instagram: "@luciana.breath",
  },
  {
    name: "Martín Sosa",
    role: "Sound Healer y Músico",
    bio: "Martín es músico, sound healer y explorador sonoro. Ha estudiado con maestros de Nepal, India y Perú, integrando tradiciones ancestrales en sus viajes sonoros. Con cuencos tibetanos, gongs, tambores y su voz, crea atmósferas inmersivas que facilitan estados profundos de relajación y autoexploración.",
    focus: "Sound healing, frecuencias sanadoras, viajes sonoros",
    message: "El sonido es vibración, y la vibración es vida. Cuando te rendís al sonido, te encontrás contigo mismo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    instagram: "@martin.sound",
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
