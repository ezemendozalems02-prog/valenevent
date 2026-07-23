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
                  backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80')`,
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
              Filosofía AWAKEN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-gradient">&quot;Como te enfrentas al hielo,</span>
              <br />
              <span className="text-foreground">te enfrentas a la vida.&quot;</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
              <p>
                El hielo no es solo agua fría. Es un espejo que refleja cómo respondés 
                ante la incomodidad, el miedo y lo desconocido. Es un maestro que te 
                enseña sobre vos mismo en segundos lo que la vida tarda años en mostrarte.
              </p>
              <p>
                Cuando aprendés a mantenerte presente y respirar conscientemente frente 
                al frío extremo, desarrollás una capacidad que trasciende el agua helada: 
                la habilidad de estar en calma cuando todo a tu alrededor parece caos.
              </p>
              <p>
                Lo que descubrís en esos minutos de inmersión no se queda en la bañera 
                de hielo. Se convierte en una forma de ser, de responder, de vivir.
              </p>
            </div>

            {/* Quote card */}
            <div className="mt-10 p-6 rounded-xl glass-card border-l-4 border-primary">
              <p className="text-foreground italic">
                &quot;El frío no te hace fuerte. El frío te revela la fortaleza que siempre tuviste.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
