export function AboutSection() {
  return (
    <section id="quien" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />
      <div className="relative safe-area">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-stone">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                alt="Valentina, creadora de Estás Para Más"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="inline-block text-[11px] sm:text-xs font-medium text-plum uppercase tracking-[0.18em] mb-4">
              Quién te guía
            </span>
            <h2 className="mobile-heading-md text-foreground mb-6">
              Valentina
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              También tuvo una vida correcta: estable, aprobada por todos, suficiente desde afuera.
              Hasta que se hizo la pregunta que venía evitando: <em>¿esta vida realmente me representa?</em>
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Estás Para Más nace de ese camino. No de una teoría: de la experiencia real de dejar
              de aceptar menos.
            </p>
            <blockquote className="border-l-2 border-plum pl-5">
              <p className="font-serif italic text-xl sm:text-2xl text-plum-deep leading-snug">
                &ldquo;Mi trabajo no es que me sigas. Es que aprendas a confiar en vos misma.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
