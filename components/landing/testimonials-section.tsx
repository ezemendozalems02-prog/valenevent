const testimonials = [
  {
    quote:
      "Llegué pensando que era un evento más. Me fui con la decisión que venía postergando hace tres años.",
    name: "Carolina",
    detail: "38 años · Buenos Aires",
  },
  {
    quote:
      "No hubo promesas ni fórmulas. Hubo silencio, preguntas verdaderas y una claridad que todavía me acompaña.",
    name: "Mercedes",
    detail: "45 años · Córdoba",
  },
  {
    quote:
      "Un mes después cambié de trabajo. No por impulso: por elección. Esa es la diferencia.",
    name: "Sofía",
    detail: "33 años · Rosario",
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-lg border border-lavender/25 bg-plum/40"
            >
              <blockquote className="font-serif text-lg sm:text-xl text-lavender-pale leading-snug mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <span className="block text-sm font-medium text-soft-white">{t.name}</span>
                <span className="block text-xs text-lavender mt-1">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
