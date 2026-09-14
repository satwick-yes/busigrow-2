'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sun,
  Moon,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Hammer,
  Eye
} from 'lucide-react'

const MATERIALS = [
  {
    id: 'acrylic-3d',
    name: 'Cast Acrylic 3D Channel',
    tag: 'Retail Flagship',
    depth: '35mm – 50mm',
    durability: '7 Years Outdoor',
    finish: 'CNC Laser Polished Edge',
    lighting: 'Samsung IP67 Frontlit LED',
    priceIndex: '₹420 / sq.ft',
    glowColor: 'rgba(168, 85, 247, 0.9)',
    desc: 'High-density cast acrylic with razor-sharp laser routing. Engineered for flagship NCR malls and high-street luxury storefronts.',
    styleDay: 'text-zinc-100 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] [text-shadow:0_1px_0_#e4e4e7,0_2px_0_#d4d4d8,0_3px_0_#a1a1aa] tracking-tight',
    styleNight: 'text-white font-bold [text-shadow:0_0_10px_rgba(168,85,247,0.8),0_0_20px_rgba(168,85,247,0.8),0_0_30px_rgba(168,85,247,1)] tracking-tight',
  },
  {
    id: 'brushed-titanium',
    name: 'Brushed Titanium / SS Lettering',
    tag: 'Corporate & Arch',
    depth: '25mm – 40mm',
    durability: '10+ Years Marine Grade',
    finish: '304-Grade Satin Hairline',
    lighting: 'Warm 3000K Halo Backlit',
    priceIndex: '₹680 / sq.ft',
    glowColor: 'rgba(216, 180, 254, 0.8)',
    desc: 'Zero-corrosion surgical grade stainless steel with laser-welded returns and hidden standoff mounts for corporate headquarters.',
    styleDay: 'text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide',
    styleNight: 'text-zinc-950 font-semibold [text-shadow:0_0_20px_rgba(216,180,254,1),0_0_40px_rgba(216,180,254,0.6)] drop-shadow-[0_0_15px_rgba(216,180,254,0.8)] tracking-wide',
  },
  {
    id: 'uv-polycarbonate',
    name: 'Heavy-Duty UV Polycarbonate',
    tag: 'Pylon & Highway',
    depth: '100mm Extruded Box',
    durability: '5 Years High-Wind Rated',
    finish: '1200 DPI Dual-Strike UV',
    lighting: 'High-Lumen Optical Module',
    priceIndex: '₹290 / sq.ft',
    glowColor: 'rgba(147, 51, 234, 0.85)',
    desc: 'Unbreakable polycarbonate face engineered for NCR heat, dust, and monsoons. High-visibility day and night vibrancy.',
    styleDay: 'text-purple-600 font-black tracking-tighter drop-shadow-md',
    styleNight: 'text-purple-100 font-black tracking-tighter [text-shadow:0_0_15px_rgba(147,51,234,0.9),0_0_25px_rgba(147,51,234,0.7)]',
  },
  {
    id: 'neon-flex',
    name: 'Silicone Neon Flex Studio',
    tag: 'Experiential & Cafe',
    depth: '12mm Micro Tube',
    durability: '50,000 Hours Continuous',
    finish: 'Silicone IP68 Waterproof',
    lighting: 'Vibrant Dynamic Hue',
    priceIndex: '₹340 / sq.ft',
    glowColor: 'rgba(192, 132, 252, 0.95)',
    desc: 'Ultra-bright flexible neon encased in UV-resistant silicone with acrylic backer. Modern aesthetic for hospitality & creator studios.',
    styleDay: 'text-fuchsia-400 font-medium tracking-widest [text-shadow:0_1px_1px_rgba(0,0,0,0.1)]',
    styleNight: 'text-fuchsia-100 font-medium tracking-widest [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#e879f9,0_0_40px_#e879f9,0_0_80px_#e879f9,0_0_90px_#e879f9]',
  },
]

