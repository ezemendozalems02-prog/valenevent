import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { CorporateHero } from '@/components/corporate/corporate-hero'
import { CorporateBenefits } from '@/components/corporate/corporate-benefits'
import { CorporateFormats } from '@/components/corporate/corporate-formats'
import { CorporateTestimonials } from '@/components/corporate/corporate-testimonials'
import { CorporateCTA } from '@/components/corporate/corporate-cta'

export const metadata: Metadata = {
  title: 'Experiencias Corporativas | AWAKEN',
  description: 'Transforma el bienestar de tu equipo con experiencias inmersivas de breathwork, hielo y meditación para empresas.',
}

export default function CorporatePage() {
  return (
    <>
      <Header />
      <main>
        <CorporateHero />
        <CorporateBenefits />
        <CorporateFormats />
        <CorporateTestimonials />
        <CorporateCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
