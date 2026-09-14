'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import {
  Code2,
  Palette,
  TrendingUp,
  Video,
  Rocket,
  ArrowRight,
  Phone,
  CheckCircle2,
  ExternalLink,
  Layers,
  Clock,
  Send,
  Building2,
  ShieldCheck,
  Check,
  X,
  Sparkles,
  Zap,
  BarChart3
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// 5 Core Online Services
const SERVICES = [
  {
    id: "web-dev",
    icon: Code2,
    title: "Web Engineering",
    tagline: "High-Performance Next.js Architecture",
    highlight: "Sub-800ms Speed",
    shortDesc: "Headless Next.js storefronts and custom web apps built for sub-second page loads and high conversion rates. Zero legacy bloat.",
    features: [
      "Sub-800ms Core Web Vitals optimization",
      "Next.js App Router & React 19 architecture",
      "Conversion checkout & lead intake funnels",
      "Mobile-first responsive UI engineering"
    ],
    breakdown: {
      deliverables: [
        "Headless Next.js modern frontend architecture",
        "Sub-second Core Web Vitals performance tuning",
        "Full-funnel analytics & conversion tracking hookup",
        "Mobile-first responsive UX across all breakpoints",
        "Semantic SEO architecture & dynamic OpenGraph tags"
      ],
      techStack: "Next.js, React, Tailwind CSS, TypeScript, Vercel",
      timeline: "2 to 4 weeks turnaround",
      bestFor: "Brands outgrowing slow template sites that need speed & conversions"
    }
  },
  {
    id: "branding-ui-ux",
    icon: Palette,
    title: "Branding & Design Systems",
    tagline: "Design Systems & User Interfaces",
    highlight: "Design Tokens",
    shortDesc: "Logo systems, typography guidelines, and intuitive digital interfaces that turn casual visitors into loyal, paying customers.",
    features: [
      "Comprehensive brand identity & design tokens",
      "Interactive Figma high-fidelity prototypes",
      "Friction-free UX checkout & onboarding",
      "Production-ready vector asset library"
    ],
    breakdown: {
      deliverables: [
        "Comprehensive brand identity & token system",
        "Interactive Figma high-fidelity prototypes",
        "Friction-free UX checkout & onboarding user journeys",
        "Production-ready design token documentation",
        "Complete trademark-ready asset export kit"
      ],
      techStack: "Figma, Adobe Creative Suite, Design Tokens",
      timeline: "1 to 3 weeks turnaround",
      bestFor: "Startups launching new products or established companies rebranding"
    }
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Performance Acquisition",
    tagline: "Paid Acquisition & Funnels",
    highlight: "High ROAS",
    shortDesc: "Paid social, paid search, and high-precision retargeting funnels. We manage budgets, optimize bids, and deliver measurable ROAS.",
    features: [
      "Meta & Google Search conversion ads",
      "Multi-touch dynamic retargeting engine",
      "Daily automated bid & spend optimization",
      "Live real-time ROAS performance dashboard"
    ],
    breakdown: {
      deliverables: [
        "Meta Ads (Instagram / Facebook) conversion campaigns",
        "Google Search, Performance Max & YouTube advertising",
        "Multi-touch dynamic retargeting infrastructure",
        "Daily bid optimization & automated budget reallocation",
        "Live real-time ROAS & CPA performance dashboard"
      ],
      techStack: "Meta Business Manager, Google Ads, GA4, Triple Whale",
      timeline: "Continuous monthly scaling (Weekly sprints)",
      bestFor: "E-commerce & B2B brands looking for profitable, scalable customer acquisition"
    }
  },
  {
    id: "content",
    icon: Video,
    title: "Video Production",
    tagline: "Short-Form Video & Hooks",
    highlight: "Viral Creative",
    shortDesc: "Short-form reels and performance video ads engineered with 3-second psychological hooks to maximize retention and brand recall.",
    features: [
      "15–30 custom video creatives per month",
      "High-retention 3s psychological hooks",
      "In-house shooting, grading & motion graphics",
      "Rapid A/B creative testing matrix"
    ],
    breakdown: {
      deliverables: [
        "15–30 custom short-form video creatives per month",
        "High-conversion hook scripting & behavioral storyboards",
        "In-house studio shooting, motion graphics & color grading",
        "Rapid A/B creative testing matrix (hook vs body vs CTA)",
        "Social-first viral formatting across vertical ratios"
      ],
      techStack: "Premiere Pro, After Effects, CapCut Pro, Sony Cinema Line",
      timeline: "7-day turnaround per creative batch",
      bestFor: "D2C brands needing high volume, high-CTR video ads"
    }
  },
  {
    id: "campaigns",
    icon: Rocket,
    title: "Turnkey Campaigns",
    tagline: "Omnichannel Growth Drops",
    highlight: "Launch Blitz",
    shortDesc: "Coordinated promotional blitzes that align paid media, email flows, and social momentum for massive day-one product drops.",
    features: [
      "Integrated launch milestones & roadmap",
      "Pre-launch countdown & VIP waitlist",
      "Synchronized email & SMS broadcast drips",
      "Day-1 ad spend surge & scaling control"
    ],
    breakdown: {
      deliverables: [
        "Integrated launch calendar and milestone roadmaps",
        "Pre-launch countdown teasers & VIP waitlist mechanics",
        "Synchronized email automation & SMS broadcast drips",
        "Day-1 ad spend surge management & real-time scaling",
        "Post-campaign retention & cross-sell sequencing"
      ],
      techStack: "Klaviyo, Meta Ads, Google Ads, Custom Landing Pages",
      timeline: "3 to 6 week coordinated sprint",
      bestFor: "Seasonal product drops, brand milestones, or high-stakes feature launches"
    }
  }
]

