'use client'

import { useEffect, useRef } from 'react'

/**
 * A number that counts up to its final value once, when it first
 * scrolls into view.
 *
 * ===========================================================================
 * PROGRESSIVE ENHANCEMENT, NOT A LOADING STATE
 * ===========================================================================
 * The server-rendered `<span>` already contains the FINAL formatted
 * value — see the render. A visitor with JavaScript disabled, or one who
 * never scrolls this element into view, sees the correct number and
 * nothing else; the animation is a client-side embellishment layered on
 * top of already-correct content, not a prerequisite for it.
 *
 * ---------------------------------------------------------------------------
 * `prefers-reduced-motion`: OPT-IN, NOT OPT-OUT
 * ---------------------------------------------------------------------------
 * Same position the marquee and hero backdrop take elsewhere in this
 * project (`app/globals.css`). Reduced motion is checked BEFORE the
 * observer is even created, so a visitor who asked for less motion never
 * has the count start and then get cut short — it simply never starts,
 * and the static final value already rendered is what they see.
 *
 * ---------------------------------------------------------------------------
 * WHY DIRECT DOM WRITES, NOT `useState`
 * ---------------------------------------------------------------------------
 * A count-up ticks every animation frame. Routing that through React
 * state would re-render the component ~60 times over the animation's
 * lifetime for a single number; writing `textContent` on a ref does the
 * same visible thing with zero React re-renders, which is the more
 * restrained implementation for a purely decorative effect (18 §65).
 *
 * No new dependency: `IntersectionObserver` and `requestAnimationFrame`
 * are browser APIs, not a library.
 */
export interface CountUpValueProps {
  /** The final number. Formatted with thousands separators. */
  value: number
  /** Static text appended after the number, e.g. `'+'` or `'+ years'`. */
  suffix?: string
  /** Animation length in ms. 1200ms matches this project's other restrained transitions (the hero backdrop crossfade). */
  durationMs?: number
  className?: string
}

function formatValue(value: number, suffix: string): string {
  return `${value.toLocaleString('en-US')}${suffix}`
}

/** Decelerating curve — starts fast, settles into the final value rather than stopping abruptly. */
function easeOutQuad(t: number): number {
  return t * (2 - t)
}

export function CountUpValue({
  value,
  suffix = '',
  durationMs = 1200,
  className,
}: CountUpValueProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (node === null) return

    // Reduced motion: leave the server-rendered final value exactly as
    // it is. Nothing below this line runs.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry === undefined || !entry.isIntersecting || hasAnimated.current) {
          return
        }
        hasAnimated.current = true
        observer.disconnect() // runs once

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1)
          const current = Math.round(value * easeOutQuad(progress))
          node.textContent = formatValue(current, suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, suffix, durationMs])

  return (
    <span ref={ref} className={className}>
      {formatValue(value, suffix)}
    </span>
  )
}
