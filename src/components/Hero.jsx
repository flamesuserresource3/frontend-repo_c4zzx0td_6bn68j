import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 from-white to-transparent dark:from-slate-950 dark:to-transparent bg-gradient-to-b pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow"
        >
          Dreamer • Developer • Storyteller
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300"
        >
          Building playful, modern experiences across tech and imagination.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="rounded-2xl px-6 py-3 font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-glowBlue hover:-translate-y-0.5"
          >
            Enter the Workshop
          </a>
          <a
            href="#dreams"
            className="rounded-2xl px-6 py-3 font-semibold bg-white/80 text-slate-900 dark:bg-slate-800/80 dark:text-white border border-white/20 backdrop-blur shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-glowViolet hover:-translate-y-0.5"
          >
            Enter the Dream Atlas
          </a>
        </motion.div>
      </div>
    </section>
  )
}
