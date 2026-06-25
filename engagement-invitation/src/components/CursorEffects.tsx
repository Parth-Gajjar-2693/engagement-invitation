import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMagnetic'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (!isDesktop) return
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: pos.x,
        top: pos.y,
        background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
      }}
      animate={{ left: pos.x, top: pos.y }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    />
  )
}

export function MouseTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (!isDesktop) return
    let id = 0
    const handleMove = (e: MouseEvent) => {
      id += 1
      const currentId = id
      setTrail((prev) => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id: currentId }])
      setTimeout(() => {
        setTrail((prev) => prev.filter((p) => p.id !== currentId))
      }, 600)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-gold/40"
          style={{ left: point.x, top: point.y }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </div>
  )
}
