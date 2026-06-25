import { motion } from 'framer-motion'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'

interface MusicButtonProps {
  isPlaying: boolean
  isMuted: boolean
  onToggle: () => void
}

export function MusicButton({ isPlaying, isMuted, onToggle }: MusicButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full glass-gold luxury-shadow"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      aria-label={isPlaying && !isMuted ? 'Mute music' : 'Play music'}
    >
      {isPlaying && !isMuted ? (
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <HiVolumeUp className="text-xl text-gold" />
        </motion.div>
      ) : (
        <HiVolumeOff className="text-xl text-stone-400" />
      )}
    </motion.button>
  )
}
