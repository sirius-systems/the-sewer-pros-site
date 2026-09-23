// Route: /[market]/contact/
// A static `contact` segment outranks the `[...segments]` catch-all, so
// market contact pages are generated here and excluded from that route's
// params (`marketCatchAllParams`).
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { MarketContactTemplate } from '@/components/templates'
import { getMarketContactContent } from '@/content'
import { marketContactParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'
import type { MarketId } from '@/types'

export function generateStaticParams() {
  return marketContactParams()
}

async function load(params: Promise<{ market: string }>) {
  const { market } = await params
  const page = getPageByPathname(`/${market}/contact/`)
  if (page === undefined || page.marketId === undefined) notFound()
  const content = getMarketContactContent(page.id)
  if (content === undefined) notFound()
  return { page, content, marketId: page.marketId as MarketId }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>
}): Promise<Metadata> {
  const { page, content } = await load(params)
  const title = content.seoTitle ?? content.hero.title
  const metadata = pageMetadata({ page, title, description: content.metaDescription })

  // Title override for this route only: the authored title already names
  // the site, so the shared helper's " | The Sewer Pros" suffix would
  // duplicate it (same approach as /about/).
  return {
    ...metadata,
    title: { absolute: title },
    openGraph: { ...metadata.openGraph, title },
    twitter: { ...metadata.twitter, title },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>
}) {
  const { page, content, marketId } = await load(params)
  return <MarketContactTemplate page={page} content={content} marketId={marketId} />
}
