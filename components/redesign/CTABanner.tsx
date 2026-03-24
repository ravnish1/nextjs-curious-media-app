'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrambleHeading } from './ScrambleHeading'

export const CTABanner = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-accent p-12 md:p-24 text-center group">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.1),transparent)] opacity-50" />
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-secondary/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </div>

          <div className="relative z-10 space-y-10">
            <ScrambleHeading text="Ready to create something extraordinary?" as="h2" className="text-5xl md:text-8xl font-serif text-white leading-[0.9] tracking-tighter" staggerMs={35} scrambleFrames={5} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button className="px-12 py-6 bg-white text-accent text-xl font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20">
                Start a Project
              </button>
              <button className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white text-xl font-bold rounded-full transition-all border border-white/10">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
