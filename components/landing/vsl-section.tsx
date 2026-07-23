import { Play } from "lucide-react"

// Pegá acá la URL de embed del VSL (YouTube: https://www.youtube.com/embed/ID · Vimeo: https://player.vimeo.com/video/ID)
const VSL_EMBED_URL = ""

export function VslSection() {
  return (
    <section id="experiencia" className="relative section-padding bg-charcoal overflow-hidden">
      <div className="safe-area">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-lavender uppercase tracking-[0.18em] mb-4">
            La experiencia
          </span>
          <h2 className="mobile-heading-md text-soft-white text-balance">
            Antes de decidir,{" "}
            <span className="italic">miralo.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-graphite">
            {VSL_EMBED_URL ? (
              <iframe
                src={VSL_EMBED_URL}
                title="Estás Para Más — La experiencia"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-charcoal/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-soft-white/40 bg-soft-white/10 backdrop-blur-sm">
                    <Play size={26} strokeWidth={1.5} className="text-soft-white ml-1" />
                  </span>
                  <span className="text-xs sm:text-sm text-lavender-pale tracking-wide">
                    Muy pronto
                  </span>
                </div>
              </div>
            )}
          </div>
          <p className="mt-6 text-center text-sm text-lavender-pale/80">
            Tres minutos que dicen más que cualquier texto.
          </p>
        </div>
      </div>
    </section>
  )
}
