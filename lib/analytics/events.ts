/**
 * Analytics event vocabulary.
 *
 * Authority: docs/19-analytics-measurement.md §13-22, §31-33, §131-132
 *            CLAUDE.md §39, §40, §59
 *
 * ===========================================================================
 * ONE CONTROLLED VOCABULARY (19 §131)
 * ===========================================================================
 * "Event parameters should be defined centrally. Do not allow arbitrary
 * components to invent new versions such as market, market_name,
 * marketName, location_market, cityMarket for the same concept."
 *
 * Every event name and every parameter key is declared here as a literal
 * union, so a component cannot introduce a variant without the build
 * rejecting it. That is the whole purpose of this file — the risk is not
 * that a name is wrong, it is that four spellings of the same dimension
 * end up in reporting and silently fragment it.
 *
 * ---------------------------------------------------------------------------
 * WHAT IS DELIBERATELY MISSING
 * ---------------------------------------------------------------------------
 * `phone_lead` — 19 §19 draws a hard line between a phone CLICK, which
 * is a website interaction, and a connected or qualified CALL, which is
 * a business event. Only call-tracking data can establish the second,
 * and that is PENDING-009. Defining the name now would invite someone
 * to fire it from a click handler, which is precisely the conflation
 * §19 warns against.
 */

import type { AnalyticsPageType, MarketId, ServiceId } from '@/types'

/* ==========================================================================
   Event names — 19 §14
   ========================================================================== */

/**
 * The complete launch event taxonomy.
 *
 * 19 §14: "Actual implementation should remain as simple as possible
 * while preserving useful attribution." This is the documented list
 * minus the per-form-type variants — `form_type` is a parameter, so
 * `commercial_form_submit` would encode in the event name what the
 * parameter already carries, and split one funnel across three names.
 */
export type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'phone_click'
  | 'email_click'
  | 'form_view'
  | 'form_start'
  | 'form_submit'
  | 'form_error'
  | 'service_select'
  | 'market_select'
  | 'audience_select'

/* ==========================================================================
   Parameter vocabulary — 19 §132
   ========================================================================== */

/** Form types (19 §21). Extend only alongside 17 and PENDING-008. */
export type FormType =
  | 'general_service'
  | 'prepurchase_inspection'
  | 'commercial_service'

/** What kind of lead an event represents (19 §27). */
export type LeadType = 'residential' | 'commercial' | 'real_estate'

/**
 * Where on the page an action was taken (19 §32).
 *
 * Used to answer which placements actually convert, rather than
 * assuming the final CTA does the work.
 */
export type CtaLocation =
  | 'header'
  | 'hero'
  | 'inline'
  | 'section_cta'
  | 'final_cta'
  | 'footer'
  | 'mobile_bar'

/** Topic cluster (19 §30, §64). */
export type ContentCluster =
  | 'inspection'
  | 'cleaning'
  | 'hydro_jetting'
  | 'sewer_problems'
  | 'real_estate'
  | 'commercial'
  | 'municipal_programs'

/**
 * The complete set of context parameters (19 §132).
 *
 * ⚠ Every value here is a stable identifier, never a display string.
 * CLAUDE.md §39: use `marketId: "st-louis-mo"`, not "St Louis" /
 * "Saint Louis" / "stl" / "st_louis" for the same dimension.
 *
 * ⚠ There is no field for a name, email, phone, address, or message,
 * and there must never be one. See `assertNoPii()`.
 */
export interface AnalyticsContext {
  page_type?: AnalyticsPageType
  market_id?: MarketId
  service_id?: ServiceId
  /** Derived id, e.g. `loc-stl-ballwin` (DEC-067). */
  location_id?: string
  /** Canonical audience id, e.g. `aud-home-buyers`. */
  audience_id?: string
  lead_type?: LeadType
  form_type?: FormType
  cta_location?: CtaLocation
  content_cluster?: ContentCluster
  /** The page family a session originated on (19 §29). */
  landing_page_type?: AnalyticsPageType
  /** Canonical pathname. Never a URL with a query string (19 §105). */
  page_path?: string
}

/** Parameter keys that may be sent. Anything else is rejected. */
export const ALLOWED_PARAMETERS = [
  'page_type',
  'market_id',
  'service_id',
  'location_id',
  'audience_id',
  'lead_type',
  'form_type',
  'cta_location',
  'content_cluster',
  'landing_page_type',
  'page_path',
] as const satisfies readonly (keyof AnalyticsContext)[]
