import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function ScrollProgressBar() {
  const scaleX = useMotionValue(0)
  const smoothScale = useSpring(scaleX, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scaleX.set(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scaleX])

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-gold/80 via-gold to-gold-light"
      style={{ scaleX: smoothScale, width: '100%' }}
    />
  )
}
