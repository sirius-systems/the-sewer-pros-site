import { getService } from '@/data/services'
import { marketOperatingDetail } from '@/data/markets/markets'
import { resolveSlotImage } from '@/lib/image-slots'
import type {
  CardImage,
  LeadFormConfig,
  LocationPageContent,
  LocationServiceCard,
  PageId,
  ServiceId,
} from '@/types'

/**
 * Summerlin, NV location page (`loc-lv-summerlin`), a split-jurisdiction area.
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `las-vegas.tsx`. Same structure as the Las Vegas (City), Henderson and North Las
 * Vegas modules: only copy, data, links and image slots differ. No review band (no
 * Las Vegas-market review dataset) and no housing-age section (no primary Census
 * values and no single Census geography matches branded Summerlin), so no housing
 * figure appears anywhere. Local facts were read on 2026-10-04 from Clark County's
 * 2024 jurisdictional boundary map, City of Las Vegas pages and the Clark County
 * Water Reclamation District (CCWRD) report-a-sewer-problem page.
 *
 * ⚠ SUMMERLIN IS SPLIT. The County map shows it partly in the City of Las Vegas and
 * partly in unincorporated Clark County (for display purposes only). Every local
 * fact names its agency. The page never says which agency serves any address, never
 * says which part of Summerlin is on which side, and never reconciles the City's
 * wording and CCWRD's wording into one rule.
 *
 * ⚠ THIS PAGE REPLACES UNSUPPORTED CLAIMS. The old inline entry said Summerlin is
 * "roughly 22,500 acres" (no primary source), that "Summerlin South is a separate
 * unincorporated ... census-designated place" under CCWRD (not in any primary source
 * read), that the City's optional warranty "applies only to the incorporated
 * portion" (an inference), and that two properties "a short distance apart" can sit
 * under different authorities. It carried a visible TODO comment and ended with the
 * shared `LAS_VEGAS_CONTACT` block including an email address. None of that is
 * carried over, and this module does not use `LAS_VEGAS_CONTACT`.
 *
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES'. 702-229-6227 (City Streets & Sanitation) is
 * tappable in the `agency` panel and 702-668-8354 (CCWRD) in the `secondaryAgency`
 * panel; both are plain text in FAQ 5. No other agency number, email or address is
 * published, and the page never claims an agency emergency, after-hours or 24-hour
 * line. The optional City warranty appears once, as a labelled bullet in the City's
 * words with no price, coverage, applicability claim or recommendation.
 *
 * ⚠ SUMMERLIN IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin or
 * GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['las-vegas-nv']` (DEC-071), never typed. The founding year
 * is 0 (unknown), so the trust strip drops its founding-year cell.
 *
 * ⚠ IMAGES: no existing or rendered art is reused on this page. Every slot is
 * defined in `IMAGE_SLOTS`. While `SHOW_IMAGE_SLOTS` is on, every slot shows a
 * labelled placeholder (the final CTA box is dropped by the composition). Setting
 * `src` and `source` on a slot replaces its placeholder automatically. Nothing on
 * this page renders an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are duplicated
 * from the other location modules; extract a shared module in a separate refactor.
 */

const id = (value: string): PageId => value as PageId

/** Las Vegas's own phone, hours and founding year (DEC-071). */
const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

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
 * No slot has a `src` yet and none reuses existing art (the Las Vegas-market art in
 * `public/images/markets/las-vegas-nv/` is rendered scenes, not job photos). Use
 * Summerlin wording in the alt text for `summerlin-hero` and `final-bg` (for
 * example "Technician with a sewer camera at a Summerlin, NV home") only if the
 * photo is from a Summerlin-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'summerlin-hero',
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
    shot: 'Floor drain with cleanout access, nothing graphic',
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

/**
 * For the hero backdrop and the service cards, whose components render an
 * image through `next/image` and cannot draw a placeholder box themselves. An
 * unfilled slot resolves to nothing here; the box comes from `placeholderSlot`
 * through each component's opt-in `slotPlaceholder` field. A filled slot shows
 * its photo.
 */
