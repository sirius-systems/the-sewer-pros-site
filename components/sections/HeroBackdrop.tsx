'use client'

import Image from 'next/image'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils/cn'
import {
  heroBackdropImages,
  heroBackdropRenders,
  HERO_BACKDROP_WIDTH,
  HERO_BACKDROP_HEIGHT,
} from '@/data/business/hero-backdrop'

/**
 * Cross-fading photographic backdrop for the homepage hero.
 *
 * ===========================================================================
 * ⚠ SELF-MOVING CONTENT, ON OWNER DIRECTION (2026-09-03)
 * ===========================================================================
 * 18 §66 and §39's motion guidance push against this, and
 * `ReviewMarquee` says in as many words that its own exception "is not
 * licence for autoplay, sliders, or self-moving content elsewhere".
 * The owner directed a hero background carousel, which is a second
 * scoped exception rather than a reversal of the rule. It covers THIS
 * BACKDROP only.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THERE IS NO PAUSE CONTROL, AND `prefers-reduced-motion` IS NOW THE
 * ONLY THING STANDING BETWEEN THIS AND A WCAG 2.2.2 PROBLEM
 * ---------------------------------------------------------------------------
 * A pause button shipped with the first version and was removed on
 * owner direction (2026-09-04). Removing it is defensible HERE, and
 * the reasons are worth stating because they are also the conditions
 * under which it stops being defensible:
 *
 *   - The frames are DECORATIVE. Every one carries `alt=""` and the
 *     layer is `aria-hidden`. 2.2.2 governs moving or auto-updating
 *     INFORMATION; these carry none, and the hero's meaning is
 *     entirely in the copy on top.
 *   - Nothing moves. This is an opacity cross-fade between two still
 *     photographs — no scroll, no blink, no motion of any element.
 *   - Motion is opt-in. Under `prefers-reduced-motion` no timer starts
 *     and no transition is declared, so a visitor who asked for less
 *     motion sees one static frame.
 *
 * ⚠ IF ANY OF THOSE THREE STOPS BEING TRUE, THE CONTROL HAS TO COME
 * BACK. Giving a frame real alt text, captioning it, or replacing the
 * cross-fade with a slide or a Ken Burns pan each turn this into
 * moving information with no way to stop it.
 *
 * This is narrower than `ReviewMarquee`'s position, and deliberately
 * so: that section scrolls real customer text, which IS moving
 * information, so its WCAG 2.2.2 control stays.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE SCRIM IS NOT DECORATION. DO NOT LIGHTEN IT WITHOUT REMEASURING.
 * ---------------------------------------------------------------------------
 * White hero copy sits over these frames. Measured on the actual files,
 * over the left 60% of each frame where the copy sits, white text on
 * the BARE image runs 1.62:1 to 3.68:1 at the 95th percentile — every
 * frame fails, and the bright residential one fails worst.
 *
 * `.hero-scrim` in app/globals.css is what makes the copy legible, and
 * its alpha stops are chosen against a pure-white worst case rather
 * than against these five files, so swapping a frame cannot quietly
 * break contrast. The arithmetic lives beside the class.
 *
 * ---------------------------------------------------------------------------
 * DECORATIVE, SO `alt=""`
 * ---------------------------------------------------------------------------
 * The hero's headline and intro carry the meaning. Five frames rotating
 * behind them are set dressing, and describing each one to a screen
 * reader would announce five near-identical descriptions of scenery the
 * copy has already covered. `data/business/hero-backdrop.ts` keeps a
 * `describes` field so the set stays readable in source.
 *
 * ---------------------------------------------------------------------------
 * LCP
 * ---------------------------------------------------------------------------
 * The first frame renders on the server with `priority`; the other four
 * mount only after hydration. That is deliberate. All five in the
 * initial HTML would be ~485KB of in-viewport imagery competing for the
 * same connection as the frame that actually gets painted, and the
 * hero background is this page's LCP element. Frame one is therefore
 * the only one the browser sees before first paint.
 */

/** Seconds each frame holds before the cross-fade to the next begins. */
const HOLD_SECONDS = 6

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCE_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

function readMotionPreference() {
  return window.matchMedia(REDUCE_QUERY).matches
}

/**
 * Server snapshot: assume the visitor asked for less motion.
 *
 * ⚠ `true` is the safe default and the useful one, and it is doing two
 * jobs. It is what a server that cannot read a media query should
 * assume, and it is also what makes the server-rendered HTML carry a
 * single static frame — which is the LCP behaviour the header note
 * describes. Flipping this to `false` would ship all five frames in
 * the initial HTML and start a timer before the preference is known.
 */
function motionPreferenceOnServer() {
  return true
}

export function HeroBackdrop() {
  const [index, setIndex] = useState(0)

  /**
   * One flag, two jobs: the reduced-motion gate and the hydration gate.
   *
   * CSS can stop a transition but it cannot stop a `setInterval`, so
   * the timer itself has to know the preference — this is the one part
   * of the reduced-motion path that cannot be pure CSS.
   *
   * `useSyncExternalStore` rather than an effect: it reads the media
   * query as an external store, which is what it is, gives a defined
   * server snapshot, and picks up a visitor changing the OS setting
   * mid-session without a reload.
   */
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    readMotionPreference,
    motionPreferenceOnServer,
  )
  const enhanced = !prefersReducedMotion

  useEffect(() => {
    if (!enhanced || heroBackdropImages.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroBackdropImages.length)
    }, HOLD_SECONDS * 1000)
    return () => window.clearInterval(id)
  }, [enhanced])

  if (!heroBackdropRenders()) return null

  // Before hydration, and under reduced motion, this is the whole set.
  const frames = enhanced ? heroBackdropImages : heroBackdropImages.slice(0, 1)

  return (
    <>
      {/*
        `bg-brand` is the floor, not decoration: it is what shows before
        the first frame decodes, so the hero opens dark rather than as
        a flash of page white under the overlay. It stays brand navy
        while the overlay itself is black — under a 65% black it reads
        as near-black anyway, and this is the one moment any brand
        colour shows here at all.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden bg-brand"
      >
        {frames.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            width={HERO_BACKDROP_WIDTH}
            height={HERO_BACKDROP_HEIGHT}
            /*
              Only the first frame is a real LCP candidate — it is the
              only one in the server-rendered HTML.
            */
            priority={i === 0}
            sizes="100vw"
            /*
              ⚠ FRAME 0 IS THE BASE LAYER AND NEVER FADES. That is a
              fix, not an inconsistency.

              Cross-fading every frame means that halfway through a
              transition the outgoing frame is at ~0.5 and the incoming
              one is at ~0.5, so the stack is only partly opaque and
              the page background shows through — a pale flash between
              frames, which is exactly what this looked like before.

              Holding frame 0 opaque underneath gives the others
              something to blend against, so the stack is fully covered
              at every point in the transition. Frame 0 itself is
              "shown" by the others simply fading away.
            */
            className={cn(
              'absolute inset-0 h-full w-full object-cover',
              i > 0 && 'hero-backdrop-frame',
            )}
            data-active={i === index ? 'true' : 'false'}
          />
        ))}

        <div className="hero-scrim absolute inset-0" />
      </div>

    </>
  )
}
