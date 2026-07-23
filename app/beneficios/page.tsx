import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { BenefitsHero } from "@/components/benefits/benefits-hero"
import { BenefitsGrid } from "@/components/benefits/benefits-grid"
import { PhilosophySection } from "@/components/benefits/philosophy-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "El Movimiento | Estás Para Más",
  description: "Estás Para Más no es un evento: es un movimiento. La filosofía detrás de la experiencia y lo que te llevás de ella.",
}

export default function BenefitsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BenefitsHero />
      <BenefitsGrid />
      <PhilosophySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
