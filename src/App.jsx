import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrollShowcase from './components/ScrollShowcase'
import Catalog from './components/Catalog'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_25%),radial-gradient(circle_at_90%_0%,rgba(59,130,246,0.15),transparent_25%)]" />

      <Navbar />
      <Hero />
      <Features />
      <ScrollShowcase />
      <Catalog />
      <CTA />

      <footer className="relative border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-12 text-blue-100/80 flex items-center justify-between">
          <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
          <div className="text-sm">Designed with love · Animations by Framer Motion</div>
        </div>
      </footer>
    </div>
  )
}

export default App
