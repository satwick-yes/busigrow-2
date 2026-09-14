'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Hammer,
  Code2,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Check
} from 'lucide-react'

const PILLARS = [
  {
    id: 'offline',
    title: 'Physical Signage & Fabrication',
    label: 'Signage & Facades',
    icon: Hammer,
    tagline: 'In-House Noida Manufacturing Plant',
    description: 'We own the factory floor. Direct fabrication of 3D illuminated channel letters, ACP building facades, metal signage, and outdoor unipoles across Delhi NCR.',
    highlights: [
      { label: 'Factory Facility', value: 'Noida Sec 63 (30,000 sq.ft)' },
      { label: 'Turnaround', value: '24–48 Hours for NCR Installs' },
      { label: 'Materials', value: 'Cast Acrylic, SS304 Titanium, IP67 LEDs' },
      { label: 'Warranty', value: 'Up to 7 Years Outdoor Life' }
    ],
    deliverables: [
      '3D Cast Acrylic & Titanium Backlit Lettering',
      'Architectural ACP Facades & Glazing',
      'Retail Shopfront Fixtures & Directional Signage',
      'Municipal Permits & Heavy Structural Mounting'
    ],
    primaryAction: {
      text: 'Explore Signage Catalog',
      href: '/offline'
    },
    whatsappText: 'Hi Busigrow! I need a quote for retail signage & fabrication in NCR.'
  },
  {
    id: 'online',
    title: 'Web Engineering & Digital Platforms',
    label: 'Web & Digital',
    icon: Code2,
    tagline: 'Sub-Second Next.js Architecture',
    description: 'Custom web applications and headless e-commerce stores built from scratch for maximum speed, SEO ranking, and lead conversions. Zero bloated templates.',
    highlights: [
      { label: 'Performance SLA', value: '100/100 Core Web Vitals' },
      { label: 'Average TTFB', value: 'Under 50ms on Edge CDN' },
      { label: 'Tech Stack', value: 'Next.js 14, React, Tailwind, TypeScript' },
      { label: 'Integrations', value: 'Razorpay, Meta CAPI, GA4, ERPs' }
    ],
    deliverables: [
      'Sub-second Next.js Web Applications & Storefronts',
      'Figma-to-Code Pixel-Perfect UI Design Systems',
      'Conversion-Optimized Landing Pages & Funnels',
      'Server-side Tracking & Analytics Infrastructure'
    ],
    primaryAction: {
      text: 'Explore Web Engineering',
      href: '/online'
    },
    whatsappText: 'Hi Busigrow! I want to build a high-performance website / platform.'
  },
  {
    id: 'automations',
    title: 'WhatsApp & CRM Lead Automations',
    label: 'Lead Automations',
    icon: Zap,
    tagline: 'Sub-5-Second Lead-to-Quote Pipeline',
    description: 'Connect your ad campaigns directly to WhatsApp. Automatically qualify inbound leads with AI, generate dynamic PDF quotations, and sync with your sales CRM in seconds.',
    highlights: [
      { label: 'Response Latency', value: '< 3.2 Seconds Instant Reply' },
      { label: 'Quotation Engine', value: 'Dynamic Branded PDF Synthesis' },
      { label: 'Official Partner', value: 'WhatsApp Cloud API / Meta' },
      { label: 'CRM Sync', value: 'HubSpot, Airtable, Zoho, Custom Webhooks' }
    ],
    deliverables: [
      'Official WhatsApp Business Cloud API Pipelines',
      'AI Lead Qualification & Priority Routing',
      'Instant Branded PDF Quotation Generator',
      'Two-Way CRM Deal Card Synchronization'
    ],
    primaryAction: {
      text: 'Explore AI Automations',
      href: '/automations'
    },
    whatsappText: 'Hi Busigrow! I want to automate our WhatsApp lead intake & quotation process.'
  }
]

export function HeroCommandCenter() {
  const [activeTab, setActiveTab] = useState<'offline' | 'online' | 'automations'>('offline')

  const currentPillar = PILLARS.find(p => p.id === activeTab) || PILLARS[0]

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-border bg-card/90 backdrop-blur-xl shadow-sm overflow-hidden transition-all">
      {/* Top Interactive Pillar Selector */}
      <div className="px-4 sm:px-6 py-3.5 border-b border-purple-200/50 dark:border-purple-900/40 bg-purple-50/50 dark:bg-secondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-foreground">
            Core Business Capabilities
          </span>
        </div>

        {/* 3 Pill Tabs */}
        <div className="flex items-center gap-1.5 bg-background/80 dark:bg-background/40 p-1 rounded-2xl border border-purple-200/60 dark:border-border/40 w-full sm:w-auto">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            const isSelected = activeTab === pillar.id
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id as any)}
                className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-foreground shadow-sm font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-purple-100/50 dark:hover:bg-secondary/80/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{pillar.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Tab Details Stage */}
      <div className="p-5 sm:p-8 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Top Info Bar */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 dark:bg-secondary/70 text-primary dark:text-muted-foreground text-xs font-medium border border-purple-300/50 dark:border-border/50">
                  <Sparkles className="w-3 h-3" />
                  <span>{currentPillar.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
                  {currentPillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {currentPillar.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(currentPillar.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-foreground text-xs font-medium transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>

                <Link
                  href={currentPillar.primaryAction.href}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-50 dark:bg-secondary text-primary dark:text-muted-foreground border border-purple-200/80 dark:border-border/60 text-xs font-medium hover:bg-purple-100 dark:hover:bg-secondary/80 transition-all"
                >
                  <span>{currentPillar.primaryAction.text}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4 Highlight Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {currentPillar.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-secondary/30 border border-purple-200/50 dark:border-purple-900/30 space-y-1"
                >
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Deliverables Checklist */}
            <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40">
              <span className="text-xs font-mono text-primary dark:text-muted-foreground block mb-3 font-medium">
                WHAT WE DELIVER &amp; GUARANTEE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-muted-foreground font-light">
                {currentPillar.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 text-primary dark:text-muted-foreground flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
