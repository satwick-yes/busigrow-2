'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Rocket,
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
  Boxes,
  X
} from 'lucide-react'

const STANDARD_INCLUSIONS = [
  { icon: Globe, label: 'Premium Domain Asset', desc: 'Registered brand domain (.in / .com digital assets) ready for instant DNS routing.' },
  { icon: Layers, label: 'Figma Design System', desc: 'Complete vector logos, typography tokens, component styles, and responsive UI kits.' },
  { icon: FileText, label: 'Notion SOP Playbook', desc: 'Operational handbooks, technician onboarding docs, and automated quality checklists.' },
  { icon: DollarSign, label: '3-Year Financial Model', desc: 'Granular unit economics, margin breakdowns, sensitivity tables, and projection ledgers.' },
  { icon: Rocket, label: '90-Day GTM Engine', desc: 'Battle-tested acquisition channels, paid campaign formulas, and immediate traction blueprints.' },
  { icon: ShieldCheck, label: '30-Day Advisory Desk', desc: 'Direct weekly strategic guidance from Busigrow principals post-handover.' }
]

const VENTURES = [
  {
    id: 'fixxer',
    name: 'Fixxer',
    category: 'Home Services',
    tagline: 'On-demand home repair & appliance care network built for Tier-1 & Tier-2 expansion.',
    desc: 'A clean, modern consumer brand targeting urban homeowners who demand reliable, verified technicians for plumbing, electrical, and appliance upkeep.',
    valuation: '₹1,25,000',
    status: 'Available Immediately',
    roas: '4.8x',
    highlights: ['Ready App Wireframes', 'Technician SOP Library', 'Tier-1 Acquisition Kit'],
    includes: [
      'Registered Premium Domain (fixxer.in + brand assets)',
      'Complete Brand Identity (Figma, Vectors, Typography)',
      'Service Pricing Matrix & Technician SOP Playbook',
      'Customer App Wireframes & Interactive UI Kit',
      'First 90-Day GTM Acquisition Blueprint',
      '30 Days of Busigrow Advisory Support'
    ],
    financialSnapshot: {
      targetGMV: '₹15L - ₹30L / yr',
      grossMargin: '38% - 45%',
      breakEvenHorizon: '3-4 Months'
    }
  },
  {
    id: 'moveho',
    name: 'MoveHo',
    category: 'Logistics',
    tagline: 'Last-mile urban relocation, shifting & commercial dispatch brand.',
    desc: 'Engineered for hyper-local relocation networks, commercial tempo aggregators, and dedicated city fleet dispatch looking for an institutional-grade brand presence.',
    valuation: '₹1,80,000',
    status: 'Available Immediately',
    roas: '5.2x',
    highlights: ['Fleet Wrap System', 'Tailored Dispatch App', 'Corporate RFP Deck'],
    includes: [
      'Registered Brand Domain (moveho.in + assets)',
      'Vehicle Wrap & Commercial Fleet Design System',
      'Driver Onboarding & Route Operations Playbook',
      'B2B Corporate Relocation Proposal Deck',
      'Tailored Logistics Web App & Dispatch Engine',
      '30 Days of Busigrow Advisory Support'
    ],
    financialSnapshot: {
      targetGMV: '₹25L - ₹60L / yr',
      grossMargin: '24% - 32%',
      breakEvenHorizon: '4-6 Months'
    }
  },
  {
    id: 'aerobite',
    name: 'AeroBite',
    category: 'Cloud Kitchen',
    tagline: 'High-velocity delivery-first food brand concept with complete menu architecture.',
    desc: 'Designed for cloud kitchen operators wanting to launch a premium smash burger & artisanal bowl brand with zero design delays and pre-tested packaging formats.',
    valuation: '₹95,000',
    status: 'Available Immediately',
    roas: '6.4x',
    highlights: ['Custom Packaging Die-Cuts', 'Swiggy/Zomato Kit', 'Food Cost Ledgers'],
    includes: [
      'Brand Identity & Custom Packaging Die-Cuts',
      'Zomato / Swiggy Storefront Banner Kit & Photo Direction',
      'Menu Architecture & Margin Engineering Spreadsheet',
      'Instagram Creative Launch Bank (30+ High-Res Assets)',
      'Kitchen SOPs & Direct Packaging Vendor Directory',
      '30 Days of Busigrow Advisory Support'
    ],
    financialSnapshot: {
      targetGMV: '₹18L - ₹35L / yr',
      grossMargin: '62% - 68%',
      breakEvenHorizon: '2-3 Months'
    }
  },
  {
    id: 'nexusflow',
    name: 'NexusFlow',
    category: 'B2B SaaS',
    tagline: 'Turnkey digital agency & workflow automation starter kit.',
    desc: 'A pre-packaged B2B automation consultancy proposition with ready-made client intake funnels, case study templates, and pre-configured WhatsApp workflow integrations.',
    valuation: '₹1,45,000',
    status: 'Available Immediately',
    roas: '7.1x',
    highlights: ['Client Intakes & NDAs', 'Live Make/Zapier Templates', 'Outbound Copy Bank'],
    includes: [
      'Registered Domain & Live Website Template',
      'B2B Client Service Agreements & NDAs',
      'Pre-Built Make / Zapier / WhatsApp Workflows',
      'Outbound Cold Email & LinkedIn Pitch Playbook',
      'Agency Retainer Pricing Calculator',
      '30 Days of Busigrow Advisory Support'
    ],
    financialSnapshot: {
      targetGMV: '₹20L - ₹50L / yr',
      grossMargin: '80% - 88%',
      breakEvenHorizon: '1-2 Months'
    }
  }
]

