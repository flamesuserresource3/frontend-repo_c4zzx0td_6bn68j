import { motion } from 'framer-motion'
import Footer from './Footer'

export default function Dream() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-100 dark:from-slate-950 dark:to-violet-950">
      <section className="relative max-w-5xl mx-auto px-6 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Dream Atlas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300"
        >
          A growing archive of interactive worlds, fragments, and visual experiments. More realms unlock soon.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="aspect-[4/3] rounded-2xl bg-white/70 dark:bg-white/10 border border-white/20 backdrop-blur hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-shadow"
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
