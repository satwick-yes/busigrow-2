'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Webhook,
  Bot,
  FileCheck2,
  Send,
  Database,
  CheckCircle2,
  Play,
  Sparkles,
  ArrowRight,
  Activity,
  Check
} from 'lucide-react'

const PIPELINE_NODES = [
  {
    id: 1,
    step: 'Step 1',
    name: 'Inbound Inquiry',
    desc: 'Customer submits form on Google, Meta Ad, or Website',
    detail: 'Lead payload captured instantly with zero data loss',
    icon: Webhook,
    badge: 'Intake',
  },
  {
    id: 2,
    step: 'Step 2',
    name: 'AI Lead Qualification',
    desc: 'Analyzes intent, budget, and requirements',
    detail: 'Categorizes high-intent commercial accounts automatically',
    icon: Bot,
    badge: 'AI Analysis',
  },
  {
    id: 3,
    step: 'Step 3',
    name: 'Dynamic PDF Proposal',
    desc: 'Applies real-time factory rate-card & material specs',
    detail: 'Generates branded, itemized PDF estimate in < 2 seconds',
    icon: FileCheck2,
    badge: 'Quotation',
  },
  {
    id: 4,
    step: 'Step 4',
    name: 'Instant WhatsApp Delivery',
    desc: 'Sends quote directly to customer WhatsApp',
    detail: 'Delivered in under 3.2s with instant download link',
    icon: Send,
    badge: 'Dispatch',
  },
  {
    id: 5,
    step: 'Step 5',
    name: 'CRM Deal Creation',
    desc: 'Syncs lead to HubSpot, Airtable, or Zoho CRM',
    detail: 'Assigns senior account manager for immediate follow-up',
    icon: Database,
    badge: 'Closing',
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
    }, 800)
  }

  const currentNode = PIPELINE_NODES.find(n => n.id === activeStep) || PIPELINE_NODES[0]

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-xs font-medium text-purple-700 dark:text-purple-300 mb-2 border border-purple-200/60 dark:border-purple-800/40">
            <Activity className="w-3.5 h-3.5 text-purple-600" />
            <span>Automated Sales Pipeline</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Sub-5-Second Lead-to-Quote Automation
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
            How we automate your inbound leads from ad click to verified WhatsApp PDF quotation.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isPlaying}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium shadow-sm transition-all cursor-pointer disabled:opacity-50 self-start sm:self-auto"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{isPlaying ? 'Running Pipeline...' : 'Test Live Flow'}</span>
        </button>
      </div>

      {/* 5 Step Indicator */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {PIPELINE_NODES.map((node) => {
          const isActive = activeStep === node.id
          const isCompleted = activeStep > node.id
          return (
            <button
              key={node.id}
              onClick={() => setActiveStep(node.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-purple-50 dark:bg-purple-950/70 border-purple-500 shadow-sm'
                  : isCompleted
                  ? 'bg-purple-50/40 dark:bg-purple-950/30 border-purple-300/40 dark:border-purple-800/30'
                  : 'bg-card/40 border-purple-200/30 dark:border-purple-900/20 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-purple-700 dark:text-purple-300 font-medium">
                  {node.step}
                </span>
                {isCompleted ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                    {node.badge}
                  </span>
                )}
              </div>
              <div className="text-xs font-medium text-foreground line-clamp-1">{node.name}</div>
            </button>
          )
        })}
      </div>

      {/* Active Step Showcase */}
      <div className="p-5 sm:p-7 rounded-2xl bg-purple-50/30 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">
              Active Stage: {currentNode.name}
            </span>
          </div>
          <h4 className="text-lg sm:text-xl font-normal text-foreground">
            {currentNode.desc}
          </h4>
          <p className="text-xs text-muted-foreground font-light">
            {currentNode.detail}
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="px-4 py-2 rounded-xl bg-purple-100/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800 text-xs font-mono text-purple-800 dark:text-purple-200">
            Latency SLA: &lt; 3.2s
          </div>
        </div>
      </div>
    </div>
  )
}
