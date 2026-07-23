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
    question: "¿Necesito experiencia previa?",
    answer: "No, no necesitas ninguna experiencia previa. La experiencia está diseñada para todos los niveles. Te guiamos paso a paso y respetamos tu ritmo personal en todo momento.",
  },
  {
    question: "¿Es seguro entrar al hielo?",
    answer: "Sí, completamente. La inmersión se realiza de forma gradual y controlada, con facilitadores capacitados presentes en todo momento. Antes de entrar, preparamos tu cuerpo y mente con técnicas de respiración.",
  },
  {
    question: "¿Qué tengo que llevar?",
    answer: "Traje de baño, toalla, ropa cómoda para antes y después, y una mente abierta. Nosotros proporcionamos todo lo demás: hidratación, snacks saludables y un espacio preparado para tu experiencia.",
  },
  {
    question: "¿Puedo asistir si me da miedo el hielo?",
    answer: "¡Absolutamente! De hecho, muchas personas vienen precisamente para superar ese miedo. El trabajo previo de breathwork te prepara mental y físicamente. El frío se convierte en una herramienta de transformación.",
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
              Todo lo que necesitas{" "}
              <span className="text-gradient">saber</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Resolvemos las dudas más comunes para que llegues al evento 
              con total claridad y confianza.
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
