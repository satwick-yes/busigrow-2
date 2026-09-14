'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Zap, CheckCircle2, Shield, RefreshCw } from 'lucide-react'

export function TerminalEstimator() {
  const [sqft, setSqft] = useState(150)
  const [substrate, setSubstrate] = useState<'acrylic-3d' | 'ss304-titanium' | 'acp-facade' | 'neon-silicone'>('acrylic-3d')
  const [webTier, setWebTier] = useState<'headless-next' | 'static-core' | 'none'>('headless-next')
  const [whatsappCrm, setWhatsappCrm] = useState(true)

  const substrateRates = {
    'acrylic-3d': { name: '3D Cast Acrylic (Samsung IP67)', rate: 460, sla: '24–48 Hours' },
    'ss304-titanium': { name: 'SS304 Titanium Marine Metal', rate: 740, sla: '48–72 Hours' },
    'acp-facade': { name: 'PVDF Heavy Architectural ACP', rate: 390, sla: '48 Hours' },
    'neon-silicone': { name: 'IP68 Custom Silicone Neon', rate: 360, sla: '24 Hours' },
  }

  const webRates = {
    'headless-next': { name: 'Next.js 14 Sub-Second App', cost: 48000 },
    'static-core': { name: 'Edge Landing Stack', cost: 28000 },
    'none': { name: 'None (Physical Only)', cost: 0 },
  }

  const crmCost = whatsappCrm ? 22000 : 0
  const signageCost = sqft * substrateRates[substrate].rate
  const digitalCost = webRates[webTier].cost + crmCost
  const totalMin = Math.round((signageCost + digitalCost) * 0.95)
  const totalMax = Math.round((signageCost + digitalCost) * 1.12)
  const activeSla = sqft > 300 ? '48–72h Expedited' : substrateRates[substrate].sla

  return (
    <div className="w-full border border-purple-200/60 dark:border-border bg-background text-muted-foreground font-mono text-xs overflow-hidden shadow-2xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-muted-foreground/80 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            busigrow-factory-estimator ~ v6.4.0 (noida-sec63)
          </span>
        </div>
        <div className="text-[10px] text-primary/80 uppercase tracking-widest flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE TELEMETRY
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1 text-muted-foreground/80">
            <span className="text-primary font-semibold">$ set parameters --region="delhi-ncr"</span>
            <p className="text-[11px] text-muted-foreground font-sans">
              Adjust parameters below for instant manufacturing calculation and dispatch SLA.
            </p>
          </div>

          {/* Range Slider */}
          <div className="space-y-2 p-4 bg-secondary/20 border border-purple-900/40">
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                1. Signage Surface Area:
              </span>
              <span className="text-sm font-bold text-muted-foreground font-mono">{sqft} SQ.FT</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-secondary rounded-none"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>MIN: 20 SQFT</span>
              <span>MED: 250 SQFT</span>
              <span>MAX: 500 SQFT</span>
            </div>
          </div>

          {/* Substrate Selector */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
              2. Select Material Substrate (Direct Factory):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(Object.keys(substrateRates) as Array<keyof typeof substrateRates>).map((key) => {
                const sub = substrateRates[key]
                const active = substrate === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSubstrate(key)}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      active
                        ? 'border-purple-400 bg-purple-900/40 text-foreground'
                        : 'border-purple-900/40 bg-secondary/10 text-muted-foreground hover:border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-muted-foreground">{sub.name}</span>
                      {active && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-muted-foreground">
                      <span>₹{sub.rate}/sq.ft</span>
                      <span>SLA: {sub.sla}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Digital Architecture */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
              3. Digital Stack &amp; Automations:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setWebTier(webTier === 'headless-next' ? 'none' : 'headless-next')}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  webTier === 'headless-next'
                    ? 'border-purple-400 bg-purple-900/40 text-foreground'
                    : 'border-purple-900/40 bg-secondary/10 text-muted-foreground'
                }`}
              >
                <div className="text-xs font-semibold text-muted-foreground">Next.js 14 Web Engine</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Sub-second headless app (+₹48k)</div>
              </button>

              <button
                type="button"
                onClick={() => setWhatsappCrm(!whatsappCrm)}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  whatsappCrm
                    ? 'border-purple-400 bg-purple-900/40 text-foreground'
                    : 'border-purple-900/40 bg-secondary/10 text-muted-foreground'
                }`}
              >
                <div className="text-xs font-semibold text-muted-foreground">WhatsApp CRM Engine</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Sub-3s quote delivery bot (+₹22k)</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Terminal Output Screen */}
        <div className="lg:col-span-5 p-6 bg-background border border-border/60 space-y-5">
          <div className="text-primary flex items-center justify-between border-b border-border pb-3">
            <span>&gt; ESTIMATION_SUMMARY.json</span>
            <span className="text-[10px] text-emerald-400 font-mono">STATUS: CALCULATED</span>
          </div>

          <div className="space-y-2 text-[11px] text-muted-foreground leading-relaxed font-mono">
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-muted-foreground">Signage Spec:</span>
              <span className="text-right text-muted-foreground font-semibold">{sqft} sq.ft &middot; {substrateRates[substrate].name.split(' ')[0]}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-muted-foreground">Fabrication Cost:</span>
              <span className="text-muted-foreground font-semibold">₹{signageCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-muted-foreground">Digital Engine:</span>
              <span className="text-muted-foreground font-semibold">₹{digitalCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-muted-foreground">Dispatch SLA:</span>
              <span className="text-emerald-400 font-semibold">{activeSla}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-muted-foreground">Outdoor Warranty:</span>
              <span className="text-muted-foreground">5–10 Years Certified</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
              ESTIMATED TURNKEY RANGE
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight font-sans">
              ₹{totalMin.toLocaleString('en-IN')} – ₹{totalMax.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-primary/80 mt-1">
              Direct factory pricing &middot; GST &amp; standard NCR mounting included
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/grow-with-us"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-500 text-foreground font-sans font-medium text-xs transition-colors shadow-lg shadow-purple-900/40"
            >
              <span>LOCK ESTIMATE &amp; SCHEDULE AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
