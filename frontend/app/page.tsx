'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Quote
} from 'lucide-react'

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}

const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const OUR_WORK = [
  {
    title: 'Offline Execution & Signage',
    category: 'Offline',
    image: '/storefront.jpg',
    tags: ['Printing', 'Designing', 'Installation', 'Branding Placement']
  },
  {
    title: 'Digital Systems & Web Development',
    category: 'Online',
    image: '/fleet.jpg',
    tags: ['Web-development', 'Graphic design', 'Online Campaign', 'Branding & Identity']
  },
  {
    title: 'Automations & Workflow Tools',
    category: 'Automations',
    image: '/automations.jpg',
    tags: ['AI Agent builder', 'Workflow Automation', 'Business Intelligence']
  }
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Discovery & Requirement Capture',
    desc: 'We map your exact business requirements across physical branding, digital creative, or operational automation.'
  },
  {
    step: '02',
    title: 'Design & Strategy',
    desc: 'Our specialized in-house design and technical teams develop tailored concepts and production blueprints.'
  },
  {
    step: '03',
    title: 'Rapid Execution & Delivery',
    desc: 'Streamlined production with dedicated quality checks and on-schedule deployment.'
  },
  {
    step: '04',
    title: 'Growth & Optimization',
    desc: 'Continuous performance tracking, asset maintenance, and scalable campaign expansion.'
  }
]

const TESTIMONIALS = [
  {
    quote: 'Busigrow delivered our entire offline signage and online branding with exceptional speed and attention to detail.',
    author: 'Commercial Retail Client',
    role: 'Managing Director'
  },
  {
    quote: 'The seamless coordination between their design team and execution team made scaling our retail presence effortless.',
    author: 'Enterprise Brand Partner',
    role: 'Head of Marketing'
  },
  {
    quote: 'Working with Busigrow gave us a single accountable partner for creative campaigns and automated business workflows.',
    author: 'Agency Partner',
    role: 'Creative Director'
  }
]

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={STAGGER_CONTAINER}
            className="space-y-8 max-w-4xl"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                Growth &amp; Fabrication
              </span>
            </motion.div>

            <motion.h1
              variants={FADE_UP}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-foreground leading-[0.95] uppercase"
            >
              Creative Growth. <br />
              <span className="text-primary">
                Physical &amp; Digital
              </span>{' '}
              Execution.
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
            >
              We craft high-impact physical branding, digital creative systems, and intelligent business automations for growing companies.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>Let&apos;s grow</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>

              <Link
                href="/offline"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-muted-foreground border border-border font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR WORK SECTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Our Work
              </h2>
            </div>
            <Link
              href="/campaigns"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OUR_WORK.map((item) => (
              <div
                key={item.title}
                className="border border-border bg-card overflow-hidden group hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/40 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm border border-border text-[10px] font-mono uppercase text-muted-foreground">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold uppercase text-foreground">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 bg-secondary border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      href="/grow-with-us"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-muted-foreground hover:text-foreground"
                    >
                      <span>Get started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS SECTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="p-8 border border-border bg-card space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-4xl font-mono font-black text-primary/80 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold uppercase text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border text-[10px] font-mono text-primary uppercase">
                  Step {step.step} &middot; Standard Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
              // REPUTATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 border border-border bg-card space-y-6 hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-6 h-6 text-primary" />
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground text-sm">{t.author}</div>
                  <div className="text-xs text-primary font-mono">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. READY TO GROW CARD
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                START YOUR PROJECT
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Ready to grow?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Connect with our team to discuss your offline execution, digital campaigns, or custom automation requirements.
              </p>
            </div>

            <div>
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>Let&apos;s grow</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
