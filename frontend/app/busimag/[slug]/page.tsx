import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import { EDITORIAL_ARTICLES } from "@/lib/busimag-data"
import { ArrowLeft, Clock, ArrowRight, MessageSquare, Sparkles } from "lucide-react"

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
    <div className="w-full min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-300">
      <Navbar />

      {/* Ambient Radial Background Glows */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <main className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="pt-4 pb-8">
          <Link
            href="/busimag"
            className="inline-flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors p-2 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Field Notes</span>
          </Link>
        </div>

        <article className="space-y-8">
          {/* Header & Meta */}
          <div className="space-y-5 pb-8 border-b border-purple-200/60 dark:border-purple-900/40">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-purple-700/90 dark:text-purple-300/90">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-semibold shadow-sm">
                {article.category}
              </span>
              <span>&middot;</span>
              <span>{article.date}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              {article.title}
            </h1>

            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-2">
              <span>By <strong className="text-foreground">{article.author}</strong> &middot; Busigrow Editorial Desk (NCR)</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-3xl overflow-hidden border border-purple-200/60 dark:border-purple-900/50 bg-secondary aspect-[16/9] shadow-[0_0_30px_rgba(139,92,246,0.15)]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-purple dark:prose-invert max-w-none text-muted-foreground leading-relaxed
              prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-purple-200/50 dark:prose-h2:border-purple-900/40 prose-h2:pb-2
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed prose-p:mb-5
              prose-ul:text-sm prose-ul:my-4 prose-li:my-1
              prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:bg-purple-50/30 dark:prose-blockquote:bg-purple-950/20 prose-blockquote:p-4 prose-blockquote:rounded-r-2xl
              prose-strong:text-foreground font-sans"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Scoping CTA */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-purple-200/60 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/70 via-card to-purple-100/40 dark:from-purple-950/40 dark:via-card dark:to-purple-900/20 text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
            <div className="space-y-2 max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Deploy this architecture for your brand
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Book a scoping session with our engineering and fabrication directors in Noida or Gurugram.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  )
}
