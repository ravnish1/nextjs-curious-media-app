'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const GLITCH_CHARS = 'XKZØ#@%!7&?▓▒░█∆∑Ω'

interface UseScrambleTextOptions {
  text: string
  trigger?: boolean         // whether to start the animation
  staggerMs?: number        // delay between each char starting (default 50ms)
  scrambleFrames?: number   // how many random frames per char (default 6)
  frameDurationMs?: number  // time per scramble frame (default 50ms)
}

export function useScrambleText({
  text,
  trigger = true,
  staggerMs = 50,
  scrambleFrames = 6,
  frameDurationMs = 50,
}: UseScrambleTextOptions) {
  const [displayChars, setDisplayChars] = useState<string[]>(() =>
    trigger ? text.split('') : text.split('').map(() => ' ')
  )
  const [resolved, setResolved] = useState<boolean[]>(() =>
    text.split('').map(() => !trigger)
  )
  const [done, setDone] = useState(!trigger)
  const intervalRefs = useRef<(ReturnType<typeof setInterval> | null)[]>([])

  const cleanup = useCallback(() => {
    intervalRefs.current.forEach((id) => {
      if (id) clearInterval(id)
    })
    intervalRefs.current = []
  }, [])

  useEffect(() => {
    if (!trigger) {
      // Reset to blank/hidden state
      setDisplayChars(text.split('').map(() => ' '))
      setResolved(text.split('').map(() => false))
      setDone(false)
      return
    }

    const chars = text.split('')
    const newDisplay = chars.map(() => ' ')
    const newResolved = chars.map(() => false)

    setDisplayChars([...newDisplay])
    setResolved([...newResolved])
    setDone(false)

    cleanup()
    intervalRefs.current = new Array(chars.length).fill(null)

    let resolvedCount = 0

    chars.forEach((char, i) => {
      // Spaces and punctuation resolve instantly
      if (char === ' ' || /[.,;:!?'"()\-–—/\\]/.test(char)) {
        setTimeout(() => {
          setDisplayChars((prev) => {
            const next = [...prev]
            next[i] = char
            return next
          })
          setResolved((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
          resolvedCount++
          if (resolvedCount === chars.length) setDone(true)
        }, i * staggerMs)
        return
      }

      let frame = 0

      setTimeout(() => {
        intervalRefs.current[i] = setInterval(() => {
          if (frame < scrambleFrames) {
            // Show a random glitch character
            const glitchChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            setDisplayChars((prev) => {
              const next = [...prev]
              next[i] = glitchChar
              return next
            })
            frame++
          } else {
            // Resolve to the real character
            if (intervalRefs.current[i]) {
              clearInterval(intervalRefs.current[i]!)
              intervalRefs.current[i] = null
            }
            setDisplayChars((prev) => {
              const next = [...prev]
              next[i] = char
              return next
            })
            setResolved((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
            resolvedCount++
            if (resolvedCount === chars.length) setDone(true)
          }
        }, frameDurationMs)
      }, i * staggerMs)
    })

    return cleanup
  }, [text, trigger, staggerMs, scrambleFrames, frameDurationMs, cleanup])

  return { displayChars, resolved, done }
}
