/**
 * Design-system primitives.
 *
 * Build sequence step 17 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/18-design-system.md.
 *
 *   import { Section, Container, ButtonLink } from '@/components/ui'
 *
 * ---------------------------------------------------------------------------
 * ⚠ VALUES ARE PLACEHOLDERS; ROLES ARE NOT
 * ---------------------------------------------------------------------------
 * PENDING-005 (palette), PENDING-006 (typography), and DEC-064 (visual
 * identity ownership, still PROPOSED) are unresolved. Every colour in
 * `app/globals.css` is a neutral stand-in.
 *
 * These primitives are built against semantic TOKENS, so approving the
 * palette should change `globals.css` and nothing here (18 §124).
 * Structure, spacing, density, and accessibility are all
 * palette-independent, which is why step 17 was buildable ahead of
 * those decisions.
 *
 * ---------------------------------------------------------------------------
 * WHAT IS NOT HERE, AND WHY
 * ---------------------------------------------------------------------------
 * No `Hero`, `TrustBar`, `ProcessSteps`, `ServiceCard`, or `PrimaryCTA`.
 * Those are page SECTIONS (18 §107) and belong to step 18 — they carry
 * content decisions and conversion rules (17), not just presentation.
 *
 * No form primitives yet: PENDING-008 (final service form fields) is
 * open, and 18 §56-61 ties field design to the form's actual contents.
 *
 * All primitives are Server Components. Nothing here needs client
 * JavaScript — the accordion and the header menu both use native
 * `<details>` (02 §30).
 */

export { Container } from './Container'
export type { ContainerProps, ContainerWidth } from './Container'

export { Section, sectionRhythmIssues } from './Section'
export type { SectionProps, SectionDensity, SectionSurface } from './Section'

export { Button, ButtonLink } from './Button'
export type { ButtonProps, ButtonLinkProps, ButtonVariant } from './Button'

export { Prose, ScrollableTable } from './Prose'
export type { ProseProps } from './Prose'

export { Callout } from './Callout'
export type { CalloutProps, CalloutKind } from './Callout'

export { Card, LinkCard, CardGrid } from './Card'
export type { CardProps, LinkCardProps, CardGridProps } from './Card'

export { Accordion, AccordionItem } from './Accordion'
export type { AccordionProps, AccordionItemProps } from './Accordion'

export { Badge } from './Badge'
export type { BadgeProps, BadgeTone } from './Badge'
