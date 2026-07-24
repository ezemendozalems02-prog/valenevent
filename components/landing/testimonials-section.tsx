// Testimonios reales. Para agregar una captura de WhatsApp/mensaje:
// 1) Guardá la imagen en /public/testimonios/ (ej: captura-1.jpg)
// 2) Agregá un item { type: "screenshot", src: "/testimonios/captura-1.jpg", alt: "..." }
// Para un testimonio de texto real, agregá { type: "quote", quote: "...", name: "...", detail: "..." }
type Testimonial =
  | { type: "quote"; quote: string; name: string; detail?: string }
  | { type: "screenshot"; src: string; alt: string }

const testimonials: Testimonial[] = [
  {
    type: "screenshot",
    src: "/testimonios/captura-1.jpg",
    alt: "Captura de conversación de WhatsApp de una participante",
  },
  {
    type: "screenshot",
    src: "/testimonios/captura-2.jpg",
    alt: "Captura de mensajes de participantes celebrando una decisión",
  },
  {
    type: "screenshot",
    src: "/testimonios/captura-3.jpg",
    alt: "Captura de mensajes del grupo agradeciendo la experiencia",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative section-padding overflow-hidden bg-plum-deep">
      <div className="safe-area">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-sand uppercase tracking-[0.18em] mb-4">
            Historias
          </span>
          <h2 className="mobile-heading-md text-soft-white text-balance">
            Mujeres que decidieron.
          </h2>
        </div>

        {testimonials.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-10 border border-lavender/20 rounded-lg">
            <p className="text-sm text-lavender-pale/80">
              Testimonios reales, muy pronto.
            </p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid mb-6">
                {t.type === "screenshot" ? (
                  <img
                    src={t.src}
                    alt={t.alt}
                    className="w-full h-auto rounded-lg border border-lavender/25"
                  />
                ) : (
                  <figure className="flex flex-col justify-between p-7 sm:p-8 rounded-lg border border-lavender/25 bg-plum/40">
                    <blockquote className="font-serif text-lg sm:text-xl text-lavender-pale leading-snug mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption>
                      <span className="block text-sm font-medium text-soft-white">{t.name}</span>
                      {t.detail && (
                        <span className="block text-xs text-lavender mt-1">{t.detail}</span>
                      )}
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
