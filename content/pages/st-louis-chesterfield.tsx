import Link from 'next/link'
import { getService } from '@/data/services'
import { contact } from '@/data/business/organization'
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
 * Chesterfield, MO location page (`loc-stl-chesterfield`).
 *
 * Full rich composition, replacing the thin inline entry that used to live
 * in `st-louis.tsx`. The City of Chesterfield's own lateral program policy
 * (header 03/2026) and application (Rev. 05/31/2024) were read directly, so
 * the fee, cap, eligibility, exclusions and process are stated here with
 * citations (DEC-109).
 *
 * ⚠ BUSINESS FACTS HERE: phone, hours and the founding year come from the
 * business constants or are owner-confirmed (family-operated since 2011,
 * the four St. Louis association affiliations). Hours follow DEC-083
 * (8:00 am open). The MSD and City numbers are theirs, labelled as theirs.
 * No licence, certification or insurance claim is made for The Sewer Pros.
 * The dollar amounts are the City's published program terms, never prices.
 *
 * ⚠ LOCAL FACTS ARE CHESTERFIELD'S ONLY. Nothing from the St. Louis City
 * page (combined sewers, Street Division, plumbing permit rule, pre-1940
 * share) is carried over.
 *
 * ⚠ IMAGES: only existing approved assets render (the market hero as the
 * backdrop, plus the nine service-card artworks). Every other slot is
 * defined in `IMAGE_SLOTS` and renders nothing until a real photo exists.
 * Nothing on this page renders an `ImagePlaceholder`.
 *
 * TODO(primary-source): re-check 85.6%, 1982 and 1.4% against Census tables
 * B25034 and B25035 for Chesterfield city (PENDING-015).
 *
 * Follow-up: `card()` and the form config are duplicated from
 * `st-louis-city.tsx`; extract a shared module in a separate refactor.
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
 * ⚠ A SLOT WITH NO `src` RENDERS NOTHING. The rich sections show a text-only
 * layout when an `image` field is undefined. To add a photo later, set `src`
 * and `source` on its slot: one edit, no component change. Photos that show
 * crew, equipment, footage, customers or reports must be real job photos.
 *
 * The hero and the nine service-card slots keep no `src` because those
 * slots currently use existing approved art (the market hero backdrop and
 * `cardImage()`), whose alt text describes a different image than the
 * future photo this registry's `alt` describes.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'chesterfield-hero',
    ratio: '16:9',
    alt: 'Technician with a sewer camera at a Chesterfield, MO home',
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
    alt: 'Chesterfield home exterior (background)',
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
      label: 'How camera inspection works',
      pageId: id('sl-chesterfield-camera'),
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
    secondaryLink: { label: 'How hydro jetting works', pageId: id('sl-chesterfield-hydro') },
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
      label: 'How pre-purchase inspection works',
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
    { value: 'chesterfield', label: 'Chesterfield, MO' },
    { value: 'other-st-louis-county', label: 'Other St. Louis County, MO' },
    { value: 'st-louis-city', label: 'St. Louis City, MO' },
    { value: 'other-st-louis-area', label: 'Other St. Louis area' },
  ],
  defaultLocationValue: 'chesterfield',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const MSD_BASE = 'https://msdprojectclear.org'
const LATERAL_URL = `${MSD_BASE}/customers/problems-tips/sewer-backups/lateral-line/`
const BACKUP_URL = `${MSD_BASE}/customers/problems-tips/sewer-backups/`
const QUESTIONS_URL = `${MSD_BASE}/customers/problems-tips/building-cleanup-guide/questions/`
const CONWAY_URL = `${MSD_BASE}/projects/new-construction/conway-meadows-sanitary-relief-12129/`
const SERVICE_AREA_URL = `${MSD_BASE}/glossary/service-area/`
const CENSUS_URL = 'https://data.census.gov/'
const CH_PROGRAM_URL =
  'https://www.chesterfield.mo.us/residential-sanitary-sewer-lateral-repair-program'
