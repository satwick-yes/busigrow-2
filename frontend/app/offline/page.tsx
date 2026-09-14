'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import {
  Printer,
  PenTool,
  Hammer,
  Factory,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Star,
  ExternalLink,
  X,
  FileText,
  Zap,
  Building2,
  Clock,
  ArrowUpRight
} from "lucide-react"

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.484-8.413z"/>
    </svg>
  )
}

const WHATSAPP_NUMBER = "919876543210"

function getWhatsAppUrl(serviceTitle?: string) {
  const message = serviceTitle
    ? `Hello Busigrow, I would like to get a quote for: ${serviceTitle}.`
    : "Hello Busigrow, I would like to get a quote for offline marketing and fabrication."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const SERVICE_CARDS = [
  {
    id: "printing",
    icon: Printer,
    title: "Large-Format Printing",
    tagline: "Industrial UV & Solvent Production",
    highlight: "48h NCR Dispatch",
    desc: "UV flatbed & heavy solvent printing for highway hoardings, retail backlits, and cast vinyl banners with fade-resistant inks.",
    breakdown: {
      deliverables: [
        "Large-format UV flatbed & solvent wide printing",
        "Fade-resistant UV cured inks for multi-year weather durability",
        "Seamless panoramic banners up to 50ft+ width",
        "Precision bleed cutting & industrial hem finishing"
      ],
      specs: "UV Flatbed, Heavy Solvent, 3M Cast Vinyl",
      turnaround: "24–48 hours across Delhi NCR",
      bestFor: "Highway hoardings, retail backlits, and long-exposure outdoor media"
    }
  },
  {
    id: "design",
    icon: PenTool,
    title: "Structural & 3D Signage",
    tagline: "Spatial & 3D Structural Engineering",
    highlight: "3D CAD Included",
    desc: "3D architectural displays, channel letters, and high-lux illuminated signage engineered for maximum road and footfall visibility.",
    breakdown: {
      deliverables: [
        "3D CAD architectural structural blueprints",
        "Photometric lux & daylight visibility studies",
        "Brand color adherence across physical substrates",
        "Certified structural wind-load engineering"
      ],
      specs: "AutoCAD 3D, Photometric Lux Sims, Vector Profiling",
      turnaround: "24–48 hours concept to blueprint",
      bestFor: "Retail storefronts, illuminated 3D channel letters, and high-altitude signage"
    }
  },
  {
    id: "installation",
    icon: Hammer,
    title: "Overnight Installation",
    tagline: "Certified On-Ground Night Crews",
    highlight: "Zero Downtime",
    desc: "In-house rigging crews in Delhi, Noida, and Gurugram. High-altitude crane rigging with zero retail or business operational disruption.",
    breakdown: {
      deliverables: [
        "Overnight rigging operations (11 PM – 5 AM)",
        "Zero business or retail operational disruption",
        "Certified structural safety & civil anchoring",
        "Municipal permit & compliance handling"
      ],
      specs: "Hydraulic Cranes, Certified Civil Rigging Crews",
      turnaround: "Overnight execution (11 PM - 5 AM)",
      bestFor: "High-altitude unipoles, shopping mall facades, and corporate headquarters"
    }
  },
  {
    id: "oem-sourcing",
    icon: Factory,
    title: "Direct OEM Sourcing",
    tagline: "Direct Mill & Manufacturer Procurement",
    highlight: "Zero Broker Cut",
    desc: "Direct factory pricing on 3M vinyl, extruded aluminium, heavy steel trusses, and Samsung LED modules with zero broker markups.",
    breakdown: {
      deliverables: [
        "Direct factory procurement without broker cut",
        "Strict batch tensile and weather quality inspection",
        "Custom metal, acrylic & composite fabrications",
        "Guaranteed manufacturer material warranties"
      ],
      specs: "Direct OEM Mills, 3M, Avery Dennison, Samsung LEDs",
      turnaround: "Immediate batch dispatch",
      bestFor: "Brands wanting to eliminate broker markups and secure tier-1 materials"
    }
  },
  {
    id: "brand-placement",
    icon: MapPin,
    title: "Corridor Brand Placement",
    tagline: "High-Traffic Strategic Corridors",
    highlight: "Prime NCR Inventory",
    desc: "Prime arterial highway unipoles, Cyber City flyovers, Noida Expressways, and premium high-dwell mall atrium slots.",
    breakdown: {
      deliverables: [
        "Traffic density, dwell time & vehicular speed mapping",
        "Prime arterial highway unipoles & toll plazas",
        "Metro station transit & high-traffic mall atrium slots",
        "Campaign duration flexibility: 15 days to 12 months"
      ],
      specs: "High-Dwell Corridors, Verified Footfall Audits",
      turnaround: "Active inventory ready for immediate booking",
      bestFor: "Brands seeking local domination across Delhi, Noida, or Gurugram"
    }
  },
  {
    id: "concept-marketing",
    icon: Sparkles,
    title: "Concept & Transit Media",
    tagline: "Experiential & Ambient Disruptions",
    highlight: "High Recall",
    desc: "Branded auto-rickshaw fleets, interactive physical installations, pop-up container stores, and street-level activations.",
    breakdown: {
      deliverables: [
        "Full-wrap transit fleets (Autos, Cabs, Delivery Vans)",
        "Experiential 3D pop-up kiosks and interactive zones",
        "Motion lighting & physical sensor triggers",
        "Street-level guerrilla physical brand activations"
      ],
      specs: "Transit Media, Pop-Up Kiosks, Guerrilla Setups",
      turnaround: "3 to 5 days campaign deployment",
      bestFor: "Product launches, disruptive viral marketing, and hyper-local brand buzzing"
    }
  }
]

const PROCESS_STEPS = [
  {
    step: "01",
    role: "Blueprint & CAD",
    title: "Sightline Simulation & CAD Blueprint",
    proof: "Spatial 3D renders tested against pedestrian angles, vehicle speeds, and daylight/nighttime illumination before material commitment.",
    photo: "/case-pizza-billboard.jpg",
    specs: ["Photometric Lux Calculation", "3D Architectural Render", "Client Sign-off Proof"]
  },
  {
    step: "02",
    role: "OEM Sourcing",
    title: "Direct Factory Material Precision",
    proof: "Heavy-grade aluminum extrusion, industrial UV cured inks, and cast vinyl pulled straight from OEM production lines to eliminate delays and markups.",
    photo: "/storefront.jpg",
    specs: ["Zero Broker Markups", "Tensile & Weather Resistance", "Pre-Fabrication QC Check"]
  },
  {
    step: "03",
    role: "Night Rigging",
    title: "Overnight On-Ground Execution",
    proof: "Our certified night rigging crews operate between 11 PM and 5 AM across NCR, completing electrical hookups and structural mounts with zero retail downtime.",
    photo: "/fleet.jpg",
    specs: ["24-48hr Turnaround", "Geo-Tagged Photo Reports", "Zero Operational Disruption"]
  }
]

const COVERAGE_CITIES = [
  {
    city: "Delhi NCR",
    sub: "Central, South & West Hubs",
    stats: "14 Active Rigging Crews",
    hotspots: "Connaught Place · Ring Road · South Ext · Aerocity",
    badge: "24h Response"
  },
  {
    city: "Noida",
    sub: "Sector 18 & Expressway Corridors",
    stats: "8 Dedicated Fabrication Teams",
    hotspots: "Sector 18 Market · Noida Expressway · Sector 62",
    badge: "Same-Day Site Visit"
  },
  {
    city: "Gurugram",
    sub: "Cyber City & Golf Course Corridor",
    stats: "10 Structural High-Altitude Crews",
    hotspots: "Cyber Hub · Golf Course Ext · MG Road · Sohna Rd",
    badge: "Night Crews Ready"
  }
]

const REVIEWS = [
  {
    quote: "Busigrow fabricated and installed 18 high-impact hoardings across Gurugram and Delhi within 48 hours. Zero retail downtime, and the structural sign-off was delivered before opening hours.",
    author: "Vikram Malhotra",
    designation: "VP of Retail Expansion",
    company: "National QSR & Food Chain",
    rating: 5
  },
  {
    quote: "Direct OEM sourcing cut our outdoor media budget by 32% while giving us superior weather-resistant UV vinyl that still looks freshly printed after two brutal Delhi monsoons.",
    author: "Ananya Sen",
    designation: "Head of Brand Marketing",
    company: "D2C Lifestyle & Apparel",
    rating: 5
  },
  {
    quote: "We wrapped 150 logistics fleet vehicles across NCR in 4 nights. Geo-tagged completion photos delivered to our WhatsApp every morning at 6 AM. The execution discipline is unmatched.",
    author: "Rohit Singhania",
    designation: "Director of Operations",
    company: "Express Logistics Tech",
    rating: 5
  }
]

export default function OfflinePage() {
  const [activeProcessTab, setActiveProcessTab] = useState(0)
  const [selectedBreakdownService, setSelectedBreakdownService] = useState<typeof SERVICE_CARDS[0] | null>(null)

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/3 w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <main className="pt-28 pb-20 space-y-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 pb-12 border-b border-purple-200/50 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/60 border border-purple-300/60 dark:border-purple-800/60 text-xs font-mono text-purple-800 dark:text-purple-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Pillar 02: Physical Fabrication & Signage
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Make your physical brand <br className="hidden sm:inline" />
            <span className="text-gradient-purple">impossible to miss.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Large-format hoardings, 3D retail facades, and high-velocity fleet branding. We design, fabricate, and install with 24–48hr turnaround in Delhi NCR.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Get Instant Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border border-purple-200/80 dark:border-purple-800/60 text-sm font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
            >
              <span>Submit Specification</span>
              <ArrowUpRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-200/50 dark:border-purple-900/40">
            <div className="p-4 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">24–48h</div>
              <div className="text-xs text-muted-foreground font-mono mt-1 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-purple-500" /> NCR Turnaround SLA
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">Direct OEM</div>
              <div className="text-xs text-muted-foreground font-mono mt-1 flex items-center gap-1.5">
                <Factory className="w-3 h-3 text-purple-500" /> Zero Broker Markups
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">100% In-House</div>
              <div className="text-xs text-muted-foreground font-mono mt-1 flex items-center gap-1.5">
                <Hammer className="w-3 h-3 text-purple-500" /> Night Rigging Crews
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/40 dark:border-purple-900/30">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">500+</div>
              <div className="text-xs text-muted-foreground font-mono mt-1 flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-purple-500" /> Live NCR Rollouts
              </div>
            </div>
          </div>
        </motion.section>

        {/* 6 SERVICE CARDS */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
                Fabrication Capabilities
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
                Engineered for maximum physical presence
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-950/50 border border-purple-300/40 dark:border-purple-800/40">
              Every unit manufactured in-house
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {SERVICE_CARDS.map((card, index) => {
              const Icon = card.icon
              const quoteUrl = getWhatsAppUrl(card.title)

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    // On mobile, the whole card is clickable to show the modal
                    if (window.innerWidth < 768) {
                      setSelectedBreakdownService(card)
                    }
                  }}
                  className="p-4 md:p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-center md:justify-between items-center md:items-stretch hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 group cursor-pointer md:cursor-default aspect-square md:aspect-auto"
                >
                  {/* Mobile View: Only Icon */}
                  <div className="md:hidden flex items-center justify-center w-full h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Desktop View: Full Card */}
                  <div className="hidden md:block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-300/50 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/60 border border-purple-300/40 dark:border-purple-800/40 text-purple-800 dark:text-purple-300 font-medium">
                        {card.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-foreground mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-700/80 dark:text-purple-400/80 mb-3">
                      {card.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="hidden md:flex pt-4 border-t border-purple-200/40 dark:border-purple-900/40 items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedBreakdownService(card)}
                      className="text-xs font-semibold text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Specifications</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={quoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 hover:bg-purple-600 hover:text-white text-purple-800 dark:text-purple-200 border border-purple-300/50 dark:border-purple-800/50 transition-all duration-300 inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                      <span>Quote</span>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* PROCESS WITH VISUAL PROOF */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 pt-4"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
              Execution Protocol
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              From CAD blueprint to overnight installation
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md space-y-6 shadow-sm">
            {/* Animated Tab Switcher */}
            <div className="flex flex-wrap gap-2 border-b border-purple-200/50 dark:border-purple-900/40 pb-4">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.role}
                  onClick={() => setActiveProcessTab(idx)}
                  className={`relative text-xs font-mono px-4 py-2 rounded-full transition-all duration-300 ${
                    activeProcessTab === idx
                      ? "bg-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(124,58,237,0.35)]"
                      : "bg-purple-50 dark:bg-purple-950/40 text-muted-foreground hover:text-foreground hover:bg-purple-100 dark:hover:bg-purple-900/40"
                  }`}
                >
                  <span>{step.step} / {step.role}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  key={activeProcessTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-purple-300/40 dark:border-purple-800/40 bg-purple-950/20 group shadow-md"
                >
                  <img
                    src={PROCESS_STEPS[activeProcessTab].photo}
                    alt={PROCESS_STEPS[activeProcessTab].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-background/90 border border-purple-300/50 dark:border-purple-800/50 text-[11px] font-mono text-purple-900 dark:text-purple-200 backdrop-blur-md flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                    Verified On-Ground Proof
                  </div>
                </motion.div>
              </div>

              <motion.div
                key={`desc-${activeProcessTab}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="lg:col-span-5 space-y-4"
              >
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300/50 dark:border-purple-800/50 font-medium">
                  Stage {PROCESS_STEPS[activeProcessTab].step}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {PROCESS_STEPS[activeProcessTab].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {PROCESS_STEPS[activeProcessTab].proof}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-purple-200/50 dark:border-purple-900/40">
                  {PROCESS_STEPS[activeProcessTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={getWhatsAppUrl(`Process: ${PROCESS_STEPS[activeProcessTab].role}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Inquire About {PROCESS_STEPS[activeProcessTab].role}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* REGIONAL AUTHORITY / CITY COVERAGE */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
              Regional Footprint
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Delhi NCR coverage & active rigging hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COVERAGE_CITIES.map((city, idx) => (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                      Live Regional Hub
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-300/40 dark:border-purple-800/40">
                      {city.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {city.city}
                  </h3>
                  <p className="text-xs font-mono text-purple-700/80 dark:text-purple-400/80 mb-4">
                    {city.sub}
                  </p>

                  <div className="space-y-2 text-xs font-mono text-muted-foreground pt-4 border-t border-purple-200/40 dark:border-purple-900/40">
                    <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-purple-600" />
                      <span>{city.stats}</span>
                    </div>
                    <div className="text-[11px] leading-relaxed">Corridors: {city.hotspots}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="space-y-8 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">
              Client Feedback
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Verified regional buyer endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                    {[...Array(review.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-purple-600 dark:fill-purple-400 text-purple-600 dark:text-purple-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-purple-200/40 dark:border-purple-900/40">
                  <div className="font-bold text-xs text-foreground">{review.author}</div>
                  <div className="text-[11px] font-mono text-purple-700 dark:text-purple-400">
                    {review.designation} · {review.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl border border-purple-200/60 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/70 via-background to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/30 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/70 border border-purple-300/50 dark:border-purple-800/50">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              15-Minute WhatsApp Estimate SLA
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Ready to quote your <span className="text-gradient-purple">fabrication or signage?</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Send site photos, dimensions, or billboard coordinates. Our estimation engineers deliver pricing breakdown and turnaround schedule immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-purple-50 dark:hover:bg-purple-950/50 text-foreground border border-purple-200/70 dark:border-purple-800/60 text-sm font-semibold transition-colors"
            >
              <span>Custom RFP</span>
              <ArrowUpRight className="w-4 h-4 text-purple-600" />
            </Link>
          </div>
        </motion.section>
      </main>

      {/* SERVICE BREAKDOWN MODAL DIALOG */}
      <AnimatePresence>
        {selectedBreakdownService && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-purple-200/80 dark:border-purple-800/70 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative"
            >
              <button
                onClick={() => setSelectedBreakdownService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 border border-purple-300/50 dark:border-purple-800/50 text-purple-800 dark:text-purple-300 font-medium">
                  Technical Specification
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mt-3">
                  {selectedBreakdownService.title}
                </h3>
                <p className="text-xs font-mono text-purple-700 dark:text-purple-400">
                  {selectedBreakdownService.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <p className="font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Scope & Deliverables</p>
                <ul className="space-y-2">
                  {selectedBreakdownService.breakdown.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50 text-xs font-mono">
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-semibold">MATERIALS & SPECS</span>
                  <span className="text-foreground font-medium">{selectedBreakdownService.breakdown.specs}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-semibold">NCR TURNAROUND</span>
                  <span className="text-foreground font-medium">{selectedBreakdownService.breakdown.turnaround}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(selectedBreakdownService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all inline-flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Get Instant WhatsApp Quote</span>
                </a>
                <button
                  onClick={() => setSelectedBreakdownService(null)}
                  className="px-5 py-3 rounded-full bg-purple-50 dark:bg-purple-950/50 text-foreground text-xs font-medium border border-purple-200/80 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
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
