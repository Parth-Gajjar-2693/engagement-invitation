import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { useMediaQuery } from '../hooks/useMagnetic'

interface ConfettiEffectProps {
  active: boolean
  onComplete?: () => void
}

export function ConfettiEffect({ active, onComplete }: ConfettiEffectProps) {
  const [show, setShow] = useState(active)
  const isMobile = useMediaQuery('(max-width: 767px)')

  useEffect(() => {
    if (active) setShow(true)
  }, [active])

  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => {
      setShow(false)
      onComplete?.()
    }, 8000)
    return () => clearTimeout(timer)
  }, [show, onComplete])

  if (!show) return null

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={isMobile ? 150 : 300}
      colors={['#D4AF37', '#F8E8EE', '#E8B4B8', '#FAF7F2', '#FFFFFF']}
    />
  )
}
