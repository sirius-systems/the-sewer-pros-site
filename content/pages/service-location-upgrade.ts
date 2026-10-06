/**
 * Brings the 14 hand-authored St. Louis and San Diego service + location pages
 * up to the Henderson pilot standard (owner, 2026-10-05).
 *
 * Each page keeps its own authored `body`, hero, meta description and related
 * links. This module ADDS what the pilot has: a page-specific meta title, a
 * hero image slot, four "when to call" cards (three from the service page, one
 * from the location), six "what's included" cards, the process steps from the
 * service page, the nine service cards, and a FAQ merged from the source
 * location page and the source service page.
 *
 * ⚠ NO NEW BUSINESS FACTS. Service text is lifted from the service page; the
 * location card restates a fact already on that location page.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import { getService } from '@/data/services'
import { requirePage } from '@/data/pages/pages'
import { requireLocation } from '@/data/locations'
import type {
  FaqContent,
  LocationPageContent,
  MarketId,
  PageId,
  ProcessContent,
  ServiceId,
  ServiceLocationPageContent,
} from '@/types'
import { stLouisServiceLocationContent } from './st-louis'
import { sanDiegoServiceLocationContent } from './san-diego-service-location'
import { stLouisCityContent } from './st-louis-city'
import { chesterfieldContent } from './st-louis-chesterfield'
import { ballwinContent } from './st-louis-ballwin'
import { stCharlesContent } from './st-louis-st-charles'
import { florissantContent } from './st-louis-florissant'
import { sanDiegoCityContent } from './san-diego-city'
import { sanMarcosContent } from './san-diego-san-marcos'
import { carlsbadContent } from './san-diego-carlsbad'
import { chulaVistaContent } from './san-diego-chula-vista'
import { escondidoContent } from './san-diego-escondido'
import { oceansideContent } from './san-diego-oceanside'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'

const id = (value: string): PageId => value as PageId

interface Spec {
  location: LocationPageContent
  /** The one location-driven "when to call" card. */
  local: { title: string; description: string }
}

const SPECS: Record<string, Spec> = {
  'sl-stl-city-camera': {
    location: stLouisCityContent,
    local: {
      title: 'A City program asks for inspection video',
      description:
        'St. Louis City’s lateral repair program requires video from an inspection and excludes clearing clogs and roots. Confirm the program’s current requirements with the City before relying on any inspection.',
    },
  },
  'sl-chesterfield-camera': {
    location: chesterfieldContent,
    local: {
      title: 'Chesterfield runs its own lateral program',
      description:
        'Chesterfield’s lateral repair program can pay for a qualifying defective lateral and treats routine root removal as maintenance. Footage shows the condition of the line. It does not decide eligibility.',
    },
  },
  'sl-chesterfield-hydro': {
    location: chesterfieldContent,
    local: {
      title: 'Roots count as maintenance in Chesterfield',
      description:
        'Chesterfield’s lateral program treats routine root removal as maintenance, so roots that keep returning are a maintenance question. Whether hydro jetting suits the line depends on its observed condition.',
    },
  },
  'sl-ballwin-prepurchase': {
    location: ballwinContent,
    local: {
      title: 'Ballwin has its own lateral program',
      description:
        'Ballwin runs a Sewer Lateral Repair Program and treats clearing roots once a year or less as normal maintenance. A buyer who wants the line’s condition on record before closing can ask for an inspection.',
    },
  },
  'sl-st-charles-prepurchase': {
    location: stCharlesContent,
    local: {
      title: 'St. Charles runs its own sewer system',
      description:
        'Guidance written for MSD customers does not apply in St. Charles. The City’s lateral repair program covers qualifying homes inside City limits, so ask the City how it applies to a home you are buying.',
    },
  },
  'sl-florissant-cleaning': {
    location: florissantContent,
    local: {
      title: 'Florissant’s program covers repair, not cleaning',
      description:
        'Florissant’s Sewer Lateral Insurance Program covers repair of a defective lateral from the main to within five feet of the foundation. Cleaning a restricted line is a separate question from whether the pipe is defective.',
    },
  },
  'sl-sd-city-camera': {
    location: sanDiegoCityContent,
    local: {
      title: 'The lateral is yours up to the main',
      description:
        'The City says the owner maintains the lateral all the way to the connection with the City main, even in a street, easement or canyon. We found no City program that helps owners pay, so evidence before spending matters.',
    },
  },
  'sl-san-marcos-camera': {
    location: sanMarcosContent,
    local: {
      title: 'Three agencies serve San Marcos',
      description:
        'The City says it does not provide sewer service. Vallecitos Water District, Vista Irrigation District and Rincon del Diablo Municipal Water District serve different parts of the city. Confirm which serves your address.',
    },
  },
  'sl-carlsbad-camera': {
    location: carlsbadContent,
    local: {
      title: 'Carlsbad has more than one sewer agency',
      description:
        'The City, Leucadia Wastewater District and Vallecitos Water District serve different parts of Carlsbad. Confirm yours with the City’s sewer district map before relying on any rule or grant.',
    },
  },
  'sl-carlsbad-prepurchase': {
    location: carlsbadContent,
    local: {
      title: 'Which agency serves the home you are buying',
      description:
        'Carlsbad is not served by one sewer agency, and each publishes its own rules for the private lateral. Confirm the home’s agency with the City’s sewer district map.',
    },
  },
  'sl-chula-vista-camera': {
    location: chulaVistaContent,
    local: {
      title: 'The first foot off the public sewer',
      description:
        'Chula Vista’s policy puts the lateral on the owner from the first foot off the public sewer. A stoppage found in the public sewer or that first foot must be reported to the City within 48 hours. Footage records where along the line a condition sits.',
    },
  },
  'sl-escondido-cleaning': {
    location: escondidoContent,
    local: {
      title: 'Cleaning the lateral is the owner’s cost',
      description:
        'Section 22-165 of Escondido’s Municipal Code makes the owner responsible for the lateral up to and including the connection to the main, including the cost of cleaning it.',
    },
  },
  'sl-oceanside-cleaning': {
    location: oceansideContent,
    local: {
      title: 'Private lines run from the street to the house',
      description:
        'The City of Oceanside says private sewer lines from the street to the house are the owner’s responsibility. We did not find where the City’s part ends, so ask the City before assuming.',
    },
  },
  'sl-mission-valley-hydro': {
    location: sanDiegoMissionValleyContent,
    local: {
      title: 'City grease rules apply in Mission Valley',
      description:
        'Every food service establishment in the City of San Diego needs a City grease permit. Whether hydro jetting suits a given line depends on its observed condition, and permit questions are for the City.',
    },
  },
}

