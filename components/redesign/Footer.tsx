'use client'

import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="pt-32 pb-10 px-6 bg-surface border-t border-foreground/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1 space-y-8">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-foreground">
              CURIOUS<span className="text-accent">.</span>
            </Link>
            <p className="text-text-muted leading-relaxed">
              We build digital products, experiences, and futures. A world-class 
              agency dedicated to pushing the boundaries of what's possible.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase text-accent">Services</h4>
            <ul className="space-y-4">
              {['Strategy', 'UI/UX Design', 'Motion', 'Development'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-text-muted hover:text-accent transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase text-accent">Discover</h4>
            <ul className="space-y-4">
              {['Our Work', 'Insights', 'Team', 'Careers'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-text-muted hover:text-accent transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase text-accent">Connect</h4>
            <ul className="space-y-4">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-text-muted hover:text-accent transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted tracking-widest uppercase">
            © 2026 CURIOUS STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs text-text-muted tracking-widest uppercase">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