export function InteractiveFabricationLab() {
  const [selectedMat, setSelectedMat] = useState(MATERIALS[0])
  const [isNightMode, setIsNightMode] = useState(true)

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/85 backdrop-blur-2xl p-6 sm:p-10 space-y-8 shadow-[0_0_50px_rgba(139,92,246,0.12)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-700 dark:text-purple-300 mb-2 font-light">
            <Hammer className="w-3.5 h-3.5" />
            <span>FABRICATION_MATERIAL_LAB // SIM_v2</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Interactive Signage & Material Simulator
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
            Test architectural substrates, light diffusion profiles, and nighttime lux outputs directly.
          </p>
        </div>

        {/* Day / Night Toggle */}
        <div className="flex items-center gap-1.5 bg-purple-100/50 dark:bg-purple-950/60 p-1 rounded-2xl border border-purple-200/50 dark:border-purple-800/40 self-start md:self-auto">
          <button
            onClick={() => setIsNightMode(false)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-light flex items-center gap-1.5 transition-all cursor-pointer ${
              !isNightMode
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-normal'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Daylight Ambient</span>
          </button>
          <button
            onClick={() => setIsNightMode(true)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-light flex items-center gap-1.5 transition-all cursor-pointer ${
              isNightMode
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-normal'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Night Backlit Lux</span>
          </button>
        </div>
      </div>

      {/* Grid: Material Selector Pills & Interactive Preview Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Material Options */}
        <div className="lg:col-span-5 space-y-3">
          {MATERIALS.map((mat) => {
            const isSelected = selectedMat.id === mat.id
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMat(mat)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-purple-50/80 dark:bg-purple-950/60 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.2)] text-foreground'
                    : 'bg-secondary/30 border-purple-200/40 dark:border-purple-900/30 hover:border-purple-400/60 text-muted-foreground'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-normal text-foreground">{mat.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-light">
                      {mat.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1 font-light">{mat.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-normal text-purple-700 dark:text-purple-300">
                    {mat.priceIndex}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Right: Live Interactive Architectural Visualizer Stage */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-purple-200/60 dark:border-purple-900/50 overflow-hidden relative p-6 sm:p-8 bg-card/90">
          {/* Visual Lighting Canvas */}
          <div
            className={`w-full h-60 rounded-2xl flex flex-col items-center justify-center relative transition-all duration-700 overflow-hidden border border-purple-200/40 dark:border-purple-800/40 ${
              isNightMode ? 'bg-[#080318]' : 'bg-gradient-to-br from-purple-50 via-white to-purple-100/40'
            }`}
          >
            {/* Ambient Backlight Glow simulation */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                isNightMode ? 'opacity-100' : 'opacity-25'
              }`}
              style={{
                background: `radial-gradient(circle at center, ${selectedMat.glowColor} 0%, transparent 65%)`,
                filter: 'blur(35px)',
              }}
            />

            {/* Subtle Laser Scanline effect for human-crafted tech feel */}
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-laser-scan pointer-events-none opacity-40" />

            {/* Glowing 3D Sign Mockup Text */}
            <div className="relative z-10 text-center space-y-2">
              <span
                className={`text-4xl sm:text-5xl font-sans transition-all duration-500 uppercase ${
                  isNightMode
                    ? selectedMat.styleNight
                    : selectedMat.styleDay
                }`}
              >
                BUSIGROW
              </span>
              <div
                className={`text-xs font-mono font-light tracking-widest uppercase ${
                  isNightMode ? 'text-purple-200/90' : 'text-purple-800/90'
                }`}
              >
                {selectedMat.name} &middot; {selectedMat.lighting}
              </div>
            </div>

            <div className="absolute bottom-3 right-3 text-[10px] font-mono font-light px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-white/80 border border-white/10 flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-purple-300" />
              <span>{isNightMode ? 'MODE: NIGHT LUX EMISSION' : 'MODE: DAY AMBIENT REFLECTION'}</span>
            </div>
          </div>

          {/* Detailed Substrate Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-purple-200/50 dark:border-purple-900/40 mt-6">
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono font-light text-muted-foreground block">3D Depth</span>
              <span className="text-xs font-normal text-foreground font-mono">{selectedMat.depth}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono font-light text-muted-foreground block">Outdoor Life</span>
              <span className="text-xs font-normal text-foreground font-mono">{selectedMat.durability}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono font-light text-muted-foreground block">Edge Finish</span>
              <span className="text-xs font-normal text-foreground font-mono">{selectedMat.finish}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono font-light text-muted-foreground block">Lighting Module</span>
              <span className="text-xs font-normal text-foreground font-mono">{selectedMat.lighting}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
