'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Zap,
  Layers,
  BarChart3,
  Hammer,
  Sparkles,
  Cpu,
  Boxes,
  Compass,
  Check,
  Activity,
  MapPin,
  Clock,
  Award
} from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { HeroCommandCenter } from '@/components/hero-command-center'
import { InteractiveFabricationLab } from '@/components/interactive-fabrication-lab'
import { LiveWorkflowPipeline } from '@/components/live-workflow-pipeline'
import { InteractiveComparisonSlider } from '@/components/interactive-comparison-slider'
import { SpotlightCard } from '@/components/spotlight-card'

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Radiant Violet & Purple Aurora Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-600/15 via-violet-600/10 to-transparent blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift" />
      <div className="absolute top-[35%] right-[-150px] w-[700px] h-[700px] bg-gradient-to-br from-violet-600/10 via-purple-700/8 to-transparent blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[65%] left-[-150px] w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-violet-500/8 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <Navbar />

      <main className="pt-28 pb-20 space-y-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* HERO SECTION WITH INTERACTIVE COMMAND CENTER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="pt-6 pb-10 border-b border-purple-200/50 dark:border-purple-900/40 relative space-y-10"
        >
          <div className="space-y-6">
            {/* Top Operational Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 dark:bg-purple-950/50 border border-purple-200/60 dark:border-purple-800/60 text-xs font-mono font-light text-purple-800 dark:text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.12)] hover:border-purple-400/80 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span className="font-normal text-purple-900 dark:text-purple-200">Unified NCR Infrastructure:</span> Hardware CNC + Sub-Second Web + WhatsApp AI
              </div>
            </motion.div>

            {/* Main Punchy Value Prop Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground leading-[1.08] max-w-4xl"
            >
              Your brand everywhere your customers are{' '}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent font-normal">
                looking.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed"
            >
              High-precision outdoor fabrication in Noida, turnkey Next.js digital platforms in Cyber City, and deterministic lead-to-quote automations. Zero third-party handoff friction.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-normal shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Scope Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-purple-50/60 dark:bg-purple-950/40 text-foreground border border-purple-200/70 dark:border-purple-800/60 text-sm font-light hover:bg-purple-100/70 dark:hover:bg-purple-900/50 hover:border-purple-400/80 transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>+91 98765 43210</span>
              </a>
            </motion.div>
          </div>

          {/* Bespoke Interactive Pillar Command Center */}
          <motion.div variants={itemVariants} className="pt-2">
            <HeroCommandCenter />
          </motion.div>
        </motion.section>

        {/* INTERACTIVE COMPARISON AUDIT (BEFORE VS AFTER SLIDER) */}
        <section className="space-y-6">
          <InteractiveComparisonSlider />
        </section>

        {/* PILLAR 1 DEEP DIVE: INTERACTIVE SIGNAGE & FABRICATION LAB */}
        <section className="space-y-6">
          <InteractiveFabricationLab />
        </section>

        {/* PILLAR 2 & 3: THREE CORE ARCHITECTURAL PILLARS (SPOTLIGHT CARDS) */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-mono font-light mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENTERPRISE SPECIFICATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                Engineered for High-Growth Brands
              </h2>
            </div>
            <p className="text-sm font-light text-muted-foreground max-w-md">
              We own every layer of execution from raw acrylic sheets in Noida Sector 63 to Next.js edge deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Offline Fabrication Spotlight Card */}
            <SpotlightCard className="p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100/80 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-5 shadow-sm">
                  <Hammer className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-normal tracking-tight text-foreground">
                    Offline Fabrication & Signage
                  </h3>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                  Cast acrylic 3D channel letters, titanium metal letters, ACP facade panelling, and highway unipole takeovers.
                </p>
                <ul className="space-y-2.5 text-xs font-mono font-light text-muted-foreground">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Direct Noida Sector 63 OEM Plant</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Samsung IP67 Backlit Modules</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>24-48h Guaranteed NCR Install</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-purple-100 dark:border-purple-900/40">
                <Link
                  href="/offline"
                  className="inline-flex items-center gap-1.5 text-xs font-normal text-purple-700 dark:text-purple-400 hover:text-purple-600 group hover:translate-x-1 transition-all"
                >
                  <span>Explore Fabrication Catalog</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Online Engineering Spotlight Card */}
            <SpotlightCard className="p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100/80 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-5 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal tracking-tight text-foreground mb-2">
                  Digital Engineering & Web
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                  Custom Next.js App Router applications, Shopify headless stores, and sub-second lead capture funnels.
                </p>
                <ul className="space-y-2.5 text-xs font-mono font-light text-muted-foreground">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>100/100 Core Web Vitals SLA</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Meta CAPI Server-Side Tracking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Razorpay & ERP Integration</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-purple-100 dark:border-purple-900/40">
                <Link
                  href="/online"
                  className="inline-flex items-center gap-1.5 text-xs font-normal text-purple-700 dark:text-purple-400 hover:text-purple-600 hover:translate-x-1 transition-all"
                >
                  <span>Explore Web Engineering</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Workflow & AI Automations Spotlight Card */}
            <SpotlightCard className="p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100/80 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-5 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal tracking-tight text-foreground mb-2">
                  Workflow & WhatsApp Automations
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                  WhatsApp Cloud API pipelines, Claude AI lead qualification, instant dynamic PDF quote synthesis, and CRM sync.
                </p>
                <ul className="space-y-2.5 text-xs font-mono font-light text-muted-foreground">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>&lt; 3.2s Lead Response Latency</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Automated Itemized PDF Proposals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>HubSpot / Airtable Bi-directional Sync</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-purple-100 dark:border-purple-900/40">
                <Link
                  href="/automations"
                  className="inline-flex items-center gap-1.5 text-xs font-normal text-purple-700 dark:text-purple-400 hover:text-purple-600 hover:translate-x-1 transition-all"
                >
                  <span>Explore AI Automations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* PILLAR 3 DEEP DIVE: LIVE WORKFLOW PIPELINE SIMULATOR */}
        <section className="space-y-6">
          <LiveWorkflowPipeline />
        </section>

        {/* VERIFIED NCR COMMERCIAL CASE STUDIES */}
        <section className="space-y-8 pt-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-mono font-light mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>MEASURABLE NCR IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground">
              Proven Commercial Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case 1 */}
            <SpotlightCard className="p-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-light px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300/50 dark:border-purple-800/50">
                  Retail Multi-City Rollout
                </span>
                <h3 className="text-2xl font-normal tracking-tight text-foreground mt-4">
                  QSR Franchise 50-Location Takeover
                </h3>
                <p className="text-sm font-light text-muted-foreground mt-2 leading-relaxed">
                  Designed, fabricated, and installed illuminated storefront signage and internal retail collateral across 50 outlets in Delhi NCR & Bangalore in under 6 weeks.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-purple-200/50 dark:border-purple-900/40 bg-purple-50/20 dark:bg-purple-950/20 rounded-xl px-4">
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">+45%</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Foot Traffic</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">₹8.5Cr</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Q1 Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">50</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">6 Wks</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Completion</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground font-mono font-light">
                Scope: ACP Facade, 3D Cast Acrylic Letters, Municipal Permits, Structural Mounting
              </div>
            </SpotlightCard>

            {/* Case 2 */}
            <SpotlightCard className="p-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-light px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300/50 dark:border-purple-800/50">
                  D2C Apparel Brand
                </span>
                <h3 className="text-2xl font-normal tracking-tight text-foreground mt-4">
                  E-Commerce Architecture & WhatsApp Funnel
                </h3>
                <p className="text-sm font-light text-muted-foreground mt-2 leading-relaxed">
                  Engineered custom Next.js storefront paired with automated WhatsApp cart recovery and automated inventory dispatch triggers.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-purple-200/50 dark:border-purple-900/40 bg-purple-50/20 dark:bg-purple-950/20 rounded-xl px-4">
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">3.8x</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">ROAS Multiplier</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">₹4.2Cr</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Gross Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">18ms</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Edge TTFB</div>
                </div>
                <div>
                  <div className="text-2xl font-light font-mono text-purple-700 dark:text-purple-300">22%</div>
                  <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Cart Recovery</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground font-mono font-light">
                Scope: Next.js Frontend, Meta Conversions API, WhatsApp Cloud Bot, Razorpay Subscriptions
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <motion.section
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.25 }}
          className="p-8 sm:p-14 rounded-3xl border border-purple-300/60 dark:border-purple-800/60 bg-gradient-to-r from-[#0d0622] via-[#1a0b3b] to-[#0c0520] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_50px_rgba(124,58,237,0.3)] relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono font-light">
              <Clock className="w-3.5 h-3.5" />
              <span>24-Hour Scoping Turnaround</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              Ready to deploy your next growth milestone?
            </h3>
            <p className="text-sm font-light text-purple-200/80 leading-relaxed">
              Book a technical scoping session. We will deliver a detailed quote, timeline, and architectural execution specification within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-purple-950 font-normal text-sm hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <span>Get Specification & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}
