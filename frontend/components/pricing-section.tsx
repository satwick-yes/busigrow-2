"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: {
      monthly: 0,
      annually: 0,
    },
    professional: {
      monthly: 20,
      annually: 16,
    },
    enterprise: {
      monthly: 200,
      annually: 160,
    },
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 bg-background relative overflow-hidden pb-16">
      
      {/* Background decoration */}
      <div className="absolute top-[50%] left-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center gap-6 relative z-10">
        <div className="w-full max-w-[586px] px-6 py-5 flex flex-col justify-start items-center gap-6">
          {/* Pricing Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-2 glass-card rounded-full flex items-center gap-2 border border-primary/20"
          >
            <div className="w-3.5 h-3.5 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#2563EB"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-primary text-xs font-sans font-medium">Plans & Pricing</div>
          </motion.div>

          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="self-stretch text-center text-foreground text-4xl md:text-5xl font-heading font-medium leading-tight md:leading-[60px] tracking-tight"
          >
            Choose your plan
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="self-stretch text-center text-muted-foreground text-lg font-sans font-light leading-relaxed"
          >
            Scale your operations with flexible pricing that grows with your team.
            <br />
            Start free, upgrade when you're ready.
          </motion.div>
        </div>
      </div>

      {/* Billing Toggle Section */}
      <div className="self-stretch px-6 md:px-16 pb-12 relative flex justify-center items-center gap-4 z-10">
        {/* Toggle Container */}
        <div className="p-3 relative glass-effect rounded-2xl">
          <div className="p-1 bg-white/20 rounded-full border border-white/40 flex justify-center items-center gap-1 relative shadow-inner">
            <div
              className={`absolute top-[4px] w-[calc(50%-2px)] h-[calc(100%-8px)] bg-white shadow-sm rounded-full transition-all duration-300 ease-in-out ${
                billingPeriod === "annually" ? "left-[4px]" : "right-[4px]"
              }`}
            />

            <button
              onClick={() => setBillingPeriod("annually")}
              className="px-6 py-2 rounded-full flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[14px] font-sans font-medium transition-colors duration-300 ${
                  billingPeriod === "annually" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Annually
              </div>
            </button>

            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-6 py-2 rounded-full flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[14px] font-sans font-medium transition-colors duration-300 ${
                  billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch flex justify-center items-center z-10">
        <div className="flex justify-center items-start w-full">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 px-6"
          >
            {/* Starter Plan */}
            <motion.div variants={item} className="flex-1 px-8 py-10 glass-card rounded-3xl flex flex-col justify-start items-start gap-10 hover:border-primary/30 transition-colors">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground text-2xl font-heading font-medium leading-7">Starter</div>
                  <div className="w-full text-muted-foreground text-sm font-sans font-light leading-relaxed">
                    Perfect for individuals and small teams getting started.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-heading font-light leading-[60px]">
                      <span className="invisible">${pricing.starter[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{ opacity: billingPeriod === "annually" ? 1 : 0 }}
                      >
                        ${pricing.starter.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{ opacity: billingPeriod === "monthly" ? 1 : 0 }}
                      >
                        ${pricing.starter.monthly}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm font-sans font-light">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-6 py-3 bg-white/50 border border-white/50 rounded-full flex justify-center items-center transition-all hover:bg-white/80 cursor-pointer">
                  <div className="text-foreground text-sm font-sans font-medium">Start for free</div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {[
                  "Up to 3 projects",
                  "Basic documentation tools",
                  "Community support",
                  "Standard templates",
                  "Basic analytics",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1 text-foreground text-sm font-sans font-light leading-5">{feature}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Plan (Featured) */}
            <motion.div variants={item} className="flex-1 px-8 py-10 glass-card bg-white/40 border-accent/30 rounded-3xl flex flex-col justify-start items-start gap-10 shadow-[0_8px_32px_rgba(234,88,12,0.1)] relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-foreground text-xs font-sans font-bold rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground text-2xl font-heading font-medium leading-7">Professional</div>
                  <div className="w-full text-muted-foreground text-sm font-sans font-light leading-relaxed">
                    Advanced features for growing teams and businesses.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-heading font-light leading-[60px]">
                      <span className="invisible">${pricing.professional[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500 text-accent"
                        style={{ opacity: billingPeriod === "annually" ? 1 : 0 }}
                      >
                        ${pricing.professional.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500 text-accent"
                        style={{ opacity: billingPeriod === "monthly" ? 1 : 0 }}
                      >
                        ${pricing.professional.monthly}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm font-sans font-light">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-6 py-3 bg-accent text-foreground rounded-full flex justify-center items-center transition-all hover:bg-accent/90 cursor-pointer shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                  <div className="text-sm font-sans font-medium">Get started</div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {[
                  "Unlimited projects",
                  "Advanced documentation tools",
                  "Priority support",
                  "Custom templates",
                  "Advanced analytics",
                  "Team collaboration",
                  "API access",
                  "Custom integrations",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1 text-foreground text-sm font-sans font-medium leading-5">{feature}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div variants={item} className="flex-1 px-8 py-10 glass-card rounded-3xl flex flex-col justify-start items-start gap-10 hover:border-primary/30 transition-colors">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground text-2xl font-heading font-medium leading-7">Enterprise</div>
                  <div className="w-full text-muted-foreground text-sm font-sans font-light leading-relaxed">
                    Complete solution for large organizations and enterprises.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-heading font-light leading-[60px]">
                      <span className="invisible">${pricing.enterprise[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{ opacity: billingPeriod === "annually" ? 1 : 0 }}
                      >
                        ${pricing.enterprise.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{ opacity: billingPeriod === "monthly" ? 1 : 0 }}
                      >
                        ${pricing.enterprise.monthly}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm font-sans font-light">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-6 py-3 bg-white/50 border border-white/50 rounded-full flex justify-center items-center transition-all hover:bg-white/80 cursor-pointer">
                  <div className="text-foreground text-sm font-sans font-medium">Contact sales</div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {[
                  "Everything in Professional",
                  "Dedicated account manager",
                  "24/7 phone support",
                  "Custom onboarding",
                  "Advanced security features",
                  "SSO integration",
                  "Custom contracts",
                  "White-label options",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1 text-foreground text-sm font-sans font-light leading-5">{feature}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
