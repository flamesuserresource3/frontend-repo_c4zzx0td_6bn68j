import { motion } from 'framer-motion'
import { Rocket, Code2, Sparkles } from 'lucide-react'

const Card = ({ icon: Icon, title, desc, glow }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.25, ease: 'easeInOut' }}
    className={`rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 border border-white/20 backdrop-blur shadow-[0_0_30px_rgba(0,0,0,0.15)] ${glow}`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-white/10">
        <Icon className="w-5 h-5 text-slate-900 dark:text-white" />
      </div>
      <h3 className="text-slate-900 dark:text-white font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{desc}</p>
  </motion.div>
)

export default function ShowcaseCards() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={Rocket}
          title="Fast Prototypes"
          desc="Ship interactive ideas quickly with modern tooling and smooth motion."
          glow="hover:shadow-glowBlue"
        />
        <Card
          icon={Code2}
          title="Clean Code"
          desc="Type-safe, accessible components with a focus on clarity and craft."
          glow="hover:shadow-glowGold"
        />
        <Card
          icon={Sparkles}
          title="Playful UX"
          desc="Subtle glows, shimmers, and micro-interactions that feel alive."
          glow="hover:shadow-glowViolet"
        />
      </div>
    </section>
  )
}
