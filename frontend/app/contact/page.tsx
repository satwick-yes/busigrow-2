'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Building2,
  Sparkles,
  Send,
  Zap,
  CheckCircle2,
  Lock,
  FileCode2,
  Terminal,
  Activity
} from 'lucide-react'

const PROJECT_TYPES = [
  { id: 'offline', label: 'Offline Signage & Fabrication', tag: 'PILLAR 01 // PHYSICAL', icon: '01' },
  { id: 'online', label: 'Next.js App & UI/UX Systems', tag: 'PILLAR 02 // DIGITAL', icon: '02' },
  { id: 'automations', label: 'WhatsApp CRM & Pipelines', tag: 'PILLAR 03 // AUTOMATION', icon: '03' },
  { id: 'turnkey', label: 'Turnkey Venture Acquisition', tag: 'PILLAR 04 // VENTURES', icon: '04' }
]

const TIMELINES = [
  { id: 'urgent', label: 'Urgent Dispatch (< 7 Days)', speed: 'P0 PRIORITY' },
  { id: 'sprint', label: 'Standard Sprint (2–4 Weeks)', speed: 'P1 STANDARD' },
  { id: 'roadmap', label: 'Enterprise Roadmap (1–3 Months)', speed: 'P2 STRATEGIC' }
]

