import Link from 'next/link'
import { getService } from '@/data/services'
import { contact, foundingYear } from '@/data/business/organization'
import { resolveSlotImage } from '@/lib/image-slots'
import { homeServiceCards } from './home-service-cards'
import type {
  CardImage,
  LeadFormConfig,
  LocationPageContent,
  LocationServiceCard,
  PageId,
  ServiceId,
} from '@/types'

/**
 * St. Charles, MO location page (`loc-stl-st-charles`).
 *
 * Full rich composition, replacing the thin inline entry that used to live
 * in `st-louis.tsx`. Same structure as the Florissant, Chesterfield and
 * Ballwin modules (uniform municipality pages): only copy, data, links and
 * image slots differ, plus one review band (`reviewBand`). The program terms
 * were read from the City of St. Charles Code and program pages on
 * 2026-10-03 (DEC-072, DEC-112).
 *
 * ⚠ St. Charles is OUTSIDE MSD. This page is built on the City's Public Works
 * Sewer Division and its own Sewer Lateral Repair Program. No MSD fact is
 * stated as if it governed this city, and no MSD number appears.
 *
 * ⚠ BUSINESS FACTS HERE: phone, hours and the founding year come from the
 * business constants or are owner-confirmed (the four association
 * affiliations). Hours follow DEC-083 (8:00 am open). The City numbers and
 * the City address are the City's, labelled as theirs. No licence,
 * certification or insurance claim is made for The Sewer Pros. The dollar
 * amounts ($28 annual fee, $7,500 cap, $50 inspection fee, the older $20
 * figure) are the City's published terms, never prices.
 *
 * ⚠ LOCAL FACTS ARE ST. CHARLES'S ONLY. Nothing from the St. Louis City,
 * Chesterfield, Ballwin or Florissant pages is carried over.
 *
 * ⚠ REVIEWS: the band shows the St. Louis-area Google snapshot as visible text
 * only, with a caption saying it is not specific to St. Charles. No review or
 * rating markup (DEC-028, DEC-085). The figures live in
 * `data/reviews/reviews.ts`, never here.
 *
 * ⚠ IMAGES: the hero uses the existing market hero and the nine service cards
 * use their approved art. Every other slot is defined in `IMAGE_SLOTS` and,
 * while `SHOW_IMAGE_SLOTS` is on (the build environment), draws a labelled
 * placeholder. Nothing on this page renders an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from `st-louis-florissant.tsx`; extract a shared module in a
 * separate refactor.
 */

const id = (value: string): PageId => value as PageId

const existing = (src: string, alt: string): CardImage => ({
  src,
  alt,
  source: 'Existing site image, reused on this page.',
})

/** The card artwork already approved for the nine core services. */
function cardImage(serviceId: ServiceId): CardImage | undefined {
  return homeServiceCards.find((c) => c.pageId === id(serviceId))?.image
}

/* ==========================================================================
   Image slots
   ========================================================================== */

type ImageSlotRatio = '16:9' | '4:3'

interface ImageSlot {
  id: string
  ratio: ImageSlotRatio
  /** Alt text to use once a photo exists. */
  alt: string
  /** One-line shot description. */
  shot: string
  /** Set when an approved file exists in `public/`. */
  src?: string
  /** Provenance. Required whenever `src` is set. */
  source?: string
}

