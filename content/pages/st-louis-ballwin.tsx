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
 * Ballwin, MO location page (`loc-stl-ballwin`).
 *
 * Full rich composition, replacing the thin inline entry that used to live
 * in `st-louis.tsx`. Same structure as the Chesterfield module (uniform
 * municipality pages): only copy, data, links and image slots differ. The
 * program terms were read from the City of Ballwin's Sewer Lateral Repair
 * Program page on 2026-10-01 (DEC-072, DEC-110).
 *
 * ⚠ BUSINESS FACTS HERE: phone, hours and the founding year come from the
 * business constants or are owner-confirmed (family-operated since 2011,
 * the four St. Louis association affiliations). Hours follow DEC-083
 * (8:00 am open). The MSD and City numbers are theirs, labelled as theirs.
 * No licence, certification or insurance claim is made for The Sewer Pros.
 * The dollar amounts ($28, $4,500, $7,500, $150) are the City's published
 * program terms, never prices.
 *
 * ⚠ LOCAL FACTS ARE BALLWIN'S ONLY. Nothing from the St. Louis City or
 * Chesterfield pages is carried over.
 *
 * ⚠ IMAGES: only existing approved assets render (the market hero as the
 * backdrop, plus the nine service-card artworks). Every other slot is
 * defined in `IMAGE_SLOTS` and renders nothing until a real photo exists.
 * Nothing on this page renders an `ImagePlaceholder`.
 *
 * TODO(primary-source): the 1976 median year built is owner-approved; check
 * it against Census tables B25034 and B25035 (see `housingAge`).
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from `st-louis-chesterfield.tsx`; extract a shared module in a
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
    id: 'ballwin-hero',
    ratio: '16:9',
    alt: 'Technician with a sewer camera at a Ballwin, MO home',
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
    alt: 'Ballwin home exterior (background)',
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
      label: 'How pre-purchase inspection works',
      pageId: id('sl-ballwin-prepurchase'),
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
    { value: 'ballwin', label: 'Ballwin, MO' },
    { value: 'other-st-louis-county', label: 'Other St. Louis County, MO' },
    { value: 'st-louis-city', label: 'St. Louis City, MO' },
    { value: 'other-st-louis-area', label: 'Other St. Louis area' },
  ],
  defaultLocationValue: 'ballwin',
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
const REPORT_ISSUE_URL = `${MSD_BASE}/customers/problems-tips/report-issue/`
const VALLEY_URL = `${MSD_BASE}/system_improvements/new-construction/valley-sanitary-relief-phase-iii-13444/`
const CENSUS_URL = 'https://data.census.gov/'
const BW_PROGRAM_URL = 'https://www.ballwin.mo.us/Sewer-Lateral-Repair-Program/'
const BW_PERMITS_URL = 'https://www.ballwin.mo.us/Permits-and-Site-Inspections/'
const BW_OCCUPANCY_URL =
  'https://www.ballwin.mo.us/Building-Permits-and-Occupancy-Inspection-Information/'
const BW_UTILITIES_URL = 'https://www.ballwin.mo.us/Utilities-and-Services/'

