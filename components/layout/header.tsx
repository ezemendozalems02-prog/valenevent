"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/experiencia", label: "La Experiencia" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/eventos", label: "Próximos Eventos" },
  { href: "/agenda", label: "Agenda" },
  { href: "/facilitadores", label: "Facilitadores" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="safe-area">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] text-foreground">
              AWAKEN
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contacto">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Contacto
              </Button>
            </Link>
            <Link href="/reserva">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 relative overflow-hidden group">
                <span className="relative z-10">Reservar</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground touch-target"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-background/95 backdrop-blur-xl border-t border-border transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="safe-area py-4 sm:py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 touch-target"
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-border my-3" />
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors touch-target"
            >
              Contacto
            </Link>
            <Link href="/reserva" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full button-mobile bg-primary hover:bg-primary/90 text-primary-foreground mt-3">
                Reservar Lugar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
