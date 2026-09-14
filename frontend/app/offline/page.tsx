'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Clock,
  ArrowRight,
  Printer,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Layers,
  Wrench,
  Car,
  Lightbulb,
  Building,
  Target,
  Palette
} from 'lucide-react'

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}

const SERVICES = [
  {
    title: 'Printing',
    desc: 'Large format, flex, vinyl, backlit, and precision direct-to-substrate commercial printing.',
    icon: Printer,
    highlight: '24h Turnaround'
  },
  {
    title: 'Designing',
    desc: 'Custom architectural layouts, 3D retail renderings, signage vectors, and print-ready production files.',
    icon: Palette,
    highlight: 'In-house Team'
  },
  {
    title: 'Installation',
    desc: 'Trained nighttime and day rigging crews for storefronts, building wraps, high-dwell sites, and interior signs.',
    icon: Wrench,
    highlight: 'On-site Crews'
  },
  {
    title: 'OEM Suppliers team (Multiple Supplier)',
    desc: 'Direct manufacturer sourcing across metals, acrylics, LED modules, and raw substrates with quality grading.',
    icon: Layers,
    highlight: 'Direct Sourcing'
  },
  {
    title: 'Branding Placement (inside autos)',
    desc: 'High-visibility transit advertising, interior auto displays, backseat branding, and fleet wraps.',
    icon: Car,
    highlight: 'Transit Network'
  },
  {
    title: 'Concept Marketing',
    desc: 'Experiential on-ground activations, guerrilla marketing setups, pop-ups, and interactive brand installations.',
    icon: Lightbulb,
    highlight: 'High Dwell'
  }
]

const SPECIALIZED_TEAMS = [
  {
    name: 'Experimental Ads team',
    desc: 'Engineers novel outdoor formats, ambient installations, and disruptive high-attention public media.',
    role: 'Innovation & Impact'
  },
  {
    name: 'Interior designers (Commercial)',
    desc: 'Specialized in commercial retail spaces, showroom visual merchandising, and branded office environments.',
    role: 'Spatial Experience'
  },
  {
    name: 'Sales team',
    desc: 'Dedicated account managers providing rapid scoping, transparent quotes, and continuous project tracking.',
    role: 'Client Success'
  },
  {
    name: 'Design team',
    desc: 'Creative directors and visual designers ensuring strict brand fidelity across every substrate.',
    role: 'Creative Systems'
  },
  {
    name: 'Execution team',
    desc: 'Production specialists and ground installers delivering flawless physical deployment under 24-hour SLA.',
    role: 'Ground Operations'
  }
]

const SERVICE_PACKAGES = [
  {
    name: 'Essential Storefront',
    desc: 'Complete outdoor signage package for single retail locations and new store openings.',
    timeline: '24-48 Hours Delivery',
    deliverables: [
      'Site measurement & technical survey',
      'Custom 3D signage design & vectors',
      'Substrate fabrication & LED module setup',
      'Professional on-site installation'
    ]
  },
  {
    name: 'Transit & Auto Fleet',
    desc: 'Targeted in-vehicle transit branding and auto interior placements across key commercial corridors.',
    timeline: 'Rapid Campaign Rollout',
    deliverables: [
      'Route & demographic corridor mapping',
      'Weather-resistant high-durability print production',
      'Fleet installation & tamper checks',
      'Campaign inspection & reporting'
    ]
  },
  {
    name: 'Commercial Interior & Merchandising',
    desc: 'End-to-end commercial interior branding for offices, experience centers, and multi-brand outlets.',
    timeline: 'Turnkey Execution',
    deliverables: [
      'Spatial layout & 3D visualization',
      'Branded wall claddings & directional signage',
      'Custom acrylic & metal display units',
      'Nighttime deployment without business disruption'
    ]
  }
]

export default function OfflinePage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION (24-HOUR DELIVERY TIMELINE)
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                OFFLINE EXECUTION &middot; FABRICATION
              </span>
              <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5 px-3 py-1 bg-secondary/50 border border-border">
                <Clock className="w-3.5 h-3.5 text-primary" />
                24-HOUR DELIVERY TIMELINE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-foreground leading-[0.95] uppercase">
              High-Speed <br />
              <span className="text-primary">Physical Branding</span> &amp; Fabrication.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Rapid manufacturing, pristine printing, and dedicated on-ground deployment. From high-impact retail signage to transit auto placement with a guaranteed 24-hour delivery timeline.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>Book Offline Project</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICES LIST
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Offline Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon
              const isExpanded = expandedService === s.title

              return (
                <div
                  key={s.title}
                  onClick={() => setExpandedService(isExpanded ? null : s.title)}
                  className={`border border-border bg-card hover:border-primary transition-colors flex flex-col cursor-pointer md:cursor-default ${
                    isExpanded 
                      ? 'col-span-3 md:col-span-1 p-6 md:p-8 justify-between' 
                      : 'col-span-1 md:col-span-1 p-4 md:p-8 aspect-square md:aspect-auto justify-center md:justify-between items-center md:items-stretch'
                  }`}
                >
                  <div className={`space-y-4 md:space-y-6 w-full ${!isExpanded ? 'flex flex-col items-center justify-center h-full md:block md:h-auto' : ''}`}>
                    <div className={`flex w-full ${isExpanded ? 'justify-between items-start md:items-center' : 'justify-center md:justify-between items-center'}`}>
                      <div className="p-3 bg-secondary border border-border text-foreground inline-flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-5 md:h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 bg-secondary border border-border text-muted-foreground uppercase md:block ${isExpanded ? 'block' : 'hidden'}`}>
                        {s.highlight}
                      </span>
                    </div>

                    {/* Desktop Content & Expanded Mobile Content */}
                    <div className={`md:block space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
                      <h3 className="text-xl font-bold uppercase text-foreground">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`md:block pt-4 border-t border-border mt-6 ${isExpanded ? 'block' : 'hidden'}`}>
                    <Link
                      href="/grow-with-us"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-muted-foreground hover:text-foreground"
                    >
                      <span>Inquire service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SPECIALIZED TEAMS
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // SPECIALIZED WORKFORCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Our In-House Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZED_TEAMS.map((team) => (
              <div
                key={team.name}
                className="p-8 border border-border bg-card space-y-4 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-primary uppercase tracking-wider">
                    {team.role}
                  </div>
                  <h3 className="text-xl font-bold uppercase text-foreground">
                    {team.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {team.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border text-[10px] font-mono text-primary uppercase">
                  Active Deployment Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICE PACKAGES SECTION (WITH CTA TO BOOK)
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // TURNKEY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Service Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="p-8 border border-border bg-card space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-secondary border border-border text-muted-foreground uppercase tracking-wider inline-block">
                    {pkg.timeline}
                  </span>

                  <h3 className="text-2xl font-bold uppercase text-foreground">
                    {pkg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="pt-4 space-y-2 border-t border-border">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">
                      Included Scope:
                    </span>
                    {pkg.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <Link
                    href="/grow-with-us"
                    className="w-full py-3 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider text-center block transition-colors"
                  >
                    Book This Package &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                PHYSICAL IMPACT
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
                Make your brand Impossible to miss.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Connect directly with our execution and design teams to launch your on-ground signage or campaign within 24 hours.
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

      <FooterSection />
    </div>
  )
}
