import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata = {
  title: "Contacto | AWAKEN",
  description: "Contacta con AWAKEN. Estamos para responder tus consultas sobre experiencias inmersivas de transformación.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
