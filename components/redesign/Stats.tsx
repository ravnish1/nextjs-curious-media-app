'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const Counter = ({ value, suffix, label }: { value: number, suffix: string, label: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  const displayValue = useTransform(spring, (current) => Math.round(current))
  
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, value, spring])

  useEffect(() => {
    return displayValue.on('change', (latest) => setCurrent(latest))
  }, [displayValue])

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-2">
        {current}{suffix}
      </div>
      <div className="text-sm font-medium tracking-[0.2em] uppercase text-text-muted">{label}</div>
    </div>
  )
}

export const Stats = () => {
  return (
    <section className="py-32 px-6 bg-surface border-y border-foreground/5 noise-bg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-10">
        <Counter value={500} suffix="M" label="Reach" />
        <Counter value={98} suffix="%" label="Retention" />
        <Counter value={54} suffix="+" label="Awards" />
        <Counter value={20} suffix="K" label="Creators" />
      </div>
    </section>
  )
}
