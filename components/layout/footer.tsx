import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />

      <div className="safe-area py-12 sm:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <Link href="/" className="inline-block">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.14em] text-foreground">
              ESTÁS PARA MÁS
            </span>
          </Link>

          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Una experiencia de expansión de identidad para mujeres que saben que su vida puede ser más grande.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/soyvalentinaparodi?igsh=cHdpaXQwY21iZzhs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-lavender-pale text-plum-deep transition-colors duration-300 touch-target"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/5493541694363"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-lavender-pale text-plum-deep transition-colors duration-300 touch-target"
              aria-label="WhatsApp"
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={13} strokeWidth={1.5} />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Estás Para Más.
          </p>
          <p className="font-serif italic text-sm text-muted-foreground order-1 sm:order-2">
            Hay una forma de vivir que hoy todavía no conocés.
          </p>
        </div>
      </div>
    </footer>
  )
}