function inlineSlotImage(slotId: string): CardImage | undefined {
  const image = slotImage(slotId)
  return image?.placeholder === undefined ? image : undefined
}

/**
 * The labelled box for an unfilled slot, for the opt-in `slotPlaceholder`
 * fields (hero, service cards, final CTA). Undefined once the slot has a photo
 * or when `SHOW_IMAGE_SLOTS` is off.
 */
function placeholderSlot(slotId: string): CardImage | undefined {
  const image = slotImage(slotId)
  return image?.placeholder === undefined ? undefined : image
}

/* ==========================================================================
   Service cards. One source for the grid, the form select and the schema.
   ========================================================================== */

const card = (
  serviceId: ServiceId,
  slotId: string,
  fields: Omit<LocationServiceCard, 'serviceId' | 'image'>,
): LocationServiceCard => ({
  serviceId,
  image: inlineSlotImage(slotId),
  slotPlaceholder: placeholderSlot(slotId),
  ...fields,
})

const serviceCards: readonly LocationServiceCard[] = [
  card('svc-sewer-camera-inspection', 'svc-camera', {
    title: 'Sewer Camera Inspection',
    description:
      'See recorded video of the accessible sewer line. An inspection can help identify observed conditions and support an informed next-step decision.',
    bestWhen: 'Best when you want to see what is inside the line.',
    bookingLabel: 'Schedule a Camera Inspection',
    // No approved Summerlin camera page exists, so this links the service page.
    secondaryLink: {
      label: 'About sewer camera inspection',
      pageId: id('svc-sewer-camera-inspection'),
    },
  }),
  card('svc-sewer-cleaning', 'svc-cleaning', {
    title: 'Sewer Cleaning',
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    bestWhen: 'Best when a line is slow or partly blocked.',
    bookingLabel: 'Request Sewer Cleaning',
    // No approved Summerlin cleaning page exists, so this links the service page.
    secondaryLink: { label: 'About sewer cleaning', pageId: id('svc-sewer-cleaning') },
  }),
  card('svc-hydro-jetting', 'svc-jetting', {
    title: 'Hydro Jetting',
    description:
      'Use high-pressure water to clear eligible sewer lines. Whether jetting is appropriate depends on the line’s observed condition.',
    bestWhen: 'Best when buildup keeps returning.',
    bookingLabel: 'Request Hydro Jetting',
    secondaryLink: { label: 'About hydro jetting', pageId: id('svc-hydro-jetting') },
  }),
  card('svc-sewer-cleaning-camera-inspection', 'svc-cleaning-camera', {
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
  card('svc-sewer-line-locating', 'svc-locating', {
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
  card('svc-drain-cleaning', 'svc-drain', {
    title: 'Drain Cleaning',
    description:
      'Address buildup or blockages in drain lines, sinks, tubs and fixtures. The service focuses on the affected drain and the reported symptoms.',
    bestWhen: 'Best when one sink, tub or fixture is clogged.',
    bookingLabel: 'Request Drain Cleaning',
    secondaryLink: { label: 'About drain cleaning', pageId: id('svc-drain-cleaning') },
  }),
  card('svc-pre-purchase-sewer-inspection', 'svc-prepurchase', {
    title: 'Pre-Purchase Sewer Inspection',
    description:
      'Get a visual assessment of accessible portions of the sewer line before buying a property. The findings can help inform your due diligence.',
    bestWhen: 'Best when you are buying a home.',
    bookingLabel: 'Schedule a Pre-Purchase Inspection',
    secondaryLink: {
      label: 'About pre-purchase inspection',
      pageId: id('svc-pre-purchase-sewer-inspection'),
    },
  }),
  card('svc-recurring-sewer-backup-diagnosis', 'svc-backup', {
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
  card('svc-preventative-sewer-maintenance', 'svc-maintenance', {
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
    { value: 'summerlin', label: 'Summerlin, NV' },
    { value: 'other-las-vegas-valley', label: 'Other Las Vegas Valley, NV' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'summerlin',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CLARK_MAP_URL =
  'https://www.clarkcountynv.gov/assets/documents/residents/about_clark_county/map-jurisdictional-boundaries-0124.pdf'
const CITY_BLOG_URL = 'https://www.lasvegasnevada.gov/News/Blog/Detail/sewer-back-up-issues'
const CITY_ADDENDA_URL =
  'https://files.lasvegasnevada.gov/public-works/CLV-DCSWCS-and-CCWRD-AML-Addendum.pdf'
const CITY_WARRANTY_URL =
  'https://www.lasvegasnevada.gov/Government/Departments/Public-Works/Sewer-Line-Warranty'
const CCWRD_URL = 'https://www.cleanwaterteam.com/services/customer-service/report-a-sewer-problem'

export const summerlinContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Summerlin, NV',
  metaDescription:
    'Sewer camera inspection and cleaning in Summerlin, NV. Summerlin spans the City of Las Vegas and unincorporated Clark County, so see who serves your address.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Summerlin',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting, sewer
        cleaning and drain cleaning for Summerlin properties. Clark County&rsquo;s boundary map shows
        Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County, so the
        agency and the wording that apply depend on your address. Get clear evidence of what is
        inside your line before you clean it, buy a home, or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      'Serving the Las Vegas Valley, a newer market for us',
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${lv.phone}`,
    // A photo in the `summerlin-hero` slot replaces the labelled box and becomes the backdrop.
    backdrop: inlineSlotImage('summerlin-hero'),
    slotPlaceholder: placeholderSlot('summerlin-hero'),
    card: {
      title: 'Request a Sewer Inspection',
      intro: 'Tell us what is going on. We will follow up during business hours.',
      phoneLineSuffix: lv.hours,
      nextStepsTitle: 'What happens next',
      nextSteps: [
        'Send your request or call us',
        'We schedule your inspection',
        'You review the recorded findings',
      ],
      // The shared card type requires a note. It points to the agency contacts below.
      note: <>Which agency serves your address, and who to call, is under &ldquo;Who to call&rdquo; below.</>,
      form: formConfig,
    },
  },
  faqHeading: 'Summerlin sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'Clark County’s 2024 jurisdictional map shows Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County. The map is for display only, so confirm your address with the agency before relying on either set of rules.',
      'The City says owners maintain private sewer laterals up to the connection to the City main. CCWRD says a lateral that connects a house to the sewer main in the street is the property owner’s responsibility, including cleaning, repair and replacement. Two agencies, two wordings.',
      'We found no City or CCWRD lateral repair, grant or reimbursement program on the pages we reviewed. A camera inspection records what is in your line, whichever agency serves it.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Summerlin', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'Programs', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Summerlin',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Summerlin',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${lv.phone}`,
    },
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at a Summerlin property?',
    answer: (
      <>
        <p>
          It depends on which agency serves your address, and Summerlin has two. Clark
          County&rsquo;s 2024 jurisdictional boundary map (dated January 10, 2024) shows parts of
          Summerlin inside the City of Las Vegas and parts in unincorporated Clark County. The map is
          marked &ldquo;for display purposes only&rdquo;, and we did not find a parcel lookup, so we
          do not say which side any address is on. Confirm yours with the agency.
        </p>
        <p className="mt-4">
          The two agencies describe the owner&rsquo;s side in different words, and we show each one
          in its own words rather than merge them into a single rule.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - Agency main',
        title: 'The public main',
        body: 'At a City of Las Vegas address, the City says it maintains public sewer main facilities, normally under public streets or in designated easements. For CCWRD, we found its statement about the sewer main in the street, but not a separate description of who maintains it. We did not find where either agency’s main ends at any Summerlin address.',
      },
      {
        tag: 'Property - Owner',
        title: 'The private sewer lateral',
        body: 'The City says owners maintain private sewer laterals up to the connection to the City main. CCWRD says a damaged sewer lateral that connects a house to the sewer main in the street is the property owner’s responsibility, including cleaning, repair and replacement.',
      },
    ],
    // The shared table type has three fixed columns (label, then two cells). The
    // agency statements go in the middle column, with the agency named in each row
    // label; the third column records what the pages do not say, taken from this
    // page's own none-found statements.
    table: {
      caption: 'What each agency says, and what we did not find',
      columns: ['Situation', 'What the agency says', 'What we did not find'],
      rows: [
        {
          label: 'Which agency applies',
          publicMain:
            'Clark County’s 2024 map shows Summerlin in two jurisdictions and is for display only. Ask the City of Las Vegas or CCWRD about your address.',
          privateLateral: 'Which side of the map any address is on, and a parcel lookup.',
        },
        {
          label: 'City of Las Vegas address: the owner’s lateral',
          publicMain:
            'Owners maintain private sewer laterals that originate on their property up to the connection to the City main (City of Las Vegas).',
          privateLateral: 'Where the connection to the City main sits at any address.',
        },
        {
          label: 'City of Las Vegas address: through the right-of-way',
          publicMain:
            'The City’s sewer standards addenda (revised November 9, 2021) say private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main.',
          privateLateral: 'Where the connection to the public sewer main sits at any address.',
        },
        {
          label: 'City of Las Vegas address: a main stoppage',
          publicMain:
            'The City says a public-main obstruction, pipe failure or damage from area construction is something its team will address.',
          privateLateral:
            'Any City statement about damage to a private lateral caused by City work.',
        },
        {
          label: 'CCWRD address: the owner’s lateral',
          publicMain:
            'A damaged sewer lateral that connects a house to the sewer main in the street is the property owner’s responsibility, including cleaning, repair and replacement (CCWRD).',
          privateLateral:
            'A CCWRD statement about damage that CCWRD’s own work causes to a private lateral.',
        },
        {
          label: 'CCWRD address: upkeep',
          publicMain:
            'CCWRD says owners are also responsible for periodic cleaning to keep the lateral free of foreign matter, including roots.',
          privateLateral: 'A CCWRD description of who maintains the main in the street.',
        },
        {
          label: 'Where an inspection helps',
          publicMain:
            'A camera inspection records the visible condition of the line and where along it a condition sits.',
          privateLateral:
            'A camera inspection does not establish which agency serves the property or where the connection to the main is.',
        },
      ],
    },
    note: 'This is general information from City of Las Vegas, CCWRD and Clark County sources, not legal advice. The City’s sewer-backup post is dated March 10, 2021, and the CCWRD page shows no update date, so confirm how the rules apply to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Summerlin',
    title: 'How sewers work in Summerlin',
    paragraphs: [
      'Summerlin is served by more than one sewer agency, so there is no single Summerlin rulebook. What we can report comes from the agencies’ own pages, and each point below is tied to the agency that made it.',
      <>
        <strong>Two jurisdictions.</strong> Clark County&rsquo;s 2024 map shows Summerlin partly in
        the City of Las Vegas and partly in unincorporated Clark County. The map is for display only.
      </>,
      <>
        <strong>City of Las Vegas addresses.</strong> The City says a stoppage in a City main can
        affect several upstream properties and may overflow manholes. Its sewer standards addenda use
        the term &ldquo;private collector sewer&rdquo; for private sewer that stays private,
        including the part in the public right-of-way, until its connection to the public sewer main.
      </>,
      <>
        <strong>CCWRD addresses.</strong> CCWRD says lateral upkeep includes periodic cleaning to
        keep the line free of foreign matter, including roots.
      </>,
      'The pages we reviewed do not say whether the system is combined or separate, how old its mains are, or what soil or root conditions occur locally, and they name no local cleanout terms beyond the agencies’ own. We make no claim about any of them.',
      'Nothing on those pages tells you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where the connection to the main is, or where an agency’s responsibility begins or ends.',
    },
  },
  // No housing-age section: no primary Census values and no single matching geography.
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Which agency serves you, and who do you call first?',
    paragraphs: [
      'Start by finding out which agency serves your address, because the contact differs. If a plumber or contractor points to your lateral, or you want proof of its condition before you decide, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // `agency` = City, `secondaryAgency` = CCWRD, and the company. No type change.
    agency: {
      label: 'City of Las Vegas Streets & Sanitation Division',
      phone: { label: '702-229-6227', href: 'tel:+1-702-229-6227' },
      text: 'The City’s sewer-backup post lists this number for a suspected main stoppage that affects several upstream properties, or a manhole overflow. We did not find City hours, an after-hours number or an emergency line. This is the City’s number, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'Clark County Water Reclamation District',
      phone: { label: '702-668-8354', href: 'tel:+1-702-668-8354' },
      text: 'CCWRD’s report-a-sewer-problem page lists this number for a sanitary sewer spill or sewer-related odors, and says photos can be emailed to the address on its page. We did not find CCWRD hours, an after-hours number or an emergency line. This is CCWRD’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${lv.phone}, ${lv.hours}. The Las Vegas Valley is a newer market for us (our longest-running work is in St. Louis and San Diego), and we would rather say that plainly than imply a local track record we have not built here yet.`,
    },
  },
  // Fields map: lede = opening, covers = what the agencies publish, doesNotCover =
  // what we did not find, no whoCanApply, steps or afterSteps, callout = before you
  // rely on this, closing = the no-repairs paragraph. The section component fixes
  // the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'City and CCWRD programs',
    title:
      'We found no City or CCWRD lateral repair program, and both agencies describe the lateral as the owner’s',
    lede: 'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of Las Vegas or by CCWRD on the pages we reviewed (the City’s sewer-backup post and Sewer Line Warranty page, and CCWRD’s report-a-sewer-problem page). That is “none found”, not a statement that none exists. Summerlin has two agencies, so check the one that serves your address.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the agencies publish',
      items: [
        'City of Las Vegas: owners maintain private sewer laterals up to the connection to the City main (sewer-backup post, March 10, 2021).',
        'City of Las Vegas: private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main (sewer standards addenda, revised November 9, 2021).',
        'CCWRD: a damaged sewer lateral that connects a house to the sewer main in the street is the owner’s responsibility, including cleaning, repair and replacement, and periodic cleaning to keep it free of foreign matter, including roots (page undated).',
        'Optional private product, in the City’s words: the City’s Sewer Line Warranty page promotes an optional Service Line Warranty Program offered with Service Line Warranties of America, a private company. We found no price, coverage or claim terms and publish none. The Sewer Pros has no connection to the program and does not recommend it.',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A City or CCWRD grant, reimbursement, cap, eligibility rule or application process for repairing or replacing a lateral.',
        'Which Summerlin addresses each agency serves, or a parcel lookup.',
        'Whether the City’s optional warranty program applies at a particular Summerlin address.',
        'A CCWRD statement about damage that CCWRD’s own work causes to a private lateral.',
        'A City or CCWRD rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection.',
        'Hours, an after-hours number or an emergency line for either agency.',
        'A statement of whether the system is combined or separate, or how old it is.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Ask the agency that serves your address which rules apply before you pay for any work in the street or on a lateral. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review an agency requires. The City’s post and addenda date from 2021 and the other pages carry no update date, so confirm details with the agency.',
      ],
    },
    closing:
      'The Sewer Pros does not perform repairs or replacements and does not arrange reimbursement. Nothing we reviewed says any agency pays for our services.',
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
    eyebrow: 'Buying in Summerlin',
    title: 'Sewer inspection before buying a Summerlin home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close. Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line. Because Summerlin is split between the City of Las Vegas and unincorporated Clark County, the first buyer question is which agency serves the property. Under the City’s wording and CCWRD’s wording, the private lateral is the property owner’s responsibility, so after closing it belongs to the owner, which is you.',
    // `body` is a single string in the shared type, so the source paragraphs are joined.
    body: 'We did not find a rule on the City and CCWRD pages we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. A buyer who wants evidence of the lateral’s condition can ask for an inspection during the transaction, and can ask the serving agency which rules apply to the address. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
      {
        label: 'About pre-purchase inspection',
        pageId: id('svc-pre-purchase-sewer-inspection'),
      },
    ],
    cta: { label: 'Schedule a Pre-Purchase Sewer Inspection' },
    agents: {
      eyebrow: 'For agents and inspectors',
      title: 'Working with real estate professionals',
      body: 'We provide video when a camera is used, and written findings. Findings are informational and not legal advice.',
      link: {
        label: 'Sewer inspection for real estate agents',
        pageId: id('aud-real-estate-agents'),
      },
      image: slotImage('buy-agent'),
    },
  },
  nearbyAreas: {
    eyebrow: 'Nearby service areas',
    title: 'Serving the wider Las Vegas Valley',
    body: 'This page covers Summerlin only, and Summerlin itself spans two agencies. Sewer agencies and lateral rules differ across the Las Vegas Valley, so check the page for your address.',
    items: [
      { title: 'Las Vegas', description: 'Local sewer details', pageId: id('loc-lv-las-vegas') },
      { title: 'Henderson', description: 'Local sewer details', pageId: id('loc-lv-henderson') },
      {
        title: 'North Las Vegas',
        description: 'Local sewer details',
        pageId: id('loc-lv-north-las-vegas'),
      },
      {
        title: 'All Las Vegas service areas',
        description: 'See the full Las Vegas market',
        pageId: id('market-las-vegas-nv'),
      },
    ],
  },
  faq: [
    {
      question: 'Is Summerlin part of the City of Las Vegas?',
      answer: (
        <p>
          Partly. Clark County’s 2024 jurisdictional boundary map (dated January 10, 2024) shows
          Summerlin with parts inside the City of Las Vegas and parts in unincorporated Clark
          County. The map is marked for display purposes only and we did not find a parcel lookup, so
          we do not say which side an address is on. Confirm yours with the City of Las Vegas or
          CCWRD. Source: Clark County jurisdictional boundary map.
        </p>
      ),
    },
    {
      question: 'Who is responsible for a sewer lateral at a City of Las Vegas address in Summerlin?',
      answer: (
        <p>
          The City of Las Vegas says owners maintain private sewer laterals that originate on their
          property up to the connection to the City main, and that public sewer main facilities are
          normally under public streets or in designated easements. The City’s sewer standards
          addenda (revised November 9, 2021) say private sewer stays private, including the part in
          the public right-of-way, until its connection to the public sewer main. Sources: City of
          Las Vegas sewer-backup post; City of Las Vegas sewer standards addenda.
        </p>
      ),
    },
    {
      question:
        'Who is responsible for a sewer lateral at an address served by CCWRD in Summerlin?',
      answer: (
        <p>
          CCWRD says a damaged sewer lateral that connects a house to the sewer main in the street
          is the property owner’s responsibility, including cleaning, repair and replacement, and
          that the owner is also responsible for periodic cleaning to keep it free of foreign
          matter, including roots. We did not find a CCWRD statement about damage that CCWRD’s own
          work causes to a private lateral. Source: CCWRD report-a-sewer-problem page.
        </p>
      ),
    },
    {
      question: 'Does public responsibility start at the property line in Summerlin?',
      answer: (
        <p>
          We did not find any of the agency pages we reviewed saying that responsibility changes at
          the property line, curb or sidewalk. The City says owners maintain laterals up to the
          connection to the City main, its addenda say private sewer stays private through the public
          right-of-way, and CCWRD refers to the lateral that connects the house to the main in the
          street. The wording differs by agency, so ask the one that serves your address. Sources:
          City of Las Vegas sewer-backup post and sewer standards addenda; CCWRD
          report-a-sewer-problem page.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer backup in Summerlin?',
      answer: (
        <p>
          It depends on the agency. The City’s sewer-backup post lists the Streets &amp; Sanitation
          Division at 702-229-6227 (the City’s number) for a suspected main stoppage affecting
          several upstream properties or a manhole overflow. CCWRD’s page lists 702-668-8354
          (CCWRD’s number) for a sanitary sewer spill or sewer-related odors. We did not find hours,
          an after-hours number or an emergency line for either. If a plumber points to your
          lateral, a camera inspection can show what is in it. These are the agencies’ contacts, not
          ours. Sources: City of Las Vegas sewer-backup post; CCWRD report-a-sewer-problem page.
        </p>
      ),
    },
    {
      question: 'Does the City of Las Vegas warranty apply to my Summerlin property?',
      answer: (
        <p>
          The City’s Sewer Line Warranty page promotes an optional Service Line Warranty Program
          offered with Service Line Warranties of America, a private company. We did not find on
          that page whether it applies at a particular Summerlin address, including addresses served
          by CCWRD, and we found no price or coverage terms to publish. Ask the City or the program
          before you enroll. The Sewer Pros has no connection to the program. Source: City of Las
          Vegas Sewer Line Warranty page.
        </p>
      ),
    },
    {
      question: 'Does CCWRD offer help paying for a lateral?',
      answer: (
        <p>
          We did not find a CCWRD lateral repair, grant or reimbursement program on the CCWRD page we
          reviewed. That is none found, not a statement that none exists. CCWRD describes the
          lateral, including its cleaning, repair and replacement, as the property owner’s
          responsibility. Source: CCWRD report-a-sewer-problem page.
        </p>
      ),
    },
    {
      question: 'Does Summerlin require a sewer inspection when a home is sold?',
      answer: (
        <p>
          We did not find a rule on the City of Las Vegas and CCWRD pages we reviewed that requires
          a sewer lateral inspection, certification or seller disclosure when a home is sold. That
          reads as none found, not a confirmed absence, and it does not address state disclosure
          law. Because the agency differs by address, a buyer can ask the serving agency which rules
          apply and can ask for an inspection to get evidence of the lateral’s condition. Sources:
          City of Las Vegas and CCWRD pages listed under Sources.
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
    title: 'Schedule a sewer camera inspection in Summerlin.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow or clogged drains, unexplained blockages, a repair recommendation you want checked, or a Summerlin property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
      'We document what the camera shows and explain the findings in plain language, so you can decide whether the evidence points to cleaning, monitoring, or further evaluation.',
    ],
    bullets: [
      'See the visible condition of the line on video',
      'Receive documented findings you can review',
      'Choose your next step without a repair sale',
    ],
    // The composition drops a placeholder background, so the labelled box comes
    // from `slotPlaceholder`; a photo replaces both automatically.
    background: inlineSlotImage('final-bg'),
    slotPlaceholder: placeholderSlot('final-bg'),
    formTitle: 'Request service',
    submitLabel: 'Request Service',
    messageLabel: 'Message (optional)',
    form: formConfig,
  },
  sources: {
    title: 'Sources',
    links: [
      {
        label:
          'Clark County: 2024 jurisdictional boundary map (dated January 10, 2024, for display purposes only; accessed Oct 4, 2026)',
        href: CLARK_MAP_URL,
      },
      {
        label:
          'City of Las Vegas: Sewer back-up issues (dated March 10, 2021; accessed Oct 4, 2026)',
        href: CITY_BLOG_URL,
      },
      {
        label:
          'City of Las Vegas: Sewer standards addenda (revised November 9, 2021; accessed Oct 4, 2026)',
        href: CITY_ADDENDA_URL,
      },
      {
        label:
          'City of Las Vegas: Sewer Line Warranty (page date not shown; accessed Oct 4, 2026)',
        href: CITY_WARRANTY_URL,
      },
      {
        label:
          'Clark County Water Reclamation District: Report a sewer problem (page date not shown; accessed Oct 4, 2026)',
        href: CCWRD_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the City of Las Vegas or CCWRD.',
  },
}