const PORTFOLIO_PROJECTS = [
  {
    id: "d2c-fashion",
    title: "D2C Fashion Brand Scale",
    category: "E-Commerce & Performance Video",
    metrics: [
      { label: "ROAS on Video", value: "4.8x" },
      { label: "Year 1 Revenue", value: "₹12Cr" },
      { label: "Storefront Speed", value: "<800ms" },
      { label: "Conversion Rate", value: "28%" }
    ],
    description: "Built full digital presence from scratch: high-speed headless storefront, 20+ viral short-form video hooks, and full paid social acquisition engine."
  },
  {
    id: "b2b-saas",
    title: "B2B SaaS Growth Architecture",
    category: "Web App & Lead Funnel",
    metrics: [
      { label: "Qualified Inbound", value: "+320%" },
      { label: "Demo Booking Rate", value: "18.4%" },
      { label: "CAC Reduction", value: "-42%" },
      { label: "Lighthouse Score", value: "99/100" }
    ],
    description: "Architected a lightning-fast web platform and interactive dashboard with seamless self-serve intake flows that tripled qualified demos."
  }
]

const BUDGET_OPTIONS = [
  "₹50,000 – ₹1.5 Lakh",
  "₹1.5 Lakh – ₹5 Lakh",
  "₹5 Lakh – ₹15 Lakh",
  "₹15 Lakh+"
]

