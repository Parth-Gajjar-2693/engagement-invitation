import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/helpers'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
}

export function LazyImage({ src, alt, className, onClick }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '100px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-beige/50', className)} onClick={onClick}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-beige to-blush" />
      )}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn('h-full w-full object-cover', loaded ? 'opacity-100' : 'opacity-0')}
          initial={{ scale: 1.1, filter: 'blur(8px)' }}
          animate={loaded ? { scale: 1, filter: 'blur(0px)' } : undefined}
          transition={{ duration: 0.8 }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}
