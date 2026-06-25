import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENT } from '../constants/content'
import { useCountdown } from '../hooks/useCountdown'
import { fadeUp, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { padNumber } from '../utils/helpers'

interface CountdownDigitProps {
  value: number
  label: string
}

function CountdownDigit({ value, label }: CountdownDigitProps) {
  const display = padNumber(value)

  return (
    <div className="flex flex-col items-center">
      <GlassCard className="relative min-w-[72px] overflow-hidden px-4 py-5 text-center md:min-w-[96px] md:px-6 md:py-6">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            className="block font-display text-4xl font-light text-stone-800 md:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </GlassCard>
      <span className="mt-3 text-xs uppercase tracking-widest text-stone-400">{label}</span>
    </div>
  )
}

interface CountdownSectionProps {
  onComplete?: () => void
}

export function CountdownSection({ onComplete }: CountdownSectionProps) {
  const time = useCountdown(EVENT.countdownTarget)

  useEffect(() => {
    if (time.isComplete) onComplete?.()
  }, [time.isComplete, onComplete])

  return (
    <section id="countdown" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-beige/50" />
      <div className="relative mx-auto max-w-3xl">
        <SectionHeading subtitle="Mark Your Calendar" title="Countdown" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          {time.isComplete ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-3xl glass-gold p-12"
            >
              <p className="font-display text-4xl text-gold md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
                The day is here! 🎉
              </p>
            </motion.div>
          ) : (
            <>
              <div className="flex justify-center gap-3 md:gap-6">
                <CountdownDigit value={time.days} label="Days" />
                <CountdownDigit value={time.hours} label="Hours" />
                <CountdownDigit value={time.minutes} label="Minutes" />
                <CountdownDigit value={time.seconds} label="Seconds" />
              </div>
              <p className="mt-10 text-stone-500">
                Until {EVENT.date} · {EVENT.time}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
