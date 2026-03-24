'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Palette, Box } from 'lucide-react'
import { ScrambleHeading } from './ScrambleHeading'

const features = [
  {
    title: 'Brand Strategy',
    description: 'We define the core essence of your brand, positioning you for success in a crowded market.',
    icon: Target,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with the user in mind and built for conversion.',
    icon: Palette,
  },
  {
    title: 'Motion Design',
    description: 'Bringing your brand to life with fluid animations and high-end cinematic transitions.',
    icon: Zap,
  },
  {
    title: 'Development',
    description: 'Clean, performant code that turns designs into powerful interactive experiences.',
    icon: Box,
  },
]

export const Features = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20 space-y-4">
          <ScrambleHeading text="Expertise" as="span" className="text-sm font-medium tracking-widest text-accent uppercase" staggerMs={30} scrambleFrames={4} />
          <ScrambleHeading text="Our Solutions" as="h2" className="text-5xl md:text-7xl font-serif leading-tight" staggerMs={50} />
          <p className="max-w-xl text-lg text-text-muted">
            We combine strategic thinking with creative excellence to deliver 
            unparalleled digital solutions for global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-10 bg-surface border border-foreground/5 rounded-3xl hover:border-accent/30 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <feature.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6 italic">
                  {feature.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-accent group-hover:gap-4 transition-all">
                  Learn More <span className="text-accent underline underline-offset-4 decoration-accent/30 group-hover:decoration-accent transition-all">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
