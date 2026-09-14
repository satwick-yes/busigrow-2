'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Printer,
  Code2,
  Zap,
  Activity,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Radio,
  Gauge
} from 'lucide-react'

export function HeroCommandCenter() {
  const [activeTab, setActiveTab] = useState<'offline' | 'online' | 'automations'>('offline')
  const [testSimulating, setTestSimulating] = useState(false)
  const [simOutput, setSimOutput] = useState<string | null>(null)
  const [liveMetric, setLiveMetric] = useState(99.4)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetric(prev => +(99.2 + Math.random() * 0.7).toFixed(1))
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const triggerSim = (type: string) => {
    setTestSimulating(true)
    setSimOutput('INITIALIZING STREAM...')
    setTimeout(() => {
      if (type === 'offline') {
        setSimOutput('CNC_FEED: 4800mm/min · UV_PASS: 1200DPI Micro-Droplet · NOIDA_DISPATCH: 18h SLA')
      } else if (type === 'online') {
        setSimOutput('EDGE_HIT: 11ms · TTFB: 16ms · LIGHTHOUSE: 100/100 · PAYLOAD: 12.8kb')
      } else {
        setSimOutput('WEBHOOK_200: Lead Tagged #HighIntent -> Instant Dynamic PDF Quotation Dispatched')
      }
      setTestSimulating(false)
    }, 450)
  }

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/85 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.12)] overflow-hidden transition-all">
      {/* Top Window Header */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-purple-200/50 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/30 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80 dark:bg-purple-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400/80 dark:bg-violet-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-300/80 dark:bg-purple-600/60" />
          </div>
          <span className="text-[11px] font-mono font-normal tracking-wider text-purple-800 dark:text-purple-300 uppercase">
            BUSIGROW_CORE_v6.4 // NCR_TELEMETRY
          </span>
        </div>

        {/* Pillar Switcher */}
        <div className="flex items-center gap-1 bg-purple-100/50 dark:bg-purple-950/60 p-1 rounded-2xl border border-purple-200/50 dark:border-purple-800/40 overflow-x-auto scrollbar-hide w-full sm:w-auto">
          <button
            onClick={() => { setActiveTab('offline'); setSimOutput(null); }}
            className={`whitespace-nowrap shrink-0 px-3.5 py-1 rounded-xl text-xs font-mono font-light transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'offline'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-normal'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Printer className="w-3.5 h-3.5 shrink-0" />
            <span>01 / Fabrication</span>
          </button>
          <button
            onClick={() => { setActiveTab('online'); setSimOutput(null); }}
            className={`whitespace-nowrap shrink-0 px-3.5 py-1 rounded-xl text-xs font-mono font-light transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'online'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-normal'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 shrink-0" />
            <span>02 / Web App</span>
          </button>
          <button
            onClick={() => { setActiveTab('automations'); setSimOutput(null); }}
            className={`whitespace-nowrap shrink-0 px-3.5 py-1 rounded-xl text-xs font-mono font-light transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'automations'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-normal'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span>03 / Automations</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {activeTab === 'offline' && (
            <motion.div
              key="offline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-mono font-light">
                    <Radio className="w-3 h-3 text-purple-600 animate-pulse" />
                    <span>Noida Sector 63 OEM Plant · 30,000 sq.ft Operational</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground leading-snug">
                    Direct in-house CNC machining & 24h night dispatch.
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    We own our 3D acrylic thermoforming machines, CNC laser cutters, and 3.2m industrial UV flatbed printers. No outsourced middlemen, no blown store rollout deadlines.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">24-48h</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">NCR Install SLA</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">1200 DPI</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">UV Micro-Droplet</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">5-Year</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Outdoor Warranty</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Telemetry Box */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-purple-950/15 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/50 font-mono text-xs space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-200/40 dark:border-purple-800/40 text-purple-700 dark:text-purple-300">
                    <span className="flex items-center gap-1.5 font-normal tracking-wide">
                      <Terminal className="w-3.5 h-3.5" />
                      PLANT_TELEMETRY
                    </span>
                    <span className="text-[10px] bg-purple-500/15 text-purple-700 dark:text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-light">
                      SYNC {liveMetric}%
                    </span>
                  </div>
                  <div className="space-y-2 text-muted-foreground text-[11px] font-light">
                    <div className="flex justify-between">
                      <span>[CNC_LASER_01]</span>
                      <span className="text-foreground font-normal">ACRYLIC_3D_LETTERS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>[UV_FLATBED_02]</span>
                      <span className="text-foreground font-normal">BACKLIT_POLYCARBONATE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>[FLEET_DISPATCH]</span>
                      <span className="text-purple-600 dark:text-purple-300 font-normal">DL-12-NCR-402</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerSim('offline')}
                    disabled={testSimulating}
                    className="w-full mt-3 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono font-normal text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{testSimulating ? 'QUERYING FLOOR...' : 'Simulate Live Floor Stream'}</span>
                  </button>

                  {simOutput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[11px] text-purple-800 dark:text-purple-200 font-mono font-light leading-relaxed"
                    >
                      {simOutput}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'online' && (
            <motion.div
              key="online"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-mono font-light">
                    <Cpu className="w-3 h-3 text-purple-600 animate-pulse" />
                    <span>Cyber City Gurugram · Next.js 14 App Architecture</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground leading-snug">
                    Sub-second edge web applications & funnel architecture.
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Crafted with React Server Components, Tailwind CSS design tokens, and edge-routed Meta CAPI tracking. Zero bloated CMS plugins, pure unadulterated performance.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">100/100</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Lighthouse Score</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">&lt; 300ms</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Edge TTFB</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">3.8x</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Ad ROAS Factor</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Performance Inspector */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-purple-950/15 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/50 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-200/40 dark:border-purple-800/40 text-purple-700 dark:text-purple-300">
                    <span className="flex items-center gap-1.5 font-normal tracking-wide">
                      <Code2 className="w-3.5 h-3.5" />
                      CORE_WEB_VITALS
                    </span>
                    <span className="text-[10px] bg-purple-500/15 text-purple-700 dark:text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-light">
                      EDGE_OPTIMIZED
                    </span>
                  </div>
                  <div className="space-y-2 text-muted-foreground text-[11px] font-light">
                    <div className="flex justify-between"><span>Largest Contentful Paint:</span> <span className="text-purple-600 dark:text-purple-300 font-normal">0.4s (Pass)</span></div>
                    <div className="flex justify-between"><span>Cumulative Layout Shift:</span> <span className="text-purple-600 dark:text-purple-300 font-normal">0.000 (Pass)</span></div>
                    <div className="flex justify-between"><span>Interaction to Next Paint:</span> <span className="text-purple-600 dark:text-purple-300 font-normal">14ms (Instant)</span></div>
                  </div>

                  <button
                    onClick={() => triggerSim('online')}
                    disabled={testSimulating}
                    className="w-full mt-3 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono font-normal text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{testSimulating ? 'BENCHMARKING...' : 'Run Edge Lighthouse Audit'}</span>
                  </button>

                  {simOutput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[11px] text-purple-800 dark:text-purple-200 font-mono font-light leading-relaxed"
                    >
                      {simOutput}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'automations' && (
            <motion.div
              key="automations"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-mono font-light">
                    <Zap className="w-3 h-3 text-purple-600 animate-pulse" />
                    <span>WhatsApp Cloud API & Deterministic Pipeline Engines</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground leading-snug">
                    Instant lead qualification & automated PDF quote synthesis.
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Stop losing inbound leads to slow response times. Our WhatsApp automation pipelines qualify budgets, generate itemized branded PDF quotations, and sync directly to your CRM in under 5 seconds.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">&lt; 3.2s</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Response Latency</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">99.98%</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Uptime SLA</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30">
                      <div className="text-xl font-light font-mono text-purple-700 dark:text-purple-300">4.2x</div>
                      <div className="text-[11px] font-mono font-light text-muted-foreground mt-0.5">Lead Conversion</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Workflow Trigger Box */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-purple-950/15 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/50 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-200/40 dark:border-purple-800/40 text-purple-700 dark:text-purple-300">
                    <span className="flex items-center gap-1.5 font-normal tracking-wide">
                      <Send className="w-3.5 h-3.5" />
                      PIPELINE_ENGINE
                    </span>
                    <span className="text-[10px] bg-purple-500/15 text-purple-700 dark:text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-light">
                      READY
                    </span>
                  </div>
                  <div className="space-y-2 text-muted-foreground text-[11px] font-light">
                    <div>[01] Inbound Meta Lead Webhook received</div>
                    <div>[02] WhatsApp Cloud API dispatches menu</div>
                    <div>[03] Dynamic PDF generator creates formal estimate</div>
                  </div>

                  <button
                    onClick={() => triggerSim('automations')}
                    disabled={testSimulating}
                    className="w-full mt-3 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono font-normal text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{testSimulating ? 'FIRING WEBHOOK...' : 'Simulate WhatsApp Workflow'}</span>
                  </button>

                  {simOutput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[11px] text-purple-800 dark:text-purple-200 font-mono font-light leading-relaxed"
                    >
                      {simOutput}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
