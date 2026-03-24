'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrambleText } from './ScrambleText'

const words = ['Futures', 'Experiences', 'Products', 'Solutions', 'Brands']

export const Hero = () => {
  const [index, setIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-visible noise-bg">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[100px]" />
      </div>

      {/* 2-Column Grid Layout */}
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 items-center">
        
        {/* Left Column — Text Content */}
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ScrambleText
              text="Award Winning Digital Agency"
              as="span"
              className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 block"
              trigger={true}
              staggerMs={30}
              scrambleFrames={4}
              frameDurationMs={40}
            />
            <h1 className="text-[12vw] md:text-[7vw] lg:text-[4.5vw] font-serif leading-[1.15] tracking-[-0.03em] overflow-visible">
              <ScrambleText
                text="We build"
                as="span"
                className=""
                trigger={true}
                staggerMs={60}
                scrambleFrames={6}
                frameDurationMs={50}
              />
              <br />
              <span className="inline">
                <ScrambleText
                  text="digital"
                  as="span"
                  className="italic"
                  trigger={true}
                  staggerMs={60}
                  scrambleFrames={6}
                  frameDurationMs={50}
                />{' '}
                <span
                  className="inline-block overflow-hidden align-bottom"
                  style={{
                    minWidth: 'min(420px, 50vw)',
                    paddingBottom: '8px',
                    clipPath: 'inset(0 0 0 0)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[index]}
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-110%', opacity: 0 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block text-accent"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Mobile Video — shows below headline on small screens */}
          <div className="block lg:hidden w-full">
            <div className="hero-video-wrapper">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="https://assets.mixkit.co/videos/1222/1222-720.mp4"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="hero-video-overlay" />
              <div className="accent-dot" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              A world-class engineering and motion design studio specializing in premium 
              digital experiences that command attention.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
                View Our Work
              </button>
              <button className="px-8 py-4 border border-foreground/10 hover:border-foreground/30 text-foreground font-bold rounded-full transition-all">
                Our Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column — Video (Desktop only) */}
        <div className="hidden lg:flex items-center justify-center pl-10">
          <div className="hero-video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://assets.mixkit.co/videos/1222/1222-720.mp4"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="hero-video-overlay" />
            <div className="accent-dot" />
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 200 ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="scroll-indicator"
        style={{ pointerEvents: scrollY > 200 ? 'none' : 'auto' }}
      >
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-line-wrapper">
          <div className="scroll-line-inner" />
        </div>
      </motion.div>
    </section>
  )
}
