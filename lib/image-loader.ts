import variants from './image-variants.json'

/**
 * Custom `next/image` loader for the static export.
 *
 * `output: 'export'` has no image optimizer, so responsive sizes are made ahead
 * of time by `scripts/generate-image-variants.mjs`: `<name>-640w.webp`, `-960w.webp` and
 * `-1280w.webp` beside each original, listed in `lib/image-variants.json`.
 * For a requested width this returns the smallest variant that is at least that
 * wide, and the original (always the largest size) when none is. Files with no
 * variants (logos, SVG, small images) are returned unchanged, so their `srcset`
 * entries all point at the one file. The 12 owner-approved renders keep their
 * original as the largest variant.
 */
const MANIFEST = variants as Record<string, number[]>

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  const widths = MANIFEST[src]
  if (!widths) return src
  const pick = widths.find((w) => w >= width)
  return pick ? src.replace(/\.webp$/, `-${pick}w.webp`) : src
}
