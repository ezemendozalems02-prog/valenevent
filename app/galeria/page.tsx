import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { GalleryHero } from '@/components/gallery/gallery-hero'
import { GalleryGrid } from '@/components/gallery/gallery-grid'

export const metadata: Metadata = {
  title: 'Galería | Estás Para Más',
  description: 'Momentos reales de las ediciones de Estás Para Más.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
