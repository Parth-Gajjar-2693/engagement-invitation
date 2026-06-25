import { useRef } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { HiCalendar, HiClock, HiLocationMarker, HiDownload, HiShare } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { EVENT, COUPLE } from '../constants/content'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { MagneticButton } from '../components/MagneticButton'
import { generateCalendarLink, getMapsUrl, downloadInvitation, shareInvitation, getWhatsAppShareUrl } from '../utils/helpers'

export function EventDetailsSection() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (cardRef.current) {
      await downloadInvitation(cardRef.current)
    }
  }

  return (
    <section id="event-details" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/30 via-white to-blush/20" />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading subtitle="You're Invited" title="Event Details" />

        <motion.div
          ref={cardRef}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-white/80 via-cream/90 to-blush/40 p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-rose/10 blur-3xl" />

          <div className="relative text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold">Engagement Ceremony</p>
            <h3
              className="mb-8 font-display text-4xl text-stone-800 md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {COUPLE.groom} & {COUPLE.bride}
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mx-auto grid max-w-lg gap-6 text-left"
            >
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <HiCalendar className="mt-1 text-xl text-gold" />
                <div>
                  <p className="font-medium text-stone-800">{EVENT.date}</p>
                  <p className="text-sm text-stone-500">{EVENT.day}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <HiClock className="mt-1 text-xl text-gold" />
                <div>
                  <p className="font-medium text-stone-800">{EVENT.time}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <HiLocationMarker className="mt-1 shrink-0 text-xl text-gold" />
                <div>
                  <p className="font-medium text-stone-800">{EVENT.venue.name}</p>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {EVENT.venue.floor}, {EVENT.venue.address}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl bg-white/50 p-4">
                <p className="text-xs uppercase tracking-widest text-gold">Dress Code</p>
                <p className="mt-1 text-stone-600">{EVENT.dressCode}</p>
              </motion.div>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <GlassCard className="inline-block p-4">
                <QRCodeSVG value={EVENT.venue.mapsUrl} size={100} fgColor="#8B7355" bgColor="transparent" />
                <p className="mt-2 text-xs text-stone-400">Scan for directions</p>
              </GlassCard>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <MagneticButton
            onClick={() => window.open(getMapsUrl(), '_blank')}
            className="glass text-stone-700"
          >
            <HiLocationMarker className="mr-2" /> Google Maps
          </MagneticButton>
          <MagneticButton
            onClick={() => window.open(generateCalendarLink(), '_blank')}
            className="glass text-stone-700"
          >
            <HiCalendar className="mr-2" /> Add to Calendar
          </MagneticButton>
          <MagneticButton onClick={handleDownload} className="glass text-stone-700">
            <HiDownload className="mr-2" /> Download
          </MagneticButton>
          <MagneticButton onClick={shareInvitation} className="glass text-stone-700">
            <HiShare className="mr-2" /> Share
          </MagneticButton>
          <MagneticButton
            onClick={() => window.open(getWhatsAppShareUrl(), '_blank')}
            className="bg-[#25D366] text-white"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
