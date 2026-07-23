'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'La experiencia AWAKEN transformó la dinámica de nuestro equipo. Vimos mejoras inmediatas en la comunicación y el manejo del estrés.',
    author: 'María González',
    role: 'Directora de RRHH',
    company: 'Tech Solutions',
    logo: '/logos/company1.svg',
  },
  {
    quote: 'Después del retiro corporativo, la productividad de nuestro equipo de ventas aumentó un 30%. Una inversión que vale cada peso.',
    author: 'Carlos Mendoza',
    role: 'CEO',
    company: 'Innovate Labs',
    logo: '/logos/company2.svg',
  },
  {
    quote: 'Nuestros colaboradores siguen usando las técnicas de respiración meses después. El impacto fue duradero y significativo.',
    author: 'Ana Rodríguez',
    role: 'Gerente de Bienestar',
    company: 'Global Finance',
    logo: '/logos/company3.svg',
  },
]

export function CorporateTestimonials() {
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
            Testimonios Corporativos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Empresas que Confían en AWAKEN
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-background/50 border border-border/50 rounded-2xl p-8"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
