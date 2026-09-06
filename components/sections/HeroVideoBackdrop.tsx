'use client'

import Image from 'next/image'
import { useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import type { BackgroundVideo, CardImage } from '@/types'

/**
 * Looping video backdrop for a market hub hero.
 *
 * ===========================================================================
 * ⚠ SELF-MOVING CONTENT, ON OWNER DIRECTION (2026-09-05)
 * ===========================================================================
 * 18 §66, §39 and CLAUDE.md §59 ("be cautious with ... autoplay video")
 * all push against this. The owner supplied one clip per market hub and
 * directed it be used as the hero background. That is a third scoped
 * exception, alongside `ReviewMarquee` and `HeroBackdrop`, and it
 * covers THE THREE MARKET HUB HEROES ONLY. It is not licence for video
 * anywhere else on the site.
 *
 * ---------------------------------------------------------------------------
 * ⚠⚠ THERE IS NO PAUSE CONTROL, AND `prefers-reduced-motion` IS THE ONLY
 * THING STANDING BETWEEN THIS AND A WCAG 2.2.2 FAILURE
 * ---------------------------------------------------------------------------
 * A pause/play button shipped with the first version of this component
 * and was removed on owner direction (2026-09-05), the same call that
 * removed the homepage backdrop's a day earlier.
 *
 * ⚠ THE TWO REMOVALS ARE NOT EQUALLY DEFENSIBLE, AND THIS FILE WILL
 * NOT PRETEND OTHERWISE. `HeroBackdrop` sets out three conditions that
 * make its own removal defensible and then says, in as many words,
 * "⚠ IF ANY OF THOSE THREE STOPS BEING TRUE, THE CONTROL HAS TO COME
 * BACK." Its second condition is "Nothing moves" — that layer is an
 * opacity cross-fade between two stills.
 *
 * This one moves. It is moving content that starts automatically, runs
 * past five seconds (all three clips loop at ~10s), and sits in
 * parallel with the hero copy and the lead form. That is WCAG 2.2.2
 * exactly, and the control is the mechanism it asks for.
 *
 * What is left is the reduced-motion gate below, and it is doing real
 * work rather than paperwork: a visitor who has asked their OS for less
 * motion never has a `<video>` mounted at all, and sees the still. What
 * it does not cover is the visitor who has not set that preference and
 * simply wants the movement to stop. That visitor has no recourse on
 * this page.
 *
 * ⚠ IF THIS IS REVISITED, THE FIX IS THE BUTTON, NOT A SMALLER CLIP OR
 * A SLOWER ONE. Nothing about the footage changes the analysis; only a
 * mechanism to stop it does.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE POSTER IS THE PAGE. THE VIDEO IS AN ENHANCEMENT ON TOP OF IT.
 * ---------------------------------------------------------------------------
 * The server renders the market's `heroBackground` still and nothing
 * else. The `<video>` mounts after hydration, and only then if the
 * visitor has not asked for reduced motion and is not on a metered or
 * slow connection. Four groups therefore see a still hero, and none of
 * them see a degraded one:
 *
 *   - reduced-motion visitors
 *   - data-saver and slow-connection visitors
 *   - anyone whose browser blocks autoplay
 *   - anyone reading the page before hydration
 *
 * This is also why LCP is unaffected. The poster is the LCP candidate
 * and it is in the initial HTML with `priority`; the clip is never in
 * the critical path.
 *
 * ⚠ THE CLIPS ARE HEAVY: 4.6MB, 8.7MB and 8.7MB for Las Vegas, San
 * Diego and St. Louis, 1280x720 H.264, ~10s each. That is the material
 * as supplied, and the connection gate below is what keeps it off the
 * connections where it would hurt most. They should be re-encoded
 * smaller, and stripped of their dead AAC audio tracks, which ship
 * bytes for a track that is muted and can never be unmuted. Flagged
 * rather than done quietly: re-encoding owner-supplied footage is not
 * a decision to make on the way past.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE SCRIM IS NOT DECORATION. DO NOT LIGHTEN IT WITHOUT REMEASURING.
 * ---------------------------------------------------------------------------
 * White hero copy sits over these frames. `.hero-scrim` in
 * app/globals.css is the same measured overlay the homepage and the
 * still market heroes use — black at 55%, sized against a pure-white
 * worst case rather than against these particular files, which is what
 * lets a frame be swapped without re-deriving it. The arithmetic lives
 * beside the class.
 *
 * A moving background makes that margin matter more, not less: a still
 * can be measured once, whereas a clip presents a new worst case every
 * frame. Sizing against white is what covers the brightest frame the
 * footage could ever reach.
 *
 * ---------------------------------------------------------------------------
 * DECORATIVE, SO NO ACCESSIBLE NAME
 * ---------------------------------------------------------------------------
 * The media layer is `aria-hidden`, the poster carries `alt=""`, and
 * the clip has no caption track, because it carries no information the
 * copy does not already carry. `BackgroundVideo.describes` keeps the
 * set readable in source.
 *
 * ⚠ THAT `aria-hidden` IS SAFE ONLY WHILE THE LAYER HOLDS NOTHING
 * INTERACTIVE. It currently holds the still, the clip, and the scrim,
 * none of which a visitor can reach. Anything focusable added inside
 * it — a control, a link, a caption toggle — has to go OUTSIDE it
 * instead, or it becomes a tab stop that assistive technology cannot
 * see.
 */

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
 * ⚠ `true` is both the safe default and the useful one, for the same
 * two reasons `HeroBackdrop` gives. It is what a server that cannot
 * read a media query should assume, and it is what keeps the
 * server-rendered HTML down to the poster alone.
 */
function motionPreferenceOnServer() {
  return true
}

/* --------------------------------------------------------------------------
   The connection gate

   Several megabytes of decorative video is not a reasonable thing to
   spend an unwilling visitor's data on.

   `saveData` is an explicit request and is treated as one. The
   `effectiveType` list is the browser's own throughput estimate, so a
   phone on good wifi still gets the clip and a phone on a weak
   cellular signal does not. That is the actual constraint, and one a
   viewport-width test would get wrong in both directions.

   Read through `useSyncExternalStore` rather than an effect, for the
   same reasons the motion preference is: it IS an external store, it
   gives a defined server snapshot, and `connection` emits `change`
   when the network shifts under the visitor, so someone who walks out
   of wifi range stops being served the clip without a reload.

   `connection` is unavailable in Safari and Firefox, where the absence
   of a signal reads as "no reason to withhold" — the same default
   those browsers get for every other progressive enhancement here.
   -------------------------------------------------------------------------- */

const SLOW_EFFECTIVE_TYPES = ['slow-2g', '2g', '3g']

type NetworkInformation = EventTarget & {
  saveData?: boolean
  effectiveType?: string
}

function getConnection(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation }).connection
}

