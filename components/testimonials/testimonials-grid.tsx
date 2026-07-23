"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Yo tenía la vida que se suponía que tenía que tener. Trabajo estable, todo en orden. Y un vacío que no sabía explicar. Ese día entendí que no estaba mal: estaba conforme. Y decidí dejar de estarlo.",
    author: "María García",
    role: "Emprendedora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    transformation: "La decisión",
  },
  {
    quote: "Había hecho mil cursos y leído todos los libros. Me sobraba información y me faltaba una decisión. Acá no me dieron más contenido: me ayudaron a decirme la verdad.",
    author: "Julieta Fernández",
    role: "Abogada",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    transformation: "La verdad",
  },
  {
    quote: "No salí motivada, salí distinta. Volví a mi casa y ya no pude mirar mi vida con los mismos ojos. Todo lo que cambió en mi vida después empezó ese día.",
    author: "Carolina Ruiz",
    role: "Diseñadora",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    transformation: "Un antes y un después",
  },
  {
    quote: "Siempre pensé: cuando tenga más tiempo, cuando esté más preparada. Ese día entendí que no me faltaba tiempo, me faltaba decidir. Empecé al día siguiente.",
    author: "Sofía Torres",
    role: "Contadora",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    transformation: "Dejar de esperar",
  },
  {
    quote: "Lo que más me sorprendió fue el espacio: nada improvisado, todo pensado. No fue un evento más de esos con frases inspiradoras. Fue una conversación honesta conmigo misma.",
    author: "Victoria Méndez",
    role: "Gerenta comercial",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    transformation: "Experiencia premium",
  },
  {
    quote: "Ver a cien mujeres animándose a lo mismo que vos no se explica: se vive. Si una puede, todas podemos. Esa comunidad me sostiene hasta hoy.",
    author: "Florencia López",
    role: "Psicóloga",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    transformation: "La comunidad",
  },
  {
    quote: "Nadie me rescató, y eso fue lo mejor. Me fui sabiendo que la que tenía el poder de cambiar mi vida era yo. Responsabilidad como libertad: ahora lo entiendo.",
    author: "Camila Aguirre",
    role: "Docente",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
    transformation: "Poder personal",
  },
  {
    quote: "Fui con la expectativa baja, pensando que era otro evento de motivación. Me encontré con algo que no conocía: un lugar donde alguien puso en palabras exactamente lo que me pasaba.",
    author: "Lucía Molina",
    role: "Arquitecta",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    transformation: "Sentirse vista",
  },
]

export function TestimonialsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Stats */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {[
            { value: "500+", label: "Mujeres en la comunidad" },
            { value: "98%", label: "Lo recomendaría" },
            { value: "4.9", label: "Valoración promedio", icon: Star },
            { value: "1", label: "Decisión que lo cambia todo" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</span>
                {stat.icon && <stat.icon size={24} className="text-primary fill-primary" />}
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-2xl glass-card hover:bg-secondary/50 transition-all duration-700 hover:-translate-y-1",
                index === 0 ? "md:col-span-2 lg:col-span-1" : "",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Transformation badge */}
              <span className="absolute top-4 right-4 text-xs text-primary/70 tracking-wider uppercase">
                {testimonial.transformation}
              </span>

              {/* Quote icon */}
              <Quote size={24} className="text-primary/30 mb-4" />

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/30"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
