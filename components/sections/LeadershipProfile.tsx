import Image from 'next/image'
import {
  Section,
  ImagePlaceholder,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import type { LeadershipPerson } from '@/types'

/**
 * Founder / leadership section — `/about/` only.
 *
 * Two cards, not a grid built for more: `BasePageContent`'s
 * `AboutPageContent.leadership` is a two-tuple, and 18 §5.6 warns
 * against forcing an item count into a grid it does not divide into.
 * A team roster beyond the founders is deliberately out of scope for
 * this pass — no approved, permissioned team photography exists yet.
 *
 * ⚠ `person.photo` FALLS BACK TO `ImagePlaceholder`, NOT THE OTHER WAY
 * AROUND. A founder card renders the real photograph when
 * `AboutPageContent.leadership` supplies one and the labelled
 * placeholder otherwise, so this component works before and after
 * photography lands with no code change.
 */
export interface LeadershipProfileProps {
  density?: SectionDensity
  surface?: SectionSurface
  id?: string
  people: readonly [LeadershipPerson, LeadershipPerson]
}

export function LeadershipProfile({
  density = 'standard',
  surface = 'muted',
  id = 'leadership',
  people,
}: LeadershipProfileProps) {
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading
        id={id}
        eyebrow="Leadership"
        title="Meet the people behind The Sewer Pros"
        level="h2"
      />
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {people.map((person) => (
          <article
            key={person.name}
            className="flex flex-col gap-5 rounded-md border border-border bg-surface p-6"
          >
            {person.photo !== undefined ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
                <Image
                  src={person.photo.src}
                  alt={person.photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            ) : (
              <ImagePlaceholder
                label={person.photoLabel}
                aspect="4/3"
                className="bg-background"
              />
            )}
            <div>
              <h3 className="text-h4 font-semibold tracking-tight text-foreground">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {person.role}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {person.bio}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
