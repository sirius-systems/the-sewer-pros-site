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
 * Florissant, MO location page (`loc-stl-florissant`).
 *
 * Full rich composition, replacing the thin inline entry that used to live
 * in `st-louis.tsx`. Same structure as the Chesterfield and Ballwin modules
 * (uniform municipality pages): only copy, data, links and image slots
 * differ. The program terms were read from the City of Florissant's Sewer
 * Lateral Insurance Program page on 2026-10-02 (DEC-072, DEC-111).
 *
 * ⚠ BUSINESS FACTS HERE: phone, hours and the founding year come from the
 * business constants or are owner-confirmed (the four St. Louis association
 * affiliations). Hours follow DEC-083 (8:00 am open). The MSD and City
 * numbers are theirs, labelled as theirs. No licence, certification or
 * insurance claim is made for The Sewer Pros. The dollar amounts ($50 annual
 * fee, $300 deposit) are the City's published program terms, never prices.
 *
 * ⚠ LOCAL FACTS ARE FLORISSANT'S ONLY. Nothing from the St. Louis City,
 * Chesterfield or Ballwin pages is carried over.
 *
 * ⚠ IMAGES: only existing approved assets render (the market hero as the
 * backdrop, plus the nine service-card artworks). Every other slot is
 * defined in `IMAGE_SLOTS` and renders nothing until a real photo exists.
 * Nothing on this page renders an `ImagePlaceholder`.
 *
 * TODO(primary-source): see `housingAge` (Census tables B25034 and B25035).
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from `st-louis-ballwin.tsx`; extract a shared module in a
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
    id: 'florissant-hero',
    ratio: '16:9',
    alt: 'Technician with a sewer camera at a Florissant, MO home',
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
    alt: 'Florissant home exterior (background)',
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
    secondaryLink: { label: 'Sewer cleaning in Florissant', pageId: id('sl-florissant-cleaning') },
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
    { value: 'florissant', label: 'Florissant, MO' },
    { value: 'other-st-louis-county', label: 'Other St. Louis County, MO' },
    { value: 'st-louis-city', label: 'St. Louis City, MO' },
    { value: 'other-st-louis-area', label: 'Other St. Louis area' },
  ],
  defaultLocationValue: 'florissant',
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
const BROOKSHIRE_URL = `${MSD_BASE}/system-improvements/new-construction/brookshire-sanitary-relief-12104/`
const WASTEWATER_URL = `${MSD_BASE}/system_improvements/wastewater-system-improvements/`
const FL_PROGRAM_URL = 'https://www.florissantmo.com/274/Sewer-Lateral-Insurance-Program'
const FL_ENGINEERING_URL = 'https://www.florissantmo.com/268/Engineering-Division'
const FL_PERMITS_URL = 'https://www.florissantmo.com/282/Permits'
const FL_OCCUPANCY_URL = 'https://www.florissantmo.com/264/Occupancy-Inspection'
const FL_PLAN_URL =
  'https://www.florissantmo.com/DocumentCenter/View/1715/2026-2030-Consolidated-Plan-and-2026-Annual-Action-Plan-PDF'

