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
 * San Marcos, CA location page (`loc-sd-san-marcos`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `san-diego.tsx`. Same structure as the City of San Diego, Carlsbad, Chula
 * Vista and Escondido modules: only copy, data, links and image slots differ.
 * No review band (no San Diego review dataset) and no housing-age section (no
 * primary Census values for San Marcos city were retrieved). Local facts were
 * read from the City of San Marcos and Vallecitos Water District pages on
 * 2026-10-04. Every one of those pages shows no current date.
 *
 * ⚠ THIS PAGE CORRECTS A SERVICE-PROVIDER CLAIM. The City says it does not
 * provide water or sewer service and that one of three agencies does, depending
 * on location. The old page said Vallecitos serves San Marcos outright. This
 * page never says all of San Marcos is on Vallecitos, never says the City owns
 * or runs the sewer, and makes no claim about any rule, number or boundary of
 * Vista Irrigation District or Rincon del Diablo Municipal Water District.
 *
 * ⚠ REMOVED, NOT CARRIED OVER: the 1996 median year built and 7.7 percent
 * figures (labelled 2019-2023), "among the newest housing in the region", PVC
 * laterals, the bellies and settlement narrative, "periodic maintenance by the
 * homeowner", "appears to fall entirely on the property owner" and
 * "independent special district". None has a primary source.
 *
 * ⚠ DISTRICT NUMBERS ARE THE DISTRICT'S. (760) 744-0460 is Vallecitos's main
 * number and (760) 745-2761 is its water-emergency number, which the district
 * does not describe as a sewer line. "24 hours" is the district's own statement
 * about its Operations and Maintenance Department. No Vallecitos office hours,
 * office address, Engineering email address, sewer-account count or license
 * information is published here.
 *
 * ⚠ SAN MARCOS IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['san-diego-ca']` (DEC-071), never typed.
 *
 * ⚠ NO PERMIT, PAYMENT OR PIPE CLAIMS. The page never says a permit is or is not
 * required to repair an existing lateral, never says the district will pay for
 * any damage, and draws no conclusion about housing age, pipe material or how
 * laterals fail. Ordinance No. 225 appears only in the program lede and FAQ 4,
 * and 284 miles only in the system-explainer scale bullet.
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
 * No slot has a `src` yet and none reuses existing art. Use San Marcos wording
 * in the alt text for `san-marcos-hero` and `final-bg` (for example
 * "Technician with a sewer camera at a San Marcos, CA home") only if the photo
 * is from a San Marcos-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'san-marcos-hero',
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
    // The card type holds one secondary link. The approved San Marcos camera page
    // links back here; /services/sewer-camera-inspection/ is linked from the
    // Service JSON-LD node and the rest of the site.
    secondaryLink: {
      label: 'Sewer camera inspection in San Marcos',
      pageId: id('sl-san-marcos-camera'),
    },
  }),
  card('svc-sewer-cleaning', 'svc-cleaning', {
    title: 'Sewer Cleaning',
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    bestWhen: 'Best when a line is slow or partly blocked.',
    bookingLabel: 'Request Sewer Cleaning',
    // No approved San Marcos cleaning page exists, so this links the service page.
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
    { value: 'san-marcos', label: 'San Marcos, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'san-marcos',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_PW_URL = 'https://www.sanmarcosca.gov/Resident-Services/Public-Works'
const CITY_PERMITS_URL = 'https://www.sanmarcosca.gov/Resident-Services/Permits'
const VWD_ABOUT_URL = 'https://www.vwd.org/about-us'
const VWD_SVC_URL = 'https://www.vwd.org/departments/engineering/water-and-sewer-services'
const VWD_FAQ_URL = 'https://www.vwd.org/departments/engineering/engineering-faqs'
const VWD_WW_URL =
  'https://www.vwd.org/departments/operations-and-maintenance/systems-collection-wastewater-'
const VWD_OM_URL = 'https://www.vwd.org/departments/operations-and-maintenance'
const VWD_CONTACT_URL = 'https://www.vwd.org/about-us/contact'
const VWD_REPORT_URL = 'https://www.vwd.org/i-want-to/report-water-waste'

export const sanMarcosContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in San Marcos, CA',
  metaDescription:
    'Sewer camera inspection, hydro jetting and cleaning in San Marcos, CA. See who serves your address and what Vallecitos says the owner is responsible for.',
  hero: {
    title: 'Sewer Inspection and Cleaning in San Marcos, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and sewer
        cleaning for San Marcos properties. The City of San Marcos says it does not provide sewer
        service, so the first question is which agency serves your address. Where Vallecitos Water
        District serves it, the district says the owner is responsible for the lateral from the
        building through its connection to the district’s main. Get clear evidence of what is inside
        your line before you clean it, buy a home, or approve major work.
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
    // A photo in the `san-marcos-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('san-marcos-hero'),
    slotPlaceholder: placeholderSlot('san-marcos-hero'),
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
          To report a sewage overflow in the public sewer, call the agency that serves your
          address. Vallecitos Water District’s numbers are under &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'San Marcos sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of San Marcos says it does not provide water or sewer service. It names three agencies that serve different parts of the city: Vallecitos Water District, Vista Irrigation District and Rincon del Diablo Municipal Water District. Confirm which one serves your address.',
      'For an address on Vallecitos Water District’s sewer system, the district says the owner is responsible for the lateral from the building through its connection to the district’s main. The district maintains the main.',
      'We found no Vallecitos lateral repair, grant or reimbursement program, and no rule requiring a sewer inspection when a home is sold. That is “none found” in the pages we reviewed, not a confirmed absence.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in San Marcos', href: '#how-system' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'Lateral program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in San Marcos',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in San Marcos',
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
    title: 'Who is responsible for the sewer line at a San Marcos property?',
    answer: (
      <>
        <p>
          It depends on which agency serves the address, and the City of San Marcos is not the
          sewer provider. The City says it does not provide water or sewer service and that one of
          three agencies does, depending on location. For a property on Vallecitos Water District’s
          sewer system, the district says the owner is responsible for the sewer lateral, the pipe
          from the home or building to the district’s main, through its point of connection to that
          main. The district maintains the main.
        </p>
        <p className="mt-4">
          The rules on this page apply to addresses on Vallecitos Water District’s sewer system.
          The City also names Vista Irrigation District and Rincon del Diablo Municipal Water
          District as agencies serving other parts of San Marcos, and we did not find a map that
          assigns every San Marcos parcel to one of the three. Vallecitos says its{' '}
          <a href={VWD_FAQ_URL} rel="noopener">
            Engineering Department
          </a>{' '}
          can tell you whether a parcel is inside its boundary. If another agency serves your
          address, ask that agency what applies; we make no claim about its rules.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - District',
        title: 'The public sewer main',
        body: 'Vallecitos Water District says it provides water, wastewater and reclamation services to San Marcos and Lake San Marcos, to parts of Carlsbad, Escondido and Vista, and to other unincorporated North County areas. For its sewer system, the district says it maintains the sewer mains.',
      },
      {
        tag: 'Property - Owner',
        title: 'The sewer lateral',
        body: 'Vallecitos uses “sewer lateral” for the pipe that carries wastewater from a home or building to the district’s main sewer line. It says lines installed to serve private properties are the owner’s responsibility, including the operation, maintenance and repair of the lateral from the building through its connection to the main.',
      },
    ],
    table: {
      caption: 'Public sewer main compared with the lateral line',
      columns: ['Question', 'Public sewer main', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: 'Vallecitos Water District, for addresses on its sewer system.',
          privateLateral: 'The property owner.',
        },
        {
          label: 'Where it ends',
          publicMain: 'The main, which the district maintains.',
          privateLateral:
            'The owner’s responsibility runs from the building through the lateral’s connection to the district’s main.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'The agency that serves the address. For Vallecitos addresses, the district’s main number is (760) 744-0460. See “Who to call”.',
          privateLateral:
            'A contractor you choose for work on the lateral. Vallecitos says it does not install private water or sewer connections. Ask Vallecitos Engineering which approvals apply before any work.',
        },
        {
          label: 'What help exists',
          publicMain: 'The district maintains its mains.',
          privateLateral:
            'We found no Vallecitos program for repairing or replacing an existing lateral.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection records the visible condition of the line and where along it a condition sits.',
        },
      ],
    },
    note: 'This is general information from City of San Marcos and Vallecitos Water District sources, not legal advice. Contact the agency that serves your address to confirm how its rules apply.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in San Marcos',
    title: 'How sewers work in San Marcos',
    paragraphs: [
      'In San Marcos, sewer service comes from water districts rather than the City. For addresses on Vallecitos Water District’s system, the district’s own pages describe how it is run.',
      <>
        <strong>A district, not the City.</strong> Vallecitos Water District says it provides
        water, wastewater and reclamation services across San Marcos, Lake San Marcos, parts of
        Carlsbad, Escondido and Vista, and other unincorporated North County areas.
      </>,
      <>
        <strong>Scale.</strong> The district reports more than 284 miles of sewer pipe and four
        lift stations across its whole service area, not only San Marcos.
      </>,
      <>
        <strong>Rainwater.</strong> The district says rainwater can enter its sewer lines and that
        reducing that inflow helps prevent sewer spills during rain events.
      </>,
      <>
        <strong>Smoke testing.</strong> To find where rainwater gets in, the district says it
        smoke-tests its sanitary sewer lines for cracks and other openings. It describes the testing
        as an assessment of the district’s system rather than private systems, although problems in
        private systems may sometimes show up. That makes it a test of district lines, not an
        inspection of your lateral.
      </>,
      <>
        <strong>Which agency serves an address.</strong> The City says service depends on location,
        and we did not find a map that assigns every parcel. Vallecitos says its Engineering
        Department can tell you whether a parcel is inside its boundary.
      </>,
      'The pages we reviewed do not say whether the system is combined or separate, and they do not give an age for the sewer mains or laterals serving any neighborhood. We make no claim about either.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line, the connection to the main or the district’s responsibility begins.',
    },
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'District main or private lateral? Start with the right contact.',
    paragraphs: [
      'Call the agency that serves your address. The City of San Marcos directs residents to the applicable agency for water or sewer service and problem reporting, and for addresses on Vallecitos Water District’s system that is the district. If the district or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // San Marcos has one agency with rules on this page, so Vallecitos is `agency`
    // and there is no `secondaryAgency`. The panel type holds one phone per panel,
    // so the water-emergency number is plain text in the paragraph, labelled as the
    // district's.
    agency: {
      label: 'Vallecitos Water District',
      phone: { label: '(760) 744-0460', href: 'tel:+17607440460' },
      text: 'This is the district’s main number, published on its contact page. The district’s website says to call 911 for emergencies such as a sewer spill, and says its Operations and Maintenance Department, which handles district water and sewer infrastructure, is on call 24 hours a day, seven days a week. The district also publishes (760) 745-2761 for water-related emergencies after hours and on holidays; its page does not describe that number as a sewer line, so we do not present it as one. These are the district’s numbers and statements, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders a
  // none-found lede with two lists. Fields map: lede = opening, whoCanApply = who
  // these rules apply to, covers = what the district publishes about private
  // lines and connections, doesNotCover = what we did not find, no steps, no
  // afterSteps, callout = before you rely on this, closing = the last paragraph.
  // The section component fixes the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'Lateral program',
    title:
      'We found no Vallecitos lateral repair program, and the district says the lateral is the owner’s',
    lede: 'We did not find a lateral repair, replacement, grant or reimbursement program from Vallecitos Water District on the district pages we reviewed (Engineering, Operations and Maintenance, Customer Service and its request pages). That is “none found”, not a statement that none exists, and the district’s pages carry no current date. The one reimbursement the district describes is a reimbursement agreement for an owner who pays for a qualifying main-line extension that could serve future parcels, under District Ordinance No. 225. That is a main extension, not help with an existing lateral. The City says it does not provide sewer service.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the district publishes about private lines and connections',
      items: [
        'The district maintains its sewer mains. Lines installed to serve private properties are the owner’s responsibility.',
        'The owner is responsible for the lateral’s operation, maintenance and repair from the building through its connection to the district’s main.',
        'The district does not install private water or sewer connections. A private contractor the owner selects does that work, at the owner’s expense, and district personnel inspect it.',
        'For a new sewer connection where a main is available at the property’s frontage, the district says it requires a plan check, approved plans, paid fees and an inspection deposit.',
        'Each premise needs its own sewer lateral connection, and one lateral may not serve more than one assessor’s parcel number.',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A district grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral.',
        'A district inspection requirement for existing laterals.',
        'A statement that every repair or replacement of an existing lateral needs a district permit, a City building permit or a City right-of-way permit. The connection rules above describe new connections.',
        'A district policy on damage to a private lateral that the district caused.',
        'A sewer-specific after-hours number for the district.',
        'A map that assigns every San Marcos parcel to one of the three agencies.',
        'A statement of whether the system is combined or separate.',
      ],
    },
    whoCanApply: {
      title: 'Who these rules apply to',
      paragraphs: [
        'Owners of a property whose sewer lateral connects to Vallecitos Water District’s sewer main.',
        'Properties served by another agency are outside this page. Ask that agency.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Confirm which agency serves your address before you apply any rule on this page, and ask Vallecitos Engineering which approvals apply before you pay for work on a lateral. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review the district requires. The district’s pages show no current date, so confirm details with the district.',
      ],
    },
    closing:
      'Nothing we reviewed says any agency pays for our services. The Sewer Pros does not perform repairs or replacements and does not arrange reimbursement.',
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
    eyebrow: 'Buying in San Marcos',
    title: 'Sewer inspection before buying a San Marcos home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. In San Marcos the first question is which agency serves the property. Where Vallecitos Water District serves it, the district says the lateral is the owner’s from the building through its connection to the main, so a defect found after closing falls to the new owner under the district’s published rule.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one and the Engineering Department is named without a link.
    body: 'We did not find a rule from Vallecitos Water District, or on the City of San Marcos pages we reviewed, that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. Three practical points. Confirm which agency serves the address before you rely on any rule on this page. Where Vallecitos serves the parcel, the district says its Engineering Department takes requests for as-built records, handled first-come, first-served, with charges for hard copies. And the same department can tell you whether a parcel is inside its sewer boundary. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer camera inspection in San Marcos', pageId: id('sl-san-marcos-camera') },
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
    ],
    cta: { label: 'Schedule a Pre-Purchase Sewer Inspection' },
    agents: {
      eyebrow: 'For agents and inspectors',
      title: 'Working with real estate professionals',
      body: 'We provide documented reports and video your clients can keep. Findings are informational and not legal advice.',
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
    body: 'This page covers the City of San Marcos only. Sewer agencies and lateral rules differ across San Diego County, and Vallecitos Water District also serves parts of Carlsbad and Escondido, so check the page for your address.',
    items: [
      { title: 'San Diego', description: 'Local sewer details', pageId: id('loc-sd-san-diego') },
      { title: 'Carlsbad', description: 'Local sewer details', pageId: id('loc-sd-carlsbad') },
      { title: 'Escondido', description: 'Local sewer details', pageId: id('loc-sd-escondido') },
      { title: 'Oceanside', description: 'Local sewer details', pageId: id('loc-sd-oceanside') },
      { title: 'Chula Vista', description: 'Local sewer details', pageId: id('loc-sd-chula-vista') },
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
      question: 'Who provides sewer service in San Marcos?',
      answer: (
        <p>
          The City of San Marcos says it does not provide water or sewer service. It says one of
          three agencies provides it depending on location: Vallecitos Water District, Vista
          Irrigation District or Rincon del Diablo Municipal Water District. Vallecitos says it
          provides water, wastewater and reclamation services to San Marcos, Lake San Marcos, parts
          of Carlsbad, Escondido and Vista, and other unincorporated North County areas. We did not
          find a map that assigns every parcel to one of the three agencies, so confirm the agency
          for your address before you rely on any rule. Sources: City of San Marcos Public Works
          page; Vallecitos Water District About page.
        </p>
      ),
    },
    {
      question:
        'Is the sewer lateral the owner’s at a Vallecitos-served San Marcos property, and where does that end?',
      answer: (
        <p>
          For a property served by Vallecitos Water District, yes. The district says the owner is
          responsible for the sewer lateral, the pipe from the home or building to the district’s
          main, including its operation, maintenance and repair, from the building through the point
          of connection to the main. The district says it maintains the sewer mains and that lines
          installed to serve private properties are the owner’s responsibility. We did not find a
          published district statement that carves out the part of a lateral under a street or other
          public right-of-way, so ask Vallecitos Engineering about your alignment before you plan
          work. Sources: Vallecitos Water District wastewater collection page; Vallecitos Water
          District water and sewer services page.
        </p>
      ),
    },
    {
      question: 'How do I find out which agency serves my San Marcos address?',
      answer: (
        <p>
          The City says service depends on location and directs residents to the applicable agency,
          and we did not find a City map that assigns every parcel. Vallecitos says its Engineering
          Department can determine whether a parcel is inside its water or sewer boundary or would
          need annexation before service. If Vallecitos says a parcel is outside its boundary, the
          City names Vista Irrigation District and Rincon del Diablo Municipal Water District as the
          other agencies to check. Sources: City of San Marcos Public Works page; Vallecitos Water
          District Engineering FAQ.
        </p>
      ),
    },
    {
      question: 'Does Vallecitos Water District offer a lateral repair grant or reimbursement program?',
      answer: (
        <p>
          We did not find one on the district’s Engineering, Operations and Maintenance, Customer
          Service or request pages. That is “none found”, not a statement that none exists, and the
          district’s pages carry no current date. The only reimbursement the district describes is a
          reimbursement agreement for an owner who pays for a qualifying main-line extension that
          could serve future parcels, under District Ordinance No. 225. That concerns main
          extensions, not repairs to an existing lateral. Sources: Vallecitos Water District water
          and sewer services page; Vallecitos Water District Engineering FAQ.
        </p>
      ),
    },
    {
      question: 'Who installs a sewer lateral in the Vallecitos area, and is the work inspected?',
      answer: (
        <p>
          Vallecitos says it does not install private water or sewer connections. A private
          contractor the owner selects installs sewer laterals at the owner’s expense, and district
          personnel inspect the work. For a new sewer connection where a main is available at the
          property frontage, the district says it requires a plan check, approved plans, paid fees
          and an inspection deposit. Each premise needs its own lateral, and one lateral may not
          serve more than one assessor’s parcel number. Those rules describe new connections; we did
          not find where the district covers repairs to an existing lateral. Sources: Vallecitos
          Water District Engineering FAQ; Vallecitos Water District water and sewer services page.
        </p>
      ),
    },
    {
      question: 'Does repairing or replacing an existing lateral need a permit in San Marcos?',
      answer: (
        <p>
          We did not find a published rule that covers every repair or replacement of an existing
          lateral. The district’s connection rules describe new connections, and the City’s permit
          page lists engineering, right-of-way and public-improvement permits without tying them to
          lateral repair. Ask Vallecitos Engineering and the City which approvals apply to your
          address before you plan any work. Sources: Vallecitos Water District water and sewer
          services page; City of San Marcos Permits page.
        </p>
      ),
    },
    {
      question: 'What should I do about a sewer spill or backup in the Vallecitos area?',
      answer: (
        <p>
          The district’s website says to call 911 for emergencies such as a sewer spill. The
          district lists (760) 744-0460 as its main number and says its Operations and Maintenance
          Department is on call 24 hours a day, seven days a week, for district water and sewer
          infrastructure. It publishes (760) 745-2761 for water-related emergencies after hours and
          on holidays, and its page does not describe that number as a sewer line, so we do not
          present it as one. If the district or a plumber points to your lateral, a camera
          inspection can show what is in it. These are the district’s numbers and instructions, not
          ours. Sources: Vallecitos Water District report page; Vallecitos Water District contact
          page; Vallecitos Water District Operations and Maintenance page.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required when buying a San Marcos home?',
      answer: (
        <p>
          We did not find a rule from Vallecitos Water District, or on the City of San Marcos pages
          we reviewed, that requires a sewer lateral inspection, certification or seller disclosure
          when a home is sold. That reads as none found, not a confirmed absence, and it does not
          address state disclosure law. Where Vallecitos serves the parcel, the owner is responsible
          for the lateral through its connection to the main, so a buyer who wants evidence of its
          condition has to ask for it. Vallecitos says its Engineering Department takes requests for
          as-built records. Sources: Vallecitos Water District wastewater collection page;
          Vallecitos Water District water and sewer services page; City of San Marcos Public Works
          and Permits pages.
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
    title: 'Schedule a sewer camera inspection in San Marcos.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or a San Marcos property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
          'City of San Marcos: Public Works (page date not shown; accessed Oct 4, 2026; the page lists the third agency as “Rincon Diablo Water District”)',
        href: CITY_PW_URL,
      },
      {
        label: 'City of San Marcos: Permits (page date not shown; accessed Oct 4, 2026)',
        href: CITY_PERMITS_URL,
      },
      {
        label: 'Vallecitos Water District: About us (page date not shown; accessed Oct 4, 2026)',
        href: VWD_ABOUT_URL,
      },
      {
        label:
          'Vallecitos Water District: water and sewer services (page date not shown; accessed Oct 4, 2026)',
        href: VWD_SVC_URL,
      },
      {
        label:
          'Vallecitos Water District: Engineering FAQs (page date not shown; accessed Oct 4, 2026)',
        href: VWD_FAQ_URL,
      },
      {
        label:
          'Vallecitos Water District: wastewater collection system (page date not shown; accessed Oct 4, 2026)',
        href: VWD_WW_URL,
      },
      {
        label:
          'Vallecitos Water District: Operations and Maintenance (page date not shown; accessed Oct 4, 2026)',
        href: VWD_OM_URL,
      },
      {
        label: 'Vallecitos Water District: Contact (page date not shown; accessed Oct 4, 2026)',
        href: VWD_CONTACT_URL,
      },
      {
        label:
          'Vallecitos Water District: Report water waste (page date not shown; accessed Oct 4, 2026)',
        href: VWD_REPORT_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the agency that serves your address.',
  },
  servicePageIds: [id('sl-san-marcos-camera')],
}
