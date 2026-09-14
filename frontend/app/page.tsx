'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const FABRICATION_SPECS = [
  {
    title: '3D Cast Acrylic Letters',
    bestFor: 'Retail Stores & Malls',
    lighting: 'Samsung IP67 Frontlit LED',
    thickness: '35mm – 50mm Depth',
    warranty: '5-Year Outdoor Warranty',
    description: 'High-density cast acrylic with CNC laser-polished edges for vibrant day & night storefront illumination.',
    finish: 'CNC Laser Polished Edge',
  },
  {
    title: 'Titanium & SS304 Metal Letters',
    bestFor: 'Corporate HQs & Tech Parks',
    lighting: 'Warm 3000K Halo Backlit',
    thickness: '25mm – 40mm Depth',
    warranty: '10-Year Marine Grade',
    description: 'Corrosion-proof 304 surgical grade stainless steel with micro-welded returns and architectural backlighting.',
    finish: '304 Satin Hairline Polish',
  },
  {
    title: 'Architectural ACP Facades',
    bestFor: 'Commercial Buildings & Showrooms',
    lighting: 'Integrated Linear Profile LED',
    thickness: '3mm / 4mm Heavy Panel',
    warranty: '7-Year Weatherproof',
    description: 'Fire-retardant aluminium composite panels with CNC V-grooving and weather-sealed structural mounting.',
    finish: 'PVDF Coated Aluminium',
  },
  {
    title: 'High-Lumen Outdoor Pylons',
    bestFor: 'Highways & Industrial Parks',
    lighting: 'High-Intensity Optical Modules',
    thickness: '100mm Extruded Frame',
    warranty: '5-Year All-Weather',
    description: 'Heavy structural steel framing engineered to withstand wind loads up to 150 km/h with 1200 DPI UV print face.',
    finish: 'Dual-Strike UV Polycarbonate',
  },
]

const CASE_STUDIES = [
  {
    client: 'QSR Franchise Expansion',
    location: 'Delhi NCR (50 Locations)',
    scope: '3D Cast Acrylic Signage, ACP Facades & Storefront Glazing',
    timeline: '6 Weeks Total Execution',
    metrics: [
      { label: 'Footfall Growth', value: '+45%' },
      { label: 'Locations Delivered', value: '50 Stores' },
      { label: 'Installation SLA', value: '100% On-Time' },
    ],
    highlight: 'Fabricated and installed identical brand signage across 50 mall and high-street locations with zero defect claims.',
  },
  {
    client: 'D2C Apparel & Lifestyle Brand',
    location: 'Gurugram & Online',
    scope: 'Sub-Second Next.js E-Commerce + WhatsApp Lead Bot',
    timeline: '3 Weeks from Design to Launch',
    metrics: [
      { label: 'Edge TTFB', value: '18ms' },
      { label: 'ROAS Lift', value: '3.8x' },
      { label: 'Lighthouse Score', value: '100/100' },
    ],
    highlight: 'Replaced a slow legacy storefront with custom Next.js architecture and automated WhatsApp checkout recovery.',
  },
  {
    client: 'Multi-Speciality Healthcare Center',
    location: 'Noida Sector 62 & South Delhi',
    scope: 'SS304 Titanium Signage + Turnkey Patient Booking Engine',
    timeline: '4 Weeks End-to-End',
    metrics: [
      { label: 'Patient Inquiries', value: '3.2x' },
      { label: 'WhatsApp Response', value: '1.8s' },
      { label: 'Outdoor Durability', value: '10-Yr Marine' },
    ],
    highlight: 'Engineered hospital-grade backlit titanium signage paired with an automated WhatsApp doctor appointment pipeline.',
  },
]

