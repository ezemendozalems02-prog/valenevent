"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MapPin, Clock, Users, Check, MessageCircle, AlertCircle } from "lucide-react"

const events = [
  {
    id: "edicion-buenos-aires",
    name: "Estás Para Más - Buenos Aires, 15 de Mayo",
    date: "Sábado 15 de Mayo, 2026",
    time: "9:00 - 19:00 hs",
    location: "Salón premium, Buenos Aires",
    spots: 40,
  },
  {
    id: "edicion-cordoba",
    name: "Estás Para Más - Córdoba, 19 de Junio",
    date: "Sábado 19 de Junio, 2026",
    time: "9:00 - 19:00 hs",
    location: "Córdoba Capital",
    spots: 75,
  },
  {
    id: "edicion-rosario",
    name: "Estás Para Más - Rosario, 10 de Julio",
    date: "Sábado 10 de Julio, 2026",
    time: "9:00 - 19:00 hs",
    location: "Rosario, Santa Fe",
    spots: 100,
  },
]

export function ReservationForm() {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section ref={ref} className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-ocean" />
        <div className="relative safe-area">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Check size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              ¡Tu lugar está en camino!
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8">
              Te contactaremos pronto por WhatsApp para confirmarlo.
            </p>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button-mobile bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm">
                <MessageCircle size={16} className="mr-2" />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative safe-area">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Event Selection */}
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Elegí tu edición
            </h2>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={cn(
                    "p-3 sm:p-5 rounded-lg sm:rounded-xl text-left transition-all duration-300 text-xs sm:text-sm",
                    selectedEvent === event.id
                      ? "glass-card border-2 border-primary bg-primary/5"
                      : "glass-card hover:bg-secondary/50"
                  )}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm">{event.name}</h3>
                    <div className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                      selectedEvent === event.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}>
                      {selectedEvent === event.id && <Check size={10} className="text-primary-foreground" />}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-primary shrink-0" />
                      <span className="line-clamp-1">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-primary shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-primary shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={12} className="text-primary shrink-0" />
                      <span>{event.spots} cupos</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Info box */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-5 rounded-lg sm:rounded-xl glass-card border border-primary/20">
              <div className="flex items-start gap-2 sm:gap-3">
                <AlertCircle size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1 text-xs sm:text-sm">Cupo limitado</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    El cupo está limitado por el diseño de la experiencia, para que cada mujer viva el día como fue pensado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Tus datos
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                    Nombre
                  </label>
                  <Input 
                    required
                    placeholder="Nombre"
                    className="bg-secondary/50 border-border focus:border-primary text-xs sm:text-sm h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                    Apellido
                  </label>
                  <Input 
                    required
                    placeholder="Apellido"
                    className="bg-secondary/50 border-border focus:border-primary text-xs sm:text-sm h-9 sm:h-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                  WhatsApp
                </label>
                <Input 
                  required
                  type="tel"
                  placeholder="+54 11 1234 5678"
                  className="bg-secondary/50 border-border focus:border-primary text-xs sm:text-sm h-9 sm:h-10"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                  Email
                </label>
                <Input 
                  required
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-secondary/50 border-border focus:border-primary text-xs sm:text-sm h-9 sm:h-10"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                  Cantidad de personas
                </label>
                <select 
                  required
                  className="w-full h-9 sm:h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground text-xs sm:text-sm focus:border-primary focus:outline-none"
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5+">5 o más</option>
                </select>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2 block">
                  Observaciones (opcional)
                </label>
                <Textarea 
                  placeholder="¿Algo que debamos saber?"
                  className="bg-secondary/50 border-border focus:border-primary min-h-[80px] sm:min-h-[100px] text-xs sm:text-sm"
                />
              </div>

              <Button 
                type="submit"
                disabled={!selectedEvent || isSubmitting}
                className="button-mobile bg-primary hover:bg-primary/90 text-primary-foreground mt-2 sm:mt-4 text-xs sm:text-sm"
              >
                {isSubmitting ? "Enviando..." : "Quiero mi lugar"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar el formulario aceptás que te contactemos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
