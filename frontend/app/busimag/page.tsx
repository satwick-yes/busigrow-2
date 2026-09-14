'use client'

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { EDITORIAL_ARTICLES, CATEGORIES } from "@/lib/busimag-data"
import { BookOpen, Search, ArrowRight, ArrowUpRight, Clock, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function BusiMagPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter((article) => {
      const matchCat =
        selectedCategory === "All" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-300">
      <Navbar />

      {/* Ambient Radial Background Glows */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <main className="pt-28 pb-24 space-y-16 max-w-6xl mx-auto px-4 sm:px-6">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 pb-12 border-b border-purple-200/60 dark:border-purple-900/40 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-700 dark:text-purple-300 mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Busigrow Journal & Field Notes
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-6">
            Execution notes, technical blueprints &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-400 bg-clip-text text-transparent">
              ROI audits.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Field reports directly from our Noida fabrication floor, Gurugram software engineering sprints, and Meta automation pipelines.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-purple-200/50 dark:border-purple-900/40">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] font-semibold"
                      : "bg-purple-50/60 dark:bg-purple-950/30 text-muted-foreground hover:text-foreground border border-purple-200/50 dark:border-purple-900/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-purple-600 dark:text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & field notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/60 border border-purple-200/70 dark:border-purple-900/60 rounded-xl text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono"
              />
            </div>
          </div>
        </motion.section>

        {/* ARTICLES GRID */}
        <section className="space-y-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 text-xs font-mono text-muted-foreground border border-purple-200/50 dark:border-purple-900/40 rounded-2xl bg-card/60">
              No field notes found matching your query.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-card/90 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group"
                >
                  <div>
                    <div className="aspect-[16/9] overflow-hidden relative border-b border-purple-200/50 dark:border-purple-900/40 bg-purple-950/20">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-card/90 backdrop-blur-md border border-purple-300/60 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 shadow-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-purple-700/80 dark:text-purple-300/80 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>&middot;</span>
                        <span>{article.date}</span>
                        <span>&middot;</span>
                        <span>By {article.author}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        <Link href={`/busimag/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 py-4 border-t border-purple-200/50 dark:border-purple-900/40 flex items-center justify-between bg-purple-50/30 dark:bg-purple-950/20">
                    <span className="text-xs font-mono text-muted-foreground">
                      Desk: {article.author}
                    </span>
                    <Link
                      href={`/busimag/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      <span>Read Note</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* BOTTOM CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/70 via-card to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/20 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_35px_rgba(139,92,246,0.15)]"
        >
          <div className="space-y-3 max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Want these blueprints deployed for your brand?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Schedule a scoping session with our engineering and fabrication directors in Noida or Gurugram.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}
