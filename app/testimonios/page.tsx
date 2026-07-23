import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { TestimonialsHero } from "@/components/testimonials/testimonials-hero"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Testimonios | AWAKEN",
  description: "Descubre las experiencias transformadoras de quienes ya vivieron AWAKEN.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TestimonialsHero />
      <TestimonialsGrid />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
