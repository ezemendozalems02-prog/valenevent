"use client"

export function TestimonialsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')`,
          }}
        />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-breathe z-5" />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-sm text-primary tracking-[0.2em] uppercase mb-6">
            Testimonios
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Lo que se llevan</span>
            <br />
            <span className="text-gradient">quienes lo viven</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Historias reales de transformación, superación y conexión profunda 
            de personas que vivieron la experiencia AWAKEN.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
