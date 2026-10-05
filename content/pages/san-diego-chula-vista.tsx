import Link from 'next/link'
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
 * Chula Vista, CA location page (`loc-sd-chula-vista`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `san-diego.tsx`. Same structure as the City of San Diego and Carlsbad modules:
 * only copy, data, links and image slots differ. No review band (no San Diego
 * review dataset) and no housing-age section (no primary-source figure), so
 * those sections are absent rather than invented. Local facts were read from
 * City of Chula Vista sources and the municipal code on 2026-10-04.
 *
 * ⚠ THIS PAGE CORRECTS A FACTUAL ERROR. The old page said Chula Vista is served
 * by "CVSan, the Chula Vista Sanitation District", which runs a lateral grant.
 * cvsan.org is the Castro Valley Sanitary District in Alameda County. Chula
 * Vista's sewer is run by the City of Chula Vista. "CVSan" and "Castro Valley"
 * appear only in FAQ 2 and the Sources entry that explain the correction.
 *
 * ⚠ POLICY, NOT A GRANT. Council Policy 570-01 is a cost rule for some
 * stoppages. The page never says a grant exists, never says the City will pay
 * for a given stoppage and never promises reimbursement. "Licensed plumber",
 * "contractor's license" and "certified arborist" appear only as the City's own
 * conditions. Nothing says our inspection satisfies them.
 *
 * ⚠ CHULA VISTA IS A SERVICE MARKET, NOT A LOCATION. No office, address, map
 * pin or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['san-diego-ca']` (DEC-071), never typed. The City's
 * (619) numbers are the City's, each labelled as such.
 *
 * ⚠ NOT CARRIED OVER FROM THE OLD PAGE: the CVSan authority claim, the grant
 * section and its cvsan.org link, the Carlsbad cap comparison, the median-year
 * and pre-1970 housing figures, the east/west narrative, and "programme".
 *
 * ⚠ IMAGES: no existing or rendered art is reused on this page. Every slot is
 * defined in `IMAGE_SLOTS`. While `SHOW_IMAGE_SLOTS` is on, every slot shows a
 * labelled placeholder (the hero, cards and final CTA through `placeholderSlot`).
 * Setting `src` and `source` on a slot replaces its placeholder automatically.
 * Nothing on this page renders an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from the other location modules; extract a shared module in a
 * separate refactor.
 */

const id = (value: string): PageId => value as PageId

/** San Diego's own phone, hours and founding year (DEC-071). */
const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

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
 * No slot has a `src` yet and none reuses existing art. Use Chula Vista
 * wording in the alt text for `chula-vista-hero` and `final-bg` (for example
 * "Technician with a sewer camera at a Chula Vista, CA home") only if the photo
 * is from a Chula Vista-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'chula-vista-hero',
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
    secondaryLink: {
      label: 'Sewer camera inspection in Chula Vista',
      pageId: id('sl-chula-vista-camera'),
    },
  }),
  card('svc-sewer-cleaning', 'svc-cleaning', {
    title: 'Sewer Cleaning',
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    bestWhen: 'Best when a line is slow or partly blocked.',
    bookingLabel: 'Request Sewer Cleaning',
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
    { value: 'chula-vista', label: 'Chula Vista, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'chula-vista',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_POLICY_URL =
  'https://www.chulavistaca.gov/departments/public-works/services/sewer/sewer-lateral-policy'
const CITY_COUNCIL_POLICY_URL =
  'https://chulavistaca.gov/home/showpublisheddocument/5353/635435207152000000'
const CITY_BROCHURE_URL =
  'https://chulavistaca.gov/home/showpublisheddocument/22004/637489860738470000'
const CITY_SSO_URL =
  'https://www.chulavistaca.gov/departments/public-works/services/sewer/sanitary-sewer-overflows-sso-s'
const CITY_RATE_URL =
  'https://www.chulavistaca.gov/departments/public-works/services/sewer/sewer-rate'
const CITY_WASTEWATER_URL =
  'https://www.chulavistaca.gov/departments/public-works/operations/wastewater'
const CITY_PERMITS_URL =
  'https://www.chulavistaca.gov/departments/development-services/apply-for-a-permit/utility-permits'
const CVMC_100_URL = 'https://chulavista.municipal.codes/CVMC/13.08.100'
const CVMC_110_URL = 'https://chulavista.municipal.codes/CVMC/13.08.110'
const CASTRO_VALLEY_URL = 'https://www.cvsan.org/'

export const chulaVistaContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Chula Vista, CA',
  metaDescription:
    'Sewer camera inspection, hydro jetting and cleaning in Chula Vista, CA. See who maintains your lateral and what the City’s sewer policy says.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Chula Vista, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for Chula Vista properties. The City of Chula Vista runs the public sewer,
        and its written sewer policy says who pays when a stoppage is in the public sewer, so get
        clear evidence of where your problem sits before you clean, buy a home, or approve major
        work.
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
    // A photo in the `chula-vista-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('chula-vista-hero'),
    slotPlaceholder: placeholderSlot('chula-vista-hero'),
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
          To report a sewage discharge to a street or storm drain, call the City. The numbers are
          under &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Chula Vista sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'Chula Vista’s public sewer is run by the City of Chula Vista, not by a separate sanitation district. The City serves about 50,000 residential and commercial customers.',
      'The City’s written policy puts the lateral on the property owner from the first foot off the public sewer to the building. It makes one exception: a stoppage found in the public sewer, in that first foot, or caused by a City street tree must be reported to the City within 48 hours, and the City reimburses reasonable costs if staff agree.',
      'We found no City lateral repair grant or assistance program. The reimbursement in the policy covers locating and clearing qualifying stoppages only, and it depends on City staff agreeing where the stoppage is.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Chula Vista', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'City sewer policy', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Chula Vista',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Chula Vista',
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
    title: 'Who is responsible for the sewer line at a Chula Vista property?',
    answer: (
      <p>
        The property owner is responsible for the lateral, and the City of Chula Vista is
        responsible for the public sewer. The City’s{' '}
        <a href={CITY_POLICY_URL} rel="noopener">
          written sewer policy
        </a>{' '}
        says the owner maintains the lateral from its connection with the public sewer to the building, and
        beyond, at the owner’s sole expense. The City maintains the public sewer mains and
        manholes. The policy makes one exception that matters: when a stoppage is found in the
        public sewer, in the first foot of the lateral at the connection, or is caused by a City
        street tree, the owner reports it to the City and the City reimburses reasonable costs if
        City staff agree.
      </p>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer',
        body: 'The City of Chula Vista runs the public sewer through its Public Works department. It is not a separate sanitation district. Some customers see their City sewer charges on a water district bill or a property tax bill, but the sewer service is the City’s.',
      },
      {
        tag: 'Property - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the public sewer is the lateral. The City’s policy starts the owner’s duty at the “Connection Point”, which it defines as the first foot of the lateral off the outside of the public sewer, and runs it to the building. For permits, the City splits the same line into a “sewer lateral” from the main to the property line and a “building sewer” from the property line to the house.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the lateral line',
      columns: ['Question', 'Public sewer', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: 'The City of Chula Vista, through Public Works.',
          privateLateral:
            'The property owner, at the owner’s sole expense under the City’s policy.',
        },
        {
          label: 'Where it ends',
          publicMain:
            'The public sewer mains and manholes are the City’s. The policy treats the first foot of the lateral at the connection as the Connection Point.',
          privateLateral:
            'The owner’s duty runs from the connection with the public sewer to where the lateral enters the building, and beyond.',
        },
        {
          label: 'Who to contact first',
          publicMain: 'City Public Works Operations if sewage reaches the street. See “Who to call”.',
          privateLateral:
            'A plumber or sewer cleaning contractor for the lateral. The City says to stop all water use first.',
        },
        {
          label: 'What help exists',
          publicMain:
            'The policy has the City reimburse reasonable costs for qualifying stoppages. We found no repair grant. See the policy section below.',
          privateLateral:
            'The owner pays for locating and clearing a stoppage first, then submits invoices if City staff agree it was a qualifying stoppage.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and the distance along the line where a problem sits. The City’s policy asks a licensed plumber to locate a stoppage with a camera.',
        },
      ],
    },
    note: 'This is general information from City of Chula Vista sources, not legal advice. Contact Public Works to confirm how the policy applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Chula Vista',
    title: 'How sewers work in Chula Vista',
    paragraphs: [
      'The City of Chula Vista runs the public sewer, and the policy that governs your lateral is the City’s.',
      'The City says it provides sewer service to about 50,000 residential and commercial customers. Its wastewater division describes about 511 miles of sewer pipe ranging from 6 to 42 inches, and it maintains 12 sewer lift stations. The City says it does not operate its own wastewater treatment facilities and pays the City of San Diego’s Metropolitan Wastewater system to treat Chula Vista’s wastewater. The City lists goals of cleaning its sewer lines once a year and inspecting an average of 47 miles of sewer line per year with cameras. The City’s sewer rate page says sewer charges reach customers on a City bill, an Otay Water District bill, or the property tax bill, depending on the area.',
      'The pages we reviewed do not say whether the system is combined or separate, or how old it is.',
      'The City gives owners its own maintenance guidance. It says grease is the most common cause of pipe blockages, that roots enter a lateral through cracked or broken pipe, and that a rule of thumb is to have a lateral maintained annually. It also warns that cleaning a private lateral can push debris such as cut root balls and grease into the public sewer, where it can cause a blockage. It advises against planting deep-rooted vegetation near a lateral. That is the City’s guidance for its system, not a statement about any one property.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line or the City’s responsibility begins.',
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'Call the City of Chula Vista. Public Works Operations takes reports when sewage reaches a street, gutter or storm drain, and the City directs after-hours calls to Chula Vista Police. If a plumber or the City points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'City of Chula Vista Public Works Operations',
      phone: { label: '(619) 397-6000', href: 'tel:+16193976000' },
      text: 'The City says to call this number immediately if sewage from your property reaches a public right-of-way, street or storm drain. It lists regular hours of Monday to Thursday 6:30am to 4:00pm and Friday 6:30am to 3:00pm, closed every other Friday. For a backup, the City says to stop all water use first, including sinks, toilets, showers and laundry. This is the City’s number, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'Chula Vista Police, after hours',
      phone: { label: '(619) 691-5151', href: 'tel:+16196915151' },
      text: 'After normal working hours, on holidays and on weekends, the City says to call Chula Vista Police and report a sewer emergency. This is the City’s direction and number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders the
  // City's sewer policy, with a lede that says no grant was found. Fields map:
  // lede = opening, whoCanApply = who the policy applies to, covers = what the
  // policy says the City pays or reimburses, doesNotCover = what it does not
  // cover or does not say, steps = the process as the policy describes it,
  // afterSteps = the property line cleanout, callout = before you rely on it.
  municipalProgram: {
    eyebrow: 'City sewer policy',
    title:
      'Chula Vista has no lateral grant, but its sewer policy decides who pays for some stoppages',
    lede: 'We did not find a City of Chula Vista lateral repair, replacement, grant or reimbursement program for failing laterals on the City’s sewer, lateral policy, wastewater, rate or permit pages. That is “none found”, not a statement that none exists. What the City does publish is a written Council policy, number 570-01, “Sewer - Maintenance”. It sets who pays when a stoppage is traced to the public sewer, to the first foot of the lateral at the connection, or to a City street tree. Everything else along the lateral is the owner’s cost.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the policy says the City pays or reimburses',
      items: [
        'Reasonable invoiced costs of locating and clearing a qualifying stoppage, if City staff agree with a licensed plumber’s camera finding.',
        'For a stoppage caused by a street tree in the lateral across public property, the policy says the City causes the work to be done and pays valid locating expenses. In the connection to the building, the owner does the work and submits expenses for review. Where both are affected, City crews repair or replace the pipe in the public right-of-way or City easement and the owner repairs the private portion and submits for reimbursement.',
        'The cost of relocating a lateral when a City-sponsored project requires it.',
      ],
    },
    doesNotCover: {
      title: 'What the policy does not cover, or does not say',
      items: [
        'Stoppages and damage elsewhere in the lateral. The policy puts that maintenance on the owner at the owner’s sole expense.',
        'A lateral that is inadequate because of its size, depth, location or any other factor. The policy puts the entire corrective cost on the owner.',
        'An unlawful discharge in the connection or the public sewer. The policy says the City clears it and charges the owner.',
        'How long staff review takes, what documentation staff accept beyond a licensed plumber’s camera finding, or any cap. We did not find these.',
        'The copy of the policy the City posts shows a 2014 revision with its resolution number left blank, so confirm the current text with Public Works.',
      ],
    },
    whoCanApply: {
      title: 'Who the policy applies to',
      paragraphs: [
        'Owners of a lateral that connects to the City’s public sewer. The policy defines a sewer lateral as a four-, six- or eight-inch privately maintained sewer.',
        'The reimbursement terms apply only to stoppages that City staff agree are in the public sewer, in the Connection Point, or caused by a City street tree. A City street tree is a tree, bush or plant in the public right-of-way that belongs to and is maintained by the City.',
      ],
    },
    steps: {
      title: 'How the process runs, as the policy describes it',
      steps: [
        {
          title: 'Find the stoppage',
          body: 'If a stoppage occurs, the owner finds its location and cause at the owner’s cost, subject to the reimbursement terms.',
        },
        {
          title: 'Camera finding',
          body: 'The policy says a licensed plumber determines the location with a closed-circuit camera (CCTV).',
        },
        {
          title: 'Notify the City',
          body: 'If the stoppage is in the public sewer, in the Connection Point, or caused by a City street tree, the owner notifies the City within 48 hours of identifying the location.',
        },
        {
          title: 'Street-tree proof',
          body: 'For a street-tree cause, the owner has the burden of proof: excavate the root from its origin to the point where it entered the lateral, or get written confirmation from a certified arborist based on a root sample.',
        },
        {
          title: 'Submit invoices',
          body: 'If City staff agree with the camera finding, the owner submits invoices for the cost of locating and clearing the stoppage, and the City reimburses reasonable costs.',
        },
        {
          title: 'Permit for lateral work',
          body: 'Repair or replacement of the lateral needs a City permit before work begins.',
        },
      ],
    },
    afterSteps: [
      'The policy also says the owner exposes the property line cleanout, normally within two to three feet of the property line, and that City crews may not reach the lateral from any point further into private property than that cleanout.',
    ],
    callout: {
      title: 'Before you rely on this policy',
      paragraphs: [
        'Reimbursement depends on City staff agreeing where the stoppage is, and the policy does not say how long that takes. Ask Public Works at (619) 397-6000 what documentation it will accept before you pay for work you plan to submit. That is the City’s number, not ours.',
      ],
    },
    closing: (
      <>
        Neither the City’s policy nor its pages say they pay for our services. The Sewer Pros does
        not perform repairs or replacements and does not arrange reimbursement. See our{' '}
        <Link href="/san-diego-ca/chula-vista/sewer-camera-inspection/">
          sewer camera inspection in Chula Vista
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
    eyebrow: 'Buying in Chula Vista',
    title: 'Sewer inspection before buying a Chula Vista home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. In Chula Vista the City’s policy puts the lateral on the owner from the first foot off the public sewer to the building, so a defect found after closing is a cost you carry, apart from the narrow stoppage cases the policy routes to the City.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City’s pages or in the municipal code sections we reviewed that requires a sewer lateral inspection, certification or seller disclosure when an existing home is sold. Two code sections address laterals in new construction. CVMC 13.08.100 says a new building cannot be served by a previously used lateral in the public right-of-way unless the Director has inspected and approved it in writing. CVMC 13.08.110 makes it unlawful to occupy a building until its lateral and building sewer are inspected and approved and a certificate of occupancy or final inspection approval is issued. Neither mentions a sale. That reads as none found, not as a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. If a purchase involves a rebuild, an addition or reuse of an old lateral, ask the City’s Development Services department before you rely on any assumption. Two practical points. A permit is required before the lateral is repaired or replaced, and the City’s reimbursement policy covers only stoppages that City staff agree are in the public sewer, the first foot of the lateral, or caused by a City street tree. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer camera inspection in Chula Vista', pageId: id('sl-chula-vista-camera') },
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
    body: 'This page covers the City of Chula Vista only. Sewer agencies and lateral rules differ across San Diego County, so terms and costs change from place to place.',
    items: [
      { title: 'San Diego', description: 'Local sewer details', pageId: id('loc-sd-san-diego') },
      { title: 'Carlsbad', description: 'Local sewer details', pageId: id('loc-sd-carlsbad') },
      { title: 'Oceanside', description: 'Local sewer details', pageId: id('loc-sd-oceanside') },
      { title: 'Escondido', description: 'Local sewer details', pageId: id('loc-sd-escondido') },
      { title: 'San Marcos', description: 'Local sewer details', pageId: id('loc-sd-san-marcos') },
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
      question: 'Who is responsible for the sewer lateral in Chula Vista?',
      answer: (
        <p>
          The property owner. The City of Chula Vista’s sewer maintenance policy (Council Policy
          570-01) says the owner is responsible for the sewer lateral from its connection with the
          public sewer to the point where it enters the building, and beyond, at the owner’s sole
          expense. The policy defines the connection point as the first foot of the lateral off the
          outside of the public sewer. The City maintains the public sewer mains and appurtenances
          such as manholes. The City’s sewer lateral policy page says the same in one sentence: the
          owner maintains the lateral from the connection with the public sewer to the connection
          with the building. Sources: City of Chula Vista Council Policy 570-01; City of Chula
          Vista sewer lateral policy page.
        </p>
      ),
    },
    {
      question: 'Is Chula Vista served by CVSan or a separate sanitation district?',
      answer: (
        <p>
          No. The City of Chula Vista provides sewer service to about 50,000 residential and
          commercial customers, and it does not operate its own treatment facilities; it pays the
          City of San Diego’s Metropolitan Wastewater system for treatment. The City’s sewer rate
          page lists three ways its sewer charges reach customers: a City bill, an Otay Water
          District bill, or the property tax bill. CVSan is the Castro Valley Sanitary District in
          Alameda County. The lateral grant materials that appear under the name CVSan belong to
          that district, not to Chula Vista. Sources: City of Chula Vista sewer rate page; Castro
          Valley Sanitary District website.
        </p>
      ),
    },
    {
      question: 'Does the City reimburse owners for sewer lateral problems?',
      answer: (
        <p>
          Not through a repair grant. We did not find a City lateral repair, replacement, grant or
          reimbursement program for failing laterals on the City’s sewer, lateral policy,
          wastewater, rate or permit pages. The Council policy does say the City will reimburse
          reasonable costs of locating and clearing a stoppage when City staff agree with a
          licensed plumber’s camera finding that it is in the public sewer, in the first foot of
          the lateral at the connection, or caused by a City street tree. The rest of the lateral
          stays the owner’s cost. The posted copy of the policy shows a 2014 revision with its
          resolution number left blank, so confirm the current text with Public Works at (619)
          397-6000. That is the City’s number, not ours. Sources: City of Chula Vista Council
          Policy 570-01; City of Chula Vista sewer pages.
        </p>
      ),
    },
    {
      question: 'What should I do if sewage backs up inside my Chula Vista home?',
      answer: (
        <p>
          The City’s brochure says to shut off all water sources, including faucets, the
          dishwasher and the clothes washer. If sewage keeps backing up into the house, it says to
          contact Public Works or the City’s after-hours number right away. If the sewage stops
          when the water is off, it says to contact a licensed plumber or sewer cleaning
          contractor. The City’s overflow page gives the same stop-all-water-use instruction.
          These are the City’s instructions, not ours. Sources: City of Chula Vista sewer lateral
          maintenance brochure; City of Chula Vista sanitary sewer overflow page.
        </p>
      ),
    },
    {
      question:
        'Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours?',
      answer: (
        <p>
          Call City of Chula Vista Public Works Operations at (619) 397-6000 immediately. The City
          lists regular hours of Monday to Thursday 6:30am to 4:00pm and Friday 6:30am to 3:00pm,
          closed every other Friday. After normal hours, on holidays and on weekends, the City says
          to call Chula Vista Police at (619) 691-5151 and report a sewer emergency. These are the
          City’s numbers, not ours. Source: City of Chula Vista sanitary sewer overflow page.
        </p>
      ),
    },
    {
      question: 'What does the City’s policy say about street-tree roots and the 48-hour notice?',
      answer: (
        <p>
          If a licensed plumber’s camera inspection finds the stoppage in the public sewer, in the
          first foot of the lateral at the connection, or caused by a City street tree, the policy
          says the owner must notify the City within 48 hours of identifying the location. For a
          street tree, the owner has the burden of proving the cause, either by excavating the root
          from its origin to the point where it entered the lateral or with written confirmation
          from a certified arborist based on a root sample. If City staff agree, the City
          reimburses reasonable costs, and for some street-tree locations the City does the work.
          Source: City of Chula Vista Council Policy 570-01.
        </p>
      ),
    },
    {
      question: 'Is a permit required for sewer lateral work in Chula Vista?',
      answer: (
        <p>
          Yes, according to the City. A utility permit is required to install, repair, replace or
          relocate a sewer lateral (main to property line) or a building sewer (property line to
          house), using Residential Utility Permit Application Form 4569. For work in the City
          right-of-way or easement, a private contractor needs a Construction Permit from the Land
          Development Division Permits Section at (619) 691-5272, with a bond, certificate of
          insurance, traffic control plan and proof of a current contractor’s license, and a City
          crew is on site when the lateral connects to the main. The Council policy also requires a
          City permit before repair or replacement work. These are the City’s numbers and
          requirements, not ours. Sources: City of Chula Vista utility permits page; City of Chula
          Vista sewer lateral policy page; City of Chula Vista Council Policy 570-01.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required when buying a Chula Vista home?',
      answer: (
        <p>
          We did not find a rule on the City’s pages or in the municipal code sections we reviewed
          that requires a sewer lateral inspection, certification or seller disclosure when an
          existing home is sold. Two code sections address laterals in new construction, CVMC
          13.08.100 on reusing a previously used lateral and CVMC 13.08.110 on occupancy, and
          neither mentions a sale. That reads as none found, not a confirmed absence, and it does
          not address state disclosure law. Because the lateral is the owner’s, a buyer who wants
          evidence of its condition has to ask for it. Sources: City of Chula Vista sewer pages;
          Chula Vista Municipal Code sections 13.08.100 and 13.08.110.
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
    title: 'Schedule a sewer camera inspection in Chula Vista.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or a Chula Vista property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
          'City of Chula Vista: Sewer Lateral Policy (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_POLICY_URL,
      },
      {
        label:
          'City of Chula Vista: Council Policy 570-01, Sewer - Maintenance (adopted 1967, amended 1979 and 1984; the posted 2014 revision line has a blank resolution number; reviewed Oct 4, 2026)',
        href: CITY_COUNCIL_POLICY_URL,
      },
      {
        label:
          'City of Chula Vista: Sewer lateral maintenance brochure (undated; reviewed Oct 4, 2026)',
        href: CITY_BROCHURE_URL,
      },
      {
        label:
          'City of Chula Vista: Sanitary Sewer Overflows (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_SSO_URL,
      },
      {
        label:
          'City of Chula Vista: Sewer Rate and Bills (page date not shown; refers to the July 1, 2025 rate change; reviewed Oct 4, 2026)',
        href: CITY_RATE_URL,
      },
      {
        label:
          'City of Chula Vista: Wastewater Division (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_WASTEWATER_URL,
      },
      {
        label:
          'City of Chula Vista: Utility Permits (page date not shown; reviewed Oct 4, 2026)',
        href: CITY_PERMITS_URL,
      },
      {
        label:
          'Chula Vista Municipal Code 13.08.100, Reuse of old sewer laterals (code current through Ordinance 3626, Aug 18, 2026; reviewed Oct 4, 2026)',
        href: CVMC_100_URL,
      },
      {
        label:
          'Chula Vista Municipal Code 13.08.110, Occupancy of premises with unapproved sewer lateral (same currency; reviewed Oct 4, 2026)',
        href: CVMC_110_URL,
      },
      {
        label:
          'Castro Valley Sanitary District (cited only to show that CVSan is a different agency; reviewed Oct 4, 2026)',
        href: CASTRO_VALLEY_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the City of Chula Vista for your address.',
  },
  servicePageIds: [id('sl-chula-vista-camera')],
}
