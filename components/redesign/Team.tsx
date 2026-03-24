'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrambleHeading } from './ScrambleHeading'

const team = [
  { name: 'Alex Rivera', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
  { name: 'Maya Chen', role: 'Motion Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop' },
  { name: 'David Smith', role: 'Head of Tech', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' },
  { name: 'Sophie Park', role: 'Strategy', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop' },
]

export const Team = () => {
  return (
    <section className="py-32 px-6 bg-surface noise-bg">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20 text-center md:text-left">
          <ScrambleHeading text="Team" as="span" className="text-sm font-medium tracking-widest text-accent uppercase" staggerMs={30} scrambleFrames={4} />
          <ScrambleHeading text="The Visionaries" as="h2" className="text-5xl md:text-7xl font-serif mt-4 underline decoration-accent underline-offset-8 decoration-1" staggerMs={50} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">{member.name}</h3>
              <p className="text-text-muted tracking-widest uppercase text-xs mt-1 font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
