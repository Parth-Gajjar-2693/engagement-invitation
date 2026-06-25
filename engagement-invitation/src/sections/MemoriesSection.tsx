import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { MEMORIES } from '../constants/content'
import { fadeUp, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { LazyImage } from '../components/LazyImage'

export function MemoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -320 : 320
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="memories" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-beige/40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading subtitle="Precious Moments" title="Memories" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition hover:bg-white md:flex"
            aria-label="Scroll left"
          >
            <HiChevronLeft className="text-xl text-gold" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition hover:bg-white md:flex"
            aria-label="Scroll right"
          >
            <HiChevronRight className="text-xl text-gold" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:gap-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {MEMORIES.map((memory, index) => (
              <motion.div
                key={memory.id}
                className="w-[280px] shrink-0 snap-center md:w-[340px]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-2xl glass luxury-shadow">
                  <LazyImage
                    src={memory.src}
                    alt={memory.caption}
                    className="aspect-[4/5] w-full"
                  />
                  <div className="p-4">
                    <p className="text-sm text-stone-600">{memory.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
