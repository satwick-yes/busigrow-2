'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Moon,
  Sparkles,
  Hammer,
  Eye,
  Check,
  Building2,
  ShieldCheck
} from 'lucide-react'

const MATERIALS = [
  {
    id: 'acrylic-3d',
    name: 'Cast Acrylic 3D Letters',
    tag: 'Retail Flagship Malls',
    depth: '35mm – 50mm',
    durability: '7 Years Outdoor Life',
    finish: 'CNC Laser Polished Edge',
    lighting: 'Samsung IP67 Frontlit LED',
    priceIndex: 'From ₹420 / sq.ft',
    glowColor: 'rgba(168, 85, 247, 0.9)',
    desc: 'High-density cast acrylic with laser-cut edges. Ideal for prominent mall storefronts, restaurants, and retail chains.',
    styleDay: 'text-zinc-100 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] [text-shadow:0_1px_0_#e4e4e7,0_2px_0_#d4d4d8,0_3px_0_#a1a1aa] tracking-tight',
    styleNight: 'text-white font-bold [text-shadow:0_0_10px_rgba(168,85,247,0.8),0_0_20px_rgba(168,85,247,0.8),0_0_30px_rgba(168,85,247,1)] tracking-tight',
  },
  {
    id: 'brushed-titanium',
    name: 'Titanium & SS304 Metal',
    tag: 'Corporate & Tech Parks',
    depth: '25mm – 40mm',
    durability: '10+ Years Marine Grade',
    finish: '304 Satin Hairline Polish',
    lighting: 'Warm 3000K Halo Backlit',
    priceIndex: 'From ₹680 / sq.ft',
    glowColor: 'rgba(216, 180, 254, 0.8)',
    desc: 'Corrosion-proof surgical grade stainless steel with laser-welded returns and warm halo backlighting for enterprise buildings.',
    styleDay: 'text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide',
    styleNight: 'text-zinc-950 font-semibold [text-shadow:0_0_20px_rgba(216,180,254,1),0_0_40px_rgba(216,180,254,0.6)] drop-shadow-[0_0_15px_rgba(216,180,254,0.8)] tracking-wide',
  },
  {
    id: 'uv-polycarbonate',
    name: 'Heavy-Duty UV Polycarbonate',
    tag: 'Highway & Pylons',
    depth: '100mm Extruded Box',
    durability: '5 Years Weatherproof',
    finish: '1200 DPI Dual-Strike UV',
    lighting: 'High-Lumen Optical Module',
    priceIndex: 'From ₹290 / sq.ft',
    glowColor: 'rgba(147, 51, 234, 0.85)',
    desc: 'Impact-resistant polycarbonate face built for NCR heat, dust, and rain with vibrant day & night diffusion.',
    styleDay: 'text-purple-600 font-black tracking-tighter drop-shadow-md',
    styleNight: 'text-purple-100 font-black tracking-tighter [text-shadow:0_0_15px_rgba(147,51,234,0.9),0_0_25px_rgba(147,51,234,0.7)]',
  },
  {
    id: 'neon-flex',
    name: 'Custom Silicone Neon Flex',
    tag: 'Cafes & Experiential',
    depth: '12mm Micro Tube',
    durability: '50,000 Hours Continuous',
    finish: 'IP68 Waterproof Silicone',
    lighting: 'Vibrant Dynamic Hue',
    priceIndex: 'From ₹340 / sq.ft',
    glowColor: 'rgba(192, 132, 252, 0.95)',
    desc: 'Flexible neon encased in UV-resistant silicone with acrylic backer for modern indoor hospitality and creative studios.',
    styleDay: 'text-fuchsia-400 font-medium tracking-widest [text-shadow:0_1px_1px_rgba(0,0,0,0.1)]',
    styleNight: 'text-fuchsia-100 font-medium tracking-widest [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#e879f9,0_0_40px_#e879f9,0_0_80px_#e879f9]',
  },
]

