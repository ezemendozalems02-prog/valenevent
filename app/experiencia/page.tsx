import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ExperienceHero } from "@/components/experience/experience-hero"
import { JourneySection } from "@/components/experience/journey-section"
import { TargetAudience } from "@/components/experience/target-audience"
import { WhatMakesUsDifferent } from "@/components/experience/what-makes-us-different"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "La Experiencia | AWAKEN",
  description: "Descubre qué vive una persona al asistir a una experiencia AWAKEN. Un viaje profundo de transformación interior.",
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
