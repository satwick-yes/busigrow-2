'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { motion, AnimatePresence } from 'framer-motion'
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
  Award,
  Radio,
  Sliders,
  Terminal,
  Activity,
  Check
} from 'lucide-react'

const OPERATING_PRINCIPLES = [
  {
    roman: 'I',
    title: 'Execution is the Sole Strategy',
    desc: 'A brand concept that takes 3 months to fabricate or a web architecture that takes 4 seconds to load is dead on arrival. We obsess over 24-48h fabrication velocity, sub-second TTFB latency, and relentless ground finishing.',
    badge: 'VELOCITY SLA: 24-48H'
  },
  {
    roman: 'II',
    title: 'Single-Source Accountability',
    desc: 'No more finger-pointing between digital agencies, freelance designers, and local acrylic sign printers. We own the design token system, the Next.js codebase, the 30,000 sq.ft fabrication floor, and the night installation crew.',
    badge: '100% IN-HOUSE IP'
  },
  {
    roman: 'III',
    title: 'Discretion & Institutional Craft',
    desc: 'For B2B creative agency partners, we operate completely white-label with strict cryptographic NDAs. For direct enterprise brands, we engineer physical and digital assets that radiate institutional permanence on day one.',
    badge: 'ZERO-LEAK NDA PROTOCOL'
  },
  {
    roman: 'IV',
    title: 'Automate the Mundane',
    desc: 'We practice what we engineer. Our internal operations, production job tickets, quotation pipelines, and inventory telemetry run on custom automation engines—freeing 100% of human mindshare for uncompromising craft.',
    badge: 'ZERO MANUAL OVERHEAD'
  }
]

const MACHINERY_LEDGER = [
  {
    id: 'cnc-router',
    tag: 'UNIT 01 // HEAVY SUBTRACTIVE',
    name: 'Industrial 3-Axis CNC Router Mesh',
    specs: '6,000 x 3,000 mm Bed · 24,000 RPM Spindle · ±0.02mm Precision',
    desc: 'Multi-head CNC routing engine engineered for high-velocity acrylic thermoforming moulds, marine-grade aluminum composite panels, and solid brass channel faces.',
    throughput: '420 sq.ft / hr',
    cooling: 'Liquid Nitrogen Spray Mist'
  },
  {
    id: 'uv-flatbed',
    tag: 'UNIT 02 // DIRECT SUBSTRATE',
    name: 'Dual-Beam Industrial UV Flatbed Suite',
    specs: 'Ricoh Gen6 Printheads · 1200 DPI Piezoelectric · 8-Color CMYK+W+V',
    desc: 'Direct-to-substrate UV curing printer capable of photorealistic rendering onto cast acrylic, brushed titanium sheets, architectural glass, and 18mm birch ply.',
    throughput: '95 sq.m / hr',
    cooling: 'LED UV Cold Curing'
  },
  {
    id: 'fiber-laser',
    tag: 'UNIT 03 // THERMAL CUTTING',
    name: '6kW High-Precision Fiber Laser Cutter',
    specs: 'IPG Laser Source · Swiss Raytools Autofocus Head · Max Accel 1.5G',
    desc: 'Zero-taper micro-cutting for stainless steel, architectural copper, and mild steel structural signage skeletons with pristine slag-free edge profiles.',
    throughput: '35 m / min',
    cooling: 'Closed-Loop Dual Water Chiller'
  },
  {
    id: 'tig-welding',
    tag: 'UNIT 04 // STRUCTURAL METALLURGY',
    name: 'TIG / MIG Argon Architectural Welding Desks',
    specs: 'Pulse AC/DC Inverter · Grade 304/316 SS Certification · AWS D1.1 Compliant',
    desc: 'Cleanroom welding cells for internal support armatures, cantilevered pylon structures, and seamless seamless architectural sign boxes.',
    throughput: '12 Fabrications / Shift',
    cooling: 'Active Argon Gas Shield'
  }
]

