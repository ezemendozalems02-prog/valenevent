"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export function PhilosophySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 gradient-glow opacity-30" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className={cn(
            "relative transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div 
                className="relative aspect-square rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80')`,
                }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-4">
              Nuestra Filosofía
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-gradient">&quot;Una vida correcta puede ser</span>
              <br />
              <span className="text-foreground">más peligrosa que una vida mala.&quot;</span>
            </h2>

            <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
              <p>
                Una vida mala genera movimiento. Una vida correcta genera conformidad.
                No duele lo suficiente como para obligarte a cambiar, pero tampoco te
                llena lo suficiente como para hacerte sentir plenamente viva.
              </p>
              <p>
                Nadie te dice que está mal. Solo vos sabés que algo no termina de encajar.
                Y como nadie lo ve, aprendés a convivir con un vacío que ya ni siquiera
                sabés explicar.
              </p>
              <p>
                Nosotras creemos otra cosa: existe una realidad mucho más grande, y cualquier
                mujer puede empezar a construirla. El primer paso no es aprender más.
                Es dejar de aceptar menos.
              </p>
            </div>

            {/* Quote card */}
            <div className="mt-10 p-6 rounded-xl glass-card border-l-4 border-primary">
              <p className="text-foreground italic">
                &quot;Las oportunidades no aparecen antes de una decisión. Aparecen después.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
