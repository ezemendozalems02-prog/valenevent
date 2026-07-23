import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  experiencia: [
    { href: "/experiencia", label: "La Experiencia" },
    { href: "/beneficios", label: "Beneficios" },
    { href: "/agenda", label: "Agenda" },
    { href: "/facilitadores", label: "Facilitadores" },
  ],
  eventos: [
    { href: "/eventos", label: "Próximos Eventos" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/galeria", label: "Galería" },
    { href: "/empresas", label: "Eventos Privados" },
  ],
  info: [
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/contacto", label: "Contacto" },
    { href: "/reserva", label: "Reservar" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="safe-area py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-foreground">
                AWAKEN
              </span>
            </Link>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Experiencias inmersivas de breathwork, inmersión en hielo y meditación.
            </p>
            <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="https://instagram.com/awaken"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 touch-target"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 touch-target"
                aria-label="WhatsApp"
              >
                <Phone size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@awaken.com"
                className="p-2 sm:p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 touch-target"
                aria-label="Email"
              >
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links - Experiencia */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-foreground uppercase mb-2 sm:mb-4">
              Experiencia
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {footerLinks.experiencia.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Eventos */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-foreground uppercase mb-2 sm:mb-4">
              Eventos
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {footerLinks.eventos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-foreground uppercase mb-2 sm:mb-4">
              Información
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6 flex items-start gap-2 text-muted-foreground">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm">Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} AWAKEN.
          </p>
          <p className="text-xs text-muted-foreground order-1 sm:order-2">
            Despierta. Expande. Transforma.
          </p>
        </div>
      </div>
    </footer>
  )
}
