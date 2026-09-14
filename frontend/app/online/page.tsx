'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Video,
  Palette,
  Code2,
  Share2,
  Users,
  Fingerprint,
  Cpu,
  PenTool,
  Megaphone,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}

const SERVICES = [
  {
    title: 'Video Ads',
    desc: 'High-converting short-form, UGC, motion graphics, and commercial video ad creatives ready for ad networks.',
    icon: Video,
    category: 'Creative Production'
  },
  {
    title: 'Graphic design',
    desc: 'Bespoke brand collateral, digital ad banners, social creatives, vector assets, and marketing collateral.',
    icon: Palette,
    category: 'Visual Systems'
  },
  {
    title: 'Web-development',
    desc: 'High-performance Next.js websites, conversion funnels, landing pages, and custom web applications.',
    icon: Code2,
    category: 'Engineering'
  },
  {
    title: 'Social Marketing',
    desc: 'Organic distribution, community growth frameworks, platform-specific content playbooks, and engagement.',
    icon: Share2,
    category: 'Distribution'
  },
  {
    title: 'Influencer marketing',
    desc: 'End-to-end creator scouting, contract negotiation, brief curation, and ROI-tracked influencer activations.',
    icon: Users,
    category: 'Creator Network'
  },
  {
    title: 'Branding & Identity',
    desc: 'Comprehensive visual systems, logo suites, brand guideline books, typography hierarchies, and style guides.',
    icon: Fingerprint,
    category: 'Identity Systems'
  },
  {
    title: 'AI & Automation',
    desc: 'Custom AI agent builders, programmatic content workflows, and automated customer acquisition engines.',
    icon: Cpu,
    category: 'Intelligent Tech'
  },
  {
    title: 'Content Creation',
    desc: 'Editorial copy, thought leadership articles, multi-platform media assets, and high-impact copywriting.',
    icon: PenTool,
    category: 'Storytelling'
  },
  {
    title: 'Online Campaign',
    desc: 'Full-funnel digital ad management, paid media acquisition, multi-channel scaling, and conversion optimization.',
    icon: Megaphone,
    category: 'Performance'
  }
]

const AGENCY_BENEFITS = [
  {
    title: 'Plug-and-Play Creative Engine',
    desc: 'Scale your agency output without hiring overhead. We act as your specialized production engine.'
  },
  {
    title: 'Ready-Made Deliverables',
    desc: 'Instant access to high-velocity design, ad frameworks, and development sprints ready for deployment.'
  },
  {
    title: 'Strict Quality Standards',
    desc: 'Every asset is crafted to institutional design standards, fully layered, organized, and review-ready.'
  },
  {
    title: 'Transparent Collaboration',
    desc: 'Clear communication, rapid feedback cycles, and dedicated project managers for every account.'
  }
]

export default function OnlinePage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION (VENDOR FOR AGENCIES)
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                CREATIVE &amp; DIGITAL VENDOR
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-foreground leading-[0.95] uppercase">
              Production Partner <br />
              <span className="text-primary">For Modern Agencies</span> &amp; Brands.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Your go-to production vendor for ready-made ads, custom design systems, web development, and digital marketing campaigns. High velocity, zero friction.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>

              <Link
                href="/campaigns"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-muted-foreground border border-border font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Ready Made Brands</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICES LIST (THE EXACT 9 SERVICES)
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // FULL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Digital &amp; Creative Services
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Integrated creative, engineering, and performance marketing modules for scale.
            </p>
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
                        {s.category}
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
                      <span>Request scope</span>
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
          3. AGENCY PARTNERSHIP MODEL
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Why Agencies Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_BENEFITS.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 border border-border bg-card space-y-4 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-mono font-bold text-primary/60">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border text-[10px] font-mono text-primary uppercase">
                  Standard Vendor Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BOTTOM CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                PARTNER ONBOARDING
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Need reliable design &amp; dev capacity?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Connect with our production desk to review current capacities, asset packages, and custom scopes.
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
