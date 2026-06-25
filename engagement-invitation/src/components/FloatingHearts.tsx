import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMagnetic'

interface Heart {
  id: number
  x: number
  y: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const spawnHeart = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random()
    setHearts((prev) => [...prev.slice(-12), { id, x, y }])
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id))
    }, 2000)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      spawnHeart(e.clientX, e.clientY)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [spawnHeart])

  if (!isDesktop) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute text-lg"
            style={{ left: heart.x - 10, top: heart.y - 10 }}
            initial={{ opacity: 1, scale: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -80 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
