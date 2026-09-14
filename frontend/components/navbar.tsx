"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "Online", href: "/online" },
  { label: "Offline", href: "/offline" },
  { label: "Automations", href: "/automations" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "BusiMag", href: "/busimag" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/online") return pathname === "/online" || pathname === "/services"
    if (href === "/offline") return pathname === "/offline" || pathname === "/offline-marketing"
    if (href === "/automations") return pathname === "/automations" || pathname === "/platform"
    if (href === "/campaigns") return pathname === "/campaigns" || pathname === "/tailored"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-purple-200/40 dark:border-purple-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-purple-500/30 flex items-center justify-center font-normal text-xs shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
            <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-purple-600/10 pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-normal text-base tracking-tight text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Busigrow
            </span>
            <span className="text-[10px] font-mono font-light px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-300/40 dark:border-purple-800/50">
              v6.0
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/40 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs font-normal px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? "text-white font-normal"
                    : "text-muted-foreground hover:text-foreground hover:bg-purple-100/50 dark:hover:bg-purple-900/30"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-normal px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-purple-100 dark:hover:bg-purple-900/40 border border-purple-200/50 dark:border-purple-800/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-600" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-purple-200/50 dark:border-purple-900/50 bg-background/95 backdrop-blur-2xl px-4 py-4 space-y-2 overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-light px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-purple-600 text-white font-normal shadow-[0_0_15px_rgba(124,58,237,0.35)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-purple-50 dark:hover:bg-purple-950/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-purple-200/40 dark:border-purple-900/40">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-normal bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-3 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.35)]"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