const CH_POLICY_URL =
  'https://content.civicplus.com/api/assets/8bbc47b2-73a7-4637-9516-ac00a07d9009?cache=1800'
const CH_APPLICATION_URL =
  'https://content.civicplus.com/api/assets/142f7988-3a1b-4184-b77c-8a500e492db5?cache=1800'
const CH_WHO_TO_CALL_URL = 'https://www.chesterfield.mo.us/webcontent/admin/docs/Who_To_Call.pdf'
const CH_OCCUPANCY_URL = 'https://www.chesterfield.mo.us/occupancy-permit.html'
const CH_REOCCUPANCY_URL =
  'https://content.civicplus.com/api/assets/mo-chesterfield/492c62dc-01f0-4e7e-bf43-ba6d9ca42061?cache=1800'

export const chesterfieldContent: LocationPageContent = {
  seoTitle: 'Chesterfield, MO Sewer Inspection & Cleaning',
  metaDescription:
    "Sewer camera inspection, cleaning and diagnostics for Chesterfield, MO. Who owns the lateral, how the City's lateral program works, and when evidence helps.",
  hero: {
    title: 'Sewer Inspection & Cleaning in Chesterfield, MO',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for Chesterfield properties. Get clear evidence of what is happening
        inside your sewer line before you apply for the City&rsquo;s lateral program, buy a
        home, or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      'Locally owned and family-operated since 2011',
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${contact.phone}`,
    // Existing market hero. Its alt describes the file, not a Chesterfield job.
    // A Chesterfield photo in the `chesterfield-hero` slot replaces it.
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
          For sewage backing up into your home or any problem with the public sewer,
          contact MSD first at (314) 768-6260.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Chesterfield sewer questions, answered',
  // DEC-108: FAQPage markup approved for this page.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'MSD maintains the public sewer main. For a property on MSD’s system, the lateral line from your building and its connection to that main are private property, and the owner maintains and repairs them.',
      'Chesterfield runs its own Residential Sanitary Sewer Lateral Repair Program, funded by a $28 annual fee on eligible residential tax bills. It can pay for a qualifying defective lateral, up to $15,000, but it treats routine root removal as maintenance.',
      'A sewer camera inspection gives you recorded evidence before you clean, buy, or approve major work.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Chesterfield', href: '#how-system' },
      { label: 'Home age', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City repair program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Chesterfield',
    title: 'Sewer Inspection, Diagnostics & Cleaning Services in Chesterfield',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${contact.phone}`,
    },
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at a Chesterfield property?',
    answer: (
      <p>
        For a property on the{' '}
        <a href={LATERAL_URL} rel="noopener">
          Metropolitan St. Louis Sewer District (MSD)
        </a>{' '}
        system, MSD maintains the public sewer main. The lateral line that connects your
        building to that main, including its connection, is private property, and MSD says
        the owner is responsible for maintaining and repairing it.
      </p>
    ),
    cards: [
      {
        tag: 'Public - MSD',
        title: 'The public sewer main',
        body: 'MSD is the regional public wastewater utility serving most of St. Louis County, and it publishes sewer projects in Chesterfield. If a building backup is caused by a public sewer line, MSD says it makes the necessary repair. Which utility serves a specific address, such as a property near a service boundary or on a septic system, should be confirmed by address.',
      },
      {
        tag: 'Private - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the public sewer is private property. Clogs, roots, grease and damage on it are the owner’s to address. Chesterfield’s City program defines its eligible lateral as running from three to five feet outside the foundation or exterior wall to the sewer main in the street or sewer easement.',
      },
    ],
    table: {
      caption: 'Public sewer main compared with the private lateral line',
      columns: ['Question', 'Public sewer main', 'Private lateral line'],
      rows: [
        {
          label: 'Who owns it',
          publicMain: 'MSD operates the public sewer system',
          privateLateral:
            'The property owner. MSD states the lateral line and its connection to the public sewer are private property.',
        },
        {
          label: 'Who maintains and repairs it',
          publicMain:
            'MSD, including the repair when a public sewer line caused a backup',
          privateLateral: 'The property owner',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'MSD at (314) 768-6260 for a building backup. MSD says it will inspect and tell you whether the situation qualifies for its limited backup-assistance program.',
          privateLateral:
            'If the cause is your lateral, you arrange inspection or cleaning. For the City’s repair program, contact Chesterfield Public Works at (636) 537-4762.',
        },
        {
          label: 'What help exists',
          publicMain: 'MSD crews for public sewer problems',
          privateLateral:
            'Chesterfield’s lateral repair program may pay for a qualifying defective lateral at an eligible residential property, up to $15,000. Routine root removal is not treated as a defect.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and where a problem sits.',
        },
      ],
    },
    note: 'This is general information from MSD and City of Chesterfield sources, not legal advice. We did not find a published rule on who owns the part of a lateral under the street, so we only repeat MSD’s general statement. Contact MSD or the City to confirm how it applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Chesterfield',
    title: 'How sewers work in Chesterfield, and what MSD is building here',
    paragraphs: [
      'MSD says most of St. Louis County is served by a separate sewer system, while St. Louis City is served by a combined one.',
      <>
        That is MSD&rsquo;s regional description.{' '}
        <a href={BACKUP_URL} rel="noopener">
          MSD&rsquo;s page
        </a>{' '}
        does not label every Chesterfield parcel, so treat it as background rather than a
        finding about your address.
      </>,
      <>
        In Chesterfield, MSD&rsquo;s{' '}
        <a href={CONWAY_URL} rel="noopener">
          Conway Meadows Sanitary Relief project
        </a>{' '}
        is designed to replace about 1,400 feet of undersized sewer between Conway Road and
        North Outer Forty Road with pipe 18 to 24 inches wide. MSD says the goal is to
        reduce basement backups and sewer overflows during intense rainfall.
      </>,
      'MSD’s project page is undated and described construction starting in spring 2026 and lasting about 12 months, so check MSD for the current status.',
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
    eyebrow: 'Home age and your lateral',
    title: 'Newer homes, newer pipe, and what a camera can still find',
    paragraphs: [
      'Most Chesterfield homes are newer than the typical St. Louis-area house, but a newer lateral is not the same as a problem-free one.',
      // TODO(primary-source): re-check 85.6%, 1982 and 1.4% against Census tables
      // B25034 and B25035 for Chesterfield city (PENDING-015).
      'In the U.S. Census Bureau’s American Community Survey 2019-2023 5-year estimates, 85.6% of housing in the City of Chesterfield was built in 1970 or later, the median year built is 1982, and 1.4% was built before 1940. Those figures describe the city as a whole, not every address MSD serves.',
      'Pipe from that era is more often PVC than clay, cast iron or bituminized fiber, so the material failures common in older areas matter less. Ground movement does not wait for a pipe to age, and a line can be disturbed by work done after it was installed.',
      'A belly produces the slow, repeating drainage people associate with an old failing line. The cause is different, and so is the remedy. Era tells you what to expect. A camera shows what is there.',
    ],
    table: {
      caption: 'What a camera can find on a newer lateral',
      columns: [
        'What a camera can find',
        'What it looks like',
        'Why a newer pipe does not rule it out',
      ],
      rows: [
        [
          'Bellies',
          'A section that holds water, with solids settling where flow slows',
          'Soil settles regardless of pipe age',
        ],
        [
          'Joint separation',
          'A gap or offset at a joint',
          'Soil movement, not material decay, opens joints',
        ],
        [
          'Damage from later work',
          'A dent, crack or offset near an addition, landscaping or a utility crossing',
          'The disturbance happens after installation',
        ],
        [
          'Roots',
          'Fine roots entering at a gap or joint',
          'Any opening lets roots in',
        ],
      ],
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'MSD tells customers with a building backup to call it so it can inspect. MSD lists raw sewage inside or outside a home, missing manhole covers and flooded streets as urgent reports.',
      'If MSD or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
      'For an emergency that threatens life or property, Chesterfield’s Who To Call guide says to call 911. 911 is not a sewer dispatch line.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'MSD building backup line',
      phone: { label: '(314) 768-6260', href: 'tel:+13147686260' },
      text: 'Published by MSD for building backups so it can inspect whether the situation qualifies for its limited assistance program. This is MSD’s number, not ours.',
      links: [{ label: 'What MSD says about sewer backups', href: BACKUP_URL }],
    },
    secondaryAgency: {
      label: 'City of Chesterfield Public Works',
      phone: { label: '(636) 537-4762', href: 'tel:+16365374762' },
      text: 'For the Residential Sanitary Sewer Lateral Repair Program. The City lists Monday - Friday, 8:30 am - 5:00 pm, and City Hall at 690 Chesterfield Parkway West. This is the City’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your private lateral. ${contact.phone}, Monday - Friday, 8:00 am - 4:00 pm.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral repair program',
    title: 'Using an inspection with Chesterfield’s Sewer Lateral Repair Program',
    lede: 'The City program can pay for repair of a qualifying defective lateral, up to $15,000. It treats roots in pipe joints as routine maintenance when removing them lets the line work, and the City runs its own video review.',
    paragraphs: [
      'Eligible properties are owner-owned single-family homes, duplexes, condominium buildings and multifamily buildings with no more than six dwelling units. Commercial and industrial properties and larger buildings are excluded, and owners who are delinquent on their tax bill cannot participate.',
      'The City funds the program with a $28 annual fee on eligible residential real-estate tax bills, collected by St. Louis County. Voters approved the fee in 2000 and the program began January 1, 2001.',
      'The City’s policy says the owner, not a tenant, must apply, and that in a real estate transaction the seller must be the one to apply.',
      'Terms shown are from the City’s Sewer Lateral Policy & Procedures dated March 2026 and its application form revised May 2024. The City’s pages do not state current funding availability, and the policy says a City committee may amend it. Confirm current terms and funding with Public Works before you apply.',
    ],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City program covers',
      items: [
        'Dye and video investigation, excavation, backfill, and repair or replacement of a qualifying defective lateral',
        'Defects the City defines as a collapsed or broken line, a severe offset, a severe backfall or belly, or a severe blockage that cannot be cabled out',
        'Limited grading and sod, plus the street, sidewalk and driveway restoration listed in the policy',
      ],
    },
    doesNotCover: {
      title: 'What it does not cover',
      items: [
        'Roots growing through pipe bells and joints, when removing them lets the line work',
        'The initial cabling, which the City calls routine maintenance',
        'Pipe under a building or structure, and interior cleanup, personal property, temporary housing or lost income',
        'Landscaping, fences, patios, sprinklers, retaining walls and similar items over the line, or need caused by a natural disaster, negligence or other excavation',
        'Costs above $15,000, though street pavement and sidewalk restoration in the right-of-way is not counted toward that limit',
      ],
    },
    steps: {
      title: 'How the City program works, in four steps',
      steps: [
        {
          title: 'Have the line cabled',
          body: 'A licensed plumbing company or licensed drainlayer cables the lateral first. The City does not reimburse this step.',
        },
        {
          title: 'Get the packet',
          body: 'If cabling does not fix it, contact Public Works for an application packet, or download it from the City’s website.',
        },
        {
          title: 'Owner applies',
          body: 'Submit the form with the $200 non-refundable fee, written proof dated within 6 months that the line could not be opened, a paid tax receipt, a hold harmless agreement and the paid cabling bill.',
        },
        {
          title: 'City reviews',
          body: 'The City’s contractor televises the lateral, and Public Works reviews the video and accepts or denies repair. Requests are handled first come, first served.',
        },
      ],
    },
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'The City arranges its own video investigation, so an independent inspection does not replace that step, and the City decides eligibility. What it gives you is your own recorded evidence of the line’s condition, which can help you understand a blockage or compare a repair recommendation before you spend money. Ask Public Works what documentation it accepts.',
        'If you solicit your own repair bids under the program, the policy asks for bids from at least three Master Drainlayers licensed by St. Louis County. The Sewer Pros does not perform repairs or replacements.',
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
    eyebrow: 'Buying in Chesterfield',
    title: 'Sewer inspection before buying a Chesterfield home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'In the City’s published materials we reviewed, we found no sewer-lateral inspection requirement for an ordinary residential sale. Chesterfield’s occupancy and re-occupancy materials address businesses, so a buyer who wants evidence has to ask for it. If a problem turns up, note that the City’s lateral program policy says the seller must be the one to apply when a home is in a real estate transaction. Ask your agent and Public Works how that fits your timeline. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      {
        label: 'How a pre-purchase sewer inspection works',
        pageId: id('svc-pre-purchase-sewer-inspection'),
      },
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
    ],
    cta: { label: 'Schedule a Pre-Purchase Sewer Inspection' },
    agents: {
      eyebrow: 'For agents and inspectors',
      title: 'Working with real estate professionals',
      body: 'We are affiliated with the St. Louis Association of Realtors, ASHI, the Women’s Council of Realtors and St. Charles Realtors. We provide video when a camera is used, and written findings. Findings are informational and not legal advice.',
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
    body: 'Chesterfield is in St. Louis County, and St. Louis City is a separate jurisdiction with its own rules. Lateral programs and sewer details differ by municipality, so terms and costs change from place to place.',
    items: [
      {
        title: 'St. Louis City',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-st-louis-city'),
      },
      {
        title: 'Ballwin',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-ballwin'),
      },
      {
        title: 'Florissant',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-florissant'),
      },
      {
        title: 'St. Charles',
        description: 'Local sewer details',
        pageId: id('loc-stl-st-charles'),
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
      question: 'Who is responsible for a sewer lateral in Chesterfield?',
      answer: (
        <p>
          MSD states that the lateral line and its connection to the public sewer are
          private property, so the property owner is responsible for maintaining and
          repairing them. Chesterfield&rsquo;s City program can pay qualifying repair costs
          under its own eligibility and defect rules, but it is a cost program, not a
          change in who owns the lateral.
        </p>
      ),
    },
    {
      question: 'Does Chesterfield have a sewer lateral repair program?',
      answer: (
        <p>
          Yes. The City runs a Residential Sanitary Sewer Lateral Repair Program funded by
          a $28 annual fee on eligible residential real-estate tax bills, collected by St.
          Louis County. The City says it took effect January 1, 2001.
        </p>
      ),
    },
    {
      question: 'Which Chesterfield homes can qualify for the lateral repair program?',
      answer: (
        <p>
          The policy covers owner-owned single-family homes, duplexes, condominium
          buildings and multifamily buildings with up to six dwelling units. Commercial and
          industrial properties and larger buildings are excluded, and owners who are
          delinquent on their tax bill cannot participate.
        </p>
      ),
    },
    {
      question: 'How much can Chesterfield’s lateral program pay?',
      answer: (
        <p>
          The City&rsquo;s policy allows 100% of authorized costs up to $15,000 for a
          qualifying defective lateral. Costs above that are the owner&rsquo;s, and street
          pavement and sidewalk restoration in the right-of-way is not counted toward the
          limit. These terms come from the City&rsquo;s March 2026 policy, so confirm
          current terms and funding with Public Works.
        </p>
      ),
    },
    {
      question: 'Does Chesterfield’s program cover a clogged line or tree roots?',
      answer: (
        <p>
          Not automatically. The City requires the owner to have the line cabled first and
          does not reimburse that step. Roots growing through pipe bells and joints are
          treated as routine maintenance when removing them lets the line work, while a
          severe blockage that cannot be cabled out can meet the City&rsquo;s definition of
          a defective lateral.
        </p>
      ),
    },
    {
      question: 'What does a Chesterfield owner submit to apply?',
      answer: (
        <p>
          The owner, not a tenant, submits the application with a $200 non-refundable fee,
          written proof dated within 6 months that a licensed plumber or drainlayer could
          not open the line, and a paid real-estate-tax receipt. The City&rsquo;s form also
          asks for a hold harmless agreement and the paid cabling bill.
        </p>
      ),
    },
    {
      question: 'What should I do if sewage backs up in my Chesterfield building?',
      answer: (
        <p>
          MSD tells customers with a building backup to call 314-768-6260 so it can inspect
          and determine whether the situation qualifies for its limited assistance program.
          MSD treats raw sewage inside or outside a home, missing manhole covers and
          flooded streets as urgent reports.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required before buying a Chesterfield home?',
      answer: (
        <p>
          We found no residential point-of-sale or transfer sewer-lateral inspection
          requirement in the City&rsquo;s published materials we reviewed, so this reads as
          none found rather than a confirmed absence. Chesterfield&rsquo;s occupancy and
          re-occupancy materials address businesses. A buyer can still choose to inspect
          before closing.
        </p>
      ),
    },
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          It can reveal blockages, root intrusion, separated joints, offsets, cracks,
          standing water and other observable conditions in accessible sewer piping,
          recorded on video.
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
    title: 'Schedule a sewer camera inspection in Chesterfield.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a City lateral program question, or a Chesterfield property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
    messageLabel: 'Message',
    form: formConfig,
  },
  sources: {
    title: 'Sources',
    links: [
      {
        label: 'MSD Project Clear: Lateral line (updated August 20, 2025)',
        href: LATERAL_URL,
      },
      {
        label:
          'MSD Project Clear: Sewer backups (updated December 18, 2019; confirm the phone number with MSD)',
        href: BACKUP_URL,
      },
      {
        label:
          'MSD Project Clear: Building cleanup guide questions (updated August 20, 2025)',
        href: QUESTIONS_URL,
      },
      {
        label: 'MSD Project Clear: Conway Meadows Sanitary Relief project (undated)',
        href: CONWAY_URL,
      },
      {
        label:
          'U.S. Census Bureau: American Community Survey 2019-2023 5-year estimates (Chesterfield city housing age; owner-approved, primary table check pending)',
        href: CENSUS_URL,
      },
      {
        label: 'MSD Project Clear: Service area (February 10, 2020)',
        href: SERVICE_AREA_URL,
      },
      {
        label: 'City of Chesterfield: Residential Sanitary Sewer Lateral Repair Program',
        href: CH_PROGRAM_URL,
      },
      {
        label: 'City of Chesterfield: Sewer Lateral Policy & Procedures (dated March 2026)',
        href: CH_POLICY_URL,
      },
      {
        label: 'City of Chesterfield: Sewer lateral program application (Rev. May 31, 2024)',
        href: CH_APPLICATION_URL,
      },
      {
        label: 'City of Chesterfield: Who To Call (undated)',
        href: CH_WHO_TO_CALL_URL,
      },
      {
        label: 'City of Chesterfield: Occupancy permits (January 1, 2025)',
        href: CH_OCCUPANCY_URL,
      },
      {
        label: 'City of Chesterfield: Re-occupancy materials (undated)',
        href: CH_REOCCUPANCY_URL,
      },
    ],
    lastReviewed: '2026-10-01',
    closingNote:
      'Official guidance can change, so confirm details with MSD or the City for your address.',
  },
  servicePageIds: [
    id('sl-chesterfield-camera'),
    id('sl-chesterfield-hydro'),
    id('svc-stl-sewer-lateral-inspection-reporting'),
  ],
}
