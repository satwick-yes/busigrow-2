import type React from "react"

interface YourWorkInSyncProps {
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
 * Your work, in sync – Chat conversation UI
 * Updated with glassmorphism & minimal slate palette
 */
const YourWorkInSync: React.FC<YourWorkInSyncProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  const isLight = theme === "light"
  const bg = isLight ? "bg-white/20" : "bg-white/10"
  const textPrimary = isLight ? "text-foreground" : "text-slate-100"
  const textSecondary = isLight ? "text-slate-600" : "text-muted-foreground"
  const bubbleLight = isLight ? "bg-slate-100/60" : "bg-primary/80"
  const bubbleDark = isLight ? "bg-primary/80" : "bg-slate-700/90"

  const imgAvatar1 = "/professional-woman-avatar-with-short-brown-hair-an.jpg"
  const imgAvatar2 = "/professional-man-avatar-with-beard-and-glasses-loo.jpg"
  const imgAvatar3 = "/professional-person-avatar-with-curly-hair-and-war.jpg"
  const imgArrowUp =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m5 12 7-7 7 7'/%3E%3Cpath d='M12 19V5'/%3E%3C/svg%3E"

  return (
    <div
      className={className}
      style={{ width, height, position: "relative", background: "transparent" }}
      role="img"
      aria-label="Chat conversation showing team collaboration sync"
    >
      {/* Outer glass container */}
      <div
        className={`w-full h-full flex items-center justify-center ${bg} glass-card rounded-xl`}
      >
        {/* Conversation area */}
        <div className="relative w-[360px] h-[200px]" style={{ transform: "scale(1.05)" }}>
          {/* Message 1 – left */}
          <div className="flex items-start gap-2 absolute left-0 top-0 w-full max-w-[300px]">
            <img
              src={imgAvatar1}
              alt="User"
              className="w-9 h-9 rounded-full border border-white/30"
            />
            <div
              className={`px-4 py-2 rounded-full ${bubbleLight} ${textPrimary} font-light text-sm`}
            >
              Team updates flow seamlessly
            </div>
          </div>

          {/* Message 2 – right */}
          <div className="flex items-start gap-2 absolute right-0 top-14 w-full max-w-[300px] justify-end">
            <div
              className={`px-4 py-2 rounded-full ${bubbleDark} text-white font-light text-sm`}
            >
              Hi everyone
            </div>
            <img
              src={imgAvatar2}
              alt="User"
              className="w-9 h-9 rounded-full border border-white/30"
            />
          </div>

          {/* Message 3 – left */}
          <div className="flex items-start gap-2 absolute left-0 top-28 w-full max-w-[300px]">
            <img
              src={imgAvatar3}
              alt="User"
              className="w-9 h-9 rounded-full border border-white/30"
            />
            <div
              className={`px-4 py-2 rounded-full ${bubbleLight} ${textPrimary} font-light text-sm`}
            >
              How about this instead?
            </div>
          </div>

          {/* Message 4 – center input-like bubble */}
          <div className="flex items-center gap-2 absolute left-1/2 top-48 transform -translate-x-1/2 w-full max-w-[340px]">
            <div
              className="flex-1 px-4 py-2 bg-white/80 rounded-xl shadow-sm text-primary font-light text-sm"
            >
              Great work, everyone!
            </div>
            <button
              className={`flex items-center justify-center w-9 h-9 rounded-full ${isLight ? "bg-primary" : "bg-primary"}`}
              aria-label="Send"
            >
              <img
                src={imgArrowUp}
                alt="Send"
                className="w-5 h-5 filter brightness-0 invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourWorkInSync
