/**
 * Design-system primitives.
 *
 * Build sequence step 17 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/18-design-system.md.
 *
 *   import { Section, Container, ButtonLink } from '@/components/ui'
 *
 * ---------------------------------------------------------------------------
 * COLOURS ARE APPROVED BRAND VALUES
 * ---------------------------------------------------------------------------
 * DEC-096 (2026-09-03) approved the palette and typography, resolving
 * PENDING-005 and PENDING-006 and superseding DEC-064. The values live
 * in `app/globals.css` and are recorded as brand facts in
 * 01-business-brand-foundation.md.
 *
 * These primitives are built against semantic TOKENS, which is why
 * approving the palette changed `globals.css` and almost nothing here
 * (18 §124). Structure, spacing, density, and accessibility were all
 * palette-independent, which is why step 17 was buildable ahead of the
 * decision.
 *
 * ⚠ TWO ACCENTS, AND THEY ARE NOT INTERCHANGEABLE.
 *
 *   --accent            CTA green. Conversion actions ONLY.
 *   --accent-secondary  Authority blue. Links, nav states, secondary
 *                       buttons, focus rings, non-CTA emphasis.
 *
 * 18 §29 and DEC-096 both make this a discipline rather than a
 * preference: green scattered across icons, borders and headings is
 * what makes a conversion colour stop reading as one. Reach for
 * `accent-secondary` unless the thing is a call to action.
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

export { Field, TextInput, Textarea, Select, RadioGroup } from './Field'
export type {
  FieldProps,
  TextInputProps,
  TextareaProps,
  SelectProps,
  SelectOption,
  RadioGroupProps,
} from './Field'
