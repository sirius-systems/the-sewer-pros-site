import type { HeroBackdropImage, HeroBackdropSet } from './hero-backdrop'

/**
 * FAQ page (`/faq/`) hero backdrop: one frame, so `HeroBackdrop` does not
 * cycle.
 *
 * ⚠ GENERATED IMAGE, SCENE ONLY (DEC-145, owner-approved). It is decorative
 * and carries `alt=""`. It must not be described or captioned as a real
 * job, finding or customer. The equipment shown is owner-approved
 * (DEC-132, DEC-145).
 */
const frames: readonly HeroBackdropImage[] = [
  {
    src: '/images/brand/frequently-asked-questions/the-sewer-pros-sewer-drain-faqs-hero-seesnake-camera-inspection-16x9.webp',
    describes:
      'Sewer camera monitor showing the inside of a pipe, with a cable reel behind it, in a room with a window and a concrete floor',
    source: 'Generated image (DEC-145), owner-approved. Scene, not a photograph of a Sewer Pros job.',
  },
]

export const faqHeroBackdrop: HeroBackdropSet = {
  images: frames,
  width: 1672,
  height: 941,
}