const SHARED_SKIP = [/^Which areas does The Sewer Pros serve\?$/]
/** Camera-type services already answer "what does it show" in full. */
const CAMERA_DUPLICATE = /^What does a sewer camera inspection show\?$/

function upgrade(
  pageId: PageId,
  existing: ServiceLocationPageContent,
  serviceId: ServiceId,
  marketId: MarketId,
  locationId: Parameters<typeof requireLocation>[0],
  spec: Spec,
): ServiceLocationPageContent {
  const service = getService(serviceId)
  const location = requireLocation(locationId)
  const detail = marketOperatingDetail[marketId]
  if (detail === undefined) throw new Error(`No operating detail for ${marketId}`)

  const v2 = serviceContent[id(serviceId)]?.v2
  if (v2 === undefined) throw new Error(`${pageId}: service ${serviceId} has no v2 content`)

  const problems = SERVICE_PROBLEMS[serviceId]
  const inclusions = SERVICE_INCLUSIONS[serviceId]
  const shots = SERVICE_PROBLEM_SHOTS[serviceId]
  if (problems === undefined || inclusions === undefined || shots === undefined) {
    throw new Error(`${pageId}: no shared blocks for ${serviceId}`)
  }

  const slots = pageImageSlots(pageId, {
    hero: {
      alt: `${service.name} at a ${location.name} home`,
      shot: `Technician at work for ${service.name}, residential property, no identifiable address`,
    },
    problems: [shots[0], shots[1], shots[2], shots[3]] as const,
  })

  const locationFaq = spec.location.faq
  if (locationFaq === undefined) throw new Error(`${pageId}: location FAQ missing`)

  const serviceFaq = v2.faq.filter(
    (f) => !SHARED_SKIP.some((re) => re.test(f.question)),
  )
  const cameraType =
    serviceId === 'svc-sewer-camera-inspection' ||
    serviceId === 'svc-pre-purchase-sewer-inspection'
  const skip = cameraType
    ? locationFaq.filter((f) => CAMERA_DUPLICATE.test(f.question)).map((f) => f.question)
    : []
  const faq: FaqContent[] = mergeRelevantFaqs(locationFaq, serviceFaq, skip, `In ${location.name}`)

  const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description: typeof step.description === 'string' ? step.description : undefined,
  }))

  return {
    ...existing,
    // Page-specific meta title; the shell appends the site name.
    seoTitle: existing.seoTitle ?? `${service.name} in ${location.name}`,
    heroImage: slots.hero,
    ctaImage: slots.cta,
    sources: spec.location.sources,
    problems: [
      ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
      { ...spec.local, image: slots.problems[3] },
    ],
    inclusions,
    process: existing.process ?? steps,
    faq,
  }
}

function build(
  source: Partial<Record<PageId, ServiceLocationPageContent>>,
  pageIds: readonly string[],
  lookup: (pageId: string) => {
    serviceId: ServiceId
    marketId: MarketId
    locationId: Parameters<typeof requireLocation>[0]
  },
): Partial<Record<PageId, ServiceLocationPageContent>> {
  const out: Partial<Record<PageId, ServiceLocationPageContent>> = {}
  for (const key of pageIds) {
    const existing = source[id(key)]
    const spec = SPECS[key]
    if (existing === undefined || spec === undefined) {
      throw new Error(`service-location-upgrade: missing content or spec for ${key}`)
    }
    const { serviceId, marketId, locationId } = lookup(key)
    out[id(key)] = upgrade(id(key), existing, serviceId, marketId, locationId, spec)
  }
  return out
}

function lookupFromRegistry(pageId: string) {
  const page = requirePage(id(pageId))
  if (
    page.serviceId === undefined ||
    page.marketId === undefined ||
    page.locationId === undefined
  ) {
    throw new Error(`${pageId}: registry record lacks service, market or location`)
  }
  return {
    serviceId: page.serviceId,
    marketId: page.marketId,
    locationId: page.locationId,
  }
}

/** The six St. Louis pages, upgraded. */
export const upgradedStLouisServiceLocationContent = build(
  stLouisServiceLocationContent,
  Object.keys(stLouisServiceLocationContent),
  lookupFromRegistry,
)

/** The eight San Diego pages, upgraded. */
export const upgradedSanDiegoServiceLocationContent = build(
  sanDiegoServiceLocationContent,
  Object.keys(sanDiegoServiceLocationContent),
  lookupFromRegistry,
)
