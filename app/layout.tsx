import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estás Para Más | Hay una forma de vivir que todavía no conocés',
  description: 'Estás Para Más es una experiencia de expansión de identidad para mujeres. El día en que dejás de aceptar una vida correcta y empezás a construir una vida elegida.',
  generator: 'v0.app',
  keywords: ['Estás Para Más', 'expansión de identidad', 'evento para mujeres', 'decisión', 'comunidad femenina', 'experiencia premium'],
  authors: [{ name: 'Estás Para Más' }],
  openGraph: {
    title: 'Estás Para Más | Hay una forma de vivir que todavía no conocés',
    description: 'Dejá de aceptar una vida que sabés que no te representa. Estás para más.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
