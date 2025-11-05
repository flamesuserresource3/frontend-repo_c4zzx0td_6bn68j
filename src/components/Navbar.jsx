import { motion } from 'framer-motion'
import { Home, Code, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
          <Sparkles className="w-5 h-5 text-violet-500" />
          <span className="font-semibold tracking-tight">Kevin J.G.</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
          <a href="#home" className="inline-flex items-center gap-2 hover:text-violet-500 transition-colors">
            <Home className="w-4 h-4" /> Home
          </a>
          <a href="#work" className="inline-flex items-center gap-2 hover:text-sky-500 transition-colors">
            <Code className="w-4 h-4" /> Work
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
