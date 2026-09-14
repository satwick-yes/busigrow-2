'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowLeftRight, CheckCircle2, XCircle } from 'lucide-react'

export function InteractiveComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
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
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/85 backdrop-blur-2xl p-6 sm:p-10 space-y-6 shadow-[0_0_50px_rgba(139,92,246,0.12)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-700 dark:text-purple-300 mb-2 font-light">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>GROUND_TRANSFORMATION_AUDIT</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Fragmented Vendors vs. Unified Busigrow Execution
          </h3>
        </div>
        <div className="text-xs font-mono font-light text-muted-foreground">
          Drag slider horizontally to compare
        </div>
      </div>

      {/* Comparison Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-purple-200/60 dark:border-purple-800/60"
      >
        {/* RIGHT (AFTER): Busigrow Unified Stack */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0c0520] via-[#1a0b3b] to-[#0d0622] p-8 flex flex-col justify-between items-end text-right text-white">
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-mono font-light text-purple-300">24-48h NCR Delivery</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400 text-purple-200 text-xs font-mono font-normal shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-1.5">
              WITH BUSIGROW 6.0 UNIFIED STACK
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
            </span>
          </div>

          <div className="space-y-3 max-w-md">
            <h4 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug drop-shadow-md">
              3D Cast Acrylic Signage + Sub-Second Next.js Platform + Automated CRM
            </h4>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-light">
              100% Pantone color consistency, factory direct UV flatbed fabrication in Noida, single point of contact, and 3.8x higher inbound customer conversion.
            </p>
          </div>

          <div className="flex gap-4 text-[11px] font-mono font-light text-purple-300">
            <div>0 Middlemen &bull;</div>
            <div>100/100 Lighthouse &bull;</div>
            <div>Direct WhatsApp API</div>
          </div>
        </div>

        {/* LEFT (BEFORE): Fragmented 6-Vendor Chaos (Clipped by slider) */}
        <div
          className="absolute inset-0 h-full bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 border-r-2 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
        >
          <div className="w-[1000px] h-full flex flex-col justify-between p-8 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 text-xs font-mono font-normal flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" />
                THE FRAGMENTED 6-VENDOR DISCONNECT
              </span>
            </div>

            <div className="space-y-3 max-w-md">
              <h4 className="text-2xl sm:text-3xl font-light text-zinc-300 tracking-tight leading-snug">
                Mismatched Colors, Blown Opening Deadlines, Slow WP Plugins
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Juggling 5 freelance vendors, local sign printers without design taste, delayed delivery trucks, and no attribution tracking for ad spend.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono font-light text-zinc-500">
              <div>&bull; 4-6 Weeks Delay</div>
              <div>&bull; Mismatched Hex Codes</div>
              <div>&bull; Zero Accountability</div>
            </div>
          </div>
        </div>

        {/* Tactile Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-purple-400 -translate-x-1/2 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.9)] flex items-center justify-center border-2 border-white">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
