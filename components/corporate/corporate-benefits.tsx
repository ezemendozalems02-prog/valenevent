'use client'

import { motion } from 'framer-motion'
import { Brain, Heart, Users, Zap, TrendingUp, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'Claridad Mental',
    description: 'Mejora la concentración y toma de decisiones de tu equipo',
    stat: '40%',
    statLabel: 'mejor enfoque',
  },
  {
    icon: Heart,
    title: 'Reducción del Estrés',
    description: 'Técnicas comprobadas para manejar la presión laboral',
    stat: '65%',
    statLabel: 'menos ansiedad',
  },
  {
    icon: Users,
    title: 'Cohesión de Equipo',
    description: 'Experiencias compartidas que fortalecen vínculos',
    stat: '80%',
    statLabel: 'mejor comunicación',
  },
  {
    icon: Zap,
    title: 'Energía Sostenida',
    description: 'Herramientas para mantener alto rendimiento',
    stat: '50%',
    statLabel: 'más energía',
  },
  {
    icon: TrendingUp,
    title: 'Productividad',
    description: 'Equipos más presentes y comprometidos',
    stat: '35%',
    statLabel: 'más productivos',
  },
  {
    icon: Shield,
    title: 'Resiliencia',
    description: 'Capacidad de adaptación ante desafíos',
    stat: '70%',
    statLabel: 'más resilientes',
  },
]

export function CorporateBenefits() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Resultados Medibles para tu Organización
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Inversión en bienestar con retorno tangible en productividad y satisfacción
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background/50 border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                  <p className="text-xs text-muted-foreground">{benefit.statLabel}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
