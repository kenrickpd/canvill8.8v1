"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export default function TapToReveal({ onReveal }) {
    const [isAnimating, setIsAnimating] = useState(false)

    const handleReveal = () => {
        setIsAnimating(true)

        // Delay the reveal to allow animations to play
        setTimeout(() => {
            onReveal()
            confetti({
                particleCount: 250,
                spread: 100,
                origin: { y: 0.6 },
                colors: ["#ff80ab", "#ea80fc", "#8c9eff", "#ff8a80"],
            })
        }, 1000)
    }

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-xl cursor-pointer mx-4"
                onClick={handleReveal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={
                    isAnimating
                        ? {
                            scale: [1, 1.2, 0],
                            opacity: [1, 1, 0],
                            rotate: [0, 5, 0, -5, 0],
                        }
                        : {}
                }
                transition={
                    isAnimating
                        ? {
                            duration: 1,
                            ease: "easeInOut",
                        }
                        : {}
                }
            >
                <motion.div
                    className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden"
                    animate={isAnimating ? { scale: 1.5, opacity: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50" />
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-400" />
                    <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400" />
                </motion.div>

                <div className="relative z-10 space-y-8">
                    <motion.div
                        className="text-7xl md:text-8xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        💙
                    </motion.div>

                    <motion.h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient">
                        Waduh ada apa ini?!
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center space-x-2 text-lg md:text-xl text-cyan-600 font-medium"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <span>Tap here to reveal</span>
                        <motion.span
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            ✨
                        </motion.span>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}
