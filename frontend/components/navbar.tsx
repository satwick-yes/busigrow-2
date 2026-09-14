"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "Offline", href: "/offline" },
  { label: "Online", href: "/online" },
  { label: "Automation", href: "/automations" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "BizMag", href: "/busimag" },
  { label: "About", href: "/about" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md overflow-hidden bg-zinc-950 flex items-center justify-center">
            <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              Busigrow
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase">
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
                    ? "text-black dark:text-white"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-black dark:bg-white" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/grow-with-us"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors rounded-sm"
          >
            <span>Grow with us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-800 dark:text-zinc-200"
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
            className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-5 py-6 space-y-6"
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
                        ? "text-black dark:text-white"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <Link
                href="/grow-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm font-medium rounded-sm"
              >
                Grow with us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

