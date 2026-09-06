// Route: /locations/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { HubPageTemplate } from '@/components/templates'
import { HeroBackdrop } from '@/components/sections'
import { locationsHubBackdrop } from '@/data/business/locations-hub-backdrop'
import { getHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'hub-locations' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  /*
    The one hub with a hero backdrop (owner, 2026-09-05).

    One frame per market, cross-fading in the same order the page's own
    market list runs. `HeroBackdrop` carries the reduced-motion gate,
    the server-renders-frame-one LCP behaviour, and the scrim that
    makes the white copy legible; `data/business/locations-hub-backdrop.ts`
    carries the frames and their provenance.

    ⚠ THE FRAMES ARE DECORATIVE AND UNLABELLED, WHICH IS WHAT KEEPS
    THEM HONEST. They are rendered scenes, so naming a market on one
    would assert a photograph of a place where no verified local
    presence exists (01 §21, DEC-020 to DEC-022). The page's copy
    already says these are service markets and not offices; the
    backdrop must not quietly say otherwise.
  */
  return (
    <HubPageTemplate
      page={page}
      content={content}
      backdrop={<HeroBackdrop set={locationsHubBackdrop} />}
    />
  )
}
