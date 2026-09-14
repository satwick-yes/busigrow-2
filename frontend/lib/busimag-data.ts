export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  color: string
  readTime: string
  date: string
  author: string
  image: string
  content: string
}

export const EDITORIAL_ARTICLES: Article[] = [
  {
    slug: "why-physical-branding-outperforms-digital",
    title: "Why physical branding still outperforms digital-only campaigns in emerging markets",
    excerpt:
      "In crowded digital feeds, attention is transient. Physical signages, high-impact retail fit-outs, and transit media build subconscious institutional trust that pixels cannot replicate.",
    category: "Offline Branding",
    color: "#a855f7",
    readTime: "5 min read",
    date: "Aug 2026",
    author: "Tanzeel Khan",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Transient Attention Trap</h2>
      <p>Digital feeds are saturated with noise. Users scroll past hundreds of sponsored posts every single day, developing instinctive ad blindness. While digital advertising excels at capturing existing intent (via search) or triggering impulse transactions, it struggles to build deep, subconscious institutional authority.</p>
      
      <h2>The Physical Anchor Effect</h2>
      <p>A monolithic 3D LED glow sign on a high-traffic arterial road, a precision-fabricated retail flagship in a prime market, or a fleet of branded commercial vehicles operating across a city creates permanent ambient visibility. To consumers, suppliers, and prospective partners, physical permanence signals that your business is legitimate, funded, and here to stay.</p>

      <blockquote>"In emerging markets, physical presence is the highest-leverage trust accelerant available to an ambitious brand."</blockquote>

      <h2>The Hybrid Advantage</h2>
      <p>The brands that win in 2026 and beyond don't treat online and offline as competing budgets. They treat offline branding as the high-trust anchor that lowers digital customer acquisition costs (CAC) and drives organic direct search volume.</p>
    `,
  },
  {
    slug: "24-hour-signage-turnaround-ncr",
    title: "Inside our 24-hour signage turnaround pipeline across Delhi NCR",
    excerpt:
      "How we centralized OEM fabrication, CNC cutting, and nighttime ground deployment to eliminate standard 2-week vendor bottlenecks for fast-moving retail brands.",
    category: "Operations & OEM",
    color: "#a855f7",
    readTime: "4 min read",
    date: "Aug 2026",
    author: "Ops Desk",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Why Traditional Signage Vendors Take 2 Weeks</h2>
      <p>The traditional outdoor fabrication industry is plagued by fragmented subcontracting. A design agency passes files to a print broker, who subcontracts to a sheet metal shop, who then hires freelance night fitters. Every handoff introduces latency, errors, and zero accountability.</p>

      <h2>Our Integrated Fabrication Architecture</h2>
      <p>By owning in-house CNC routers, laser cutters, UV flatbed printers, and dedicated full-time ground installation crews in Noida and Gurugram, Busigrow compresses the entire pipeline from approved vector proof to powered glow sign into a single 24 to 48-hour sprint.</p>

      <blockquote>"Speed in retail rollout is directly correlated with rental revenue capture."</blockquote>

      <h2>Nighttime Deployment Protocol</h2>
      <p>Our crews deploy between 11:00 PM and 6:00 AM. When mall or high street shutters open the following morning, the storefront is transformed with pristine illumination and zero business disruption.</p>
    `,
  },
  {
    slug: "automating-whatsapp-lead-qualification",
    title: "How to automate 80% of WhatsApp sales conversations without sounding like a robot",
    excerpt:
      "The architecture behind high-converting WhatsApp workflows: instant lead triage, dynamic proposal PDFs, and smart human handoffs for high-ticket deals.",
    category: "Automation",
    color: "#8b5cf6",
    readTime: "6 min read",
    date: "Jul 2026",
    author: "Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Problem with Generic Chatbots</h2>
      <p>Traditional WhatsApp chatbots infuriate high-intent buyers with rigid, robotic number-matching menus ("Press 1 for Sales, Press 2 for Support"). When prospective clients encounter friction, they abandon the chat immediately.</p>

      <h2>The Conversational Triage Architecture</h2>
      <p>Our automation engines use natural language intent classification to parse incoming inquiries in under 3 seconds. The system confirms project scope, determines budget tier, and instantly generates a personalized PDF estimate before a human rep even opens the dashboard.</p>

      <blockquote>"Automate the repetitive discovery phase so your sales directors only speak with pre-qualified decision makers."</blockquote>
    `,
  },
  {
    slug: "modern-brand-token-architecture",
    title: "Why your agency needs a unified design token system across web and print",
    excerpt:
      "Bridging the gap between Figma hex codes and CMYK panelling to ensure perfect brand consistency from phone screens to highway hoardings.",
    category: "Design Systems",
    color: "#8b5cf6",
    readTime: "7 min read",
    date: "Jul 2026",
    author: "Creative Team",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Disconnect Between Pixels and Print</h2>
      <p>Most brand guidelines fail the moment they leave Figma. RGB hues that pop on Retina screens look washed out on matte vinyl hoardings, and intricate thin serifs turn invisible at 60 mph on highway transit banners.</p>

      <h2>A Unified Token System</h2>
      <p>At Busigrow, every brand identity is engineered with dual-substrate design tokens: tested against sRGB, P3 digital profiles, and certified CMYK / Pantone spot color formulations for physical substrates.</p>
    `,
  },
]

export const CATEGORIES = ["All", "Offline Branding", "Automation", "Design Systems", "Operations & OEM"]
