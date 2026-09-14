'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Building2,
  Sparkles,
  Send,
  Zap,
  CheckCircle2
} from "lucide-react"

interface Answer {
  [key: string]: string
}

const QUESTIONS = [
  {
    id: "service",
    title: "What are you looking to build or scale?",
    category: "Pillar Selection",
    type: "options",
    options: [
      { id: "online", title: "Digital Platform & Ads", desc: "Next.js web apps, UI/UX systems, Meta & Google ad funnels" },
      { id: "offline", title: "Physical Fabrication & Signage", desc: "Large-format UV printing, 3D channel letters, fleet wraps" },
      { id: "automations", title: "Automations & WhatsApp Engines", desc: "CRM sync, WhatsApp intake bot, dynamic PDF quotes" },
      { id: "tailored", title: "Turnkey Venture Acquisition", desc: "Pre-packaged digital brand, domain, SOPs, and 48h handover" },
    ],
  },
  {
    id: "timeline",
    title: "What is your target launch timeline?",
    category: "Execution Window",
    type: "options",
    options: [
      { id: "urgent", title: "Immediate / Urgent (< 7 days)", desc: "Priority queue with dedicated night-shift dispatch" },
      { id: "standard", title: "Standard Sprint (2–4 weeks)", desc: "Full scoping, prototyping, review, and deployment" },
      { id: "quarter", title: "Strategic Roadmap (1–3 months)", desc: "Multi-store rollout or large-scale product architecture" },
    ],
  },
  {
    id: "budget",
    title: "What is your planned budget range?",
    category: "Commercial Scope",
    type: "options",
    options: [
      { id: "starter", title: "₹50,000 – ₹2,00,000", desc: "Single storefront, campaign creative sprint, or basic web app" },
      { id: "growth", title: "₹2,00,000 – ₹10,00,000", desc: "Multi-channel expansion, full fabrication rollout, or custom SaaS" },
      { id: "enterprise", title: "₹10,00,000+", desc: "Pan-India physical rollout, venture acquisition, or enterprise platform" },
    ],
  },
  {
    id: "name",
    title: "What is your name and company?",
    category: "Point of Contact",
    type: "text",
    placeholder: "e.g. Vikram Sharma · Acme Retail Labs",
  },
  {
    id: "email",
    title: "What is your work email?",
    category: "Communication",
    type: "text",
    placeholder: "you@company.com",
  },
  {
    id: "phone",
    title: "WhatsApp or phone number (optional)?",
    category: "Instant Verification",
    type: "text",
    placeholder: "+91 98765 43210",
    optional: true,
  },
]

