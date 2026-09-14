"use client"

export default function CTASection() {
  return (
    <section className="py-20 px-6 border-t border-b border-white/20">
      <div className="max-w-[1060px] mx-auto glass-card rounded-xl px-12 py-16 flex flex-col items-center gap-8 text-center text-foreground">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
          Ready to transform your business?
        </h2>
        <p className="text-muted-foreground text-base leading-7 font-light">
          Join thousands of businesses streamlining their operations,
          <br />
          managing schedules, and growing with data-driven insights.
        </p>
        <button className="h-11 px-8 bg-primary hover:bg-primary text-foreground rounded-full font-light text-sm transition-all shadow-lg hover:shadow-xl">
          Start for free
        </button>
      </div>
    </section>
  )
}
