import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { useLoadingScreen } from './hooks/useLoadingScreen'
import { useAudio } from './hooks/useLoadingScreen'
import { useCountdown } from './hooks/useCountdown'
import { EVENT, MUSIC_URL } from './constants/content'
import { LoadingScreen } from './components/LoadingScreen'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { MusicButton } from './components/MusicButton'
import { FloatingPetals } from './components/FloatingPetals'
import { FloatingHearts } from './components/FloatingHearts'
import { CursorGlow, MouseTrail } from './components/CursorEffects'
import { ConfettiEffect } from './components/ConfettiEffect'
import { HeroSection } from './sections/HeroSection'
import { LoveStorySection } from './sections/LoveStorySection'
import { GallerySection } from './sections/GallerySection'
import { CountdownSection } from './sections/CountdownSection'
import { EventDetailsSection } from './sections/EventDetailsSection'
import { FamilySection } from './sections/FamilySection'
import { MemoriesSection } from './sections/MemoriesSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  const { isLoading, progress } = useLoadingScreen(2800)
  const [showConfetti, setShowConfetti] = useState(false)
  const countdown = useCountdown(EVENT.countdownTarget)

  useLenis(!isLoading)
  const { isPlaying, isMuted, toggle } = useAudio(MUSIC_URL)

  useEffect(() => {
    if (countdown.isComplete) {
      setShowConfetti(true)
    }
  }, [countdown.isComplete])

  const handleOpenInvitation = useCallback(() => {
    setShowConfetti(true)
    document.getElementById('love-story')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleCountdownComplete = useCallback(() => {
    setShowConfetti(true)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" progress={progress} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgressBar />
          <FloatingPetals />
          <FloatingHearts />
          <CursorGlow />
          <MouseTrail />
          <MusicButton isPlaying={isPlaying} isMuted={isMuted} onToggle={toggle} />
          <ConfettiEffect active={showConfetti} onComplete={() => setShowConfetti(false)} />

          <main className="relative">
            <HeroSection onOpenInvitation={handleOpenInvitation} />
            <LoveStorySection />
            <GallerySection />
            <CountdownSection onComplete={handleCountdownComplete} />
            <EventDetailsSection />
            <FamilySection />
            <MemoriesSection />
            <FooterSection />
          </main>
        </>
      )}
    </>
  )
}

export default App