const DIRECT_CHANNELS = [
  {
    icon: MessageSquare,
    label: "Direct WhatsApp Desk",
    val: "+91 98765 43210",
    desc: "Average response: < 3 minutes",
    href: "https://wa.me/919876543210?text=Hi%20Busigrow%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
  {
    icon: Mail,
    label: "Project Scoping Email",
    val: "team@busigrow.com",
    desc: "Direct inbox of engineering directors",
    href: "mailto:team@busigrow.com",
  },
  {
    icon: MapPin,
    label: "NCR Engineering & Fabrication",
    val: "Sector 63, Noida, UP",
    desc: "Active plant & design studio",
    href: "https://maps.google.com",
  },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer>({})
  const [submitted, setSubmitted] = useState(false)
  const [textInput, setTextInput] = useState("")

  useEffect(() => {
    const question = QUESTIONS[currentStep]
    if (question?.type === "text") {
      setTextInput(answers[question.id] || "")
    }
  }, [currentStep, answers])

  const currentQuestion = QUESTIONS[currentStep]

  const selectOption = (optionId: string) => {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId }
    setAnswers(nextAnswers)
  }

  const handleNext = () => {
    if (currentQuestion.type === "text") {
      if (!textInput.trim() && !currentQuestion.optional) {
        return
      }
      setAnswers({ ...answers, [currentQuestion.id]: textInput.trim() })
    }

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-300">
      <Navbar />

      {/* Ambient Radial Background Glows */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 dark:bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="pt-28 pb-24 space-y-16 max-w-6xl mx-auto px-4 sm:px-6">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 pb-10 border-b border-purple-200/60 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-700 dark:text-purple-300 mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Project Scoping & Client Intake
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Initiate a project brief or{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent">
              schedule a scoping session.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Direct access to our fabrication directors and software architects. Zero junior account managers. Response guaranteed within 2 hours.
          </p>
        </motion.section>

        {/* 2-COLUMN LAYOUT: INTAKE STEPPER + DIRECT CHANNELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: INTERACTIVE SCOPING STEPPER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="lg:col-span-8 p-6 sm:p-10 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md shadow-[0_0_35px_rgba(139,92,246,0.1)] relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-600 dark:text-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Project Brief Received
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-purple-600 dark:text-purple-400">{answers.name || "there"}</span>. An engineering director has received your parameters and will respond within 2 hours with an architectural pricing matrix.
                </p>

                <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/50 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-muted-foreground">
                  <div><span className="text-foreground font-semibold">Service:</span> {answers.service || "Standard"}</div>
                  <div><span className="text-foreground font-semibold">Timeline:</span> {answers.timeline || "Flexible"}</div>
                  <div><span className="text-foreground font-semibold">Budget:</span> {answers.budget || "Custom"}</div>
                  {answers.email && <div><span className="text-foreground font-semibold">Contact:</span> {answers.email}</div>}
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                  >
                    <span>Return to Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Busigrow%2C%20I%20just%20submitted%20a%20project%20brief%20for%20${encodeURIComponent(answers.name || "my project")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {/* Progress Bar & Stage Indicator */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-purple-700 dark:text-purple-300 pb-3">
                    <span className="font-semibold uppercase tracking-wider">
                      STEP {currentStep + 1} OF {QUESTIONS.length} &middot; {currentQuestion.category}
                    </span>
                    <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-purple-100 dark:bg-purple-950/60 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {currentQuestion.title}
                    </h2>

                    {/* Options Selector */}
                    {currentQuestion.type === "options" ? (
                      <div className="space-y-3">
                        {currentQuestion.options?.map((option) => {
                          const isSelected = answers[currentQuestion.id] === option.id
                          return (
                            <motion.button
                              key={option.id}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => selectOption(option.id)}
                              className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${
                                isSelected
                                  ? "bg-purple-50/80 dark:bg-purple-950/50 border-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.2)] text-foreground"
                                  : "bg-secondary/40 border-purple-200/50 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-700 text-muted-foreground"
                              }`}
                            >
                              <div>
                                <div className="text-base font-semibold text-foreground mb-1">
                                  {option.title}
                                </div>
                                <div className="text-xs text-muted-foreground leading-relaxed">
                                  {option.desc}
                                </div>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? "border-purple-600 bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                    : "border-purple-300 dark:border-purple-800"
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </motion.button>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={textInput}
                          onChange={(e) => setTextInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleNext()}
                          placeholder={currentQuestion.placeholder}
                          autoFocus
                          className="w-full px-5 py-4 bg-secondary/60 border border-purple-200/70 dark:border-purple-900/60 rounded-2xl text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono shadow-sm"
                        />
                        {currentQuestion.optional && (
                          <p className="text-xs font-mono text-purple-700/80 dark:text-purple-400/80">
                            Optional &middot; press Continue or Enter to skip
                          </p>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-purple-200/50 dark:border-purple-900/40">
                      <div>
                        {currentStep > 0 && (
                          <button
                            onClick={handlePrevious}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-purple-700 dark:text-purple-300 hover:bg-purple-500/10 transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Previous Step</span>
                          </button>
                        )}
                      </div>

                      <button
                        onClick={handleNext}
                        disabled={currentQuestion.type === "options" && !answers[currentQuestion.id]}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-medium transition-all ${
                          answers[currentQuestion.id] || currentQuestion.type === "text"
                            ? "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer"
                            : "bg-secondary text-muted-foreground border border-purple-200/40 dark:border-purple-900/40 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <span>{currentStep === QUESTIONS.length - 1 ? "Submit Project Brief" : "Continue"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* RIGHT: DIRECT CONTACT CHANNELS */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="p-7 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md space-y-5 shadow-[0_0_25px_rgba(139,92,246,0.1)]"
            >
              <div>
                <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-semibold uppercase tracking-wider">Fast Lane</span>
                <h3 className="text-lg font-bold tracking-tight text-foreground mt-1">
                  Direct Channels
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need an immediate quote, physical proof inspection, or instant NDA? Connect directly with our lead team.
              </p>

              <div className="space-y-3 pt-1">
                {DIRECT_CHANNELS.map((ch) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-secondary/50 border border-purple-200/40 dark:border-purple-900/40 flex items-start gap-3.5 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all group block"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{ch.label}</div>
                        <div className="text-xs font-mono text-purple-700 dark:text-purple-300 mt-0.5">{ch.val}</div>
                        <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{ch.desc}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-6 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-purple-500/5 backdrop-blur-md space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Service Level Guarantee</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All qualified briefs receive technical architecture blueprints and itemized commercial matrices within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
