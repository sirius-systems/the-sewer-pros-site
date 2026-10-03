import type { CardImage } from '@/types'

/**
 * Build-environment image placeholders for the location pages.
 *
 * When on, a slot that has no photo yet resolves to a `CardImage` carrying
 * `placeholder` metadata, which the location `Photo` helper renders as a
 * labelled box. When off, `resolveSlotImage` returns `undefined` for an
 * unfilled slot and no placeholder markup is produced anywhere.
 *
 * Launch: set `IMAGE_SLOTS_DEFAULT` to false, or build with
 * `NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false`. The variable can only turn the
 * placeholders off. `NEXT_PUBLIC_*` values are inlined at build time.
 */

/** Build-environment review aid. Set to false before launch. */
const IMAGE_SLOTS_DEFAULT = true

export const SHOW_IMAGE_SLOTS =
  process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS === 'false' ? false : IMAGE_SLOTS_DEFAULT

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
