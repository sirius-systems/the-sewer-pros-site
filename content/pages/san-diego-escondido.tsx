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
 * Escondido, CA location page (`loc-sd-escondido`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `san-diego.tsx`. Same structure as the City of San Diego, Carlsbad and Chula
 * Vista modules: only copy, data, links and image slots differ. No review band
 * (no San Diego review dataset). Unlike the other San Diego modules this page
 * has a housing-age section, built from primary Census values (ACS 2020-2024,
 * tables B25034 and B25035, Escondido city) read on 2026-10-04. Local facts were
 * read from the Escondido Municipal Code (eCode360) and City of Escondido pages
 * on 2026-10-04.
 *
 * ⚠ THIS PAGE REMOVES UNSUPPORTED CLAIMS. The old page said the code is "more
 * explicit than most jurisdictions", compared Escondido with Carlsbad and Chula
 * Vista grants, described "suburban expansion" and PVC laterals, and labelled
 * the 1981 median year built with a 2019-2023 vintage. None of that is carried
 * over. The 1981 median year stays, now sourced to ACS 2020-2024.
 *
 * ⚠ A CODE SECTION, NOT A PROGRAM. Section 22-165 is quoted for at most nine
 * words ("up to and including the connection to the main"); the rest is
 * paraphrase. The page never says the City will pay for any damage, never says
 * a grant exists, never says our inspection satisfies the code or replaces the
 * City-present inspection, and never says who may perform lateral repair
 * (section 22-161 and the City FAQ do not reconcile). "Licensed plumber" and
 * "licensed contractor" appear only as the code's own wording.
 *
 * ⚠ ESCONDIDO IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['san-diego-ca']` (DEC-071), never typed. The City's
 * (760) numbers are the City's, each labelled as such.
 *
 * ⚠ HOUSING AGE (M8). Census counts homes, not sewer pipes. The section says so
 * and draws no conclusion about pipe material or lateral condition. The 2012
 * Wastewater Master Plan appears in one dated sentence about City mains and in
 * FAQ 6 only.
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
 * No slot has a `src` yet and none reuses existing art. Use Escondido wording
 * in the alt text for `escondido-hero` and `final-bg` (for example
 * "Technician with a sewer camera at an Escondido, CA home") only if the photo
 * is from an Escondido-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'escondido-hero',
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
    // The card type holds one secondary link. The Escondido cleaning page is the
    // one that must stay linked from here; /services/sewer-cleaning/ is linked
    // from the Service JSON-LD node and the rest of the site.
    secondaryLink: {
      label: 'Sewer cleaning in Escondido',
      pageId: id('sl-escondido-cleaning'),
    },
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
    { value: 'escondido', label: 'Escondido, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'escondido',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const ES_CODE_URL = 'https://ecode360.com/43261005'
const ES_FAQ_URL = 'https://escondido.gov/Faq.aspx?QID=345'
const ES_WW_URL = 'https://www.escondido.gov/701/Wastewater-Collections'
const ES_PLANS_URL = 'https://www.escondido.gov/606/Programs-Plans-Studies'
const ES_WWMP_URL = 'https://library.escondido.org/DocumentCenter/View/4446/Wastewater-Master-Plan-PDF'
const VWD_URL = 'https://vwd.org/departments/engineering/water-and-sewer-services'
const CENSUS_B25034_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US0622804'
const CENSUS_B25035_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25035?g=160XX00US0622804'

export const escondidoContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Escondido, CA',
  metaDescription:
    'Sewer camera inspection, hydro jetting and cleaning in Escondido, CA. See what Municipal Code 22-165 makes the owner responsible for on your lateral.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Escondido, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and sewer
        cleaning for Escondido properties. Section 22-165 of the Escondido Municipal Code puts the
        sewer lateral on the property owner, up to and including the connection to the City’s
        main, so get clear evidence of what is inside your line before you clean it, buy a home,
        or approve major work.
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
    // A photo in the `escondido-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('escondido-hero'),
    slotPlaceholder: placeholderSlot('escondido-hero'),
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
          To report a sewage overflow in the public sewer, call the City. The numbers are under
          &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Escondido sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of Escondido runs the public sewer main for addresses on its system. Section 22-165 of its Municipal Code makes the owner responsible for the lateral “up to and including the connection to the main”.',
      'The code puts every cost of maintaining, repairing, replacing and cleaning the lateral on the owner, and also the cost of verifying that it is broken or damaged. The one exception is damage the owner proves came from City work, shown by a video inspection with a City employee present.',
      'We found no City lateral repair, grant or reimbursement program, and no rule requiring a sewer inspection when a home is sold. That is “none found” in the City pages we reviewed, not a confirmed absence.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Escondido', href: '#how-system' },
      // The section component fixes this anchor as `age`.
      { label: 'Home age', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'Section 22-165', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Escondido',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Escondido',
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
    title: 'Who is responsible for the sewer line at an Escondido property?',
    answer: (
      <>
        <p>
          The property owner is responsible for the lateral, and the City of Escondido is
          responsible for the public sewer main. Section 22-165 of the Escondido Municipal Code
          makes the owner responsible for all maintenance, repair, replacement, cleaning and
          removal of blockages in the sewer connection lateral, and says maintenance of the lateral
          “up to and including the connection to the main” is the private owner’s sole
          responsibility. The one exception: the City may be responsible for repairs only if the
          owner proves the damage resulted from work by the City or a contractor working for the
          City.
        </p>
        <p className="mt-4">
          The City’s rules and numbers on this page apply to addresses on the City of Escondido’s
          sewer system. Parts of Escondido are served by another agency,{' '}
          <a href={VWD_URL} rel="noopener">
            Vallecitos Water District
          </a>
          , and some properties are on septic. Check which applies to your address.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer main',
        body: 'The City of Escondido’s Wastewater Division maintains the public sewer mains and manholes and conveys wastewater to the Hale Avenue Resource Recovery Facility. The City’s FAQ describes the main as the public sanitary sewer main.',
      },
      {
        tag: 'Property - Owner',
        title: 'The sewer connection lateral',
        body: 'The pipe from your building to the main is the lateral. The code’s term is “sewer connection lateral”; the City’s FAQ says “sewer lateral”. Under 22-165(e) it is the owner’s up to and including the connection to the main. The City’s FAQ describes the owner’s part as running from the house up to the point of connection with the public sanitary sewer main.',
      },
    ],
    table: {
      caption: 'Public sewer main compared with the lateral line',
      columns: ['Question', 'Public sewer main', 'Lateral line'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: 'The City of Escondido, through its Wastewater Division.',
          privateLateral:
            'The property owner, at the owner’s cost under section 22-165(a) and (c).',
        },
        {
          label: 'Where it ends',
          publicMain: 'The public sewer main.',
          privateLateral: 'The owner’s duty runs up to and including the connection to the main.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'City Public Works if sewage overflows, or if you cannot tell whether a backup is in the main or the lateral. See “Who to call”. The City’s FAQ says the City will inspect the public main free of charge, and that if the main is clear the owner is told the blockage is probably in the lateral.',
          privateLateral:
            'A plumber or sewer cleaning contractor for work on the lateral. Ask the City which permits apply before any repair.',
        },
        {
          label: 'What help exists',
          publicMain:
            'The City maintains the main. We found no City lateral grant or reimbursement program.',
          privateLateral:
            'The code makes the owner pay for maintenance, repair, replacement, cleaning, blockage removal and verification of breakage or damage. The City may be responsible only for damage it proves it caused.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection records the condition of the line and where along it a problem sits. Section 22-165(c) puts the cost of verifying breakage or damage on the owner.',
        },
      ],
    },
    note: 'This is general information from City of Escondido sources, not legal advice. Contact Public Works to confirm how the code applies to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Escondido',
    title: 'How sewers work in Escondido',
    paragraphs: [
      'The City of Escondido runs the public sewer for addresses on its system, and the code that governs your lateral is the City’s.',
      <>
        <strong>The City system.</strong> The City says its Wastewater Division maintains a
        collection system of roughly 350 miles of sewer pipeline and over 7,500 manholes, carrying
        wastewater from residential, commercial and industrial connections to the Hale Avenue
        Resource Recovery Facility.
      </>,
      <>
        <strong>Separate from storm drains.</strong> The City says its sewer system is separate
        from its storm drain system, and that stormwater is not treated at the City’s wastewater
        plant.
      </>,
      <>
        <strong>Equipment.</strong> The City says its crews use three combination jet-rodding and
        vacuum trucks and a CCTV inspection van with robotic camera transporters that record the
        condition of sewer lines, and that staff routinely clean and inspect sewer mains.
      </>,
      <>
        <strong>Businesses.</strong> The City’s Environmental Programs oversees inspections of
        businesses and wastewater discharges and a fats, oil and grease program.
      </>,
      <>
        <strong>Age of the mains.</strong> The City’s 2012 Wastewater Master Plan reported that
        about half of its gravity sewer mains were installed before 1980. That is a 2012 figure
        about City mains. It says nothing about laterals or any individual property.
      </>,
      <>
        <strong>Which agency serves an address.</strong> We did not find a City map of its sewer
        service area. Another agency, Vallecitos Water District, serves parts of Escondido, so if
        you are unsure who serves a property, ask Public Works or check the{' '}
        <a href={VWD_URL} rel="noopener">
          Vallecitos sewer service page
        </a>
        .
      </>,
      'The pages we reviewed do not give a current system age, and they do not say whether roots, wet weather or soil are local problems. We make no claim about any of those.',
      'A code section does not tell you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line, the connection to the main or the City’s responsibility begins.',
    },
  },
  // `HousingAgeSection` requires a three-column `table` and has no total line or
  // margin-of-error field. The ten-row table fits as `table`; the total, margin
  // of error and source go in `sourceNote`. The anchor is fixed as `age`.
  housingAge: {
    eyebrow: 'Homes in Escondido',
    title: 'How old are Escondido homes?',
    paragraphs: [
      'About half of Escondido’s housing units were built in the 1970s and 1980s, and the Census median year built is 1981. About 10 percent were built before 1960, and about 16 percent in 2000 or later.',
      'What this does and does not tell you: the Census counts homes, not sewer pipes. It describes Escondido city, which is not necessarily the City’s sewer service area, and house age does not show what a lateral is made of or what condition it is in. A camera inspection of your line does.',
    ],
    table: {
      caption: 'Escondido housing units by year built',
      columns: ['Year built', 'Housing units', 'Share of total'],
      rows: [
        ['2020 or later', '580', '1.1%'],
        ['2010 to 2019', '2,590', '5.0%'],
        ['2000 to 2009', '5,106', '9.8%'],
        ['1990 to 1999', '6,639', '12.7%'],
        ['1980 to 1989', '12,838', '24.6%'],
        ['1970 to 1979', '12,927', '24.7%'],
        ['1960 to 1969', '6,110', '11.7%'],
        ['1950 to 1959', '3,491', '6.7%'],
        ['1940 to 1949', '1,122', '2.1%'],
        ['1939 or earlier', '836', '1.6%'],
      ],
    },
    sourceNote: (
      <>
        Total: 52,239 housing units (margin of error +/-1,076). Each estimate has its own margin
        of error. Combined shares in the text above are approximate sums of these estimates.
        Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates (2020-2024),
        tables{' '}
        <a href={CENSUS_B25034_URL} rel="noopener">
          B25034
        </a>{' '}
        and{' '}
        <a href={CENSUS_B25035_URL} rel="noopener">
          B25035
        </a>
        , Escondido city, California. Accessed Oct 4, 2026.
      </>
    ),
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'Public main or private lateral? Start with the right contact.',
    paragraphs: [
      'Call the City of Escondido. Public Works takes reports of overflowing manholes and sewer lines and is the number the City gives when you cannot tell whether a backup is in the main or the lateral. If the City or a plumber points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // The panel type holds one phone per panel. Public Works is `agency`, the
    // Building Division is `secondaryAgency`, and the Field Engineering number is
    // plain text in the Building Division paragraph, labelled as the City's.
    agency: {
      label: 'City of Escondido Public Works',
      phone: { label: '(760) 839-4668', href: 'tel:+17608394668' },
      text: 'The City’s FAQ lists this number as available 24 hours a day for a sewer backup when the source is unclear, and its wastewater page gives it for an overflowing manhole or sewer line. The wastewater page says to call 911 for emergencies and points to the City’s reporting app for non-emergency sewer reports. This is the City’s number and the City’s statement, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of Escondido Building Division',
      phone: { label: '(760) 839-4647', href: 'tel:+17608394647' },
      text: 'The City’s FAQ gives this number for information on getting a repair permit, which it says is required before any lateral repair begins, even on private property. For a repair that involves digging in a street or other public right-of-way, the FAQ gives the City’s Field Engineering Office at (760) 839-4664 for the encroachment permit. These are the City’s numbers, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders a code
  // section, with a lede that says no grant was found. Fields map: lede = opening,
  // whoCanApply = who section 22-165 applies to, covers = what the code puts on
  // the owner, doesNotCover = where the City may be responsible and what we did
  // not find, steps = how a City-caused-damage claim runs, afterSteps = the
  // cleanout, right-of-way and permit paragraph, callout = before you rely on it.
  municipalProgram: {
    eyebrow: 'Section 22-165',
    title:
      'We found no Escondido lateral grant, but section 22-165 spells out who pays for what',
    lede: 'We did not find a City of Escondido lateral repair, replacement, grant or reimbursement program on the City’s code article, lateral FAQ or wastewater page. That is “none found”, not a statement that none exists. What the City does publish is a code section, 22-165 of the Escondido Municipal Code, “Maintenance of sewer connection lateral”. It sets out the owner’s duties subsection by subsection, and it makes one exception for damage the City caused.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the code puts on the owner',
      items: [
        'Subsection (a): all maintenance, repair, replacement, cleaning and removal of blockages in the lateral.',
        'Subsection (b): locating, exposing and maintaining the property line cleanout, so the lateral can be inspected, cleaned and cleared.',
        'Subsection (c): all costs of that work, and the cost of verifying that the lateral is broken or damaged.',
        'Subsection (e): maintenance “up to and including the connection to the main”, as the owner’s sole responsibility.',
        'Subsection (f): after a maintenance-related violation or an illegal discharge, the owner or management company must have the lateral cleaned and televised by a licensed plumber and give the City a copy of the video, and the City’s director then requires any deficiencies seen on the video to be fixed at the owner’s expense. The code states this condition; we do not state that we meet it.',
      ],
    },
    doesNotCover: {
      title: 'Where the City may be responsible, and what we did not find',
      items: [
        'The City may be responsible for repairs to the lateral only if the owner proves the damage resulted from work by the City or a licensed contractor working for the City.',
        'We did not find a City repair or replacement grant, a reimbursement program, a cap, an application process, or a deadline. We did not find a rule requiring a lateral inspection when a home is sold.',
        'We also could not tell from the code and the City’s FAQ together who may perform lateral repair work. Section 22-161 says no one other than the City may repair or replace a lateral inside the city except in two stated cases, while the City’s FAQ says an owner can hire a contractor. Ask Public Works what applies before you plan any repair.',
      ],
    },
    whoCanApply: {
      title: 'Who section 22-165 applies to',
      paragraphs: [
        'Owners of a property whose sewer connection lateral connects to the City’s public sewer main.',
        'The City, for the one exception in subsection (e).',
      ],
    },
    steps: {
      title: 'How a City-caused-damage claim runs, as the code describes it',
      steps: [
        {
          title: 'Prove the cause',
          body: 'The owner has to prove that damage to the lateral resulted from work performed by the City or a licensed contractor working for the City.',
        },
        {
          title: 'Satisfy the City',
          body: 'The proof has to satisfy a qualified City wastewater maintenance employee.',
        },
        {
          title: 'Video inspection',
          body: 'The code says the proof is a video inspection from a ground-level cleanout or a breakout opening in the building lateral, done in the presence of that employee.',
        },
        {
          title: 'The City sets the time and place',
          body: 'The City reserves the sole right to decide when and where video inspections are done.',
        },
        {
          title: 'Possible City responsibility',
          body: 'If the owner proves it, the City may be responsible for the repairs.',
        },
      ],
    },
    afterSteps: [
      'The code also makes the owner responsible for the property line cleanout, and it bars anyone other than the City, or someone working by agreement or contract with the City, from excavating or exposing any part of a lateral inside a public right-of-way. The one stated exception is a cleanout installed in public property: its cap or cover may be exposed for maintenance if the covering materials are put back in kind and in the same condition or better. The City’s FAQ adds that a City repair permit is required before any work begins, even on private property, and that digging in a street or right-of-way also needs an encroachment permit.',
    ],
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'A camera inspection of your line records what the camera sees and where. It does not replace the City-present inspection that subsection (e) describes, and the City decides when and where that inspection happens. Contact Public Works at (760) 839-4668 before you pay for work you plan to use in a claim. That is the City’s number, not ours. The code text was retrieved from eCode360 on Oct 4, 2026, and the City’s FAQ and wastewater pages carry no date.',
      ],
    },
    closing:
      'Neither the code nor the City’s pages say they pay for our services. The Sewer Pros does not perform repairs or replacements and does not arrange reimbursement.',
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
    eyebrow: 'Buying in Escondido',
    title: 'Sewer inspection before buying an Escondido home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. In Escondido the code puts the lateral on the owner up to and including the connection to the main, and puts the cost of verifying breakage or damage on the owner, so a defect found after closing is a cost you carry, apart from the narrow case of damage you can prove the City caused.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City’s code article, lateral FAQ or wastewater page that requires a sewer lateral inspection, certification or seller disclosure when an existing home is sold. That reads as none found, not as a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. If a purchase involves a rebuild, an addition or work in the street, ask the City’s Building Division before you rely on any assumption. Three practical points. Confirm which agency serves the address, since parts of Escondido are served by Vallecitos Water District and some properties are on septic. The City says a repair permit is required before a lateral repair begins, and an encroachment permit for digging in the street. The code bars anyone but the City, or someone working under City contract, from excavating or exposing a lateral in the public right-of-way. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer cleaning in Escondido', pageId: id('sl-escondido-cleaning') },
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
    body: 'This page covers the City of Escondido only. Sewer agencies and lateral rules differ across San Diego County, so terms and costs change from place to place.',
    items: [
      { title: 'San Diego', description: 'Local sewer details', pageId: id('loc-sd-san-diego') },
      { title: 'Carlsbad', description: 'Local sewer details', pageId: id('loc-sd-carlsbad') },
      { title: 'Oceanside', description: 'Local sewer details', pageId: id('loc-sd-oceanside') },
      { title: 'Chula Vista', description: 'Local sewer details', pageId: id('loc-sd-chula-vista') },
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
      question: 'Who is responsible for the sewer lateral in Escondido?',
      answer: (
        <p>
          The property owner. Section 22-165(a) of the Escondido Municipal Code makes the owner
          responsible for all maintenance, repair, replacement, cleaning and removal of blockages
          in the sewer connection lateral, and subsection (e) says maintenance of the lateral “up
          to and including the connection to the main” is the private owner’s sole responsibility.
          The City’s FAQ describes the owner’s part as running from the house up to the point of
          connection with the public sanitary sewer main. The City maintains that main. Sources:
          Escondido Municipal Code section 22-165; City of Escondido sewer repair FAQ; City of
          Escondido Wastewater Collections page.
        </p>
      ),
    },
    {
      question: 'What does section 22-165 of the Escondido Municipal Code say?',
      answer: (
        <p>
          It has seven subsections. Subsection (a) puts maintenance, repair, replacement, cleaning
          and removal of blockages in the lateral on the owner. Subsection (b) makes the owner
          responsible for locating, exposing and maintaining the property line cleanout.
          Subsection (c) makes the owner responsible for the costs of that work and for verifying
          that the lateral is broken or damaged. Subsection (d) bars anyone other than the City, or
          someone working under City contract, from excavating or exposing a lateral inside a
          public right-of-way, with a narrow exception for a cleanout cap or cover. Subsection (e)
          makes the owner solely responsible up to and including the connection to the main, with
          one exception for damage caused by City work. Subsection (f) says that after a
          maintenance-related violation or an illegal discharge, the owner or management company
          must have the lateral cleaned and televised by a licensed plumber and give the City a
          copy of the video. Subsection (g) makes compliance a condition of connecting to the
          City’s wastewater system. Source: Escondido Municipal Code section 22-165.
        </p>
      ),
    },
    {
      question: 'Does the City of Escondido ever pay for a lateral repair?',
      answer: (
        <p>
          Only in one narrow case. Section 22-165(e) says the City may be responsible for repairs
          only if the owner proves, to the satisfaction of a qualified City wastewater maintenance
          employee, that the damage resulted from work by the City or a licensed contractor working
          for the City. The code requires that proof by video inspection from a ground-level
          cleanout or a breakout opening in the building lateral, in the presence of that employee,
          and says the City decides when and where video inspections are done. Apart from that
          case, we did not find a City lateral repair, replacement, grant or reimbursement program
          on the code article, the lateral FAQ or the wastewater page. That is “none found”, not a
          statement that none exists. Sources: Escondido Municipal Code section 22-165; City of
          Escondido sewer repair FAQ; City of Escondido Wastewater Collections page.
        </p>
      ),
    },
    {
      question:
        'What should I do about a sewer backup if I don’t know whether it is my lateral or the City main?',
      answer: (
        <p>
          The City’s FAQ says to call City Public Works at (760) 839-4668, which it lists as
          available 24 hours a day. It says the City will inspect the public main free of charge,
          and that if the main is found to be clear, the owner is told the blockage is probably in
          the lateral, and the owner is responsible for maintenance or repair. For an overflowing
          manhole or sewer line, the City’s wastewater page gives the same number, says to call 911
          for emergencies, and points to the City’s reporting app for non-emergency sewer reports.
          These are the City’s numbers and instructions, not ours. Sources: City of Escondido sewer
          repair FAQ; City of Escondido Wastewater Collections page.
        </p>
      ),
    },
    {
      question:
        'Do I need a permit for sewer lateral work in Escondido, and can I dig in the street myself?',
      answer: (
        <p>
          The City says a City of Escondido repair permit is required before any work begins, even
          for repairs on private property, and gives the Building Division at (760) 839-4647 for
          how to get one. If a repair involves digging in a street or other public right-of-way,
          the FAQ says an encroachment permit is also required, and gives the City’s Field
          Engineering Office at (760) 839-4664. Digging in the street on your own is restricted:
          section 22-165(d) says that, except when performing work by agreement or contract with
          the City, no person or entity other than the City may excavate for or otherwise expose
          any portion of a sewer connection lateral within a public right-of-way. The one stated
          exception is a property line cleanout installed in public property: its cap or cover may
          be exposed for maintenance if the covering materials are replaced in kind and in the same
          condition or better. These are the City’s numbers and requirements, not ours. Sources:
          City of Escondido sewer repair FAQ; Escondido Municipal Code section 22-165.
        </p>
      ),
    },
    {
      question: 'Is my Escondido address on the City’s sewer system?',
      answer: (
        <p>
          Not necessarily. The City’s rules and numbers apply to addresses on the City of
          Escondido’s sewer system. Vallecitos Water District says it provides sewer service to
          parts of Escondido, and its own flyer puts the owner in charge of the lateral from the
          building through the point of connection to the district’s main. The City’s 2012
          Wastewater Master Plan also said the City’s sewer service area does not line up with its
          city limits and that some developed areas inside the city were on septic systems at that
          time. We did not find a City map of its sewer service area. To find out who serves your
          address, ask City Public Works, or check the Vallecitos sewer service page. Sources:
          Vallecitos Water District website and lateral flyer; City of Escondido 2012 Wastewater
          Master Plan; Escondido Municipal Code section 22-165(g).
        </p>
      ),
    },
    {
      question: 'Who pays to find out whether a sewer lateral is broken?',
      answer: (
        <p>
          The owner. Section 22-165(c) says, subject to subsection (d), that the owner is
          responsible for all costs of maintenance, repair, replacement, cleaning and removal of
          blockages in the lateral, and for verification of lateral breakage or damage. If you
          think City work caused the damage, the code’s own proof is a video inspection from a
          cleanout or breakout opening with a qualified City wastewater maintenance employee
          present, and the City decides when and where that inspection happens, so contact Public
          Works before you pay for work you plan to rely on. A camera inspection of your line
          records what is in it; it does not replace the City-present inspection. Source:
          Escondido Municipal Code section 22-165.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required when buying an Escondido home?',
      answer: (
        <p>
          We did not find a rule on the City’s code article, lateral FAQ or wastewater page that
          requires a sewer lateral inspection, certification or seller disclosure when an existing
          home is sold. That reads as none found, not a confirmed absence, and it does not address
          state disclosure law. Because section 22-165 makes the lateral the owner’s up to and
          including the connection to the main, a buyer who wants evidence of its condition has to
          ask for it. Census estimates put the median year Escondido homes were built at 1981, but
          house age does not show the condition of a particular lateral. Sources: Escondido
          Municipal Code section 22-165; City of Escondido sewer repair FAQ; City of Escondido
          Wastewater Collections page; U.S. Census Bureau ACS 2020-2024, table B25035.
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
    title: 'Schedule a sewer camera inspection in Escondido.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or an Escondido property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
          'Escondido Municipal Code, Article 7: Sewer Connection Laterals, sections 22-161 to 22-166 (section 22-165 amendment history on the page ends with Ordinance 2011-18; accessed Oct 4, 2026)',
        href: ES_CODE_URL,
      },
      {
        label:
          'City of Escondido: sewer repair FAQ, “Who is responsible for sanitary sewer repair?” (page date not shown; text confirmed Oct 4, 2026)',
        href: ES_FAQ_URL,
      },
      {
        label:
          'City of Escondido: Wastewater Collections (page date not shown; text confirmed Oct 4, 2026)',
        href: ES_WW_URL,
      },
      {
        label:
          'City of Escondido: Programs, Plans and Studies (page date not shown; sewer and storm drain systems are separate; text confirmed Oct 4, 2026)',
        href: ES_PLANS_URL,
      },
      {
        label: 'City of Escondido: Wastewater Master Plan, June 2012 (June 2012; dated)',
        href: ES_WWMP_URL,
      },
      {
        label:
          'Vallecitos Water District: sewer and water services (page date not shown; accessed Oct 4, 2026)',
        href: VWD_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2024 5-year estimates, table B25034, Escondido city (2020-2024; accessed Oct 4, 2026)',
        href: CENSUS_B25034_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2024 5-year estimates, table B25035, Escondido city (2020-2024; accessed Oct 4, 2026)',
        href: CENSUS_B25035_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the City of Escondido for your address.',
  },
  servicePageIds: [id('sl-escondido-cleaning')],
}
