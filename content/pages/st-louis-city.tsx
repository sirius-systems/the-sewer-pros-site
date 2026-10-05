import Link from 'next/link'
import { getService } from '@/data/services'
import { contact } from '@/data/business/organization'
import { resolveSlotImage, type ImageSlotLike } from '@/lib/image-slots'
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
 * St. Louis City location page (`loc-stl-st-louis-city`).
 *
 * Full rich composition, laid out the same way as the Chesterfield, Ballwin,
 * Florissant and St. Charles pages (same section order, same optional
 * blocks, same slot registry, FAQPage markup on). It replaces the earlier
 * prose-only entry, which carried a "58.4%" housing figure and "licensed
 * plumber" language; neither is reintroduced. The $28 fee is back, now
 * attributed to the City's own program page.
 *
 * ⚠ BUSINESS FACTS HERE: phone, hours and the founding year come from the
 * business constants or are owner-confirmed (family-operated since 2011,
 * the four association affiliations). The hours text follows DEC-083
 * (8:00 am open), not the stale 7:30 on the old site. The MSD number is
 * MSD's, labelled as MSD's, never styled as ours. The program steps come
 * from the City Street Division's own program page (read 2026-10-03). The
 * dollar fee shown on that page is deliberately not repeated here.
 *
 * ⚠ LOCAL FACTS ARE ST. LOUIS CITY'S ONLY. Nothing from the Chesterfield,
 * Ballwin, Florissant or St. Charles pages (their fees, caps, boundaries
 * or application steps) is carried over.
 *
 * ⚠ IMAGES: only existing approved assets render (the market hero as the
 * backdrop, the nine service-card artworks, and the pipe-offset footage
 * photo in the `program-footage` slot). Every other slot is defined in
 * `IMAGE_SLOTS` and renders nothing in a launch build until a real photo
 * exists. Nothing on this page renders an `ImagePlaceholder`.
 *
 * TODO(primary-source): the "about 58%" built-before-1940 figure (57.9% of
 * 174,111 units) is ACS 2019-2023 5-year data as republished by Point2Homes;
 * the Census API and data.census.gov were unreachable. Swap in the B25034
 * table (and a censusTable like St. Charles) when it can be pulled.
 */

const id = (value: string): PageId => value as PageId

const existing = (src: string, alt: string): CardImage => ({
  src,
  alt,
  source: 'Existing site image, reused on this page.',
})

/* ==========================================================================
   Image slots (unfilled)
   ========================================================================== */

/**
 * Registry of the photo slots this page is designed for, the same set the
 * Chesterfield, Ballwin and Florissant pages define.
 *
 * ⚠ A SLOT WITH NO `src` RENDERS NOTHING in a launch build. The rich sections
 * show a text-only layout when an `image` field is undefined. In review
 * builds (`NEXT_PUBLIC_SHOW_IMAGE_SLOTS`) each unfilled slot draws a labelled
 * placeholder. To add a photo later, set `src` and `source` on its slot: one
 * edit, no component change. Photos that show crew, equipment, footage,
 * customers or reports must be real job photos.
 *
 * The hero and the nine service-card slots keep no `src` because those
 * slots currently use existing approved art (the market hero backdrop and
 * `cardImage()`), whose alt text describes a different image than the
 * future photo this registry's `alt` describes.
 */
const IMAGE_SLOTS: readonly ImageSlotLike[] = [
  { id: 'city-hero', ratio: '16:9', alt: 'Technician with a sewer camera at a St. Louis City home', shot: 'Technician feeding a camera into a residential cleanout, truck and monitor in frame' },
  { id: 'svc-camera', ratio: '4:3', alt: 'Sewer camera being fed into a cleanout', shot: 'Camera head and push cable at a cleanout' },
  { id: 'svc-cleaning', ratio: '4:3', alt: 'Sewer cleaning equipment at work at a home', shot: 'Cleaning machine and cable or hose at a cleanout' },
  { id: 'svc-jetting', ratio: '4:3', alt: 'Hydro jetting nozzle ready for use', shot: 'Jetting nozzle and hose at the line' },
  { id: 'svc-cleaning-camera', ratio: '4:3', alt: 'Technician reviewing camera footage after a cleaning', shot: 'Monitor showing a cleaned pipe with crew behind' },
  { id: 'svc-locating', ratio: '4:3', alt: 'Technician using a sewer line locator in a yard', shot: 'Technician with a locator receiver, paint marks on pavement' },
  { id: 'svc-drain', ratio: '4:3', alt: 'Drain cleaning equipment at a fixture', shot: 'Drain machine at a floor or tub drain' },
  { id: 'svc-prepurchase', ratio: '4:3', alt: 'Inspector explaining findings to a home buyer', shot: 'Technician scoping a for-sale property, clipboard visible' },
  { id: 'svc-backup', ratio: '4:3', alt: 'Camera monitor showing the condition of a sewer line', shot: 'Basement floor drain with cleanout access, nothing graphic' },
  { id: 'svc-maintenance', ratio: '4:3', alt: 'Technician on a scheduled sewer maintenance visit', shot: 'Crew member recording a post-cleaning camera pass' },
  { id: 'system-street', ratio: '4:3', alt: 'Residential street with a manhole cover near the curb', shot: 'Ordinary residential street, manhole and curb, no identifiable homes' },
  { id: 'call-cleanout', ratio: '4:3', alt: 'Capped sewer cleanout beside a house foundation', shot: 'Exterior cleanout cap at the base of a house' },
  {
    id: 'program-footage',
    ratio: '4:3',
    alt: 'Sewer camera footage showing a visible offset joint inside a pipe',
    shot: 'Real camera still with distance counter visible, owner consent on file',
    // Filled today with an existing approved site photo (a pipe-offset
    // footage example). A real City job still can replace it.
    src: '/images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-visible-pipe-offset-example-4x3.webp',
    source: 'Existing site image, reused on this page.',
  },
  { id: 'so-inspect', ratio: '4:3', alt: 'Sewer camera entering a cleanout', shot: 'Camera head entering a cleanout, close up' },
  { id: 'so-document', ratio: '4:3', alt: 'Monitor showing recorded footage of a pipe interior', shot: 'Monitor or tablet with the report open beside it, address redacted' },
  { id: 'so-decide', ratio: '4:3', alt: 'Property owner reviewing a printed inspection findings report', shot: 'Technician and homeowner reviewing findings, faces not identifiable' },
  { id: 'buy-buyer', ratio: '4:3', alt: 'Inspector walking a home buyer through sewer inspection findings outside a house', shot: 'Technician at a for-sale property starting a pre-purchase scope' },
  { id: 'buy-agent', ratio: '4:3', alt: 'Real estate agent viewing an inspection report and video on a tablet', shot: 'Report handed to an agent, hands only, redacted' },
  { id: 'final-bg', ratio: '16:9', alt: 'St. Louis City home exterior (background)', shot: 'Crew truck at a residential curb, reel visible, no plate' },
]

function slotImage(slotId: string): CardImage | undefined {
  return resolveSlotImage(IMAGE_SLOTS.find((s) => s.id === slotId))
}

/** The card artwork already approved for the nine core services. */
function cardImage(serviceId: ServiceId): CardImage | undefined {
  return homeServiceCards.find((c) => c.pageId === id(serviceId))?.image
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
      pageId: id('sl-stl-city-camera'),
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
    secondaryLink: { label: 'How hydro jetting works', pageId: id('svc-hydro-jetting') },
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

/**
 * Service select order for the detailed form. Labels come from the service
 * registry, so a renamed service updates here; the two extras have no
 * registry record of their own (the commercial hub, and "Not sure").
 */
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
 * ⚠ HIDDEN UNTIL THE COPY IS APPROVED. The slot is kept so enabling it is
 * one change: replace `CONSENT_LINE` with the approved wording and set the
 * flag to true. Until then neither form renders a consent line. The "Text"
 * contact option itself is unchanged and still carries the existing
 * compliance gap noted in `LeadFormSection`.
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
    { value: 'st-louis-city', label: 'St. Louis City, MO' },
    { value: 'st-louis-county', label: 'St. Louis County, MO' },
    { value: 'other-st-louis-area', label: 'Other St. Louis area' },
  ],
  defaultLocationValue: 'st-louis-city',
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
const SYSTEM_URL = `${MSD_BASE}/what-we-do/two-utilities-in-one/how-our-sewer-system-works/`
const REPORT_URL = `${MSD_BASE}/customers/problems-tips/report-issue/`
const BACKUP_URL = `${MSD_BASE}/customers/problems-tips/sewer-backups/building-backup/`
const SERVICE_AREA_URL = `${MSD_BASE}/glossary/service-area/`
const STL_PROGRAM_URL =
  'https://www.stlouis-mo.gov/government/departments/street/street-division/sewer-lateral-repair-program.cfm'
const STL_PERMIT_URL =
  'https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/plumbing-permit.cfm'
const CENSUS_URL = 'https://data.census.gov/'

export const stLouisCityContent: LocationPageContent = {
  // Non-breaking spaces keep "St. Louis City" on one line in the H1.
  seoTitle: 'Sewer Inspection & Cleaning in St. Louis City, MO',
  metaDescription:
    'Independent sewer camera inspection, locating, hydro jetting and sewer cleaning for St. Louis City properties. Get clear video evidence before major sewer decisions.',
  hero: {
    title: 'Sewer Inspection & Cleaning in St. Louis City, MO',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and
        sewer cleaning for St. Louis City properties. Get clear evidence of what is
        happening inside your sewer line before you make a major decision.
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
    // Existing market hero. Its alt describes the file, not a City job.
    // A City photo in the `city-hero` slot replaces it.
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
  faqHeading: 'St. Louis City sewer questions, answered',
  // DEC-108 approved FAQPage markup for all pages in principle; DEC-113
  // enables it for this page. The ten FAQ entries are visible on the page
  // and the markup is generated from them.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'MSD maintains the public sewer main. The lateral from your building to that main is private property and is normally the owner’s responsibility.',
      'St. Louis City is mostly served by combined sewers, so heavy rain can affect the public system. Only an inspection shows the condition of your own line.',
      'A sewer camera inspection gives you recorded evidence before you clean, buy, or approve major work.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'City sewers', href: '#how-system' },
      { label: 'Home age', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      { label: 'City repair program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in St. Louis City',
    title: 'Sewer Inspection, Diagnostics & Cleaning Services in St. Louis City',
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
    title: 'Who is responsible for the sewer line at a St. Louis City property?',
    answer: (
      <p>
        The{' '}
        <a href={LATERAL_URL} rel="noopener">
          Metropolitan St. Louis Sewer District (MSD)
        </a>{' '}
        maintains the public sewer main. The lateral line that connects your building to
        that main, including its connection, is private property and is normally the
        owner&rsquo;s responsibility to maintain and repair, even where it runs under the
        street or alley.
      </p>
    ),
    cards: [
      {
        tag: 'Public - MSD',
        title: 'The public sewer main',
        body: 'MSD operates the public sewer system serving all of St. Louis City. MSD is an independent regional utility, not a City department. If a backup is caused by the public sewer, MSD makes that repair.',
      },
      {
        tag: 'Private - Owner',
        title: 'The lateral line',
        body: 'The pipe from your building to the main is private, including the portion under the public right-of-way. Clogs, roots, grease and damage on it are the property owner’s to address.',
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
            'The property owner. The lateral and its connection are private property, including under the street or alley.',
        },
        {
          label: 'Who maintains and repairs it',
          publicMain: 'MSD, including repairs when the public sewer caused a backup',
          privateLateral: 'The property owner',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'MSD at (314) 768-6260 for backups, overflows, raw sewage and missing manhole covers',
          privateLateral:
            'MSD investigates reported backups. If the cause is your lateral, you arrange inspection or cleaning.',
        },
        {
          label: 'What help exists',
          publicMain: 'MSD crews for public sewer problems',
          privateLateral:
            'The City’s Sewer Lateral Repair Program may help eligible residential properties of six or fewer units with severe damage under the right-of-way. It does not cover clogs or roots.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection documents the line’s condition and where a problem sits.',
        },
      ],
    },
    note: 'This is general information from MSD and City of St. Louis sources, not legal advice. Contact MSD or the City to confirm how it applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'How the City’s system works',
    title: 'Why St. Louis City sewers behave differently from the rest of the metro',
    paragraphs: [
      'Most of St. Louis City is served by a combined sewer system, where one set of public pipes carries both wastewater and stormwater.',
      <>
        <a href={SYSTEM_URL} rel="noopener">
          MSD describes
        </a>{' '}
        the City&rsquo;s combined sewers as among the oldest in the country, including
        large brick tunnels beneath historic neighborhoods and downtown. Much of the rest
        of MSD&rsquo;s territory, including most of St. Louis County, uses separate
        wastewater and stormwater pipes.
      </>,
      'During intense rain, MSD says combined-sewer capacity can be overwhelmed, which can cause wet-weather backups in basements in affected areas. MSD also notes that many City buildings connect gutters, sump pumps and yard drains to the wastewater sewer, and runs its Get the Rain Out initiative to reroute them.',
      'These are system-level facts. They do not tell you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
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
    title: 'How the age of a St. Louis City home can affect its sewer lateral',
    paragraphs: [
      'About 58% of St. Louis City’s housing units were built in 1939 or earlier, so some City laterals may be very old. Older laterals were commonly made of materials with known long-term wear patterns.',
      'Lateral pipe materials changed over the decades. The ranges in the table are general industry timelines, not a statement about any specific home, and many laterals have been repaired or replaced since they were first installed.',
      'Only an inspection shows what your line is made of and how it is holding up. Housing-age figure: U.S. Census Bureau, American Community Survey 2019-2023 5-year estimates, as reported by Point2Homes.',
    ],
    table: {
      caption: 'Common lateral pipe materials by era',
      columns: ['Material', 'Common era (general)', 'Typical wear pattern'],
      rows: [
        ['Vitrified clay', 'Roughly 1900s to 1970s', 'Joint separation, root intrusion'],
        [
          'Cast iron',
          'Roughly 1900s to 1980',
          'Internal corrosion and scale that narrows the pipe',
        ],
        [
          'Orangeburg (bituminized fiber)',
          'Roughly 1945 to the early 1970s',
          'Ovaling or flattening under soil weight',
        ],
        [
          'PVC / ABS',
          'Standard from the 1970s onward',
          'Rarely material failure; bellies or joint separation from ground movement',
        ],
      ],
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public problem or private line? Start with the right contact.',
    paragraphs: [
      'If sewage is backing up through a floor drain, you smell sewage outside, you see an overflow or a missing manhole cover, MSD asks you to report it right away. MSD investigates whether the cause is the public sewer or your private lateral.',
      'If MSD or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    agency: {
      label: 'MSD Sewer Repair Services and emergency line',
      phone: { label: '(314) 768-6260', href: 'tel:+13147686260' },
      text: 'Published by MSD for public sewer problems, building backups and overflows. This is MSD’s number, not ours.',
      links: [
        { label: 'Report a sewer issue to MSD', href: REPORT_URL },
        { label: 'What to do after a building backup', href: BACKUP_URL },
      ],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your private lateral. ${contact.phone}, Monday - Friday, 8:00 am - 4:00 pm.`,
    },
  },
  municipalProgram: {
    eyebrow: 'City lateral repair program',
    title: 'Using an inspection with the Sewer Lateral Repair Program',
    lede: 'The City program is aimed at severe damage under the public right-of-way, not routine clogs or roots.',
    paragraphs: [
      'Eligibility is limited to residential properties with six or fewer units and fully paid real-estate taxes. The City says back taxes must be paid before a property is eligible.',
      <>
        Replacement of a sewer lateral in the City also requires a{' '}
        <a href={STL_PERMIT_URL} rel="noopener">
          plumbing permit and inspection
        </a>
        , issued to City-certified licensed plumbing contractors.
      </>,
      'Terms shown are from the Street Division’s program page, which is dated 2014. The City says owners of residential property with six or fewer units pay a $28 fee on their real-estate property taxes, which funds repairs under the public right-of-way. Confirm current terms and funding with the Street Division before you apply.',
    ],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City program covers',
      items: [
        'Severe lateral damage under the public right-of-way that causes a cave-in or a backup into the home',
        'Residential properties of six or fewer units with fully paid real-estate taxes',
      ],
    },
    doesNotCover: {
      title: 'What it does not cover',
      items: [
        'Clearing clogs or tree roots on any part of the lateral',
        'Problems outside the public right-of-way, including breaks under private property',
      ],
    },
    steps: {
      title: 'How the City program works, in three steps',
      steps: [
        {
          title: 'Report the problem',
          body: 'The City asks residents to report a cave-in in the right-of-way through its street problem service request page.',
        },
        {
          title: 'Have the line inspected',
          body: 'The City’s page says to hire a licensed City plumber to inspect the line. An independent inspection from The Sewer Pros is separate from this step.',
        },
        {
          title: 'Send the statement and video',
          body: 'Submit the plumber’s statement and video to the Street Department by mail, email or fax. The City’s page lists its mailing address, email address and fax number.',
        },
      ],
    },
    afterSteps: [
      <>
        Contact the{' '}
        <a href={STL_PROGRAM_URL} rel="noopener">
          City of St. Louis Street Division
        </a>{' '}
        to confirm eligibility and what documentation it requires.
      </>,
    ],
    callout: {
      title: 'Where an independent inspection fits',
      paragraphs: [
        'The City’s process asks for a plumber’s statement and video, and the City decides eligibility, so an independent inspection does not replace that step. What it gives you is your own recorded evidence of the line’s condition, which can help you tell a clog or root problem the program does not cover from damage worth raising with the Street Division. Ask the Street Division what documentation it accepts.',
        'If you collect repair bids, the plumbing permit rule above applies to whoever does the work. The Sewer Pros does not perform repairs or replacements.',
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
    eyebrow: 'Buying in the City',
    title: 'Sewer inspection before buying a St. Louis City home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover.',
    body: 'Older City properties are served by older infrastructure, and the lateral is the buyer’s responsibility after closing. Recorded findings give you and your agent something concrete to review during your due diligence period.',
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
    body: 'Sewer rules differ across the St. Louis area. The City is mostly combined sewers, much of St. Louis County has separate wastewater and stormwater pipes, and many municipalities run their own lateral repair programs, so terms and costs change from place to place.',
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
        title: 'Florissant',
        description: 'Local lateral program and sewer details',
        pageId: id('loc-stl-florissant'),
      },
      {
        title: 'St. Charles',
        description: 'Its own sewer system, outside MSD',
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
      question: 'Who is responsible for a sewer blockage on private property in St. Louis?',
      answer: (
        <p>
          MSD states that property owners are responsible for maintaining and repairing
          their lateral line. MSD identifies a blockage in the private lateral as a common
          cause of sewer backup and says private lateral issues are not MSD issues.
        </p>
      ),
    },
    {
      question: 'Does MSD fix the sewer line between my house and the street?',
      answer: (
        <p>
          No. MSD maintains the public main. The lateral from your building to the main,
          including its connection, is private property and is normally the owner&rsquo;s
          responsibility. MSD repairs the public sewer if it caused a backup.
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
      question: 'Can a sewer line be cleaned instead of replaced?',
      answer: (
        <p>
          Often, when the problem is roots, grease or debris and the pipe is structurally
          sound. A camera inspection shows which situation you have, so cleaning or hydro
          jetting is chosen on evidence rather than assumption.
        </p>
      ),
    },
    {
      question: 'Should I inspect the sewer before buying a house in St. Louis City?',
      answer: (
        <p>
          It is a smart step for most purchases, especially older homes. The lateral
          becomes your responsibility at closing, and an inspection documents its
          condition first.
        </p>
      ),
    },
    {
      question: 'What are possible signs of a blocked or damaged private lateral?',
      answer: (
        <p>
          MSD lists slow drains, water pooling around basement floor drains, sewage odor
          inside or outside the building, wastewater leaking from a cleanout, and wet
          ground in the yard. A camera inspection can document what is actually happening
          inside the line.
        </p>
      ),
    },
    {
      question: 'Why can heavy rain contribute to sewer backups in St. Louis City?',
      answer: (
        <p>
          MSD says the City is largely served by combined sewers, which carry stormwater
          and wastewater in the same public pipes. Excess stormwater can overload the
          system and contribute to basement backups. This is a system-level explanation,
          not a finding about any one property.
        </p>
      ),
    },
    {
      question: 'Does the City repair every private lateral under a street or alley?',
      answer: (
        <p>
          No. The City states the entire lateral from a home to the MSD main is private
          property. Its Sewer Lateral Repair Program may assist eligible residential
          properties of six or fewer units when qualifying severe damage is beneath the
          public right-of-way, but it does not cover every lateral condition, and the City
          states it does not cover clearing clogs or tree roots anywhere on the lateral.
        </p>
      ),
    },
    {
      question: 'How does a St. Louis City owner apply for the Sewer Lateral Repair Program?',
      answer: (
        <p>
          The City&rsquo;s program page says to report a cave-in in the right-of-way
          through its street problem service request page, hire a licensed City plumber
          to inspect the line, and send the plumber&rsquo;s statement and video to the
          Street Department by mail, email or fax. The program covers only qualifying
          damage under the public right-of-way, and the City decides eligibility.
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
    title: 'Schedule a sewer camera inspection in St. Louis City.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, or a St. Louis City property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'MSD Project Clear: Lateral line (last modified August 19, 2025)',
        href: LATERAL_URL,
      },
      {
        label: 'MSD Project Clear: Report an issue (last modified August 19, 2025)',
        href: REPORT_URL,
      },
      {
        label: 'MSD Project Clear: Building backup (last modified August 19, 2025)',
        href: BACKUP_URL,
      },
      {
        label: 'MSD Project Clear: How our sewer system works (last modified August 19, 2025)',
        href: SYSTEM_URL,
      },
      {
        label: 'MSD Project Clear: Service area (last modified February 10, 2020)',
        href: SERVICE_AREA_URL,
      },
      {
        label:
          'U.S. Census Bureau: American Community Survey 2019-2023 5-year estimates (City housing age, as republished by Point2Homes; primary table check pending)',
        href: CENSUS_URL,
      },
      {
        label:
          'City of St. Louis Street Division: Sewer Lateral Repair Program (page created April 3, 2014)',
        href: STL_PROGRAM_URL,
      },
      {
        label:
          'City of St. Louis Building Division: Plumbing permits (created March 3, 2026; updated March 20, 2026)',
        href: STL_PERMIT_URL,
      },
    ],
    lastReviewed: '2026-10-03',
    closingNote:
      'Official guidance can change, so confirm details with MSD or the City for your address.',
  },
  servicePageIds: [
    id('sl-stl-city-camera'),
    id('svc-stl-sewer-lateral-inspection-reporting'),
  ],
}
