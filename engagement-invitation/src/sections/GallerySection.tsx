import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { GALLERY } from '../constants/content'
import { scaleIn, viewportOnce } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { LazyImage } from '../components/LazyImage'
import { cn } from '../utils/helpers'

const spanClasses: Record<string, string> = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  normal: '',
}

export function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [filter] = useState<string>('All')

  const filtered =
    filter === 'All'
      ? GALLERY.images
      : GALLERY.images.filter((img) => img.category === filter)

  const lightboxImage = GALLERY.images.find((img) => img.id === lightbox)

  return (
    <section id="gallery" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/20 to-cream" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading subtitle="Captured Moments" title="Our Gallery" />
        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:gap-5">
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              className={cn('mb-3 break-inside-avoid md:mb-4', spanClasses[image.span])}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={index}
            >
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(image.id)}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="aspect-auto min-h-[180px] w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs text-stone-700 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  {image.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <HiX className="text-xl" />
            </button>
            <motion.img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
