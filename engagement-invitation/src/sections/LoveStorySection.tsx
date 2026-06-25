import { motion } from 'framer-motion'
import { LOVE_STORY } from '../constants/content'
import { slideFromLeft, slideFromRight, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'

export function LoveStorySection() {
  return (
    <section id="love-story" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white/50 to-blush/30" />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading subtitle="Our Journey" title="Love Story" />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/50 to-gold/20 md:left-1/2 md:-translate-x-px" />

          {LOVE_STORY.map((item, index) => {
            const isEven = index % 2 === 0
            const Variant = isEven ? slideFromLeft : slideFromRight

            return (
              <motion.div
                key={item.id}
                className={`relative mb-12 flex md:mb-16 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                variants={Variant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                  <div className={`flex items-start gap-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-white text-xl shadow-md">
                      {item.icon}
                    </div>
                    <motion.div
                      className="flex-1 rounded-2xl glass p-6 luxury-shadow"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs uppercase tracking-widest text-gold">{item.year}</span>
                      <h3
                        className="mt-1 mb-2 font-display text-2xl text-stone-800"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-stone-500">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
