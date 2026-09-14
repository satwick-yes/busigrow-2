'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  Hammer,
  Shield,
  Clock,
  ArrowRight,
  Check,
  X,
  FileText,
  Sliders,
  ExternalLink,
  MessageSquare
} from 'lucide-react'

const SUBSTRATES = [
  {
    id: 'acrylic-3d',
    title: '3D Cast Acrylic & Samsung LED',
    tagline: 'High-Density PMMA Optical Grade',
    image: '/storefront.jpg',
    specs: {
      diode: 'Samsung SMD2835 IP67 (160° Optical Lens)',
      lux: '8,500 – 12,000 Lux Day/Night Calibration',
      tensile: '75 MPa Tensile Strength PMMA',
      windLoad: 'Engineered for 160 km/h Gusts',
      warranty: '5 Years Replacement Warranty',
      dispatch: '24–48 Hours Delhi NCR'
    },
    blueprint: 'CNC router cut 30mm cast acrylic face, 1.2mm SS304 return edge, silicone gasket water-tight enclosure.',
    rate: '₹460 / sq.ft'
  },
  {
    id: 'ss304-titanium',
    title: 'SS304 Titanium Marine Metal',
    tagline: 'PVD Coated Heavy Architectural Alloy',
    image: '/case-pizza-billboard.jpg',
    specs: {
      diode: 'Embedded High-Lux Backlit Halo Diode',
      lux: '6,200 Lux Ambient Halo Projection',
      tensile: '515 MPa Yield Marine Grade SS304',
      windLoad: 'Engineered for 210 km/h High-Altitude',
      warranty: '10 Years Zero-Corrosion Guarantee',
      dispatch: '48–72 Hours Delhi NCR'
    },
    blueprint: 'Fiber laser cut 1.5mm SS304 plate, TIG welded structural seams, titanium PVD electro-plated finish.',
    rate: '₹740 / sq.ft'
  },
  {
    id: 'acp-facade',
    title: 'PVDF Heavy Architectural ACP',
    tagline: '0.5mm Coil Aluminum Composite Cladding',
    image: '/fleet.jpg',
    specs: {
      diode: 'Linear Edge-Lit & Recessed Spot Modules',
      lux: 'Uniform Architectural Surface Illumination',
      tensile: 'Mineral-Filled Fire Retardant Core Class B1',
      windLoad: 'Tested to ASTM E330 Structural Deflection',
      warranty: '10 Years Kynar 500 PVDF Anti-Fade',
      dispatch: '48 Hours Delhi NCR'
    },
    blueprint: 'V-grooved CNC routed 4mm ACP panels with 0.50mm coil skin, blind-riveted to 50x50mm MS structural framework.',
    rate: '₹390 / sq.ft'
  },
  {
    id: 'neon-silicone',
    title: 'IP68 Extruded Silicone Neon',
    tagline: 'Continuous Diffusion Solid State Flexible Core',
    image: '/case-pizza-billboard.jpg',
    specs: {
      diode: '120 LED/m Epistar High-CRI 90+',
      lux: '1,400 Lumens / Meter Continuous Uniform Glow',
      tensile: 'Food-Grade UV-Stabilized Silicone Extrusion',
      windLoad: 'Flexible Direct Substrate Mechanical Mounting',
      warranty: '3 Years Uninterrupted Duty Cycle',
      dispatch: '24 Hours Delhi NCR'
    },
    blueprint: 'Dual-extrusion silicone channel with internal copper PCB trace, IP68 molded waterproof terminal caps.',
    rate: '₹360 / sq.ft'
  }
]

