'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Curious completely transformed our brand vision and brought it to life with a cinematic digital experience.",
    author: "Elena Vasquez",
    company: "Founder, Zenith",
  },
  {
    quote: "The motion design quality is unparalleled. They don't just build sites; they build digital masterpieces.",
    author: "Marcus Thorne",
    company: "CEO, Stellar Media",
  },
]

export const Testimonials = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className="py-40 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <Quote size={80} className="mx-auto mb-12 text-accent opacity-20" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 leading-tight">
              "{testimonials[index].quote}"
            </h2>
            <div className="space-y-1">
              <p className="text-xl font-bold">{testimonials[index].author}</p>
              <p className="text-sm tracking-widest uppercase text-accent font-bold">{testimonials[index].company}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? 'bg-accent w-10' : 'bg-foreground/10'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
    </section>
  )
}
