import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { BenefitsHero } from "@/components/benefits/benefits-hero"
import { BenefitsGrid } from "@/components/benefits/benefits-grid"
import { PhilosophySection } from "@/components/benefits/philosophy-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Beneficios | AWAKEN",
  description: "Descubre los beneficios reales, emocionales y energéticos de las experiencias AWAKEN.",
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
