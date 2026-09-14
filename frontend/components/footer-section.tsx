import Link from "next/link"
import { ArrowUpRight, Mail, MessageSquare, MapPin, Sparkles } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-purple-200/50 dark:border-purple-900/40 bg-background text-foreground transition-colors relative overflow-hidden">
      {/* Ambient subtle glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-200/40 dark:border-purple-900/40">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-purple-500/40 flex items-center justify-center font-normal text-xs shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
              </div>
              <span className="font-normal text-lg tracking-tight text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Busigrow
              </span>
            </Link>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-sm">
              Integrated growth systems for scaling businesses. Physical branding, software engineering, and multi-channel campaign automation.
            </p>
            <div className="space-y-2 text-xs font-mono font-light text-muted-foreground pt-2">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <MapPin className="w-3.5 h-3.5" />
                <span>Noida Sector 63 &middot; Gurugram Cyber City &middot; South Delhi</span>
              </div>
              <div>
                <a
                  href="mailto:team@busigrow.com"
                  className="inline-flex items-center gap-2 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-500" />
                  <span>team@busigrow.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Solutions */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-light">
                Solutions
              </p>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/online" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Online Systems
                  </Link>
                </li>
                <li>
                  <Link href="/offline" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Offline Fabrication
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Workflow Automations
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Turnkey Ventures
                  </Link>
                </li>
              </ul>
            </div>

            {/* Editorial */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-light">
                BusiMag
              </p>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/busimag" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Journal Index
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/why-physical-branding-outperforms-digital" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Physical vs Digital ROI
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/24-hour-signage-turnaround-ncr" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    24-Hour Signage SLA
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/automating-whatsapp-lead-qualification" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    WhatsApp Automation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-light">
                Company
              </p>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    About Busigrow
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    Project Scoping
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    <span>Direct WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-light text-muted-foreground">
          <p>© {new Date().getFullYear()} Busigrow Systems Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            <span>NCR Factory & Engineering Active</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
