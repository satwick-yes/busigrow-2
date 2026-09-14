'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  Building,
  Layers,
  Clock
} from 'lucide-react'

const SERVICE_OPTIONS = [
  'Offline Execution & Signage',
  'Digital Systems & Web Development',
  'Automations & Workflow Tools',
  'Ready-Made Brand Venture',
  'Custom Enterprise Requirement'
]

const TIMELINE_OPTIONS = [
  'Immediate (Under 24-48 Hours)',
  '1 - 2 Weeks',
  'Monthly Retainer / Ongoing'
]

export default function GrowWithUsPage() {
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(SERVICE_OPTIONS[0])
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[0])
  const [requirements, setRequirements] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !fullName) return
    setSubmitted(true)
  }

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO HEADER
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                SALES &amp; CLIENT ONBOARDING
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] text-foreground uppercase leading-[0.95]">
              Let&apos;s Build <br />
              <span className="text-primary">Your Growth</span> Pipeline.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              Submit your project scope and client requirements. Our strategy, design, and execution teams will review and connect within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ULTRA-MINIMAL CLIENT REQUIREMENTS FORM
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 p-8 sm:p-12 border border-border bg-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-bold uppercase tracking-wider text-sm">
                        REQUIREMENTS RECORDED
                      </span>
                    </div>
                    <span className="text-primary font-mono">200 OK</span>
                  </div>

                  <div className="space-y-4 font-sans text-sm text-muted-foreground font-light leading-relaxed">
                    <p className="text-base text-foreground font-semibold">
                      Thank you, {fullName}. We have received your client requirements.
                    </p>
                    <p>
                      Our sales and technical directors are reviewing your project parameters. A member of our team will contact you at <strong className="text-foreground font-mono">{email}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/40 border border-border space-y-2 text-muted-foreground">
                    <div className="text-[10px] uppercase text-primary font-bold mb-1">
                      Submitted Summary:
                    </div>
                    <div><span className="text-foreground font-semibold">Service:</span> {service}</div>
                    <div><span className="text-foreground font-semibold">Target Timeline:</span> {timeline}</div>
                    <div><span className="text-foreground font-semibold">Organization:</span> {company || 'Individual / Founder'}</div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 font-sans">
                    <Link
                      href="/"
                      className="px-6 py-3 bg-white text-purple-950 hover:bg-purple-50 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
                    >
                      Return to Home &rarr;
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border border-border text-muted-foreground hover:bg-secondary text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1 pb-4 border-b border-border">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest block">
                      INTAKE DIRECTIVE
                    </span>
                    <h2 className="text-2xl font-bold uppercase text-foreground">
                      Client Requirements Form
                    </h2>
                  </div>

                  {/* Primary Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-foreground text-xs px-4 py-3.5 focus:outline-none transition-colors font-mono placeholder:text-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Retail Pvt Ltd"
                        className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-foreground text-xs px-4 py-3.5 focus:outline-none transition-colors font-mono placeholder:text-primary/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vikram@company.com"
                        className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-foreground text-xs px-4 py-3.5 focus:outline-none transition-colors font-mono placeholder:text-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-foreground text-xs px-4 py-3.5 focus:outline-none transition-colors font-mono placeholder:text-primary/40"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                      Service Requirement
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-muted-foreground text-xs px-4 py-3.5 focus:outline-none transition-colors font-mono cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {TIMELINE_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`p-3 text-left border text-xs font-mono transition-colors cursor-pointer ${
                            timeline === t
                              ? 'border-purple-400 bg-secondary text-foreground shadow-md shadow-purple-950/50'
                              : 'border-purple-900/80 bg-background/80 text-muted-foreground/70 hover:border-border'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Requirements Textarea */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                      Detailed Client Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Outline your project scope, deliverables, target audience, dimensions, or technical specifications..."
                      className="w-full bg-background border border-purple-900/80 focus:border-purple-400 text-foreground text-xs p-4 focus:outline-none transition-colors font-mono resize-none leading-relaxed placeholder:text-primary/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-border flex justify-end">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-950/40"
                    >
                      <span>Let&apos;s grow</span>
                      <ArrowRight className="w-4 h-4 text-purple-950" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 border border-border bg-card space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    // DIRECT DESK
                  </span>
                  <h3 className="text-lg font-bold uppercase text-foreground">
                    Direct Communication
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-4 bg-secondary/40 border border-border space-y-1">
                    <span className="text-primary uppercase text-[10px] block">Sales &amp; Partnership</span>
                    <div className="text-muted-foreground font-bold">team@busigrow.com</div>
                  </div>

                  <div className="p-4 bg-secondary/40 border border-border space-y-1">
                    <span className="text-primary uppercase text-[10px] block">Response SLA</span>
                    <div className="text-muted-foreground font-bold">Within 24 Hours</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/40 border border-border space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase text-[10px]">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>24-Hour Scope Delivery</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                  Every submitted brief is reviewed directly by our specialized design, fabrication, or automation teams for swift execution.
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
