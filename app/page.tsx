import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { HeroSection } from "@/components/landing/hero-section"
import { VslSection } from "@/components/landing/vsl-section"
import { AboutSection } from "@/components/landing/about-section"
import { EventInfoSection } from "@/components/landing/event-info-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CheckoutSection } from "@/components/landing/checkout-section"
import { FaqSection } from "@/components/landing/faq-section"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VslSection />
      <AboutSection />
      <EventInfoSection />
      <TestimonialsSection />
      <CheckoutSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
