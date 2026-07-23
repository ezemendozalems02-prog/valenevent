import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQList } from "@/components/faq/faq-list"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Preguntas Frecuentes | AWAKEN",
  description: "Resolvemos todas tus dudas sobre las experiencias AWAKEN. Todo lo que necesitas saber antes de reservar.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FAQHero />
      <FAQList />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
