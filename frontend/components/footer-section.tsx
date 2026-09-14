import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-900/40">
          {/* Brand & Factory Address */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-md overflow-hidden border border-border bg-secondary flex items-center justify-center shadow-sm">
                <img src="/logo.jpg" alt="Busigrow" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                  Busigrow
                </span>
                <span className="text-[10px] text-primary font-mono tracking-wide uppercase">
                  Manufacturing Plant &amp; Digital Engineering
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm font-light">
              Integrated commercial growth systems for scaling brands across Delhi NCR. In-house signage fabrication, sub-second web platforms, and automated WhatsApp CRM pipelines.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground/80 pt-1 font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Plant: Sector 63, Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:team@busigrow.com" className="hover:text-foreground transition-colors">
                  team@busigrow.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Core Capabilities */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                Core Capabilities
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/offline" className="hover:text-foreground transition-colors">
                    Offline (3D Signage &amp; Fabrication)
                  </Link>
                </li>
                <li>
                  <Link href="/online" className="hover:text-foreground transition-colors">
                    Online (Digital Systems &amp; Web)
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-foreground transition-colors">
                    Automations (Workflow &amp; AI Agents)
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="hover:text-foreground transition-colors">
                    Ready-Made Brands &amp; Domains
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technical Journal */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                BizMag &amp; Research
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/busimag" className="hover:text-foreground transition-colors">
                    Busimag Journal
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/why-physical-branding-outperforms-digital" className="hover:text-foreground transition-colors">
                    Storefront Physical ROI
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/24-hour-signage-turnaround-ncr" className="hover:text-foreground transition-colors">
                    24-Hour Signage Turnaround
                  </Link>
                </li>
                <li>
                  <Link href="/busimag/automating-whatsapp-lead-qualification" className="hover:text-foreground transition-colors">
                    WhatsApp Lead Automations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Support */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                Company &amp; Growth
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/grow-with-us" className="hover:text-foreground font-semibold text-primary transition-colors">
                    Grow With Us &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Schedule Plant Visit
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Direct WhatsApp Desk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary/80 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Busigrow Integrated Systems Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Plant: Sector 63, Noida &middot; Delhi NCR</span>
            <Link href="/grow-with-us" className="hover:text-foreground transition-colors">
              grow with us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