/**
 * Registry of the photo slots this page is designed for.
 *
 * ⚠ TO ADD A PHOTO, set `src` and `source` (provenance) on its slot: one edit,
 * no component change, and it replaces the labelled placeholder with the
 * image and this slot's alt text. A slot with no `src` draws a placeholder
 * while `SHOW_IMAGE_SLOTS` is on and renders nothing when it is off. Photos
 * that show crew, equipment, footage, customers or reports must be real job
 * photos. Never point a slot at an unrelated asset.
 *
 * The hero and the nine service-card slots keep no `src` because those slots
 * currently use existing approved art (the market hero backdrop and
 * `cardImage()`), whose alt text describes a different image than the future
 * photo this registry's `alt` describes. Use the St. Charles wording for
 * `st-charles-hero` and `final-bg` only if the photo is from a St. Charles
 * property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'st-charles-hero',
    ratio: '16:9',
    alt: 'Technician feeding a sewer camera into a cleanout',
    shot: 'Technician feeding a camera into a residential cleanout, truck and monitor in frame',
  },
  {
    id: 'svc-camera',
    ratio: '4:3',
    alt: 'Sewer camera being fed into a cleanout',
    shot: 'Camera head and push cable at a cleanout',
  },
  {
    id: 'svc-cleaning',
    ratio: '4:3',
    alt: 'Sewer cleaning equipment at work at a home',
    shot: 'Cleaning machine and cable or hose at a cleanout',
  },
  {
    id: 'svc-jetting',
    ratio: '4:3',
    alt: 'Hydro jetting nozzle ready for use',
    shot: 'Jetting nozzle and hose at the line',
  },
  {
    id: 'svc-cleaning-camera',
    ratio: '4:3',
    alt: 'Technician reviewing camera footage after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind',
  },
  {
    id: 'svc-locating',
    ratio: '4:3',
    alt: 'Technician using a sewer line locator in a yard',
    shot: 'Technician with a locator receiver, paint marks on pavement',
  },
  {
    id: 'svc-drain',
    ratio: '4:3',
    alt: 'Drain cleaning equipment at a fixture',
    shot: 'Drain machine at a floor or tub drain',
  },
  {
    id: 'svc-prepurchase',
    ratio: '4:3',
    alt: 'Inspector explaining findings to a home buyer',
    shot: 'Technician scoping a for-sale property, clipboard visible',
  },
  {
    id: 'svc-backup',
    ratio: '4:3',
    alt: 'Camera monitor showing the condition of a sewer line',
    shot: 'Basement floor drain with cleanout access, nothing graphic',
  },
  {
    id: 'svc-maintenance',
    ratio: '4:3',
    alt: 'Technician on a scheduled sewer maintenance visit',
    shot: 'Crew member recording a post-cleaning camera pass',
  },
  {
    id: 'system-street',
    ratio: '4:3',
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
  {
    id: 'call-cleanout',
    ratio: '4:3',
    alt: 'Capped sewer cleanout beside a house foundation',
    shot: 'Exterior cleanout cap at the base of a house',
  },
  {
    id: 'program-footage',
    ratio: '4:3',
    alt: 'Monitor showing sewer lateral footage with a visible defect',
    shot: 'Real camera still with distance counter visible, owner consent on file',
  },
  {
    id: 'so-inspect',
    ratio: '4:3',
    alt: 'Sewer camera entering a cleanout',
    shot: 'Camera head entering a cleanout, close up',
  },
  {
    id: 'so-document',
    ratio: '4:3',
    alt: 'Monitor showing recorded footage of a pipe interior',
    shot: 'Monitor or tablet with the report open beside it, address redacted',
  },
  {
    id: 'so-decide',
    ratio: '4:3',
    alt: 'Property owner reviewing a printed inspection findings report',
    shot: 'Technician and homeowner reviewing findings, faces not identifiable',
  },
  {
    id: 'buy-buyer',
    ratio: '4:3',
    alt: 'Inspector walking a home buyer through sewer inspection findings outside a house',
    shot: 'Technician at a for-sale property starting a pre-purchase scope',
  },
  {
    id: 'buy-agent',
    ratio: '4:3',
    alt: 'Real estate agent viewing an inspection report and video on a tablet',
    shot: 'Report handed to an agent, hands only, redacted',
  },
  {
    id: 'final-bg',
    ratio: '16:9',
    alt: 'Residential home exterior with a crew truck at the curb',
    shot: 'Crew truck at a residential curb, reel visible, no plate',
  },
]

function slotImage(slotId: string): CardImage | undefined {
  return resolveSlotImage(IMAGE_SLOTS.find((s) => s.id === slotId))
}

/* ==========================================================================
   Service cards. One source for the grid, the form select and the schema.
   ========================================================================== */

const card = (
  serviceId: ServiceId,
  fields: Omit<LocationServiceCard, 'serviceId' | 'image'>,
): LocationServiceCard => ({ serviceId, image: cardImage(serviceId), ...fields })

const serviceCards: readonly LocationServiceCard[] = [
  card('svc-sewer-camera-inspection', {
    title: 'Sewer Camera Inspection',
    description:
      'See recorded video of the accessible sewer line. An inspection can help identify observed conditions and support an informed next-step decision.',
    bestWhen: 'Best when you want to see what is inside the line.',
    bookingLabel: 'Schedule a Camera Inspection',
    secondaryLink: {
      label: 'About sewer camera inspection',
      pageId: id('svc-sewer-camera-inspection'),
    },
  }),
  card('svc-sewer-cleaning', {
    title: 'Sewer Cleaning',
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    bestWhen: 'Best when a line is slow or partly blocked.',
    bookingLabel: 'Request Sewer Cleaning',
    secondaryLink: { label: 'About sewer cleaning', pageId: id('svc-sewer-cleaning') },
  }),
  card('svc-hydro-jetting', {
    title: 'Hydro Jetting',
    description:
      'Use high-pressure water to clear eligible sewer lines. Whether jetting is appropriate depends on the line’s observed condition.',
    bestWhen: 'Best when buildup keeps returning.',
    bookingLabel: 'Request Hydro Jetting',
    secondaryLink: { label: 'About hydro jetting', pageId: id('svc-hydro-jetting') },
  }),
  card('svc-sewer-cleaning-camera-inspection', {
    title: 'Sewer Cleaning & Camera Inspection',
    description:
      'Combine cleaning with visual documentation of the line. See what was observed and whether cleaning changed the conditions visible on camera.',
    bestWhen: 'Best when you want proof of what cleaning changed.',
    bookingLabel: 'Request Cleaning with Camera',
    secondaryLink: {
      label: 'About cleaning with camera',
      pageId: id('svc-sewer-cleaning-camera-inspection'),
    },
  }),
  card('svc-sewer-line-locating', {
    title: 'Sewer Line Locating',
    description:
      'Help identify the route of an accessible sewer line and locate a specific area when conditions allow. Useful when planning evaluation or work.',
    bestWhen: 'Best when you need to know where the line runs.',
    bookingLabel: 'Request Line Locating',
    secondaryLink: {
      label: 'How line locating works',
      pageId: id('svc-sewer-line-locating'),
    },
  }),
  card('svc-drain-cleaning', {
    title: 'Drain Cleaning',
    description:
      'Address buildup or blockages in drain lines, sinks, tubs and fixtures. The service focuses on the affected drain and the reported symptoms.',
    bestWhen: 'Best when one sink, tub or fixture is clogged.',
    bookingLabel: 'Request Drain Cleaning',
    secondaryLink: { label: 'About drain cleaning', pageId: id('svc-drain-cleaning') },
  }),
  card('svc-pre-purchase-sewer-inspection', {
    title: 'Pre-Purchase Sewer Inspection',
    description:
      'Get a visual assessment of accessible portions of the sewer line before buying a property. The findings can help inform your due diligence.',
    bestWhen: 'Best when you are buying a home.',
    bookingLabel: 'Schedule a Pre-Purchase Inspection',
    secondaryLink: {
      label: 'Pre-purchase sewer inspection in St. Charles',
      pageId: id('sl-st-charles-prepurchase'),
    },
  }),
  card('svc-recurring-sewer-backup-diagnosis', {
    title: 'Recurring Sewer Backup Diagnosis',
    description:
      'Investigate recurring backups and document conditions observed during the inspection. Findings can help clarify what may be contributing to the problem.',
    bestWhen: 'Best when backups keep coming back.',
    bookingLabel: 'Request a Diagnosis',
    secondaryLink: {
      label: 'How diagnosis works',
      pageId: id('svc-recurring-sewer-backup-diagnosis'),
    },
  }),
  card('svc-preventative-sewer-maintenance', {
    title: 'Preventative Sewer Maintenance',
    description:
      'Arrange sewer inspection or cleaning based on the line’s condition and needs. Recommendations should be guided by observed evidence.',
    bestWhen: 'Best when you want to stay ahead of problems.',
    bookingLabel: 'Request Maintenance',
    secondaryLink: {
      label: 'About maintenance',
      pageId: id('svc-preventative-sewer-maintenance'),
    },
  }),
]

