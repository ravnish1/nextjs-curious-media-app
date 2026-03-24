'use client'

import React from 'react'

// Inline SVG wordmarks — styled to match each brand's real logo colors.
// Zero external dependencies, always renders regardless of network.
const logos: { alt: string; svg: React.ReactNode }[] = [
  {
    alt: 'Moj',
    svg: (
      <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="8" y="33" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="32" fill="#FF3D57">MOJ</text>
      </svg>
    ),
  },
  {
    alt: 'MX Player',
    svg: (
      <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <rect x="0" y="4" width="40" height="36" rx="4" fill="#F37321"/>
        <text x="5" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#fff">MX</text>
        <text x="48" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="700" fontSize="20" fill="#1a1a1a">PLAYER</text>
      </svg>
    ),
  },
  {
    alt: 'ALT Balaji',
    svg: (
      <svg viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="20" fill="#E4003B">ALTBalaji</text>
      </svg>
    ),
  },
  {
    alt: 'My11Circle',
    svg: (
      <svg viewBox="0 0 220 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="20" fill="#1A1464">My11Circle</text>
      </svg>
    ),
  },
  {
    alt: 'FanTiger',
    svg: (
      <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="32" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="26" fill="#FF5A00">FAN</text>
        <text x="80" y="32" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="26" fill="#1a1a1a">TIGER</text>
      </svg>
    ),
  },
  {
    alt: 'iQOO',
    svg: (
      <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="33" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="32" fill="#0D2BE0">iQOO</text>
      </svg>
    ),
  },
  {
    alt: 'CoinSwitch',
    svg: (
      <svg viewBox="0 0 240 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <circle cx="14" cy="22" r="14" fill="#7B3FE4"/>
        <text x="7" y="18" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" fill="#fff">COIN</text>
        <text x="4" y="28" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" fill="#fff">SWITCH</text>
        <text x="34" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="20" fill="#1a1a1a">CoinSwitch</text>
      </svg>
    ),
  },
  {
    alt: 'WOW Skin Science',
    svg: (
      <svg viewBox="0 0 290 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="30" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="19" fill="#00A650">WOW</text>
        <text x="74" y="30" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="19" fill="#1a1a1a">Skin Science</text>
      </svg>
    ),
  },
  {
    alt: 'ZEE5',
    svg: (
      <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
        <text x="0" y="33" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="32" fill="#8B5CF6">ZEE5</text>
      </svg>
    ),
  },
]

export const Marquee = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-24 border-y border-foreground/5 overflow-hidden bg-background">
      <div className="flex flex-col gap-14">
        {/* Row 1: Left → Right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-24 py-4 items-center">
            {duplicatedLogos.map((logo, i) => (
              <div
                key={i}
                className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 filter flex-shrink-0"
                title={logo.alt}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right → Left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-24 py-4 items-center">
            {duplicatedLogos.map((logo, i) => (
              <div
                key={`rev-${i}`}
                className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 filter flex-shrink-0"
                title={logo.alt}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
