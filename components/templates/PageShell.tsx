import type { ReactNode } from 'react'
import {
  Container,
  sectionRhythmIssues,
  type SectionDensity,
} from '@/components/ui'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { PageViewTracker } from '@/components/tracking'
import { pageContext } from '@/lib/analytics'
import type { MasterPageRecord } from '@/types'

/**
 * Shared page shell.
 *
 * Governed by docs/18-design-system.md §108, §155, Appendix A, Appendix B;
 * docs/05-url-routing-strategy.md §82.
 *
 * Provides the two things every template needs regardless of family:
 * the breadcrumb trail, and a density-rhythm check over the sections
 * the template actually composed.
 *
 * ---------------------------------------------------------------------------
 * THE RHYTHM CHECK RUNS AT BUILD, NOT IN REVIEW
 * ---------------------------------------------------------------------------
 * 18 Appendix B is explicitly a judgement review of the RENDERED page,
 * run "after Claude Code has built the page, not as an automated
 * pre-build gate", because most of its checks are design judgements.
 *
 * Density is the exception. Whether a page varies its density is a
 * mechanical fact about the sequence, so it is checked here — and
 * reported as a build warning rather than an error, matching Appendix
 * B's instruction to present findings "as fixes to make, not a score".
 *
 * Templates pass the densities they composed. That list is written by
 * hand rather than inferred, which is deliberate: it makes the page's
 * intended rhythm explicit and reviewable in the template source.
 */
export interface PageShellProps {
  page: MasterPageRecord
  /**
   * Densities of the sections this template renders, in order.
   * Used only for the rhythm check.
   */
  densities: readonly SectionDensity[]
  children: ReactNode
}

export function PageShell({ page, densities, children }: PageShellProps) {
  const issues = sectionRhythmIssues(densities)

  if (issues.length > 0) {
    console.warn(
      `[rhythm] ${page.pathname} (${page.pageType})\n` +
        issues.map((issue) => `  - ${issue}`).join('\n'),
    )
  }

  return (
    <>
      {/*
        Page views, including client-side route changes (19 §134).
        Context is derived from the approved page record, so every event
        on this page carries identical canonical attribution (19 §131).
      */}
      <PageViewTracker context={pageContext(page)} />

      {/*
        Breadcrumbs sit above the hero in a standard container so they
        align with page content rather than the hero's own width.
      */}
      <Container className="pt-6">
        <Breadcrumbs pageId={page.id} />
      </Container>

      {children}
    </>
  )
}