export default function CampaignsPage() {
  const [activeVentureModal, setActiveVentureModal] = useState<typeof VENTURES[0] | null>(null)

  return (
    <div className="w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION: SWISS GRID WITH MASSIVE NUMBERS
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-purple-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300">
              PILLAR 04 // TURNKEY VENTURES &amp; CAMPAIGN ACCELERATION
            </span>
            <span className="text-[11px] font-mono text-purple-400">
              LEGAL TRANSFER SLA: 48 HOURS &middot; 100% IP ASSIGNMENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-white leading-[0.92]">
            Turnkey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
              Ventures.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl font-light leading-relaxed">
            Skip the 0-to-1 operational grind. Acquire institutional-grade business assets with complete registered domains, Figma design systems, financial ledgers, and validated GTM roadmaps.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/40"
            >
              <span>Acquire a Turnkey Venture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20want%20to%20review%20available%20turnkey%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 border border-purple-800 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Talk to Deal Principal</span>
            </a>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-purple-900/40 font-mono">
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">48H</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">LEGAL ASSET TRANSFER</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-purple-300 tracking-tight">100%</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">IP &amp; CODE OWNERSHIP</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">5.2X</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">AVG BLENDED ROAS</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">30 DAYS</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">PRINCIPAL ADVISORY</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. VENTURE PORTFOLIO GRID
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                // ACTIVE INVENTORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Live Venture Portfolio
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-300/80 max-w-sm">
              Single-buyer allocation &middot; Instant legal trademark and domain escrow transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="border border-purple-900/50 bg-[#0c0618] p-8 space-y-6 flex flex-col justify-between hover:border-purple-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                    <span className="px-2.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 uppercase">
                      {v.category}
                    </span>
                    <span className="text-emerald-400 font-semibold uppercase">
                      {v.status}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <h3 className="text-3xl font-bold uppercase text-white font-sans">
                      {v.name}
                    </h3>
                    <div className="text-2xl font-mono font-bold text-purple-300">
                      {v.valuation}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-purple-400 mt-1">
                    {v.tagline}
                  </p>

                  <p className="text-xs text-purple-200/70 font-light leading-relaxed mt-4">
                    {v.desc}
                  </p>

                  {/* Highlights Bar */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {v.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-1 bg-purple-950/40 border border-purple-900/60 text-zinc-300"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-purple-900/40">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/grow-with-us"
                      className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider text-center transition-colors"
                    >
                      Acquire {v.name} &rarr;
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveVentureModal(v)}
                      className="px-4 py-3 border border-purple-800 text-purple-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. STANDARD INCLUSIONS (6-PIECE MATRIX)
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
              // STANDARD TRANSFER SPEC
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              What Comes Inside Every Venture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STANDARD_INCLUSIONS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="p-6 border border-purple-900/50 bg-[#090314] space-y-4 hover:border-purple-500 transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold uppercase text-white font-sans">
                    {item.label}
                  </h4>
                  <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. READY-MADE & PARKED DOMAINS VAULT
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                // READY-MADE DIGITAL ASSETS
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Parked Domains &amp; Brand Vault
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-300/80 max-w-sm">
              Pre-vetted, high-authority domain assets available for immediate trademark assignment and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {[
              { domain: 'fixxer.in', niche: 'Home Services & Tech', status: 'Packaged & Tailored', price: 'Included with Fixxer' },
              { domain: 'moveho.in', niche: 'Urban Relocation & Fleet', status: 'Packaged & Tailored', price: 'Included with MoveHo' },
              { domain: 'aerobite.in', niche: 'QSR / Cloud Kitchen', status: 'Ready for DNS', price: '₹35,000' },
              { domain: 'fabricraft.in', niche: 'Signage & Industrial', status: 'Premium Asset', price: '₹45,000' },
              { domain: 'growthops.co.in', niche: 'B2B RevOps Engine', status: 'Brand Reserved', price: '₹28,000' },
              { domain: 'craftnoida.in', niche: 'NCR Regional Print Hub', status: 'Active DNS', price: '₹22,000' },
              { domain: 'adquick.in', niche: 'Transit Ad Placement', status: 'Ready to Transfer', price: '₹38,000' },
              { domain: 'nexusflow.in', niche: 'SaaS & Automation', status: 'Packaged Venture', price: 'Included with NexusFlow' },
            ].map((d) => (
              <div
                key={d.domain}
                className="p-5 border border-purple-900/40 bg-[#090312] space-y-3 hover:border-purple-500 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-purple-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {d.status}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mt-2 font-mono">
                    {d.domain}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans">
                    {d.niche}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between">
                  <span className="text-xs text-purple-300 font-bold">{d.price}</span>
                  <Link
                    href="/grow-with-us"
                    className="text-[10px] text-purple-400 hover:text-white uppercase tracking-wider"
                  >
                    Claim &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-purple-800 bg-[#120726] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-900/50 border border-purple-700 text-purple-300">
                BESPOKE VENTURE INCUBATION
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                Need a custom venture built to specification?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 font-light leading-relaxed">
                We design, package, build, and legally transfer bespoke commercial entities for family offices and multi-brand operators.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/grow-with-us"
                className="px-8 py-4 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>grow with us &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dossier Modal */}
      <AnimatePresence>
        {activeVentureModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e061c] border border-purple-700 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative font-mono text-xs"
            >
              <button
                type="button"
                onClick={() => setActiveVentureModal(null)}
                className="absolute top-5 right-5 p-2 text-purple-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 border-b border-purple-900/60 pb-4">
                <span className="text-[10px] text-purple-400 uppercase tracking-widest">
                  INSTITUTIONAL DOSSIER // {activeVentureModal.category}
                </span>
                <h3 className="text-2xl font-bold uppercase text-white font-sans">
                  {activeVentureModal.name} &middot; {activeVentureModal.valuation}
                </h3>
                <p className="text-purple-300 text-[11px]">{activeVentureModal.tagline}</p>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-wider text-purple-400">
                  Included Legal &amp; Digital Assets:
                </div>
                <ul className="space-y-2 text-zinc-300">
                  {activeVentureModal.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  href="/grow-with-us"
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-sans text-center uppercase font-medium text-xs transition-colors"
                >
                  Proceed with Acquisition
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveVentureModal(null)}
                  className="px-5 py-3 border border-purple-800 text-purple-300 hover:bg-purple-950/60 uppercase text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  )
}
