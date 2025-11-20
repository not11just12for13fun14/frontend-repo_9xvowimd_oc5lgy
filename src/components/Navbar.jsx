import { useState } from 'react'
import { ShoppingCart, Menu, Search, Heart, User } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center font-bold text-white">S</div>
              <span className="text-white font-semibold text-lg tracking-tight">ShopSphere</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink>New</NavLink>
            <NavLink>Men</NavLink>
            <NavLink>Women</NavLink>
            <NavLink>Accessories</NavLink>
            <NavLink>Sale</NavLink>
          </div>

          <div className="flex items-center gap-4 text-white">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur border border-white/10 transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm text-slate-200">Search</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Wishlist">
              <Heart className="w-6 h-6" />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Cart">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-blue-500 text-white rounded-full px-1.5 py-0.5">3</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Account">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur p-4 space-y-3 text-slate-200">
            <NavLink>New</NavLink>
            <NavLink>Men</NavLink>
            <NavLink>Women</NavLink>
            <NavLink>Accessories</NavLink>
            <NavLink>Sale</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
