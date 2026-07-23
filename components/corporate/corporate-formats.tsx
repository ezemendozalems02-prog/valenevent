'use client'

import { motion } from 'framer-motion'
import { Check, Clock, Users, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const formats = [
  {
    name: 'Encuentro Express',
    duration: '2-3 horas',
    participants: '10-30 mujeres',
    location: 'En tu espacio',
    description: 'Una primera aproximación a la filosofía de Estás Para Más',
    features: [
      'Charla-experiencia guiada por Valentina',
      'Dinámica de reflexión grupal',
      'Espacio de preguntas abiertas',
      'Material de reflexión para llevar',
    ],
    highlighted: false,
  },
  {
    name: 'Edición Privada',
    duration: 'Jornada completa (8-9h)',
    participants: '15-100 mujeres',
    location: 'Espacio exclusivo',
    description: 'La experiencia Estás Para Más completa, solo para tu comunidad',
    features: [
      'Recorrido completo: la verdad, la decisión, la expansión',
      'Dinámicas individuales y grupales',
      'Círculo de cierre y comunidad',
      'Almuerzo y bebidas incluidos',
      'Material de trabajo exclusivo',
      'Acompañamiento posterior al evento',
    ],
    highlighted: true,
  },
  {
    name: 'Ciclo Extendido',
    duration: '2 encuentros',
    participants: '20-100 mujeres',
    location: 'Venue a elección',
    description: 'Para organizaciones que buscan sostener el cambio en el tiempo',
    features: [
      'Edición privada completa',
      'Encuentro de seguimiento a los 60-90 días',
      'Espacio de comunidad continuo',
      'Materiales personalizados por organización',
      'Reunión de diseño previa con el equipo',
      'Reporte cualitativo posterior',
    ],
    highlighted: false,
  },
]

export function CorporateFormats() {
  return (
    <section id="formatos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Formatos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Adaptamos la Experiencia a tu Organización
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desde un primer encuentro hasta un ciclo completo de acompañamiento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={format.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                format.highlighted
                  ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary/50'
                  : 'bg-card border border-border/50'
              }`}
            >
              {format.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {format.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {format.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{format.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{format.participants}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{format.location}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {format.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className="w-full"
                variant={format.highlighted ? 'default' : 'outline'}
              >
                <Link href="/contacto">
                  Conversemos
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
