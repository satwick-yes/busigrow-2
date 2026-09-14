'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import FooterSection from '@/components/footer-section'
import { EDITORIAL_ARTICLES, CATEGORIES } from '@/lib/busimag-data'
import { Search, ArrowRight, ArrowUpRight, Clock, BookOpen, Terminal, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BusiMagPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const featuredArticle = EDITORIAL_ARTICLES[0]

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter((article) => {
      const matchCat =
        selectedCategory === 'All' ||
        article.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          1. 80VH FULL-WIDTH HERO COVER: KINFOLK MEETS SSENSE BRUTALISM
         ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                BIZMAG // VOLUME 06 &middot; ISSUE 2026
              </span>
              <span className="text-[11px] font-mono text-primary hidden sm:inline">
                EDITORIAL DESK: NOIDA SECTOR 63 &middot; GURUGRAM
              </span>
            </div>
            <div className="text-[11px] font-mono text-primary">
              ISSN 2948-9182 &middot; QUARTERLY AUDIT
            </div>
          </div>

          {/* Featured Cover Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            {/* Left Cover Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[11px] font-mono text-primary">
                  <span className="px-2.5 py-1 bg-secondary border border-border text-muted-foreground uppercase">
                    FEATURED COVER STORY
                  </span>
                  <span>{featuredArticle.readTime}</span>
                  <span>&middot;</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.95]">
                  {featuredArticle.title}
                </h1>

                <div className="pt-2">
                  <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                    <span className="float-left text-5xl font-black font-mono leading-none pr-3 text-primary uppercase">
                      I
                    </span>
                    n crowded digital feeds, attention is transient. Monolithic physical signs and precision retail fit-outs build subconscious institutional trust that transient pixels cannot replicate.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="text-muted-foreground/80">
                  By <strong className="text-foreground font-semibold">{featuredArticle.author}</strong> // Principal Architect
                </div>

                <Link
                  href={`/busimag/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-purple-50 text-purple-950 font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-purple-950/40"
                >
                  <span>Read Full Cover Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-950" />
                </Link>
              </div>
            </div>

            {/* Right Asymmetrical Cover Art */}
            <div className="lg:col-span-6 relative overflow-hidden border border-border bg-card min-h-[380px] lg:min-h-[460px] group">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="px-3 py-1 bg-popover/80 border border-border backdrop-blur-md">
                  FIG 1.1 // RETAIL PERMANENCE STUDY
                </span>
                <span className="text-muted-foreground font-bold">4.8X TRUST MULTIPLIER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FILTER & SEARCH CONTROL LEDGER
         ========================================================================= */}
      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Monospaced Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[10px] text-primary uppercase tracking-widest mr-2">
                // FILTER DESK:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 uppercase tracking-wider transition-colors cursor-pointer text-[11px] ${
                    selectedCategory === cat
                      ? 'bg-secondary text-foreground font-bold border border-purple-400'
                      : 'bg-secondary/40 text-muted-foreground/70 hover:text-foreground border border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Industrial Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-primary absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="SEARCH LEDGERS & PAPERS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border text-xs text-foreground placeholder:text-primary/40 focus:outline-none focus:border-purple-400 font-mono"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ASYMMETRICAL EDITORIAL ESSAYS & FIELD NOTES FEED
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest">
                // PEER-REVIEWED FIELD NOTES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                Technical Archives
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground/80 max-w-sm">
              Direct dispatches from our manufacturing floor and software sprint lines.
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center text-xs font-mono text-primary border border-border bg-card">
              NO ARCHIVES FOUND MATCHING SEARCH QUERY.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-primary transition-colors group"
                >
                  <div>
                    {/* Header Strip */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center justify-between text-[11px] font-mono text-primary border-b border-border pb-3">
                        <span className="px-2.5 py-0.5 bg-secondary border border-border text-muted-foreground uppercase">
                          {article.category}
                        </span>
                        <span>{article.date} &middot; {article.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-bold uppercase text-foreground leading-tight font-sans group-hover:text-muted-foreground transition-colors">
                        <Link href={`/busimag/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Image Box */}
                    <div className="relative h-60 overflow-hidden bg-secondary/30 border-y border-border">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="p-6 bg-background flex items-center justify-between font-mono text-xs">
                    <span className="text-muted-foreground/80 text-[11px]">
                      Desk: <strong className="text-muted-foreground">{article.author}</strong>
                    </span>

                    <Link
                      href={`/busimag/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground uppercase tracking-wider text-xs transition-colors"
                    >
                      <span>Read Paper</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          4. BOTTOM CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 sm:p-16 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                PROPRIETARY ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Deploy these engineering blueprints for your brand.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Consult with our fabrication directors and software architects in Noida Sector 63 or Gurugram.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/grow-with-us"
                className="px-8 py-4 bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>Let&apos;s grow &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
