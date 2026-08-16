// Route: /[market]/[...segments]/
// Generated from the approved page registry (04 §4, 02 §21-23).
//
// Registry-resolved catch-all (05 §70-72). Resolution is lookup, never
// inference: 05 §69 notes a three-segment market path is ambiguous by
// shape alone, so segments are rejoined into a pathname and asked of the
// registry rather than parsed for meaning.
//
// One route file serves three page families — location, service+location,
// and the St. Louis market-specific service, which lives at
// /st-louis-mo/{service}/ (06 §23). The registry's pageType decides which
// template renders, so segment count is never inspected.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import {
  LocationPageTemplate,
  ServiceLocationPageTemplate,
  ServicePageTemplate,
} from '@/components/templates'
import {
  getLocationContent,
  getServiceContent,
  getServiceLocationContent,
} from '@/content'
import { marketCatchAllParams, resolveMarketRoute } from '@/lib/routing'

export function generateStaticParams() {
  return marketCatchAllParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string; segments: string[] }>
}): Promise<Metadata> {
  const { market, segments } = await params
  const page = resolveMarketRoute(market, segments)
  if (page === undefined) notFound()

  // One route serves three families; each has its own content store.
  const content =
    page.pageType === 'location'
      ? getLocationContent(page.id)
      : page.pageType === 'service-location'
        ? getServiceLocationContent(page.id)
        : getServiceContent(page.id)

  if (content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string; segments: string[] }>
}) {
  const { market, segments } = await params
  const page = resolveMarketRoute(market, segments)
  if (page === undefined) notFound()

  if (page.pageType === 'location') {
    const content = getLocationContent(page.id)
    if (content === undefined) notFound()
    return <LocationPageTemplate page={page} content={content} />
  }

  if (page.pageType === 'service-location') {
    const content = getServiceLocationContent(page.id)
    if (content === undefined) notFound()
    return <ServiceLocationPageTemplate page={page} content={content} />
  }

  if (page.pageType === 'service') {
    const content = getServiceContent(page.id)
    if (content === undefined) notFound()
    return <ServicePageTemplate page={page} content={content} />
  }

  notFound()
}
