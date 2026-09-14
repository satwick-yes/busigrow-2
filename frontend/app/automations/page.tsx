'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Zap,
  ArrowRight,
  MessageSquare,
  Cpu,
  Database,
  CheckCircle2,
  Sliders,
  Sparkles,
  GitBranch,
  Radio,
  Check,
  Play
} from 'lucide-react'

const PIPELINE_NODES = [
  {
    id: 'trigger-ingest',
    stage: 'STAGE 01 // INGESTION',
    title: 'Omnichannel Webhook Listener',
    badge: '18ms Edge Ingestion',
    tech: 'Cloudflare Workers & Vercel Edge',
    desc: 'Listens to inbound webhooks from Meta Ads, Google Ads, website RFPs, and IVR telephony systems with cryptographic signature verification.',
    payload: `{
  "event": "inquiry.created",
  "source": "meta_click_to_whatsapp",
  "phone": "+919876543210",
  "intent": "signage_3d_acrylic",
  "budget": "₹1,50,000",
  "lat_long": "28.6139, 77.2090"
}`
  },
  {
    id: 'ai-classifier',
    stage: 'STAGE 02 // EVALUATION',
    title: 'Sub-Second LLM Qualification Engine',
    badge: '280ms Inference',
    tech: 'Claude 3.5 Sonnet & OpenAI Function Calling',
    desc: 'Evaluates buyer intent, parses square-footage and substrate specifications, assigns lead temperature score, and extracts structured quote variables.',
    payload: `{
  "lead_score": 96,
  "status": "HIGH_INTENT",
  "classified_substrate": "3D_CAST_ACRYLIC",
  "sqft_estimate": 150,
  "assigned_rep": "architect.delhi@busigrow.com",
  "priority": "P0_IMMEDIATE_DISPATCH"
}`
  },
  {
    id: 'whatsapp-dispatch',
    stage: 'STAGE 03 // DISPATCH',
    title: 'Meta Cloud WhatsApp CRM Dispatcher',
    badge: '< 1.2s Delivery SLA',
    tech: 'Meta Graph API v20.0 + Razorpay Gateway',
    desc: 'Dispatches personalized interactive WhatsApp blueprint messages with dynamic PDF quotes, site inspection booking buttons, and automated calendar links.',
    payload: `{
  "dispatch_channel": "WHATSAPP_BUSINESS_API",
  "template": "busigrow_blueprint_estimate_v3",
  "pdf_url": "https://cdn.busigrow.com/quotes/Q-9482.pdf",
  "quick_replies": ["Confirm Site Inspection", "Talk to Architect"]
}`
  },
  {
    id: 'crm-sync',
    stage: 'STAGE 04 // LEDGER',
    title: 'Enterprise CRM & Factory ERP Mesh',
    badge: 'Zero Data Loss',
    tech: 'PostgreSQL, Supabase & Webhook Fanout',
    desc: 'Pushes qualified opportunities into HubSpot/Zoho CRM, alerts the plant floor manager in Noida Sector 63 via Slack, and creates an audit log.',
    payload: `{
  "crm_record_id": "rec_948201",
  "plant_job_ticket": "NOIDA-SEC63-JOB-2026",
  "slack_notification_sent": true,
  "telemetry_sync": "SUCCESS_ACK_200"
}`
  }
]

