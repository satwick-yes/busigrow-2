'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers,
  FileText,
  DollarSign,
  Rocket,
  ShieldCheck,
  Check,
  X,
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react'

const STANDARD_INCLUSIONS = [
  { icon: Globe, label: 'Premium Domain Asset', desc: 'Registered brand domain ready for immediate DNS configuration and transfer.' },
  { icon: Layers, label: 'Figma Design System', desc: 'Complete vector logos, color systems, typography tokens, and responsive UI kits.' },
  { icon: FileText, label: 'Operations SOP Playbook', desc: 'Standard operating procedures, onboarding documentation, and workflow checklists.' },
  { icon: DollarSign, label: 'Financial Unit Economics', desc: 'Margin structures, pricing calculators, and projection models.' },
  { icon: Rocket, label: 'GTM Strategy Blueprint', desc: 'Target customer personas, paid acquisition frameworks, and outbound blueprints.' },
  { icon: ShieldCheck, label: 'Advisory Support Desk', desc: 'Strategic handover guidance directly from the Busigrow team.' }
]

const IN_HOUSE_BRANDS = [
  {
    id: 'fixxer',
    name: 'Fixxer',
    category: 'Home Services Marketplace',
    tagline: 'Complete local services marketplace platform.',
    desc: 'An on-demand home repair, technician dispatch, and appliance maintenance marketplace platform engineered for rapid urban scale.',
    valuation: '₹1,25,000',
    status: 'Ready for Acquisition',
    highlights: ['Interactive UI/UX Kit', 'Technician Dispatch Logic', 'SOPs & Onboarding Deck'],
    includes: [
      'Registered Domain (fixxer.in + brand assets)',
      'Complete Brand Identity & Figma Design Kit',
      'Service Pricing Matrix & Technician SOP Playbook',
      'Customer Web App Wireframes & Dispatch Flows',
      'GTM Customer Acquisition Blueprint',
      'Handover Consultation & Advisory'
    ]
  },
  {
    id: 'moveho',
    name: 'MoveHo',
    category: 'Logistics & Moving Platform',
    tagline: 'Packers and movers logistics automation & booking platform.',
    desc: 'A specialized relocation, commercial freight dispatch, and shifting platform designed for city-wide logistics operations.',
    valuation: '₹1,80,000',
    status: 'Ready for Acquisition',
    highlights: ['Fleet Branding System', 'Dispatch Booking Flows', 'Corporate RFP Templates'],
    includes: [
      'Registered Domain (moveho.in + digital assets)',
      'Fleet Signage & Vehicle Wrap Design System',
      'Driver Onboarding & Route Workflow Playbook',
      'B2B Corporate Relocation Proposal Deck',
      'Logistics Quotation & Booking Web Architecture',
      'Handover Consultation & Advisory'
    ]
  }
]

const PARKED_DOMAINS = [
  { domain: 'fixxer.in', niche: 'Local Services & Repair', price: 'Included with Fixxer' },
  { domain: 'moveho.in', niche: 'Logistics & Shifting', price: 'Included with MoveHo' },
  { domain: 'growthops.co.in', niche: 'B2B RevOps Engine', price: '₹28,000' },
  { domain: 'adquick.in', niche: 'Transit Ad Placements', price: '₹38,000' },
  { domain: 'fabricraft.in', niche: 'Signage & Fabrication', price: '₹45,000' },
  { domain: 'craftnoida.in', niche: 'Regional Print Hub', price: '₹22,000' }
]

