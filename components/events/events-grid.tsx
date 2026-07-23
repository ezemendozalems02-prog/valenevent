"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

const events = [
  {
    id: "awaken-mayo",
    title: "AWAKEN Experience",
    date: "Sábado 15 de Mayo, 2026",
    time: "15:00 - 19:00 hs",
    location: "Espacio Consciente, Palermo",
    spots: { total: 15, available: 8 },
    type: "Experiencia Completa",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    featured: true,
  },
  {
    id: "awaken-junio-1",
    title: "AWAKEN Experience",
    date: "Sábado 5 de Junio, 2026",
    time: "15:00 - 19:00 hs",
    location: "Espacio Consciente, Palermo",
    spots: { total: 15, available: 12 },
    type: "Experiencia Completa",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    featured: false,
  },
  {
    id: "awaken-junio-2",
    title: "AWAKEN Intensivo",
    date: "Sábado 19 de Junio, 2026",
    time: "10:00 - 18:00 hs",
    location: "Quinta El Despertar, Zona Norte",
    spots: { total: 20, available: 15 },
    type: "Retiro de Día Completo",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
    featured: false,
  },
  {
    id: "awaken-julio",
    title: "AWAKEN Experience",
    date: "Sábado 10 de Julio, 2026",
    time: "15:00 - 19:00 hs",
    location: "Espacio Consciente, Palermo",
    spots: { total: 15, available: 15 },
    type: "Experiencia Completa",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    featured: false,
  },
]

export function EventsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative safe-area">
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "group relative rounded-lg sm:rounded-2xl overflow-hidden transition-all duration-700",
                event.featured ? "md:col-span-2" : "",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              {event.featured && (
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-lg sm:rounded-3xl blur-lg opacity-50" />
              )}

              <div className={cn(
                "relative glass-card overflow-hidden",
                event.featured ? "grid grid-cols-1 md:grid-cols-2" : ""
              )}>
                {/* Image */}
                <div className={cn(
                  "relative overflow-hidden",
                  event.featured ? "aspect-video md:aspect-auto" : "aspect-video"
                )}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex gap-1 sm:gap-2 flex-wrap">
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium line-clamp-1">
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-2 sm:px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                        Destacado
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                    <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                      <Calendar size={14} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span className="line-clamp-1">{event.date}</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                      <Clock size={14} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                      <MapPin size={14} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                      <Users size={14} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span className="line-clamp-1">
                        {event.spots.available} de {event.spots.total}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4 sm:mb-6">
                    <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${(event.spots.available / event.spots.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <Link href="/reserva" className="flex-1">
                      <Button className="button-mobile bg-primary hover:bg-primary/90 text-primary-foreground group text-xs sm:text-sm">
                        Reservar
                        <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform hidden sm:block" />
                      </Button>
                    </Link>
                    <Link href={`/eventos/${event.id}`} className="hidden sm:block">
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/10 text-xs sm:text-sm">
                        Ver detalle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate events note */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            ¿Buscás una experiencia privada para tu equipo?
          </p>
          <Link href="/empresas">
            <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 text-xs sm:text-sm">
              Experiencias corporativas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
