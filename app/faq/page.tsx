import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQList } from "@/components/faq/faq-list"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Preguntas Frecuentes | Estás Para Más",
  description: "Todas tus dudas sobre Estás Para Más, respondidas con honestidad. Sin promesas exageradas, sin letra chica.",
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