const TECHNICAL_COMPARISON = [
  { parameter: 'Substrate Density', acrylic: '1.19 g/cm³ Cast PMMA', steel: '8.00 g/cm³ SS304', acp: '1.45 g/cm³ Mineral Core', neon: '1.25 g/cm³ Silicone' },
  { parameter: 'LED Ingress Protection', acrylic: 'IP67 Waterproof Encapsulated', steel: 'IP67 Halo Gasketed', acp: 'IP65 Linear Integrated', neon: 'IP68 Submersible Grade' },
  { parameter: 'UV & Weather Degradation', acrylic: '<0.5% Yellowing / 10 Yrs', steel: 'Zero Corrosion / Marine Certified', acp: 'Delta E < 5 / 10 Yrs PVDF', neon: 'UV94-V0 Anti-Discoloration' },
  { parameter: 'Thermal Operating Range', acrylic: '-30°C to +85°C', steel: '-40°C to +300°C', acp: '-40°C to +90°C', neon: '-25°C to +70°C' },
  { parameter: 'Factory Turnaround SLA', acrylic: '24–48 Hours', steel: '48–72 Hours', acp: '48 Hours', neon: '24 Hours' }
]

export default function OfflinePage() {
  const [activeSubstrate, setActiveSubstrate] = useState<typeof SUBSTRATES[0] | null>(null)

  return (
    <div className="w-full min-h-screen bg-[#070310] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* =========================================================================
          1. BRUTALIST HERO: MONOCHROME WITH ULTRA-WIDE TRACKING
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300">
                PILLAR 01 // PHYSICAL FABRICATION &amp; STRUCTURAL SIGNAGE
              </span>
              <span className="text-[11px] font-mono text-purple-400">
                PLANT: NOIDA SECTOR 63 &middot; 30,000 SQ.FT
              </span>
            </div>

            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] text-white leading-[0.92]">
              Brutalist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
                Precision
              </span>{' '}
              Signage.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl font-light leading-relaxed">
              Direct factory manufacturing of 3D architectural displays, titanium marine metal channel letters, and high-dwell highway hoardings. Zero middlemen, zero color mismatch.
            </p>

            {/* Quick Action Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20need%20a%20technical%20quote%20for%20signage%20fabrication."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Blueprint Quote</span>
              </a>

              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 border border-purple-800 font-medium text-xs uppercase tracking-wider transition-colors"
              >
                <span>Schedule Plant Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MASONRY GALLERY: B&W DEFAULT TO COLOR HOVER WITH SPECS
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                // SUBSTRATE CATALOG
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Engineered Substrates
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-300/80 max-w-sm">
              Hover on physical units to engage optical color grading and inspect engineering specifications.
            </p>
          </div>

          {/* Asymmetrical 2x2 Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUBSTRATES.map((sub) => (
              <div
                key={sub.id}
                className="border border-purple-900/50 bg-[#0c0618] overflow-hidden group hover:border-purple-500 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Monochrome-to-Color Filter */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-purple-950/40">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-[10px] font-mono text-purple-300 border border-purple-900/60 uppercase">
                    {sub.rate}
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-900/80 px-3 py-1 text-[10px] font-mono text-white uppercase tracking-wider">
                    {sub.specs.dispatch}
                  </div>
                </div>

                {/* Substrate Metadata Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold uppercase text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400 mt-1 uppercase">
                      {sub.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                    {sub.blueprint}
                  </p>

                  {/* Micro Tech-Spec Blueprint Table */}
                  <div className="grid grid-cols-2 gap-3 p-4 bg-purple-950/20 border border-purple-900/40 text-[11px] font-mono text-purple-200">
                    <div>
                      <span className="text-[9px] text-purple-400 uppercase block font-semibold">DIODE ILLUMINATION</span>
                      <span className="text-white truncate block">{sub.specs.diode.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-purple-400 uppercase block font-semibold">MAX LUX CALIBRATION</span>
                      <span className="text-white truncate block">{sub.specs.lux.split(' ')[0]} LUX</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-purple-400 uppercase block font-semibold">STRUCTURAL INTEGRITY</span>
                      <span className="text-white truncate block">{sub.specs.tensile.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-purple-400 uppercase block font-semibold">FACTORY WARRANTY</span>
                      <span className="text-emerald-400 font-semibold">{sub.specs.warranty}</span>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveSubstrate(sub)}
                      className="text-xs font-mono text-purple-300 hover:text-white uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Full Technical Blueprint</span>
                    </button>

                    <a
                      href={`https://wa.me/919876543210?text=Hi%20Busigrow!%20Quote%20me%20for%20${encodeURIComponent(sub.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono px-4 py-2 bg-purple-900/60 hover:bg-purple-600 text-white uppercase tracking-wider transition-colors border border-purple-700"
                    >
                      <span>Direct Quote &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MONOSPACED TECHNICAL SPECIFICATION BLUEPRINT TABLE
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
              // LABORATORY TESTING BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Comparative Engineering Matrix
            </h2>
          </div>

          <div className="overflow-x-auto border border-purple-900/50 bg-[#0a0414]">
            <table className="w-full text-left font-mono text-xs text-zinc-300">
              <thead className="bg-[#120724] border-b border-purple-900/50 text-purple-300 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-purple-900/40">ENGINEERING PARAMETER</th>
                  <th className="p-4 sm:p-5 border-r border-purple-900/40">3D CAST ACRYLIC</th>
                  <th className="p-4 sm:p-5 border-r border-purple-900/40">SS304 TITANIUM</th>
                  <th className="p-4 sm:p-5 border-r border-purple-900/40">PVDF HEAVY ACP</th>
                  <th className="p-4 sm:p-5">IP68 SILICONE NEON</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900/30 text-[11px]">
                {TECHNICAL_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-purple-950/20 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-purple-200 border-r border-purple-900/40 uppercase">
                      {row.parameter}
                    </td>
                    <td className="p-4 sm:p-5 border-r border-purple-900/40 text-zinc-300">
                      {row.acrylic}
                    </td>
                    <td className="p-4 sm:p-5 border-r border-purple-900/40 text-purple-300">
                      {row.steel}
                    </td>
                    <td className="p-4 sm:p-5 border-r border-purple-900/40 text-zinc-300">
                      {row.acp}
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-400">
                      {row.neon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MODAL DRAWER: INTERACTIVE SUBSTRATE SPECIFICATION
         ========================================================================= */}
      <AnimatePresence>
        {activeSubstrate && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e061c] border border-purple-700 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative font-mono text-xs"
            >
              <button
                type="button"
                onClick={() => setActiveSubstrate(null)}
                className="absolute top-5 right-5 p-2 text-purple-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 border-b border-purple-900/60 pb-4">
                <span className="text-[10px] text-purple-400 uppercase tracking-widest">
                  TECHNICAL BLUEPRINT // NOIDA SEC 63
                </span>
                <h3 className="text-2xl font-bold uppercase text-white font-sans">
                  {activeSubstrate.title}
                </h3>
                <p className="text-purple-300 text-[11px]">{activeSubstrate.tagline}</p>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-wider text-purple-400">
                  Full Laboratory Specifications:
                </div>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-purple-950">
                    <span className="text-zinc-500">Diode Rating:</span>
                    <span className="text-purple-200">{activeSubstrate.specs.diode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950">
                    <span className="text-zinc-500">Lux Output:</span>
                    <span className="text-purple-200">{activeSubstrate.specs.lux}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950">
                    <span className="text-zinc-500">Tensile / Core:</span>
                    <span className="text-purple-200">{activeSubstrate.specs.tensile}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950">
                    <span className="text-zinc-500">Wind-Load Resistance:</span>
                    <span className="text-purple-200">{activeSubstrate.specs.windLoad}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-950">
                    <span className="text-zinc-500">Manufacturing SLA:</span>
                    <span className="text-emerald-400 font-semibold">{activeSubstrate.specs.dispatch}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Busigrow!%20I%20want%20to%20order%20${encodeURIComponent(activeSubstrate.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-sans text-center uppercase font-medium text-xs transition-colors"
                >
                  Order via WhatsApp Desk
                </a>
                <button
                  type="button"
                  onClick={() => setActiveSubstrate(null)}
                  className="px-5 py-3 border border-purple-800 text-purple-300 hover:bg-purple-950/60 uppercase text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  )
}
