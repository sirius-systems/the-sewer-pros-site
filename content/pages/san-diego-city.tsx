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
 * City of San Diego location page (`loc-sd-san-diego`).
 *
 * Full rich composition, replacing the thin inline entry that used to live
 * in `san-diego.tsx`. Same structure as the St. Charles, Florissant,
 * Chesterfield and Ballwin modules (uniform municipality pages): only copy,
 * data, links and image slots differ. This page has no review band and no
 * housing-age section: San Diego review figures and Census housing figures
 * have not been supplied, so those sections are absent rather than invented.
 * The program terms were read from City of San Diego sources on 2026-10-03
 * (DEC-072, DEC-115).
 *
 * ⚠ SAN DIEGO IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. The City's Public Utilities Department runs the
 * system; no other San Diego County city's or district's rule is stated as if
 * it governed this page.
 *
 * ⚠ BUSINESS FACTS ARE SAN DIEGO'S OWN (DEC-071). Phone, hours and the
 * founding year are read from `marketOperatingDetail['san-diego-ca']`, never
 * typed and never the company-wide (St. Louis) values. The City numbers are the
 * City's, each labelled as theirs. No licence, certification or insurance claim
 * is made for The Sewer Pros, and the page states no dollar amount.
 *
 * ⚠ NOT CARRIED OVER FROM THE OLD PAGE: "no reimbursement", the "neglect"
 * distinction, "the City repairs right-of-way breaks" and the housing-age
 * statement. Current City pages do not support them.
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
 * currently use existing approved art (the market hero backdrop and
 * `cardImage()`), whose alt text describes a different image than the future
 * photo this registry's `alt` describes. Use the San Diego wording for
 * `san-diego-hero` and `final-bg` only if the photo is from a San Diego
 * property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'san-diego-hero',
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
      label: 'Sewer camera inspection in San Diego',
      pageId: id('sl-sd-city-camera'),
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
    { value: 'san-diego', label: 'San Diego, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'san-diego',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_PLUMBING_URL =
  'https://www.sandiego.gov/public-utilities/customer-support/meter-water-pressure-plumbing-system'
const CITY_SUPPORT_URL = 'https://www.sandiego.gov/public-utilities/customer-support'
const CITY_SPILL_URL = 'https://www.sandiego.gov/public-utilities/sewer-spill-reduction'
const CITY_CONSTRUCTION_URL =
  'https://www.sandiego.gov/public-utilities/permits-construction/construction-and-development/sewer'
const CITY_RECORDS_URL = 'https://www.sandiego.gov/public-utilities/customer-support/gis-maps-records'
const CITY_BULLETIN_URL =
  'https://www.sandiego.gov/development-services/forms-publications/information-bulletin/166'
const CITY_POLICY_URL = 'https://docs.sandiego.gov/councilpolicies/cpd_400-10.pdf'
const CITY_CODE_URL = 'https://docs.sandiego.gov/municode/municodechapter06/ch06art04division04.pdf'
const CITY_IBA_URL =
  'https://www.sandiego.gov/sites/default/files/2026-01/26-01-iba-review-pud-fy2027-2031-five-year-financial-outlook.pdf'

export const sanDiegoCityContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in San Diego, CA',
  metaDescription:
    'Sewer camera inspection, hydro jetting and cleaning in San Diego, CA. See how the City assigns lateral responsibility and when video evidence helps.',
  hero: {
    title: 'Sewer Inspection and Cleaning in San Diego, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for City of San Diego properties. Under the City&rsquo;s guidance the
        owner maintains the sewer lateral all the way to the City sewer main, so get clear
        evidence of what is happening inside your line before you clean, buy a home, or approve
        major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      `Serving San Diego since ${sd.foundingYear}`,
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${sd.phone}`,
    // Existing shared hero art. Its approved alt describes the file, not a San
    // Diego job, and its recorded source says it is a rendered scene. A San
    // Diego photo in the `san-diego-hero` slot replaces it.
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
  faqHeading: 'San Diego sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of San Diego runs its own sewer system through its Public Utilities Department. Guidance written for other San Diego County cities or districts does not apply here.',
      'The City’s guidance says the owner maintains the sewer lateral all the way to the connection with the City sewer main, even when that connection is in the street, an easement or a canyon.',
      'We did not find a City program that helps homeowners pay for lateral work, and the City says its crew lateral-installation program is currently suspended. A camera inspection gives you recorded evidence before you spend money.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in San Diego', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City lateral program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in San Diego',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in San Diego',
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
    title: 'Who is responsible for the sewer line at a San Diego property?',
    answer: (
      <>
        <p>
          In the City of San Diego, the sewer system is run by the City&rsquo;s{' '}
          <a href={CITY_PLUMBING_URL} rel="noopener">
            Public Utilities Department
          </a>
          . The City&rsquo;s customer guidance says the property owner is responsible
          for maintaining the sewer lateral from the property all the way to its connection
          with the City sewer main. That connection can be in the street, beyond the property
          line, in an easement or in a canyon, so responsibility does not stop at the lot line
          or the curb.
        </p>
        <p className="mt-4">
          When a licensed plumber finds a break or collapse beyond the property line, the City
          directs the plumber to call its Sewer Emergency Line at 619-515-3525 and file what it
          calls a Plumber&rsquo;s Report. The City says it will investigate within 24 hours.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer',
        body: 'The City’s Public Utilities Department operates a municipal collection system for City neighborhoods and a regional system that conveys and treats wastewater for the City and participating agencies. Whether a specific address connects to a main in the street, an easement or a canyon is address-specific, so check the City’s records for yours.',
      },
      {
        tag: 'Property - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the City sewer main is the lateral. The City describes it as the connection between a property’s sewerage system and the City main, and says the owner maintains it up to that main.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the lateral line',
      columns: ['Question', 'Public sewer', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: 'The City of San Diego Public Utilities Department.',
          privateLateral:
            'The property owner. The City describes the lateral as the line from the property to the City sewer main.',
        },
        {
          label: 'Who maintains it',
          publicMain:
            'The City operates its municipal collection system and the regional system.',
          privateLateral:
            'The owner maintains it all the way to the connection with the City main, even where that connection is in the street, an easement or a canyon.',
        },
        {
          label: 'Who to contact first',
          publicMain: 'City Public Utilities, 619-515-3525, for a sewer spill or sewer odor.',
          privateLateral:
            'A plumber for the lateral. For a break or collapse beyond the property line, the City’s process runs through the plumber’s call and a Plumber’s Report.',
        },
        {
          label: 'What help exists',
          publicMain: 'The City says it will investigate a Plumber’s Report within 24 hours.',
          privateLateral:
            'We did not find a City program that helps homeowners pay for lateral work. See “City lateral program” below.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and the recorded distance along the line where a problem sits.',
        },
      ],
    },
    note: 'This is general information from City of San Diego sources, not legal advice. We did not find a current City statement of who pays for repairs beyond the property line or after City-caused damage, so we do not make one. Contact Public Utilities to confirm how the rules apply to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in San Diego',
    title: 'How sewers work in the City of San Diego',
    paragraphs: [
      'The City of San Diego runs two connected systems. Its Municipal Wastewater System collects wastewater from City neighborhoods. Its Metropolitan Wastewater System conveys and treats wastewater for the City and for participating agencies beyond City limits. The City is the sewer authority for a City property. Other cities and special districts around San Diego County run their own systems with their own rules, so this page covers the City of San Diego only.',
      'The City’s pages we reviewed do not say whether its collection system is combined or separate, or how old it is.',
      'The City names roots and cooking grease as leading causes of both public sewer spills and spills from private laterals. For a lateral with a cleanout, the City recommends flushing the cleanout with a high-pressure hose at least once a year. A cleanout flush is not an inspection: it does not show what is inside the pipe.',
      'Layout also varies by address. The City’s design standards require a special agreement, called an Encroachment Maintenance Removal Agreement, for certain nonstandard laterals, including laterals that connect in a sewer easement, enter the main at an angle, have inadequate slope or unusual depth, run close to trees, or run near a driveway. That is a City rule about design and permits, not a finding about any one property.',
      'A public sewer rule does not tell you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
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
      // `closing` is a single string in the shared type, so the two source
      // paragraphs are joined into one.
      closing:
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line is. For a break beyond the property line the City’s own process applies.',
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'For a sewer spill, a bad sewer odor, or a sewer manhole that looks vandalized, the City asks you to call its reporting line immediately. For a lateral problem, the City’s process for a break beyond the property line runs through a plumber’s call and a Plumber’s Report.',
      'If a plumber or the City points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // The panel type holds one tappable number, so the customer-service line is
    // a labelled sentence in `text`. Both numbers are the City's.
    agency: {
      label: 'City of San Diego Public Utilities - sewer spill reporting line',
      phone: { label: '619-515-3525', href: 'tel:+16195153525' },
      text: 'The City lists this number to report a sewer spill, bad sewer odor, water leak or water-pressure issue, and for a plumber filing a Plumber’s Report. This is the City’s number, not ours. The City’s pages we reviewed do not label it as a 24-hour line, and we did not find a separate after-hours sewer number. Water and wastewater customer service, 619-515-3500: Monday to Friday, 7:30 a.m. to 5 p.m., closed on City holidays. This is the City’s number and the City’s hours, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of San Diego Development Services - sewer maps and records',
      phone: { label: '619-446-5300', href: 'tel:+16194465300' },
      text: 'The City lists this number for appointments to review water and sewer maps and records. Copies of as-built construction plans are requested through the Records Section at 619-446-5200. These are the City’s numbers, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral program',
    title: 'Help with lateral costs in the City of San Diego, and where an inspection fits',
    lede: 'We did not find an active City of San Diego program that gives homeowners a grant, reimbursement or other financial help with sewer lateral repair, replacement, cleaning or inspection. We checked the City’s Public Utilities sewer pages, its sewer construction page, its maps and records page, Development Services Information Bulletin 166 and Council Policy 400-10. That is “none found in the pages we reviewed”, not a statement that no help exists.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City does say about laterals',
      items: [
        'The City says its program for City wastewater crews to install sewer laterals is currently suspended.',
        'For that work the City points applicants to a public-improvement permit and a Class A licensed contractor. That is a permit and contractor instruction, not financial help.',
        'We did not find a published fund, cap, waiting list or application for homeowner aid, so we make no claim about any. Confirm current terms with Public Utilities at 619-515-3500 (the City’s number).',
      ],
    },
    doesNotCover: {
      title: 'Permits for lateral work, as the City describes them',
      items: [
        'A Right-of-Way Permit is required for work in the public right-of-way or in a water or sewer easement.',
        'The City requires an inspection after the right-of-way trench is excavated and before the connection, plus a final inspection when the work is complete.',
        'The City says sewer lateral connections, unlike water main connections, can be made by a licensed contractor.',
        'The Municipal Code says a person may not construct or alter a public sewer, lateral sewer or house connection that discharges to City public sewers without City approval of the plans.',
        'We did not find a City page that says whether work confined entirely to private property needs a permit. Ask Development Services (619-446-5242, the City’s number) before work starts.',
      ],
    },
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'Because we found no City assistance program, plan on arranging lateral inspection, cleaning and any repair yourself, and ask the City whether anything applies to your address. A camera inspection gives you your own recorded evidence before you spend money: whether the line has a blockage or a defect, where along the line it sits, and how it compares with a repair recommendation. We make no claim that the City accepts an outside report or that our work satisfies any City requirement.',
        'The contractors you hire perform approved repairs. The Sewer Pros does not perform repairs or replacements.',
      ],
    },
    closing: (
      <>
        See our{' '}
        <Link href="/locations/san-diego-ca/san-diego/sewer-camera-inspection/">
          sewer camera inspection in San Diego
        </Link>{' '}
        page.
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
    eyebrow: 'Buying in San Diego',
    title: 'Sewer inspection before buying a San Diego home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close. Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line. The City of San Diego itself tells buyers that, in addition to a home inspection, it is a good idea to get a licensed-plumber report on the condition of the home’s lateral connection. That is City guidance, not a requirement.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'We did not find a City of San Diego rule that requires a sewer lateral inspection when a home is sold, and we did not find a City sewer-lateral disclosure rule in the materials we reviewed. That reads as none found, not as a confirmed absence, so a buyer who wants evidence of the lateral has to ask for it. This does not address state-level disclosure rules, which are outside this page. Two details matter to a buyer. The lateral can connect to a main in the street, an easement or a canyon, so find out where the connection is before you plan around it. Development Services can help identify where a property’s lateral connects and offers maps and records review, but the City says it does not have diagrams showing where private sewer lines run on the property. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer camera inspection in San Diego', pageId: id('sl-sd-city-camera') },
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
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
    title: 'Serving the wider San Diego area',
    body: 'This page covers the City of San Diego only. Sewer authorities and lateral rules differ across San Diego County, so terms and costs change from place to place.',
    items: [
      {
        title: 'Mission Valley',
        description: 'Commercial-leaning property sewer services',
        pageId: id('loc-sd-mission-valley'),
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
      question: 'Who is responsible for a sewer lateral in the City of San Diego?',
      answer: (
        <p>
          The City says the property owner is responsible for maintaining the sewer lateral from
          the property all the way to its connection with the City sewer main. That connection
          can be in the street, past the property line, in an easement or in a canyon, so
          responsibility should not be assumed to stop at the curb or lot line. Council Policy
          400-10 also says the owner is responsible for periodic clearing of roots and other
          foreign matter from the lateral. Sources: City Public Utilities sewer plumbing page;
          City maps and records page; City Council Policy 400-10.
        </p>
      ),
    },
    {
      question: 'What number do I call for a sewer spill or sewer odor in San Diego?',
      answer: (
        <p>
          The City asks you to call 619-515-3525 immediately if you see, smell or suspect a
          sewer spill or bad sewer odor, or if a sewer manhole looks vandalized. The number
          belongs to the City Public Utilities Department. The City&rsquo;s pages we reviewed do
          not label it as a 24-hour line, so we do not either. Sources: City Public Utilities
          customer support page; City sewer spill reduction page.
        </p>
      ),
    },
    {
      question: 'What happens if a plumber finds a break or collapse beyond the property line?',
      answer: (
        <p>
          The City directs a licensed plumber who finds a break or collapse beyond the property
          line to call the Sewer Emergency Line at 619-515-3525 and file a Plumber&rsquo;s
          Report. The City says it will investigate within 24 hours. We did not find a current
          City statement of who pays for repairs beyond the property line, so confirm that with
          Public Utilities. Source: City Public Utilities sewer plumbing page.
        </p>
      ),
    },
    {
      question: 'Does the City of San Diego offer help with homeowner lateral costs?',
      answer: (
        <p>
          We did not find an active City program that gives homeowners a grant, reimbursement or
          other help with lateral costs on the City pages we reviewed. The City does say its
          program for City crews to install sewer laterals is currently suspended, and it points
          applicants to a public-improvement permit and a Class A licensed contractor. Confirm
          current terms with Public Utilities. Sources: City Public Utilities sewer construction
          page; City sewer plumbing page.
        </p>
      ),
    },
    {
      question: 'Is a permit required for sewer lateral work, and who can do the work?',
      answer: (
        <p>
          A Right-of-Way Permit is required for work in the public right-of-way or a water or
          sewer easement, with an inspection after trenching and before connection and a final
          inspection afterward. The City says sewer lateral connections can be made by a
          licensed contractor. The Municipal Code says a person may not construct or alter a
          public sewer, lateral sewer or house connection that discharges to City public sewers
          without City approval of the plans. We did not find a City page on whether work
          entirely on private property needs a permit, so ask Development Services. Sources:
          City Information Bulletin 166; City sewer construction page; City Municipal Code,
          Chapter 6, Article 4.
        </p>
      ),
    },
    {
      question: 'Should I check the sewer lateral before buying a San Diego home?',
      answer: (
        <p>
          The City says that in addition to a home inspection, it is a good idea for a
          prospective buyer to get a licensed-plumber report on the condition of the
          home&rsquo;s lateral connection. That is City guidance, not a mandatory inspection,
          and we did not find a City point-of-sale sewer-lateral rule in the materials we
          reviewed. A camera inspection records the visible condition of the line before you
          close. Source: City Public Utilities sewer plumbing page.
        </p>
      ),
    },
    {
      question: 'Can the City tell me where my lateral connects to the main?',
      answer: (
        <p>
          The City says Development Services can help identify where a property&rsquo;s sewer
          lateral connects and offers a review of sewer maps and records. Call 619-446-5300 for
          a records appointment, or 619-446-5200 to request copies of as-built plans. The City
          also says it does not have diagrams showing where private sewer lines run on the
          property, so a locating service or inspection fills that gap. Sources: City Public
          Utilities sewer plumbing page; City maps and records page.
        </p>
      ),
    },
    {
      question: 'What is an EMRA for a San Diego sewer lateral?',
      answer: (
        <p>
          An EMRA is an Encroachment Maintenance Removal Agreement. The City requires one for
          certain nonstandard laterals, including laterals that connect in a sewer easement and
          other configurations involving alignment, slope, depth, trees, driveway clearance or
          cleanout placement. It is a City design and permit requirement, not a finding about
          any one property. Source: City Development Services Information Bulletin 166 (March
          2026).
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
    title: 'Schedule a sewer camera inspection in San Diego.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or a San Diego property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'City of San Diego Public Utilities: Sewer plumbing and lateral responsibility (undated)',
        href: CITY_PLUMBING_URL,
      },
      { label: 'City of San Diego Public Utilities: Customer support (undated)', href: CITY_SUPPORT_URL },
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
      { label: 'City of San Diego: Council Policy 400-10 (undated)', href: CITY_POLICY_URL },
      {
        label: 'City of San Diego Municipal Code, Chapter 6, Article 4, Division 4 (undated)',
        href: CITY_CODE_URL,
      },
      {
        label:
          'City of San Diego Independent Budget Analyst: Public Utilities FY2027-2031 five-year financial outlook review (January 2026)',
        href: CITY_IBA_URL,
      },
    ],
    lastReviewed: '2026-10-03',
    closingNote:
      'Official guidance can change, so confirm details with the City for your address.',
  },
  servicePageIds: [id('sl-sd-city-camera')],
}
