/**
 * Careers page data (owner decisions, 2026-11-22; DEC-160).
 *
 * The Sewer Pros announces that it is accepting applications in three areas and nothing
 * more: no role titles, pay, benefits, perks, schedules, headcounts, start dates or
 * urgency. Roles can be added to `careersOpenings` later; every list ships empty and an
 * empty list renders nothing.
 */
import type { MarketId, PageId } from '@/types'

export interface CareerOpening {
  /** Stable id, for example 'stl-technician-1'. Never shown. */
  id: string
  /** Role name exactly as the owner supplies it. Plain text. */
  title: string
  /** Optional one plain sentence. No pay, benefits, perks, schedule, headcount, start date or urgency. */
  summary?: string
}

/** Keyed by market, so a new market is a compile error until it has an entry. Empty is allowed. */
export const careersOpenings: Record<MarketId, readonly CareerOpening[]> = {
  'st-louis-mo': [],
  'san-diego-ca': [],
  'las-vegas-nv': [],
}

export interface CareersMarketBlock {
  marketId: MarketId
  /** H2 of the market block. */
  heading: string
  /** Phrase used in the one sentence of the block, for example "the St. Louis area". */
  area: string
  /** Market contact page the block links to. */
  contactPageId: PageId
  /** Anchor of the inbound link from that market's contact page. All three are different. */
  inboundAnchor: string
}

export const careersMarketBlocks: readonly CareersMarketBlock[] = [
  {
    marketId: 'st-louis-mo',
    heading: 'St. Louis area',
    area: 'the St. Louis area',
    contactPageId: 'contact-st-louis-mo' as PageId,
    inboundAnchor: 'Careers in the St. Louis area',
  },
  {
    marketId: 'san-diego-ca',
    heading: 'San Diego area',
    area: 'the San Diego area',
    contactPageId: 'contact-san-diego-ca' as PageId,
    inboundAnchor: 'Careers in the San Diego area',
  },
  {
    marketId: 'las-vegas-nv',
    heading: 'Las Vegas Valley',
    area: 'the Las Vegas Valley',
    contactPageId: 'contact-las-vegas-nv' as PageId,
    inboundAnchor: 'Careers in the Las Vegas Valley',
  },
]
