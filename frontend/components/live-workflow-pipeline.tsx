'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Webhook,
  Bot,
  FileCheck2,
  Send,
  Database,
  CheckCircle,
  Play,
  Sparkles,
  ArrowRight,
  Activity,
  Layers
} from 'lucide-react'

const PIPELINE_NODES = [
  {
    id: 1,
    name: '01 // Inbound Webhook',
    desc: 'Meta Ad Form / Google Ads Click received',
    sub: 'Payload validated & sanitized (< 20ms)',
    icon: Webhook,
    badge: 'TRIGGER',
  },
  {
    id: 2,
    name: '02 // AI Qualification Engine',
    desc: 'Claude AI analyzes budget & requirements',
    sub: 'Scored 96/100 · High-intent commercial tag',
    icon: Bot,
    badge: 'INTELLIGENCE',
  },
  {
    id: 3,
    name: '03 // Dynamic PDF Estimator',
    desc: 'Architectural rate-card matrix applied',
    sub: 'Itemized branded PDF quote generated',
    icon: FileCheck2,
    badge: 'SYNTHESIS',
  },
  {
    id: 4,
    name: '04 // WhatsApp Cloud Delivery',
    desc: 'Direct dispatch to prospect WhatsApp',
    sub: 'Delivered in 2.8s · Read receipt tracked',
    icon: Send,
    badge: 'DISPATCH',
  },
  {
    id: 5,
    name: '05 // CRM & Rep Sync',
    desc: 'Instant deal card on HubSpot / Airtable',
    sub: 'Senior director assigned for consultation',
    icon: Database,
    badge: 'CLOSING',
  },
]

export function LiveWorkflowPipeline() {
  const [activeStep, setActiveStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)

  const runSimulation = () => {
    setIsPlaying(true)
    setActiveStep(1)
    let step = 1
    const interval = setInterval(() => {
      step += 1
      if (step > 5) {
        clearInterval(interval)
        setIsPlaying(false)
        setActiveStep(5)
      } else {
        setActiveStep(step)
      }
    }, 700)
  }

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/85 backdrop-blur-2xl p-6 sm:p-10 space-y-8 shadow-[0_0_50px_rgba(139,92,246,0.12)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-700 dark:text-purple-300 mb-2 font-light">
            <Activity className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            <span>DETERMINISTIC_AUTOMATION_GRAPH // REALTIME</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Sub-5-Second Lead-to-Quote Automation Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
            Visualizing our proprietary WhatsApp intake, AI budget qualification, and automated CRM deal dispatch engine.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isPlaying}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-normal shadow-[0_0_18px_rgba(139,92,246,0.3)] transition-all cursor-pointer disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>{isPlaying ? 'SIMULATING EXECUTION...' : 'Simulate Event Flow'}</span>
        </button>
      </div>

      {/* Nodes Timeline Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {PIPELINE_NODES.map((node) => {
          const Icon = node.icon
          const isActive = activeStep === node.id
          const isPassed = activeStep > node.id

          return (
            <motion.div
              key={node.id}
              onClick={() => setActiveStep(node.id)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                isActive
                  ? 'bg-purple-50/80 dark:bg-purple-950/70 border-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.25)] ring-1 ring-purple-500/30'
                  : isPassed
                  ? 'bg-purple-500/5 dark:bg-purple-950/30 border-purple-300/60 dark:border-purple-800/50 text-muted-foreground'
                  : 'bg-secondary/30 border-purple-200/40 dark:border-purple-900/30 text-muted-foreground opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive || isPassed
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-light ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {node.badge}
                  </span>
                </div>

                <div className="text-xs font-normal text-foreground mb-1">{node.name}</div>
                <p className="text-[11px] text-muted-foreground leading-snug font-light">{node.desc}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-purple-200/40 dark:border-purple-900/40 text-[10px] font-mono font-light text-purple-700/90 dark:text-purple-300/90">
                {node.sub}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Dynamic Detail Console */}
      <div className="p-5 rounded-2xl bg-purple-950/15 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/60 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-foreground font-normal flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span>ACTIVE_NODE: {PIPELINE_NODES[activeStep - 1].name}</span>
          </div>
          <p className="text-muted-foreground text-[11px] font-light">
            {PIPELINE_NODES[activeStep - 1].desc} &middot; {PIPELINE_NODES[activeStep - 1].sub}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-xs text-purple-700 dark:text-purple-300 font-normal">
          <span>PIPELINE_LATENCY: 2.8s SLA</span>
        </div>
      </div>
    </div>
  )
}
