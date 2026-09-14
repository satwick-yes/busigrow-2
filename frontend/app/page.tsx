'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { Hero3DScene } from '@/components/hero-3d-scene'
import { TerminalEstimator } from '@/components/terminal-estimator'
import { InteractiveFabricationLab } from '@/components/interactive-fabrication-lab'
import { LiveWorkflowPipeline } from '@/components/live-workflow-pipeline'
import { InteractiveComparisonSlider } from '@/components/interactive-comparison-slider'
import {
  ArrowRight,
  Hammer,
  Code2,
  Zap,
  MessageSquare
} from 'lucide-react'

const FADE_UP = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION: 3D THREE.JS CANVAS + OVERSIZED DISPLAY TYPOGRAPHY
         ========================================================================= */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Columns: Extreme Typography & Metadata */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={STAGGER_CONTAINER}
              className="lg:col-span-7 space-y-8 z-10"
            >
              {/* Monospace Plant Metadata Banner */}
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800/80 text-purple-300">
                  NOIDA SECTOR 63 &middot; DIRECT PLANT
                </span>
                <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  CAPACITY: ACTIVE SLA
                </span>
              </motion.div>

              {/* Massive Tightly-Tracked Display Header */}
              <motion.h1
                variants={FADE_UP}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white leading-[0.92] uppercase"
              >
                Physical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
                  Signage
                </span>{' '}
                &amp; <br />
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-300">
                  Engineering.
                </span>
              </motion.h1>

              {/* Crisp Asymmetrical Subtext */}
              <motion.p
                variants={FADE_UP}
                className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-xl font-light leading-relaxed tracking-tight"
              >
                Zero fragmented vendors. We fuse 30,000 sq.ft of industrial CNC signage fabrication with sub-second Next.js web platforms and automated WhatsApp CRM pipelines. Single-source delivery across Delhi NCR.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/grow-with-us"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-all shadow-xl shadow-purple-900/50"
                >
                  <span>grow with us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20want%20to%20schedule%20a%20Noida%20plant%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/60 hover:bg-purple-900/60 text-purple-200 border border-purple-800/80 font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>WhatsApp Plant</span>
                </a>
              </motion.div>

              {/* Telemetry Micro-Data Row */}
              <motion.div
                variants={FADE_UP}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-900/40 text-left font-mono"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">30,000</div>
                  <div className="text-[10px] text-purple-400 uppercase tracking-wider">SQ.FT NOIDA PLANT</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-300">24-48H</div>
                  <div className="text-[10px] text-purple-400 uppercase tracking-wider">NCR DISPATCH SLA</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">18MS</div>
                  <div className="text-[10px] text-purple-400 uppercase tracking-wider">EDGE WEB TTFB</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right 5 Columns: Interactive Three.js 3D Volumetric Scene */}
            <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[580px] border border-purple-900/50 bg-[#0c051a]/80 backdrop-blur-md overflow-hidden">
              <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                <span>INTERACTIVE 3D SUBSTRATE RAYCAST</span>
              </div>
              <Hero3DScene />
              <div className="absolute bottom-4 right-4 z-10 text-[9px] font-mono text-purple-400/70 bg-black/60 px-2.5 py-1 border border-purple-900/40">
                DRAG TO ROTATE 3D MATRIX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ASYMMETRICAL 1PX BORDER CAPABILITIES GRID
         ========================================================================= */}
      <section className="border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
                The Integrated Execution Stack
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-md font-light">
              One unified team owning your physical storefront fabrication, high-speed digital infrastructure, and direct WhatsApp sales workflows.
            </p>
          </div>

          {/* Hairline 1px Structural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-900/40 border border-purple-900/40 bg-[#0a0414]">
            {/* 1. Offline Signage */}
            <div className="p-8 sm:p-10 space-y-6 hover:bg-purple-950/20 transition-colors">
              <div className="flex items-center justify-between text-purple-400 font-mono text-xs">
                <span>01 / FABRICATION</span>
                <Hammer className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-2xl font-light text-white tracking-tight uppercase">
                Offline Signage &amp; Facades
              </h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Direct manufacturing of 3D Cast Acrylic, SS304 Titanium, Heavy ACP Facades, and IP68 Neon in our Noida plant with Samsung IP67 illumination.
              </p>
              <div className="pt-4 border-t border-purple-900/40">
                <Link
                  href="/offline"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-white uppercase tracking-wider"
                >
                  <span>Explore Offline Signage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Online Digital Engineering */}
            <div className="p-8 sm:p-10 space-y-6 hover:bg-purple-950/20 transition-colors">
              <div className="flex items-center justify-between text-purple-400 font-mono text-xs">
                <span>02 / WEB PLATFORMS</span>
                <Code2 className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-2xl font-light text-white tracking-tight uppercase">
                Next.js Web Applications
              </h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Sub-second edge storefronts and custom platforms. 18ms TTFB, 100/100 Lighthouse performance, headless architecture, and instant scalability.
              </p>
              <div className="pt-4 border-t border-purple-900/40">
                <Link
                  href="/online"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-white uppercase tracking-wider"
                >
                  <span>Explore Online Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. WhatsApp Automations */}
            <div className="p-8 sm:p-10 space-y-6 hover:bg-purple-950/20 transition-colors">
              <div className="flex items-center justify-between text-purple-400 font-mono text-xs">
                <span>03 / PIPELINES</span>
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-2xl font-light text-white tracking-tight uppercase">
                WhatsApp CRM Automations
              </h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Sub-5-second lead qualification, dynamic PDF quote generation, and automated WhatsApp CRM deal pipelines that close deals while you sleep.
              </p>
              <div className="pt-4 border-t border-purple-900/40">
                <Link
                  href="/automations"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-white uppercase tracking-wider"
                >
                  <span>Explore CRM Automations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE MATERIAL STUDIO (DAY/NIGHT ILLUMINATION LAB)
         ========================================================================= */}
      <section className="border-b border-purple-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // NOIDA FACTORY SIMULATOR
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase mt-1">
                Material &amp; Illumination Studio
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-sm font-light">
              Toggle day/night states to inspect LED halo reflection, Samsung diode lumens, and substrate durability.
            </p>
          </div>
          <InteractiveFabricationLab />
        </div>
      </section>

      {/* =========================================================================
          4. LIVE LEAD-TO-QUOTE AUTOMATION PIPELINE (SUB-5-SECOND SIMULATOR)
         ========================================================================= */}
      <section className="border-b border-purple-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // INSTANT SALES PIPELINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase mt-1">
                Sub-5-Second Lead-to-Quote Automation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-sm font-light">
              Simulate an inbound customer inquiry flow through AI analysis, dynamic PDF creation, and WhatsApp dispatch.
            </p>
          </div>
          <LiveWorkflowPipeline />
        </div>
      </section>

      {/* =========================================================================
          5. TACTILE COMPARISON SLIDER (FRAGMENTED VENDORS VS BUSIGROW)
         ========================================================================= */}
      <section className="border-b border-purple-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // ACCOUNTABILITY COMPARISON
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase mt-1">
                Fragmented Vendors vs. Busigrow
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-sm font-light">
              Drag the interactive slider to inspect why unified single-source ownership eliminates delays and color drift.
            </p>
          </div>
          <InteractiveComparisonSlider />
        </div>
      </section>

      {/* =========================================================================
          6. TERMINAL ESTIMATOR: SLEEK NO-BOX PRICING & TELEMETRY MODULE
         ========================================================================= */}
      <section className="border-b border-purple-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // REAL-TIME PRICING ENGINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase mt-1">
                Cost &amp; Turnaround Estimator
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-sm font-light">
              Configure parameters to calculate direct Noida plant rate cards and emergency 24-48h dispatch SLAs.
            </p>
          </div>
          <TerminalEstimator />
        </div>
      </section>

      {/* =========================================================================
          7. RECENT CASE STUDIES & METRICS (CAMPAIGNS PREVIEW)
         ========================================================================= */}
      <section className="border-b border-purple-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                // VERIFIED RESULTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase mt-1">
                Proven Turnkey Ventures
              </h2>
            </div>
            <Link
              href="/campaigns"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-white uppercase tracking-wider"
            >
              <span>View All Financial Metrics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-purple-900/40 bg-[#0a0414] space-y-6">
              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                QSR RETAIL EXPANSION &middot; 50 LOCATIONS
              </div>
              <div className="text-4xl font-bold text-white tracking-tight">+45%</div>
              <div className="text-xs text-purple-300 uppercase tracking-wider">STOREFRONT FOOTFALL LIFT</div>
              <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                30,000 sq.ft Noida plant fabricated identical 3D acrylic signage and storefront glazing across 50 Delhi NCR mall sites in 6 weeks.
              </p>
            </div>

            <div className="p-8 border border-purple-900/40 bg-[#0a0414] space-y-6">
              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                D2C APPAREL &amp; LIFESTYLE BRAND
              </div>
              <div className="text-4xl font-bold text-purple-300 tracking-tight">18MS</div>
              <div className="text-xs text-purple-300 uppercase tracking-wider">EDGE SERVER TTFB LATENCY</div>
              <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                Replaced bloated legacy web store with a custom Next.js 14 edge platform, increasing mobile checkout conversions by 3.8x.
              </p>
            </div>

            <div className="p-8 border border-purple-900/40 bg-[#0a0414] space-y-6">
              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                HEALTHCARE DIAGNOSTIC CHAIN
              </div>
              <div className="text-4xl font-bold text-emerald-400 tracking-tight">1.8S</div>
              <div className="text-xs text-purple-300 uppercase tracking-wider">WHATSAPP QUOTE DELIVERY</div>
              <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                Automated dynamic PDF doctor appointment quotations and integrated patient CRM syncing with zero missed leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. MASTER BOTTOM CTA: CONVERSION ("GROW WITH US")
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-purple-800/80 bg-gradient-to-br from-[#1b083d] via-[#100524] to-[#080214] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-900/50 border border-purple-700 text-purple-300 inline-block">
                DIRECT NOIDA PLANT INTAKE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Ready to manufacture or engineer your next venture?
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 font-light leading-relaxed">
                Book a direct visit to our Sector 63 Noida plant or receive an itemized technical proposal within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xl"
              >
                <span>grow with us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I'd%20like%20to%20grow%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors border border-purple-400/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
