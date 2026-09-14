"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { ThemeToggle } from "./theme-toggle"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Online", href: "/online" },
  { label: "Offline", href: "/offline" },
  { label: "Ready made", href: "/campaigns" },
  { label: "Automations", href: "/automations" },
  { label: "Busimag", href: "/busimag" },
  { label: "Grow with us", href: "/grow-with-us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/offline") return pathname === "/offline" || pathname === "/offline-marketing"
    if (href === "/online") return pathname === "/online" || pathname === "/services"
    if (href === "/automations") return pathname === "/automations" || pathname === "/platform"
    if (href === "/campaigns") return pathname === "/campaigns" || pathname === "/tailored"
    if (href === "/busimag") return pathname.startsWith("/busimag")
    if (href === "/grow-with-us") return pathname === "/grow-with-us" || pathname === "/contact"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md overflow-hidden bg-primary/20 border border-border flex items-center justify-center">
            <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              Busigrow
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-wide uppercase">
              Growth &amp; Fabrication
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs font-medium transition-colors ${
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/grow-with-us"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 bg-foreground text-background hover:bg-foreground/90 transition-colors uppercase tracking-wider rounded-none shadow-md"
          >
            <span>Let&apos;s grow</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-background" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-border bg-card px-5 py-6 space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? "text-foreground font-bold"
                        : "text-muted-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="pt-6 border-t border-border flex flex-col gap-3">
              <Link
                href="/grow-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-white text-purple-950 hover:bg-purple-50 text-sm font-bold uppercase tracking-wider rounded-none"
              >
                Let&apos;s grow &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