export const florissantContent: LocationPageContent = {
  seoTitle: 'Florissant, MO Sewer Inspection & Cleaning',
  metaDescription:
    'Sewer camera inspection and cleaning in Florissant, MO. Who owns the lateral, what the City’s program covers, and when evidence helps.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Florissant, MO',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for Florissant properties. Get clear evidence of what is happening
        inside your sewer line before you apply to the City&rsquo;s lateral program, buy a
        home, or approve major work.
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
    // Existing market hero. Its alt describes the file, not a Florissant job.
    // A Florissant photo in the `florissant-hero` slot replaces it.
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
  faqHeading: 'Florissant sewer questions, answered',
  // DEC-111: FAQPage markup approved for this page (under DEC-108).
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'MSD handles repairs to the public sewer, and the lateral line from your building, including its connection to the public sewer, is private property that the owner maintains and repairs.',
      'Florissant’s Sewer Lateral Insurance Program covers repair of a defective residential lateral from the main to within five feet of the home’s foundation, funded by a $50 annual fee on the real estate tax bill. The part inside the home and within five feet of it stays the owner’s.',
      'A sewer camera inspection gives you recorded evidence before you clean, buy, or approve major work.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Florissant', href: '#how-system' },
      { label: 'Housing age', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City lateral program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Florissant',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Florissant',
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
    title: 'Who is responsible for the sewer line at a Florissant property?',
    answer: (
      <p>
        For a property on the{' '}
        <a href={LATERAL_URL} rel="noopener">
          Metropolitan St. Louis Sewer District (MSD)
        </a>{' '}
        system, the lateral line that connects your building to the public sewer,
        including its connection, is private property, and MSD says the owner is
        responsible for maintaining and repairing it. The public sewer is MSD&rsquo;s side:
        when a reported cave-in is traced to the public sewer, the City of Florissant says
        MSD makes the repair.
      </p>
    ),
    cards: [
      {
        tag: 'Public - MSD',
        title: 'The public sewer',
        body: 'MSD runs the public sewer system serving Florissant. The City’s lateral program page says that after a cave-in or sinkhole is reported, the City asks MSD to run a dye test, and that MSD makes the necessary repairs if the hole is connected to the public sewer. Which utility serves a specific address should be confirmed by address.',
      },
      {
        tag: 'Private - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the public sewer is private property. Clogs, roots, grease and damage on it are the owner’s to address. Florissant’s City program helps pay for repair of a defective residential lateral from the main to within five feet of the home’s foundation. The homeowner is responsible for the part inside the home and within five feet of it.',
      },
    ],
    table: {
      caption: 'Public sewer compared with the private lateral line',
      columns: ['Question', 'Public sewer', 'Private lateral line'],
      rows: [
        {
          label: 'Who owns it',
          publicMain: 'MSD’s public system.',
          privateLateral:
            'The property owner. MSD states the lateral line and its connection to the public sewer are private property.',
        },
        {
          label: 'Who maintains and repairs it',
          publicMain:
            'MSD makes repairs when a dye test shows a cave-in is connected to the public sewer, per the City’s program page.',
          privateLateral:
            'The property owner. The City’s program can cover repair of a defective section from the main to within five feet of the home’s foundation.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'MSD at (314) 768-6260 for a building backup. MSD says a representative will inspect to see whether the situation qualifies for its limited building-backup assistance program.',
          privateLateral:
            'For a sinkhole or the City program, the Florissant Engineering Division at (314) 839-7643. For cleaning or inspection of your lateral, you arrange it.',
        },
        {
          label: 'What help exists',
          publicMain: 'MSD crews for urgent public sewer reports',
          privateLateral:
            'The City’s lateral program, subject to its eligibility rules, deposit and review.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and where along the line a problem sits.',
        },
      ],
    },
    note: 'This is general information from MSD and City of Florissant sources, not legal advice. We did not find a published rule on who owns the part of a lateral under the street, so we only repeat MSD’s general statement and the City’s program boundary. Contact MSD or the City to confirm how it applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Florissant',
    title: 'How sewers work in Florissant, and what MSD has built here',
    paragraphs: [
      'MSD says most of St. Louis County is served by a separate sewer system, while St. Louis City is served by a combined one.',
      <>
        That is MSD&rsquo;s county-level description.{' '}
        <a href={BACKUP_URL} rel="noopener">
          MSD&rsquo;s page
        </a>{' '}
        does not label every Florissant parcel, so treat it as background rather than a
        finding about your address.
      </>,
      <>
        MSD&rsquo;s{' '}
        <a href={BROOKSHIRE_URL} rel="noopener">
          Brookshire Sanitary Relief project page
        </a>{' '}
        describes replacing undersized and deteriorated wastewater sewer in Florissant&rsquo;s
        Wedgewood neighborhood, about 6,000 feet of new pipe, to reduce basement backups
        and sewer overflows. The page lists construction from September 2020 to October
        2021 and restoration in February 2022. It does not state a current status.
      </>,
      <>
        MSD&rsquo;s{' '}
        <a href={WASTEWATER_URL} rel="noopener">
          wastewater project list
        </a>{' '}
        also shows a Lindsay Lane Sanitary Relief project in Florissant, on Lindsay Lane
        between Lindbergh Boulevard and Mary Ann Court, listed as Spring 2026 - Summer 2027
        (tentative). Check MSD for the current status.
      </>,
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
    title: 'Mid-century homes, and what a camera can find',
    paragraphs: [
      // TODO(primary-source): replace the City-plan attribution with Census tables
      // B25034 and B25035 for Florissant city, Missouri (ACS 2020-2024 5-year) when
      // the figures are supplied.
      'The City of Florissant’s 2026-2030 Consolidated Plan reports 21,229 housing units in the city and says the vast majority of the housing stock was built between 1950 and 1979, citing the U.S. Census Bureau’s 2024 American Community Survey 5-year estimates. That figure describes the city as a whole, not every address MSD serves.',
      'Housing age does not tell you what pipe is in your lateral. Neither MSD nor the City publishes a pipe material or installation era for Florissant, so the only way to know the condition of your line is to look at it.',
      'A drain that still works is not proof of a sound pipe, and a blockage is not proof of a broken one. The City’s own program rules show why the difference matters: it lists small defects and hairline cracks, and lines that are open and serviceable, among the reasons an application can be denied, and it says the program is not a substitute for regular maintenance. A camera shows which situation your line is in.',
      // The shared type has no source-note field, so the note is the last paragraph.
      'Housing-age figure: City of Florissant 2026-2030 Consolidated Plan (Housing Market Analysis), citing U.S. Census Bureau ACS 2024 5-year estimates. Program statements: City of Florissant Sewer Lateral Insurance Program page. The table is general context, not a finding about any one home.',
    ],
    table: {
      caption: 'What a camera can find on a mid-century lateral',
      columns: ['What a camera can find', 'What it looks like', 'Why it matters in Florissant'],
      rows: [
        [
          'Cracks or breaks',
          'A split or missing section of pipe wall',
          'The City lists small defects and hairline cracks as possible reasons to deny a program application.',
        ],
        [
          'Joint separation',
          'A gap or offset where two pipe sections meet',
          'Where along the line the problem sits matters: the program covers the main to within five feet of the foundation.',
        ],
        [
          'Roots',
          'Fine roots entering at a gap or joint',
          'The City says routine maintenance may mean annual cabling, especially with large trees or bushes.',
        ],
        [
          'Blockage with an intact pipe',
          'Grease or debris with no visible defect',
          'The City can deny an application when the line is open and serviceable. Cleaning, not repair, may be what the line needs.',
        ],
        [
          'A problem near the house',
          'A defect close to the foundation',
          'The City lists a blockage under the home or within five feet of the foundation as a reason to deny.',
        ],
      ],
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'MSD tells customers with a building backup to call it so it can inspect. MSD lists raw sewage inside or outside a house, missing manhole covers and flooded streets as urgent reports.',
      'If MSD or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'MSD building backup line',
      phone: { label: '(314) 768-6260', href: 'tel:+13147686260' },
      text: 'Published by MSD for building backups so it can inspect whether the situation qualifies for its limited assistance program. This is MSD’s number, not ours.',
      links: [{ label: 'What MSD says about sewer backups', href: BACKUP_URL }],
    },
    secondaryAgency: {
      label: 'City of Florissant Engineering Division',
      phone: { label: '(314) 839-7643', href: 'tel:+13148397643' },
      text: 'The City directs residents to its Engineering Division, at (314) 839-7643, to report a cave-in or sinkhole, so the City can ask MSD for a dye test, and for questions about the Sewer Lateral Insurance Program. The City’s Public Works department lists (314) 839-7648 for permit questions, including whether a plumbing or excavation permit applies to a planned project. These are the City’s numbers, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your private lateral. ${contact.phone}, Monday - Friday, 8:00 am - 4:00 pm.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral program',
    title: 'Using an inspection with Florissant’s Sewer Lateral Insurance Program',
    lede: 'Florissant’s program covers the cost of repairing a defective residential sanitary sewer lateral, from the main sewer line to within five feet of the home’s foundation. The homeowner is responsible for repair or replacement inside the home and within five feet of it. The City funds the program with a $50 annual fee on the real estate property tax bill.',
    paragraphs: [
      'The City says the program makes spot repairs, usually about 10 feet, and is not there to replace an entire lateral or to prevent future defects. It also says the program is not a substitute for regular maintenance.',
    ],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City program covers',
      items: [
        'Repair of a defective residential sanitary sewer lateral that connects to the main sewer system, from the main to within five feet of the home’s foundation',
        'Covering the repaired site with clean fill rock and soil, and seeding it',
      ],
    },
    doesNotCover: {
      title: 'What it does not cover',
      items: [
        'The part of the lateral under the home or within five feet of the foundation',
        'Septic tank systems and private treatment systems, which are not eligible',
        'Replacing trees, shrubs, flowers, sod, decks, concrete work (except public sidewalk and street work), retaining walls or outbuildings damaged during the repair',
        'Commercial, industrial and larger multi-family properties. The City’s page says the program does not apply to multi-family properties with more than six dwelling units, and separately says it does not apply to condominium units with six or more units. The two wordings differ at exactly six units, so ask the Engineering Division how your building is treated.',
      ],
    },
    steps: {
      title: 'How the process works, in the City’s words',
      steps: [
        {
          title: 'A qualifying reason to apply',
          body: 'The City says you can apply after the City or MSD confirms a cave-in on your lateral, or if you have recurring backups that regular maintenance cannot resolve and you have paid the annual lateral fee. No prior plumbing inspection is required.',
        },
        {
          title: 'Apply and pay the deposit',
          body: 'The City charges a $300 deposit to apply. No deposit is required for an application that follows a positive MSD dye test.',
        },
        {
          title: 'The City’s contracted plumber evaluates the line',
          body: 'The plumber makes an appointment, does a cable and camera evaluation, and reports to the City. The City Engineer reviews the video report.',
        },
        {
          title: 'Approved or denied',
          body: 'If approved, the City sends a tentative repair date, and its crew excavates, repairs, backfills and seeds the site. The City says the average time from approval to repair is about two weeks and that wait times vary. The $300 deposit is reimbursed after the repair. If the application is denied, the City keeps the deposit for the plumber’s inspection and clerical costs.',
        },
      ],
    },
    afterSteps: [
      'The City lists these among the possible reasons for denial: a blockage under the home or within five feet of the foundation, small defects or hairline cracks, a line that is open and in serviceable condition, and a request meant to satisfy a home sale contingency. The City treats a lateral so clogged that cabling by a plumber or drainlayer fails and nothing can pass as an emergency repair, moved to the front of the list after approvals and utility locating. On repair day the City needs access to outdoor water and electricity and an adult 18 or older at the home.',
      'The City’s page is undated. It does not state a maximum benefit or current funding status. Confirm current terms, the fee, the deposit and funding with the Engineering Division at (314) 839-7643 before you apply.',
    ],
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'The City uses its own contracted plumber for the cable and camera evaluation, so our inspection does not replace it, and we make no claim that the City accepts any outside report. What an independent camera inspection can do is show you, before you pay a deposit that is kept if an application is denied, where along your line a problem sits and whether it looks like a defect or a blockage that cleaning could clear. It gives you your own recorded evidence to understand a recurring backup or to compare a repair recommendation before you spend money.',
        'The City’s crew performs approved repairs. The Sewer Pros does not perform repairs or replacements.',
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
    eyebrow: 'Buying in Florissant',
    title: 'Sewer inspection before buying a Florissant home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'The City of Florissant says a property can be sold “as is” without a City inspection. The buyer is then responsible for obtaining and paying for the inspection and an occupancy permit before anyone moves in or occupies the property. The occupancy page we reviewed does not mention sewers, so a buyer who wants evidence of the lateral has to ask for it. The City also says its Sewer Lateral Insurance Program is not intended to satisfy a home sale contingency and that a pending sale does not move a repair up the list. A new owner can be eligible if the real estate taxes are paid in full. If a repair is approved but may be done after closing, the City requires the new owner to confirm in writing that they know of and support the planned repair. Ask your agent and the Engineering Division how that fits your timeline. Findings are informational and not legal advice.',
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
    body: 'Florissant is in St. Louis County, and St. Louis City is a separate jurisdiction with its own rules. Lateral programs and sewer details differ by municipality, so terms and costs change from place to place.',
    items: [
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
      question: 'Who is responsible for a sewer lateral in Florissant?',
      answer: (
        <p>
          MSD states that the lateral line and its connection to the public sewer are
          private property, so the property owner is responsible for maintaining and
          repairing them. Florissant&rsquo;s lateral program can pay for qualifying repairs
          under its own rules, but it is a cost program, not a change in who owns the
          lateral. Sources: MSD lateral line page; City of Florissant program page.
        </p>
      ),
    },
    {
      question: 'What part of the lateral does Florissant’s program cover?',
      answer: (
        <p>
          The City says the program covers a defective residential sanitary sewer lateral
          from the main sewer line to within five feet of the home&rsquo;s foundation. The
          homeowner is responsible for repair or replacement inside the home and within
          five feet of it. Source: City of Florissant program page.
        </p>
      ),
    },
    {
      question: 'Does the program replace the whole lateral?',
      answer: (
        <p>
          No. The City says the program makes spot repairs, usually about 10 feet, and is
          not there to replace the entire lateral or to prevent future defects. A blockage
          under the home or within five feet of the foundation is listed among the reasons
          an application can be denied. Source: City of Florissant program page.
        </p>
      ),
    },
    {
      question: 'What does it cost to apply?',
      answer: (
        <p>
          The City funds the program with a $50 annual fee on the real estate property tax
          bill. Applying takes a $300 deposit, which the City reimburses after an approved
          repair and keeps for the plumber&rsquo;s inspection and clerical costs if the
          application is denied. No deposit is required for an application that follows a
          positive MSD dye test. Confirm current amounts with the Engineering Division.
          Source: City of Florissant program page.
        </p>
      ),
    },
    {
      question: 'What happens if a sinkhole opens near my Florissant home?',
      answer: (
        <p>
          Contact the City&rsquo;s Engineering Division, which asks MSD to run a dye test.
          The City says MSD makes the necessary repairs if the hole is connected to the
          public sewer. If it is connected to your private lateral, you can apply to the
          City&rsquo;s program without a deposit. If the test is negative for both, the City
          says the cause is something else, such as rotting tree roots, erosion or animal
          burrowing, and the homeowner is responsible for filling the hole. Source: City of
          Florissant program page.
        </p>
      ),
    },
    {
      question: 'Does the program cover septic systems, condominiums or multi-family buildings?',
      answer: (
        <p>
          Septic tank and private treatment systems are not eligible, though a $50 fee may
          still appear on the tax bill; the City says refunds may be requested from January
          1 through December 31 for the previous paid tax year. The program does not apply
          to commercial or industrial property. The City&rsquo;s page says it does not apply
          to multi-family properties with more than six dwelling units and, separately, to
          condominium units with six or more units. Those two wordings differ at exactly six
          units, so ask the Engineering Division about your building. Source: City of
          Florissant program page.
        </p>
      ),
    },
    {
      question: 'Can a home sale speed up a lateral repair?',
      answer: (
        <p>
          No. The City says a pending home sale does not expedite a repair and that the
          program is not intended to satisfy a home sale contingency. A new owner can be
          eligible if the real estate taxes are paid in full, and must confirm in writing
          support for an approved repair that may continue past closing. Source: City of
          Florissant program page.
        </p>
      ),
    },
    {
      question: 'Do buyers need a City inspection in Florissant?',
      answer: (
        <p>
          The City says a property can be sold &ldquo;as is&rdquo; without a City
          inspection, but the buyer must then obtain and pay for the inspection and an
          occupancy permit before anyone moves in or occupies the property. The page does
          not mention sewers, so a buyer who wants evidence of the lateral has to ask for
          it. Source: City of Florissant occupancy inspection page.
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
    title: 'Schedule a sewer camera inspection in Florissant.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a City lateral program question, or a Florissant property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'MSD Project Clear: Lateral line (updated August 19, 2025)',
        href: LATERAL_URL,
      },
      {
        label: 'MSD Project Clear: Sewer backups (updated August 19, 2025)',
        href: BACKUP_URL,
      },
      {
        label: 'MSD Project Clear: Brookshire Sanitary Relief (updated August 20, 2025)',
        href: BROOKSHIRE_URL,
      },
      {
        label:
          'MSD Project Clear: Wastewater system improvements (updated August 7, 2026; Lindsay Lane schedule tentative)',
        href: WASTEWATER_URL,
      },
      {
        label: 'City of Florissant: Sewer Lateral Insurance Program (undated)',
        href: FL_PROGRAM_URL,
      },
      {
        label: 'City of Florissant: Engineering Division (undated)',
        href: FL_ENGINEERING_URL,
      },
      { label: 'City of Florissant: Permits (undated)', href: FL_PERMITS_URL },
      {
        label: 'City of Florissant: Occupancy Inspection (undated)',
        href: FL_OCCUPANCY_URL,
      },
      {
        label:
          'City of Florissant: 2026-2030 Consolidated Plan (cites U.S. Census Bureau ACS 2024 5-year estimates)',
        href: FL_PLAN_URL,
      },
    ],
    lastReviewed: '2026-10-02',
    closingNote:
      'Official guidance can change, so confirm details with MSD or the City for your address.',
  },
  servicePageIds: [
    id('sl-florissant-cleaning'),
    id('svc-stl-sewer-lateral-inspection-reporting'),
  ],
}
