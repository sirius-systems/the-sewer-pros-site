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
 * City of North Las Vegas, NV location page (`loc-lv-north-las-vegas`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `las-vegas.tsx`. Same structure as the Las Vegas (City), Henderson, Oceanside
 * and San Diego City modules: only copy, data, links and image slots differ. No
 * review band (no Las Vegas-market review dataset) and no housing-age section
 * (primary Census tables B25034 and B25035 for North Las Vegas city have not been
 * supplied, so no housing figure appears anywhere). Local facts were read from
 * City of North Las Vegas pages on 2026-10-04; none of those pages shows a date.
 *
 * ⚠ THIS PAGE REPLACES UNSUPPORTED AND FALSE CLAIMS. The old page said "We were
 * not able to locate a published North Las Vegas statement" (the City's Water
 * Leaks page states it), said "Every other authority in the valley (Henderson and
 * the Clark County Water Reclamation District both) places the lateral with the
 * property owner" (other jurisdictions' rules with no source for this page),
 * named "Public Works and Utilities" (the City's pages name the Utilities
 * Department, Operations division), pointed only at the City home page, and ended
 * with the shared `LAS_VEGAS_CONTACT` block including an email address. None of
 * that is carried over, and this module does not use `LAS_VEGAS_CONTACT`.
 *
 * ⚠ THE CITY'S BLOCKAGE AND BREAKAGE STATEMENTS ARE SHOWN SIDE BY SIDE IN THE
 * CITY'S WORDS AND NEVER RECONCILED. The page never says where the connection or
 * the property boundary sits at any address, never says who pays on the City
 * side, never says how a plumber's video is submitted or what the City does with
 * it, never says a permit or inspection is or is not required, and never cites
 * Ordinance No. 2770 or Chapter 13.24 (not read from a primary live source). The
 * optional third-party plan appears once, as a labelled callout in the City's
 * words with no price, coverage or recommendation.
 *
 * ⚠ CITY NUMBER IS THE CITY'S. 702-633-1484 (Utilities Department customer
 * service and online request, not a sewer emergency line) is tappable in its own
 * labelled panel and appears as plain text in two FAQ answers. No other City
 * number, fax, email or address is published, and the page never claims a City
 * emergency, after-hours or 24-hour line.
 *
 * ⚠ NORTH LAS VEGAS IS A SERVICE MARKET, NOT A LOCATION. No office, address, map
 * pin or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['las-vegas-nv']` (DEC-071), never typed. The founding
 * year is 0 (unknown), so the trust strip drops its founding-year cell.
 *
 * ⚠ IMAGES: no existing or rendered art is reused on this page. Every slot is
 * defined in `IMAGE_SLOTS`. While `SHOW_IMAGE_SLOTS` is on, every slot shows a
 * labelled placeholder (the hero, cards and final CTA through `placeholderSlot`;
 * the final CTA box is dropped by the composition). Setting `src` and `source`
 * on a slot replaces its placeholder automatically. Nothing on this page renders
 * an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from the other location modules; extract a shared module in a
 * separate refactor.
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
 * North Las Vegas wording in the alt text for `north-las-vegas-hero` and `final-bg` (for
 * example "Technician with a sewer camera at a North Las Vegas, NV home") only if the
 * photo is from a North Las Vegas-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'north-las-vegas-hero',
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
    // No approved North Las Vegas camera page exists, so this links the service page.
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
    // No approved North Las Vegas cleaning page exists, so this links the service page.
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
    { value: 'north-las-vegas', label: 'North Las Vegas, NV' },
    { value: 'other-las-vegas-valley', label: 'Other Las Vegas Valley, NV' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'north-las-vegas',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}


const CITY_LEAKS_URL =
  'https://www.cityofnorthlasvegas.com/residents/water/water-conservation/water-leaks'
const CITY_WATER_URL = 'https://www.cityofnorthlasvegas.com/residents/water'
const CITY_PORTAL_URL = 'https://payutil.cityofnorthlasvegas.com/en-us/'

export const northLasVegasContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in North Las Vegas, NV',
  metaDescription:
    'Sewer camera inspection and cleaning in North Las Vegas, NV. See what the City says about your sewer lateral, blockages, breaks, and who to call.',
  hero: {
    title: 'Sewer Inspection and Cleaning in North Las Vegas, NV',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting, sewer
        cleaning and drain cleaning for properties in the City of North Las Vegas. The City says the
        homeowner&rsquo;s responsibility for the sewer service lateral ends at the connection to the
        main in the street, so get clear evidence of what is inside your line before you clean it,
        buy a home, or approve major work.
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
    // A photo in the `north-las-vegas-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('north-las-vegas-hero'),
    slotPlaceholder: placeholderSlot('north-las-vegas-hero'),
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
      // The shared card type requires a note. For a problem the City may need to
      // review, it points to the City contact under "Who to call".
      note: <>For a problem the City may need to review, the City&rsquo;s Utilities Department contact is under &ldquo;Who to call&rdquo; below.</>,
      form: formConfig,
    },
  },
  faqHeading: 'North Las Vegas sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of North Las Vegas says the homeowner’s responsibility for the sewer service lateral ends at the connection to the main in the street. It describes blockages and breakages in separate statements, so read both under “Who is responsible”.',
      'A camera inspection records what is in the line and where along it a condition sits. If a plumber finds a problem on the City side, the City says video evidence may be submitted to its Utilities Department for review.',
      'We found no City lateral repair, grant or reimbursement program on the City pages we reviewed.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in North Las Vegas', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'City program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in North Las Vegas',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in North Las Vegas',
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
    title: 'Who is responsible for the sewer line at a North Las Vegas property?',
    answer: (
      <>
        <p>
          The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer
          service lateral ends at the connection to the main in the street. The City&rsquo;s
          Utilities Department, through its Operations division, provides water and sewer service to
          customers.
        </p>
        <p className="mt-4">
          The City&rsquo;s water leaks page then gives two statements that read differently, and we
          show both in the City&rsquo;s words rather than merge them. For a blockage, it says the
          homeowner is responsible throughout the entire pipe until the connection to the
          City&rsquo;s main. For a breakage, it says the homeowner is responsible until the point
          where the sewer line crosses the boundary of the property. We do not say where either
          point sits at any address, and a camera inspection does not establish it.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The City’s main',
        body: 'The City says the homeowner’s responsibility ends at the connection to the main in the street. We did not find a City statement of who pays for repairs on the City’s side of that connection.',
      },
      {
        tag: 'Property - Owner',
        title: 'The sewer service lateral',
        body: 'The City’s own term is the sewer service lateral. The City says it is the homeowner’s responsibility up to the connection to the main, with the blockage and breakage statements below.',
      },
    ],
    // The shared table type has three fixed columns (label, then two cells). The
    // City's statements go in the middle column; the third column records what the
    // City pages do not say, taken from this page's own none-found statements.
    table: {
      caption: 'What the City of North Las Vegas says, and what we did not find',
      columns: ['Situation', 'What the City says', 'What we did not find'],
      rows: [
        {
          label: 'Overall boundary',
          publicMain:
            'The homeowner’s responsibility for the sewer service lateral ends at the connection to the main in the street.',
          privateLateral: 'Where the connection sits at any address.',
        },
        {
          label: 'A blockage',
          publicMain:
            'The homeowner is responsible throughout the entire pipe until the connection to the City’s main.',
          privateLateral: 'How this statement and the breakage statement fit together.',
        },
        {
          label: 'A breakage',
          publicMain:
            'The homeowner is responsible until the point where the sewer line crosses the boundary of the property.',
          privateLateral: 'Where the boundary of the property sits at any address.',
        },
        {
          label: 'A problem on the City side',
          publicMain:
            'If a plumber has inspected the line and determined a breakage or blockage is on the City side, the City says video evidence may be submitted to the Utilities Department for review.',
          privateLateral: 'How the video is submitted, and what the City does after reviewing it.',
        },
        {
          label: 'Who to contact',
          publicMain: 'The Utilities Department. See “Who to call” for the number the City lists.',
          privateLateral: 'A City sewer-specific contact line or published hours.',
        },
        {
          label: 'Where an inspection helps',
          publicMain:
            'A camera inspection records the visible condition of the line and where along it a condition sits, which is the evidence the City’s review path refers to.',
          privateLateral:
            'A camera inspection does not establish where the connection or the property boundary is.',
        },
      ],
    },
    note: 'This is general information from City of North Las Vegas sources, not legal advice. The City’s water leaks page carries no update date, so confirm with the City how the rules apply to your address. We did not find how a plumber’s video is submitted or what the City does after reviewing it, so we make no claim about either.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in North Las Vegas',
    title: 'How sewers work in the City of North Las Vegas',
    paragraphs: [
      'The City’s Utilities Department, through its Operations division, provides water and sewer service to its customers. The City also operates a Water Reclamation Facility, which it says uses membrane bioreactor technology to produce reclaimed water.',
      <>
        <strong>The City main and your connection.</strong> The City says the homeowner&rsquo;s
        responsibility for the sewer service lateral ends at the connection to the main in the
        street.
      </>,
      <>
        <strong>Blockages and breakages.</strong> The City treats them in two statements: a blockage
        is the homeowner&rsquo;s throughout the pipe until the connection to the City&rsquo;s main,
        and a breakage is the homeowner&rsquo;s until the sewer line crosses the boundary of the
        property.
      </>,
      <>
        <strong>A City-side finding.</strong> The City says a plumber&rsquo;s video of a problem on
        the City side may be submitted to the Utilities Department for review.
      </>,
      'The pages we reviewed do not say whether the system is combined or separate, how old its mains are, or what recurring conditions occur locally, and they name no local cleanout or lateral terms beyond the City’s own. We make no claim about any of them.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where the connection to the City main is, or where the homeowner’s responsibility ends.',
    },
  },
  // No housing-age section: primary Census tables have not been supplied.
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'City utility contact or your own lateral? Start with the right contact.',
    paragraphs: [
      'For a problem the City may need to review, the City points to its Utilities Department. If a plumber or contractor points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // One City panel (`agency`) and the company; no `secondaryAgency` because no
    // second verified agency number exists. No type change.
    agency: {
      label: 'City of North Las Vegas Utilities Department',
      phone: { label: '702-633-1484', href: 'tel:+1-702-633-1484' },
      text: 'The City’s utility portal lists this number for the Utilities Department, and its Service Communication feature lets customers contact the utility online to report an outage or submit a request. This is the City’s customer-service number and online request, not a sewer emergency line. We did not find a City sewer emergency line, after-hours number or published hours. This is the City’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${lv.phone}, ${lv.hours}. The Las Vegas Valley is a newer market for us (our longest-running work is in St. Louis and San Diego), and we would rather say that plainly than imply a local track record we have not built here yet.`,
    },
  },
  // Fields map: lede = opening, covers = what the City publishes, doesNotCover =
  // what we did not find, no whoCanApply, steps or afterSteps, callout = before
  // you rely on this, closing = the no-repairs paragraph. The section component
  // fixes the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'City program',
    title:
      'We found no City lateral repair program, and the City says the lateral is the homeowner’s up to the main',
    lede: 'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of North Las Vegas on the City pages we reviewed (the water leaks page and the Water Resources page). That is “none found”, not a statement that none exists. The City’s water leaks page describes the homeowner’s responsibility and a video-review path, and no City repair or reimbursement for the homeowner’s side.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City publishes',
      items: [
        'The homeowner’s responsibility for the sewer service lateral ends at the connection to the main in the street (City water leaks page, undated).',
        'A blockage is the homeowner’s responsibility throughout the entire pipe until the connection to the City’s main.',
        'Sewer line breakages are the homeowner’s responsibility until the point where the line crosses the boundary of the property.',
        'If a plumber has inspected the line and determined a breakage or blockage is on the City side, video evidence may be submitted to the Utilities Department for review.',
        'Third-party plan, in the City’s words: the City says it has partnered with Service Line Warranties of America to offer optional insurance coverage for water and sewer service lines, that the company is separate from the City, and that participating will not affect the price, availability or terms of City service. We found no price, coverage or claim terms on the City page and publish none. The Sewer Pros has no connection to this plan and does not recommend it.',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing a lateral.',
        'Who pays for repairs on the City’s side of the connection, or any City statement about damage to a private lateral caused by City work.',
        'How a plumber’s video is submitted, and what the City does after reviewing it.',
        'A City rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection.',
        'A City sewer emergency line, after-hours number or published hours.',
        'A statement of whether the system is combined or separate, or how old it is.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Ask the Utilities Department which rules apply to your address before you pay for any work in the street or on a lateral. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review the City requires. The City’s pages carry no update date, so confirm details with the City.',
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
    eyebrow: 'Buying in North Las Vegas',
    title: 'Sewer inspection before buying a North Las Vegas home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close. Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line. The City says the homeowner’s responsibility for the sewer service lateral ends at the connection to the main in the street, so after closing the lateral up to that point belongs to the owner of the property, which is you.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City of North Las Vegas pages we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. A buyer who wants evidence of the lateral’s condition can ask for an inspection during the transaction. Two practical points. The City’s utility portal offers a Start New Service request for customers who are moving, so confirm the current process with the City. And the City says most basic homeowner’s insurance policies do not cover service laterals, so ask your own insurer what applies to yours. Findings are informational and not legal advice.',
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
    body: 'This page covers the City of North Las Vegas only. Sewer agencies and lateral rules differ across the Las Vegas Valley, so check the page for your address.',
    items: [
      { title: 'Las Vegas', description: 'Local sewer details', pageId: id('loc-lv-las-vegas') },
      { title: 'Henderson', description: 'Local sewer details', pageId: id('loc-lv-henderson') },
      { title: 'Summerlin', description: 'Local sewer details', pageId: id('loc-lv-summerlin') },
      {
        title: 'All Las Vegas service areas',
        description: 'See the full Las Vegas market',
        pageId: id('market-las-vegas-nv'),
      },
    ],
  },
  faq: [
    {
      question: 'Who is responsible for the sewer lateral in North Las Vegas?',
      answer: (
        <p>
          The City of North Las Vegas says the homeowner’s responsibility for the sewer service
          lateral ends at the connection to the main in the street. The City’s Utilities Department,
          through its Operations division, provides water and sewer service to customers. The City
          describes blockages and breakages in separate statements, so read the next answer too. We
          did not find a City statement of who pays for repairs on the City’s side of the
          connection. Sources: City of North Las Vegas Water Leaks page; City of North Las Vegas
          Water page.
        </p>
      ),
    },
    {
      question: 'Does North Las Vegas treat a blockage the same as a breakage?',
      answer: (
        <p>
          The City’s water leaks page words them differently. For a blockage, it says the homeowner
          is responsible throughout the entire pipe until the connection to the City’s main. For a
          breakage, it says the homeowner is responsible until the point where the sewer line
          crosses the boundary of the property. We show both as the City states them and do not
          reconcile them, so ask the Utilities Department how they apply to your address. Source:
          City of North Las Vegas Water Leaks page.
        </p>
      ),
    },
    {
      question: 'What should I do if a plumber says the problem is on the City side?',
      answer: (
        <p>
          The City says that if a plumber has inspected the sewer line and determined that a
          breakage or blockage is on the City side, video evidence may be submitted to the
          Utilities Department for review. We did not find how the video is submitted or what the
          City does afterward, so contact the Utilities Department at the number the City lists on
          its utility portal, 702-633-1484 (the City’s number), before you pay for work. A camera
          inspection records the line on video and where along it a condition sits. Sources: City
          of North Las Vegas Water Leaks page; City of North Las Vegas utility portal.
        </p>
      ),
    },
    {
      question: 'Does the City of North Las Vegas help pay for lateral repairs?',
      answer: (
        <p>
          We did not find a City-run lateral repair, grant or reimbursement program on the City
          pages we reviewed. That is none found, not a statement that none exists. The City’s water
          leaks page describes the homeowner’s responsibility and a video-review path for problems
          on the City side, and no City repair or reimbursement for the homeowner’s side. Sources:
          City of North Las Vegas Water Leaks and Water pages.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer problem in North Las Vegas?',
      answer: (
        <p>
          The City’s utility portal lists 702-633-1484 (the City’s number) for the Utilities
          Department and a Service Communication feature to contact the utility online to report an
          outage or submit a request. We did not find a City sewer emergency line, after-hours
          number or published hours on the pages we reviewed. If a plumber or contractor points to
          your lateral, a camera inspection can show what is in it. These are the City’s contacts,
          not ours. Sources: City of North Las Vegas utility portal; City of North Las Vegas Water
          page.
        </p>
      ),
    },
    {
      question: 'Does North Las Vegas require a sewer inspection when a home is sold?',
      answer: (
        <p>
          We did not find a rule on the City of North Las Vegas pages we reviewed that requires a
          sewer lateral inspection, certification or seller disclosure when a home is sold. That
          reads as none found, not a confirmed absence, and it does not address state disclosure
          law. The City says the homeowner’s responsibility for the lateral runs to the connection
          to the main, so a buyer who wants evidence of its condition has to ask for it. Sources:
          City of North Las Vegas Water Leaks, Water and utility portal pages.
        </p>
      ),
    },
    {
      question: 'How do I start water and sewer service when I buy a home in North Las Vegas?',
      answer: (
        <p>
          The City’s utility portal offers a Start New Service request for customers who are
          moving, with notification preferences for the new address. We did not find a City
          statement about lateral inspections in that process. Confirm the current steps with the
          City. Source: City of North Las Vegas utility portal.
        </p>
      ),
    },
    {
      question: 'Does the City offer optional coverage for sewer lines?',
      answer: (
        <p>
          The City says it has partnered with Service Line Warranties of America to offer optional
          insurance coverage for water and sewer service lines, that the company is separate from
          the City, and that participating will not affect the price, availability or terms of City
          service. We found no price, coverage or claim terms on the City page and the Sewer Pros
          has no connection to the plan. Source: City of North Las Vegas Water Leaks page.
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
    title: 'Schedule a sewer camera inspection in North Las Vegas.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow or clogged drains, unexplained blockages, a repair recommendation you want checked, or a North Las Vegas property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'City of North Las Vegas: Water Leaks (page date not shown; accessed Oct 4, 2026)',
        href: CITY_LEAKS_URL,
      },
      {
        label: 'City of North Las Vegas: Water (page date not shown; accessed Oct 4, 2026)',
        href: CITY_WATER_URL,
      },
      {
        label: 'City of North Las Vegas: Utility portal (footer reads 2023; accessed Oct 4, 2026)',
        href: CITY_PORTAL_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote: 'Official guidance can change, so confirm details with the City of North Las Vegas.',
  },
}
