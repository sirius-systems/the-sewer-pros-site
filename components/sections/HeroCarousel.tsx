'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils/cn'
import type { CardImage } from '@/types'

/**
 * An accessible image carousel for a hero's second column.
 *
 * Governed by docs/18-design-system.md §28-34, §39, §66, §90, §94-95,
 * §146; CLAUDE.md §58, §59.
 *
 * ===========================================================================
 * ⚠ WHY THIS IS NOT `HeroBackdrop` WITH CONTROLS BOLTED ON
 * ===========================================================================
 * `HeroBackdrop` is a DECORATIVE full-bleed cross-fade. Every frame it
 * shows carries `alt=""`, the whole layer is `aria-hidden`, and its own
 * header note is explicit about the consequence:
 *
 *   "IF ANY OF THOSE THREE STOPS BEING TRUE, THE CONTROL HAS TO COME
 *    BACK. Giving a frame real alt text [...] turns this into moving
 *    information with no way to stop it."
 *
 * These frames DO carry real alt text: they are the page's own pictures
 * of what the services involve, not wallpaper behind a headline. That
 * makes this moving information, which is WCAG 2.2.2 territory, so it
 * ships with a pause control, previous and next, and slide indicators.
 * Reusing the backdrop and adding buttons would have meant one component
 * arguing both positions at once.
 *
 * ---------------------------------------------------------------------------
 * ⚠ MOTION IS OPT-IN, AND THE TIMER IS WHAT HAS TO KNOW
 * ---------------------------------------------------------------------------
 * Under `prefers-reduced-motion: reduce` no interval starts and no
 * transition is declared, so a visitor who asked for less motion gets
 * one still frame they can page through by hand. That cannot be pure
 * CSS, because the timer is JavaScript; `useSyncExternalStore` reads the
 * media query as the external store it is, with a server snapshot of
 * `true` so the first paint is a single static frame.
 *
 * ⚠ AUTOPLAY ALSO STOPS ON HOVER AND ON FOCUS ANYWHERE INSIDE. A
 * visitor reading a caption or tabbing to the next button is not asking
 * for the picture to change underneath them.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE LIVE REGION IS OFF WHILE IT PLAYS, ON DELIBERATELY
 * ---------------------------------------------------------------------------
 * An `aria-live` region that announced every automatic change would
 * interrupt a screen-reader user every seven seconds for pictures they
 * did not ask to see. It is `off` while the carousel is advancing on its
 * own and `polite` once it is paused or driven by a control, which is
 * the only time the change is the visitor's own action.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ONE PRIORITY IMAGE, AND ONE ONLY
 * ---------------------------------------------------------------------------
 * The first slide is `priority`; the rest are lazy. Five eager hero
 * images would compete for the same bandwidth as the LCP element and
 * make the page slower than the single image it replaced. The frame is a
 * fixed `aspect-video` box, so nothing shifts as the later ones arrive.
 */
export interface HeroCarouselProps {
  slides: readonly CardImage[]
  /** Names the region for assistive technology. */
  label?: string
  className?: string
}

/** Seconds each slide holds before the cross-fade to the next begins. */
const HOLD_SECONDS = 7

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
 * ⚠ `true` IS THE SAFE DEFAULT AND THE USEFUL ONE, the same choice
 * `HeroBackdrop` makes and for the same two reasons: it is what a server
 * that cannot read a media query should assume, and it is what makes the
 * server-rendered HTML settle on one frame rather than starting a timer
 * before the preference is known.
 */
function motionPreferenceOnServer() {
  return true
}

/** A chevron, drawn rather than imported. Decorative by construction. */
function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d={direction === 'left' ? 'm14.5 6-6 6 6 6' : 'm9.5 6 6 6-6 6'} />
    </svg>
  )
}

/** Two bars or a triangle. Decorative: the button's label carries the state. */
function PlayPause({ playing }: { playing: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      {playing ? (
        <>
          <rect x="7" y="5.5" width="3.5" height="13" rx="1" />
          <rect x="13.5" y="5.5" width="3.5" height="13" rx="1" />
        </>
      ) : (
        <path d="M8 5.5v13l11-6.5Z" />
      )}
    </svg>
  )
}

