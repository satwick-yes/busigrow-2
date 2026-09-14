'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { motion, AnimatePresence } from "framer-motion"
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
  FileText,
  DollarSign,
  Layers,
  MessageSquare,
  ArrowUpRight,
  Check,
  Sparkles,
  TrendingUp,
  Clock,
  Briefcase,
  X,
  ExternalLink,
  ChevronRight,
  Boxes
} from "lucide-react"

const STANDARD_INCLUSIONS = [
  { icon: Globe, label: "Premium Domain", desc: "Clean, registered brand domain (.in / .com digital assets) ready for DNS routing." },
  { icon: Layers, label: "Figma Design System", desc: "Complete vector logos, typography tokens, component styles, and responsive UI kits." },
  { icon: FileText, label: "Notion SOP Playbook", desc: "Detailed day-to-day operations, technician/staff onboarding, and quality SOPs." },
  { icon: DollarSign, label: "3-Yr Financial Model", desc: "Granular unit economics, margin breakdowns, sensitivity tables, and projection ledgers." },
  { icon: Rocket, label: "90-Day GTM Roadmap", desc: "Battle-tested acquisition channels, paid campaign formulas, and immediate traction blueprints." },
  { icon: ShieldCheck, label: "30-Day Advisory", desc: "Direct weekly strategic guidance from Busigrow principals post-handover." }
]

const VENTURES = [
  {
    id: "fixxer",
    name: "Fixxer",
    category: "Home Services",
    tagline: "On-demand home repair & appliance care network built for Tier-1 & Tier-2 expansion.",
    desc: "A clean, modern consumer brand targeting urban homeowners who demand reliable, verified technicians for plumbing, electrical, and appliance upkeep. Packaged with complete customer mobile wireframes and technician vetting checklists.",
    valuation: "₹1,25,000",
    status: "Available Immediately",
    highlights: ["Ready App Wireframes", "Technician SOP Library", "Tier-1 Acquisition Kit"],
    includes: [
      "Registered Premium Domain (fixxer.in + brand assets)",
      "Complete Brand Identity (Figma, Vectors, Typography)",
      "Service Pricing Matrix & Technician SOP Playbook",
      "Customer App Wireframes & Interactive UI Kit",
      "First 90-Day GTM Acquisition Blueprint",
      "30 Days of Busigrow Advisory Support"
    ],
    financialSnapshot: {
      targetGMV: "₹15L - ₹30L / yr",
      grossMargin: "38% - 45%",
      breakEvenHorizon: "3-4 Months"
    }
  },
  {
    id: "movetto",
    name: "Movetto",
    category: "Logistics",
    tagline: "Last-mile urban logistics & intra-city commercial dispatch brand.",
    desc: "Engineered for hyper-local delivery networks, commercial tempo aggregators, or dedicated e-commerce courier fleets looking for an institutional-grade brand presence with vehicle branding guidelines.",
    valuation: "₹1,80,000",
    status: "Available Immediately",
    highlights: ["Fleet Wrap System", "Driver Incentive Model", "Corporate RFP Deck"],
    includes: [
      "Registered Brand Domain & Trademark Checks",
      "Vehicle Wrap & Commercial Fleet Design System",
      "Driver Onboarding & Route Operations Playbook",
      "B2B Corporate Client Proposal Deck",
      "Financial Forecast Model & Unit Economics Ledger",
      "30 Days of Busigrow Advisory Support"
    ],
    financialSnapshot: {
      targetGMV: "₹25L - ₹60L / yr",
      grossMargin: "24% - 32%",
      breakEvenHorizon: "4-6 Months"
    }
  },
  {
    id: "aerobite",
    name: "AeroBite",
    category: "Cloud Kitchen",
    tagline: "High-velocity delivery-first food brand concept with complete menu architecture.",
    desc: "Designed for cloud kitchen operators wanting to launch a premium smash burger & artisanal bowl brand with zero design delays, pre-tested packaging formats, and calibrated food cost percentages.",
    valuation: "₹95,000",
    status: "Available Immediately",
    highlights: ["Custom Packaging Die-Cuts", "Swiggy/Zomato Kit", "Food Cost Ledgers"],
    includes: [
      "Brand Identity & Custom Packaging Die-Cuts",
      "Zomato / Swiggy Storefront Banner Kit & Photo Direction",
      "Menu Architecture & Margin Engineering Spreadsheet",
      "Instagram Creative Launch Bank (30+ High-Res Assets)",
      "Kitchen SOPs & Direct Packaging Vendor Directory",
      "30 Days of Busigrow Advisory Support"
    ],
    financialSnapshot: {
      targetGMV: "₹18L - ₹35L / yr",
      grossMargin: "62% - 68%",
      breakEvenHorizon: "2-3 Months"
    }
  },
  {
    id: "nexusflow",
    name: "NexusFlow",
    category: "B2B SaaS",
    tagline: "Turnkey digital agency & workflow automation starter kit.",
    desc: "A pre-packaged B2B automation consultancy proposition with ready-made client intake funnels, case study templates, and pre-configured WhatsApp workflow integrations for immediate outbound sales.",
    valuation: "₹1,45,000",
    status: "Available Immediately",
    highlights: ["Client Intakes & NDAs", "Live Make/Zapier Templates", "Outbound Copy Bank"],
    includes: [
      "Registered Domain & Live Website Template",
      "B2B Client Service Agreements & NDAs",
      "Pre-Built Make / Zapier / WhatsApp Workflows",
      "Outbound Cold Email & LinkedIn Pitch Playbook",
      "Agency Retainer Pricing Calculator",
      "30 Days of Busigrow Advisory Support"
    ],
    financialSnapshot: {
      targetGMV: "₹20L - ₹50L / yr",
      grossMargin: "80% - 88%",
      breakEvenHorizon: "1-2 Months"
    }
  }
]

