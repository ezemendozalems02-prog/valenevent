import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ExperienceHero } from "@/components/experience/experience-hero"
import { JourneySection } from "@/components/experience/journey-section"
import { TargetAudience } from "@/components/experience/target-audience"
import { WhatMakesUsDifferent } from "@/components/experience/what-makes-us-different"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "La Experiencia | Estás Para Más",
  description: "Qué vive una mujer en Estás Para Más: el día en que deja de aceptar una vida correcta y empieza a construir una vida elegida.",
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExperienceHero />
      <JourneySection />
      <TargetAudience />
      <WhatMakesUsDifferent />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
