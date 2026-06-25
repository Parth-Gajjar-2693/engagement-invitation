import { useEffect, useState, useCallback } from 'react'

export function useLoadingScreen(duration = 2500) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 400)
      }
    }, 16)
    return () => clearInterval(interval)
  }, [duration])

  return { isLoading, progress }
}

export function useAudio(src: string) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useCallback(() => {
    let audio: HTMLAudioElement | null = null
    return {
      get: () => {
        if (!audio) {
          audio = new Audio(src)
          audio.loop = true
          audio.volume = 0.4
        }
        return audio
      },
    }
  }, [src])()

  const toggle = useCallback(async () => {
    const audio = audioRef.get()
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.muted = false
      setIsMuted(false)
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        /* autoplay blocked */
      }
    }
  }, [audioRef, isPlaying])

  const toggleMute = useCallback(() => {
    const audio = audioRef.get()
    audio.muted = !audio.muted
    setIsMuted(audio.muted)
    if (!audio.muted && !isPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [audioRef, isPlaying])

  return { isPlaying, isMuted, toggle, toggleMute }
}