/* ==========================================================================
   Request form configuration, shared by the hero and the final CTA
   ========================================================================== */

/** Service select order. Labels come from the service registry. */
const FORM_SERVICE_ORDER: readonly ServiceId[] = [
  'svc-sewer-camera-inspection',
  'svc-pre-purchase-sewer-inspection',
  'svc-sewer-cleaning',
  'svc-sewer-cleaning-camera-inspection',
  'svc-hydro-jetting',
  'svc-sewer-line-locating',
  'svc-drain-cleaning',
  'svc-recurring-sewer-backup-diagnosis',
  'svc-preventative-sewer-maintenance',
]

/**
 * TCPA text-message consent line.
 *
 * ⚠ HIDDEN UNTIL THE COPY IS APPROVED. Replace `CONSENT_LINE` with the
 * approved wording and set the flag to true. Until then neither form renders
 * a consent line.
 */
const SHOW_CONSENT_LINE = false
const CONSENT_LINE = 'Placeholder: text-message consent language goes here once approved.'

const formConfig: LeadFormConfig = {
  serviceOptions: [
    ...FORM_SERVICE_ORDER.map((serviceId) => ({
      value: serviceId,
      label: getService(serviceId).name,
    })),
    { value: 'hub-commercial', label: 'Commercial Sewer & Drain Services' },
    { value: 'other', label: 'Not sure which service I need' },
  ],
  locationLabel: 'Property location',
  locationOptions: [
    { value: 'st-charles', label: 'St. Charles, MO' },
    { value: 'other-st-charles-county', label: 'Other St. Charles County, MO' },
    { value: 'st-louis-county', label: 'St. Louis County, MO' },
    { value: 'st-louis-city', label: 'St. Louis City, MO' },
    { value: 'other-st-louis-area', label: 'Other St. Louis area' },
  ],
  defaultLocationValue: 'st-charles',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const SC_SEWER_URL = 'https://stcharlescitymo.gov/1313/Sanitary-Sewer'
const SC_WASTEWATER_URL = 'https://www.stcharlescitymo.gov/235/Wastewater-Treatment'
const SC_PUBLIC_WORKS_URL = 'https://www.stcharlescitymo.gov/179/Public-Works'
const SC_CODE_705_URL = 'https://ecode360.com/27706190'
const SC_CODE_FEES_URL = 'https://ecode360.com/41664231'
const SC_FAQ_URL = 'https://www.stcharlescitymo.gov/FAQ/Topic?topic=18&mobile=ON'
const SC_RESIDENTIAL_URL = 'https://www.stcharlescitymo.gov/727/Residential-Programs'
const SC_INFO_SHEET_URL =
  'https://www.stcharlescitymo.gov/DocumentCenter/View/10082/2022-Residential-Sanitary-Sewer-Lateral-Repair-Program-Information--Application-PDF'
const SC_PERMITTING_URL = 'https://www.stcharlescitymo.gov/1035/Online-Permitting/1000'
const SC_BUILDING_URL = 'https://stcharlescitymo.gov/1226/Building-Division'
const SC_INSPECTIONS_URL = 'https://stcharlescitymo.gov/1307/Inspections'
const SC_REPORT_URL = 'https://www.stcharlescitymo.gov/DocumentCenter/View/14825/May-2026-Departmental-Report'
const MSD_SERVICE_AREA_URL = 'https://msdprojectclear.org/glossary/service-area/'
const CENSUS_B25035_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25035?g=160XX00US2964082'
const CENSUS_B25034_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US2964082'

export const stCharlesContent: LocationPageContent = {
  seoTitle: 'St. Charles, MO Sewer Inspection & Cleaning',
  metaDescription:
    'Sewer camera inspection and cleaning in St. Charles, MO. The City runs its own sewer system. See its lateral program and when evidence helps.',
  hero: {
    title: 'Sewer Inspection and Cleaning in St. Charles, MO',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for St. Charles properties. The City runs its own sewer system and its
        own lateral repair program, so get clear evidence of what is happening inside your
        sewer line before you apply, buy a home, or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      `Locally owned and family-operated since ${foundingYear}`,
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${contact.phone}`,
    // Existing market hero. Its alt describes the file, not a St. Charles job.
    // A St. Charles photo in the `st-charles-hero` slot replaces it.
    backdrop: existing(
      '/images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero-1280.webp',
      'St. Louis residential sewer camera inspection',
    ),
    card: {
      title: 'Request a Sewer Inspection',
      intro: 'Tell us what is going on. We will follow up during business hours.',
      // DEC-083: the owner-corrected 8:00 am open, not the stale 7:30.
      phoneLineSuffix: 'Mon - Fri, 8:00 am - 4:00 pm',
      nextStepsTitle: 'What happens next',
      nextSteps: [
        'Send your request or call us',
        'We schedule your inspection',
        'You review the recorded findings',
      ],
      note: (
        <>
          For sewage backing up into your home, the City&rsquo;s guidance is to have a plumber
          or drainlayer cable the lateral, then contact City Public Works about its lateral
          program.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'St. Charles sewer questions, answered',
  // DEC-112: FAQPage markup approved for this page (under DEC-108).
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of St. Charles runs its own sanitary sewer system through its Public Works Sewer Division. Guidance written for MSD customers does not apply here.',
      'The City’s Sewer Lateral Repair Program reimburses 90 percent of authorized repair cost, up to $7,500, for qualifying homes inside City limits, funded by a $28 annual fee on the real estate tax bill. A share of any repair stays with the owner.',
      'A sewer camera inspection gives you recorded evidence before you clean, buy, or approve major work.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in St. Charles', href: '#how-system' },
      { label: 'Housing age', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City lateral program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in St. Charles',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in St. Charles',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${contact.phone}`,
    },
  },
  reviewBand: {
    title: 'Google reviews of The Sewer Pros',
    caption:
      'These are reviews of The Sewer Pros’ St. Louis-area Google profile. They are not specific to St. Charles.',
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at a St. Charles property?',
    answer: (
      <p>
        In the City of St. Charles, the public sewer system is run by the City&rsquo;s Public
        Works Sewer Division, not by MSD. The City Code describes the sewer lateral as the part
        of a residential property&rsquo;s sanitary sewer piping that runs from the foundation to
        a sewer main. The City&rsquo;s lateral program is built around owner-arranged repair:
        the owner gets the bids and chooses the contractor, and the City reimburses part of the
        cost for a qualifying lateral.
      </p>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer',
        // The card body is a plain string in the shared type, so the Sewer Division
        // link sits in the table row below instead.
        body: 'The City’s Sewer Division says it oversees the operation, maintenance and enhancement of the municipal sewer system. The City says it has two sanitary sewer treatment plants and 30 lift stations. Whether a specific address is inside City limits should be confirmed by address.',
      },
      {
        tag: 'Property - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the sewer main is the lateral. The City’s program covers part of the cost of repairing a defective residential lateral for homes inside City limits. It does not change who arranges the work: under the program the owner obtains three bids and selects the contractor.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the lateral line',
      columns: ['Question', 'Public sewer', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: (
            <>
              The City of St. Charles Public Works{' '}
              <a href={SC_SEWER_URL} rel="noopener">
                Sewer Division
              </a>
              .
            </>
          ),
          privateLateral:
            'The property owner arranges inspection, cleaning and repair. The City describes the lateral as the line from the building to the sewer main.',
        },
        {
          label: 'Who maintains and repairs it',
          publicMain: 'The City, through its Sewer Division.',
          privateLateral:
            'The owner. The City’s program can reimburse 90 percent of authorized repair cost, up to $7,500, for a qualifying lateral.',
        },
        {
          label: 'Who to contact first',
          publicMain: 'City Public Works. See “Who to call” below.',
          privateLateral:
            'A plumber or drainlayer to cable the line first, then City Public Works about the program.',
        },
        {
          label: 'What help exists',
          publicMain:
            'The Sewer Division can be contacted about sanitary sewer backups and other resident issues.',
          privateLateral:
            'The City’s lateral program, subject to its eligibility rules, application and review.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and where along the line a problem sits.',
        },
      ],
    },
    note: 'This is general information from City of St. Charles sources, not legal advice. We did not find a published rule on who owns the part of a lateral under the street, or on what happens when City work damages a private lateral, so we only repeat the City’s lateral definition and program boundary. Contact the City to confirm how it applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in St. Charles',
    title: 'How sewers work in St. Charles',
    paragraphs: [
      <>
        St. Charles runs its own sewer system. The City says it has two sanitary sewer treatment
        plants and 30 lift stations, operated and maintained under contract. MSD describes its
        own service area as St. Louis City and about 90 percent of St. Louis County, and St.
        Charles is in St. Charles County, so it sits outside the area MSD defines as its own.{' '}
        <a href={MSD_SERVICE_AREA_URL} rel="noopener">
          MSD&rsquo;s page
        </a>{' '}
        does not name St. Charles, so treat this as background and confirm for a specific
        address.
      </>,
      'The pages we reviewed do not say whether the City’s system is combined or separate, or how old it is.',
      'One feature is specific to St. Charles: the Sewer Division maintains a sewer vacuum system in Newtown, which uses vacuum pumps, valves and pipelines to move wastewater instead of relying only on gravity. That is a feature of that neighborhood, not of every St. Charles property.',
      'The City’s May 2026 departmental report also describes a sanitary manhole in the middle of a creek on Hackmann Road that it says contributes to surcharging and backups, and says the manhole and piping are planned to be relocated away from the creek. We did not find a current status for that work.',
      'A public sewer project does not tell you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
    ],
    card: {
      image: slotImage('system-street'),
      title: 'What a camera inspection can show on your lateral',
      bullets: [
        'Blockages and grease build-up',
        'Root intrusion',
        'Separated or offset joints',
        'Cracks and visible pipe damage',
        'Standing water or low spots (bellies)',
        'Where the line runs, with locating',
      ],
      closing:
        'You get recorded evidence, so you can tell a line that needs cleaning from one that needs a bigger decision.',
    },
  },
  housingAge: {
    eyebrow: 'Housing age and your lateral',
    title: 'St. Charles homes: mostly built since the 1980s, and what a camera can find',
    paragraphs: [
      'The U.S. Census Bureau’s 2024 American Community Survey 5-year estimates put the median year a St. Charles city home was built at 1986 (margin of error 2 years), across about 32,300 housing units. About 62 percent of those units were built in 1980 or later, and about 7 percent in 1939 or earlier. These figures describe the City of St. Charles as a whole, not every address the City sewer serves, and not St. Charles County.',
    ],
    // ACS 2024 5-year, B25034, St. Charles city, Missouri. Rows sum to 32,305.
    censusTable: {
      caption: 'St. Charles city housing units by period built (ACS 2024 5-year)',
      columns: ['Period built', 'Housing units', 'Margin of error'],
      rows: [
        ['2020 or later', '1,016', '219'],
        ['2010-2019', '3,896', '496'],
        ['2000-2009', '4,051', '370'],
        ['1990-1999', '5,112', '503'],
        ['1980-1989', '5,831', '497'],
        ['1970-1979', '3,788', '394'],
        ['1960-1969', '3,216', '414'],
        ['1950-1959', '2,575', '384'],
        ['1940-1949', '628', '170'],
        ['1939 or earlier', '2,192', '337'],
      ],
    },
    afterCensus: [
      'Housing age does not tell you what pipe is in your lateral. The City does not publish a pipe material or installation era for St. Charles, so the only way to know the condition of your line is to look at it.',
      'A drain that still works is not proof of a sound pipe, and a blockage is not proof of a broken one. The City’s program starts from that difference: it asks for a written statement from a master plumber or master drainlayer that the lateral has been cabled before an application, and it sends its own camera to determine the repair scope. A camera shows which situation your line is in.',
    ],
    table: {
      caption: 'What a camera can find on a St. Charles lateral',
      columns: ['What a camera can find', 'What it looks like', 'Why it matters in St. Charles'],
      rows: [
        [
          'A blockage with an intact pipe',
          'Grease or debris with no visible defect',
          'The City directs residents to cable the line first. If the line clears and the pipe is intact, cleaning, not repair, may be what it needs.',
        ],
        [
          'Cracks or separated joints',
          'A split, gap or offset in the pipe wall or at a joint',
          'The City’s camera investigation sets the repair scope. The program reimburses 90 percent of authorized cost up to $7,500, so a share stays with the owner.',
        ],
        [
          'Where a defect sits',
          'A condition at a recorded distance along the line',
          'Recorded footage with a distance count lets you compare a repair estimate with what the camera showed.',
        ],
        [
          'A line that is structurally sound',
          'No defect visible',
          'The City’s program information sheet says the homeowner pays the inspection cost if the line is found structurally sound. Knowing the line’s condition first can matter.',
        ],
        [
          'Roots',
          'Fine roots entering at a gap or joint',
          'Footage shows whether roots are entering at a joint or the pipe is otherwise intact.',
        ],
      ],
    },
    sourceNote:
      'Housing-age figures: U.S. Census Bureau ACS 2024 5-year, tables B25034 and B25035, St. Charles city, Missouri. Percentages are our arithmetic from the table. Program statements: City of St. Charles Code and program pages. The table is general context, not a finding about any one home.',
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'The City tells residents with a sewer backup to contact a plumber or drainlayer to cable the lateral, then to contact Public Works for lateral program instructions. The City’s wastewater page says the Sewer Division can be contacted about sanitary sewer backups and other resident issues.',
      'If a plumber or the City points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
      // The shared type has no note field after the panels, so this is the last paragraph.
      'We did not find a direct Sewer Division backup number or an after-hours sewer line published by the City.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'City of St. Charles Public Works - sewer lateral program',
      phone: { label: '(636) 949-3363', href: 'tel:+16369493363' },
      text: 'The City lists this number for questions about its lateral program. Applications can be completed online, mailed, or delivered to the Public Works Facility at 2871 Elm Point Industrial Drive, St. Charles, MO 63301. This is the City’s number and address, not ours. Confirm the number with the City before you call.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of St. Charles Community Development',
      phone: { label: '(636) 949-3222', href: 'tel:+16369493222' },
      text: 'The City directs permit and inspection questions here, including the charge permit and inspection for smaller lateral repairs outside the program. This is the City’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${contact.phone}, Monday - Friday, 8:00 am - 4:00 pm.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral program',
    title: 'Using an inspection with the City of St. Charles Sewer Lateral Repair Program',
    lede: 'The City of St. Charles runs a Sewer Lateral Repair Program, in place since January 1, 2003. It reimburses 90 percent of the authorized cost of repairing a defective residential sewer lateral, up to $7,500 per participant. The City Code sets the annual fee at $28 on residential property served by City sewer. Some City web pages still show an older $20 figure, so confirm the current fee with Public Works. Eligible homes inside City limits are enrolled automatically and cannot opt out.',
    // The lede carries the opening paragraph; nothing else sits above the lists.
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City program covers',
      items: [
        'Patching or replacement of a defective residential sewer lateral, including the associated digging, dirt replacement and seeding',
        'Sidewalks, driveways and street pavement that must be removed and replaced for safe occupancy',
      ],
    },
    doesNotCover: {
      title: 'What it does not cover',
      items: [
        'Replacement of landscaping or ornamental structures',
        'Homes outside St. Charles City limits, even if they pay a sewer bill to the City',
        'Buildings of seven or more units, commercial and industrial property, and properties on septic systems, according to the City’s program information sheet',
        'According to the same undated sheet: the initial cabling, the cost of the City’s camera inspection if the line is found structurally sound, and repeat claims within 12 months. Confirm these with Public Works.',
      ],
    },
    whoCanApply: {
      title: 'Who can apply',
      paragraphs: [
        'The program covers residential buildings of up to six units, including single-family homes, duplexes, triplexes and condominium units with individual lateral connections. The City Code asks the applicant for proof of ownership or owner consent, proof that property taxes and City bills are paid, and a signed hold-harmless statement.',
      ],
    },
    steps: {
      title: 'How the process works, in the City’s words',
      steps: [
        {
          title: 'Cable the line first.',
          body: 'The City tells residents to have a plumber or drainlayer cable the lateral and then contact Public Works. The Code asks for a written statement from a master plumber or master drainlayer that the lateral has been cabled, dated within six months of the application, plus a written problem statement.',
        },
        {
          title: 'Apply.',
          body: 'Applications can be completed online, mailed, or delivered to Public Works.',
        },
        {
          title: 'The City’s camera investigation.',
          body: 'The City’s program administrator schedules a camera investigation to determine the repair scope and prepares a bid package.',
        },
        {
          title: 'Get three bids.',
          body: 'The applicant obtains at least three bids from City-approved plumbers or drainlayers and chooses the contractor. The City reimburses the lowest responsible bid. The Public Works Director weighs the bidder’s experience and compliance as well as price.',
        },
        {
          title: 'Repair, then reimbursement.',
          body: 'The work happens after permit approval, and the City reimburses 90 percent of the authorized cost, up to $7,500.',
        },
      ],
    },
    afterSteps: [
      'The Code says the program depends on fee revenue and asks the applicant to show the annual fee is paid or committed. We did not find a published fund balance, waiting list or processing time, so do not assume funds or a timeline. Confirm current terms, the fee and funding with Public Works at (636) 949-3363 before you apply.',
    ],
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'The City uses its own camera investigation to set the repair scope, so our inspection does not replace it, and we make no claim that the City accepts any outside report. We also make no claim that our work satisfies the cabling statement the City asks for.',
        'What an independent camera inspection can do is show you, before you apply, where along your line a problem sits and whether it looks like a defect or a blockage that cleaning could clear. It gives you your own recorded evidence to understand a recurring backup or to compare a repair recommendation before you spend money. A 90 percent reimbursement still leaves a share with the owner, so the size and position of the defect are worth establishing properly first.',
        'The contractors you hire perform approved repairs. The Sewer Pros does not perform repairs or replacements.',
      ],
    },
    closing: (
      <>
        See our{' '}
        <Link href="/st-louis-mo/sewer-lateral-inspection-reporting/">
          sewer lateral inspection &amp; reporting
        </Link>{' '}
        service for the St. Louis area.
      </>
    ),
  },
  secondOpinion: {
    eyebrow: 'Independent sewer inspection & second opinions',
    title: 'Before You Approve an Expensive Sewer Repair, Get an Opinion With Nothing to Sell',
    ledes: [
      'A sewer backup or major repair recommendation can make a costly decision feel urgent. The Sewer Pros inspects and documents the condition inside your sewer line so you can understand what is actually happening before you approve cleaning, excavation, lining, or replacement.',
      'Because we do not perform sewer repairs or replacements, we do not profit from selling you the work. Our role is to give you clear video evidence, straightforward findings, and an honest opinion you can use to make the next decision.',
    ],
    cta: {
      label: 'Get an Independent Second Opinion',
      supportLine:
        'Already received a repair recommendation? Bring us in for an independent second opinion before you sign off on major work.',
    },
    steps: [
      {
        title: 'Inspect',
        body: 'We use a sewer camera to examine the line for blockages, roots, damage, offsets, standing water, and other visible conditions.',
        image: slotImage('so-inspect'),
      },
      {
        title: 'Document',
        body: 'Receive video evidence and clear findings that show what was observed inside the line, so you are not forced to rely only on a verbal repair recommendation.',
        image: slotImage('so-document'),
      },
      {
        title: 'Decide',
        body: 'Use the findings to determine whether the issue calls for cleaning, monitoring, a repair estimate, or another qualified opinion, without pressure to buy a repair from us.',
        image: slotImage('so-decide'),
      },
    ],
    callout: {
      title: 'Do Not Let a Sales-Driven Recommendation Make the Decision for You',
      body: 'A repair recommendation should be based on documented conditions inside the sewer line, not pressure to approve work before you understand the problem. When the company diagnosing the problem can also sell the repair, getting a second opinion can help you separate the actual condition of the line from the proposed solution.',
    },
  },
  buyingGuide: {
    eyebrow: 'Buying in St. Charles',
    title: 'Sewer inspection before buying a St. Charles home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'We did not find a City of St. Charles rule that requires a sewer lateral inspection when a home is sold, and we did not find a sewer-lateral disclosure rule in the City materials we reviewed. That reads as none found, not as a confirmed absence, so a buyer who wants evidence of the lateral has to ask for it. The City does require an occupancy inspection for long-term rentals before the first tenant moves in and between tenants; the page we reviewed does not describe it as a sewer inspection. Two details matter to a buyer. The City’s lateral program applies only inside City limits, so confirm the address is inside the City, not just billed by it. And the program asks for proof of ownership or owner consent and proof that property taxes and City bills are paid, so ask your agent and Public Works how that fits your timeline. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      {
        label: 'Pre-purchase sewer inspection in St. Charles',
        pageId: id('sl-st-charles-prepurchase'),
      },
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
    ],
    cta: { label: 'Schedule a Pre-Purchase Sewer Inspection' },
    agents: {
      eyebrow: 'For agents and inspectors',
      title: 'Working with real estate professionals',
      body: 'We are affiliated with the St. Louis Association of Realtors, ASHI, the Women’s Council of Realtors and St. Charles Realtors, and provide documented reports and video your clients can keep. Findings are informational and not legal advice.',
      link: {
        label: 'Sewer inspection for real estate agents',
        pageId: id('aud-real-estate-agents'),
      },
      image: slotImage('buy-agent'),
    },
  },
  nearbyAreas: {
    eyebrow: 'Nearby service areas',
    title: 'Serving the wider St. Louis area',
    body: 'The City of St. Charles is in St. Charles County, and it is a separate jurisdiction from unincorporated St. Charles County and from the MSD-served cities in St. Louis County. Lateral programs and sewer details differ by municipality, so terms and costs change from place to place.',
    items: [
      {
        title: 'Florissant',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-florissant'),
      },
      {
        title: 'Chesterfield',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-chesterfield'),
      },
      {
        title: 'Ballwin',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-ballwin'),
      },
      {
        title: 'St. Louis City',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-st-louis-city'),
      },
      {
        title: 'All St. Louis service areas',
        description: 'See the full St. Louis market',
        pageId: id('market-st-louis-mo'),
      },
    ],
  },
  faq: [
    {
      question: 'Who runs the sewer system in St. Charles, and is it MSD?',
      answer: (
        <p>
          The City of St. Charles runs its own sanitary sewer system through the Sewer Division
          of Public Works. The City says it has two sanitary sewer treatment plants and 30 lift
          stations, operated and maintained under contract. MSD describes its service area as
          St. Louis City and about 90 percent of St. Louis County, and St. Charles is in St.
          Charles County, so it sits outside the area MSD defines as its own. MSD&rsquo;s page
          does not name St. Charles, so confirm for a specific address. Sources: City of St.
          Charles Sewer Division and Wastewater Treatment pages; MSD service area page.
        </p>
      ),
    },
    {
      question: 'Does St. Charles have a sewer lateral repair program, and what does it cost?',
      answer: (
        <p>
          Yes. The City&rsquo;s Sewer Lateral Repair Program began January 1, 2003. The City
          Code sets an annual fee of $28 on residential property served by City sewer,
          collected on the real estate tax bill. Some City web pages still show $20, so confirm
          the current amount with Public Works. Eligible homes inside City limits are enrolled
          automatically. Sources: City Code section 150.030 and Chapter 705; City Residential
          Programs page.
        </p>
      ),
    },
    {
      question: 'Which St. Charles homes qualify?',
      answer: (
        <p>
          The program covers residential buildings of up to six units inside City limits,
          including single-family homes, duplexes, triplexes and condominium units with
          individual lateral connections. A home outside City limits is not eligible even if it
          pays a sewer bill to the City. The City&rsquo;s information sheet also excludes
          buildings of seven or more units, commercial and industrial property, and septic
          systems. An applicant must show ownership or owner consent and that property taxes
          and City bills are paid. Sources: City sewer lateral FAQ; City Code section 705.300;
          City program information sheet.
        </p>
      ),
    },
    {
      question: 'How much does the St. Charles program reimburse?',
      answer: (
        <p>
          The City Code says it reimburses 90 percent of authorized costs, up to $7,500 per
          participant. The City describes this as 90 percent of the lowest of three bids.
          Reimbursement depends on an approved application and on available fee revenue, so it
          is not automatic, and a share of any repair stays with the owner. Sources: City Code
          sections 705.290, 705.320 and 705.330; City sewer lateral FAQ.
        </p>
      ),
    },
    {
      question: 'What does the program cover and exclude?',
      answer: (
        <p>
          It covers patching or replacement of a defective residential lateral, associated
          digging, dirt replacement and seeding, plus sidewalks, driveways and pavement that
          must be replaced for safe occupancy. It excludes replacement of landscaping or
          ornamental structures. The City&rsquo;s undated information sheet adds exclusions for
          the initial cabling, the camera inspection cost if the line is sound, and repeat
          claims within 12 months; confirm those with Public Works. Sources: City Code section
          705.270; City program information sheet.
        </p>
      ),
    },
    {
      question: 'What do I have to do before I apply?',
      answer: (
        <p>
          Have the lateral cabled by a plumber or drainlayer first. The Code asks for a written
          statement from a master plumber or master drainlayer that the lateral has been
          cabled, within six months of the application, plus a written problem statement. After
          you apply, the City&rsquo;s program administrator schedules a camera investigation
          and you collect at least three bids. Sources: City Code section 705.300 and 705.310;
          City sewer lateral FAQ.
        </p>
      ),
    },
    {
      question: 'Does a St. Charles lateral repair need a permit?',
      answer: (
        <p>
          The City&rsquo;s Building Division lists repair or replacement of sewer laterals among
          work that generally requires a permit. For smaller repairs outside the program the
          City says a charge permit and inspection may apply, arranged through Community
          Development at (636) 949-3222 or the City&rsquo;s online permitting portal, with a
          $50 fee for each required inspection. We did not find a general contractor licensing
          rule for lateral repairs beyond the City-approved contractors required for program
          bids. Sources: City Building Division page; City Online Permitting page.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required before buying a St. Charles home?',
      answer: (
        <p>
          None found in the City materials we reviewed. The City does require an occupancy
          inspection for long-term rentals, but the page does not describe it as a sewer
          inspection, and we did not find a sewer-lateral disclosure rule. Confirm the address
          is inside City limits, since the lateral program does not cover homes outside it.
          Sources: City Inspections page; City sewer lateral FAQ.
        </p>
      ),
    },
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          It can reveal blockages, root intrusion, separated joints, offsets, cracks, standing
          water and other observable conditions in accessible sewer piping, recorded on video.
        </p>
      ),
    },
    {
      question: 'Do you repair or replace sewer lines?',
      answer: (
        <p>
          No. We inspect, locate, diagnose and clean. That independence is the point: our
          recommendations are not built around selling a repair.
        </p>
      ),
    },
  ],
  finalCta: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Schedule a sewer camera inspection in St. Charles.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a City lateral program question, or a St. Charles property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
      'We document what the camera shows and explain the findings in plain language, so you can decide whether the evidence points to cleaning, monitoring, or further evaluation.',
    ],
    bullets: [
      'See the visible condition of the line on video',
      'Receive documented findings you can review',
      'Choose your next step without a repair sale',
    ],
    background: slotImage('final-bg'),
    formTitle: 'Request service',
    submitLabel: 'Request Service',
    messageLabel: 'Message (optional)',
    form: formConfig,
  },
  sources: {
    title: 'Sources',
    links: [
      { label: 'City of St. Charles: Sanitary Sewer (Sewer Division) (2023)', href: SC_SEWER_URL },
      { label: 'City of St. Charles: Wastewater Treatment (undated)', href: SC_WASTEWATER_URL },
      { label: 'City of St. Charles: Public Works (undated)', href: SC_PUBLIC_WORKS_URL },
      {
        label:
          'City Code Chapter 705, Article V: Sewer Lateral Repair Program (most recent ordinance cited: Ord. 22-167, December 20, 2022)',
        href: SC_CODE_705_URL,
      },
      {
        label: 'City Code section 150.030: Schedule of fees (Ord. 26-021, March 3, 2026)',
        href: SC_CODE_FEES_URL,
      },
      {
        label: 'City of St. Charles: Sewer Lateral Repair Program FAQ (undated; shows an older $20 fee)',
        href: SC_FAQ_URL,
      },
      {
        label: 'City of St. Charles: Residential Programs (undated; program began January 1, 2003)',
        href: SC_RESIDENTIAL_URL,
      },
      {
        label:
          'City of St. Charles: Residential Sanitary Sewer Lateral Program information sheet (undated)',
        href: SC_INFO_SHEET_URL,
      },
      { label: 'City of St. Charles: Online Permitting (undated)', href: SC_PERMITTING_URL },
      { label: 'City of St. Charles: Building Division (2021)', href: SC_BUILDING_URL },
      { label: 'City of St. Charles: Inspections (undated)', href: SC_INSPECTIONS_URL },
      {
        label: 'City of St. Charles: May 2026 Departmental Report (May 1, 2026)',
        href: SC_REPORT_URL,
      },
      {
        label: 'MSD Project Clear: Service area (updated February 2020)',
        href: MSD_SERVICE_AREA_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2024 5-year, table B25035, St. Charles city, Missouri',
        href: CENSUS_B25035_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2024 5-year, table B25034, St. Charles city, Missouri',
        href: CENSUS_B25034_URL,
      },
    ],
    lastReviewed: '2026-10-03',
    closingNote:
      'Official guidance can change, so confirm details with the City for your address.',
  },
  servicePageIds: [
    id('sl-st-charles-prepurchase'),
    id('svc-stl-sewer-lateral-inspection-reporting'),
  ],
}
