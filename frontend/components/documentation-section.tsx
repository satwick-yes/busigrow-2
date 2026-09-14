"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-3 py-1.5 glass-card rounded-full flex items-center gap-2 border border-white/30">
      <div className="w-3.5 h-3.5 flex items-center justify-center text-xs">{icon}</div>
      <div className="text-foreground text-xs font-light">{text}</div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Plan your schedules",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Data to insights in minutes",
      description: "Transform raw data into actionable insights\nwith powerful analytics tools.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Collaborate seamlessly",
      description: "Work together in real-time with your team\nand share insights instantly.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-white/20 flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-white/20 flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <div className="w-2.5 h-2.5 border border-slate-700 rounded-full"></div>
            }
            text="Platform Features"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-foreground text-3xl md:text-5xl font-light leading-tight md:leading-[60px] tracking-tight">
            Streamline your business operations
          </div>
          <div className="self-stretch text-center text-muted-foreground text-base font-light leading-7">
            Manage schedules, analyze data, and collaborate with your team
            <br />
            all in one powerful platform.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 max-w-[1060px] mx-auto py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full rounded-xl overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "glass-card border border-white/40 shadow-sm"
                      : "bg-white/20 border border-white/10 hover:bg-white/30"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-slate-200/50 overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-primary animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-foreground text-sm font-light leading-6">
                      {card.title}
                    </div>
                    <div className="self-stretch text-muted-foreground text-[13px] font-light leading-[22px] whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto rounded-xl flex flex-col justify-center items-center gap-2 order-1 md:order-2">
            <div className="w-full md:w-[580px] h-[250px] md:h-[420px] glass-card overflow-hidden rounded-xl flex flex-col justify-start items-start border border-white/30">
              <div
                className={`w-full h-full transition-all duration-500 ${
                  activeCard === 0
                    ? "bg-gradient-to-br from-blue-500/10 via-slate-100/30 to-indigo-500/10"
                    : activeCard === 1
                      ? "bg-gradient-to-br from-purple-500/10 via-slate-100/30 to-pink-500/10"
                      : "bg-gradient-to-br from-emerald-500/10 via-slate-100/30 to-teal-500/10"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
