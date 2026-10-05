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
 * City of Henderson, NV location page (`loc-lv-henderson`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `las-vegas.tsx`. Same structure as the Las Vegas (City), Oceanside and San
 * Diego City modules: only copy, data, links and image slots differ. No review
 * band (no Las Vegas-market review dataset). Housing-age section built from
 * primary Census values (ACS 2020-2024, tables B25034 and B25035, Henderson
 * city, read 2026-10-04). Local facts were read from City of Henderson pages
 * on 2026-10-04; none of those pages shows a date.
 *
 * ⚠ THIS PAGE REPLACES UNSUPPORTED AND MISLEADING CLAIMS. The old page said the
 * City's page "describes billing and customer service rather than the treatment
 * relationship" and sent readers to check how Henderson's treatment "relates to
 * the county district" (the cited laterals page says neither and no source ties
 * Henderson to a county district), called the City "more explicit than most" and
 * "unusually clear" with no source for the comparison, labelled 2020-2024
 * housing figures "2019-2023", and gave link text "Henderson Utility Services"
 * for the laterals page. Its PVC, bellies and settlement narrative and "material
 * failure is unlikely at that age" had no source. None of that is carried over.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. 702-267-5900 (Utility Services, the City's
 * 24-hour call center) and 702-267-3600 (Public Works) are tappable in their own
 * labelled panels. 702-267-5900 and 702-267-3600 also appear as plain text in the
 * program list and FAQ; 702-267-3670 (Utility Services development line) appears
 * only in the septic bullet of the sewer explainer. No agency street address,
 * City Hall hours or third-party plan provider is published.
 *
 * ⚠ NO CITY POLICY CLAIMS. The page never says the City repairs a lateral or
 * pays for damage it causes to a private lateral, never says what Henderson
 * Municipal Code 11.08.010 says (only that the City's laterals page cites it for
 * right-of-way permits and that we have not reviewed it), and never says a permit
 * is or is not required for a camera inspection, cleaning, or work wholly on
 * private property. No optional third-party service-line plan is mentioned: the
 * plan the research reported was not on the City pages read.
 *
 * ⚠ HENDERSON IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin or
 * GBP statement appears. Phone, hours and the founding year are read from
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
 * Henderson wording in the alt text for `henderson-hero` and `final-bg` (for
 * example "Technician with a sewer camera at a Henderson, NV home") only if the
 * photo is from a Henderson-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'henderson-hero',
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
    // No approved Henderson camera page exists, so this links the service page.
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
    // No approved Henderson cleaning page exists, so this links the service page.
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
    { value: 'henderson', label: 'Henderson, NV' },
    { value: 'other-las-vegas-valley', label: 'Other Las Vegas Valley, NV' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'henderson',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_LATERALS_URL =
  'https://www.cityofhenderson.com/government/departments/utility-services/customer-care-center/water-and-sewer-laterals'
const CITY_UTILITY_URL = 'https://www.cityofhenderson.com/government/departments/utility-services'
const CITY_DEV_URL =
  'https://www.cityofhenderson.com/government/departments/utility-services/development'
const CITY_CONTACT_URL = 'https://www.cityofhenderson.com/government/contact-us'
const CITY_FAQ_URL = 'https://clients.comcate.com/faq.php?id=90&faqId=3686'
const CENSUS_B25034_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US3231900'
const CENSUS_B25035_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25035?g=160XX00US3231900'

export const hendersonContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Henderson, NV',
  metaDescription:
    'Sewer camera inspection and cleaning in Henderson, NV. See what the City says about your sewer lateral, who to call, and how old local homes are.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Henderson, NV',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting, sewer
        cleaning and drain cleaning for properties in the City of Henderson. The City says your
        responsibility for the sewer service lateral begins where it connects to the City&rsquo;s
        sewer main in the street, so get clear evidence of what is inside your line before you
        clean it, buy a home, or approve major work.
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
    // A photo in the `henderson-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('henderson-hero'),
    slotPlaceholder: placeholderSlot('henderson-hero'),
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
      note: (
        <>
          To report a sewer emergency in the City, call the City of Henderson&rsquo;s 24-hour call
          center. Its number is under &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Henderson sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of Henderson says your responsibility for the sewer service lateral begins where it connects to the City’s sewer main in the street. On your side, you pay for repairs and cleanup. On the City’s side, the City does, including cleaning main blockages and street or driveway repair after a main blockage.',
      'The City lists hiring a professional to periodically inspect the lateral from the connection to your home among homeowner responsibilities. A camera inspection records what is in the line.',
      'We found no City lateral repair, grant or reimbursement program on the City pages we reviewed.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Henderson', href: '#how-system' },
      // The section component fixes this anchor as `age`.
      { label: 'Homes in Henderson', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'City program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Henderson',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Henderson',
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
    title: 'Who is responsible for the sewer line at a Henderson property?',
    answer: (
      <>
        <p>
          In the City of Henderson, your responsibility for the sewer service lateral begins at the
          point where it connects to the City&rsquo;s sewer main in the street. The City calls that
          point the sewer service connection. If a blockage or break happens on your side of it, the
          City says you are responsible for repairs and all associated costs. If it happens on the
          City&rsquo;s side, the City says it is responsible for repairs and all associated costs.
        </p>
        <p className="mt-4">
          The City&rsquo;s laterals page lists each side&rsquo;s duties. On your side, that includes
          cleanup and repair costs, including street or driveway damage, for a break or blockage
          between the connection and your home. It also lists hiring a professional to periodically
          inspect the lateral from the connection to your home and perform any necessary maintenance
          or repairs. A camera inspection can show what is in the line and where along it a
          condition sits.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The City’s sewer main',
        body: 'The City says it maintains and repairs its sewer main up to your sewer service connection, including cleaning blockages. It says it pays cleanup and repair costs, including street or driveway damage, if a blockage occurs in the City’s sewer main.',
      },
      {
        tag: 'Property - Owner',
        title: 'The sewer service lateral',
        body: 'The City’s own term is the sewer service lateral: the pipe that runs from your home’s plumbing to the City’s sewer main. The City says you maintain and repair it from the sewer service connection up to and including your home’s plumbing.',
      },
    ],
    table: {
      caption: 'The City’s sewer main compared with the sewer service lateral',
      columns: ['Question', 'City’s sewer main', 'Sewer service lateral'],
      rows: [
        {
          label: 'Who maintains it',
          publicMain: 'The City of Henderson.',
          privateLateral: 'The property owner, per the City.',
        },
        {
          label: 'Where it ends',
          publicMain:
            'At your sewer service connection, where the lateral meets the main in the street.',
          privateLateral:
            'Your responsibility begins at that connection and runs to your home’s plumbing.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'The City’s 24-hour call center, 702-267-5900, to report an emergency. For non-emergency concerns, Contact Henderson, the City’s service-request portal.',
          privateLateral:
            'For a problem on your side, the City says you are responsible and lists hiring a professional among your duties.',
        },
        {
          label: 'What help exists',
          publicMain:
            'The City says it pays cleanup and repair costs for a blockage in its own main.',
          privateLateral:
            'We found no City program for repairing or replacing a lateral. See “City program”.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection records the visible condition of the line and where along it a condition sits.',
        },
      ],
    },
    note: 'This is general information from City of Henderson sources, not legal advice. The City’s laterals page carries no update date, so confirm with the City how the rules apply to your address. We did not find a City statement about damage to a private lateral caused by City work beyond its rule that the City is responsible on its side of the connection, so we make no further claim about it.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Henderson',
    title: 'How sewers work in the City of Henderson',
    paragraphs: [
      'Inside the City, the Department of Utility Services is responsible for all facets of water, wastewater and reclaimed water services. The City says the department provides the collection and reclamation of wastewater. The City’s own pages describe the system.',
      <>
        <strong>The City main and your connection.</strong> The City says it maintains and repairs
        its sewer main to your sewer service connection, including cleaning blockages.
      </>,
      <>
        <strong>Main blockages.</strong> The City says it pays cleanup and repair costs, including
        street or driveway damage, when a blockage occurs in its sewer main.
      </>,
      <>
        <strong>Septic properties.</strong> The City’s development notice says existing septic
        customers must connect to City sewer if they need a new septic permit from the Southern
        Nevada Health District for any reason, such as a tank too small for a remodel or addition.
        It also says a state law passed June 6, 2023 (Assembly Bill 220) requires a parcel served by
        Colorado River water from the City to connect to the City’s sewer system. The City gives
        Utility Services, 702-267-3670 (the City’s number), for questions.
      </>,
      'The pages we reviewed do not say whether the system is combined or separate, how old its mains are, or how treatment is arranged, and they describe no recurring local sewer condition. We make no claim about any of them.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where the connection to the City main is, or where the owner’s responsibility begins.',
    },
  },
  // Census counts homes, not sewer pipes. The section component fixes the anchor
  // as `age`. The shared type has no closing-paragraph field, so the attribution
  // and the closing paragraph share `sourceNote` (rendered inside a <p>, hence the
  // block spans).
  housingAge: {
    eyebrow: 'Homes in Henderson',
    title: 'How old are Henderson homes, and what does it tell you about your lateral?',
    paragraphs: [
      'Henderson’s median year built is 2001, according to the U.S. Census Bureau’s American Community Survey (2020-2024 5-year estimates, Henderson city, with a margin of error of 1 year). The 1990s and the 2000s are the two largest decades, with 41,694 and 43,390 housing units. About 60.2 percent of the city’s housing units were built from 1990 to 2009, 82.1 percent in 1990 or later, and 3.1 percent before 1970.',
    ],
    table: {
      caption: 'Henderson housing units by year built',
      columns: ['Built', 'Housing units', 'Share'],
      rows: [
        ['Before 1970', '4,385', '3.1%'],
        ['1970 to 1989', '20,910', '14.8%'],
        ['1990 to 2009', '85,084', '60.2%'],
        ['2010 or later', '30,918', '21.9%'],
        ['Total', '141,297', '100%'],
      ],
    },
    sourceNote: (
      <>
        <span className="block">
          The counts come from Census table{' '}
          <a href={CENSUS_B25034_URL} rel="noopener">
            B25034
          </a>{' '}
          for Henderson city. The groupings and percentages are our arithmetic from the table’s
          rows. The median comes from table{' '}
          <a href={CENSUS_B25035_URL} rel="noopener">
            B25035
          </a>
          . Every estimate has a margin of error; the total’s is about 1,657 units.
        </span>
        <span className="mt-4 block">
          The year a house was built does not tell you the condition or material of its lateral. A
          lateral can be repaired, rerouted or replaced after a house is built, and two houses from
          the same decade can have lines in very different shape. Only an inspection of your line
          can show what is there. The Census figures describe Henderson city as a Census place,
          which may not match every property with a Henderson mailing address or every address the
          City’s sewer system serves.
        </span>
      </>
    ),
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'City emergency, City permit or your own lateral? Start with the right contact.',
    paragraphs: [
      'To report a sewer emergency, the City says to call its 24-hour call center. For a non-emergency water, sewer or drainage concern, the City points to Contact Henderson, its official service-request portal. For work in the public right-of-way, the City says to contact Public Works about a permit. If the City or a contractor points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // Two City panels (`agency`, `secondaryAgency`) and the company, no type
    // change. Each panel is one label, one phone and one text paragraph.
    agency: {
      label: 'City of Henderson Utility Services',
      phone: { label: '702-267-5900', href: 'tel:+1-702-267-5900' },
      text: 'The City directs you to its 24-hour call center at this number to report an emergency. For non-emergency water, sewer or drainage concerns, the City points to Contact Henderson, its official service-request portal on cityofhenderson.com. This is the City’s number and instruction, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of Henderson Public Works',
      phone: { label: '702-267-3600', href: 'tel:+1-702-267-3600' },
      text: 'The City says work in the public right-of-way requires a permit from Public Works under Henderson Municipal Code 11.08.010, and gives this number for questions about permit requirements. This is the City’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${lv.phone}, ${lv.hours}. The Las Vegas Valley is a newer market for us (our longest-running work is in St. Louis and San Diego), and we would rather say that plainly than imply a local track record we have not built here yet.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders a
  // none-found lede with two lists. Fields map: lede = opening, whoCanApply = who
  // these rules apply to, covers = what the City publishes about laterals and
  // permits, doesNotCover = what we did not find, no steps, no afterSteps,
  // callout = before you rely on this, closing = the no-repairs paragraph. The
  // section component fixes the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'City program',
    title:
      'We found no City lateral repair program, and the City says the lateral is the owner’s from the connection',
    lede: 'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of Henderson on the City pages we reviewed (the water and sewer laterals page, the Utility Services page, the development notice and the contact page). That is “none found”, not a statement that none exists. The City’s laterals page tells owners they pay for repairs and cleanup on their side of the sewer service connection and describes no City repair or reimbursement for it.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City publishes about laterals and permits',
      items: [
        'Your responsibility for the sewer service lateral begins where it connects to the City’s sewer main in the street (City water and sewer laterals page, undated).',
        'The City maintains and repairs its main to that connection, including cleaning blockages, and pays cleanup and repair costs, including street or driveway damage, for a blockage in its main.',
        'The owner pays cleanup and repair costs, including street or driveway damage, for a break or blockage between the connection and the home.',
        'The City lists hiring a professional to periodically inspect the lateral from the connection to the home among homeowner responsibilities.',
        'Work in the public right-of-way requires a permit from Public Works under Henderson Municipal Code 11.08.010; the City gives 702-267-3600 (the City’s number) for permit requirements. We have not reviewed the code text.',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral.',
        'A City statement about damage to a private lateral caused by City work, beyond its rule that the City is responsible on its side of the connection.',
        'A City rule on whether work wholly on private property needs a building or plumbing permit or inspection, or that cleaning or a camera inspection needs a permit.',
        'A City program, schedule or reporting requirement for lateral inspections.',
        'A City sewage-backup cleanup or containment procedure beyond its emergency and non-emergency contacts.',
        'A statement of whether the system is combined or separate, or how old it is.',
      ],
    },
    whoCanApply: {
      title: 'Who these rules apply to',
      paragraphs: [
        'Owners of a property served by the City of Henderson sewer system.',
        'Confirm with the City that it serves your address before you rely on any rule on this page.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Confirm with the City that it serves your address, and ask Public Works which approvals apply before you pay for any work in the street or on a lateral. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review the City requires. The City’s pages carry no update date, so confirm details with the City.',
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
    eyebrow: 'Buying in Henderson',
    title: 'Sewer inspection before buying a Henderson home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. The City says your responsibility for the sewer service lateral begins where it connects to the City’s sewer main in the street, and that you pay for repairs and cleanup on your side of that connection, so after closing that responsibility belongs to the owner of the property, which is you.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City of Henderson pages we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. The City lists periodic professional inspection of the lateral among owner responsibilities, so a buyer who wants evidence of its condition can ask for an inspection during the transaction. Two practical points. The City’s FAQ says residents can start, stop or transfer residential water and sewer service in its Customer Portal or by calling its Customer Care Center at 702-267-5900 (the City’s number), and that property managers and real estate agents use the Property Agent Service Request option in the same portal. That FAQ is undated, so confirm the current process with the City. And a locating service or inspection can show where your line runs on the property, which the City pages we reviewed do not map. Findings are informational and not legal advice.',
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
    body: 'This page covers the City of Henderson only. Sewer agencies and lateral rules differ across the Las Vegas Valley, so check the page for your address.',
    items: [
      {
        title: 'Las Vegas',
        description: 'Local sewer details',
        pageId: id('loc-lv-las-vegas'),
      },
      {
        title: 'North Las Vegas',
        description: 'Local sewer details',
        pageId: id('loc-lv-north-las-vegas'),
      },
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
      question: 'Where does my responsibility start in Henderson, and who maintains the City main?',
      answer: (
        <p>
          The City says your responsibility for the sewer service lateral begins at the point where
          it connects to the City’s sewer main in the street, which it calls the sewer service
          connection. From there to your home’s plumbing, the City says you maintain and repair the
          lateral and pay the costs. The City says it maintains and repairs its sewer main up to
          that connection, including cleaning blockages. Its Department of Utility Services is
          responsible for wastewater collection and reclamation in the City. Sources: City of
          Henderson Water and Sewer Laterals page; City of Henderson Utility Services page.
        </p>
      ),
    },
    {
      question: 'Does the City pay if a blockage is in the City sewer main?',
      answer: (
        <p>
          The City’s laterals page says it pays cleanup and repair costs if a sewer blockage occurs
          in the City’s sewer main, including repairing damage to the street or driveway. It says a
          blockage or break on the City’s side of the connection is the City’s to repair, and on
          your side it is yours. To report an emergency, call the City’s 24-hour call center at
          702-267-5900 (the City’s number). We did not find a City statement about damage to a
          private lateral caused by City work beyond its side-of-the-connection rule. Sources: City
          of Henderson Water and Sewer Laterals page; City of Henderson Contact Us page.
        </p>
      ),
    },
    {
      question: 'Does the City of Henderson help pay for lateral repairs?',
      answer: (
        <p>
          We did not find a City-run lateral repair, grant or reimbursement program on the City
          pages we reviewed. That is none found, not a statement that none exists. The City’s
          laterals page says you pay for repairs and cleanup on your side of the sewer service
          connection. We found no City cap, eligibility rule or application process for lateral
          work. Sources: City of Henderson Water and Sewer Laterals, Utility Services, Development
          and Contact Us pages.
        </p>
      ),
    },
    {
      question: 'My house is only twenty years old. Is an inspection worth it?',
      answer: (
        <p>
          Henderson’s median year built is 2001, plus or minus 1 year, and 82.1 percent of housing
          units were built in 1990 or later (ACS 2020-2024 5-year estimates, Henderson city, with
          the percentage from our arithmetic on the Census rows), so a twenty-year-old house is
          close to the city’s median. The year a house was built does not tell you the condition or
          material of its lateral. The City lists hiring a professional to periodically inspect the
          lateral from the connection to the home among owner responsibilities, and a camera
          inspection records what is in the line. Sources: U.S. Census Bureau ACS tables B25035 and
          B25034, Henderson city, Nevada; City of Henderson Water and Sewer Laterals page.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer emergency in Henderson?',
      answer: (
        <p>
          The City’s contact page says to report an emergency by calling its 24-hour call center at
          702-267-5900. For non-emergency water, sewer or drainage concerns, the City points to
          Contact Henderson, its official service-request portal. We did not find a City
          sewage-backup cleanup or containment procedure on the pages we reviewed. If the City or a
          contractor points to your lateral, a camera inspection can show what is in it. These are
          the City’s number and instructions, not ours. Source: City of Henderson Contact Us page.
        </p>
      ),
    },
    {
      question: 'Does lateral work in the public right-of-way need a permit in Henderson?',
      answer: (
        <p>
          For work in the public right-of-way, yes: the City’s laterals page says that under
          Henderson Municipal Code 11.08.010 it requires a permit from the Public Works Department,
          and it gives 702-267-3600 (the City’s number) for permit requirements. We did not find a
          City statement about permits or inspections for work wholly on private property, or for
          cleaning or a camera inspection, so ask Public Works. We have not reviewed the code text.
          Source: City of Henderson Water and Sewer Laterals page.
        </p>
      ),
    },
    {
      question: 'Does Henderson require a sewer inspection when a home is sold?',
      answer: (
        <p>
          We did not find a rule on the City of Henderson pages we reviewed that requires a sewer
          lateral inspection, certification or seller disclosure when a home is sold. That reads as
          none found, not a confirmed absence, and it does not address state disclosure law. The
          City says the sewer service lateral is the owner’s responsibility from the connection, so
          a buyer who wants evidence of its condition has to ask for it. Sources: City of Henderson
          Water and Sewer Laterals, Utility Services, Development and Contact Us pages.
        </p>
      ),
    },
    {
      question: 'How do I transfer water and sewer service when I buy a home in Henderson?',
      answer: (
        <p>
          The City’s FAQ says you can start, stop or transfer residential water and sewer service in
          the City’s Customer Portal, or by calling its Customer Care Center at 702-267-5900 (the
          City’s number). It says property managers and real estate agents should use the Property
          Agent Service Request option in the portal. The FAQ is undated, so confirm the current
          process with the City. Source: City of Henderson FAQ, Water/Sewer Service.
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
    title: 'Schedule a sewer camera inspection in Henderson.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow or clogged drains, unexplained blockages, a repair recommendation you want checked, or a Henderson property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'City of Henderson: Water and Sewer Laterals (page date not shown; accessed Oct 4, 2026)',
        href: CITY_LATERALS_URL,
      },
      {
        label: 'City of Henderson: Utility Services (page date not shown; accessed Oct 4, 2026)',
        href: CITY_UTILITY_URL,
      },
      {
        label:
          'City of Henderson: Utility Services Development (page date not shown; notice cites Assembly Bill 220, passed June 6, 2023; accessed Oct 4, 2026)',
        href: CITY_DEV_URL,
      },
      {
        label: 'City of Henderson: Contact Us (page date not shown; accessed Oct 4, 2026)',
        href: CITY_CONTACT_URL,
      },
      {
        label:
          'City of Henderson: FAQs, Water/Sewer Service (FAQ3686) (the City’s FAQ on its vendor-hosted page; date not shown; accessed Oct 4, 2026)',
        href: CITY_FAQ_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25035, Henderson city, Nevada (accessed Oct 4, 2026)',
        href: CENSUS_B25035_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25034, Henderson city, Nevada (accessed Oct 4, 2026)',
        href: CENSUS_B25034_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote: 'Official guidance can change, so confirm details with the City of Henderson.',
  },
}
