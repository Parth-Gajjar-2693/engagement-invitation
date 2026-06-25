import { motion } from 'framer-motion'
import { cn } from '../utils/helpers'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <motion.div
      className={cn('rounded-3xl glass luxury-shadow p-6 md:p-8', className)}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 40px rgba(212,175,55,0.12)' } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