const CATEGORIES = ["All Categories", "Home Services", "Logistics", "Cloud Kitchen", "B2B SaaS"]

export default function CampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [activeVentureModal, setActiveVentureModal] = useState<typeof VENTURES[0] | null>(null)

  const filteredVentures = selectedCategory === "All Categories"
    ? VENTURES
    : VENTURES.filter(v => v.category === selectedCategory)

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-300">
      <Navbar />

      {/* Ambient Radial Background Glows */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
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
            Pillar 04: Turnkey Ventures & Tailored Brands
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Skip the 0-to-1 grind.{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent">
              Acquire a ready business.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Clean registered domain, institutional Figma brand system, operational SOPs, unit economics model, and GTM strategy — pre-packaged and ready for legal transfer in 48 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact?pillar=tailored"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-medium text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Inquire About a Venture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#listings"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border border-purple-300/60 dark:border-purple-800/60 text-sm font-medium hover:bg-purple-100/70 dark:hover:bg-purple-900/60 transition-colors"
            >
              <Boxes className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Browse Active Portfolio</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-200/50 dark:border-purple-900/40">
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-purple-500/5 border border-purple-200/40 dark:border-purple-900/40">
              <div className="text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">48h</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Asset Transfer SLA</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-purple-500/5 border border-purple-200/40 dark:border-purple-900/40">
              <div className="text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">100% IP</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Complete Ownership</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-purple-500/5 border border-purple-200/40 dark:border-purple-900/40">
              <div className="text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">30 Days</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Director Advisory</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-purple-500/5 border border-purple-200/40 dark:border-purple-900/40">
              <div className="text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">Zero Debt</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Clean Legal Transfer</div>
            </motion.div>
          </div>
        </motion.section>

        {/* STANDARD TRANSFER INCLUSIONS */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Standard Transfer Package</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
                What comes inside every venture
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-700 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Turnkey handover within 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STANDARD_INCLUSIONS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold tracking-tight text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* VENTURE LISTINGS WITH FILTER */}
        <section id="listings" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Live Portfolio</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
                Available turnkey venture listings
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              Single-buyer allocation &middot; 100% IP Handover
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "bg-purple-50/60 dark:bg-purple-950/30 text-muted-foreground hover:text-foreground border border-purple-200/50 dark:border-purple-900/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Venture Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVentures.map((v, index) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium">
                      {v.category}
                    </span>
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-300 flex items-center gap-1.5 bg-purple-500/5 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                      {v.status}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {v.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-bold text-purple-700 dark:text-purple-300">
                        {v.valuation}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">Complete Transfer</div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-purple-600/80 dark:text-purple-400/80 mb-3">
                    {v.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {v.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {v.highlights.map(h => (
                      <span key={h} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/80 border border-purple-200/50 dark:border-purple-900/40 text-foreground">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Included Assets */}
                  <div className="p-5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/40 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold block mb-3">
                      Included in 48-Hour Transfer
                    </span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {v.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-purple-200/50 dark:border-purple-900/40">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/contact?pillar=tailored&venture=${v.id}`}
                      className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Acquire {v.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => setActiveVentureModal(v)}
                      className="px-4 py-3 rounded-xl bg-secondary/80 hover:bg-purple-500/10 text-foreground border border-purple-200/60 dark:border-purple-900/50 text-xs font-medium transition-colors"
                      title="View Venture Dossier"
                    >
                      Dossier
                    </button>

                    <a
                      href={`https://wa.me/919876543210?text=Hi%20Busigrow%2C%20I%20am%20interested%20in%20acquiring%20the%20${v.name}%20turnkey%20venture%20(${v.valuation})`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                      aria-label={`WhatsApp inquiry for ${v.name}`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CUSTOM VENTURE COMMISSION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/70 via-card to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/20 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_35px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Incubation
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Need a custom turnkey venture built?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We design, package, build, and legally transfer bespoke ventures for family offices, multi-brand founders, and angel syndicates with guaranteed 100% intellectual property handover.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <Link
              href="/contact?pillar=tailored"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all"
            >
              <span>Commission Custom Venture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </main>

      {/* VENTURE DOSSIER MODAL */}
      <AnimatePresence>
        {activeVentureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-card border border-purple-300 dark:border-purple-800 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveVentureModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium">
                    {activeVentureModal.category} &middot; Institutional Dossier
                  </span>
                  <div className="flex items-baseline justify-between mt-3">
                    <h3 className="text-3xl font-bold text-foreground">
                      {activeVentureModal.name}
                    </h3>
                    <span className="text-2xl font-mono font-bold text-purple-600 dark:text-purple-400">
                      {activeVentureModal.valuation}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-purple-600/80 dark:text-purple-400/80 mt-1">
                    {activeVentureModal.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/50 space-y-2">
                  <div className="text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold uppercase">Financial Model Projection</div>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    <div className="p-2 rounded-lg bg-card border border-purple-200/40 dark:border-purple-900/40">
                      <div className="text-xs text-muted-foreground">Target GMV</div>
                      <div className="text-sm font-bold font-mono text-foreground mt-0.5">{activeVentureModal.financialSnapshot.targetGMV}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-purple-200/40 dark:border-purple-900/40">
                      <div className="text-xs text-muted-foreground">Gross Margin</div>
                      <div className="text-sm font-bold font-mono text-purple-600 dark:text-purple-400 mt-0.5">{activeVentureModal.financialSnapshot.grossMargin}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-purple-200/40 dark:border-purple-900/40">
                      <div className="text-xs text-muted-foreground">Breakeven</div>
                      <div className="text-sm font-bold font-mono text-foreground mt-0.5">{activeVentureModal.financialSnapshot.breakEvenHorizon}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Included Legal & Digital Assets
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {activeVentureModal.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 p-2.5 rounded-xl bg-secondary/50 border border-purple-200/30 dark:border-purple-900/30">
                        <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-purple-200/50 dark:border-purple-900/40">
                  <Link
                    href={`/contact?pillar=tailored&venture=${activeVentureModal.id}`}
                    className="flex-1 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium text-center shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                  >
                    Proceed with Acquisition
                  </Link>
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Busigrow%2C%20I%20want%20to%20review%20the%20complete%20dossier%20for%20${activeVentureModal.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  )
}
