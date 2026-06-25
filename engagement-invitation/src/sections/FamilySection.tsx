import { motion } from 'framer-motion'
import { FAMILY } from '../constants/content'
import { fadeUp, staggerContainer, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'

function FamilySide({
  label,
  members,
  align,
}: {
  label: string
  members: readonly { role: string; names: readonly string[] }[]
  align: 'left' | 'right'
}) {
  return (
    <motion.div variants={fadeUp} className={align === 'right' ? 'md:text-right' : ''}>
      <h3
        className="mb-6 font-display text-2xl text-gold md:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {label}
      </h3>
      <div className="space-y-4">
        {members.map((member) => (
          <GlassCard key={member.role} hover className="!p-5">
            <p className="text-xs uppercase tracking-widest text-stone-400">{member.role}</p>
            {member.names.map((name) => (
              <p
                key={name}
                className="mt-1 font-display text-lg text-stone-800"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {name}
              </p>
            ))}
          </GlassCard>
        ))}
      </div>
    </motion.div>
  )
}

export function FamilySection() {
  return (
    <section id="family" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/10 to-cream" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading subtitle="With Love From" title="Our Families" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 md:grid-cols-2 md:gap-16"
        >
          <FamilySide label={FAMILY.bride.label} members={FAMILY.bride.members} align="left" />
          <div className="hidden items-center justify-center md:flex">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white text-2xl shadow-lg"
            >
              💑
            </motion.div>
          </div>
          <FamilySide label={FAMILY.groom.label} members={FAMILY.groom.members} align="right" />
        </motion.div>
      </div>
    </section>
  )
}
