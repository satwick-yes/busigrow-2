'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Bot,
  Cpu,
  Workflow,
  BarChart3,
  Package,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  Layers,
  Terminal,
  Zap,
  Boxes
} from 'lucide-react'

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}

const FEATURES = [
  {
    id: 'ai-agent',
    title: 'AI Agent builder',
    desc: 'Deploy custom intelligent agents that handle lead qualification, customer inquiries, appointment booking, and automated CRM updates.',
    icon: Bot,
    category: 'Autonomous Agents',
    capabilities: [
      'Multi-channel WhatsApp, Web, and SMS chat routing',
      'Context-aware knowledge base parsing',
      'Zero-latency lead qualification and data extraction'
    ]
  },
  {
    id: 'workflow-engine',
    title: 'Workflow Automation Engine',
    desc: 'Connect disparate apps, webhooks, CRMs, ERPs, and databases into cohesive, deterministic, failure-tolerant pipelines.',
    icon: Workflow,
    category: 'Process Orchestration',
    capabilities: [
      'Webhook listener with cryptographic verification',
      'Conditional branching and automatic error retries',
      'Real-time Slack, Email, and WhatsApp alerts'
    ]
  },
  {
    id: 'bi-dashboard',
    title: 'Business Intelligence Dashboard',
    desc: 'Consolidate operational telemetry, sales conversion velocity, campaign ROI, and inventory metrics into unified live dashboards.',
    icon: BarChart3,
    category: 'Analytics & Reporting',
    capabilities: [
      'Real-time KPI telemetry and revenue attribution',
      'Automated scheduled executive report summaries',
      'Custom metric alerts and anomaly detection'
    ]
  },
  {
    id: 'industry-packs',
    title: 'Industry Packs',
    desc: 'Pre-configured, battle-tested automation packs designed specifically for retail, real estate, logistics, healthcare, and agencies.',
    icon: Package,
    category: 'Turnkey Templates',
    capabilities: [
      'Pre-built CRM schemas and webhook endpoints',
      'Industry-tailored AI agent prompt libraries',
      'Rapid plug-and-play 24-hour deployment'
    ]
  }
]

const INDUSTRY_PACKS_LIST = [
  {
    name: 'Retail & Multi-Store',
    features: ['Store inventory sync', 'Storefront signage job ticketing', 'Automated POS sales aggregation']
  },
  {
    name: 'Real Estate & Property',
    features: ['Lead capture to WhatsApp CRM', 'Automated site visit scheduling', 'Dynamic brochure dispatch']
  },
  {
    name: 'Creative Agencies',
    features: ['Client project brief ingestion', 'White-label proofing notifications', 'Automated invoicing & milestones']
  },
  {
    name: 'E-commerce & Brands',
    features: ['Abandoned cart WhatsApp recovery', 'Return & exchange ticket bot', 'Dynamic ROAS reporting']
  }
]