export function HeroCarousel({
  slides,
  label = 'Sewer service photographs',
  className,
}: HeroCarouselProps) {
  const groupId = useId()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [interacted, setInteracted] = useState(false)

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    readMotionPreference,
    motionPreferenceOnServer,
  )

  const count = slides.length
  const playing = !prefersReducedMotion && !paused && count > 1

  const go = useCallback(
    (next: number) => {
      setInteracted(true)
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      HOLD_SECONDS * 1000,
    )
    return () => window.clearInterval(timer)
  }, [playing, count])

  if (count === 0) return null

  const controlBase =
    'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary'

  return (
    /*
      ⚠ `aria-roledescription="carousel"` ON A LABELLED GROUP, which is
      the pattern that lets a screen reader announce what this is without
      inventing a landmark the page does not need.

      ⚠ HOVER AND FOCUS BOTH PAUSE, and focus is caught on the wrapper
      rather than on each control so tabbing anywhere inside counts.
    */
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={cn('flex flex-col gap-3', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/*
        ⚠ A FIXED 16:9 BOX, WHICH IS ALSO THE FILES' OWN RATIO. Every
        frame is 3344x1882, so `object-cover` crops nothing and the
        aspect box means no slide can shift the layout as it loads.

        ⚠ THE FRAME IS A THIN BORDER AND A MODEST RADIUS, no drop
        shadow. It has to read as a picture panel beside the copy, not
        as a floating card.
      */}
      <div
        aria-live={playing ? 'off' : 'polite'}
        aria-atomic="false"
        className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface-muted"
      >
        {slides.map((slide, position) => {
          const active = position === index
          return (
            <div
              key={slide.src}
              id={`${groupId}-slide-${position}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${position + 1} of ${count}`}
              aria-hidden={!active}
              /*
                ⚠ INACTIVE SLIDES ARE `inert`, NOT MERELY TRANSPARENT.
                An `aria-hidden` layer sitting at opacity 0 over the
                visible one would still take pointer events; `inert`
                removes it from hit testing and from the tab order in
                one attribute.
              */
              inert={!active ? true : undefined}
              className={cn(
                'absolute inset-0',
                /*
                  ⚠ THE TRANSITION IS DECLARED ONLY WHEN MOTION IS
                  WANTED. Under reduced motion the class is absent, so
                  paging by hand is an instant swap rather than a fade
                  the visitor asked not to see.
                */
                !prefersReducedMotion &&
                  'transition-opacity duration-700 ease-in-out motion-reduce:transition-none',
                active ? 'opacity-100' : 'opacity-0',
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
                /*
                  ⚠ ONE PRIORITY IMAGE, AND NO `loading` PROP BESIDE IT.
                  `priority` alone is what makes `next/image` emit
                  `loading="eager" fetchpriority="high"`; passing
                  `loading` as well - even as `undefined` - suppressed
                  both and shipped a hero image with no priority hint at
                  all. The other four take the component's own default,
                  which is lazy.
                */
                priority={position === 0}
              />
            </div>
          )
        })}
      </div>

      {count > 1 && (
        <div className="flex flex-wrap items-center gap-2">
          {/*
            ⚠ 44px CONTROLS. `h-11 w-11` is 44px square, which is the
            touch target minimum, and the buttons keep it at every
            width rather than shrinking on mobile where it matters most.
          */}
          <button
            type="button"
            onClick={() => go(index - 1)}
            className={controlBase}
          >
            <Chevron direction="left" />
            <span className="sr-only">Previous image</span>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className={controlBase}
          >
            <Chevron direction="right" />
            <span className="sr-only">Next image</span>
          </button>

          {/*
            ⚠ THE PAUSE CONTROL IS HIDDEN WHERE NOTHING AUTOPLAYS. Under
            reduced motion the carousel never advances by itself, so a
            pause button would claim to stop something that is not
            happening. Previous and next stay, because paging by hand is
            exactly what that visitor is left with.
          */}
          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => {
                setInteracted(true)
                setPaused((was) => !was)
              }}
              aria-pressed={paused}
              className={controlBase}
            >
              <PlayPause playing={playing} />
              <span className="sr-only">
                {paused ? 'Play image carousel' : 'Pause image carousel'}
              </span>
            </button>
          )}

          {/*
            ⚠ DOTS ARE BUTTONS, NOT DECORATION. Each one jumps to its
            slide and states which it is; `aria-current` is what tells a
            screen reader where the carousel currently sits without a
            live announcement.

            ⚠ THE HIT AREA IS 44px EVEN THOUGH THE DOT IS 10px. The
            padding is the target; the dot is only what you see.
          */}
          <ul className="ml-auto flex items-center gap-1">
            {slides.map((slide, position) => (
              <li key={slide.src}>
                <button
                  type="button"
                  onClick={() => go(position)}
                  aria-current={position === index ? 'true' : undefined}
                  aria-controls={`${groupId}-slide-${position}`}
                  className="flex h-11 w-6 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'block h-2.5 w-2.5 rounded-full transition-colors',
                      position === index
                        ? 'bg-accent-secondary'
                        : 'bg-border',
                    )}
                  />
                  <span className="sr-only">
                    {`Show image ${position + 1} of ${count}`}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/*
            ⚠ THE POSITION TEXT APPEARS ONLY AFTER A CONTROL IS USED,
            and it is what the polite region announces then. Rendering
            it from the start would have the region read on load.
          */}
          <p className="sr-only" aria-live="polite">
            {interacted ? `Image ${index + 1} of ${count}` : ''}
          </p>
        </div>
      )}
    </div>
  )
}