export function InteractiveFabricationLab() {
  const [selectedMat, setSelectedMat] = useState(MATERIALS[0])
  const [isNightMode, setIsNightMode] = useState(true)

  return (
    <div className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-purple-200/50 dark:border-purple-900/40">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-xs font-medium text-purple-700 dark:text-purple-300 mb-2 border border-purple-200/60 dark:border-purple-800/40">
            <Hammer className="w-3.5 h-3.5" />
            <span>Noida Factory Material Studio</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
            Signage Materials &amp; Lighting Preview
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
            Toggle between Daylight and Nighttime to preview illumination and material finishes.
          </p>
        </div>

        {/* Day / Night Toggle */}
        <div className="flex items-center gap-1.5 bg-purple-100/60 dark:bg-purple-950/60 p-1 rounded-2xl border border-purple-200/60 dark:border-purple-800/40 self-start sm:self-auto">
          <button
            onClick={() => setIsNightMode(false)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              !isNightMode
                ? 'bg-purple-600 text-white shadow-sm font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Daylight View</span>
          </button>
          <button
            onClick={() => setIsNightMode(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              isNightMode
                ? 'bg-purple-600 text-white shadow-sm font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Night Backlit View</span>
          </button>
        </div>
      </div>

      {/* Grid: Material Selector & Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Material Options */}
        <div className="lg:col-span-5 space-y-2.5">
          {MATERIALS.map((mat) => {
            const isSelected = selectedMat.id === mat.id
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMat(mat)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-purple-50/90 dark:bg-purple-950/60 border-purple-500 shadow-sm text-foreground'
                    : 'bg-card/40 border-purple-200/40 dark:border-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 text-muted-foreground'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{mat.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                      {mat.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1 font-light">{mat.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                    {mat.priceIndex}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Right: Visual Showcase Stage */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-purple-200/60 dark:border-purple-900/50 overflow-hidden relative p-5 sm:p-7 bg-card/80">
          {/* Visual Canvas */}
          <div
            className={`w-full h-52 sm:h-56 rounded-2xl flex flex-col items-center justify-center relative transition-all duration-500 overflow-hidden border border-purple-200/40 dark:border-purple-800/40 ${
              isNightMode ? 'bg-[#0b041c]' : 'bg-gradient-to-br from-purple-50/80 via-white to-purple-100/50'
            }`}
          >
            {/* Backlight Glow simulation */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                isNightMode ? 'opacity-100' : 'opacity-20'
              }`}
              style={{
                background: `radial-gradient(circle at center, ${selectedMat.glowColor} 0%, transparent 65%)`,
                filter: 'blur(30px)',
              }}
            />

            {/* Rendered Signage Text */}
            <div className="relative z-10 text-center space-y-2">
              <span
                className={`text-3xl sm:text-5xl font-sans transition-all duration-300 uppercase ${
                  isNightMode
                    ? selectedMat.styleNight
                    : selectedMat.styleDay
                }`}
              >
                BUSIGROW
              </span>
              <div
                className={`text-xs font-mono font-medium tracking-wider uppercase ${
                  isNightMode ? 'text-purple-200/90' : 'text-purple-800/90'
                }`}
              >
                {selectedMat.name} &bull; {selectedMat.lighting}
              </div>
            </div>

            <div className="absolute bottom-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded bg-black/50 backdrop-blur-md text-white/90 border border-white/10 flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-purple-300" />
              <span>{isNightMode ? 'Night Backlit' : 'Daylight Reflection'}</span>
            </div>
          </div>

          {/* Substrate Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-purple-200/50 dark:border-purple-900/40 mt-5">
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono text-muted-foreground block">3D Depth</span>
              <span className="text-xs font-medium text-foreground">{selectedMat.depth}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono text-muted-foreground block">Outdoor Life</span>
              <span className="text-xs font-medium text-foreground">{selectedMat.durability}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono text-muted-foreground block">Edge Finish</span>
              <span className="text-xs font-medium text-foreground">{selectedMat.finish}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <span className="text-[10px] font-mono text-muted-foreground block">LED Module</span>
              <span className="text-xs font-medium text-foreground">{selectedMat.lighting}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
