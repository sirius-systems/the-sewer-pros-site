import Link from 'next/link'
import { getService } from '@/data/services'
import { marketOperatingDetail } from '@/data/markets/markets'
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
 * Mission Valley, San Diego location page (`loc-sd-mission-valley`).
 *
 * Full rich composition, replacing the thin inline entry that used to live in
 * `san-diego.tsx`. Same structure as the San Diego City module
 * (`san-diego-city.tsx`): only copy, data, links and image slots differ.
 * Mission Valley is a City of San Diego community planning area, so the City's
 * Public Utilities rules apply. The page is commercial and mixed-use oriented
 * and owns the FEWD (food service grease) angle; the citywide page owns the
 * residential lateral rules. The program terms were read from City of San
 * Diego sources on 2026-10-04 (DEC-072).
 *
 * ⚠ MISSION VALLEY IS A DISTRICT, NOT A LOCATION OF THE BUSINESS. No office,
 * address, map pin or GBP statement appears, and the schema graph has no
 * Mission Valley `Place`: `areaServed` is the San Diego market Place.
 *
 * ⚠ BUSINESS FACTS ARE SAN DIEGO'S OWN (DEC-071). Phone, hours and the
 * founding year are read from `marketOperatingDetail['san-diego-ca']`, never
 * typed and never the company-wide (St. Louis) values. The City numbers are the
 * City's, each labelled as theirs. No licence, certification or insurance claim
 * is made for The Sewer Pros, and the page states no dollar amount.
 *
 * ⚠ NOT CARRIED OVER FROM THE OLD PAGE: "no reimbursement", "usually exceeds
 * the repair", and the "predominantly serve hotels..." wording. The City
 * describes the valley as a regional center of offices, hotels, retail and a
 * growing residential community, and that sentence is used instead.
 *
 * ⚠ NO COMMERCIAL BAND. `LocationPageContent` has no field that renders a
 * commercial band, so the two operator paragraphs live in the program callout
 * and the commercial links in the program closing line. No shared type or
 * component was changed for this.
 *
 * ⚠ IMAGES: the hero uses the existing shared hero art and the nine service
 * cards use their approved art (all rendered scenes, not job photos). Every
 * other slot is defined in `IMAGE_SLOTS` and, while `SHOW_IMAGE_SLOTS` is on
 * (the build environment), draws a labelled placeholder. Nothing on this page
 * renders an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from the other location modules; extract a shared module in a
 * separate refactor.
 */

const id = (value: string): PageId => value as PageId

const existing = (src: string, alt: string, source: string): CardImage => ({ src, alt, source })

/** San Diego's own phone, hours and founding year (DEC-071). */
const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

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
 * currently use existing approved art (the shared hero backdrop and
 * `cardImage()`), whose alt text describes a different image than the future
 * photo this registry's `alt` describes. Use the Mission Valley wording only
 * if the photo is from a Mission Valley property: for `mission-valley-hero`
 * "Technician with a sewer camera at a Mission Valley, San Diego property", and
 * for `final-bg` "Mission Valley, San Diego property exterior with a crew truck".
 *
 * The commercial-band slot (`com-site`) is not registered: this page has no
 * commercial band (see the module comment).
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'mission-valley-hero',
    ratio: '16:9',
    alt: 'Technician feeding a sewer camera into a cleanout at a commercial building',
    shot: 'Technician at a commercial back-of-house cleanout, truck and monitor in frame',
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
    alt: 'Sewer cleaning equipment at work',
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
    alt: 'Technician using a sewer line locator',
    shot: 'Technician with a locator receiver, paint marks on pavement',
  },
  {
    id: 'svc-drain',
    ratio: '4:3',
    alt: 'Drain cleaning equipment at a floor drain',
    shot: 'Drain machine at a floor drain',
  },
  {
    id: 'svc-prepurchase',
    ratio: '4:3',
    alt: 'Inspector explaining findings to a property buyer',
    shot: 'Technician scoping a for-sale property, clipboard visible',
  },
  {
    id: 'svc-backup',
    ratio: '4:3',
    alt: 'Camera monitor showing the condition of a sewer line',
    shot: 'Monitor beside a floor drain with cleanout access',
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
    alt: 'Commercial street with a manhole cover near the curb',
    shot: 'Ordinary commercial or mixed-use street, manhole and curb, no business names or identifiable buildings',
  },
  {
    id: 'call-cleanout',
    ratio: '4:3',
    alt: 'Capped sewer cleanout beside a building foundation',
    shot: 'Exterior cleanout cap at the base of a building',
  },
  {
    id: 'program-footage',
    ratio: '4:3',
    alt: 'Monitor showing sewer lateral footage with a visible grease build-up or defect',
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
    shot: 'Technician and owner reviewing findings, faces not identifiable',
  },
  {
    id: 'buy-buyer',
    ratio: '4:3',
    alt: 'Inspector walking a property buyer through inspection findings',
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
    alt: 'Crew truck at the curb of a commercial building',
    shot: 'Crew truck at a curb, reel visible, no plate, no business name',
  },
]

