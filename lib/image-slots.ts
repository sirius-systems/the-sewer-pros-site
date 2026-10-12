import type { CardImage } from '@/types'
import { LAUNCH_MODE, SLOT_AUDIT_BUILD } from '@/lib/launch'

/**
 * Build-environment image placeholders for the location pages.
 *
 * When on, a slot that has no photo yet resolves to a `CardImage` carrying
 * `placeholder` metadata, which the location `Photo` helper renders as a
 * labelled box. When off, `resolveSlotImage` returns `undefined` for an
 * unfilled slot and no placeholder markup is produced anywhere.
 *
 * Launch: set `LAUNCH_MODE` to true in `lib/launch.ts`. That forces
 * `SHOW_IMAGE_SLOTS` off whatever `NEXT_PUBLIC_SHOW_IMAGE_SLOTS` says, so every
 * unfilled slot, every `ImagePlaceholder` and every other placeholder box
 * renders nothing. Before launch, `NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false` can still
 * turn the placeholders off for one build; it can never turn them on.
 * `NEXT_PUBLIC_*` values are inlined at build time.
 *
 * Every placeholder component reads `SHOW_IMAGE_SLOTS` (directly, or through
 * `resolveSlotImage` / `onlyWhenSlotsShown`). The rule lives here and nowhere else.
 */

/** Preview default. Not a launch control; `LAUNCH_MODE` is. */
const IMAGE_SLOTS_DEFAULT = true

/** True when the build is a launch build (and not the throwaway audit render). */
const LAUNCH_ACTIVE = LAUNCH_MODE && !SLOT_AUDIT_BUILD

export const SHOW_IMAGE_SLOTS = LAUNCH_ACTIVE
  ? false
  : process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS === 'false'
    ? false
    : IMAGE_SLOTS_DEFAULT

/**
 * Wrap any placeholder markup in this. Returns the node while placeholders are
 * shown and `null` otherwise, so launch mode removes it everywhere.
 */
export function onlyWhenSlotsShown<T>(node: T): T | null {
  return SHOW_IMAGE_SLOTS ? node : null
}

/**
 * Small "development only" labels (for example the missing-backdrop hint).
 * Shown only while placeholders are shown and never in a production build.
 */
export const SHOW_DEV_SLOT_LABELS = SHOW_IMAGE_SLOTS && process.env.NODE_ENV !== 'production'

/**
 * Provenance for the owner-supplied photorealistic renders wired into slots.
 * They are rendered scenes, not photos of a Sewer Pros job.
 */
export const RENDER_IMAGE_SOURCE =
  'Photorealistic render supplied by the business owner, 2026-10-12. Rendered scene, not a Sewer Pros job photo.'

/** The shape of an entry in a page module's `IMAGE_SLOTS` registry. */
export interface ImageSlotLike {
  id: string
  ratio: '16:9' | '4:3'
  alt: string
  shot: string
  src?: string
  source?: string
}

export function resolveSlotImage(slot: ImageSlotLike | undefined): CardImage | undefined {
  if (slot === undefined) return undefined
  if (slot.src && slot.source) {
    return { src: slot.src, alt: slot.alt, source: slot.source }
  }
  if (!SHOW_IMAGE_SLOTS) return undefined
  return {
    src: '',
    alt: slot.alt,
    source: 'Image slot placeholder (review build only)',
    placeholder: { slotId: slot.id, ratio: slot.ratio, shot: slot.shot },
  }
}
