import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations'

interface SectionHeadingProps {
  subtitle?: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ subtitle, title, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {subtitle && (
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">{subtitle}</p>
      )}
      <h2
        className="font-display text-4xl font-light text-stone-800 md:text-5xl lg:text-6xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <div className={`mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