const NCR_HUBS = [
  {
    name: 'Noida Sector 63 Central Facility',
    role: 'PRIMARY INDUSTRIAL FABRICATION & PRINTING HUB',
    desc: '30,000 sq.ft industrial floor equipped with flatbed UV printers, CNC routers, fiber laser cutters, vacuum thermoforming beds, and 24-hour nighttime dispatch fleets.',
    badge: '30,000 SQ.FT · 24/7 ACTIVE',
    coordinates: '28.6280° N, 77.3794° E'
  },
  {
    name: 'Gurugram Cyber City Studio',
    role: 'DIGITAL ARCHITECTURE & SOFTWARE DESK',
    desc: 'Where full-stack engineers, UI/UX system designers, and performance strategists build sub-second Next.js applications, conversion funnels, and CRM webhook dispatchers.',
    badge: 'FULL-STACK SPRINT HUB',
    coordinates: '28.4950° N, 77.0895° E'
  },
  {
    name: 'South Delhi Scoping Room',
    role: 'ENTERPRISE SCOPING & ARCHITECT CONSULTATIONS',
    desc: 'Dedicated to enterprise rollout audits, nationwide multi-store retail deployment blueprints, and strategic B2B agency white-label partnership integrations.',
    badge: 'PRINCIPAL STRATEGY DESK',
    coordinates: '28.5244° N, 77.2066° E'
  }
]

