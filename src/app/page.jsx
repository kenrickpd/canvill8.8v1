"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import MusicPlayer from "@/components/MusicPlayer" // Uncomment this if you want to add a background song
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"

// Change this to your anniversary date
const ANNIVERSARY_DATE = "2025-08-08T00:30:00"
// Change this to the date you got together
const TOGETHER_DATE = "2024-08-08T00:00:00"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false) // Uncomment this if you want to add a background song

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the anniversary date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Uncomment this if you want to add a background song
    // setTimeout(() => {
    //   setPlaySong(true)
    // }, 1000);
  }

  // Add your photos here
  const photos = [
    { src: "/1.jpg", alt: "First time bertemu Mom !" },
    { src: "/3.jpg", alt: "Sumdok pipu!" },
    { src: "/4.jpg", alt: "Merayakan ada dokter baru in town!" },
    { src: "/2.jpg", alt: "Sinciaaa 💸!" },
  ]

  // Change this message according to you
  const message = `My Dear Pipipu,
Thank you for walking beside me through this beautiful year.
Since the moment we first met, my life has been overflowing with happiness, laughter, and so much love—thanks to you and us.
With every year we spend together, my love for you only grows. You're the one I trust the most, my greatest support, and the love of my life.
Happy Anniversary, my pipipu! I can’t wait to keep building unforgettable memories with you, enchip, and ucel for years to come.
From the depths of my heart,
Kenkun.`

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500 mb-4 animate-gradient">
                Ada yang mau anniv nih!
              </h1>
              <p className="text-xl text-sky-300 font-medium">The countdown to our anniversary 🤍</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />) : (
          <>
            <MusicPlayer playSong={playSong} /> 
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500 mb-3 animate-gradient">
                  Happy Anniv pipuu !
                </h1>
                <p className="text-xl text-sky-500 font-medium">Wih udah setahun aja !</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-cyan-600"
              >
                <p className="text-lg font-medium">Created With 💖 by Kenkun</p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
