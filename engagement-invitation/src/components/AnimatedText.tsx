import { motion } from 'framer-motion'
import { characterContainer, characterChild } from '../animations'

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <motion.span
      className={className}
      variants={characterContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={characterChild}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function AnimatedHeadline({ text, className }: { text: string; className?: string }) {
  return (
    <h2 className={className} style={{ fontFamily: 'var(--font-display)' }}>
      <AnimatedText text={text} />
    </h2>
  )
}
