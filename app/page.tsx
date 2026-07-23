import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { PracticesSection } from "@/components/home/practices-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { NextEventSection } from "@/components/home/next-event-section"
import { TimelineSection } from "@/components/home/timeline-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FacilitatorsSection } from "@/components/home/facilitators-section"
import { FAQPreviewSection } from "@/components/home/faq-preview-section"
import { CTASection } from "@/components/home/cta-section"

// Optimize Core Web Vitals
export const experimental_palicer = true

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PracticesSection />
      <BenefitsSection />
      <NextEventSection />
      <TimelineSection />
      <TestimonialsSection />
      <FacilitatorsSection />
      <FAQPreviewSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
