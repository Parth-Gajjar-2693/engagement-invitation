import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FOOTER, SOCIAL, COUPLE } from '../constants/content'
import { getPhoneUrl, getWhatsAppContactUrl, getMapsUrl } from '../utils/helpers'
import { fadeUp, viewportOnce } from '../animations'

export function FooterSection() {
  const actions = [
    { icon: HiPhone, label: 'Call', href: getPhoneUrl() },
    { icon: FaWhatsapp, label: 'WhatsApp', href: getWhatsAppContactUrl() },
    { icon: HiLocationMarker, label: 'Location', href: getMapsUrl() },
  ]

  const socials = [
    { icon: FaInstagram, href: SOCIAL.instagram, label: 'Instagram' },
    { icon: FaFacebook, href: SOCIAL.facebook, label: 'Facebook' },
  ]

  return (
    <footer className="relative px-4 pb-12 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-beige/60" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="mb-2 font-display text-3xl text-stone-800 md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {FOOTER.message}
          </p>
          <p className="mb-10 text-sm text-stone-400">
            {COUPLE.groom} & {COUPLE.bride} · Engagement 2026
          </p>

          <div className="mb-8 flex justify-center gap-4">
            {actions.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl glass px-6 py-4 transition hover:bg-white/60"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-xl text-gold" />
                <span className="text-xs text-stone-500">{label}</span>
              </motion.a>
            ))}
          </div>

          <div className="mb-8 flex justify-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-white/40 text-stone-600 transition hover:bg-gold/10 hover:text-gold"
                whileHover={{ scale: 1.1 }}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <p className="mt-6 text-xs text-stone-400">
            Made with love for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