function subscribeToConnection(onChange: () => void) {
  const connection = getConnection()
  if (connection === undefined) return () => {}
  connection.addEventListener('change', onChange)
  return () => connection.removeEventListener('change', onChange)
}

function readConnectionAllowsVideo(): boolean {
  const connection = getConnection()
  if (connection === undefined) return true
  if (connection.saveData === true) return false
  if (
    connection.effectiveType !== undefined &&
    SLOW_EFFECTIVE_TYPES.includes(connection.effectiveType)
  ) {
    return false
  }
  return true
}

/**
 * Server snapshot: no video.
 *
 * ⚠ THIS IS THE HYDRATION GATE. Paired with the motion snapshot above,
 * it guarantees the server-rendered markup is the still alone, which
 * is what keeps the poster the LCP element and the clip out of the
 * critical path.
 */
function connectionAllowsVideoOnServer() {
  return false
}

/**
 * The still, the scrim, and whatever sits between them.
 *
 * `bg-brand` is the floor rather than decoration, exactly as in
 * `HeroBackdrop`: it is what shows before the poster decodes, so the
 * hero opens dark instead of as a flash of page white under the scrim.
 */
function BackdropLayer({
  poster,
  children,
}: {
  poster: CardImage
  children?: ReactNode
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-brand"
    >
      <Image
        src={poster.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {children}
      <div className="hero-scrim absolute inset-0" />
    </div>
  )
}

/**
 * The clip.
 *
 * ⚠ MOUNTED ONLY WHILE BOTH GATES ARE OPEN, AND THAT IS WHAT KEEPS
 * `started` HONEST. A visitor who turns on reduced motion or data
 * saver mid-session unmounts this whole component, so the flag cannot
 * survive as stale state describing a `<video>` that no longer exists.
 * Holding it in the parent and resetting it on a gate change would be
 * the same behaviour written less safely.
 */
function VideoLayer({
  video,
  poster,
}: {
  video: BackgroundVideo
  poster: CardImage
}) {
  /**
   * Has the clip painted a frame?
   *
   * This is the fade-in gate and nothing more. Until the `playing`
   * event fires, the element sits at opacity 0 over its own poster, so
   * a clip that is buffering — or that the browser quietly refused to
   * start — shows as the still rather than as a black rectangle.
   */
  const [started, setStarted] = useState(false)

  return (
    <BackdropLayer poster={poster}>
      <video
          /*
            `muted` is load-bearing twice over: it is what makes
            autoplay permissible at all in every current browser, and
            it is what keeps a clip with a live AAC track from ever
            making a sound. There is no control to unmute, so no audio
            ever plays and WCAG 1.4.2 does not arise. ⚠ REMOVING IT
            WOULD BOTH BREAK AUTOPLAY AND START AUDIO NOBODY ASKED
            FOR.

            `playsInline` stops iOS taking the clip fullscreen.

            `poster` as well as the `<Image>` beneath it: the element's
            own poster covers the gap between the video box existing
            and its first frame decoding, which is a different moment
            from the image below finishing.
          */
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster.src}
          onPlaying={() => setStarted(true)}
          className="hero-video-frame absolute inset-0 h-full w-full object-cover"
          data-started={started ? 'true' : 'false'}
        >
          <source src={video.src} type="video/mp4" />
      </video>
    </BackdropLayer>
  )
}

export interface HeroVideoBackdropProps {
  video: BackgroundVideo
  /** The still behind the clip. Rendered on the server; see the note above. */
  poster: CardImage
}

export function HeroVideoBackdrop({ video, poster }: HeroVideoBackdropProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    readMotionPreference,
    motionPreferenceOnServer,
  )
  const connectionAllowsVideo = useSyncExternalStore(
    subscribeToConnection,
    readConnectionAllowsVideo,
    connectionAllowsVideoOnServer,
  )

  if (prefersReducedMotion || !connectionAllowsVideo) {
    return <BackdropLayer poster={poster} />
  }

  return <VideoLayer video={video} poster={poster} />
}
