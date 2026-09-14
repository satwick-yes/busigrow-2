"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative blurred background elements for glassmorphism refraction */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
      <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[10%] left-[40%] w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-[1060px] mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          {/* Hero Content inside a glass panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[937px] flex flex-col items-center gap-8 glass-card p-8 md:p-16 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-foreground text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] tracking-tight">
                Effortless billing, perfectly automated
              </h1>
              <p className="max-w-[506px] text-center text-muted-foreground text-lg md:text-xl font-sans font-light leading-relaxed">
                Streamline your billing process with seamless automation for every custom contract.
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center mt-4"
            >
              <Button className="h-12 px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-sans font-medium text-base transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] border border-accent/20">
                Start for free
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
