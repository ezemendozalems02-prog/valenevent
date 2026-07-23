"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491112345678?text=Hola!%20Quiero%20información%20sobre%20Estás%20Para%20Más"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-plum hover:bg-plum-deep text-soft-white border border-plum-deep/30 transition-colors duration-500 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={1.5} />
    </a>
  )
}
