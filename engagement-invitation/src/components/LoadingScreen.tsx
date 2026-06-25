import { motion } from 'framer-motion'
import { COUPLE } from '../constants/content'

interface LoadingScreenProps {
  progress: number
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative mb-8"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/30 bg-white/60 backdrop-blur-sm">
          <span className="font-display text-3xl text-gold" style={{ fontFamily: 'var(--font-display)' }}>
            {COUPLE.initials}
          </span>
        </div>
        <motion.span
          className="absolute -right-1 -top-1 text-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ❤️
        </motion.span>
      </motion.div>

      <p className="mb-6 font-display text-xl tracking-widest text-stone-600" style={{ fontFamily: 'var(--font-display)' }}>
        Loading invitation
      </p>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-beige">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      <p className="mt-3 text-sm text-stone-400">{Math.round(progress)}%</p>
    </motion.div>
  )
}
