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
    category: "Sobre la Experiencia",
    questions: [
      {
        question: "¿Qué es exactamente Estás Para Más?",
        answer: "Es una experiencia presencial de un día, diseñada para mujeres. No es un congreso ni una charla motivacional: es una jornada pensada para que dejes de aceptar una vida que sabés que no te representa y tomes una decisión concreta sobre la que querés construir.",
      },
      {
        question: "¿Es un evento de desarrollo personal?",
        answer: "No en el sentido tradicional. No creemos en acumular libros, cursos y frases inspiradoras si la vida sigue siendo la misma. Es una experiencia de expansión de identidad: no te vas con más información, te vas con una decisión.",
      },
      {
        question: "¿Y si mi vida ya está bien?",
        answer: "Justamente. Estás Para Más no es para mujeres que están mal: es para mujeres que tienen una vida correcta —estable, aprobada por todos— y que en silencio saben que no las representa del todo. Si esa frase te resonó, es para vos.",
      },
      {
        question: "¿Necesito preparación previa?",
        answer: "Ninguna. No hay requisitos, ni tareas previas, ni niveles. Solo necesitás disposición para decirte la verdad. Todo lo demás sucede durante el día.",
      },
    ],
  },
  {
    category: "Durante el Día",
    questions: [
      {
        question: "¿Tengo que hablar o compartir mi historia frente a otras?",
        answer: "No. Nadie te va a exponer ni presionar. Hay dinámicas individuales y momentos en comunidad, pero todo lo que trabajás es tuyo: compartís únicamente lo que elijas compartir.",
      },
      {
        question: "¿Voy a estar cómoda si voy sola?",
        answer: "La mayoría de las mujeres llega sola. El espacio está diseñado para que desde el primer momento te sientas parte, no espectadora. Muchas se van con vínculos que siguen mucho después del evento.",
      },
      {
        question: "¿Cómo es el lugar?",
        answer: "Un salón premium, cuidado hasta el último detalle: la luz, la ambientación, la comida, los tiempos. Nada está improvisado, porque la estética también comunica: entrás a un lugar donde todo invita a respirar más profundo.",
      },
      {
        question: "¿Quién guía la experiencia?",
        answer: "Valentina, creadora de Estás Para Más. Pero la protagonista del día no es ella: sos vos. Valentina facilita el proceso; las decisiones las tomás vos.",
      },
    ],
  },
  {
    category: "Logística y Reservas",
    questions: [
      {
        question: "¿Cuánto dura la experiencia?",
        answer: "Es una jornada completa, de 9:00 a 19:00 hs aproximadamente, con pausas, almuerzo y momentos de encuentro incluidos. Te recomendamos no agendar nada para después: vas a querer llegar a casa con calma.",
      },
      {
        question: "¿Hay cupos limitados?",
        answer: "Sí. El cupo está limitado por el diseño de la experiencia, no como táctica de venta: queremos que cada mujer viva el día como fue pensado. Si la fecha que querés está completa, podés anotarte para la siguiente edición.",
      },
      {
        question: "¿Cómo reservo mi lugar?",
        answer: "A través del formulario de la web o directamente por WhatsApp. Confirmás tu lugar con una seña y el resto lo abonás antes del evento.",
      },
      {
        question: "¿Qué pasa si no puedo asistir después de reservar?",
        answer: "Pueden surgir imprevistos, lo entendemos. Si avisás con más de 72 horas de anticipación, reprogramamos tu lugar para otra edición. Con menos tiempo, evaluamos cada caso individualmente y buscamos la mejor solución.",
      },
    ],
  },
  {
    category: "Después del Evento",
    questions: [
      {
        question: "¿Con qué me voy a ir?",
        answer: "Con una decisión tomada, una dirección clara y un material de trabajo que es tuyo. No prometemos cambiarte la vida en un día: prometemos ser el punto de inflexión que marque el comienzo de ese cambio.",
      },
      {
        question: "¿El evento termina cuando termina el día?",
        answer: "No: empieza ahí. Pasás a formar parte de la comunidad Estás Para Más, una red de mujeres que se ven, se escuchan, se sostienen y se celebran. Porque ninguna transformación importante ocurre completamente sola.",
      },
      {
        question: "¿Se puede llevar la experiencia a una empresa o comunidad?",
        answer: "Sí. Hacemos ediciones privadas para organizaciones y comunidades de mujeres, diseñadas a medida. Escribinos y lo conversamos.",
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
                href="https://wa.me/5491112345678?text=Hola!%20Tengo%20una%20consulta%20sobre%20Estás%20Para%20Más"
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
