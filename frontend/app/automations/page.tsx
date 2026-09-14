'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import {
  Zap,
  ArrowRight,
  MessageSquare,
  Workflow,
  Cpu,
  Database,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Check,
  Calculator,
  Activity,
  Layers,
  Sparkles
} from "lucide-react"

const METRICS = [
  { value: "2.4M+", label: "Messages Processed / Mo", detail: "WhatsApp Meta Cloud API" },
  { value: "< 5s", label: "Lead Response Time", detail: "Zero-latency qualification" },
  { value: "120h+", label: "Hours Saved / Client / Mo", detail: "Replaced manual data entry" },
  { value: "99.9%", label: "Pipeline Reliability", detail: "Fault-tolerant webhook mesh" }
]

const PLATFORM_MODULES = [
  {
    id: "lead-intake",
    step: "01",
    title: "Instant Lead Qualification & Routing",
    tagline: "Zero-Latency WhatsApp & Webhooks",
    desc: "Every inbound inquiry from Meta ads, Google Ads, or web forms is qualified via conversational WhatsApp logic in under 5 seconds.",
    deliverables: [
      "Meta Cloud API & WhatsApp Business Platform hookup",
      "Dynamic multi-branch qualification questionnaires",
      "Direct bi-directional sync with HubSpot, Zoho, and Google Sheets",
      "High-intent human escalation alerts for sales reps"
    ],
    tech: "Meta Graph API, Webhooks, Node.js Edge Handlers"
  },
  {
    id: "quote-invoicing",
    step: "02",
    title: "Dynamic Quotation & PDF Invoicing",
    tagline: "Form-to-Contract Automation",
    desc: "Generate branded proposal PDFs, dynamic rate estimates, and instant Razorpay/Stripe checkout links automatically from client submissions.",
    deliverables: [
      "Programmatic PDF generation with customized line items",
      "Automated payment link generation (Razorpay / Stripe)",
      "Multi-stage automated payment reminder cadences",
      "Instant ERP & QuickBooks invoice ledger recording"
    ],
    tech: "PDFKit, Razorpay Webhooks, PostgreSQL, Slack Alerts"
  },
  {
    id: "internal-ops",
    step: "03",
    title: "Custom Operational Command Centers",
    tagline: "Replace Spreadsheets with Real-Time Portals",
    desc: "Bespoke internal portals that aggregate order dispatches, client milestones, and sales rep performance into a single dashboard.",
    deliverables: [
      "Role-based access control (RBAC) for field & office staff",
      "Live order status, dispatch tracking & geo-log audits",
      "Daily executive Slack / Email briefing reports",
      "Custom REST & GraphQL webhook orchestrations"
    ],
    tech: "Next.js 15, Prisma, Supabase, Tailwind CSS"
  }
]

const PIPELINE_FLOW = [
  {
    stage: "01 / TRIGGER",
    title: "Omnichannel Ingestion",
    desc: "Customer submits form, clicks Meta Click-to-WhatsApp ad, or calls IVR hotline.",
    latency: "Immediate (0ms)"
  },
  {
    stage: "02 / LOGIC",
    title: "AI & Rule Qualification",
    desc: "System evaluates budget, location, requirement urgency, and tags the lead score.",
    latency: "350ms processing"
  },
  {
    stage: "03 / ACTION",
    title: "Direct Pipeline Sync",
    desc: "Data updates in CRM, generates custom quote PDF, and alerts dedicated rep.",
    latency: "1.2s sync time"
  },
  {
    stage: "04 / ENGAGE",
    title: "Conversational Closure",
    desc: "WhatsApp bot delivers brochure, schedules site visit or triggers payment link.",
    latency: "< 5s total turnaround"
  }
]

const INDUSTRY_PACKS = [
  {
    title: "Retail & Franchise Workflows",
    desc: "Automated SKU inventory queries, store locator bot, VIP loyalty point alerts, and instant point-of-sale digital invoicing.",
    tags: ["Inventory Sync", "WhatsApp Order Desk", "Loyalty Automation", "POS Integration"]
  },
  {
    title: "Real Estate & Commercial Brokerage",
    desc: "Instant floorplan & brochure dispatcher, automated site visit booking, agent commission ledger, and lead temperature scoring.",
    tags: ["Site Visit Scheduler", "Brochure Bot", "Lead Scoring", "CRM Sync"]
  },
  {
    title: "Healthcare & Clinic Operations",
    desc: "Patient appointment scheduling, automated pre-consultation instructions, digital prescription dispatch, and doctor calendar sync.",
    tags: ["Appointment Desk", "Prescription Bot", "Feedback Loops", "Google Cal Sync"]
  },
  {
    title: "Agencies & Professional Services",
    desc: "Client onboarding questionnaire automation, contract generation & e-sign, project milestone alerts, and retainer invoicing.",
    tags: ["Client Intake", "Contract Engine", "Milestone Tracking", "Razorpay Subscriptions"]
  }
]

