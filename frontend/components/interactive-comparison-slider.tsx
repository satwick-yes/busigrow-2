'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowLeftRight, CheckCircle2, XCircle, Check, X } from 'lucide-react'

export function InteractiveComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX)
    }
  }

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-xs font-medium text-purple-700 dark:text-purple-300 mb-2 border border-purple-200/60 dark:border-purple-800/40">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Why Single-Source Execution Matters</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Multiple Fragmented Vendors vs. Busigrow
          </h3>
        </div>
        <div className="text-xs text-muted-foreground font-normal bg-purple-50/50 dark:bg-purple-950/40 px-3 py-1.5 rounded-full border border-purple-200/40 dark:border-purple-800/40 self-start sm:self-auto">
          Drag slider to compare &harr;
        </div>
      </div>

      {/* Comparison Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        className="relative w-full h-[380px] sm:h-[340px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-purple-200/60 dark:border-purple-800/60"
      >
        {/* RIGHT (AFTER): Busigrow Unified Standard */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#12072e] via-[#1a0c3b] to-[#0e0524] p-5 sm:p-8 flex flex-col justify-between items-end text-right text-white">
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-mono text-purple-300">Noida Direct Factory</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400 text-purple-200 text-xs font-medium shadow-sm flex items-center gap-1.5">
              <span>WITH BUSIGROW</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
            </span>
          </div>

          <div className="space-y-2.5 max-w-sm sm:max-w-md">
            <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug">
              Single Point of Contact. Zero Quality Loss.
            </h4>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-light">
              Your 3D signage matches your website branding with exact Pantone color codes, manufactured in our own Noida facility and deployed with automated WhatsApp lead capture.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-left w-full max-w-sm sm:max-w-md pt-3 border-t border-purple-500/20 text-xs text-purple-200">
            <div className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>24-48h Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% Color Match</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full Accountability</span>
            </div>
          </div>
        </div>

        {/* LEFT (BEFORE): Fragmented Vendors (Clipped by slider, fully responsive without fixed width) */}
        <div
          className="absolute inset-0 h-full bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 border-r-2 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
        >
          {/* Inner content matches container width using absolute full width */}
          <div className="w-full h-full min-w-[300px] flex flex-col justify-between p-5 sm:p-8 text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-zinc-800/90 border border-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>MULTIPLE VENDORS</span>
              </span>
            </div>

            <div className="space-y-2.5 max-w-sm sm:max-w-md">
              <h4 className="text-xl sm:text-2xl font-light text-zinc-200 tracking-tight leading-snug">
                Mismatched Colors & Blown Opening Deadlines
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Juggling separate sign fabricators, freelance web developers, and marketing agencies creates finger-pointing, brand inconsistency, and costly project delays.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-left w-full max-w-sm sm:max-w-md pt-3 border-t border-zinc-800 text-xs text-zinc-400">
              <div className="flex items-center gap-1">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>4-6 Wks Delay</span>
              </div>
              <div className="flex items-center gap-1">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Wrong Brand Colors</span>
              </div>
              <div className="flex items-center gap-1">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>No Ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tactile Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-purple-400 -translate-x-1/2 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)] flex items-center justify-center border-2 border-white">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
