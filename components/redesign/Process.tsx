'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrambleHeading } from './ScrambleHeading'

const steps = [
  { title: 'Discovery', desc: 'Deep dive into your brand mission, goals, and audience behavior.' },
  { title: 'Strategy', desc: 'Crafting a unique narrative and visual language for your projects.' },
  { title: 'Design', desc: 'Meticulous UI/UX and motion design that commands attention.' },
  { title: 'Launch', desc: 'Deploying high-performance experiences with global impact.' },
]

export const Process = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20">
          <ScrambleHeading text="Roadmap" as="span" className="text-sm font-medium tracking-widest text-accent uppercase" staggerMs={30} scrambleFrames={4} />
          <ScrambleHeading text="How we work" as="h2" className="text-5xl md:text-8xl font-serif mt-4" staggerMs={50} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[1px] bg-foreground/5 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative z-10 space-y-6 group"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-foreground/5 flex items-center justify-center font-serif text-2xl font-bold group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-110 md:scale-100 shadow-sm">
                0{i + 1}
              </div>
              <h3 className="text-3xl font-serif italic">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
