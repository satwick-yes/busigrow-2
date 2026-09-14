import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { EDITORIAL_ARTICLES } from "@/lib/busimag-data"
import { ArrowLeft, Clock, ArrowRight, MessageSquare, BookOpen, Terminal, Sparkles } from "lucide-react"

export async function generateStaticParams() {
  return EDITORIAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = EDITORIAL_ARTICLES.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans selection:bg-purple-600 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* Top Reading Tracker Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50">
        <div className="h-full bg-gradient-to-r from-purple-500 to-violet-400 w-full" />
      </div>

      <main className="pt-28 sm:pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link Strip */}
        <div className="pt-2 pb-8 border-b border-border flex items-center justify-between font-mono text-xs text-primary">
          <Link
            href="/busimag"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Back to Editorial Desk</span>
          </Link>

          <span className="hidden sm:inline text-primary/70">
            DISPATCH // NOIDA SECTOR 63 &middot; GURUGRAM
          </span>
        </div>

        <article className="space-y-10 pt-8">
          {/* Header & Meta */}
          <div className="space-y-6 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-primary">
              <span className="px-3 py-1 bg-secondary border border-border text-muted-foreground uppercase tracking-widest font-semibold">
                {article.category}
              </span>
              <span>&middot;</span>
              <span>{article.date}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.98]">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-muted-foreground/80 pt-2 border-t border-purple-900/40">
              <span>By <strong className="text-muted-foreground">{article.author}</strong> // Principal Architect</span>
              <span className="text-primary">DOCUMENT ID // BZ-2026-{article.slug.toUpperCase().slice(0, 8)}</span>
            </div>
          </div>

          {/* High-Contrast Grayscale Cover Image */}
          <div className="border border-border bg-card overflow-hidden aspect-[16/9] relative group">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-muted-foreground bg-popover/80 px-3 py-1.5 border border-border backdrop-blur-md">
              <span>FIG // FIELD AUDIT SPECIMEN</span>
              <span className="text-muted-foreground font-bold">VERIFIED ENGINEERING PROTOCOL</span>
            </div>
          </div>

          {/* Article Editorial Typography Content */}
          <div
            className="prose prose-invert max-w-none text-muted-foreground leading-relaxed font-sans
              prose-headings:text-foreground prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-muted-foreground
              prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light
              prose-ul:text-sm prose-ul:my-4 prose-li:my-1.5 prose-li:font-light
              prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-secondary/20 prose-blockquote:p-6 prose-blockquote:border-y prose-blockquote:border-r prose-blockquote:border-border
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Scoping CTA */}
          <div className="mt-16 p-8 sm:p-12 border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-lg">
              <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-secondary border border-border text-muted-foreground">
                FABRICATION DIRECTIVE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Deploy this architecture for your brand.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Consult with our engineering directors and software architects in Noida Sector 63 or Gurugram.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-purple-50 text-purple-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-xl"
              >
                <span>Let&apos;s grow &rarr;</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  )
}