const DIRECT_CHANNELS = [
  {
    icon: MessageSquare,
    label: 'Meta Cloud WhatsApp Desk',
    val: '+91 98765 43210',
    desc: 'Average response: < 3 minutes SLA',
    href: 'https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20would%20like%20to%20scope%20a%20new%20project.'
  },
  {
    icon: Mail,
    label: 'Engineering Inbox',
    val: 'team@busigrow.com',
    desc: 'Direct inbox of principal architects',
    href: 'mailto:team@busigrow.com'
  },
  {
    icon: MapPin,
    label: 'Noida Sector 63 Plant',
    val: 'Plot C-56/22, Sector 63, Noida',
    desc: '30,000 sq.ft fabrication floor',
    href: 'https://maps.google.com'
  }
]

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState('offline')
  const [timeline, setTimeline] = useState('sprint')
  const [budget, setBudget] = useState(250000)
  const [ndaRequired, setNdaRequired] = useState(true)

  // Step 2 Fields
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [briefDetails, setBriefDetails] = useState('')

  const [submitted, setSubmitted] = useState(false)
  const [receiptId, setReceiptId] = useState('')

  const handleNext = () => {
    if (step === 1) {
      setStep(2)
    } else {
      const generatedId = `BZ-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
      setReceiptId(generatedId)
      setSubmitted(true)
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* =========================================================================
          1. HERO HEADER
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-12 border-b border-purple-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300">
              COMMERCIAL INTAKE // SPRINT DIRECTIVE
            </span>
            <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DESK STATUS: DIRECTORS ON DUTY &middot; SLA &lt; 2H
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-white leading-[0.92]">
            Grow With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
              Busigrow.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl font-light leading-relaxed">
            Direct access to our fabrication directors in Noida Sector 63 and software engineers in Gurugram. Zero junior account executives. Guaranteed architectural proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE BRIEF GENERATOR & FAST-LANE DESK
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Interactive Brief Stepper */}
            <div className="lg:col-span-8 border border-purple-800 bg-[#090314] p-8 sm:p-12 shadow-2xl">
              {submitted ? (
                /* Cryptographic Brief Receipt */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-purple-900/60 pb-4">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-sm">
                        BRIEF TRANSMITTED &middot; 200 OK
                      </span>
                    </div>
                    <span className="text-purple-400">{receiptId}</span>
                  </div>

                  <div className="space-y-4 text-purple-200/90 font-light leading-relaxed">
                    <p className="text-base text-white font-normal font-sans">
                      Thank you, <strong className="text-purple-300">{fullName || 'Partner'}</strong>. Your brief has been dispatched directly to our engineering desk in Noida Sector 63.
                    </p>
                    <p>
                      An engineering director is reviewing your substrate tolerances and software architecture scope. You will receive an itemized technical proposal and delivery timeline within 2 hours.
                    </p>
                  </div>

                  {/* Structured Payload Matrix */}
                  <div className="p-6 bg-[#05020c] border border-purple-900/60 space-y-3">
                    <div className="text-[10px] text-purple-400 uppercase tracking-widest pb-2 border-b border-purple-900/40">
                      RECORDED TELEMETRY PARAMETERS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
                      <div><span className="text-purple-400">Project Vector:</span> {PROJECT_TYPES.find(p => p.id === projectType)?.label}</div>
                      <div><span className="text-purple-400">Target Budget:</span> ₹{budget.toLocaleString('en-IN')}</div>
                      <div><span className="text-purple-400">Execution Window:</span> {TIMELINES.find(t => t.id === timeline)?.label}</div>
                      <div><span className="text-purple-400">NDA Protocol:</span> {ndaRequired ? 'CRYPTOGRAPHIC 100% ACTIVE' : 'STANDARD'}</div>
                      <div><span className="text-purple-400">Client Org:</span> {company || 'Independent'}</div>
                      <div><span className="text-purple-400">Direct Email:</span> {email}</div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/"
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs uppercase tracking-wider transition-colors font-medium"
                    >
                      Return to Plant Overview &rarr;
                    </Link>

                    <a
                      href={`https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20just%20submitted%20brief%20${receiptId}%20for%20${encodeURIComponent(company || fullName || 'my brand')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-purple-800 text-purple-300 hover:bg-purple-950/60 text-xs uppercase tracking-wider transition-colors"
                    >
                      Accelerate via WhatsApp Desk
                    </a>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  {/* Stepper Status Bar */}
                  <div className="flex items-center justify-between font-mono text-xs border-b border-purple-900/40 pb-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="font-semibold uppercase tracking-wider">
                        {step === 1 ? 'PHASE 01 // ARCHITECTURAL PARAMETERS' : 'PHASE 02 // STAKEHOLDER TELEMETRY'}
                      </span>
                    </div>
                    <span className="text-zinc-500">STAGE {step} / 02</span>
                  </div>

                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      {/* Project Vector Pills */}
                      <div className="space-y-3">
                        <label className="text-[11px] font-mono text-purple-400 uppercase tracking-widest block">
                          01 // SELECT PRIMARY WORKSTREAM
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {PROJECT_TYPES.map((t) => {
                            const isSelected = projectType === t.id
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => setProjectType(t.id)}
                                className={`p-4 border text-left transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-purple-400 bg-[#14082c] shadow-lg'
                                    : 'border-purple-900/50 bg-[#06020c] hover:border-purple-700'
                                }`}
                              >
                                <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                                  <span className="text-purple-400">{t.tag}</span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-purple-300" />}
                                </div>
                                <div className="text-sm font-bold text-white font-sans">
                                  {t.label}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Interactive Budget Slider */}
                      <div className="space-y-4 pt-4 border-t border-purple-900/40">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                            02 // TARGET BUDGET ALLOCATION
                          </label>
                          <span className="px-3 py-1 bg-purple-950 border border-purple-800 text-purple-300 font-mono font-bold text-sm">
                            ₹{budget.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="25000"
                          max="2500000"
                          step="25000"
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="w-full accent-purple-500 cursor-pointer h-1.5 bg-purple-950 rounded-none"
                        />
                        <div className="flex justify-between font-mono text-[10px] text-zinc-500">
                          <span>₹25K (Starter Prototype)</span>
                          <span>₹5L (Mid-Scale Rollout)</span>
                          <span>₹25L+ (Enterprise Multi-Store)</span>
                        </div>
                      </div>

                      {/* Timeline Selector */}
                      <div className="space-y-3 pt-4 border-t border-purple-900/40">
                        <label className="text-[11px] font-mono text-purple-400 uppercase tracking-widest block">
                          03 // DEPLOYMENT WINDOW
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {TIMELINES.map((t) => {
                            const isSelected = timeline === t.id
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => setTimeline(t.id)}
                                className={`p-3.5 border text-left transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-purple-400 bg-[#14082c]'
                                    : 'border-purple-900/50 bg-[#06020c] hover:border-purple-700'
                                }`}
                              >
                                <div className="text-[10px] font-mono text-purple-400 mb-1">
                                  {t.speed}
                                </div>
                                <div className="text-xs font-semibold text-white font-sans">
                                  {t.label}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* NDA Protocol Toggle */}
                      <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between p-4 bg-[#05020c] border border-purple-900/50">
                        <div className="flex items-center gap-3">
                          <Lock className="w-4 h-4 text-purple-400 shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-white uppercase font-mono">
                              Mutual Cryptographic NDA Protocol
                            </div>
                            <div className="text-[10px] text-zinc-400 font-mono">
                              Automated white-label non-disclosure agreement countersigned instantly.
                            </div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={ndaRequired}
                          onChange={(e) => setNdaRequired(e.target.checked)}
                          className="w-4 h-4 accent-purple-500 cursor-pointer"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <span>Proceed to Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      {/* Form Inputs (Single bottom-border inputs) */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                              YOUR NAME *
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Vikram Sharma"
                              required
                              className="w-full bg-transparent border-b border-purple-800 focus:border-purple-400 text-white text-sm py-2 focus:outline-none font-mono"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                              COMPANY / BRAND NAME
                            </label>
                            <input
                              type="text"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="e.g. Nexus Retail Labs"
                              className="w-full bg-transparent border-b border-purple-800 focus:border-purple-400 text-white text-sm py-2 focus:outline-none font-mono"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                              WORK EMAIL *
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="vikram@company.com"
                              required
                              className="w-full bg-transparent border-b border-purple-800 focus:border-purple-400 text-white text-sm py-2 focus:outline-none font-mono"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                              PHONE / WHATSAPP (FOR DIRECT QUOTE)
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full bg-transparent border-b border-purple-800 focus:border-purple-400 text-white text-sm py-2 focus:outline-none font-mono"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                            PROJECT SPECIFICATION / TECHNICAL NOTES
                          </label>
                          <textarea
                            rows={3}
                            value={briefDetails}
                            onChange={(e) => setBriefDetails(e.target.value)}
                            placeholder="Describe dimensions, substrates, codebase requirements, or store locations..."
                            className="w-full bg-transparent border-b border-purple-800 focus:border-purple-400 text-white text-sm py-2 focus:outline-none font-mono resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/40">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-xs font-mono text-purple-400 hover:text-white uppercase transition-colors"
                        >
                          &larr; Back to Parameters
                        </button>

                        <button
                          type="button"
                          disabled={!email.trim() || !fullName.trim()}
                          onClick={handleNext}
                          className={`px-8 py-4 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xl ${
                            email.trim() && fullName.trim()
                              ? 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'
                              : 'bg-purple-950 text-zinc-500 cursor-not-allowed border border-purple-900'
                          }`}
                        >
                          <span>Transmit Brief to Directors</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Right Fast-Lane Desk */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Channels Card */}
              <div className="border border-purple-900/50 bg-[#090314] p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                    // SPRINT DESK
                  </span>
                  <h3 className="text-xl font-bold uppercase text-white font-sans mt-1">
                    Direct Channels
                  </h3>
                </div>

                <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                  Need immediate fabrication line clearance, physical material samples, or urgent same-night deployment?
                </p>

                <div className="space-y-4 pt-2">
                  {DIRECT_CHANNELS.map((ch) => {
                    const Icon = ch.icon
                    return (
                      <a
                        key={ch.label}
                        href={ch.href}
                        target={ch.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="p-4 border border-purple-900/40 bg-[#05020c] flex items-start gap-3.5 hover:border-purple-500 transition-colors group block"
                      >
                        <div className="w-8 h-8 bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors uppercase font-sans">
                            {ch.label}
                          </div>
                          <div className="text-xs font-mono text-purple-300 mt-0.5">
                            {ch.val}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                            {ch.desc}
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* SLA Guarantee Box */}
              <div className="border border-purple-900/50 bg-[#05020c] p-6 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-purple-300 font-semibold uppercase text-[11px]">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>SLA Guarantee Protocol</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  All submitted briefs receive architectural engineering audits, CAD/die-line specifications, and itemized commercial matrices within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
