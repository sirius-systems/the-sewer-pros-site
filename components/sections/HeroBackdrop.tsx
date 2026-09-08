'use client'

import Image from 'next/image'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils/cn'
import { heroBackdropRenders, type HeroBackdropSet } from '@/data/business/hero-backdrop'

/**
 * Cross-fading photographic backdrop for a hero.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NOT HOMEPAGE-ONLY ANY MORE. IT TAKES ITS FRAMES AS A PROP.
 * ---------------------------------------------------------------------------
 * This shipped reading one hardcoded module, and every note below was
 * written about that one set. It now takes a `HeroBackdropSet`, and
 * `/locations/` uses it as well as the home page (owner, 2026-09-05).
 *
 * ⚠ THE NOTES BELOW ARE ABOUT THE MECHANISM, NOT ABOUT ONE SET OF
 * PICTURES, WITH ONE EXCEPTION: the contrast measurements name the
 * five home page frames specifically. What generalises is the reason
 * the scrim is sized against pure white instead of against those five
 * files — a new set gets legibility from that choice rather than from
 * anyone re-measuring. See `.hero-scrim` in app/globals.css.
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
 * The first frame renders on the server with `priority`; the rest
 * mount only after hydration. That is deliberate. The whole set in the
 * initial HTML would be hundreds of kilobytes of in-viewport imagery
 * competing for the same connection as the frame that actually gets
 * painted, and the hero background is the LCP element on every page
 * that uses this. Frame one is therefore the only one the browser sees
 * before first paint.
 *
 * ⚠ THAT MAKES FRAME ORDER AN LCP DECISION, NOT ONLY AN EDITORIAL ONE.
 * Whichever frame a set puts first is the one every visitor downloads
 * before anything is painted.
 */

/**
 * Shared class for the optional controls.
 *
 * ⚠ TRANSLUCENT NAVY WITH A WHITE BORDER, NOT A SOLID FILL. The
 * controls sit over five different photographs; a fill tuned to one of
 * them fails on another, and the border is what gives the button an
 * edge on every frame. `backdrop-blur-sm` applies to the control only,
 * never to the hero copy.
 *
 * ⚠ 44px SQUARE. `h-11 w-11` is the touch-target minimum, kept at every
 * width rather than shrunk on mobile where it matters most.
 */
const CONTROL =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-brand/60 text-white backdrop-blur-sm transition-colors hover:bg-brand/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

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

export interface HeroBackdropProps {
  /** The frames and their shared intrinsic size. */
  set: HeroBackdropSet
  /**
   * Renders previous, next, pause and slide indicators.
   *
   * ⚠ OFF BY DEFAULT, WHICH IS WHAT LEAVES THE HOME PAGE AND
   * `/locations/` BYTE-IDENTICAL. Neither passes it, neither gains a
   * control, and the header note above records why those two can defend
   * having none.
   *
   * ⚠ IT ALSO TURNS ON PAUSING. Hover, focus inside the hero and a
   * hidden tab stop the timer only where controls render. Same scoping
   * decision: a behaviour change on the two existing callers is still a
   * change, and neither asked for one.
   *
   * ⚠ THE CONTROLS DO NOT MAKE THE FRAMES CONTENT. They stay `alt=""`
   * under an `aria-hidden` layer, so nothing is announced when the
   * picture changes and the page's meaning stays in the copy on top.
   * The buttons are an additional way to stop and steer motion, which
   * is strictly more than WCAG 2.2.2 asks of a decorative cross-fade.
   */
  controls?: boolean
}

