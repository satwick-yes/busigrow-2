'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { HeroCommandCenter } from '@/components/hero-command-center'
import { InteractiveFabricationLab } from '@/components/interactive-fabrication-lab'
import { LiveWorkflowPipeline } from '@/components/live-workflow-pipeline'
import { InteractiveComparisonSlider } from '@/components/interactive-comparison-slider'
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Hammer,
  Building2,
  Check,
  MapPin,
  Clock,
  ArrowUpRight,
  Layers,
  Code2,
  MessageSquare,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  XCircle,
  FileText,
  Calculator,
  Sliders,
  Award,
  Factory
} from 'lucide-react'

const TRUST_STATS = [
  { value: '30,000 sq.ft', label: 'In-House Noida Plant', sub: 'Sector 63 Manufacturing Facility' },
  { value: '500+', label: 'Commercial Installs', sub: 'Storefronts, HQs & High-Streets' },
  { value: '24–48h', label: 'Emergency NCR Dispatch', sub: 'Production & Installation SLA' },
  { value: '100%', label: 'Single-Source SLA', sub: 'Zero Vendor Finger-Pointing' },
]

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

const COMPARISON_POINTS = [
  {
    factor: 'Project Ownership',
    traditional: '3–4 disconnected vendors (fabricator, web dev, agency) blaming each other when deadlines slip.',
    busigrow: 'Single point of contact. One accountable partner owning physical signage, web code, and lead capture.',
  },
  {
    factor: 'Brand & Color Fidelity',
    traditional: 'Mismatched Pantone shades between physical storefront acrylics and online web design.',
    busigrow: 'Exact color matching. In-house color calibration across factory paint, acrylic tint, and digital Figma tokens.',
  },
  {
    factor: 'Production Turnaround',
    traditional: '4–8 weeks with middlemen markups and endless sub-contracting delays.',
    busigrow: '24–48 hours emergency dispatch in Delhi NCR directly from our Noida Sector 63 plant.',
  },
  {
    factor: 'Lead Intake Latency',
    traditional: 'Contact forms sent to generic email inboxes with 24–48 hour delayed manual follow-ups.',
    busigrow: 'Sub-3.2 second automated WhatsApp delivery with dynamic branded PDF estimate and instant CRM deal card.',
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
  // Interactive Live Estimator State
  const [signageSqFt, setSignageSqFt] = useState<number>(120)
  const [materialType, setMaterialType] = useState<'acrylic' | 'titanium' | 'acp' | 'neon'>('acrylic')
  const [includeWebPlatform, setIncludeWebPlatform] = useState<boolean>(true)
  const [includeWhatsAppCRM, setIncludeWhatsAppCRM] = useState<boolean>(true)

  const getMaterialRate = () => {
    switch (materialType) {
      case 'acrylic':
        return 450
      case 'titanium':
        return 720
      case 'acp':
        return 380
      case 'neon':
        return 350
      default:
        return 450
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
    <div className="relative w-full min-h-screen bg-white dark:bg-[#0c0716] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-purple-600 selection:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20 space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6">
        {/* =========================================================================
            1. HERO SECTION: RICH, WHITE/PURPLE/VIOLET PALETTE WITH CONCRETE PROOF
           ========================================================================= */}
        <section className="pt-4 sm:pt-8 pb-10 border-b border-purple-100 dark:border-purple-900/50 space-y-8">
          <div className="space-y-6 max-w-4xl">
            {/* Direct Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-xs font-medium text-purple-900 dark:text-purple-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
              <span>Noida Sector 63 Plant &middot; Direct Manufacturing &amp; Digital Engineering</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12]">
              Physical signage, custom web platforms, and automated leads —{' '}
              <span className="text-purple-600 dark:text-purple-400 font-normal">
                built and delivered by one team.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-purple-200/80 leading-relaxed max-w-2xl font-light">
              We eliminate the chaos of coordinating separate sign fabricators, freelance web developers, and marketing agencies. Direct factory manufacturing in Noida, sub-second web platforms, and instant WhatsApp sales pipelines with full single-source accountability.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-all shadow-md shadow-purple-500/20"
              >
                <span>grow with us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I'd%20like%20to%20grow%20with%20you%20on%20a%20commercial%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-purple-950/30 text-zinc-800 dark:text-zinc-200 border border-purple-200/60 dark:border-purple-900/40 text-sm font-medium hover:bg-purple-50/50 dark:hover:bg-purple-900/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Grounded Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-4 border-t border-purple-100 dark:border-purple-900/40">
            {TRUST_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 transition-all hover:border-purple-300 dark:hover:border-purple-800"
              >
                <div className="text-2xl sm:text-3xl font-light text-purple-950 dark:text-purple-100 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-purple-300/70 mt-0.5 font-light">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            2. INTERACTIVE COMMAND CENTER: FOUR CORE PILLARS
           ========================================================================= */}
        <section className="space-y-6">
          <HeroCommandCenter />
        </section>

        {/* =========================================================================
            3. INTERACTIVE NOIDA FABRICATION STUDIO (DAY/NIGHT LIGHTING LAB)
           ========================================================================= */}
        <section className="space-y-6">
          <InteractiveFabricationLab />
        </section>

        {/* =========================================================================
            4. LIVE LEAD AUTOMATION PIPELINE (SUB-5-SECOND SIMULATOR)
           ========================================================================= */}
        <section className="space-y-6">
          <LiveWorkflowPipeline />
        </section>

        {/* =========================================================================
            5. TACTILE BEFORE & AFTER SLIDER (MULTI-VENDOR VS BUSIGROW)
           ========================================================================= */}
        <section className="space-y-6">
          <InteractiveComparisonSlider />
        </section>

        {/* =========================================================================
            6. INTERACTIVE TURNAROUND & COST ESTIMATOR WIDGET
           ========================================================================= */}
        <section className="w-full rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-purple-200/50 dark:border-purple-900/40">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-xs font-medium text-purple-700 dark:text-purple-300 mb-2 border border-purple-200/60 dark:border-purple-800/40">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground">
                Project Cost &amp; Turnaround Calculator
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
                Configure your signage substrate, web platform, and CRM pipeline for a real-time Noida factory estimate.
              </p>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-purple-100/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800 text-xs font-mono text-purple-800 dark:text-purple-200 self-start sm:self-auto">
              Noida Direct Factory Rates
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Signage Size Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-foreground">
                    Physical Signage Area (Square Feet)
                  </label>
                  <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">
                    {signageSqFt} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={signageSqFt}
                  onChange={(e) => setSignageSqFt(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>20 sq.ft (Boutique)</span>
                  <span>250 sq.ft (High-Street)</span>
                  <span>500 sq.ft (Mall Facade)</span>
                </div>
              </div>

              {/* Material Substrate Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-medium text-foreground block">
                  Select Signage Material Substrate
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'acrylic', label: '3D Cast Acrylic', rate: '₹450/sq.ft' },
                    { id: 'titanium', label: 'SS304 Titanium', rate: '₹720/sq.ft' },
                    { id: 'acp', label: 'ACP Heavy Facade', rate: '₹380/sq.ft' },
                    { id: 'neon', label: 'Silicone Neon Flex', rate: '₹350/sq.ft' },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterialType(mat.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        materialType === mat.id
                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                          : 'bg-card/40 border-purple-200/50 dark:border-purple-900/30 text-foreground hover:border-purple-300'
                      }`}
                    >
                      <div className="text-xs font-medium">{mat.label}</div>
                      <div className={`text-[10px] mt-0.5 ${materialType === mat.id ? 'text-purple-200' : 'text-muted-foreground'}`}>
                        {mat.rate}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Digital Add-ons Checkboxes */}
              <div className="space-y-2.5 pt-2 border-t border-purple-100 dark:border-purple-900/30">
                <label className="text-xs font-medium text-foreground block">
                  Integrated Digital Platforms
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-purple-200/50 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeWebPlatform}
                      onChange={(e) => setIncludeWebPlatform(e.target.checked)}
                      className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 accent-purple-600"
                    />
                    <div>
                      <div className="text-xs font-medium text-foreground">Next.js Web Application</div>
                      <div className="text-[11px] text-muted-foreground">Sub-second headless storefront (+₹45,000)</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-purple-200/50 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeWhatsAppCRM}
                      onChange={(e) => setIncludeWhatsAppCRM(e.target.checked)}
                      className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 accent-purple-600"
                    />
                    <div>
                      <div className="text-xs font-medium text-foreground">WhatsApp Lead CRM Bot</div>
                      <div className="text-[11px] text-muted-foreground">Sub-5s instant quote pipeline (+₹25,000)</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-purple-50/60 dark:bg-purple-950/50 border border-purple-200/80 dark:border-purple-800/60 space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-medium">
                  ESTIMATED PROJECT BUDGET
                </span>
                <div className="text-3xl sm:text-4xl font-light text-foreground">
                  ₹{estimate.totalMin.toLocaleString('en-IN')} – ₹{estimate.totalMax.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-muted-foreground font-light">
                  Includes in-house manufacturing, Samsung IP67 LEDs, framing &amp; standard NCR mounting.
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-purple-200/50 dark:border-purple-900/40 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Signage Subtotal:</span>
                  <span className="font-medium text-foreground">₹{estimate.signCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Digital Engineering:</span>
                  <span className="font-medium text-foreground">
                    ₹{(includeWebPlatform ? 45000 : 0) + (includeWhatsAppCRM ? 25000 : 0)}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Production SLA:</span>
                  <span className="font-mono font-medium text-purple-700 dark:text-purple-300">{estimate.sla}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Warranty:</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Up to 7 Years Outdoor</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/grow-with-us"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-all shadow-sm shadow-purple-500/20"
                >
                  <span>Lock In Quote &amp; Schedule Plant Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SPECIFICATION MATRIX: SIGNAGE MATERIALS & STANDARDS
           ========================================================================= */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Manufacturing Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mt-1">
              Industrial Signage Substrates &amp; Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FABRICATION_SPECS.map((spec, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-card/90 border border-purple-200/50 dark:border-purple-900/30 flex flex-col justify-between space-y-4 hover:border-purple-300 dark:hover:border-purple-800 transition-all shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                    {spec.bestFor}
                  </span>
                  <h3 className="text-base font-medium text-foreground pt-1">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-100 dark:border-purple-900/30 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Lighting:</span>
                    <span className="font-medium text-foreground">{spec.lighting}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Depth:</span>
                    <span className="font-medium text-foreground">{spec.thickness}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Finish:</span>
                    <span className="font-medium text-foreground">{spec.finish}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Warranty:</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">{spec.warranty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            8. VERIFIED COMMERCIAL CASE STUDIES
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mt-1">
                Selected Commercial Deployments
              </h2>
            </div>
            <Link
              href="/busimag"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>View All BizMag Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card/90 border border-purple-200/50 dark:border-purple-900/30 flex flex-col justify-between space-y-5 hover:border-purple-300 dark:hover:border-purple-800 transition-all shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-purple-600 dark:text-purple-400">{c.location}</span>
                    <span className="text-muted-foreground text-[11px] font-mono">{c.timeline}</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {c.client}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light">
                    Scope: {c.scope}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1 font-light">
                    {c.highlight}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-purple-50/40 dark:bg-purple-950/30 rounded-xl border border-purple-200/50 dark:border-purple-900/30">
                  {c.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base sm:text-lg font-medium text-foreground">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-light mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            9. EXECUTION BLUEPRINT: 3 STAGES
           ========================================================================= */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mt-1">
              From Blueprint to Live Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30 space-y-3">
              <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">
                01. AUDIT &amp; SPECIFICATION
              </span>
              <h3 className="text-lg font-medium text-foreground">
                Site Audit &amp; Technical Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                On-site laser structural measurements in Delhi NCR, material substrate sampling, and software architecture scoping completed in under 24 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30 space-y-3">
              <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">
                02. DIRECT IN-HOUSE PRODUCTION
              </span>
              <h3 className="text-lg font-medium text-foreground">
                Factory Fabrication &amp; Development
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                Direct CNC laser routing, channel bending, and IP67 wiring in our Noida plant alongside parallel Next.js software engineering and WhatsApp API integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30 space-y-3">
              <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">
                03. DEPLOYMENT &amp; GUARANTEE
              </span>
              <h3 className="text-lg font-medium text-foreground">
                Rapid NCR Mounting &amp; Cloud Launch
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                Heavy structural mounting by our certified installation crew with municipal compliance checks, backed by up to 7-year material warranties.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. BOTTOM CTA CARD: DIRECT CONTACT & ESTIMATES ("GROW WITH US")
           ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1b083d] via-[#240d4f] to-[#12062b] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-purple-500/30 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400 text-purple-200 text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Itemized Estimates in Under 24 Hours</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
              Ready to manufacture or launch your next project?
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-light">
              Schedule a visit to our Noida Sector 63 plant or request an itemized quotation with material sample specs and delivery timelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-purple-950 font-medium text-sm hover:bg-purple-50 transition-colors shadow-md"
            >
              <span>grow with us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Busigrow!%20I'd%20like%20to%20grow%20with%20you%20on%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-medium text-sm border border-purple-400/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Production</span>
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
