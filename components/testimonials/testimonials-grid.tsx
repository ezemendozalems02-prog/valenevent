"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "La inmersión en hielo fue el momento más transformador de mi vida. Descubrí una fortaleza interior que no sabía que tenía. Llegué con miedo y salí sintiéndome invencible.",
    author: "María García",
    role: "Emprendedora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    transformation: "Superación del miedo",
  },
  {
    quote: "Llegué buscando calma y encontré una conexión profunda conmigo mismo. El breathwork cambió mi forma de respirar y de vivir. Ahora tengo herramientas para manejar el estrés que antes me desbordaba.",
    author: "Lucas Fernández",
    role: "Atleta profesional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    transformation: "Gestión del estrés",
  },
  {
    quote: "Una experiencia que todos deberían vivir al menos una vez. Sales siendo otra persona, más presente y más viva. La combinación de breathwork e hielo es poderosa.",
    author: "Carolina Ruiz",
    role: "Terapeuta holística",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    transformation: "Mayor presencia",
  },
  {
    quote: "Venía de un momento muy difícil en mi vida y AWAKEN me dio exactamente lo que necesitaba: un espacio para soltar, para sentir y para reconectarme con mi fuerza interior.",
    author: "Sebastián Torres",
    role: "Diseñador",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    transformation: "Liberación emocional",
  },
  {
    quote: "Como CEO, vivo bajo presión constante. Esta experiencia me enseñó que puedo mantener la calma incluso en las situaciones más intensas. Una lección que aplico todos los días.",
    author: "Victoria Méndez",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    transformation: "Claridad bajo presión",
  },
  {
    quote: "El sound journey después del hielo fue increíble. Sentí una paz que no había experimentado en años. Me fui con una sensación de energía renovada que duró semanas.",
    author: "Andrés Molina",
    role: "Músico",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    transformation: "Energía renovada",
  },
  {
    quote: "Tenía pánico al frío. Literal. Y ahora puedo decir que el hielo es mi maestro. Lo que aprendí sobre mí misma en esos minutos de inmersión vale más que años de terapia.",
    author: "Florencia López",
    role: "Psicóloga",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    transformation: "Autoconocimiento",
  },
  {
    quote: "La comunidad que encontré en AWAKEN es increíble. No solo viví una experiencia transformadora, sino que hice amigos de por vida que comparten mi camino de crecimiento.",
    author: "Nicolás Aguirre",
    role: "Coach personal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    transformation: "Conexión comunitaria",
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
            { value: "500+", label: "Experiencias vividas" },
            { value: "98%", label: "Recomendaría AWAKEN" },
            { value: "4.9", label: "Valoración promedio", icon: Star },
            { value: "85%", label: "Repiten la experiencia" },
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
