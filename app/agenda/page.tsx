import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { AgendaHero } from "@/components/agenda/agenda-hero"
import { AgendaTimeline } from "@/components/agenda/agenda-timeline"
import { WhatsIncluded } from "@/components/agenda/whats-included"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "El Día | Estás Para Más",
  description: "Cómo se vive un día de Estás Para Más. Un recorrido diseñado para que tomes la decisión que venís postergando.",
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
