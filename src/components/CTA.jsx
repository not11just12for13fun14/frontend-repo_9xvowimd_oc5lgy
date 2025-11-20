import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.25),transparent_35%)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative p-10 sm:p-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay in the loop</h2>
            <p className="mt-2 text-blue-100/90 max-w-2xl">Join our newsletter for exclusive drops, member-only deals, and design stories from the team.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
