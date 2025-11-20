import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingBag } from 'lucide-react'

const fallbackProducts = [
  { id: '1', title: 'AeroMesh Sneakers', price: 129, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop', rating: 4.7, tag: 'New' },
  { id: '2', title: 'Minimalist Backpack', price: 89, image: 'https://images.unsplash.com/photo-1581910245118-c0103c2fa995?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvTWVzaCUyMFNuZWFrZXJzfGVufDB8MHx8fDE3NjM2Njg2NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.6, tag: 'Hot' },
  { id: '3', title: 'Wireless Headphones', price: 159, image: 'https://images.unsplash.com/photo-1581910245118-c0103c2fa995?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvTWVzaCUyMFNuZWFrZXJzfGVufDB8MHx8fDE3NjM2Njg2NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.8, tag: 'Sale' },
  { id: '4', title: 'Smartwatch Pro', price: 199, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop', rating: 4.5, tag: 'New' },
]

export default function Catalog() {
  const [products, setProducts] = useState(fallbackProducts)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a full app, fetch from backend database
        // const base = import.meta.env.VITE_BACKEND_URL
        // const res = await fetch(`${base}/api/products`)
        // const data = await res.json()
        // setProducts(data)
      } catch (e) {
        // silent fallback to static
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="catalog" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured products</h2>
          <a href="#" className="text-blue-300 hover:text-white transition-colors">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-white border border-white/10">{p.tag}</div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <div className="flex items-center gap-1 text-amber-300 text-sm mt-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-blue-100/80">{p.rating}</span>
                    </div>
                  </div>
                  <div className="text-white font-bold">${'{'}p.price{'}'}</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow">
                    <ShoppingBag className="w-4 h-4" /> Add to cart
                  </button>
                  <button className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/15">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