export default function AutomationsPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [selectedPack, setSelectedPack] = useState(0)
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'AI Agent builder',
    'Workflow Automation Engine'
  ])

  const toggleModule = (name: string) => {
    if (selectedModules.includes(name)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== name))
      }
    } else {
      setSelectedModules([...selectedModules, name])
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                INTELLIGENT BUSINESS SYSTEMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-foreground leading-[0.95] uppercase">
              Automations &amp; <br />
              <span className="text-primary">Custom Business</span> Tools.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              We design and deploy autonomous AI agents, workflow automation engines, and bespoke business intelligence dashboards to scale your operations without friction.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>Build Your Automation</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>

              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-muted-foreground border border-border font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Build your tool (Based on business requirement)</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CORE FEATURES SECTION (THE 4 EXACT FEATURES)
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // PLATFORM MODULES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Core Automation Capabilities
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Custom-engineered software systems tailored to your specific workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 md:gap-8">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              const isExpanded = expandedFeature === feature.title

              return (
                <div
                  key={feature.title}
                  onClick={() => setExpandedFeature(isExpanded ? null : feature.title)}
                  className={`border border-border bg-card hover:border-primary transition-colors flex flex-col cursor-pointer md:cursor-default ${
                    isExpanded 
                      ? 'col-span-2 md:col-span-1 p-6 md:p-8 justify-between' 
                      : 'col-span-1 md:col-span-1 p-4 md:p-8 aspect-square md:aspect-auto justify-center md:justify-between items-center md:items-stretch'
                  }`}
                >
                  <div className={`space-y-4 md:space-y-6 w-full ${!isExpanded ? 'flex flex-col items-center justify-center h-full md:block md:h-auto' : ''}`}>
                    <div className={`flex w-full ${isExpanded ? 'justify-between items-start md:items-center' : 'justify-center md:justify-between items-center'}`}>
                      <div className="p-3 bg-secondary border border-border text-muted-foreground inline-flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-5 md:h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 bg-secondary border border-border text-muted-foreground uppercase md:block ${isExpanded ? 'block' : 'hidden'}`}>
                        {feature.category}
                      </span>
                    </div>

                    <div className={`md:block space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
                      <h3 className="text-2xl font-bold uppercase text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {feature.desc}
                      </p>

                      <div className="pt-4 space-y-2 border-t border-border">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">
                          Key Capabilities:
                        </span>
                        {feature.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2 text-xs text-muted-foreground font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`md:block pt-6 border-t border-border mt-6 ${isExpanded ? 'block' : 'hidden'}`}>
                    <Link
                      href="/grow-with-us"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-muted-foreground hover:text-foreground"
                    >
                      <span>Deploy module</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE TOOL BUILDER CONFIGURATOR
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // INTERACTIVE BUILDER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Configure Your Automation Stack
            </h2>
          </div>

          <div className="p-8 sm:p-12 border border-border bg-card grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-primary uppercase tracking-wider block">
                  1. Select Industry Pack:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INDUSTRY_PACKS_LIST.map((pack, idx) => (
                    <button
                      key={pack.name}
                      type="button"
                      onClick={() => setSelectedPack(idx)}
                      className={`p-4 text-left border text-xs font-mono transition-colors cursor-pointer ${
                        selectedPack === idx
                          ? 'border-purple-400 bg-secondary text-foreground shadow-md shadow-purple-950/50'
                          : 'border-border bg-background/80 text-muted-foreground/70 hover:border-border'
                      }`}
                    >
                      <div className="font-bold text-sm text-foreground mb-1">{pack.name}</div>
                      <div className="text-[10px] text-primary">{pack.features.length} Workflows Included</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-primary uppercase tracking-wider block">
                  2. Select Required System Modules:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FEATURES.map((feat) => {
                    const isSelected = selectedModules.includes(feat.title)
                    return (
                      <button
                        key={feat.title}
                        type="button"
                        onClick={() => toggleModule(feat.title)}
                        className={`p-4 text-left border text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-purple-400 bg-secondary text-foreground shadow-md shadow-purple-950/50'
                            : 'border-border bg-background/80 text-muted-foreground/70 hover:border-border'
                        }`}
                      >
                        <span className="font-semibold">{feat.title}</span>
                        {isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <div className="w-4 h-4 border border-border rounded-sm" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Architecture Preview Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-background border border-purple-900/80 space-y-6 flex flex-col justify-between font-mono text-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-primary uppercase tracking-wider text-[10px]">
                    SYSTEM BLUEPRINT
                  </span>
                  <span className="text-[10px] text-muted-foreground">READY TO DEPLOY</span>
                </div>

                <div>
                  <span className="text-primary/80 uppercase text-[10px] block mb-1">Target Domain:</span>
                  <div className="text-foreground text-sm font-bold font-sans">
                    {INDUSTRY_PACKS_LIST[selectedPack].name}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-primary/80 uppercase text-[10px] block">Selected Modules:</span>
                  {selectedModules.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-purple-400" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-secondary/40 border border-border text-[11px] text-muted-foreground space-y-1">
                  <div className="text-primary uppercase text-[9px]">Included Automations:</div>
                  {INDUSTRY_PACKS_LIST[selectedPack].features.map((f) => (
                    <div key={f} className="text-muted-foreground text-[11px] font-sans">&bull; {f}</div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <Link
                  href="/grow-with-us"
                  className="w-full py-3.5 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider text-center block transition-colors font-sans shadow-lg shadow-purple-950/40"
                >
                  Build Your Automation
                </Link>

                <Link
                  href="/grow-with-us"
                  className="w-full py-3 bg-secondary hover:bg-secondary/80 text-muted-foreground border border-border font-semibold text-[11px] uppercase tracking-wider text-center block transition-colors font-sans"
                >
                  Build your tool (Based on business requirement)
                </Link>
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
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                CUSTOM ENGINEERING
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Have a unique operational bottleneck?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Our engineering team builds tailored software tools, integrations, and intelligent automation systems directly for your workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>Build Your Automation</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>

              <Link
                href="/grow-with-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary/80 text-muted-foreground border border-border font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Build your tool (Based on business requirement)</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
