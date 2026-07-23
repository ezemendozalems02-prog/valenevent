import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AWAKEN | Experiencias Inmersivas de Transformación',
  description: 'Experiencias inmersivas de breathwork, inmersión en hielo, meditación y expansión de conciencia. Despierta tu energía, expande tu conciencia, reconecta con tu poder interior.',
  generator: 'v0.app',
  keywords: ['breathwork', 'inmersión en hielo', 'meditación', 'transformación', 'bienestar', 'conciencia', 'AWAKEN'],
  authors: [{ name: 'AWAKEN' }],
  openGraph: {
    title: 'AWAKEN | Experiencias Inmersivas de Transformación',
    description: 'Despierta tu energía. Expande tu conciencia. Reconecta con tu poder interior.',
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
  themeColor: '#0a1628',
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
