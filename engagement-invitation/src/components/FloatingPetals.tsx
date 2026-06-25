import { motion } from 'framer-motion'
import { useMemo } from 'react'

const PETAL_COUNT = 18

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.4,
            background: `linear-gradient(135deg, rgba(232,180,184,${petal.opacity}), rgba(248,232,238,${petal.opacity}))`,
            borderRadius: '50% 0 50% 0',
          }}
          initial={{ y: '-10vh', rotate: 0, x: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            x: [0, 30, -20, 40, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
