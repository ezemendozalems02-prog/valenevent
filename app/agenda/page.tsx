import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { AgendaHero } from "@/components/agenda/agenda-hero"
import { AgendaTimeline } from "@/components/agenda/agenda-timeline"
import { WhatsIncluded } from "@/components/agenda/whats-included"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Agenda | AWAKEN",
  description: "Conoce el cronograma detallado de una experiencia AWAKEN. Cada momento está diseñado para tu transformación.",
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AgendaHero />
      <AgendaTimeline />
      <WhatsIncluded />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
