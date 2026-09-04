import type { ReactNode } from 'react'
import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import type { PageId } from '@/types'

/**
 * The homepage's four-step inspection process.
 *
 * Authority: docs/18-design-system.md §64, §65, §141;
 *            docs/01-business-brand-foundation.md §3, §4;
 *            docs/06-master-service-registry.md;
 *            CLAUDE.md §8, §9, §29.
 *
 * ===========================================================================
 * WHY THIS IS NOT IN `authority.ts`
 * ===========================================================================
 * `authorityProofPoints` is four short label/detail pairs, each citing
 * the document that establishes it, rendered identically on every page
 * type. This is a different thing: full paragraphs, a sequence, inline
 * links, and a closing services statement, and it is HOMEPAGE-ONLY.
 * Adding it to `authority.ts` would either widen that shape for one
 * caller or change what nine other templates render. So it is a
 * separate export behind a separate variant, and `authority.ts` is
 * untouched.
 *
 * ---------------------------------------------------------------------------
 * ⚠ `.tsx`, NOT `.ts`, AND FOR ONE REASON
 * ---------------------------------------------------------------------------
 * The bodies carry inline links, so they are `ReactNode` rather than
 * `string`. They go through `ApprovedInlineLink`, the same helper
 * `content/pages/core.tsx` uses, so every destination is a PAGE ID
 * resolved against the approved registry at render — never a written
 * href (16 §25, CLAUDE.md §37, §51). A gated or unauthored page fails
 * at the resolver instead of shipping a dead link.
 *
 * ---------------------------------------------------------------------------
 * ⚠ FIRST OCCURRENCE ONLY
 * ---------------------------------------------------------------------------
 * Each service is linked the FIRST time it appears across the whole
 * section and left as plain text everywhere after. "Sewer camera
 * inspection" is linked in step 01 and plain in the closing statement;
 * "sewer cleaning" and "hydro jetting" are linked in step 03 and plain
 * in the closing statement. Repeating a link every time a term appears
 * is the pattern 16 warns about — it dilutes the signal and reads as
 * keyword stuffing to a human.
 *
 * ---------------------------------------------------------------------------
 * ⚠ WHAT THIS COPY DOES NOT CLAIM
 * ---------------------------------------------------------------------------
 * No response time, no availability window, no certification, no
 * licence, no guarantee, no volume or experience figure, no promise of
 * what the inspection will find. CLAUDE.md §24 lists all of those as
 * facts that may not be invented, and none of them is established for
 * this business anywhere in `data/business/`.
 *
 * "Accessible line" in step 01 is deliberate and matches the wording
 * the FAQ already uses: a camera sees what it can reach, and claiming
 * otherwise would be a capability claim.
 *
 * ⚠ THE REPAIR BOUNDARY IS THE POINT OF STEP 04. CLAUDE.md §9 forbids
 * presenting the business as a repair or replacement contractor. The
 * step says plainly that it does not sell repair, and routes the
 * customer to a contractor of their own choosing. Do not soften that
 * into an offer to arrange the work.
 */
export interface AuthorityProcessStep {
  id: string
  number: string
  title: string
  /** Prose with inline approved links — see the header. */
  body: ReactNode
  icon: 'inspect' | 'document' | 'understand' | 'decide'
  /**
   * True only for the final step.
   *
   * ⚠ It marks "this step is YOURS", not "the other three matter
   * less". See the treatment note in `AuthorityBand`.
   */
  highlight?: boolean
}

export interface AuthorityProcessContent {
  eyebrow: string
  title: string
  intro: ReactNode
  steps: readonly AuthorityProcessStep[]
  closing: ReactNode
  primaryAction: { href: string; label: string }
  secondaryAction: { href: string; label: string }
}

const id = (value: string): PageId => value as PageId

export const authorityProcess: AuthorityProcessContent = {
  eyebrow: 'Evidence-first sewer diagnostics',
  title: 'How our sewer inspection process works',
  intro: (
    <>
      Every sewer inspection follows the same process, whether you are a
      homeowner dealing with a{' '}
      <ApprovedInlineLink pageId={id('svc-recurring-sewer-backup-diagnosis')}>
        recurring backup
      </ApprovedInlineLink>
      , a buyer who wants to know what is in the line{' '}
      <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>
        before closing
      </ApprovedInlineLink>
      , or a property manager scheduling{' '}
      <ApprovedInlineLink pageId={id('svc-preventative-sewer-maintenance')}>
        preventative maintenance
      </ApprovedInlineLink>
      . We look, we document, we explain, and you decide.
    </>
  ),
  steps: [
    {
      id: 'inspect',
      number: '01',
      title: 'Inspect the sewer line',
      icon: 'inspect',
      body: (
        <>
          We run a{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
            sewer camera inspection
          </ApprovedInlineLink>{' '}
          through the accessible line to see its actual condition, root
          intrusion, blockages, offset joints, bellies, or cracks, on video
          rather than relying on guesswork from symptoms alone.
        </>
      ),
    },
    {
      id: 'document',
      number: '02',
      title: 'Document the visible evidence',
      icon: 'document',
      body: (
        <>
          The inspection is recorded and the findings are documented as we go,
          so what we observe in your sewer line is captured on video and in
          writing, not just described after the fact.
        </>
      ),
    },
    {
      id: 'understand',
      number: '03',
      title: 'Understand what the footage shows',
      icon: 'understand',
      body: (
        <>
          We walk you through the footage and explain what it actually shows in
          plain language, what is a maintenance issue a{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
            sewer cleaning
          </ApprovedInlineLink>{' '}
          or{' '}
          <ApprovedInlineLink pageId={id('svc-hydro-jetting')}>
            hydro jetting
          </ApprovedInlineLink>{' '}
          can resolve, and what may point toward a structural issue worth a
          second opinion.
        </>
      ),
    },
    {
      id: 'decide',
      number: '04',
      title: 'Decide what happens next',
      icon: 'decide',
      highlight: true,
      body: (
        <>
          You keep the video and the findings. That evidence is yours to use
          however you choose, to schedule cleaning or preventative maintenance
          with us, to get a second opinion, or to make an informed decision
          about a bigger repair with a contractor of your choosing. We do not
          sell sewer repair or replacement, so the decision about what happens
          next stays yours.
        </>
      ),
    },
  ],
  closing: (
    <>
      We are sewer and drain specialists: sewer camera inspection, sewer
      diagnostics, sewer cleaning, hydro jetting,{' '}
      <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>
        sewer line locating
      </ApprovedInlineLink>
      ,{' '}
      <ApprovedInlineLink pageId={id('svc-drain-cleaning')}>
        drain cleaning
      </ApprovedInlineLink>
      , pre-purchase sewer inspection, and{' '}
      <ApprovedInlineLink pageId={id('hub-commercial')}>
        commercial sewer and drain service
      </ApprovedInlineLink>
      , all built around the same evidence-first process.
    </>
  ),
  /*
    ⚠ THE PRIMARY ACTION IS `PRIMARY_CTA`'S VALUES, RESTATED HERE ONLY
    AS DATA. `AuthorityBand` still imports the constant itself, so
    resolving PENDING-007 stays a one-line change in
    `components/layout/cta.ts` rather than a search. Do not let these
    two drift.
  */
  primaryAction: { href: '/contact/', label: 'Schedule a Sewer Inspection' },
  secondaryAction: { href: '/services/', label: 'View all sewer and drain services' },
}
