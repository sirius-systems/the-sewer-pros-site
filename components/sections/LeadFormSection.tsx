import type { SectionDensity } from '@/components/ui'

/**
 * Inline lead form slot.
 *
 * Governed by docs/17-conversion-architecture.md §27-36, §59;
 * docs/18-design-system.md §56-61, §120;
 * docs/22-decisions-change-log.md PENDING-007, PENDING-008;
 * CLAUDE.md §58, §59.
 *
 * ===========================================================================
 * RENDERS NOTHING UNTIL PENDING-007 AND PENDING-008 RESOLVE
 * ===========================================================================
 * The reference composition places a compact lead form mid-page on all
 * six page types. The form ARCHITECTURE for this project is already
 * specified — 17 §27 (a simple primary form plus specialised forms for
 * high-value cases), §28 (the primary service request form), §36 (the
 * pre-purchase inspection form) — but two decisions are open:
 *
 *   PENDING-007  global primary CTA wording
 *   PENDING-008  final service form fields
 *
 * CLAUDE.md §58 is explicit: do not independently add large forms.
 * 18 §56-61 ties field design to the form's actual contents, which is
 * exactly what PENDING-008 has not settled.
 *
 * So this is a slot that holds the composition's place and renders
 * nothing. The templates reference it in the right position, which
 * means opening the gate is a change to this file rather than a
 * re-composition of twelve templates.
 *
 * ---------------------------------------------------------------------------
 * WHEN THE GATE OPENS
 * ---------------------------------------------------------------------------
 * Fields come from 17 §28 and §36, never from the reference style's
 * generic field list, which is written for a trade business with a
 * different conversion model.
 *
 * 17 §59 and CLAUDE.md §59: the submit event fires only after a
 * SUCCESSFUL submission. A button click, a form render, and a failed
 * validation attempt are none of them a lead.
 *
 * Forms must preserve contextual metadata the page already knows —
 * market_id, service_id, audience_id, page_type — without asking the
 * visitor to re-enter it (CLAUDE.md §58). No PII reaches analytics
 * (CLAUDE.md §40, 19).
 */
/**
 * The contract this section will take when the gate opens.
 *
 * Exported and documented now, but deliberately NOT yet a parameter of
 * the component below — while the section renders nothing it genuinely
 * accepts no input, and declaring an unused parameter would be dead
 * surface that lint correctly objects to.
 *
 * Templates render `<LeadFormSection />` bare. Opening the gate means
 * adding the parameter here, not editing twelve call sites.
 */
export interface LeadFormSectionProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — will
   * need this once the section occupies real space (18 §108).
   */
  density?: SectionDensity
  id?: string
}

export function LeadFormSection(): null {
  // 18 §120 — omit the section entirely rather than render an empty
  // shell. See the header: this is a gate, not an unfinished component.
  return null
}
