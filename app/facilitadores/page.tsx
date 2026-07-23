import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { FacilitatorsHero } from "@/components/facilitators/facilitators-hero"
import { FacilitatorsGrid } from "@/components/facilitators/facilitators-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Quién Te Guía | Estás Para Más",
  description: "Conocé a Valentina, creadora de Estás Para Más. Una guía, no una gurú: la protagonista siempre sos vos.",
}

export default function FacilitatorsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FacilitatorsHero />
      <FacilitatorsGrid />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
