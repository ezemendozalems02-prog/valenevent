import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata = {
  title: "Contacto | Estás Para Más",
  description: "Escribinos. Estamos para responder tus consultas sobre la experiencia Estás Para Más.",
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