export default function CampaignsPage() {
  const [activeBrandModal, setActiveBrandModal] = useState<typeof IN_HOUSE_BRANDS[0] | null>(null)
  const [expandedInclusion, setExpandedInclusion] = useState<string | null>(null)
  const [activeParkedDomain, setActiveParkedDomain] = useState<string>(PARKED_DOMAINS[0].domain)

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                READY-MADE COMMERCIAL VENTURES
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-foreground leading-[0.95] uppercase">
              In-house brands <br />
              <span className="text-primary">for Sale</span>.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Acquire fully-packaged, ready-to-launch digital brand ventures. Complete with registered domains, Figma design systems, operational SOPs, and GTM execution roadmaps.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>Inquire Acquisition</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE EXACT TWO IN-HOUSE BRANDS
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // VENTURE PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Available In-House Brands
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Single-buyer allocation &middot; 100% intellectual property &amp; asset assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IN_HOUSE_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="p-8 sm:p-10 border border-border bg-card space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 bg-secondary border border-border text-muted-foreground uppercase">
                      {brand.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary border border-border px-2 py-0.5 font-semibold uppercase">
                      {brand.status}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-2">
                    <h3 className="text-3xl sm:text-4xl font-bold uppercase text-foreground">
                      {brand.name}
                    </h3>
                    <div className="text-2xl font-mono font-bold text-foreground">
                      {brand.valuation}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-muted-foreground">
                    {brand.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {brand.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {brand.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2.5 py-1 bg-secondary border border-border text-muted-foreground"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center gap-3">
                  <Link
                    href="/grow-with-us"
                    className="flex-1 py-3.5 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-md shadow-purple-950/40"
                  >
                    Acquire {brand.name} &rarr;
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveBrandModal(brand)}
                    className="px-5 py-3.5 border border-border hover:border-purple-600 bg-secondary text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Dossier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. STANDARD INCLUSIONS (6-PIECE SPEC)
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // PACKAGE SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Standard Brand Inclusions
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {STANDARD_INCLUSIONS.map((item) => {
              const Icon = item.icon
              const isExpanded = expandedInclusion === item.label
              
              return (
                <div
                  key={item.label}
                  onClick={() => setExpandedInclusion(isExpanded ? null : item.label)}
                  className={`border border-border bg-card hover:border-primary transition-colors flex flex-col cursor-pointer md:cursor-default ${
                    isExpanded 
                      ? 'col-span-3 sm:col-span-1 p-6 md:p-8 justify-between' 
                      : 'col-span-1 sm:col-span-1 p-4 md:p-8 aspect-square md:aspect-auto justify-center md:justify-between items-center md:items-stretch'
                  }`}
                >
                  <div className={`space-y-4 w-full ${!isExpanded ? 'flex flex-col items-center justify-center h-full md:block md:h-auto' : ''}`}>
                    <div className={`flex w-full ${isExpanded ? 'justify-start items-start md:items-center' : 'justify-center md:justify-start items-center'}`}>
                      <div className="w-12 h-12 md:w-10 md:h-10 bg-secondary border border-border flex items-center justify-center text-muted-foreground">
                        <Icon className="w-6 h-6 md:w-5 md:h-5" />
                      </div>
                    </div>
                    
                    <div className={`md:block space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
                      <h4 className="text-base font-bold uppercase text-foreground">
                        {item.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. READY MADE, PARKED DOMAINS
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // DIGITAL ASSET VAULT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Ready made, Parked domains
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Curated high-value digital assets and brands ready for acquisition.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARKED_DOMAINS.map((d) => (
              <div
                key={d.domain}
                className="p-6 border border-border bg-card space-y-4 hover:border-primary transition-colors flex flex-col justify-between font-mono"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-primary mb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      AVAILABLE FOR DNS ROUTING
                    </span>
                    <Globe className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground font-mono">
                    {d.domain}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 font-sans">
                    {d.niche}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-bold font-mono">{d.price}</span>
                  <Link
                    href="/grow-with-us"
                    className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    <span>Acquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View Dropdown */}
          <div className="block md:hidden space-y-4">
            <div className="relative">
              <select
                value={activeParkedDomain}
                onChange={(e) => setActiveParkedDomain(e.target.value)}
                className="w-full appearance-none bg-card border border-border text-foreground px-4 py-3 pr-10 text-sm font-bold uppercase focus:outline-none focus:border-primary font-mono cursor-pointer"
              >
                {PARKED_DOMAINS.map(d => (
                  <option key={d.domain} value={d.domain}>{d.domain}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {PARKED_DOMAINS.filter(d => d.domain === activeParkedDomain).map((d) => (
              <div
                key={d.domain}
                className="p-6 border border-border bg-card space-y-4 hover:border-primary transition-colors flex flex-col justify-between font-mono animate-in fade-in"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-primary mb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      AVAILABLE FOR DNS ROUTING
                    </span>
                    <Globe className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground font-mono">
                    {d.domain}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 font-sans">
                    {d.niche}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-bold font-mono">{d.price}</span>
                  <Link
                    href="/grow-with-us"
                    className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    <span>Acquire</span>
                    <ArrowRight className="w-3 h-3" />
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
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                BESPOKE VENTURE INCUBATION
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Need a custom venture built to specification?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                We design, package, build, and legally transfer bespoke commercial entities for founders, family offices, and multi-brand operators.
              </p>
            </div>

            <div>
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>Let&apos;s grow</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dossier Modal */}
      <AnimatePresence>
        {activeBrandModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative font-mono text-xs"
            >
              <button
                type="button"
                onClick={() => setActiveBrandModal(null)}
                className="absolute top-5 right-5 p-2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 border-b border-border pb-4">
                <span className="text-[10px] text-primary uppercase tracking-widest">
                  BRAND DOSSIER // {activeBrandModal.category}
                </span>
                <h3 className="text-2xl font-bold uppercase text-foreground font-sans">
                  {activeBrandModal.name} &middot; {activeBrandModal.valuation}
                </h3>
                <p className="text-muted-foreground text-[11px]">{activeBrandModal.tagline}</p>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-wider text-primary">
                  Included Digital &amp; Operational Assets:
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {activeBrandModal.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  href="/grow-with-us"
                  className="flex-1 py-3.5 bg-white hover:bg-purple-50 text-purple-950 font-sans text-center uppercase font-bold text-xs transition-colors shadow-lg shadow-purple-950/40"
                >
                  Proceed with Acquisition &rarr;
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveBrandModal(null)}
                  className="px-5 py-3.5 border border-border text-muted-foreground hover:bg-secondary uppercase text-xs transition-colors cursor-pointer"
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
