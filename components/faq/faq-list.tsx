"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
  {
    category: "Antes de la Experiencia",
    questions: [
      {
        question: "¿Necesito experiencia previa?",
        answer: "No, no necesitas ninguna experiencia previa. La experiencia está diseñada para todos los niveles, desde principiantes hasta personas con experiencia en prácticas de respiración o frío. Te guiamos paso a paso y respetamos tu ritmo personal en todo momento.",
      },
      {
        question: "¿Qué tengo que llevar?",
        answer: "Solo necesitas traer: traje de baño, toalla personal (opcional, nosotros también proporcionamos), ropa cómoda para antes y después de la experiencia, y lo más importante: una mente abierta y disposición para la transformación. Nosotros proporcionamos hidratación, snacks saludables y todos los elementos necesarios.",
      },
      {
        question: "¿Hay alguna contraindicación médica?",
        answer: "La inmersión en hielo no está recomendada para personas con: enfermedades cardíacas no controladas, presión arterial muy alta o muy baja, epilepsia no controlada, embarazo, o infecciones activas. Si tenés alguna condición médica, te recomendamos consultar con tu médico y comunicárnoslo antes del evento.",
      },
      {
        question: "¿Cómo me preparo para la experiencia?",
        answer: "Te recomendamos: evitar comidas pesadas 2-3 horas antes, llegar descansado/a, mantener una hidratación adecuada durante el día, y venir con ropa cómoda. También te enviamos un email con información detallada después de tu reserva.",
      },
    ],
  },
  {
    category: "Durante la Experiencia",
    questions: [
      {
        question: "¿Es seguro entrar al hielo?",
        answer: "Sí, completamente. La inmersión se realiza de forma gradual y controlada, con facilitadores certificados presentes en todo momento. Antes de entrar, preparamos tu cuerpo y mente con técnicas de respiración. El tiempo de inmersión es personalizado según tu nivel y comodidad.",
      },
      {
        question: "¿Cuánto tiempo dura la inmersión en hielo?",
        answer: "La inmersión típica dura entre 2 y 5 minutos, pero esto varía según cada persona. No hay presión para quedarte más tiempo del que te sientas cómodo/a. Algunos participantes hacen inmersiones más cortas y otros más largas. Lo importante es tu experiencia, no el tiempo.",
      },
      {
        question: "¿Puedo asistir si me da miedo el hielo?",
        answer: "¡Absolutamente! De hecho, muchas personas vienen precisamente para superar ese miedo. El trabajo previo de breathwork te prepara mental y físicamente. El frío se convierte en una herramienta de transformación. Nuestros facilitadores están capacitados para acompañarte si sentís miedo o ansiedad.",
      },
      {
        question: "¿Qué pasa si nunca hice breathwork?",
        answer: "No te preocupes, la técnica se explica claramente al inicio y te guiamos durante toda la sesión. El breathwork que hacemos es accesible para todos. La clave es seguir las indicaciones y dejarte llevar por el proceso.",
      },
    ],
  },
  {
    category: "Logística y Reservas",
    questions: [
      {
        question: "¿Cuánto dura la experiencia completa?",
        answer: "La experiencia completa dura aproximadamente 4 horas (de 15:00 a 19:00 hs en eventos regulares). Esto incluye bienvenida, breathwork, inmersión en hielo, integración, sound journey y cierre. Te recomendamos no programar nada importante para después, así podés integrar la experiencia con calma.",
      },
      {
        question: "¿Hay cupos limitados?",
        answer: "Sí, mantenemos grupos reducidos de máximo 15 personas por experiencia para garantizar una atención personalizada y un espacio seguro. Te recomendamos reservar con anticipación ya que las fechas suelen completarse.",
      },
      {
        question: "¿Cómo reservo mi lugar?",
        answer: "Podés reservar a través del formulario en nuestra web o contactándonos directamente por WhatsApp. Te pedimos una seña para confirmar tu lugar y el resto lo podés abonar el día del evento o antes.",
      },
      {
        question: "¿Qué pasa si no puedo asistir después de reservar?",
        answer: "Entendemos que pueden surgir imprevistos. Si avisás con más de 72 horas de anticipación, podemos reprogramar tu lugar para otra fecha. Si avisás con menos tiempo, evaluamos cada caso individualmente. Siempre buscamos la mejor solución para ambas partes.",
      },
    ],
  },
  {
    category: "Después de la Experiencia",
    questions: [
      {
        question: "¿Qué beneficios puedo sentir?",
        answer: "Los beneficios varían según cada persona, pero comúnmente se reportan: mayor claridad mental, sensación de energía renovada, mejor manejo del estrés, mayor presencia y enfoque, liberación emocional, sensación de logro y confianza. Muchos beneficios se intensifican en los días posteriores.",
      },
      {
        question: "¿Hay algún cuidado especial después?",
        answer: "Te recomendamos: mantener una buena hidratación, descansar si tu cuerpo lo pide, evitar entrenamientos muy intensos el mismo día, y darte tiempo para integrar la experiencia. También te compartimos material de integración y prácticas que podés hacer en casa.",
      },
      {
        question: "¿Se puede hacer de forma privada o para grupos?",
        answer: "¡Sí! Ofrecemos experiencias privadas para grupos, equipos de trabajo, eventos corporativos y retiros. Diseñamos la experiencia a medida según tus necesidades. Contactanos para más información sobre experiencias privadas.",
      },
    ],
  },
]

export function FAQList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={cn(
                "mb-12 last:mb-0 transition-all duration-1000",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border-b border-border/50"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5 text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className={cn(
            "mt-16 p-8 rounded-2xl glass-card text-center transition-all duration-1000 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h4 className="text-xl font-bold text-foreground mb-3">
              ¿Tenés otra pregunta?
            </h4>
            <p className="text-muted-foreground mb-6">
              No dudes en contactarnos. Estamos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5491112345678?text=Hola!%20Tengo%20una%20consulta%20sobre%20AWAKEN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
              <Link href="/contacto">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Formulario de contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
