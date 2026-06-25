import { motion } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'
import { cn } from '../utils/helpers'
import type { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  strength = 0.25,
  type = 'button',
  disabled,
  onClick,
}: MagneticButtonProps) {
  const { ref, position } = useMagnetic(strength)

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium transition-colors',
        className,
      )}
      style={{ x: position.x, y: position.y }}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  )
}
