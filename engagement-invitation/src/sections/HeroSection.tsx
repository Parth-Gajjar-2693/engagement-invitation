import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi'
import { COUPLE, EVENT, HERO_IMAGE } from '../constants/content'
import { fadeUp, blurReveal, staggerContainer, scaleIn } from '../animations'
import { useGsapParallax } from '../hooks/useGsapParallax'
import { Sparkles } from '../components/Sparkles'
import { MagneticButton } from '../components/MagneticButton'
import { LazyImage } from '../components/LazyImage'

interface HeroSectionProps {
  onOpenInvitation: () => void
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const parallaxRef = useGsapParallax<HTMLDivElement>(0.25)

  const scrollToStory = () => {
    document.getElementById('love-story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background */}
      <div ref={parallaxRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/40 to-beige" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(232,180,184,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(232,180,184,0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <Sparkles />

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-stone-500"
        >
          {COUPLE.tagline}
        </motion.p>

        <motion.h1
          variants={blurReveal}
          className="mb-2 font-display text-5xl font-light text-stone-800 md:text-7xl lg:text-8xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {COUPLE.groom}{' '}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-rose"
          >
            ❤️
          </motion.span>{' '}
          {COUPLE.bride}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-10 font-display text-2xl italic text-gold md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {COUPLE.headline}
        </motion.p>

        {/* Couple photo with glowing frame */}
        <motion.div variants={scaleIn} className="relative mb-10">
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-gold/40 via-gold-light/30 to-gold/40 blur-md"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl md:h-64 md:w-64 lg:h-72 lg:w-72">
            <LazyImage src={HERO_IMAGE} alt={`${COUPLE.groom} and ${COUPLE.bride}`} className="h-full w-full" />
          </div>
        </motion.div>

        {/* Date card */}
        <motion.div
          variants={fadeUp}
          className="mb-10 w-full max-w-md rounded-3xl glass-gold p-6 md:p-8"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <HiCalendar className="text-gold" />
            <div>
              <p className="font-display text-2xl text-stone-800 md:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {EVENT.date}
              </p>
              <p className="text-sm text-stone-500">{EVENT.day}</p>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center gap-3">
            <HiClock className="text-gold" />
            <p className="text-stone-600">{EVENT.time}</p>
          </div>
          <div className="flex items-start justify-center gap-3 text-left">
            <HiLocationMarker className="mt-1 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-stone-500">
              {EVENT.venue.floor}, {EVENT.venue.address}
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
          <MagneticButton
            onClick={scrollToStory}
            className="glass text-stone-700"
          >
            Our Story
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-gold/40 p-1">
          <motion.div
            className="mx-auto h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
