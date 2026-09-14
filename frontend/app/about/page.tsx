'use client'

import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Zap,
  Printer,
  Sparkles,
  Cpu,
  Boxes,
  Award
} from "lucide-react"

const PRINCIPLES = [
  {
    number: "01",
    title: "Execution is the Only Strategy",
    desc: "A brand concept that takes 3 months to fabricate or a slow website that takes 4 seconds to load is dead on arrival. We obsess over 24-48h turnaround speed, sub-second latency, and immaculate ground finishing.",
  },
  {
    number: "02",
    title: "Single-Source Accountability",
    desc: "No more finger-pointing between your web dev agency, freelance graphic designer, and local acrylic printer. We own the design system, the Next.js codebase, the fabrication floor, and the nighttime installation crew.",
  },
  {
    number: "03",
    title: "Discretion & Institutional Craft",
    desc: "For our B2B creative agency partners, we operate completely white-label with strict NDAs. For our direct enterprise brands, we engineer physical and digital assets that look institutional on day one.",
  },
  {
    number: "04",
    title: "Automate the Mundane",
    desc: "We practice what we preach. Our internal operations, client reporting, and quotation pipelines run on custom automation engines, allowing our team to focus 100% on high-touch craftsmanship.",
  },
]

const STATS = [
  { value: "150+", label: "Brands Scaled", detail: "Active client portfolio" },
  { value: "24-48h", label: "NCR Turnaround", detail: "Fabrication to install SLA" },
  { value: "400+", label: "Storefronts Built", detail: "Physical retail rollouts" },
  { value: "35+", label: "Agency Partners", detail: "White-label B2B infrastructure" },
]

const HUBS = [
  {
    name: "Noida Sector 63 Hub",
    role: "Centralized OEM Fabrication & UV Printing",
    desc: "Industrial manufacturing unit equipped with flatbed UV printers, high-precision CNC routers, laser cutters, acrylic thermoforming, and nighttime dispatch fleets.",
    specs: "30,000 sq.ft floor · 24h shifts active"
  },
  {
    name: "Gurugram Cyber City Studio",
    role: "Digital Studio & Software Engineering",
    desc: "Where our full-stack engineers, UI/UX designers, and paid media strategists build high-speed Next.js web applications, Meta ad funnels, and CRM automation webhooks.",
    specs: "Full-stack sprint desks"
  },
  {
    name: "South Delhi Scoping Desk",
    role: "Client Architecture & Strategy",
    desc: "Dedicated to enterprise project scoping, multi-store physical rollout audits, and strategic B2B agency white-label integrations.",
    specs: "Direct director consultations"
  },
]

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-300">
      <Navbar />

      {/* Ambient Radial Background Glows */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <main className="pt-28 pb-24 space-y-20 max-w-6xl mx-auto px-4 sm:px-6">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 pb-12 border-b border-purple-200/60 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-700 dark:text-purple-300 mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            About Busigrow Growth Systems
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Bridging high design and{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent">
              ground physical execution.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Busigrow was founded in Delhi NCR to solve a fundamental disconnect in modern commerce: digital agencies don&apos;t know how to fabricate in the real world, and local sign contractors have zero design sensibility.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-medium text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-200/50 dark:border-purple-900/40">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-purple-500/5 border border-purple-200/40 dark:border-purple-900/40"
              >
                <div className="text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-foreground mt-1">{stat.label}</div>
                <div className="text-[11px] font-mono text-muted-foreground">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* GENESIS & ARCHITECTURE */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-4"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">The Disconnect</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Why one integrated growth stack wins.
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Most business owners juggle 5 to 7 disconnected vendors: a web studio in Bengaluru, a freelance designer on Upwork, a sign printer in Noida, a metal fabricator in Gurugram, and a separate media buyer.
                </p>
                <p>
                  The result is fragmented brand identity, blown store opening deadlines, mismatched Pantone shades, and massive coordination overhead.
                </p>
                <p>
                  Busigrow consolidated this entire stack under one roof: modern Next.js development, Figma brand token systems, in-house CNC sign manufacturing, commercial fleet wrapping, and WhatsApp workflow automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 p-7 sm:p-8 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md space-y-5 shadow-[0_0_35px_rgba(139,92,246,0.15)]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-purple-200/50 dark:border-purple-900/40">
                <div>
                  <h3 className="text-base font-semibold text-foreground">Integrated Growth Infrastructure</h3>
                  <p className="text-xs font-mono text-purple-700 dark:text-purple-300">Delhi NCR Hubs &middot; Pan-India Dispatch</p>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
                </span>
              </div>

              <div className="space-y-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-900/40">
                  <Printer className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">In-House Manufacturing:</span> Direct ownership of large-format UV flatbeds, solvent machines, and 3D acrylic signage routers.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-900/40">
                  <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">Digital Product Studio:</span> Production-grade Next.js, headless e-commerce, and high-converting ad funnels.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-900/40">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">Deterministic Automation:</span> Sub-5-second WhatsApp qualification funnels, CRM integrations, and automated quoting.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 CORE PRINCIPLES */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Operating Manifesto</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              How we operate every single day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, index) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300"
              >
                <div>
                  <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-semibold block mb-2">
                    {p.number} // PRINCIPLE
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DELHI NCR HUBS */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Ground Footprint</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Delhi NCR Hubs &middot; Pan-India Dispatch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HUBS.map((hub, index) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-2 text-base font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1.5">
                    <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>{hub.name}</span>
                  </div>
                  <p className="text-xs font-mono text-purple-700 dark:text-purple-300 mb-3">{hub.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{hub.desc}</p>
                </div>
                <div className="pt-3 border-t border-purple-200/50 dark:border-purple-900/40 text-[11px] font-mono text-purple-700/80 dark:text-purple-300/80">
                  {hub.specs}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/70 via-card to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/20 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_35px_rgba(139,92,246,0.15)]"
        >
          <div className="space-y-3 max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s build something that lasts.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tell us about your brand challenge. We&apos;ll assemble the exact engineering, creative, and fabrication team for your scope.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all"
            >
              <span>Start Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}