function slotImage(slotId: string): CardImage | undefined {
  return resolveSlotImage(IMAGE_SLOTS.find((s) => s.id === slotId))
}

/* ==========================================================================
   Service cards. One source for the grid, the form select and the schema.
   Same text and order as the San Diego City page; only two links differ.
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
    // No approved Mission Valley camera page exists, so this goes to the core
    // service page and does not compete with the citywide camera page.
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
    secondaryLink: {
      label: 'Hydro jetting in Mission Valley',
      pageId: id('sl-mission-valley-hydro'),
    },
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
      label: 'About pre-purchase sewer inspection',
      pageId: id('svc-pre-purchase-sewer-inspection'),
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
    { value: 'mission-valley', label: 'Mission Valley, San Diego' },
    { value: 'san-diego', label: 'San Diego, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'mission-valley',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_PLANNING_URL = 'https://www.sandiego.gov/planning/community-plans/mission-valley'
const CITY_FEWD_URL = 'https://www.sandiego.gov/public-utilities/sewer-spill-reduction/fewd'
const CITY_PLUMBING_URL =
  'https://www.sandiego.gov/public-utilities/customer-support/meter-water-pressure-plumbing-system'
const CITY_SPILL_URL = 'https://www.sandiego.gov/public-utilities/sewer-spill-reduction'
const CITY_CONSTRUCTION_URL =
  'https://www.sandiego.gov/public-utilities/permits-construction/construction-and-development/sewer'
const CITY_RECORDS_URL = 'https://www.sandiego.gov/public-utilities/customer-support/gis-maps-records'
const CITY_BULLETIN_URL =
  'https://www.sandiego.gov/development-services/forms-publications/information-bulletin/166'
const CITY_IBA_URL =
  'https://www.sandiego.gov/sites/default/files/2026-01/26-01-iba-review-pud-fy2027-2031-five-year-financial-outlook.pdf'

export const sanDiegoMissionValleyContent: LocationPageContent = {
  seoTitle: 'Mission Valley Sewer Inspection & Cleaning',
  metaDescription:
    "Sewer camera inspection, hydro jetting and cleaning for Mission Valley businesses and mixed-use properties, with the City's grease and lateral rules.",
  hero: {
    title: 'Sewer and Drain Service in Mission Valley, San Diego',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, hydro jetting and cleaning for Mission
        Valley&rsquo;s hotels, restaurants, retail, offices and mixed-use buildings. Mission
        Valley is a City of San Diego planning area, so the City&rsquo;s rules apply: the owner
        maintains the sewer lateral to the City main, and food service businesses answer to the
        City&rsquo;s grease permit program. Get recorded evidence of the line before you clean,
        remodel, buy or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting planned around your operations when the evidence supports it',
      `Serving San Diego since ${sd.foundingYear}`,
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${sd.phone}`,
    // Existing shared hero art. Its approved alt describes the file, not a
    // Mission Valley job, and its recorded source says it is a rendered scene.
    // A Mission Valley photo in the `mission-valley-hero` slot replaces it.
    backdrop: existing(
      '/images/homepage/hero/the-sewer-pros-residential-sewer-camera-inspection-hero.webp',
      'Camera reel and monitor at an open cleanout on a residential driveway',
      'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
    ),
    card: {
      title: 'Request a Sewer Inspection',
      intro: 'Tell us what is going on. We will follow up during business hours.',
      phoneLineSuffix: sd.hours,
      nextStepsTitle: 'What happens next',
      nextSteps: [
        'Send your request or call us',
        'We schedule your inspection',
        'You review the recorded findings',
      ],
      note: (
        <>
          To report a sewer spill or a sewer odor, the City asks you to call its reporting line
          at 619-515-3525.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Mission Valley sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'Mission Valley is a City of San Diego planning area of about 2,418 net acres, not a separate city or sewer district. City of San Diego Public Utilities rules apply, and guidance written for other San Diego County cities or districts does not.',
      'The City describes the valley as a regional center of offices, hotels, retail and a growing residential community. Every food service establishment in the City needs a City grease permit, and a new restaurant or a remodel needs a grease review before construction.',
      'The City’s guidance says the owner maintains the lateral all the way to the City main, and we did not find a City program that helps owners pay for lateral work. A camera inspection gives you recorded evidence before you spend money.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Mission Valley sewers', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City programs', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying property', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Mission Valley',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Mission Valley',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${sd.phone}`,
    },
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at a Mission Valley property?',
    answer: (
      <>
        <p>
          The City of San Diego runs the public sewer in Mission Valley, and the City&rsquo;s
          guidance says the property owner maintains the sewer lateral from the building all the
          way to its connection with the City sewer main. That connection can be in the street,
          beyond the property line, in an easement or in a canyon, so responsibility does not
          stop at the lot line.
        </p>
        <p className="mt-4">
          Mission Valley is a planning area inside the City, not a separate municipality, and we
          did not find a separate Mission Valley sewer utility. A particular parcel can still be
          an exception, so confirm your address with{' '}
          <a href={CITY_PLUMBING_URL} rel="noopener">
            Public Utilities
          </a>
          . If you lease space, the
          City&rsquo;s guidance speaks to the property owner. How a lease divides the duty
          between landlord and tenant is a matter for the lease, and this page does not give
          legal advice.
        </p>
        <p className="mt-4">
          When a licensed plumber finds a break or collapse beyond the property line, the City
          directs the plumber to call 619-515-3525 and file what it calls a Plumber&rsquo;s
          Report. The City says it will investigate within 24 hours.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer',
        body: 'City of San Diego Public Utilities operates the collection system that serves Mission Valley. Where a given building connects to the main is address-specific, so check the City’s records for yours.',
      },
      {
        tag: 'Property - Owner',
        title: 'The lateral line',
        body: 'The pipe from the building to the City sewer main is the lateral. For a restaurant, a hotel kitchen or a multi-tenant building it is the line that carries everything the property sends out, and the City says the owner maintains it up to the main.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the lateral line',
      columns: ['Question', 'Public sewer', 'Lateral line'],
      rows: [
        {
          label: 'Who runs it',
          publicMain: 'The City of San Diego Public Utilities Department.',
          privateLateral: 'The property owner, from the building to the City main.',
        },
        {
          label: 'Where the line ends',
          publicMain: 'At the City main, which can sit in the street, an easement or a canyon.',
          privateLateral: 'At that same connection, so it can run past your lot line.',
        },
        {
          label: 'First contact',
          publicMain: 'City Public Utilities, 619-515-3525, for a sewer spill or sewer odor.',
          privateLateral:
            'A plumber or cleaning company for the lateral; for a break beyond the property line the City’s process starts with a plumber’s call and a Plumber’s Report.',
        },
        {
          label: 'Food service grease',
          publicMain: 'The City permits and monitors food service establishments through its FEWD program.',
          privateLateral: 'The facility installs the grease-removal equipment its permit calls for.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and how far along the line a problem sits.',
        },
      ],
    },
    note: 'This is general information from City of San Diego sources, not legal advice. We did not find a current City statement of who pays for repairs beyond the property line or after City-caused damage, so we do not make one. Contact Public Utilities to confirm how the rules apply to your address.',
  },
  systemExplainer: {
    eyebrow: 'Mission Valley sewers',
    title: 'What makes a Mission Valley sewer line different?',
    paragraphs: [
      'Mission Valley sits in the San Diego River floodplain and, in the City’s words, has become a regional center of offices, hotels, retail sales and a growing residential community. The City’s planning page says major development began in 1958 after regional highway improvements, with Interstate 8 giving commercial development its push. The public sewer is the City’s. What differs is what the buildings on it send down their lines.',
      'A restaurant or hotel kitchen sends cooking fat, oil and grease down its line every day, and the City names grease, along with roots, as a leading cause of sewer spills. A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every tenant at once. That is why the City runs a permit program for food service grease, covered below.',
      'The City’s pages we reviewed do not say whether the collection system serving Mission Valley is combined or separate, or how old its pipes are, and we do not guess. A development date for the valley does not tell you the age or material of any one lateral. Only an inspection of your line can.',
      'The City also describes the valley as part of the San Diego River floodplain. We did not find a City statement linking that to sewer conditions, so we make no claim about groundwater, flooding or infiltration.',
      'You may hear people say East Mission Valley or West Mission Valley. The City folded its 1963 East Mission Valley Area Plan and 1971 West Mission Valley Report into one community plan in 1985, updated in 2019. We found no City source that divides sewer rules between east and west.',
    ],
    card: {
      image: slotImage('system-street'),
      title: 'What a camera inspection can show on a commercial lateral',
      bullets: [
        'Blockages and grease build-up along the pipe wall',
        'Root intrusion',
        'Separated or offset joints',
        'Cracks and visible pipe damage',
        'Standing water or low spots (bellies)',
        'Where the line runs, with locating',
        'The line’s condition before and after cleaning',
      ],
      // `closing` is a single string in the shared type, so the two source
      // paragraphs are joined into one.
      closing:
        'You get recorded evidence with a distance count, so you can tell a line that needs a cleaning schedule from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line is.',
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Spill, grease permit or lateral condition? Start with the right contact.',
    paragraphs: [
      'For a sewer spill or a bad sewer odor, call the City. For grease permits, plan review or interceptor questions, the City’s FEWD program is the contact. For the condition of your own lateral, an independent camera inspection shows what is inside the line.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'City of San Diego Public Utilities - sewer spill and emergency reporting line',
      phone: { label: '619-515-3525', href: 'tel:+16195153525' },
      text: 'The City lists this number to report a sewer spill or bad sewer odor, and for a licensed plumber filing a Plumber’s Report. This is the City’s number, not ours. The City’s pages we reviewed do not label it as a 24-hour line, and we did not find a separate after-hours sewer number.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of San Diego FEWD - grease permits and plan checks',
      phone: { label: '858-654-4188', href: 'tel:+18586544188' },
      text: 'The City lists this number for plan checks and for information about grease-removal equipment at food service establishments. This is the City’s number, not ours, and we did not find published hours for it.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.hours}.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City programs',
    title: 'City programs that apply to a Mission Valley property',
    lede: 'We did not find an active City of San Diego program that gives property owners a grant, reimbursement or other financial help with sewer lateral repair, replacement, cleaning or inspection. We checked the City’s Public Utilities sewer pages, its sewer construction page, its maps and records page, Development Services Information Bulletin 166 and its funding-opportunities page. That is “none found in the pages we reviewed”, not a statement that no help exists. What the City does run that matters to Mission Valley’s businesses is a permit program for food service grease.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'The City’s food service grease program (FEWD)',
      items: [
        'The City says every food service establishment within the City must obtain a permit from its Food Establishment Wastewater Discharge (FEWD) program, run by Public Utilities. The permit ensures the facility installs equipment designed to trap cooking fats, oil and grease before they enter the sewer.',
        'Plans for new commercial food service establishments, including new construction, remodels and retrofits, must receive a FEWD plan review so the right equipment goes in during construction.',
        'After a grease-related sewer spill, FEWD inspectors look at facilities in the immediate area to find which contributed. Where more equipment is required, the facility is given a due date to comply.',
        'The City calls the small device usually installed inside a facility a hydromechanical grease interceptor (HGI), previously called a grease trap. A gravity grease interceptor (GGI) is a larger tank installed underground outside, usually at high-volume or new establishments.',
        'FEWD is a permit program. It is not financial help, and it does not review the condition of a lateral. Plan checks and equipment questions: 858-654-4188 (the City’s number).',
      ],
    },
    doesNotCover: {
      title: 'Laterals and permits, as the City describes them',
      items: [
        'The City says its program for City wastewater crews to install sewer laterals is currently suspended. For that work it points applicants to a public-improvement permit and a Class A licensed contractor. That is a permit and contractor instruction, not financial help.',
        'A Right-of-Way Permit is required for work in the public right-of-way or in a water or sewer easement.',
        'The City says sewer lateral connections, unlike water main connections, can be made by a licensed contractor.',
        'We did not find a City page that says whether work confined entirely to private property needs a permit. Ask Development Services before work starts: 619-446-5242 for utility inspection scheduling, 619-446-5300 for sewer maps and records (the City’s numbers).',
      ],
    },
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'Because we found no assistance program, plan on arranging inspection, cleaning and any repair yourself, and ask the City whether anything applies to your address. A camera inspection gives you your own recorded evidence: whether the line has grease build-up or a defect, where along the line it sits, and how that compares with a cleaning schedule or a repair recommendation. We make no claim that the City accepts an outside report or that our work satisfies any FEWD or permit requirement.',
        // The two commercial-operator paragraphs from the content brief: this
        // page has no commercial band field to hold them.
        'Where lines carry grease or continuous volume, the useful pattern is usually to establish the line’s condition, clean on an interval the evidence supports, and re-inspect, rather than respond to backups as they happen. Not every line needs that. Inspection shows which ones do, and putting a line on a schedule its condition does not justify is the kind of recommendation we exist to avoid making.',
        'On an occupied commercial site, access means trading hours, tenants, service corridors and other contractors. That is a planning constraint to work around, and it is worth raising when you request service. The cost of a failure on a commercial site can include lost trading time and displaced tenants on top of the plumbing.',
        'The contractors you hire perform approved repairs. The Sewer Pros does not perform repairs or replacements.',
      ],
    },
    closing: (
      <>
        See our{' '}
        <Link href="/san-diego-ca/mission-valley/hydro-jetting/">
          hydro jetting in Mission Valley
        </Link>{' '}
        page. For businesses and property managers:{' '}
        <Link href="/commercial/">commercial sewer and drain services</Link>,{' '}
        <Link href="/commercial/sewer-camera-inspection/">
          commercial sewer camera inspection
        </Link>{' '}
        and <Link href="/commercial/hydro-jetting/">commercial hydro jetting</Link>, or{' '}
        <Link href="#request">request commercial service</Link>.
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
    eyebrow: 'Buying in Mission Valley',
    title: 'Sewer inspection before buying Mission Valley property',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard property inspection does not cover. That applies to a mixed-use building, a multifamily property or a commercial space as much as to a home. The City’s own advice to buyers is written for homes: in addition to a home inspection, it is a good idea to get a licensed-plumber report on the condition of the home’s lateral connection. That is City guidance, not a requirement.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'We did not find a City of San Diego rule that requires a sewer lateral inspection when a property is sold, and we did not find a sewer-lateral disclosure rule in the materials we reviewed. That reads as none found, not as a confirmed absence, and it does not address lenders, leases, redevelopment permits or state-level rules. Two details matter to a buyer here. Development Services can show where a property’s lateral connects to the City main (619-446-5300, the City’s number), but the City says it has no diagrams of where private lines run on the property. And if the space is a restaurant, ask the seller or landlord for the FEWD permit and grease-removal equipment records. The City issues that permit, so the paperwork starts with them. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [{ label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') }],
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
    title: 'Serving the wider San Diego area',
    body: 'This page covers the Mission Valley planning area. Sewer authorities and lateral rules differ across San Diego County, so terms and costs change from place to place.',
    items: [
      {
        title: 'San Diego',
        description: 'The citywide page for homes and City lateral rules',
        pageId: id('loc-sd-san-diego'),
      },
      {
        title: 'Chula Vista',
        description: 'Local sewer details',
        pageId: id('loc-sd-chula-vista'),
      },
      { title: 'Carlsbad', description: 'Local sewer details', pageId: id('loc-sd-carlsbad') },
      { title: 'Oceanside', description: 'Local sewer details', pageId: id('loc-sd-oceanside') },
      { title: 'Escondido', description: 'Local sewer details', pageId: id('loc-sd-escondido') },
      {
        title: 'San Marcos',
        description: 'Local sewer details',
        pageId: id('loc-sd-san-marcos'),
      },
      {
        title: 'All San Diego service areas',
        description: 'See the full San Diego market',
        pageId: id('market-san-diego-ca'),
      },
    ],
  },
  faq: [
    {
      question: 'Is Mission Valley a separate city?',
      answer: (
        <p>
          No. The City of San Diego&rsquo;s planning page describes Mission Valley as a community
          planning area of about 2,418 net acres near the geographic center of the City, so City
          of San Diego Public Utilities rules apply. We did not find a separate Mission Valley
          sewer utility in the City materials we reviewed, though a particular parcel can still
          be an exception, so confirm your address with the City. Sources: City Mission Valley
          Community Plan page; City Independent Budget Analyst review of Public Utilities.
        </p>
      ),
    },
    {
      question: 'Who maintains the sewer lateral at a Mission Valley business?',
      answer: (
        <p>
          The City says the property owner maintains the sewer lateral from the building all the
          way to its connection with the City sewer main, even when that connection is in the
          street, past the property line, in an easement or in a canyon. If you lease the space,
          how the duty is divided between landlord and tenant is a matter for the lease, and this
          is not legal advice. Sources: City Public Utilities sewer plumbing page; City maps and
          records page.
        </p>
      ),
    },
    {
      question: 'Does a Mission Valley restaurant need a City grease permit?',
      answer: (
        <p>
          The City says all food service establishments within the City must obtain a permit
          from its Food Establishment Wastewater Discharge (FEWD) program. The permit ensures the
          facility installs equipment designed to trap cooking fats, oil and grease before they
          enter the sewer. For plan checks or equipment questions the City lists 858-654-4188.
          Source: City FEWD program page.
        </p>
      ),
    },
    {
      question: 'Do a new restaurant, a remodel or a retrofit in Mission Valley need a grease review?',
      answer: (
        <p>
          Yes. The City says all plans for new commercial food service establishments, including
          new construction, remodels and retrofits, must receive a FEWD plan review so the
          appropriate grease-removal equipment is installed during construction. Source: City
          FEWD program page.
        </p>
      ),
    },
    {
      question: 'What is the difference between a grease trap and a gravity grease interceptor?',
      answer: (
        <p>
          The City now calls a grease trap a hydromechanical grease interceptor (HGI): a small
          device usually installed inside a facility. A gravity grease interceptor (GGI) is a
          larger tank installed underground outside a facility, and the City says it is usually
          used by high-volume or new establishments. Both slow the water so grease can float to
          the top for removal. A camera inspection shows the condition of the line, not whether
          equipment meets the City&rsquo;s requirements. Source: City FEWD program page.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer spill or sewer odor in Mission Valley?',
      answer: (
        <p>
          The City asks you to call 619-515-3525 immediately if you see, smell or suspect a
          sewer spill or bad sewer odor. The number belongs to the City Public Utilities
          Department. The City&rsquo;s pages we reviewed do not label it as a 24-hour line, so
          we do not either. Sources: City Public Utilities sewer spill reduction page; City
          sewer plumbing page.
        </p>
      ),
    },
    {
      question: 'What happens if a plumber finds a break or collapse beyond the property line?',
      answer: (
        <p>
          The City directs a licensed plumber who finds a break or collapse beyond the property
          line to call 619-515-3525 and file a Plumber&rsquo;s Report, and says it will
          investigate within 24 hours. We did not find a current City statement of who pays for
          repairs beyond the property line, so confirm that with Public Utilities. Source: City
          Public Utilities sewer plumbing page.
        </p>
      ),
    },
    {
      question: 'Does the City help pay for lateral work, and who may do the work?',
      answer: (
        <p>
          We did not find an active City program that gives owners a grant, reimbursement or
          other help with lateral costs on the City pages we reviewed. The City says its program
          for City crews to install sewer laterals is currently suspended and points applicants
          to a public-improvement permit and a Class A licensed contractor. A Right-of-Way
          Permit is required for work in the public right-of-way or a water or sewer easement.
          We did not find a City page on whether work entirely on private property needs a
          permit, so ask Development Services. Sources: City sewer construction page; City
          Information Bulletin 166.
        </p>
      ),
    },
    {
      question: 'How often should a restaurant line be cleaned?',
      answer: (
        <p>
          It depends on volume, what enters the line and its condition, not on a standard
          interval. A camera pass shows how much has built up since the last cleaning, which is a
          better basis for a schedule than a default. If the City has required grease-removal
          equipment for your facility, follow the City&rsquo;s requirements for it.
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
    title: 'Schedule a sewer inspection in Mission Valley.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, a grease problem, a remodel or purchase that depends on the condition of the line, or a repair recommendation you want checked. You get video evidence of visible conditions inside the accessible line.',
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
      {
        label: 'City of San Diego: Mission Valley Community Plan (adopted Sep. 10, 2019)',
        href: CITY_PLANNING_URL,
      },
      {
        label:
          'City of San Diego Public Utilities: Food Establishment Wastewater Discharge (FEWD) Program (undated)',
        href: CITY_FEWD_URL,
      },
      {
        label: 'City of San Diego Public Utilities: Sewer plumbing and lateral responsibility (undated)',
        href: CITY_PLUMBING_URL,
      },
      { label: 'City of San Diego Public Utilities: Sewer spill reduction (undated)', href: CITY_SPILL_URL },
      {
        label:
          'City of San Diego Public Utilities: Sewer construction and development (undated; states the crew lateral-installation program is currently suspended)',
        href: CITY_CONSTRUCTION_URL,
      },
      { label: 'City of San Diego: Maps and records (undated)', href: CITY_RECORDS_URL },
      {
        label: 'City of San Diego Development Services: Information Bulletin 166 (March 2026)',
        href: CITY_BULLETIN_URL,
      },
      {
        label:
          'City of San Diego Independent Budget Analyst: Public Utilities FY2027-2031 five-year financial outlook review (January 2026)',
        href: CITY_IBA_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the City for your address.',
  },
  servicePageIds: [id('sl-mission-valley-hydro')],
}