export default function AutomationsPage() {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState(250)
  const [avgTicketSize, setAvgTicketSize] = useState(15000)

  // Calculations
  const currentLeadsLost = Math.round(inquiriesPerMonth * 0.35) // 35% drop-off from slow manual response
  const recoveredLeads = Math.round(currentLeadsLost * 0.45) // 45% recovered with 5-sec response
  const monthlyRevenueRecovered = recoveredLeads * (avgTicketSize * 0.15) // Estimated conversion
  const hoursSavedPerMonth = Math.round(inquiriesPerMonth * 0.3) // 18 mins per lead saved

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-28 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <main className="pt-28 pb-20 space-y-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 pb-12 border-b border-purple-200/50 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/60 border border-purple-300/60 dark:border-purple-800/60 text-xs font-mono text-purple-800 dark:text-purple-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Pillar 03: Automated Pipelines & Workflows
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Eliminate bottlenecks. <br className="hidden sm:inline" />
            <span className="text-gradient-purple">Scale operations on autopilot.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Sub-5-second lead qualification, automated WhatsApp closing funnels, dynamic quotation generators, and real-time CRM synchronizations engineered for zero data drop-off.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Book Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Busigrow%2C%20I%20want%20to%20see%20a%20live%20WhatsApp%20automation%20demo."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border border-purple-200/80 dark:border-purple-800/60 text-sm font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Test Live WhatsApp Demo</span>
            </a>
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-200/50 dark:border-purple-900/40">
            {METRICS.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
                <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-foreground mt-1">{m.label}</div>
                <div className="text-[11px] font-mono text-muted-foreground">{m.detail}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4-STAGE PIPELINE VISUALIZER */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
                Deterministic Architecture
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
                How our automated pipelines execute
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-950/50 border border-purple-300/40 dark:border-purple-800/40">
              End-to-end latency &lt; 5000ms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PIPELINE_FLOW.map((step, idx) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-semibold">{step.stage}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300/40 dark:border-purple-800/40 text-purple-800 dark:text-purple-300">
                      {step.latency}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3 CORE MODULES */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
              Core Infrastructure
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Production-grade automation modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLATFORM_MODULES.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300/40 dark:border-purple-800/40 text-purple-800 dark:text-purple-300 font-medium">
                      Module {m.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-700/80 dark:text-purple-400/80 mb-3">
                    {m.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-muted-foreground">
                    {m.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-purple-200/40 dark:border-purple-900/40 text-[11px] font-mono text-purple-700/90 dark:text-purple-300/90">
                  <span>Stack: {m.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI CALCULATOR INTERACTIVE COMPONENT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl border border-purple-200/60 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/50 via-card to-purple-100/30 dark:from-purple-950/30 dark:via-card dark:to-purple-900/20 space-y-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold mb-2">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span>Financial Impact Model</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Calculate your <span className="text-gradient-purple">automation ROI</span>
              </h3>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              Based on industry benchmark 35% response drop-off rate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-purple-200/50 dark:border-purple-900/40">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted-foreground">Monthly Inbound Inquiries:</span>
                  <span className="font-bold text-purple-700 dark:text-purple-300">{inquiriesPerMonth} leads</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={inquiriesPerMonth}
                  onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-950 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
                  <span>50</span>
                  <span>1,000</span>
                  <span>2,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted-foreground">Average Deal / Order Value (₹):</span>
                  <span className="font-bold text-purple-700 dark:text-purple-300">₹{avgTicketSize.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="2000"
                  value={avgTicketSize}
                  onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-950 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
                  <span>₹2,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000+</span>
                </div>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50 flex flex-col justify-between">
                <span className="text-xs font-mono text-muted-foreground">Recovered Inquiries</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 dark:text-purple-300">
                    +{recoveredLeads}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">Leads / Mo Saved</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50 flex flex-col justify-between">
                <span className="text-xs font-mono text-muted-foreground">Monthly Recovered Pipeline</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 dark:text-purple-300">
                    ₹{Math.round(monthlyRevenueRecovered).toLocaleString()}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">Estimated Run-Rate</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50 flex flex-col justify-between">
                <span className="text-xs font-mono text-muted-foreground">Hours of Manual Data Entry</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 dark:text-purple-300">
                    {hoursSavedPerMonth}h
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">Rep Hours Saved / Mo</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50 flex flex-col justify-between">
                <span className="text-xs font-mono text-muted-foreground">Response Speed SLA</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 dark:text-purple-300">
                    &lt; 5s
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">24/7/365 Continuous</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TURNKEY INDUSTRY PACKS */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
              Vertical Blueprints
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Pre-built industry automation packs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRY_PACKS.map((pack, idx) => (
              <motion.div
                key={pack.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                    {pack.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pack.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-200/40 dark:border-purple-900/40">
                  {pack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/60 border border-purple-300/40 dark:border-purple-800/40 text-purple-800 dark:text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl border border-purple-200/60 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/70 via-background to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/30 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Ready to automate your <span className="text-gradient-purple">operational workflow?</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Book a 20-minute architecture session. We will audit your inquiry pipeline and present a functional prototype within 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}
