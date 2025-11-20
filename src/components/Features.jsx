import { motion } from 'framer-motion'
import { ShieldCheck, Truck, CreditCard, Sparkles } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Secure payments', desc: 'Bank-grade security with instant refunds and buyer protection.' },
  { icon: Truck, title: 'Fast delivery', desc: 'Express shipping options with real-time tracking and alerts.' },
  { icon: CreditCard, title: 'One-tap checkout', desc: 'Save your details securely and checkout in seconds.' },
  { icon: Sparkles, title: 'Curated picks', desc: 'Handpicked products with top ratings and reviews.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Everything you need to shop with confidence
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-blue-100"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-500/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="text-blue-100/80 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
