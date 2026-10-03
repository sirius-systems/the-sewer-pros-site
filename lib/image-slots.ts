import type { CardImage } from '@/types'

/**
 * Build-environment image placeholders for the location pages.
 *
 * ⚠ REVIEW BUILDS ONLY. `NEXT_PUBLIC_SHOW_IMAGE_SLOTS=true` makes a slot that
 * has no photo yet resolve to a `CardImage` carrying `placeholder` metadata,
 * which the location `Photo` helper renders as a labelled box. With the flag
 * unset (the default, and the production setting) `resolveSlotImage` returns
 * `undefined` for an unfilled slot, exactly as before, and no placeholder
 * markup is produced anywhere.
 *
 * Set the flag only on the Cloudflare Pages preview (pages.dev) environment,
 * never on production. `NEXT_PUBLIC_*` values are inlined at build time.
 */
export const SHOW_IMAGE_SLOTS = process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS === 'true'

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
