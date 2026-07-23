"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Es un evento de desarrollo personal?",
    answer: "No en el sentido tradicional. No venimos a darte herramientas ni frases inspiradoras: es una experiencia de expansión de identidad. Un día diseñado para que tomes una decisión que venís postergando.",
  },
  {
    question: "¿Y si mi vida ya está bien?",
    answer: "Justamente. Estás Para Más no es para mujeres que están mal: es para mujeres que tienen una vida correcta y saben, en silencio, que no las representa del todo. Si te resonó esa frase, es para vos.",
  },
  {
    question: "¿Tengo que compartir mi historia frente a otras?",
    answer: "No. Nadie te va a exponer ni presionar. Todo lo que trabajás durante el día es tuyo; compartís únicamente lo que elijas compartir. El espacio está cuidado hasta el último detalle.",
  },
  {
    question: "¿Voy a salir con algo concreto?",
    answer: "Sí. No te vas con una carpeta de apuntes: te vas con una decisión tomada y una dirección clara. Y con una comunidad de mujeres que eligieron lo mismo que vos.",
  },
]

export function FAQPreviewSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-ice" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <div className={cn(
            "lg:sticky lg:top-32 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Todo lo que necesitás{" "}
              <span className="text-gradient">saber</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Las dudas más comunes, respondidas con honestidad.
              Sin promesas exageradas, sin letra chica.
            </p>
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group font-medium"
            >
              Ver todas las preguntas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - FAQ */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-border/50 py-2"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
