// Route: /[market]/
// Generated from the approved page registry (04 §4, 02 §21-23).
import { notFound } from 'next/navigation'
import { MarketPageTemplate } from '@/components/templates'
import { getMarketContent } from '@/content'
import { marketHubParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return marketHubParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>
}) {
  const { market } = await params
  const page = getPageByPathname(`/${market}/`)
  if (page === undefined) notFound()

  const content = getMarketContent(page.id)
  if (content === undefined) notFound()

  return <MarketPageTemplate page={page} content={content} />
}