export function HeroBackdrop({
  set,
  controls = false,
}: HeroBackdropProps) {
  const [index, setIndex] = useState(0)
  /*
    ⚠ PAUSING EXISTS ONLY ON THE CONTROLLED VARIANT. `paused` is set by
    the pause button, by hover, by focus inside the hero and by the tab
    going hidden; with `controls` off nothing ever writes it and the two
    existing callers keep the timer they have always had.
  */
  const [paused, setPaused] = useState(false)
  const [pointerPaused, setPointerPaused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [announced, setAnnounced] = useState(false)

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

  /*
    ⚠ A HIDDEN TAB STOPS THE TIMER. `setInterval` keeps firing in a
    background tab, so without this a visitor returning after a minute
    lands on whichever frame the clock happened to reach. Only wired
    where controls render, for the scoping reason on the prop.
  */
  useEffect(() => {
    if (!controls) return
    const onChange = () => setHidden(document.hidden)
    onChange()
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [controls])

  const running =
    enhanced && !(controls && (paused || pointerPaused || hidden))

  useEffect(() => {
    if (!running || set.images.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % set.images.length)
    }, HOLD_SECONDS * 1000)
    return () => window.clearInterval(id)
  }, [running, set.images.length])

  if (!heroBackdropRenders(set)) return null

  // Before hydration, and under reduced motion, this is the whole set.
  const frames = enhanced ? set.images : set.images.slice(0, 1)

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
            width={set.width}
            height={set.height}
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
              /*
                ⚠ 700ms WHERE THE DEFAULT IS 1200ms. A hero a visitor
                can page through by hand wants a transition that
                finishes before they reach for the next button; the
                two callers without controls keep the slower fade they
                were tuned for.
              */
              i > 0 && controls && 'hero-backdrop-frame--swift',
            )}
            data-active={i === index ? 'true' : 'false'}
          />
        ))}

        {/*
          ⚠ ONE OVERLAY FOR EVERY CALLER, AND IT IS THE HOME PAGE'S.
          A left-weighted navy gradient shipped here for one build, for
          the services hub alone; the owner asked for the home page's
          settings and colour instead (2026-09-08), so the variant and
          its CSS are gone rather than left unused. See the measurements
          beside `.hero-scrim` in `app/globals.css` for why a flat 55%
          black is what the copy is legible against.
        */}
        <div className="hero-scrim absolute inset-0" />
      </div>

      {/*
        ==================================================================
        CONTROLS - OPT-IN, AND OUTSIDE THE `aria-hidden` LAYER
        ==================================================================
        ⚠ THEY ARE SIBLINGS OF THE FRAME STACK, NOT CHILDREN OF IT. That
        layer is `aria-hidden` and at `-z-10`; a button inside it would
        be hidden from assistive technology and painted behind the copy.

        ⚠ HOVER AND FOCUS PAUSE FROM HERE, WHICH IS NARROWER THAN THE
        WHOLE HERO ON PURPOSE. The copy above these frames carries the
        page's two CTAs; pausing when a visitor tabs to "Explore Sewer
        Services" would tie an unrelated control to the timer. Pointer
        and focus over the controls themselves is the interaction that
        means "I am steering this".

        ⚠ LOWER RIGHT ON DESKTOP, CENTRED UNDER THE COPY ON MOBILE, and
        never over the CTA row: the hero's buttons are on the left, so
        `sm:justify-end` moves these away from them rather than on top.

        ⚠ NO LIVE REGION FOR AUTOMATIC CHANGES. The frames are
        decorative and the copy does not change, so there is nothing to
        announce. The status line below is rendered only after a
        control is pressed, which is the one case where the change was
        the visitor's own action.
      */}
      {controls && set.images.length > 1 && (
        <div
          /*
            ⚠ ABSOLUTELY POSITIONED, NOT IN FLOW. `Hero`'s backdrop
            branch wraps everything in `relative isolate
            overflow-hidden`, and this block is a sibling of the frame
            stack rather than a child of it - so in normal flow it
            would paint ABOVE the copy, at the top of the hero. Pinning
            it to the bottom edge is what puts it under the copy on
            mobile and in the lower right on desktop.

            ⚠ `pointer-events-none` ON THE STRIP, RE-ENABLED ON THE
            BUTTONS. The strip spans the hero's full width; without
            this it would swallow clicks across the whole bottom band,
            including on the copy behind it.
          */
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center justify-center gap-2 px-4 pb-6 [&_button]:pointer-events-auto sm:justify-end sm:px-8 sm:pb-8"
          onMouseEnter={() => setPointerPaused(true)}
          onMouseLeave={() => setPointerPaused(false)}
          onFocusCapture={() => setPointerPaused(true)}
          onBlurCapture={() => setPointerPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous background image"
            onClick={() => {
              setAnnounced(true)
              setIndex(
                (i) => (i - 1 + set.images.length) % set.images.length,
              )
            }}
            className={CONTROL}
          >
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
              <path d="m14.5 6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next background image"
            onClick={() => {
              setAnnounced(true)
              setIndex((i) => (i + 1) % set.images.length)
            }}
            className={CONTROL}
          >
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
              <path d="m9.5 6 6 6-6 6" />
            </svg>
          </button>

          {/*
            ⚠ HIDDEN WHERE NOTHING AUTOPLAYS. Under reduced motion the
            timer never starts, so a pause button would claim to stop
            something that is not happening. Previous and next stay,
            because paging by hand is what that visitor is left with.
          */}
          {enhanced && (
            <button
              type="button"
              aria-label={
                paused
                  ? 'Play background image carousel'
                  : 'Pause background image carousel'
              }
              aria-pressed={paused}
              onClick={() => setPaused((was) => !was)}
              className={CONTROL}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                {paused ? (
                  <path d="M8 5.5v13l11-6.5Z" />
                ) : (
                  <>
                    <rect x="7" y="5.5" width="3.5" height="13" rx="1" />
                    <rect x="13.5" y="5.5" width="3.5" height="13" rx="1" />
                  </>
                )}
              </svg>
            </button>
          )}

          {/*
            ⚠ THE ACTIVE DOT IS WIDER AS WELL AS BRIGHTER, so the
            current position is not carried by colour alone (18 §94).
            The hit area is 44px tall whatever the dot measures.
          */}
          <ul className="ml-1 flex items-center gap-1">
            {set.images.map((image, i) => (
              <li key={image.src}>
                <button
                  type="button"
                  aria-label={`Show background image ${i + 1} of ${set.images.length}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => {
                    setAnnounced(true)
                    setIndex(i)
                  }}
                  className="flex h-11 w-6 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'block h-2 rounded-full transition-all',
                      i === index ? 'w-5 bg-white' : 'w-2 bg-white/50',
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <p className="sr-only" aria-live="polite">
            {announced
              ? `Background image ${index + 1} of ${set.images.length}`
              : ''}
          </p>
        </div>
      )}
    </>
  )
}
