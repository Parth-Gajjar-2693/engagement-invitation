import { useEffect, useState, useCallback } from 'react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
}

export function useCountdown(targetDate: string): CountdownTime {
  const calculate = useCallback((): CountdownTime => {
    const now = Date.now()
    const target = new Date(targetDate).getTime()
    const diff = target - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isComplete: false,
    }
  }, [targetDate])

  const [time, setTime] = useState(calculate)

  useEffect(() => {
    const interval = setInterval(() => setTime(calculate()), 1000)
    return () => clearInterval(interval)
  }, [calculate])

  return time
}
