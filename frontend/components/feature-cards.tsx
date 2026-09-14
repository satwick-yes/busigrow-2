"use client"

import { motion } from "framer-motion"

export function FeatureCards() {
  const features = [
    {
      title: "Plan your schedules",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      highlighted: true,
    },
    {
      title: "Data to insights in minutes",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      highlighted: false,
    },
    {
      title: "Collaborate seamlessly",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      highlighted: false,
    },
  ]

  return (
    <section className="relative bg-background overflow-hidden py-16">
      <div className="max-w-[1060px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              key={index}
              className={`p-8 flex flex-col gap-4 rounded-2xl transition-all glass-card ${
                feature.highlighted ? "border-primary/30 bg-white/60 shadow-[0_8px_32px_rgba(37,99,235,0.1)]" : ""
              }`}
            >
              <h3 className="text-foreground text-xl font-heading font-medium leading-6">{feature.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-sans font-light whitespace-pre-line">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
