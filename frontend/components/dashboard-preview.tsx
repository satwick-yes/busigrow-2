import { Button } from "@/components/ui/button"
export function DashboardPreview() {
  return (
    <section className="relative pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        {/* Dashboard Interface Mockup */}
        <div className="relative glass-card rounded-lg shadow-lg overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="text-foreground font-light">Brillance</div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm font-light text-muted-foreground">Account</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full border border-white/30"></div>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-white/20 border-r border-white/20 p-4">
              <nav className="space-y-2">
                <div className="text-xs font-light text-muted-foreground uppercase tracking-wide mb-3">Navigation</div>
                {["Home", "Customers", "Billing", "Schedules", "Invoices", "Products"].map((item) => (
                  <div key={item} className="text-sm font-light text-slate-700 py-1 hover:text-foreground cursor-pointer transition-colors">
                    {item}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-light text-foreground">Schedules</h2>
                <Button className="bg-primary hover:bg-primary text-white font-light text-sm shadow-md rounded-full px-6">Create schedule</Button>
              </div>

              {/* Table Mockup */}
              <div className="glass-card rounded-lg overflow-hidden">
                <div className="grid grid-cols-6 gap-4 p-4 bg-white/40 border-b border-white/20 text-sm font-light text-slate-600">
                  <div>Customer</div>
                  <div>Status</div>
                  <div>Products</div>
                  <div>Total</div>
                  <div>Start date</div>
                  <div>End date</div>
                </div>

                {/* Table Rows */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b border-white/10 text-sm font-light text-slate-700 last:border-b-0 transition-colors hover:bg-white/20 cursor-default">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-200 rounded-full border border-white/40"></div>
                      <span>Hypernise</span>
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-xs border ${
                          i % 3 === 0
                            ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
                            : i % 3 === 1
                              ? "bg-primary/10 text-blue-700 border-blue-500/20"
                              : "bg-slate-500/10 text-slate-700 border-slate-500/20"
                        }`}
                      >
                        {i % 3 === 0 ? "Complete" : i % 3 === 1 ? "Active" : "Draft"}
                      </span>
                    </div>
                    <div className="text-muted-foreground">Platform access fee</div>
                    <div className="text-foreground">$3,862.32</div>
                    <div className="text-muted-foreground">1 Aug 2024</div>
                    <div className="text-muted-foreground">10 Jun 2024</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
