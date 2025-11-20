import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2 } from 'lucide-react'
import { useCart } from './CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, subtotal, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const checkout = async () => {
    setLoading(true)
    setMessage('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        items: items.map((i) => ({
          product_id: i.id,
          title: i.title,
          price: i.price,
          quantity: i.quantity,
          image: i.image,
        })),
        subtotal: Number(subtotal.toFixed(2)),
        shipping: 0,
        total: Number(subtotal.toFixed(2)),
      }
      const res = await fetch(`${base}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Checkout failed (${res.status})`)
      const data = await res.json()
      setMessage(`Order placed ✔ Total $${data.total}. Thank you!`)
      clearCart()
    } catch (e) {
      setMessage(e.message || 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-[90%] sm:w-[420px] z-50 bg-slate-900 border-l border-white/10 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-white font-semibold">Your Cart</h3>
              <button onClick={onClose} className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-3 max-h-[60vh] overflow-auto">
              {items.length === 0 ? (
                <p className="text-blue-100/80">Your cart is empty.</p>
              ) : (
                items.map((i) => (
                  <div key={i.id} className="flex gap-3 items-center bg-white/5 border border-white/10 rounded-xl p-3">
                    <img src={i.image} alt={i.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium truncate">{i.title}</div>
                      <div className="text-blue-100/80 text-sm">Qty {i.quantity} · ${i.price}</div>
                    </div>
                    <button onClick={() => removeFromCart(i.id)} className="p-2 text-red-300 hover:text-red-200 hover:bg-white/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-auto p-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-white">
                <span className="text-blue-100/80">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              {message && <div className="text-sm text-blue-100/90 bg-white/5 border border-white/10 rounded-lg p-2">{message}</div>}
              <button
                onClick={checkout}
                disabled={items.length === 0 || loading}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-60"
              >
                {loading ? 'Processing…' : 'Checkout'}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
