import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { EventsHero } from "@/components/events/events-hero"
import { EventsGrid } from "@/components/events/events-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Próximos Eventos | AWAKEN",
  description: "Conoce las próximas experiencias AWAKEN. Reserva tu lugar para vivir una transformación guiada.",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EventsHero />
      <EventsGrid />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
