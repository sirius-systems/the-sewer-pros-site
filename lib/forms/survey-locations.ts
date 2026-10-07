import type { MarketId } from '@/types'

/**
 * The "Service location?" choices on the lead form.
 *
 * One pill per built location page, grouped by market, plus an "other area"
 * pill per market so someone outside the 16 still tells the CRM which market
 * they are in. `id` is the derived location id (the same id analytics and the
 * registry use); `other-<market>` ids are not registry locations.
 *
 * ⚠ KEEP IN STEP WITH THE BUILT LOCATION PAGES. Typed here, not read from the
 * location registry, because the form is a client component and the registry
 * holds 579 records. Adding a location page means adding it here, and
 * `scripts/verify-survey-locations.mjs` fails the build check if they drift.
 */
export interface SurveyLocation {
  id: string
  label: string
  marketId: MarketId
}

export const SURVEY_LOCATION_GROUPS: readonly {
  marketId: MarketId
  label: string
  locations: readonly SurveyLocation[]
}[] = [
  {
    marketId: 'st-louis-mo',
    label: 'St. Louis, MO',
    locations: [
      { id: 'loc-stl-st-louis-city', label: 'St. Louis City', marketId: 'st-louis-mo' },
      { id: 'loc-stl-chesterfield', label: 'Chesterfield', marketId: 'st-louis-mo' },
      { id: 'loc-stl-ballwin', label: 'Ballwin', marketId: 'st-louis-mo' },
      { id: 'loc-stl-florissant', label: 'Florissant', marketId: 'st-louis-mo' },
      { id: 'loc-stl-st-charles', label: 'St. Charles', marketId: 'st-louis-mo' },
      { id: 'other-st-louis-mo', label: 'Other St. Louis area', marketId: 'st-louis-mo' },
    ],
  },
  {
    marketId: 'san-diego-ca',
    label: 'San Diego, CA',
    locations: [
      { id: 'loc-sd-san-diego', label: 'San Diego', marketId: 'san-diego-ca' },
      { id: 'loc-sd-mission-valley', label: 'Mission Valley', marketId: 'san-diego-ca' },
      { id: 'loc-sd-carlsbad', label: 'Carlsbad', marketId: 'san-diego-ca' },
      { id: 'loc-sd-chula-vista', label: 'Chula Vista', marketId: 'san-diego-ca' },
      { id: 'loc-sd-escondido', label: 'Escondido', marketId: 'san-diego-ca' },
      { id: 'loc-sd-oceanside', label: 'Oceanside', marketId: 'san-diego-ca' },
      { id: 'loc-sd-san-marcos', label: 'San Marcos', marketId: 'san-diego-ca' },
      { id: 'other-san-diego-ca', label: 'Other San Diego area', marketId: 'san-diego-ca' },
    ],
  },
  {
    marketId: 'las-vegas-nv',
    label: 'Las Vegas, NV',
    locations: [
      { id: 'loc-lv-las-vegas', label: 'Las Vegas', marketId: 'las-vegas-nv' },
      { id: 'loc-lv-henderson', label: 'Henderson', marketId: 'las-vegas-nv' },
      { id: 'loc-lv-north-las-vegas', label: 'North Las Vegas', marketId: 'las-vegas-nv' },
      { id: 'loc-lv-summerlin', label: 'Summerlin', marketId: 'las-vegas-nv' },
      { id: 'other-las-vegas-nv', label: 'Other Las Vegas area', marketId: 'las-vegas-nv' },
    ],
  },
]

export const SURVEY_LOCATIONS: readonly SurveyLocation[] = SURVEY_LOCATION_GROUPS.flatMap(
  (group) => group.locations,
)

export function findSurveyLocation(id: string): SurveyLocation | undefined {
  return SURVEY_LOCATIONS.find((location) => location.id === id)
}
