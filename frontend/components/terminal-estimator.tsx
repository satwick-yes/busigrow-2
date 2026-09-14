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
    <div className="w-full border border-purple-200/60 dark:border-purple-900/60 bg-[#090412] text-zinc-100 font-mono text-xs overflow-hidden shadow-2xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#130924] border-b border-purple-900/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-purple-300/80 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            busigrow-factory-estimator ~ v6.4.0 (noida-sec63)
          </span>
        </div>
        <div className="text-[10px] text-purple-400/80 uppercase tracking-widest flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE TELEMETRY
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1 text-purple-300/80">
            <span className="text-purple-400 font-semibold">$ set parameters --region="delhi-ncr"</span>
            <p className="text-[11px] text-zinc-400 font-sans">
              Adjust parameters below for instant manufacturing calculation and dispatch SLA.
            </p>
          </div>

          {/* Range Slider */}
          <div className="space-y-2 p-4 bg-purple-950/20 border border-purple-900/40">
            <div className="flex justify-between items-center text-zinc-300">
              <span className="text-[11px] uppercase tracking-wider text-purple-300">
                1. Signage Surface Area:
              </span>
              <span className="text-sm font-bold text-purple-300 font-mono">{sqft} SQ.FT</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-purple-950 rounded-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>MIN: 20 SQFT</span>
              <span>MED: 250 SQFT</span>
              <span>MAX: 500 SQFT</span>
            </div>
          </div>

          {/* Substrate Selector */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-purple-300 block">
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
                        ? 'border-purple-400 bg-purple-900/40 text-white'
                        : 'border-purple-900/40 bg-purple-950/10 text-zinc-400 hover:border-purple-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-purple-200">{sub.name}</span>
                      {active && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-zinc-400">
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
            <span className="text-[11px] uppercase tracking-wider text-purple-300 block">
              3. Digital Stack &amp; Automations:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setWebTier(webTier === 'headless-next' ? 'none' : 'headless-next')}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  webTier === 'headless-next'
                    ? 'border-purple-400 bg-purple-900/40 text-white'
                    : 'border-purple-900/40 bg-purple-950/10 text-zinc-400'
                }`}
              >
                <div className="text-xs font-semibold text-purple-200">Next.js 14 Web Engine</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Sub-second headless app (+₹48k)</div>
              </button>

              <button
                type="button"
                onClick={() => setWhatsappCrm(!whatsappCrm)}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  whatsappCrm
                    ? 'border-purple-400 bg-purple-900/40 text-white'
                    : 'border-purple-900/40 bg-purple-950/10 text-zinc-400'
                }`}
              >
                <div className="text-xs font-semibold text-purple-200">WhatsApp CRM Engine</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Sub-3s quote delivery bot (+₹22k)</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Terminal Output Screen */}
        <div className="lg:col-span-5 p-6 bg-[#0e061c] border border-purple-800/60 space-y-5">
          <div className="text-purple-400 flex items-center justify-between border-b border-purple-900/50 pb-3">
            <span>&gt; ESTIMATION_SUMMARY.json</span>
            <span className="text-[10px] text-emerald-400 font-mono">STATUS: CALCULATED</span>
          </div>

          <div className="space-y-2 text-[11px] text-zinc-300 leading-relaxed font-mono">
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-zinc-500">Signage Spec:</span>
              <span className="text-right text-purple-200 font-semibold">{sqft} sq.ft &middot; {substrateRates[substrate].name.split(' ')[0]}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-zinc-500">Fabrication Cost:</span>
              <span className="text-purple-300 font-semibold">₹{signageCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-zinc-500">Digital Engine:</span>
              <span className="text-purple-300 font-semibold">₹{digitalCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-zinc-500">Dispatch SLA:</span>
              <span className="text-emerald-400 font-semibold">{activeSla}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-950">
              <span className="text-zinc-500">Outdoor Warranty:</span>
              <span className="text-purple-300">5–10 Years Certified</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
              ESTIMATED TURNKEY RANGE
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              ₹{totalMin.toLocaleString('en-IN')} – ₹{totalMax.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-purple-400/80 mt-1">
              Direct factory pricing &middot; GST &amp; standard NCR mounting included
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/grow-with-us"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-500 text-white font-sans font-medium text-xs transition-colors shadow-lg shadow-purple-900/40"
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