export default function OnlinePage() {
  const [selectedBreakdownService, setSelectedBreakdownService] = useState<typeof SERVICES[0] | null>(null)

  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "Web Engineering",
    budgetRange: "₹1.5 Lakh – ₹5 Lakh",
    notes: ""
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 600)
  }

  const selectServiceAndScroll = (serviceTitle: string) => {
    setFormValues(prev => ({ ...prev, serviceNeeded: serviceTitle }))
    setSelectedBreakdownService(null)
    const element = document.getElementById("intake-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Radiant Violet & Purple Aurora Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-violet-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[45%] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-violet-600/10 via-purple-700/5 to-transparent blur-[150px] rounded-full pointer-events-none -z-10" />

      <Navbar />

      <main className="pt-28 pb-20 space-y-20 max-w-6xl mx-auto px-4 sm:px-6">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 pb-12 border-b border-purple-200/50 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200/60 dark:border-purple-800/60 text-xs font-mono text-purple-800 dark:text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.15)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            <span>Pillar 01: Digital Architecture & Growth</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] max-w-3xl mb-6">
            Engineered digital systems that drive{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent">
              measurable revenue.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            High-converting video ads, sub-second web applications, and precision paid acquisition. We build the entire stack from code to campaign.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#intake-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Start Project Intake</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#service-grid"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/70 dark:bg-purple-950/40 text-foreground border border-purple-200/60 dark:border-purple-800/60 text-sm font-semibold hover:border-purple-400 dark:hover:border-purple-600 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Explore 5 Services</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-purple-200/50 dark:border-purple-900/40">
            <div className="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-800/40">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">&lt;800ms</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Core Web Vitals</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-800/40">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">4.8x</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Average Client ROAS</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-800/40">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">100%</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Code Ownership</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/30 border border-purple-200/40 dark:border-purple-800/40">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-purple-700 dark:text-purple-300">14 Days</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Sprint Cycle</div>
            </div>
          </div>
        </motion.section>

        {/* 5 SERVICE CARDS */}
        <section id="service-grid" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Digital Stack</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Five core online execution capabilities
              </h2>
            </div>
            <p className="text-xs font-mono text-purple-600 dark:text-purple-400">
              Click any service for specification & scope
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setSelectedBreakdownService(service)
                    }
                  }}
                  className="p-4 md:p-6 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm flex flex-col justify-center md:justify-between items-center md:items-stretch hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 group cursor-pointer md:cursor-default aspect-square md:aspect-auto"
                >
                  {/* Mobile View: Only Icon */}
                  <div className="md:hidden flex items-center justify-center w-full h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-300/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Desktop View: Full Card */}
                  <div className="hidden md:block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-300/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-100/70 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-300/50 dark:border-purple-800/50 font-medium">
                        {service.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-foreground mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-3 font-medium">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-purple-200/40 dark:border-purple-900/40">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:flex mt-6 pt-4 border-t border-purple-200/40 dark:border-purple-900/40 items-center justify-between">
                    <button
                      onClick={() => setSelectedBreakdownService(service)}
                      className="text-xs font-medium text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Full Spec</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        selectServiceAndScroll(service.title)
                      }}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-300/60 dark:border-purple-800/60 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                    >
                      Book Intake
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* PROOF / PORTFOLIO STRIP */}
        <section className="space-y-6 pt-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold">Case Studies</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Verified digital performance metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_PROJECTS.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-6 sm:p-8 rounded-2xl border border-purple-200/60 dark:border-purple-900/50 bg-card/80 backdrop-blur-sm space-y-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all"
              >
                <div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300/50 dark:border-purple-800/50">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mt-4">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-purple-200/40 dark:border-purple-900/40">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-purple-50/40 dark:bg-purple-950/30">
                      <div className="text-xl font-bold font-mono text-purple-700 dark:text-purple-300">{m.value}</div>
                      <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTAKE FORM */}
        <section id="intake-form" className="p-8 sm:p-12 rounded-2xl border border-purple-200/70 dark:border-purple-900/60 bg-gradient-to-br from-card via-purple-950/10 to-card shadow-[0_0_40px_rgba(139,92,246,0.1)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 text-xs font-mono mb-4 border border-purple-300/40 dark:border-purple-800/40">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Quick Project Intake</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1 mb-2">
              Tell us what you need built
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Submit your requirements. An engineering lead will review your scope and provide timeline and quote within 24 hours.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl border border-purple-300 dark:border-purple-800 bg-purple-50/60 dark:bg-purple-950/40 space-y-3 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
              >
                <div className="flex items-center gap-2 text-purple-800 dark:text-purple-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>Intake Received Successfully</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our digital team has logged your scope for <strong className="text-foreground">{formValues.serviceNeeded}</strong>. We will reach out to <strong className="text-foreground">{formValues.email || formValues.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-purple-600 dark:text-purple-400 underline mt-2 hover:text-purple-800 transition-colors"
                >
                  Submit another scope
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Satwik Sharma"
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Company / Brand *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Apparel"
                      value={formValues.company}
                      onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="satwik@brand.com"
                      value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formValues.phone}
                      onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Primary Service</label>
                    <select
                      value={formValues.serviceNeeded}
                      onChange={(e) => setFormValues({ ...formValues, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Estimated Budget Range</label>
                    <select
                      value={formValues.budgetRange}
                      onChange={(e) => setFormValues({ ...formValues, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-purple-800 dark:text-purple-300 font-medium">Project Notes & Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, existing tech stack, or launch deadline..."
                    value={formValues.notes}
                    onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? "Submitting Scope..." : "Submit Technical Intake"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* SERVICE BREAKDOWN MODAL DIALOG */}
      <AnimatePresence>
        {selectedBreakdownService && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-purple-300/60 dark:border-purple-800/60 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative"
            >
              <button
                onClick={() => setSelectedBreakdownService(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-300/40 dark:border-purple-800/40">
                  Specification Sheet
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-3">
                  {selectedBreakdownService.title}
                </h3>
                <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mt-0.5">
                  {selectedBreakdownService.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <p className="font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold">Core Deliverables</p>
                <ul className="space-y-2">
                  {selectedBreakdownService.breakdown.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/60 text-xs font-mono">
                <div>
                  <span className="text-muted-foreground block text-[10px]">TECH STACK</span>
                  <span className="text-foreground font-semibold">{selectedBreakdownService.breakdown.techStack}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px]">TIMELINE</span>
                  <span className="text-foreground font-semibold">{selectedBreakdownService.breakdown.timeline}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => selectServiceAndScroll(selectedBreakdownService.title)}
                  className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all"
                >
                  Select & Book Intake
                </button>
                <button
                  onClick={() => setSelectedBreakdownService(null)}
                  className="px-5 py-2.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-foreground text-xs font-medium border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
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