export default function AutomationsPage() {
  const [activeNode, setActiveNode] = useState(0)
  const [inquiries, setInquiries] = useState(350)
  const [dealValue, setDealValue] = useState(25000)

  // Financial ROI Engine
  const recoveredInquiries = Math.round(inquiries * 0.38)
  const recoveredRevenue = Math.round(recoveredInquiries * dealValue * 0.22)
  const savedHours = Math.round(inquiries * 0.4)

  return (
    <div className="w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION: FLOWING PIPELINE OVERVIEW
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-purple-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300">
              PILLAR 03 // DATA PIPELINES &amp; CRM AUTOMATIONS
            </span>
            <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              THROUGHPUT: 2.4M DISPATCHES / MO
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-white leading-[0.92]">
            Deterministic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
              Automated
            </span>{' '}
            Pipelines.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl font-light leading-relaxed">
            Eliminate lead leakage with sub-5-second conversational qualification, automated WhatsApp quotes, and instant ERP job ticket dispatching. Zero human latency.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/40"
            >
              <span>Build My Automation Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Busigrow!%20Show%20me%20a%20live%20WhatsApp%20automation%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 border border-purple-800 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Simulate Live WhatsApp Trigger</span>
            </a>
          </div>

          {/* Industrial Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-purple-900/40 font-mono">
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">&lt; 3.8s</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">LEAD QUALIFICATION SLA</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-purple-300 tracking-tight">0.00%</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">DROPPED WEBHOOKS</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">38.4%</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">LEAD RECOVERY RATE</div>
            </div>
            <div className="p-4 bg-purple-950/20 border border-purple-900/40">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">140h+</div>
              <div className="text-[10px] text-purple-400 uppercase tracking-wider mt-1">HOURS SAVED / MO</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE NODE-BASED DATA PIPELINE VISUALIZER (STICKY 2-COL)
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                // ARCHITECTURE RUNTIME
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Live Data Pipeline Engine
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-300/80 max-w-sm">
              Click pipeline nodes to inspect cryptographic payloads and payload transformations in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Interactive Node Chain */}
            <div className="lg:col-span-6 space-y-4">
              {PIPELINE_NODES.map((node, idx) => {
                const active = activeNode === idx
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(idx)}
                    className={`p-6 border transition-all cursor-pointer ${
                      active
                        ? 'border-purple-400 bg-[#120726] shadow-xl'
                        : 'border-purple-900/50 bg-[#090312] hover:border-purple-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                      <span className="text-purple-400 font-semibold">{node.stage}</span>
                      <span className="px-2 py-0.5 bg-purple-950 border border-purple-800 text-purple-300">
                        {node.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase text-white font-sans">
                      {node.title}
                    </h3>
                    <p className="text-xs text-purple-200/70 mt-2 font-light leading-relaxed font-sans">
                      {node.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-mono text-purple-400">
                      <span>Stack: {node.tech}</span>
                      <span className="text-white">&rarr; Inspect JSON</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Sticky Telemetry JSON Inspector */}
            <div className="lg:col-span-6 sticky top-28 border border-purple-800/80 bg-[#090314] font-mono text-xs overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-[#130728] border-b border-purple-900/60">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 font-semibold uppercase text-[11px]">
                    Payload Telemetry // {PIPELINE_NODES[activeNode].id}
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: LIVE PIPE
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-[11px] text-zinc-400">
                  <span className="text-purple-400">// Handled by:</span> {PIPELINE_NODES[activeNode].tech}
                </div>

                <div className="bg-[#05020c] p-4 border border-purple-900/60 overflow-x-auto text-purple-200 text-[11px] leading-relaxed">
                  <pre>{PIPELINE_NODES[activeNode].payload}</pre>
                </div>

                <div className="p-3 bg-purple-950/30 border border-purple-900/40 text-[11px] text-purple-300 flex items-center justify-between">
                  <span>Execution Latency:</span>
                  <span className="font-bold text-emerald-400">{PIPELINE_NODES[activeNode].badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FINANCIAL IMPACT & ROI RECOVERY MODEL
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
              // FINANCIAL IMPACT MODEL
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Pipeline Recovery Calculation
            </h2>
          </div>

          <div className="p-8 sm:p-12 border border-purple-800 bg-[#0d061c] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-purple-300 uppercase">Monthly Inbound Inquiries:</span>
                  <span className="text-lg font-bold text-white">{inquiries} Leads</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={inquiries}
                  onChange={(e) => setInquiries(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-purple-950 rounded-none"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-purple-300 uppercase">Average Order / Deal Value:</span>
                  <span className="text-lg font-bold text-white">₹{dealValue.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-purple-950 rounded-none"
                />
              </div>

              <p className="text-xs text-purple-300/70 font-light leading-relaxed">
                Calculations based on an industry baseline 38% inquiry abandonment when response time exceeds 15 minutes, reduced to zero with Busigrow sub-5s WhatsApp routing.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 font-mono">
              <div className="p-5 bg-purple-950/30 border border-purple-900/50">
                <span className="text-[10px] text-purple-400 uppercase tracking-wider block">RECOVERED LEADS / MO</span>
                <span className="text-3xl font-bold text-white mt-1 block">+{recoveredInquiries}</span>
              </div>
              <div className="p-5 bg-purple-950/30 border border-purple-900/50">
                <span className="text-[10px] text-purple-400 uppercase tracking-wider block">REVENUE RECOVERED / MO</span>
                <span className="text-3xl font-bold text-emerald-400 mt-1 block">₹{recoveredRevenue.toLocaleString('en-IN')}</span>
              </div>
              <div className="p-5 bg-purple-950/30 border border-purple-900/50">
                <span className="text-[10px] text-purple-400 uppercase tracking-wider block">MANUAL HOURS SAVED</span>
                <span className="text-3xl font-bold text-purple-300 mt-1 block">{savedHours}h</span>
              </div>
              <div className="p-5 bg-purple-950/30 border border-purple-900/50">
                <span className="text-[10px] text-purple-400 uppercase tracking-wider block">LEAD ENGAGEMENT SLA</span>
                <span className="text-3xl font-bold text-white mt-1 block">&lt; 5s</span>
              </div>
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
                DISPATCH ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                Stop losing high-intent leads to delayed responses.
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 font-light leading-relaxed">
                Connect your Meta Ads, Google Ads, and website directly to a high-converting WhatsApp CRM funnel.
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
