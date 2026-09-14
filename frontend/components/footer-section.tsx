import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-purple-100 dark:border-purple-950 bg-purple-50/30 dark:bg-[#090414] text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-100 dark:border-purple-900/50">
          {/* Brand & Factory Address */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-purple-200 dark:border-purple-800 bg-purple-950 flex items-center justify-center shadow-sm">
                <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">
                  Busigrow
                </span>
                <span className="text-[10px] text-purple-600 dark:text-purple-400 font-medium tracking-wide uppercase">
                  Manufacturing Plant &amp; Digital Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-purple-200/70 leading-relaxed max-w-sm">
              Integrated commercial growth systems for scaling brands across Delhi NCR. In-house signage fabrication, sub-second web platforms, and automated WhatsApp CRM pipelines.
            </p>
            <div className="space-y-2 text-xs text-zinc-600 dark:text-purple-200/70 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Plant: Sector 63, Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-purple-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <a href="mailto:team@busigrow.com" className="hover:text-purple-600 transition-colors">
                  team@busigrow.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Core Capabilities */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-950 dark:text-purple-300">
                Core Capabilities
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-purple-200/70">
                <li>
                  <Link href="/offline" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    offline pages (3D Signage)
                  </Link>
                </li>
                <li>
                  <Link href="/online" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    online pages (Next.js Apps)
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    automation (WhatsApp CRM)
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    campaigns (Turnkey Ventures)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technical Journal */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-950 dark:text-purple-300">
                BizMag &amp; Case Studies
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-purple-200/70">
                <li>
                  <Link href="/busimag" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    BizMag Editorial
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/why-physical-branding-outperforms-digital" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    Storefront Physical ROI
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/24-hour-signage-turnaround-ncr" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    24-Hour Signage SLA
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/automating-whatsapp-lead-qualification" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    WhatsApp Lead Automations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Support */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-950 dark:text-purple-300">
                Company &amp; Growth
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-purple-200/70">
                <li>
                  <Link href="/about" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    about Busigrow
                  </Link>
                </li>
                <li>
                  <Link href="/grow-with-us" className="hover:text-purple-700 dark:hover:text-white font-medium transition-colors text-purple-600 dark:text-purple-400">
                    grow with us &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    Schedule Plant Visit
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 dark:hover:text-white transition-colors">
                    Direct WhatsApp Desk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-purple-300/60">
          <div>
            &copy; {new Date().getFullYear()} Busigrow Integrated Systems Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Plant: Sector 63, Noida &middot; Gurugram &middot; Delhi NCR</span>
            <Link href="/grow-with-us" className="hover:text-purple-700 dark:hover:text-white transition-colors">
              grow with us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
