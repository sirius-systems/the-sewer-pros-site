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
 * Carlsbad, CA location page (`loc-sd-carlsbad`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `san-diego.tsx`. Same structure as the City of San Diego module
 * (`san-diego-city.tsx`): only copy, data, links and image slots differ. This
 * page has no review band (no San Diego review dataset) and no housing-age
 * section (no primary-source figure), so those sections are absent rather than
 * invented. Local facts were read from City of Carlsbad, Leucadia Wastewater
 * District and Vallecitos Water District sources on 2026-10-04.
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Every fact names its agency. No rule is
 * carried from one agency to another, and no City of San Diego, Chula Vista,
 * Oceanside, Escondido or San Marcos fact is stated here.
 *
 * ⚠ GRANT STATUS IS NEVER STATED. Neither agency publishes a funding balance,
 * so the page says the agency "publishes" the program and tells readers to
 * confirm availability. The $3,000 figures are agency program terms.
 *
 * ⚠ CARLSBAD IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['san-diego-ca']` (DEC-071), never typed. Agency phone
 * numbers are the agencies' own, each labelled as theirs. No licence,
 * certification or insurance claim is made for The Sewer Pros.
 *
 * ⚠ NOT CARRIED OVER FROM THE OLD PAGE: "one of the few places in San Diego
 * County", the county comparison, "the city maintains the mainline only", the
 * coastal-buildout and housing-age statements, and the British spelling.
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
 * photo this registry's `alt` describes. Use the Carlsbad wording for
 * `carlsbad-hero` and `final-bg` only if the photo is from a Carlsbad-area
 * property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'carlsbad-hero',
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
      label: 'Sewer camera inspection in Carlsbad',
      pageId: id('sl-carlsbad-camera'),
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
      label: 'Pre-purchase sewer inspection in Carlsbad',
      pageId: id('sl-carlsbad-prepurchase'),
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
    { value: 'carlsbad', label: 'Carlsbad, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'carlsbad',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_SEWER_URL = 'https://www.carlsbadca.gov/departments/utilities/sewer'
const CITY_OWNER_URL = 'https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners'
const CITY_REPORT_URL = 'https://www.carlsbadca.gov/residents/report-a-problem'
const CITY_CS_URL = 'https://www.carlsbadca.gov/departments/utilities/water/customer-service'
const CITY_PERMIT_URL = 'https://www.carlsbadca.gov/departments/community-development/permit-center'
const LWD_GRANT_URL = 'https://www.lwwd.org/customers/homeowners-lateral-grant-program'
const LWD_FORM_URL =
  'https://www.lwwd.org/sites/default/files/2023-01/Sewer%20Service%20Lateral%20Repair%20Reimbursement%20Request%20-%20FINAL%20%2830DEC22%29_0.pdf'
const LWD_NEWS_URL = 'https://www.lwwd.org/news/september-25-2026'
const LWD_NEWSLETTER_URL =
  'https://www.lwwd.org/sites/default/files/2025-11/2025%20Fall%20Newsletter%20(FINAL).pdf'
const VWD_COLLECTION_URL =
  'https://vwd.org/departments/operations-and-maintenance/systems-collection-wastewater-'
const VWD_SERVICES_URL = 'https://vwd.org/departments/engineering/water-and-sewer-services'
const VWD_CS_URL = 'https://www.vwd.org/departments/customer-service'

export const carlsbadContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Carlsbad, CA',
  metaDescription:
    'Sewer camera inspection, hydro jetting and cleaning in Carlsbad, CA. See which agency serves your address and how the lateral grants work.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Carlsbad, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for Carlsbad properties. Carlsbad is served by three sewer agencies, and
        two of them publish lateral grant programs, so find out who serves your address and get
        clear evidence of what is inside your line before you clean, buy a home, or approve
        major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      `Serving the San Diego area since ${sd.foundingYear}`,
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${sd.phone}`,
    // Existing shared hero art. Its approved alt describes the file, not a
    // Carlsbad job, and its recorded source says it is a rendered scene. A
    // Carlsbad photo in the `carlsbad-hero` slot replaces it.
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
          To report a sewer spill, call the agency that serves your address. The numbers are
          under &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Carlsbad sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'Carlsbad is not served by one sewer agency. The City of Carlsbad serves most of the city, and Leucadia Wastewater District or Vallecitos Water District serves part of the south. Confirm yours with the City’s sewer district map before relying on any rule on this page.',
      'In every service area we reviewed, the published rules put the private lateral on the property owner. The City, Vallecitos and Leucadia each describe the line differently, and each runs to its main.',
      'The City and Leucadia each publish a separate lateral grant of up to $3,000, with different rules. We found no lateral grant from Vallecitos. Neither grant page we reviewed publishes how much money remains, so confirm availability before you plan around either.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Carlsbad', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'Lateral grants', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Carlsbad',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Carlsbad',
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
    title: 'Who is responsible for the sewer line at a Carlsbad property?',
    answer: (
      <p>
        It depends on which agency serves the address, and in all three service areas we
        reviewed, the published rules put the private lateral on the property owner. In the City
        of Carlsbad wastewater area, the City says (
        <a href={CITY_OWNER_URL} rel="noopener">
          City of Carlsbad property-owner page
        </a>
        ) the owner is responsible for the lateral from the home or building to the sewer main,
        which is typically in the street, and that the City’s responsibility begins once sewage
        enters the main. Vallecitos Water District (VWD) says the owner is responsible from the
        home or building and including the point of connection to its main. Leucadia Wastewater
        District (LWD) describes the lateral in its reimbursement form as running from the
        building to the District’s public sewer system, including the physical connection, and
        makes the applicant responsible for building and maintaining it.
      </p>
    ),
    cards: [
      {
        tag: 'Public - Agency',
        title: 'The public sewer',
        body: 'Which agency runs the main depends on the address. The City of Carlsbad serves most of the city. LWD or VWD serves part of the south. The City points to its sewer district map to find out which area a property is in, so the city limits alone do not tell you.',
      },
      {
        tag: 'Property - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the public main is the lateral. The City describes it as running from the building to the main. VWD includes the point of connection. LWD includes the physical connection to its system.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the lateral line',
      columns: ['Question', 'Public sewer', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain:
            'The City of Carlsbad for most of the city. Leucadia Wastewater District or Vallecitos Water District for part of the south.',
          privateLateral:
            'The property owner, in the City, LWD and VWD areas as each agency describes it.',
        },
        {
          label: 'Where it ends',
          publicMain:
            'The City says its responsibility begins when sewage enters the main. VWD maintains its mains.',
          privateLateral:
            'The City: at the main, typically in the street. VWD: through the point of connection to its main. LWD: through the physical connection to its system.',
        },
        {
          label: 'Who to contact first',
          publicMain: 'The agency that serves your address. See “Who to call”.',
          privateLateral:
            'A plumber for the lateral. The City says the owner may be billed if the City must act on a lateral overflow.',
        },
        {
          label: 'What help exists',
          publicMain: 'We did not find a published rule on who pays for damage an agency causes.',
          privateLateral:
            'The City and LWD each publish a lateral grant. We did not find one from VWD. See the grant section below.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and the distance along the line where a problem sits.',
        },
      ],
    },
    note: 'This is general information from City of Carlsbad, Leucadia Wastewater District and Vallecitos Water District sources, not legal advice. Contact your serving agency to confirm how its rules apply to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Carlsbad',
    title: 'How sewers work in Carlsbad',
    paragraphs: [
      'Carlsbad is served by three separate agencies, and each has its own rules, forms and phone numbers. The City of Carlsbad Utilities says it provides sewer collection through 288 miles of sewer pipe and sends the wastewater to the Encina Wastewater Authority for treatment. Leucadia Wastewater District is an independent special district, and its newsletter names Encinitas, Leucadia and South Carlsbad as its area. Vallecitos Water District provides water and sewer service to San Marcos and parts of Carlsbad, Escondido and Vista, and says it maintains the mains.',
      'The pages we reviewed do not say whether any of the three systems is combined or separate, or how old it is.',
      'The City gives owners its own maintenance guidance. It says a lateral should ideally be professionally cleaned once a year, that a professional should inspect it with a small camera every three to five years, and that owners should check sooner with a sewage-like odor or frequent clogged drains. It says a cleanout, the access point used to inspect the line and clear an obstruction, is usually within three to five feet of the building, and that the cap must stay on tight. The City warns that removing the cap to relieve a backup causes a sewer spill and is a health violation. That is the City’s guidance for its service area, not a statement about any one property.',
      'LWD says tree roots or other obstructions can block a lateral and cause a backup into a home, and that a damaged lateral can lead to backups, especially during storms.',
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
      closing:
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line or an agency’s responsibility begins.',
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    // `paragraphs` are plain strings, so the Vallecitos number is labelled text
    // here and the Vallecitos customer service page is listed under Sources
    // rather than linked in this lede.
    paragraphs: [
      'Call the agency that serves your address. The City of Carlsbad, Leucadia Wastewater District and Vallecitos Water District each publish their own numbers. If an agency or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
      'Vallecitos Water District lists (760) 744-0460 for water and sewer questions. We did not find a separate Vallecitos sewer emergency number. That is Vallecitos’s number, not ours.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'City of Carlsbad Sewer Division',
      phone: { label: '442-339-2722', href: 'tel:+14423392722' },
      text: 'The City lists this number to report sewer spills or issues, and for water and sewer emergencies Monday to Friday. For nights and weekends the City lists 760-931-2197. Both are the City’s numbers, not ours. The City says not to remove a cleanout cap to relieve a backup, because that causes a sewer spill and is a health violation.',
      links: [],
    },
    secondaryAgency: {
      label: 'Leucadia Wastewater District',
      phone: { label: '760-753-0155', href: 'tel:+17607530155' },
      text: 'LWD lists this number to report a sewage spill and calls it its 24-7 emergency response line. It is the District’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  municipalProgram: {
    eyebrow: 'Lateral grants',
    title: 'Lateral grants in Carlsbad: two agencies publish one, and neither posts a balance',
    lede: 'Two of Carlsbad’s three sewer agencies publish a program that reimburses part of a private lateral repair. The City of Carlsbad publishes a Sewer Lateral Grant Program of up to $3,000. Leucadia Wastewater District publishes a Homeowner’s Lateral Grant Program that reimburses 50% of repair cost, up to $3,000. We did not find a lateral grant from Vallecitos Water District. The terms differ, and which one could apply depends on your agency. Neither page we reviewed publishes how much grant money remains, so this page does not say either program is open.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What each program says it covers',
      items: [
        'City: replacement or rehabilitation of the private lateral from the building to the sewer main, reimbursed up to $3,000.',
        'LWD: repair of a private lateral, reimbursed at 50% of cost up to $3,000. LWD says lining a lateral and replacing existing sewer pipe qualify.',
      ],
    },
    doesNotCover: {
      title: 'What the pages say it does not cover, or do not say',
      items: [
        'LWD says inspection and cleaning of a private lateral do not qualify.',
        'The City page does not say whether cleaning, root cutting or inspection costs qualify, or what documents it requires beyond its forms. Ask the City.',
        'Neither page we reviewed lists a camera inspection as a requirement. Check each agency’s current forms.',
      ],
    },
    whoCanApply: {
      title: 'Who the programs are for',
      paragraphs: [
        'City of Carlsbad: sewer customers within the Carlsbad Wastewater service area, which the City says includes a majority of the city. The City does not say its grant reaches Leucadia or Vallecitos customers.',
        'Leucadia Wastewater District: homeowners served by the District.',
        'Vallecitos Water District: we did not find a lateral grant, reimbursement or assistance program on the pages we reviewed. That is “none found”, not a statement that none exists.',
      ],
    },
    steps: {
      title: 'How the process runs, as each agency describes it',
      steps: [
        { title: 'Confirm your agency', body: 'Confirm which agency serves the address.' },
        {
          title: 'Read the current terms',
          body: 'Read that agency’s current program page and forms.',
        },
        {
          title: 'Ask about funding',
          body: 'Ask the agency before you hire anyone. The City’s contact is wastewater@carlsbadca.gov or 442-339-2722. LWD’s is 760-753-0155. These are the agencies’ contacts, not ours.',
        },
        {
          title: 'City process',
          body: 'The City says applications are first come, first served, and that if several arrive together it gives highest priority to locations that have had overflows or spills. The owner completes the City’s program forms.',
        },
        {
          title: 'Leucadia process',
          body: 'LWD’s form says the work must be done by a licensed plumber or contractor and that the applicant schedules District staff to see it while it is in progress. LWD says the District does not inspect the design or quality of the work. Payment depends on available funds, first come, first served, and the form lists a paid final invoice among the approval items.',
        },
      ],
    },
    afterSteps: [
      'Vallecitos says it does not install private water and sewer connections and that it maintains the mains.',
    ],
    callout: {
      title: 'Before you plan around either grant',
      paragraphs: [
        'The City page does not publish a funding balance, closing date or waitlist. On September 25, 2026, LWD was inviting homeowners to apply for up to $3,000, and its form says it pays only if funds are available.',
      ],
    },
    closing: (
      <>
        Neither program pays for our services, and LWD says inspection and cleaning do not
        qualify. The contractors you hire perform repairs. The Sewer Pros does not perform
        repairs or replacements. See our{' '}
        <Link href="/san-diego-ca/carlsbad/sewer-camera-inspection/">
          sewer camera inspection in Carlsbad
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
    eyebrow: 'Buying in Carlsbad',
    title: 'Sewer inspection before buying a Carlsbad home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. In Carlsbad the first question is which agency serves the property, because the City, Leucadia Wastewater District and Vallecitos Water District each publish different rules and different programs. The City’s sewer district map is where it points buyers to find out.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'We did not find a rule in the City of Carlsbad, Leucadia or Vallecitos materials we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not as a confirmed absence, so a buyer who wants evidence of the lateral has to ask for it. This does not address state-level disclosure rules, which are outside this page. Two practical points. The owner carries the lateral in each service area, so a defect found after closing is a cost you carry. And both lateral grants are first come, first served, and the LWD form says it pays only if funds are available, so do not price a purchase around a grant you have not confirmed. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer camera inspection in Carlsbad', pageId: id('sl-carlsbad-camera') },
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
    body: 'This page covers the City of Carlsbad only. Sewer agencies and lateral rules differ across San Diego County, so terms and costs change from place to place.',
    items: [
      {
        title: 'San Marcos',
        description: 'Local sewer details (Vallecitos Water District also serves San Marcos)',
        pageId: id('loc-sd-san-marcos'),
      },
      { title: 'Oceanside', description: 'Local sewer details', pageId: id('loc-sd-oceanside') },
      { title: 'Escondido', description: 'Local sewer details', pageId: id('loc-sd-escondido') },
      { title: 'San Diego', description: 'Local sewer details', pageId: id('loc-sd-san-diego') },
      {
        title: 'Chula Vista',
        description: 'Local sewer details',
        pageId: id('loc-sd-chula-vista'),
      },
      {
        title: 'Mission Valley',
        description: 'Commercial-leaning property sewer services',
        pageId: id('loc-sd-mission-valley'),
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
      question: 'Who is responsible for the sewer lateral in Carlsbad?',
      answer: (
        <p>
          In all three service areas we reviewed, the published rules put the private lateral on
          the property owner. In the City of Carlsbad wastewater area, the City says the owner is
          responsible for the lateral from the home or building to the sewer main, which is
          typically in the street, and that the City’s responsibility begins once sewage enters
          the main. Vallecitos Water District says the owner is responsible from the home or
          building and including the point of connection to its main. Leucadia Wastewater
          District’s reimbursement form defines the lateral as running from the building to the
          District’s public sewer system, including the physical connection, and makes the
          applicant responsible for building and maintaining it. We did not find a published rule
          on who pays for damage an agency causes. Sources: City of Carlsbad property-owner page;
          Vallecitos Water District collection page; Leucadia Wastewater District reimbursement
          request form.
        </p>
      ),
    },
    {
      question: 'Which agency serves my Carlsbad address?',
      answer: (
        <p>
          The City of Carlsbad provides sewer collection through 288 miles of sewer pipe, and says
          the southern part of the city is served by either Leucadia Wastewater District or
          Vallecitos Water District. The City points to its sewer district map to find out which
          area a property is in, so the city limits alone do not tell you. Leucadia offers a
          service-area lookup on its website, and Vallecitos publishes a sewer boundary map.
          Sources: City of Carlsbad sewer page; Leucadia Wastewater District customer pages;
          Vallecitos Water District water and sewer services page.
        </p>
      ),
    },
    {
      question: 'How much is the City of Carlsbad sewer lateral grant?',
      answer: (
        <p>
          The City publishes a Sewer Lateral Grant Program that reimburses a property owner for up
          to $3,000 of the cost to replace or rehabilitate a private sewer lateral from the
          building to the sewer main. It is offered to customers in the Carlsbad Wastewater
          service area, which the City says includes a majority of the city. Applications are
          first come, first served. If several arrive at once, the City gives highest priority to
          locations that have had overflows or spills. The owner completes the program forms. The
          page we reviewed does not publish a funding balance, closing date or waitlist, so
          confirm current availability with the City at wastewater@carlsbadca.gov or 442-339-2722
          before you plan around it. Source: City of Carlsbad property-owner page.
        </p>
      ),
    },
    {
      question: 'Does the City of Carlsbad grant cover the southern part of the city?',
      answer: (
        <p>
          The City says its grant is offered to sewer customers within the Carlsbad Wastewater
          service area, which it says includes a majority of the city. It also says sewer service
          in the southern part of the city comes from Leucadia Wastewater District or Vallecitos
          Water District. We did not find any statement that the City grant extends to those
          districts’ customers. Leucadia publishes a lateral grant of its own, and we did not find
          a lateral grant from Vallecitos. Sources: City of Carlsbad property-owner page; City of
          Carlsbad sewer page; Leucadia Wastewater District grant page; Vallecitos Water District
          collection page.
        </p>
      ),
    },
    {
      question: 'What does the Leucadia Wastewater District lateral grant cover?',
      answer: (
        <p>
          Leucadia Wastewater District says it can reimburse 50% of the cost of repairing a
          private sewer lateral, up to $3,000. The District says lining a lateral or replacing
          existing sewer pipe qualifies as repair, and that inspection and cleaning of a private
          lateral do not qualify. Its reimbursement form says the work must be done by a licensed
          plumber or contractor and seen by District staff while it is in progress, and that
          payment depends on available funds on a first come, first served basis. On September 25,
          2026, the District was encouraging homeowners to apply. It does not publish a funding
          balance on the pages we reviewed, so confirm availability with the District. Sources:
          Leucadia Wastewater District grant page; Leucadia Wastewater District reimbursement
          request form; Leucadia Wastewater District 2025 fall newsletter; Leucadia Wastewater
          District September 25, 2026 notice.
        </p>
      ),
    },
    {
      question: 'What number do I call for a sewer spill in Carlsbad?',
      answer: (
        <p>
          Call the agency that serves the address. The City of Carlsbad lists its Sewer Division
          at 442-339-2722 to report sewer spills or issues, lists the same number for water and
          sewer emergencies Monday to Friday, and lists 760-931-2197 for nights and weekends.
          Leucadia Wastewater District lists 760-753-0155 to report a sewage spill and calls it
          its 24-7 emergency response line. Vallecitos Water District lists (760) 744-0460 for
          water and sewer questions, and we did not find a separate Vallecitos sewer emergency
          number. These are the agencies’ numbers, not ours. The City also says not to remove a
          cleanout cap to relieve a backup, because that causes a sewer spill and is a health
          violation. Sources: City of Carlsbad report-a-problem page; City of Carlsbad customer
          service page; City of Carlsbad property-owner page; Leucadia Wastewater District grant
          page; Vallecitos Water District customer service page.
        </p>
      ),
    },
    {
      question: 'Is a permit required for sewer lateral work in Carlsbad?',
      answer: (
        <p>
          The City of Carlsbad says most construction work requires a permit, with certain
          building, electrical, mechanical and plumbing work exempt under its municipal code. We
          did not find a City, Leucadia or Vallecitos page that says whether a given lateral
          repair needs a permit. Leucadia’s reimbursement form says the applicant must obtain any
          necessary federal, state or local permits, including building or right-of-way permits.
          Vallecitos says it does not install private water and sewer connections. Ask the City’s
          permit center and your serving agency before work starts. Sources: City of Carlsbad
          permit center page; Leucadia Wastewater District reimbursement request form; Vallecitos
          Water District water and sewer services page.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required when buying a Carlsbad home?',
      answer: (
        <p>
          We did not find a rule in the City of Carlsbad, Leucadia Wastewater District or
          Vallecitos Water District materials we reviewed that requires a sewer lateral
          inspection, certification or disclosure when a home is sold. That reads as none found,
          not a confirmed absence, and it does not address state disclosure law. Because the
          lateral is the owner’s and the agencies’ grants and rules differ by service area, a
          buyer who wants evidence of the line’s condition has to ask for it. A camera inspection
          records the visible condition of the line before you close. Sources: City of Carlsbad
          sewer pages; Leucadia Wastewater District grant page; Vallecitos Water District
          collection page.
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
    title: 'Schedule a sewer camera inspection in Carlsbad.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or a Carlsbad property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'City of Carlsbad: Sewer (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_SEWER_URL,
      },
      {
        label:
          'City of Carlsbad: Sewer for property owners, including the Sewer Lateral Grant Program (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_OWNER_URL,
      },
      { label: 'City of Carlsbad: Report a problem (reviewed Oct 4, 2026)', href: CITY_REPORT_URL },
      {
        label: 'City of Carlsbad: Utilities customer service (reviewed Oct 4, 2026)',
        href: CITY_CS_URL,
      },
      { label: 'City of Carlsbad: Permit center (reviewed Oct 2, 2026)', href: CITY_PERMIT_URL },
      {
        label:
          'Leucadia Wastewater District: Homeowner’s Lateral Grant Program (posted Nov 22, 2020; reviewed Oct 4, 2026)',
        href: LWD_GRANT_URL,
      },
      {
        label:
          'Leucadia Wastewater District: Sewer Service Lateral Repair Reimbursement Request form (Dec 30, 2022 version)',
        href: LWD_FORM_URL,
      },
      {
        label: 'Leucadia Wastewater District: September 25, 2026 notice (Sept 25, 2026)',
        href: LWD_NEWS_URL,
      },
      {
        label: 'Leucadia Wastewater District: 2025 fall newsletter (Nov 2025)',
        href: LWD_NEWSLETTER_URL,
      },
      {
        label: 'Vallecitos Water District: Systems Collection (wastewater) (undated)',
        href: VWD_COLLECTION_URL,
      },
      {
        label: 'Vallecitos Water District: Water and sewer services (undated)',
        href: VWD_SERVICES_URL,
      },
      { label: 'Vallecitos Water District: Customer service (undated)', href: VWD_CS_URL },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance and grant funding can change, so confirm details with your serving agency for your address.',
  },
  servicePageIds: [id('sl-carlsbad-camera'), id('sl-carlsbad-prepurchase')],
}