export default function HomePage() {
  const [signageSqFt, setSignageSqFt] = useState<number>(120)
  const [materialType, setMaterialType] = useState<'acrylic' | 'titanium' | 'acp' | 'neon'>('acrylic')
  const [includeWebPlatform, setIncludeWebPlatform] = useState<boolean>(true)
  const [includeWhatsAppCRM, setIncludeWhatsAppCRM] = useState<boolean>(true)

  const getMaterialRate = () => {
    switch (materialType) {
      case 'acrylic': return 450
      case 'titanium': return 720
      case 'acp': return 380
      case 'neon': return 350
      default: return 450
    }
  }

  const calculateEstimate = () => {
    const signCost = signageSqFt * getMaterialRate()
    const webCost = includeWebPlatform ? 45000 : 0
    const crmCost = includeWhatsAppCRM ? 25000 : 0
    const totalMin = Math.round((signCost + webCost + crmCost) * 0.95)
    const totalMax = Math.round((signCost + webCost + crmCost) * 1.15)
    const sla = signageSqFt > 300 ? '48-72 Hours' : '24-48 Hours'
    return { signCost, totalMin, totalMax, sla }
  }

  const estimate = calculateEstimate()

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <Navbar />

      <main className="pt-32 pb-24 space-y-32 max-w-7xl mx-auto px-4 sm:px-6">
        {/* HERO SECTION */}
        <section className="pt-8 pb-16 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-4xl space-y-8">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              [Integrated Growth Infrastructure / Est. 2024]
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-black dark:text-white leading-[1.1]">
              Physical signage, custom web platforms, and automated leads — built and delivered by one team.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
              Bridging physical architectural presence with custom web platforms and automated customer acquisition pipelines under a unified standard. No middlemen. No disjointed branding.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-sm text-sm"
              >
                Start a Brief
              </Link>
              <Link
                href="/busimag"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm text-sm"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ESTIMATOR SECTION */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h2 className="text-3xl font-medium tracking-tight">Cost &amp; Turnaround Estimator</h2>
              <p className="text-zinc-500 mt-2">Real-time estimations based on Noida manufacturing rates.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium">Signage Area (Sq.Ft)</label>
                  <span className="text-sm font-mono">{signageSqFt}</span>
                </div>
                <input
                  type="range" min="20" max="500" step="10"
                  value={signageSqFt}
                  onChange={(e) => setSignageSqFt(Number(e.target.value))}
                  className="w-full accent-black dark:accent-white"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">Material Substrate</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'acrylic', label: '3D Cast Acrylic' },
                    { id: 'titanium', label: 'SS304 Titanium' },
                    { id: 'acp', label: 'ACP Heavy Facade' },
                    { id: 'neon', label: 'Silicone Neon Flex' },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterialType(mat.id as any)}
                      className={`p-4 text-left transition-colors border ${
                        materialType === mat.id
                          ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                          : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                      }`}
                    >
                      <div className="text-sm font-medium">{mat.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">Digital Infrastructure</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeWebPlatform}
                      onChange={(e) => setIncludeWebPlatform(e.target.checked)}
                      className="w-4 h-4 accent-black dark:accent-white"
                    />
                    <span className="text-sm">Next.js Web Application</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeWhatsAppCRM}
                      onChange={(e) => setIncludeWhatsAppCRM(e.target.checked)}
                      className="w-4 h-4 accent-black dark:accent-white"
                    />
                    <span className="text-sm">WhatsApp Lead CRM Bot</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 sm:p-12 h-fit border border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Estimated Investment</span>
              <div className="text-4xl sm:text-5xl font-light tracking-tight mt-4 mb-8">
                ₹{estimate.totalMin.toLocaleString('en-IN')} – ₹{estimate.totalMax.toLocaleString('en-IN')}
              </div>
              
              <div className="space-y-4 text-sm border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Signage Allocation:</span>
                  <span className="font-mono">₹{estimate.signCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Digital Infrastructure:</span>
                  <span className="font-mono">₹{(includeWebPlatform ? 45000 : 0) + (includeWhatsAppCRM ? 25000 : 0)}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-zinc-500">Production SLA:</span>
                  <span className="font-medium">{estimate.sla}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANUFACTURING STANDARDS */}
        <section className="space-y-12">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h2 className="text-3xl font-medium tracking-tight">Manufacturing Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {FABRICATION_SPECS.map((spec, i) => (
              <div key={i} className="space-y-4">
                <div className="text-sm font-mono text-zinc-400">0{i + 1}</div>
                <h3 className="text-lg font-medium">{spec.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {spec.description}
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 space-y-2 text-xs text-zinc-500">
                  <div className="flex justify-between"><span>Lighting</span><span className="text-black dark:text-white truncate ml-2">{spec.lighting}</span></div>
                  <div className="flex justify-between"><span>Finish</span><span className="text-black dark:text-white truncate ml-2">{spec.finish}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMERCIAL DEPLOYMENTS */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h2 className="text-3xl font-medium tracking-tight">Commercial Deployments</h2>
            <Link href="/busimag" className="text-sm font-medium hover:underline inline-flex items-center gap-1">
              View Case Studies <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-zinc-500">{c.location}</div>
                  <h3 className="text-xl font-medium">{c.client}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.scope}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-4">
                  {c.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-medium">{m.value}</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wide mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight">Ready to deploy?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            Schedule a visit to our Noida Sector 63 plant or request an itemized quotation for your next expansion.
          </p>
          <Link
            href="/grow-with-us"
            className="inline-flex items-center justify-center px-10 py-5 bg-black text-white dark:bg-white dark:text-black font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-sm text-base mt-4"
          >
            Start a Brief
          </Link>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

