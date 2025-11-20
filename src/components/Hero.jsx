import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur text-xs text-blue-100 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 50k+ shoppers
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Your premium destination for modern shopping
          </h1>
          <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
            Discover curated collections, seamless checkout, and delightful animations — all in one professional shopping experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
              Shop now
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors">
              Explore features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
