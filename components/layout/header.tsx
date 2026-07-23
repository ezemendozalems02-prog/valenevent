"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#experiencia", label: "La Experiencia" },
  { href: "#quien", label: "Quién Te Guía" },
  { href: "#evento", label: "El Evento" },
  { href: "#testimonios", label: "Historias" },
  { href: "#faq", label: "FAQ" },
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
        isScrolled ? "glass py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="safe-area">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.14em] text-foreground">
              ESTÁS PARA MÁS
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-plum group-hover:w-full transition-all duration-500" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-plum group-hover:w-3/4 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a href="#inscripcion">
              <Button size="sm" className="bg-primary hover:bg-plum text-primary-foreground px-4 transition-colors duration-500">
                Reservar mi lugar
              </Button>
            </a>
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 touch-target"
              >
                {item.label}
              </a>
            ))}
            <a href="#inscripcion" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full button-mobile bg-primary hover:bg-plum text-primary-foreground mt-3 transition-colors duration-500">
                Reservar mi lugar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
