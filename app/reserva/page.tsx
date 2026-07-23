import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ReservationHero } from "@/components/reservation/reservation-hero"
import { ReservationForm } from "@/components/reservation/reservation-form"

export const metadata = {
  title: "Reservar | AWAKEN",
  description: "Reserva tu lugar para la próxima experiencia AWAKEN. Cupos limitados.",
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ReservationHero />
      <ReservationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
