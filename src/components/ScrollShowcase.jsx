import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-driven stage where hero merch (shoes, tees, bags) visibly travels
// from the left "New Arrivals" area to the right "Trending" rail as you scroll.
export default function ScrollShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Global transforms tied to scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const railGlow = useTransform(scrollYProgress, [0, 1], [0.15, 0.35])

  // Item paths (X/Y/Rotation/Scale) for a feeling of depth and motion
  const shoeX = useTransform(scrollYProgress, [0, 1], ['-40%', '30%'])
  const shoeY = useTransform(scrollYProgress, [0, 1], ['-10%', '5%'])
  const shoeR = useTransform(scrollYProgress, [0, 1], [-12, 8])
  const shoeS = useTransform(scrollYProgress, [0, 1], [0.85, 1.05])

  const teeX = useTransform(scrollYProgress, [0, 1], ['-45%', '35%'])
  const teeY = useTransform(scrollYProgress, [0, 1], ['15%', '-5%'])
  const teeR = useTransform(scrollYProgress, [0, 1], [10, -6])
  const teeS = useTransform(scrollYProgress, [0, 1], [0.9, 1.07])

  const bagX = useTransform(scrollYProgress, [0, 1], ['-50%', '25%'])
  const bagY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const bagR = useTransform(scrollYProgress, [0, 1], [-6, 12])
  const bagS = useTransform(scrollYProgress, [0, 1], [0.95, 1.08])

  return (
    <section ref={ref} className="relative min-h-[140vh] py-24 bg-slate-950">
      {/* Ambient gradient and grid */}
      <motion.div style={{ opacity: bgOpacity }} className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.25),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[110vh] sticky top-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {/* Section header */}
          <div className="absolute inset-x-0 top-0 p-6 flex items-center justify-between">
            <motion.h2 style={{ y: titleY }} className="text-2xl sm:text-3xl font-bold text-white">
              Scroll to move items between sections
            </motion.h2>
            <div className="hidden sm:flex items-center gap-2 text-blue-100/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live motion
            </div>
          </div>

          {/* Left rail: New Arrivals */}
          <div className="absolute left-0 top-0 bottom-0 w-[22%] p-6">
            <div className="h-full rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="text-sm font-semibold text-white/90">New Arrivals</div>
              <div className="mt-2 text-xs text-blue-100/70">Shoes · Tees · Bags</div>
            </div>
          </div>

          {/* Right rail: Trending */}
          <motion.div style={{ boxShadow: railGlow.to(v => `0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(56,189,248,${v})`) }} className="absolute right-0 top-0 bottom-0 w-[22%] p-6">
            <div className="h-full rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div className="text-sm font-semibold text-white/90">Trending</div>
              <div className="mt-2 text-xs text-blue-100/70">What people love now</div>
            </div>
          </motion.div>

          {/* Motion stage canvas */}
          <div className="absolute inset-y-0 left-[22%] right-[22%]">
            {/* helper lines */}
            <div className="absolute inset-0 border-x border-dashed border-white/10" />

            {/* Shoe */}
            <motion.div
              style={{
                x: shoeX,
                y: shoeY,
                rotate: shoeR,
                scale: shoeS,
              }}
              className="absolute top-1/3 left-0 w-56 sm:w-64 md:w-72"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-blue-500/10">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                  alt="Sneaker"
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-3">
                  <div className="text-white font-semibold">AeroMesh Sneakers</div>
                  <div className="text-blue-100/80 text-sm">$129 · 4.7★</div>
                </div>
              </div>
            </motion.div>

            {/* Tee */}
            <motion.div
              style={{ x: teeX, y: teeY, rotate: teeR, scale: teeS }}
              className="absolute top-1/2 left-0 w-52 sm:w-60 md:w-64"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-cyan-500/10">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
                  alt="Tee"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="p-3">
                  <div className="text-white font-semibold">Supima Tee</div>
                  <div className="text-blue-100/80 text-sm">$39 · 4.6★</div>
                </div>
              </div>
            </motion.div>

            {/* Bag */}
            <motion.div
              style={{ x: bagX, y: bagY, rotate: bagR, scale: bagS }}
              className="absolute top-[60%] left-0 w-48 sm:w-56 md:w-60"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-emerald-500/10">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop"
                  alt="Bag"
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <div className="p-3">
                  <div className="text-white font-semibold">Everyday Pack</div>
                  <div className="text-blue-100/80 text-sm">$89 · 4.5★</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
