import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Gate() {
  // Parallax motion setup
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 120, damping: 20 })
  const smy = useSpring(my, { stiffness: 120, damping: 20 })

  const rotateY = useTransform(smx, [-50, 50], [8, -8])
  const rotateX = useTransform(smy, [-50, 50], [-8, 8])
  const translateX = useTransform(smx, [-50, 50], [-8, 8])
  const translateY = useTransform(smy, [-50, 50], [-4, 4])

  const containerRef = useRef(null)

  // Ambient chime via WebAudio (no asset files)
  const audioCtxRef = useRef(null)
  const ensureAudio = () => {
    if (!audioCtxRef.current) {
      try {
        const AC = window.AudioContext || window.webkitAudioContext
        audioCtxRef.current = AC ? new AC() : null
      } catch (e) {
        // ignore if not supported
      }
    }
    return audioCtxRef.current
  }

  const playChime = (freq = 660) => {
    const ctx = ensureAudio()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    // soft shimmer via subtle vibrato
    lfo.type = 'sine'
    lfo.frequency.setValueAtTime(6, now)
    lfoGain.gain.setValueAtTime(5, now)
    lfo.connect(lfoGain)
    lfoGain.connect(osc.frequency)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.04)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    lfo.start(now)
    osc.stop(now + 0.62)
    lfo.stop(now + 0.62)
  }

  // Track mouse for parallax
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handle = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      mx.set(Math.max(-80, Math.min(80, x)))
      my.set(Math.max(-80, Math.min(80, y)))
    }
    el.addEventListener('mousemove', handle)
    return () => el.removeEventListener('mousemove', handle)
  }, [mx, my])

  return (
    <div className="relative min-h-screen w-full overflow-hidden" ref={containerRef}>
      {/* Split realms background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Dev Realm */}
        <div className="relative h-full w-full bg-gradient-to-br from-sky-200 via-sky-300 to-indigo-300 dark:from-sky-900 dark:via-indigo-900 dark:to-indigo-950">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35)_0%,transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.35)_0%,transparent_45%)]" />
        </div>
        {/* Dream Realm */}
        <div className="relative h-full w-full bg-gradient-to-bl from-rose-200 via-violet-300 to-purple-300 dark:from-fuchsia-900 dark:via-violet-950 dark:to-purple-950">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.35)_0%,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.35)_0%,transparent_45%)]" />
        </div>
      </div>

      {/* Ethereal mist overlay - does not block interaction */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.0)_60%)] mix-blend-screen" />

      {/* Central Fantasy Gate with subtle parallax */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative flex flex-col items-center will-change-transform"
        >
          {/* Outer rune ring */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[22rem] w-[22rem] rounded-full border border-white/40 backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-[0_0_120px_rgba(99,102,241,0.35)]"
          >
            {/* rotating runes */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{
                maskImage:
                  'radial-gradient(circle, transparent 64%, black 65%)',
                WebkitMaskImage:
                  'radial-gradient(circle, transparent 64%, black 65%)',
                x: translateX,
                y: translateY,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.55),rgba(168,85,247,0.55),rgba(56,189,248,0.55))] opacity-70" />
            </motion.div>

            {/* inner glow pulse */}
            <motion.div
              aria-hidden
              className="absolute inset-6 rounded-full border border-white/30"
              animate={{ boxShadow: [
                '0 0 60px rgba(56,189,248,0.35)',
                '0 0 90px rgba(168,85,247,0.45)',
                '0 0 60px rgba(56,189,248,0.35)'
              ]}}
              transition={{ duration: 3.6, repeat: Infinity }}
            />

            {/* Gate title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-slate-900 dark:text-white drop-shadow"
              >
                The Split-Realm Gate
              </motion.h1>
            </div>
          </motion.div>

          {/* Realm choices */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <Link
              to="/dev"
              className="group rounded-2xl px-6 py-4 font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-transform hover:-translate-y-0.5"
              onMouseEnter={() => playChime(660)}
            >
              <div className="flex items-center justify-between">
                <span>Enter the Workshop</span>
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="opacity-0 group-hover:opacity-100"
                >
                  →
                </motion.span>
              </div>
              <p className="mt-1 text-sm/relaxed opacity-80">Craft, code, and ship in the Dev Realm.</p>
            </Link>

            <Link
              to="/dream"
              className="group rounded-2xl px-6 py-4 font-semibold bg-white/80 text-slate-900 dark:bg-slate-800/80 dark:text-white border border-white/20 backdrop-blur shadow-[0_20px_60px_rgba(99,102,241,0.35)] transition-transform hover:-translate-y-0.5"
              onMouseEnter={() => playChime(528)}
            >
              <div className="flex items-center justify-between">
                <span>Enter the Dream Atlas</span>
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="opacity-0 group-hover:opacity-100"
                >
                  →
                </motion.span>
              </div>
              <p className="mt-1 text-sm/relaxed opacity-80">Wander interactive worlds and myths.</p>
            </Link>
          </div>

          {/* floating particles */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  x: translateX,
                  y: translateY,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