export default function AboutPage() {
  const [activeMachine, setActiveMachine] = useState(0)

  return (
    <div className="w-full min-h-screen bg-background text-muted-foreground font-sans selection:bg-purple-600 selection:text-foreground">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION: FACTORY FLOOR & THE CODE
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-purple-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
              ORIGIN &middot; NOIDA SECTOR 63 &middot; GURUGRAM
            </span>
            <span className="text-[11px] font-mono text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              PLANT TELEMETRY: 24/7 PRODUCTION ACTIVE
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-foreground leading-[0.92]">
            The Plant &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
              The Code.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Busigrow was founded in Delhi NCR to solve a fundamental fracture in modern commerce: digital agencies don&apos;t know how to fabricate in the physical world, and traditional sign contractors have zero design taste or code capability.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-foreground font-medium text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/40"
            >
              <span>Schedule Plant Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/offline"
              className="inline-flex items-center gap-2 px-6 py-4 bg-secondary/40 hover:bg-secondary/80/40 text-muted-foreground border border-border font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <span>Explore Substrates</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Plant Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-purple-900/40 font-mono">
            <div className="p-4 bg-secondary/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">30,000</div>
              <div className="text-[10px] text-primary uppercase tracking-wider mt-1">SQ.FT NOIDA PLANT</div>
            </div>
            <div className="p-4 bg-secondary/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-muted-foreground tracking-tight">24-48H</div>
              <div className="text-[10px] text-primary uppercase tracking-wider mt-1">DELHI NCR TURNAROUND</div>
            </div>
            <div className="p-4 bg-secondary/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">400+</div>
              <div className="text-[10px] text-primary uppercase tracking-wider mt-1">STOREFRONTS FABRICATED</div>
            </div>
            <div className="p-4 bg-secondary/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">35+</div>
              <div className="text-[10px] text-primary uppercase tracking-wider mt-1">AGENCY WHITE-LABEL HUBS</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MACHINERY LEDGER & HEAVY EQUIPMENT TELEMETRY
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // FACTORY FLOOR CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-foreground">
                Machinery &amp; Equipment Ledger
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              In-house industrial precision hardware running 24-hour shifts in Noida Sector 63.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Equipment List */}
            <div className="lg:col-span-6 space-y-4">
              {MACHINERY_LEDGER.map((mach, idx) => {
                const active = activeMachine === idx
                return (
                  <div
                    key={mach.id}
                    onClick={() => setActiveMachine(idx)}
                    className={`p-6 border transition-all cursor-pointer ${
                      active
                        ? 'border-purple-400 bg-background shadow-xl'
                        : 'border-border bg-background hover:border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                      <span className="text-primary font-semibold">{mach.tag}</span>
                      <span className="px-2 py-0.5 bg-secondary border border-border text-muted-foreground">
                        {mach.throughput}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase text-foreground font-sans">
                      {mach.name}
                    </h3>

                    <p className="text-xs text-muted-foreground mt-2 font-light leading-relaxed font-sans">
                      {mach.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-mono text-primary">
                      <span>Specs: {mach.specs.split('·')[0]}</span>
                      <span className="text-foreground">&rarr; Inspect Specs</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Telemetry Spec Inspector */}
            <div className="lg:col-span-6 sticky top-28 border border-border/80 bg-background font-mono text-xs overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground font-semibold uppercase text-[11px]">
                    UNIT SPECIFICATION // {MACHINERY_LEDGER[activeMachine].id}
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: ONLINE
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[10px] text-primary uppercase tracking-widest block mb-1">
                    HARDWARE DESIGNATION
                  </span>
                  <h4 className="text-2xl font-bold uppercase text-foreground font-sans">
                    {MACHINERY_LEDGER[activeMachine].name}
                  </h4>
                </div>

                <div className="space-y-3 p-4 bg-background border border-border text-muted-foreground text-xs">
                  <div className="flex justify-between border-b border-purple-900/40 pb-2">
                    <span className="text-muted-foreground">Technical Specs:</span>
                    <span className="text-foreground font-semibold text-right max-w-[280px]">{MACHINERY_LEDGER[activeMachine].specs}</span>
                  </div>
                  <div className="flex justify-between border-b border-purple-900/40 pb-2">
                    <span className="text-muted-foreground">Output Velocity:</span>
                    <span className="text-emerald-400 font-semibold">{MACHINERY_LEDGER[activeMachine].throughput}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cooling &amp; Shielding:</span>
                    <span className="text-muted-foreground font-semibold">{MACHINERY_LEDGER[activeMachine].cooling}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground font-light leading-relaxed font-sans">
                  {MACHINERY_LEDGER[activeMachine].desc}
                </p>

                <div className="pt-2">
                  <Link
                    href="/grow-with-us"
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-foreground font-medium text-xs uppercase tracking-wider text-center block transition-colors"
                  >
                    Request Custom Fabrication Run &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. 4 OPERATING PRINCIPLES (BRUTALIST WIREFRAME CARDS WITH ROMAN NUMERALS)
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // OPERATING MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-foreground">
              Four Invariant Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPERATING_PRINCIPLES.map((p) => (
              <div
                key={p.roman}
                className="p-8 border border-border bg-background space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-purple-900/40 pb-4">
                    <span className="text-3xl font-black font-mono text-primary">
                      {p.roman}
                    </span>
                    <span className="px-2.5 py-1 bg-secondary border border-border text-muted-foreground text-[10px] uppercase">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase text-foreground font-sans">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-900/30 text-[10px] font-mono text-muted-foreground">
                  STANDARD OPERATING DIRECTIVE // BUSIGROW 2026
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GROUND FOOTPRINT & HUBS
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // REGIONAL FOOTPRINT
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-foreground">
                Delhi NCR Hubs &middot; Pan-India Dispatch
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Strategic ground installations and software sprint rooms across the national capital region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NCR_HUBS.map((hub) => (
              <div
                key={hub.name}
                className="p-8 border border-border bg-background space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{hub.coordinates}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase text-foreground font-sans">
                      {hub.name}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1 uppercase">
                      {hub.role}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-900/40 font-mono text-[10px] text-primary">
                  {hub.badge}
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
          <div className="p-10 sm:p-16 border border-border bg-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-900/50 border border-border text-muted-foreground">
                DIRECT ACCESS
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                Inspect the plant or review our software sprint line.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Connect directly with our engineering directors in Noida Sector 63 or Gurugram Cyber City.
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

      <FooterSection />
    </div>
  )
}
