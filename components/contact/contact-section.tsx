"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Instagram, Mail, MapPin, Phone, Check } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "La forma más rápida de contactarnos",
    action: "Enviar mensaje",
    href: "https://wa.me/5491112345678?text=Hola!%20Quiero%20información%20sobre%20AWAKEN",
    color: "bg-[#25D366]",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "Seguinos y escribinos por DM",
    action: "@awaken.exp",
    href: "https://instagram.com/awaken.exp",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Para consultas formales",
    action: "info@awaken.com",
    href: "mailto:info@awaken.com",
    color: "bg-primary",
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Methods */}
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Formas de contacto
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl glass-card hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0",
                    method.color
                  )}>
                    <method.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <span className="text-sm text-primary group-hover:underline">
                    {method.action}
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl glass-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nuestras experiencias se realizan en diferentes espacios de Buenos Aires y alrededores.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    La ubicación exacta se envía después de confirmar tu reserva.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate CTA */}
            <div className="mt-8 p-6 rounded-xl glass-card border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">
                ¿Experiencia privada o corporativa?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Diseñamos experiencias a medida para equipos, retiros y eventos privados.
              </p>
              <a
                href="https://wa.me/5491112345678?text=Hola!%20Quiero%20información%20sobre%20experiencias%20privadas%20o%20corporativas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Consultar
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Envianos un mensaje
            </h2>

            {isSubmitted ? (
              <div className="p-8 rounded-xl glass-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground">
                  Te responderemos a la brevedad. Gracias por contactarnos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input 
                      required
                      placeholder="Tu nombre"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Apellido
                    </label>
                    <Input 
                      required
                      placeholder="Tu apellido"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    required
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono (opcional)
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+54 11 1234 5678"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Asunto
                  </label>
                  <select 
                    required
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="info">Información general</option>
                    <option value="reserva">Consulta sobre reservas</option>
                    <option value="privado">Experiencia privada</option>
                    <option value="corporativo">Experiencia corporativa</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    required
                    placeholder="Contanos en qué podemos ayudarte..."
                    className="bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
