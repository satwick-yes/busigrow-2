'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  Globe,
  ArrowRight,
  Terminal,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Server
} from 'lucide-react'

const STACK_MODULES = [
  {
    id: 'next-runtime',
    title: 'Next.js 14 Sub-Second App Router',
    tagline: 'Headless React 19 Server Components',
    metric: '18ms',
    metricLabel: 'Edge TTFB Latency',
    desc: 'Bespoke sub-second edge runtime architecture with streaming SSR, dynamic OpenGraph image generation, and zero hydration layout shifts.',
    code: `// edge-route-engine.ts
import { NextResponse } from 'next/server'
export const runtime = 'edge'

export async function GET(req: Request) {
  const telemetry = await fetchTelemetry({ region: 'bom1-edge' })
  return NextResponse.json({
    status: 200,
    ttfb: '18ms',
    lighthouse: 100,
    edgeRegion: 'Delhi-NCR'
  })
}`
  },
  {
    id: 'tailwind-tokens',
    title: 'Atomic CSS Design Token System',
    tagline: 'Zero-Runtime CSS Variable Orchestration',
    metric: '100/100',
    metricLabel: 'Lighthouse Performance',
    desc: 'Fluid responsive typographic scales, hairline 1px structural grids, and dynamic theme tokens optimized for sub-10kB critical CSS footprints.',
    code: `/* theme-tokens.css */
:root {
  --primary-violet: #7c3aed;
  --primary-purple: #9333ea;
  --dark-ground: #070310;
  --hairline-border: rgba(147, 51, 234, 0.35);
  --font-mono: 'JetBrains Mono', monospace;
}`
  },
  {
    id: 'lead-pipeline',
    title: 'Real-Time Edge Lead Capture API',
    tagline: 'Instant Webhook Dispatches to WhatsApp',
    metric: '1.2s',
    metricLabel: 'Dispatch to CRM Trigger',
    desc: 'Serverless Edge Functions stream visitor RFPs straight to WhatsApp Business API with zero database bottleneck or dropped inquiries.',
    code: `// api/lead-intake/route.ts
export async function POST(req: Request) {
  const { brand, budget, substrate } = await req.json()
  await dispatchToWhatsAppCRM({
    targetPhone: '+919876543210',
    payload: { brand, budget, substrate, time: Date.now() }
  })
  return Response.json({ success: true, sla: 'Sub-3s Bot Response' })
}`
  }
]

export default function OnlinePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(STACK_MODULES[activeTab].code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION: HYPER-DIGITAL VERCEL/LINEAR GRADE
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-purple-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300">
              PILLAR 02 // DIGITAL ARCHITECTURE &amp; WEB ENGINEERING
            </span>
            <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              EDGE RUNTIME: GLOBAL EDGE
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-white leading-[0.92]">
            Sub-Second <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
              Digital
            </span>{' '}
            Engines.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl font-light leading-relaxed">
            Headless Next.js storefronts, dynamic conversion funnels, and edge-rendered web platforms. We engineer high-velocity digital architectures with zero template bloat.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/40"
            >
              <span>Engineer My Digital Engine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20want%20to%20review%20my%20web%20stack."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 border border-purple-800 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Talk to Solutions Architect</span>
            </a>
          </div>

          {/* Animated Count-Up Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-purple-900/40 font-mono">
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">18MS</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">EDGE SERVER TTFB</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-purple-300 tracking-tight">100/100</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">LIGHTHOUSE AUDIT</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">99.99%</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">EDGE AVAILABILITY</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">0 MS</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">LAYOUT SHIFT (CLS)</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE ARCHITECTURE TERMINAL & CODE RUNNER
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                // ARCHITECTURE BLUEPRINT
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Developer-Grade Infrastructure
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-300/80 max-w-sm">
              Inspect our production-grade Next.js 14 App Router, design tokens, and Edge API pipeline code.
            </p>
          </div>

          {/* Terminal Window Chrome */}
          <div className="border border-purple-800/80 bg-[#090312] font-mono text-xs overflow-hidden shadow-2xl">
            {/* Header Tabs */}
            <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#130726] border-b border-purple-900/60">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex gap-2 ml-4">
                  {STACK_MODULES.map((mod, idx) => (
                    <button
                      key={mod.id}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                        activeTab === idx
                          ? 'bg-purple-900/60 text-white border-b-2 border-purple-400'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {mod.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="text-[10px] text-purple-300 hover:text-white px-2.5 py-1 border border-purple-800/60 bg-purple-950/40 uppercase tracking-wider transition-colors"
              >
                {copiedCode ? 'COPIED TO CLIPBOARD' : 'COPY SNIPPET'}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-purple-400 text-[11px]">
                  // {STACK_MODULES[activeTab].tagline}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  {STACK_MODULES[activeTab].title}
                </h3>
                <p className="text-xs text-purple-200/70 font-sans leading-relaxed">
                  {STACK_MODULES[activeTab].desc}
                </p>

                <div className="p-4 bg-purple-950/30 border border-purple-900/50 flex items-center justify-between">
                  <span className="text-zinc-400 text-xs">{STACK_MODULES[activeTab].metricLabel}:</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">{STACK_MODULES[activeTab].metric}</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#05020c] p-4 border border-purple-900/60 overflow-x-auto text-purple-200 text-[11px] leading-relaxed">
                <pre>{STACK_MODULES[activeTab].code}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. BENTO GRID OF 5 CORE ONLINE CAPABILITIES
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
              // FIVE DIGITAL DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Full-Stack Digital Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-purple-900/50 bg-[#0a0414] space-y-4 hover:border-purple-500 transition-colors">
              <div className="w-10 h-10 bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white">Web &amp; App Engineering</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Sub-second Next.js edge web apps, custom checkout engines, and headless CMS integrations designed for explosive conversions.
              </p>
            </div>

            <div className="p-8 border border-purple-900/50 bg-[#0a0414] space-y-4 hover:border-purple-500 transition-colors">
              <div className="w-10 h-10 bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white">UI/UX Design Systems</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Figma design tokens, brutalist typography systems, and interaction physics that turn casual visitors into high-LTV customers.
              </p>
            </div>

            <div className="p-8 border border-purple-900/50 bg-[#0a0414] space-y-4 hover:border-purple-500 transition-colors">
              <div className="w-10 h-10 bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white">Performance Acquisition</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-light">
                Meta, Google Search, and dynamic retargeting campaigns optimized daily with algorithmic bid allocation and live ROAS dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BOTTOM CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-purple-800 bg-[#120726] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-900/50 border border-purple-700 text-purple-300">
                DIRECT ARCHITECT CONSULTATION
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                Ready to ship your next web application?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 font-light leading-relaxed">
                Schedule a 20-minute code audit or request a detailed architectural scope for your brand.
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
