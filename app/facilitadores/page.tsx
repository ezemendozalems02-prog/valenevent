import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { FacilitatorsHero } from "@/components/facilitators/facilitators-hero"
import { FacilitatorsGrid } from "@/components/facilitators/facilitators-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Facilitadores | AWAKEN",
  description: "Conoce al equipo de facilitadores certificados que te guiarán en tu experiencia AWAKEN.",
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
