import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Necesito experiencia previa en este tipo de eventos?",
    a: "No. Solo necesitás las ganas de mirar tu vida con honestidad. Todo lo demás sucede durante el día.",
  },
  {
    q: "¿Qué incluye la entrada?",
    a: "La jornada completa, materiales de trabajo, coffee breaks, almuerzo y el acceso a la comunidad.",
  },
  {
    q: "¿Dónde es exactamente?",
    a: "En un salón premium de Buenos Aires. La dirección exacta se envía por email al confirmar tu inscripción.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. El pago se procesa por Mercado Pago y podés financiarlo en hasta 6 cuotas con tarjeta.",
  },
  {
    q: "¿Qué pasa si no puedo asistir?",
    a: "Podés transferir tu entrada a otra persona o usarla en la siguiente edición avisando hasta 7 días antes.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      <div className="safe-area">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-plum uppercase tracking-[0.18em] mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="mobile-heading-md text-foreground">
            Lo que necesitás saber.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-stone/70">
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:text-plum hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
