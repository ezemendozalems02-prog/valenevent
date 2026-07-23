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
  title: 'Ediciones Privadas | Estás Para Más',
  description: 'Llevá la experiencia Estás Para Más a tu organización. Ediciones privadas para equipos y comunidades de mujeres.',
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
