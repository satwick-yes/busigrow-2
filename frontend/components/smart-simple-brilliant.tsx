import type React from "react"

interface SmartSimpleBrilliantProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Smart · Simple · Brilliant – Calendar cards
 * Updated with glassmorphism & slate minimalism
 */
const SmartSimpleBrilliant: React.FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="img"
      aria-label="Two calendar cards with colored event rows"
    >
      <div
        style={{
          position: "relative",
          width: "295px",
          height: "212px",
          transform: "scale(1.15)",
        }}
      >
        {/* Left tilted card group */}
        <div style={{ position: "absolute", left: "120px", top: "0px" }}>
          <div style={{ transform: "rotate(4deg)", transformOrigin: "center" }}>
            <div className="w-[160px] glass-card rounded-2xl p-2 border border-white/40 shadow-lg flex flex-col gap-1.5">
              {/* Amber event */}
              <div className="w-full rounded-lg overflow-hidden bg-amber-500/10 border border-amber-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-amber-700">2:00 PM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-amber-900 truncate">
                  1:1 with Heather
                </div>
              </div>

              {/* Sky event */}
              <div className="w-full rounded-lg overflow-hidden bg-sky-500/10 border border-sky-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-sky-700">2:00 PM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-sky-900 truncate">
                  Concept Design Review II
                </div>
              </div>

              {/* Emerald event */}
              <div className="w-full rounded-lg overflow-hidden bg-emerald-500/10 border border-emerald-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-emerald-700">9:00 AM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-emerald-900 truncate">
                  Webinar: Figma ...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right tilted card */}
        <div style={{ position: "absolute", left: "0px", top: "6px" }}>
          <div style={{ transform: "rotate(-4deg)", transformOrigin: "center" }}>
            <div className="w-[160px] glass-card rounded-2xl p-2 border border-white/40 shadow-xl flex flex-col gap-1.5">
              {/* Violet event */}
              <div className="w-full rounded-lg overflow-hidden bg-indigo-500/10 border border-indigo-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-indigo-700">11:00 AM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-indigo-900 truncate">
                  Onboarding Presentation
                </div>
              </div>

              {/* Rose event */}
              <div className="w-full rounded-lg overflow-hidden bg-rose-500/10 border border-rose-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-rose-700">4:00 PM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-rose-900 truncate">
                  🍷 Happy Hour
                </div>
              </div>

              {/* Violet tall event */}
              <div className="w-full rounded-lg overflow-hidden bg-purple-500/10 border border-purple-500/20 p-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-light text-[10px] text-primary">11:00 AM</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 ml-auto" />
                </div>
                <div className="font-light text-[11px] text-primary truncate">
                  🍔 New Employee Welcome Lunch!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartSimpleBrilliant
