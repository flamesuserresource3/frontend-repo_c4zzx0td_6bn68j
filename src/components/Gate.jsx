import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Gate() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Split realms */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full bg-gradient-to-br from-sky-200 via-sky-300 to-indigo-300 dark:from-sky-800 dark:via-sky-900 dark:to-indigo-900" />
        <div className="h-full w-full bg-gradient-to-bl from-fuchsia-200 via-violet-300 to-purple-300 dark:from-fuchsia-900 dark:via-violet-900 dark:to-purple-900" />
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%)]" />

      {/* Portal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-56 w-56 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.45)] border border-white/30 flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ boxShadow: [
                '0 0 40px rgba(56,189,248,0.45)',
                '0 0 60px rgba(168,85,247,0.55)',
                '0 0 40px rgba(56,189,248,0.45)'
              ]}}
              transition={{ duration: 3.2, repeat: Infinity }}
            />
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-slate-900 dark:text-white font-semibold tracking-wide"
            >
              Split Realm Gate
            </motion.span>
          </motion.div>

          {/* Call-to-realms */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/dev"
              className="rounded-2xl px-6 py-3 font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-[0_10px_30px_rgba(2,6,23,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Enter the Workshop
            </Link>
            <Link
              to="/dream"
              className="rounded-2xl px-6 py-3 font-semibold bg-white/80 text-slate-900 dark:bg-slate-800/80 dark:text-white border border-white/20 backdrop-blur shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Enter the Dream Atlas
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
