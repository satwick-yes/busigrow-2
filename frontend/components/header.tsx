import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full glass-effect sticky top-0 z-50">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <div className="text-foreground font-light text-lg tracking-wide">Brillance</div>
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-foreground hover:text-foreground text-sm font-light transition-colors">Products</button>
              <button className="text-foreground hover:text-foreground text-sm font-light transition-colors">Pricing</button>
              <button className="text-foreground hover:text-foreground text-sm font-light transition-colors">Docs</button>
            </div>
          </div>
          <Button variant="ghost" className="text-foreground hover:bg-white/20 font-light">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
