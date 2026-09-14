"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "offline pages", href: "/offline" },
  { label: "online pages", href: "/online" },
  { label: "automation", href: "/automations" },
  { label: "campaigns", href: "/campaigns" },
  { label: "BizMag", href: "/busimag" },
  { label: "about", href: "/about" },
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
    if (href === "/about") return pathname === "/about"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0c0716]/95 backdrop-blur-md border-b border-purple-100 dark:border-purple-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800 bg-purple-950 flex items-center justify-center shadow-sm">
            <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Busigrow
            </span>
            <span className="text-[10px] text-purple-600 dark:text-purple-400 font-medium tracking-wide uppercase">
              Growth &amp; Fabrication Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/60">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                  active
                    ? "text-purple-900 dark:text-white bg-white dark:bg-purple-900/80 shadow-sm border border-purple-200/50 dark:border-purple-700/50"
                    : "text-zinc-600 dark:text-purple-200/80 hover:text-purple-700 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I'd%20like%20to%20grow%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/grow-with-us"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white transition-all shadow-sm shadow-purple-500/20"
          >
            <span>grow with us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-purple-800 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800"
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
            className="lg:hidden border-b border-purple-100 dark:border-purple-900/50 bg-white/98 dark:bg-[#0c0716]/98 px-5 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-purple-50 dark:bg-purple-900/50 text-purple-900 dark:text-white font-semibold border border-purple-200/60 dark:border-purple-800/60"
                        : "text-zinc-600 dark:text-purple-200/80 hover:bg-purple-50/50 dark:hover:bg-purple-900/30 hover:text-purple-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="pt-3 border-t border-purple-100 dark:border-purple-900/50 flex flex-col gap-2">
              <Link
                href="/grow-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium shadow-sm shadow-purple-500/20"
              >
                grow with us
              </Link>
              <a
                href="tel:+919876543210"
                className="w-full text-center py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200 text-sm font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