export const ballwinContent: LocationPageContent = {
  seoTitle: 'Ballwin, MO Sewer Inspection & Cleaning',
  metaDescription:
    'Sewer camera inspection and cleaning in Ballwin, MO. Who owns the lateral, what the City’s $4,500 lateral program covers, and when evidence helps.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Ballwin, MO',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for Ballwin properties. Get clear evidence of what is happening
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
    // Existing market hero. Its alt describes the file, not a Ballwin job.
    // A Ballwin photo in the `ballwin-hero` slot replaces it.
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
  faqHeading: 'Ballwin sewer questions, answered',
  // DEC-110: FAQPage markup approved for this page.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'MSD owns and maintains the public sewer main. The lateral line from your building, including its connection to that main, is private property, and the owner maintains and repairs it.',
      'Ballwin runs its own Sewer Lateral Repair Program, funded by a $28 annual fee on the real estate tax bill. It pays up to $4,500 per repair, or up to $7,500 where the City approves special circumstances, and it treats clearing roots once a year or less as normal maintenance.',
      'A sewer camera inspection gives you recorded evidence before you clean, buy, or approve major work.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Ballwin', href: '#how-system' },
      { label: 'Older pipe', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City repair program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Ballwin',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Ballwin',
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
    title: 'Who is responsible for the sewer line at a Ballwin property?',
    answer: (
      <p>
        For a property on the{' '}
        <a href={LATERAL_URL} rel="noopener">
          Metropolitan St. Louis Sewer District (MSD)
        </a>{' '}
        system, MSD owns and maintains the public sewer main. The lateral line that
        connects your building to that main, including its connection, is private
        property, and MSD says the owner is responsible for maintaining and repairing it.
      </p>
    ),
    cards: [
      {
        tag: 'Public - MSD',
        title: 'The public sewer main',
        body: 'The City of Ballwin lists MSD as the sewer utility serving its residents, and the City’s lateral program page says the sewer main is owned and maintained by MSD. MSD says it sends a crew for urgent public-system reports and runs a dye test on reported cave-ins to see whether a defect in the public sewer caused them. Which utility serves a specific address, such as a property near a service boundary, should be confirmed by address.',
      },
      {
        tag: 'Private - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the public sewer is private property. Clogs, roots, grease and damage on it are the owner’s to address. Ballwin’s City program defines its eligible lateral as starting at the outside wall of the house and continuing to the MSD sewer main. The “building sewer” under the house is outside that program.',
      },
    ],
    table: {
      caption: 'Public sewer main compared with the private lateral line',
      columns: ['Question', 'Public sewer main', 'Private lateral line'],
      rows: [
        {
          label: 'Who owns it',
          publicMain: 'MSD owns and maintains the sewer main',
          privateLateral:
            'The property owner. MSD states the lateral line and its connection to the public sewer are private property.',
        },
        {
          label: 'Who maintains and repairs it',
          publicMain: 'MSD',
          privateLateral: 'The property owner',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'MSD at (314) 768-6260 for a building backup. MSD says a representative will inspect to see whether the situation qualifies for its limited building-backup assistance program.',
          privateLateral:
            'If the cause is your lateral, you arrange inspection or cleaning. For the City’s repair program, contact the Ballwin Inspections Department at (636) 227-2129.',
        },
        {
          label: 'What help exists',
          publicMain: 'MSD crews for urgent public sewer reports',
          privateLateral:
            'Ballwin’s program may pay for a failed section of a qualifying lateral, up to $4,500 per repair, with up to $7,500 where the City approves special circumstances. Funding and eligibility rules apply.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and where a problem sits.',
        },
      ],
    },
    note: 'This is general information from MSD and City of Ballwin sources, not legal advice. We did not find a published rule on who owns the part of a lateral under the street, so we only repeat MSD’s general statement. Contact MSD or the City to confirm how it applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Ballwin',
    title: 'How sewers work in Ballwin, and what MSD is building here',
    paragraphs: [
      'MSD says most of St. Louis County is served by a separate sewer system, while St. Louis City is served by a combined one.',
      <>
        That is MSD&rsquo;s county-level description.{' '}
        <a href={BACKUP_URL} rel="noopener">
          MSD&rsquo;s page
        </a>{' '}
        does not label every Ballwin parcel, so treat it as background rather than a
        finding about your address.
      </>,
      <>
        In Ballwin and Clarkson Valley, MSD&rsquo;s{' '}
        <a href={VALLEY_URL} rel="noopener">
          Valley Drive Sanitary Relief Phase III project
        </a>{' '}
        is described as replacing about 5,500 feet of undersized wastewater sewer with pipe
        8 to 15 inches wide. MSD says the goal is to reduce basement backups and sewer
        overflows, which occur when sewers become overloaded during intense rainfall.
      </>,
      'MSD’s project page gives a tentative schedule with construction estimated to begin in Fall 2024 and last about 24 months, so check MSD for the current status.',
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
    eyebrow: 'Older pipe and your lateral',
    title: 'Older clay laterals, and what a camera can find',
    paragraphs: [
      'Ballwin says most older sewer laterals in the city are clay pipe, which tends to crack, break, separate at joints and let roots in, and those defects can exist while the line still works normally.',
      // TODO(primary-source): re-check 1976 median year built against Census tables
      // B25034 and B25035 for Ballwin city, Missouri.
      'In the U.S. Census Bureau’s American Community Survey 2019-2023 5-year estimates, the median year built for homes in the City of Ballwin is 1976. That figure describes the city as a whole, not every address MSD serves.',
      'A drain that still works is not proof of a sound pipe. Ballwin’s own program rule shows why the difference matters: roots that need clearing more than once a year are treated as a covered repair, while roots controlled by clearing once a year or less are treated as normal maintenance. A camera shows which situation your line is in.',
      // The shared type has no source-note field, so the note is the last paragraph.
      'Housing-age figure: U.S. Census Bureau, American Community Survey 2019-2023 5-year estimates, City of Ballwin. Pipe condition statements: City of Ballwin Sewer Lateral Repair Program page. The table below is general context, not a finding about any one home.',
    ],
    table: {
      caption: 'What a camera can find on an older lateral',
      columns: ['What a camera can find', 'What it looks like', 'Why it matters in Ballwin'],
      rows: [
        [
          'Cracks or breaks',
          'A split or missing section of pipe wall',
          'The City names breaks in clay pipe as a defect that can lead to blockages',
        ],
        [
          'Joint separation',
          'A gap or offset where two pipe sections meet',
          'The City names separated joints as a way roots enter',
        ],
        [
          'Roots',
          'Fine roots entering at a gap or joint',
          'The City looks at how often roots must be cleared',
        ],
        [
          'Blockage with an intact pipe',
          'Grease or debris with no visible defect',
          'Cleaning, not repair, may be what the line needs',
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
      links: [
        { label: 'What MSD says about sewer backups', href: BACKUP_URL },
        { label: 'MSD Report an Issue', href: REPORT_ISSUE_URL },
      ],
    },
    secondaryAgency: {
      label: 'City of Ballwin Inspections and Public Works',
      phone: { label: '(636) 227-2129', href: 'tel:+16362272129' },
      text: 'Inspections, at (636) 227-2129, handles questions about the Sewer Lateral Repair Program, building permits and occupancy inspections. Public Works, at (636) 227-9000, takes questions about sanitary sewer repair permits and excavation in the street right-of-way. The City lists its Government Center as open Monday - Friday, 8 a.m. to 5 p.m., excluding holidays. These are the City’s numbers, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your private lateral. ${contact.phone}, Monday - Friday, 8:00 am - 4:00 pm.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral repair program',
    title: 'Using an inspection with Ballwin’s Sewer Lateral Repair Program',
    lede: 'Ballwin’s program can pay for repair of a failed lateral section, up to $4,500 per job, and up to $7,500 where the City approves special circumstances such as deep excavation or street cutting. The City says it is not a warranty program, and it treats root clearing once a year or less as normal maintenance.',
    paragraphs: [
      'Ballwin voters approved a $28 annual fee in April 1999. It is collected with the real estate property tax and deposited in a fund that is designated only for sewer lateral repair.',
      'The City says the program is meant to help residents with problems that, if not repaired, would leave them unable to live in the home. Normal wear is not covered while the lateral still functions.',
      'Roots that need clearing more than once a year are a covered repair. Roots that annual clearing can control are normal maintenance. An application that shows only roots or other minor defects must document a history of clearing blockages more than once a year.',
      'How payment works depends on funding. If program funds are available, the program contractor bills the City directly and the homeowner pays anything above the $4,500 cap. If funds are exhausted for the year, the homeowner pays the contractor and is reimbursed up to $4,500 when funds become available. The City tells applicants about fund availability when they apply.',
      'Terms shown are from the City’s Sewer Lateral Repair Program page, which is undated. The City’s pages do not state current funding availability. Confirm current terms, the fee and funding with the Inspections Department before you apply.',
    ],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City program covers',
      items: [
        'Excavation and repair of the failed section of the sewer lateral',
        'Backfill and restoration by grading into a mound for settlement, with seed and straw',
        'Removal and hauling of construction and pavement materials',
        'Patching of private driveways, sidewalks, public sidewalks, curbs and street pavement',
      ],
    },
    doesNotCover: {
      title: 'What it does not cover',
      items: [
        'The “building sewer” located under the house',
        'Normal wear and usage while the lateral still functions',
        'Roots that annual maintenance can control, when the pipe otherwise flows',
        'The cost of cabling to clear a blockage or to document a failure',
        'The cost of a video of the lateral to document a problem',
        'Removal, replacement or loss of trees or shrubs, and any future settlement of the trench',
        'Damage to or restoration of adjoining private property or utilities',
        'Costs above the $4,500 cap, unless the City approves a higher amount for special circumstances',
      ],
    },
    steps: {
      title: 'How the City program works, in four steps',
      steps: [
        {
          title: 'Document the problem',
          body: 'Gather documentation that the lateral has a structural problem that cabling cannot permanently correct, or that backups will likely continue. If cabling cannot open the line, include the paid invoices from the cabling contractors describing what they found.',
        },
        {
          title: 'Apply through MyGov',
          body: 'Submit the application on the City’s MyGov portal with the $150 application fee and your documentation.',
        },
        {
          title: 'The City reviews',
          body: 'The City reviews the application and tells you whether it is approved. If approved, you call the program contractor, and the contractor, you and the City sign a contract. No bids are necessary.',
        },
        {
          title: 'Repair, inspection and payment',
          body: 'The contractor obtains a plumbing permit before work begins. The City inspects the finished work and measures the cost, and payment follows the funding rules above.',
        },
      ],
    },
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'The program does not pay for video documentation, and the City decides eligibility from the documentation you submit. An independent inspection gives you your own recorded evidence of the line’s condition, which can help you understand a recurring blockage or compare a repair recommendation before you spend money. Ask the Inspections Department what documentation it accepts.',
        'Ballwin’s program uses its own City-approved contractor. The Sewer Pros does not perform repairs or replacements.',
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
    eyebrow: 'Buying in Ballwin',
    title: 'Sewer inspection before buying a Ballwin home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover.',
    // `body` is a single string in the shared type, so the two source
    // paragraphs are joined into one.
    body: 'Ballwin requires an inspection and an Occupancy Permit before a new resident, tenant or business occupies a house, condominium, apartment or commercial building. In the City materials we reviewed, we found no sewer lateral inspection or certification requirement tied to that process, so a buyer who wants evidence has to ask for it. Ballwin also says its Sewer Lateral Repair Program is not intended to satisfy a home sale contingency. When a buyer’s lateral inspection notes defects but the line has no history of the repeated blockage or failure the program looks for, the City says the repair is not covered. A new owner who later has a qualifying problem can apply under the normal criteria. Ask your agent and the Inspections Department how that fits your timeline. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      {
        label: 'How a pre-purchase sewer inspection works',
        pageId: id('sl-ballwin-prepurchase'),
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
    body: 'Ballwin is in St. Louis County, and St. Louis City is a separate jurisdiction with its own rules. Lateral programs and sewer details differ by municipality, so terms and costs change from place to place.',
    items: [
      {
        title: 'Chesterfield',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-chesterfield'),
      },
      {
        title: 'St. Louis City',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-st-louis-city'),
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
      question: 'Who is responsible for a sewer lateral in Ballwin?',
      answer: (
        <p>
          MSD states that the lateral line and its connection to the public sewer are
          private property, so the property owner is responsible for maintaining and
          repairing them. Ballwin&rsquo;s City program can help pay for qualifying repairs
          under its own rules, but it is a cost program, not a change in who owns the
          lateral. Sources: MSD lateral line page; City of Ballwin program page.
        </p>
      ),
    },
    {
      question: 'Does Ballwin have a sewer lateral repair program?',
      answer: (
        <p>
          Yes. The City runs a Sewer Lateral Repair Program funded by a $28 annual fee
          collected with the real estate property tax, which Ballwin voters approved in
          April 1999. The City says it helps with failures that would leave residents
          unable to live in the home, not normal wear. The program does not cover the
          building sewer under the house. Source: City of Ballwin program page.
        </p>
      ),
    },
    {
      question: 'How much does Ballwin’s lateral program pay?',
      answer: (
        <p>
          The City&rsquo;s standard cap is $4,500 per repair. The City may reimburse up to
          $7,500 for special circumstances such as deep excavation or street cutting and
          repair, or others approved by the City Administrator or designee. If the repair
          costs more than the cap, the homeowner pays the excess. If program funds are
          exhausted for the year, the owner pays the contractor and is reimbursed up to
          $4,500 when funds become available. Confirm current terms and funding with the
          Inspections Department. Source: City of Ballwin program page.
        </p>
      ),
    },
    {
      question: 'Do tree roots qualify for Ballwin’s program?',
      answer: (
        <p>
          Only when they are a recurring problem. The City treats roots that can be cleared
          once a year or less as normal maintenance and does not fund them. Roots that need
          clearing more than once a year are a covered repair, and an application showing
          only roots or minor defects must document a history of clearing more than once a
          year. Source: City of Ballwin program page.
        </p>
      ),
    },
    {
      question: 'What does a Ballwin owner submit to apply?',
      answer: (
        <p>
          The owner applies on the City&rsquo;s MyGov portal with a $150 application fee
          and documentation of a structural problem that cabling cannot permanently
          correct, or that backups will likely continue. If the line cannot be opened by
          cabling, the application should include paid invoices from the cabling
          contractors describing the problem. Source: City of Ballwin program page.
        </p>
      ),
    },
    {
      question: 'Will the program pay for a problem found in a home-sale inspection?',
      answer: (
        <p>
          Not unless the line meets the program&rsquo;s criteria. The City says the program
          is not intended to satisfy a home sale contingency, and that defects noted in a
          buyer&rsquo;s lateral inspection with no history of meeting its criteria are not
          covered. A new owner who later has a qualifying problem can apply. Source: City of
          Ballwin program page.
        </p>
      ),
    },
    {
      question: 'Does Ballwin require an inspection when a home is sold or rented?',
      answer: (
        <p>
          Yes, a general one. The City says occupied buildings must be inspected and
          certified for compliance with the Ballwin Housing Code before a new resident,
          tenant or business occupies them, and new occupants need an Occupancy Permit. We
          found no sewer lateral inspection requirement in the City materials we reviewed,
          so this reads as none found rather than a confirmed absence. Source: City of
          Ballwin building permits and occupancy inspection page.
        </p>
      ),
    },
    {
      question: 'What should I do if sewage backs up in my Ballwin building?',
      answer: (
        <p>
          MSD tells customers with a building backup to call 314-768-6260 so it can inspect
          and determine whether the situation qualifies for its limited assistance program.
          MSD treats raw sewage inside or outside a house, missing manhole covers and
          flooded streets as urgent reports. Source: MSD sewer backups page.
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
    title: 'Schedule a sewer camera inspection in Ballwin.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a City lateral program question, or a Ballwin property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label:
          'MSD Project Clear: Valley Drive Sanitary Relief Phase III (updated November 10, 2025; schedule tentative)',
        href: VALLEY_URL,
      },
      {
        label: 'City of Ballwin: Sewer Lateral Repair Program (undated)',
        href: BW_PROGRAM_URL,
      },
      {
        label: 'City of Ballwin: Permits and Site Inspections (undated)',
        href: BW_PERMITS_URL,
      },
      {
        label: 'City of Ballwin: Building Permits and Occupancy Inspection Information (undated)',
        href: BW_OCCUPANCY_URL,
      },
      {
        label: 'City of Ballwin: Utilities and Services (undated)',
        href: BW_UTILITIES_URL,
      },
      {
        label:
          'U.S. Census Bureau: American Community Survey 2019-2023 5-year estimates (City of Ballwin median year built)',
        href: CENSUS_URL,
      },
    ],
    lastReviewed: '2026-10-01',
    closingNote:
      'Official guidance can change, so confirm details with MSD or the City for your address.',
  },
  servicePageIds: [
    id('sl-ballwin-prepurchase'),
    id('svc-stl-sewer-lateral-inspection-reporting'),
  ],
}
