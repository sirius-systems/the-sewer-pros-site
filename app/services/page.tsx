// Route: /services/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { HubPageTemplate } from '@/components/templates'
import { getHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'hub-services' as PageId

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
    ⚠ `muted` SINCE 2026-09-08, WHERE THIS HUB TOOK THE DEFAULT BEFORE.
    `HubPageTemplate` derives every surface BELOW the member list from
    this value and cannot derive this one, because the prop is what the
    route is for. With the home page's bands added, `default` here
    walked the chain to a `muted` FAQ directly above the `muted` split
    CTA, and the `AuthorityBand` that normally buffers that pair is
    suppressed whenever the process band renders. One flip at the top
    fixes the whole run: muted list, default coverage, muted confidence,
    default FAQ, muted CTA.

    ⚠ `numbered` IS INERT NOW AND KEPT ON PURPOSE. The member list
    renders the mosaic, which ignores it; it is the setting the row-list
    fallback would use if the cards ever lost their artwork.
  */
  return (
    <HubPageTemplate
      page={page}
      content={content}
      itemsTitle="Our services"
      itemsSurface="muted"
      numbered
    />
  )
}
