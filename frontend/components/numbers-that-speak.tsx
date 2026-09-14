import type React from "react"

interface NumbersThatSpeakProps {
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
 * Numbers that speak – Financial dashboard with layered charts
 * Updated with glassmorphism & slate minimalism
 */
const NumbersThatSpeak: React.FC<NumbersThatSpeakProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
      }}
      role="img"
      aria-label="Financial dashboard showing invoiced revenue charts"
      data-name="Numbers that speak"
    >
      {/* Root positioning container */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "calc(50% + 15px)",
        }}
      >
        {/* Small dashboard card - back layer */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% - 20px)",
            width: "270px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="w-full h-full rounded-xl border border-white/20 bg-white/20 backdrop-blur-md shadow-sm"
          />
        </div>

        {/* Medium dashboard card - middle layer */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% + 5px)",
            width: "320px",
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="w-full h-full rounded-xl border border-white/30 bg-white/40 backdrop-blur-md shadow-sm"
          />
        </div>

        {/* Large dashboard card - front layer with full content */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% + 25px)",
            width: "360px",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-full h-full glass-card rounded-xl border border-white/40 shadow-lg p-5 flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex flex-col gap-1 items-start">
              <div className="text-muted-foreground text-xs font-light tracking-tight">
                Invoiced Revenue
              </div>
              <div className="text-foreground text-xl font-light tracking-tight">
                $317,731.00
              </div>
            </div>

            {/* Chart Area */}
            <div className="w-full flex-1 flex flex-col justify-end pt-3">
              <div className="w-full h-32 flex items-end justify-between gap-1.5 pb-2 border-b border-white/20">
                {[
                  { height: "55%", highlight: false },
                  { height: "75%", highlight: false },
                  { height: "40%", highlight: false },
                  { height: "65%", highlight: false },
                  { height: "55%", highlight: false },
                  { height: "65%", highlight: false },
                  { height: "60%", highlight: false },
                  { height: "70%", highlight: false },
                  { height: "90%", highlight: true },
                  { height: "50%", highlight: false },
                  { height: "65%", highlight: false },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col justify-end h-full items-center"
                  >
                    <div
                      style={{ height: bar.height }}
                      className={`w-full rounded-t-sm transition-all ${
                        bar.highlight
                          ? "bg-primary shadow-sm"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-between items-center text-[10px] text-muted-foreground font-light pt-1.5">
                <span>Aug 2023</span>
                <span>Aug 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumbersThatSpeak
