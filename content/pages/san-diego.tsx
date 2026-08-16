/**
 * San Diego market content.
 *
 * Authority: docs/14-content-specification.md §39, §42, §79
 *            docs/29 (San Diego rules), CLAUDE.md §29, §73
 *            docs/21-post-launch-seo-roadmap.md §35-37, DEC-059
 *            San Diego Market Research, 2026-08-16
 *
 * ===========================================================================
 * A DIFFERENT REGULATORY LANDSCAPE, NOT A SMALLER ST. LOUIS
 * ===========================================================================
 * St. Louis has one regional authority (MSD) and a near-universal $28/yr
 * municipal lateral-assistance model repeated across almost every
 * jurisdiction. San Diego County has no equivalent.
 *
 * Sewer service here comes from a mix of city departments and
 * independent special districts, and financial assistance is the
 * exception rather than the norm — confirmed in only two of the seven
 * approved jurisdictions, by different mechanisms. The City of
 * San Diego's own document states there is no reimbursement at all.
 *
 * These pages say so rather than assuming the St. Louis pattern
 * transfers. That structural contrast is itself the strongest
 * differentiation available in this cluster.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ORGANIC-FIRST — NO GBP, NO OFFICE, NO ADDRESS
 * ---------------------------------------------------------------------------
 * DEC-059 and 21 §35-37 make San Diego organic-first. CLAUDE.md §29
 * forbids implying a San Diego office, storefront, GBP, or public
 * address. Nothing below states or implies local premises.
 *
 * San Diego IS an operating market — it publishes its own site, phone,
 * hours, and a 2015 founding year (DEC-071). Operating is not the same
 * as having a verified physical location, and only the first is claimed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ HOUSING-AGE FIGURES ARE NOT CITED, AND THE ANGLE IS WEAKER HERE
 * ---------------------------------------------------------------------------
 * All figures are single-sourced secondary republication of ACS data
 * (PENDING-015). None is published.
 *
 * Beyond sourcing, the research makes a substantive point worth
 * honouring: this cluster is materially newer than St. Louis. Even the
 * oldest stock here is around a third pre-1970, against 58% pre-1940 in
 * St. Louis City. Aggressive "old pipe, high risk" framing would be
 * weaker and less honest in San Diego, and Orangeburg-era framing
 * applies to a smaller share throughout. The copy is calibrated down
 * accordingly.
 *
 * ⚠ NO Mission Valley housing figure exists at any usable geography.
 * Two proxies conflict sharply and describe non-comparable areas. None
 * is published, and none is averaged.
 */

import type { LocationPageContent, MarketPageContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

/** Shared, sourced: the owner owns the whole lateral, and no city money follows. */
const CITY_OF_SAN_DIEGO_POLICY = (
  <>
    <h2>Who owns the lateral, and what the City will not do</h2>
    <p>
      In the City of San Diego, the property owner owns the entire sewer
      lateral — the full run from the building to the public main, not merely
      the portion under private land.
    </p>
    <p>
      The City repairs breaks within the public right-of-way where they were
      not caused by neglect, and bills the owner where they were. On the
      question of cost, the City&rsquo;s own guidance is unambiguous: there is
      no reimbursement for plumbing expenses.
    </p>
    <p>
      That is worth stating plainly, because it is the opposite of how sewer
      laterals work in some other parts of the country, and it means a lateral
      problem here is entirely the owner&rsquo;s to fund.
    </p>
  </>
)

/* ==========================================================================
   Market hub — /san-diego-ca/
   ========================================================================== */

export const sanDiegoMarketContent: MarketPageContent = {
  hero: {
    eyebrow: 'San Diego County, California',
    title: 'Sewer inspection and cleaning across San Diego County',
    intro: (
      <p>
        Independent camera inspection, diagnostics, and cleaning for properties
        across San Diego County — from a company that documents the condition
        of the line and does not sell the repair.
      </p>
    ),
  },
  body: (
    <>
      {CITY_OF_SAN_DIEGO_POLICY}

      <h2>No single sewer authority here</h2>
      <p>
        San Diego County has no regional sewer district covering the area the
        way a single authority does in some metropolitan regions. Service comes
        from a mix of city utility departments and independent special
        districts, and which one governs your property is a question of address
        rather than of city name.
      </p>
      <p>
        San Marcos, for instance, is served by the Vallecitos Water District —
        an independent special district that also serves parts of Carlsbad,
        Escondido, and Vista. Chula Vista&rsquo;s sewer service comes from
        CVSan, a sanitation district distinct from the city government itself.
        Carlsbad is split: most of the city is served by its own utilities
        department, while the southern portion falls to Leucadia Wastewater
        District or Vallecitos.
      </p>

      <h2>Financial assistance is the exception</h2>
      <p>
        Lateral repair assistance programmes exist in this county, but they are
        uncommon and they are not uniform. Of the areas we work across, we have
        confirmed programmes in two: Carlsbad offers a grant of up to $3,000
        toward lateral replacement or rehabilitation, and CVSan runs a lateral
        replacement grant programme in Chula Vista.
      </p>
      <p>
        Elsewhere — including the City of San Diego, Escondido, and San Marcos
        — no such programme was found. In most of the county, a failed lateral
        is funded entirely by the property owner.
      </p>
      <p>
        That makes knowing the actual condition of a line more consequential
        here, not less. Where no programme softens the cost, the difference
        between a line that needs cleaning and a line that needs replacing is
        the whole decision.
      </p>

      <h2>What we do here</h2>
      <p>
        We inspect, document, locate, and clean. We do not perform sewer repair
        or replacement, so the footage we produce is not the first step toward a
        quote from us for the remedy.
      </p>

      <h2>Reaching us in San Diego</h2>
      <p>
        San Diego enquiries go to{' '}
        <a href="tel:+18582572888">(858) 257-2888</a>, Monday to Friday, 8:00am
        to 4:00pm. This is a different line from our St. Louis number — please
        use the San Diego one for work in this county.
      </p>
    </>
  ),
  services: [
    { pageId: id('svc-sewer-camera-inspection'), description: 'See the visible condition of the line.' },
    { pageId: id('svc-pre-purchase-sewer-inspection'), description: 'Inspect the line before closing on a property.' },
    { pageId: id('svc-sewer-cleaning'), description: 'Clear what has accumulated in the line.' },
    { pageId: id('svc-hydro-jetting'), description: 'High-pressure cleaning for buildup on the pipe wall.' },
  ],
  locationPageIds: [
    id('loc-sd-san-diego'),
    id('loc-sd-carlsbad'),
    id('loc-sd-chula-vista'),
    id('loc-sd-escondido'),
    id('loc-sd-oceanside'),
    id('loc-sd-san-marcos'),
    id('loc-sd-mission-valley'),
  ],
  faq: [
    {
      question: 'Does the City of San Diego help with lateral repair costs?',
      answer: (
        <p>
          No. The City&rsquo;s own guidance states there is no reimbursement for
          plumbing expenses. The property owner owns the entire lateral from the
          building to the main.
        </p>
      ),
    },
    {
      question: 'Who is my sewer provider?',
      answer: (
        <p>
          It depends on your address rather than only your city. Some areas are
          served by a city utilities department and others by an independent
          special district — Vallecitos, Leucadia, or CVSan among them. Parts of
          Carlsbad fall under different providers than the rest of it.
        </p>
      ),
    },
    {
      question: 'Are there any grant programmes in San Diego County?',
      answer: (
        <p>
          They exist but are uncommon. We have confirmed a Carlsbad grant of up
          to $3,000 and a CVSan lateral replacement grant programme in Chula
          Vista. In most of the county, including the City of San Diego, no
          programme was found.
        </p>
      ),
    },
  ],
  cta: {
    title: 'Find out what condition the line is in',
    body: 'Documented evidence of the lateral, from a company that does not perform the repair.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const sanDiegoLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* ------------------------------------------------- San Diego (city) -- */
  [id('loc-sd-san-diego')]: {
    hero: {
      eyebrow: 'San Diego',
      title: 'Sewer inspection and cleaning in San Diego',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for properties in the
          City of San Diego — where you own the whole lateral and no
          reimbursement exists.
        </p>
      ),
    },
    body: (
      <>
        {CITY_OF_SAN_DIEGO_POLICY}

        <h2>What full ownership means in practice</h2>
        <p>
          Because the lateral is the owner&rsquo;s across its entire run, a
          defect anywhere along it is the owner&rsquo;s to resolve. There is no
          boundary partway along where responsibility shifts, and no programme
          to absorb part of the cost.
        </p>
        <p>
          The practical consequence is that the scale and position of a problem
          matter financially in a direct way. A localised defect near the
          building and a failure out under the street are the same
          responsibility and very different jobs.
        </p>

        <h2>Neglect is a distinction the City draws</h2>
        <p>
          The City repairs right-of-way breaks not caused by neglect, and bills
          the owner where neglect caused them. That makes documented condition
          worth having in its own right — a record of the line&rsquo;s state
          is evidence about how it came to fail, not merely a diagnosis.
        </p>

        <h2>A broad span of construction</h2>
        <p>
          San Diego&rsquo;s housing spans postwar through the 1980s and beyond,
          which is a wider range than most of the surrounding cities. Lines laid
          across that span may be clay, cast iron, or PVC depending on when a
          property was built and whether the lateral has been replaced since.
        </p>
        <p>
          That is era context, not a claim about any address. What a specific
          line is made of, and how it is holding up, is what the camera shows.
        </p>
      </>
    ),
    servicePageIds: [id('sl-sd-city-camera')],
    faq: [
      {
        question: 'How much of the lateral do I own in San Diego?',
        answer: (
          <p>
            All of it — the full run from the building to the public main. The
            City repairs right-of-way breaks not caused by neglect, but the
            lateral itself is the owner&rsquo;s.
          </p>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------- Carlsbad -- */
  [id('loc-sd-carlsbad')]: {
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Sewer inspection and cleaning in Carlsbad',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Carlsbad properties
          — one of the few places in San Diego County with a grant programme
          toward lateral work.
        </p>
      ),
    },
    body: (
      <>
        <h2>Carlsbad has a sewer lateral grant programme</h2>
        <p>
          Carlsbad operates a Sewer Lateral Grant Program offering reimbursement
          of up to $3,000 toward the replacement or rehabilitation of a private
          lateral. It is awarded first-come, first-served, with priority given
          to properties that have a history of overflows.
        </p>
        <p>
          That is unusual here. Across most of San Diego County, including the
          City of San Diego, no equivalent assistance exists and a failed
          lateral is funded entirely by the owner.
        </p>

        <h2>Which provider serves your property matters</h2>
        <p>
          Carlsbad is not served by a single sewer provider. The city&rsquo;s
          own Utilities Department serves most of it, while the southern portion
          falls under Leucadia Wastewater District or Vallecitos Water District.
        </p>
        <p>
          The grant programme is described as covering the Carlsbad Wastewater
          service area. Whether that extends to properties served by Leucadia or
          Vallecitos is not something we have been able to confirm, so if your
          property sits in the southern part of the city, check directly with
          the City of Carlsbad before assuming eligibility.
        </p>

        <h2>Owner responsibility either way</h2>
        <p>
          Regardless of provider, the property owner is responsible for the
          lateral from the building to the main. The city maintains the mainline
          only.
        </p>

        <h2>Coastal buildout</h2>
        <p>
          Carlsbad&rsquo;s housing is largely late-1970s through 2000s
          construction, peaking in the 1980s — meaningfully newer than the older
          urban stock elsewhere in the region. On lines of that era the
          recurring findings tend to be bellies and joint separation from ground
          movement rather than the material decay that dominates older areas.
        </p>
      </>
    ),
    servicePageIds: [id('sl-carlsbad-camera'), id('sl-carlsbad-prepurchase')],
    faq: [
      {
        question: 'How much is the Carlsbad grant?',
        answer: (
          <p>
            Up to $3,000 toward lateral replacement or rehabilitation, awarded
            first-come, first-served with priority for properties with an
            overflow history.
          </p>
        ),
      },
      {
        question: 'Does the grant apply everywhere in Carlsbad?',
        answer: (
          <p>
            It covers the Carlsbad Wastewater service area. The southern portion
            of the city is served by Leucadia Wastewater District or Vallecitos
            instead, and whether the grant reaches those properties is not
            something we can confirm — check with the City directly.
          </p>
        ),
      },
    ],
  },

  /* ------------------------------------------------------- Chula Vista -- */
  [id('loc-sd-chula-vista')]: {
    hero: {
      eyebrow: 'Chula Vista',
      title: 'Sewer inspection and cleaning in Chula Vista',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Chula Vista
          properties, where sewer service comes from a district separate from
          the city government.
        </p>
      ),
    },
    body: (
      <>
        <h2>CVSan is not the City of Chula Vista</h2>
        <p>
          Sewer service in Chula Vista is provided by CVSan — the Chula Vista
          Sanitation District — which is a separate special district rather than
          a department of the city government.
        </p>
        <p>
          This trips people up regularly. Questions about laterals, permits, and
          the grant programme go to CVSan, not to City Hall, and searching for
          city sewer policy will not necessarily surface the rules that apply.
        </p>

        <h2>CVSan runs a lateral replacement grant programme</h2>
        <p>
          CVSan operates a Lateral Replacement Grant Program that reimburses
          documented repair or replacement cost. The process is specific, and
          worth knowing before work starts rather than after:
        </p>
        <ul>
          <li>Three contractor quotes from CVSan&rsquo;s Qualified Contractor List</li>
          <li>A CVSan repair permit</li>
          <li>Work completed within 90 days</li>
          <li>Reimbursement on submission of a paid-in-full invoice</li>
        </ul>
        <p>
          Every one of those steps assumes you can establish what is wrong with
          the line and where. Three comparable quotes in particular are far
          easier to obtain when each contractor is pricing against the same
          documented evidence rather than forming an independent opinion.
        </p>
        <p>
          We have not been able to confirm the programme&rsquo;s exact
          reimbursement cap, and it differs from Carlsbad&rsquo;s stated $3,000.
          Confirm the current figure with CVSan before relying on it.
        </p>

        <h2>Two eras in one city</h2>
        <p>
          Chula Vista&rsquo;s housing is genuinely mixed — a meaningful postwar
          and 1960s base alongside a strong wave of master-planned development
          in the eastern part of the city through the 2000s. Those two halves
          of the city can present quite different lateral conditions, so what is
          typical for one is a poor guide to the other.
        </p>
      </>
    ),
    servicePageIds: [id('sl-chula-vista-camera')],
    faq: [
      {
        question: 'Do I contact the City of Chula Vista about my sewer lateral?',
        answer: (
          <p>
            CVSan — the Chula Vista Sanitation District — provides sewer service
            and administers the lateral grant programme. It is a separate
            district from the city government.
          </p>
        ),
      },
      {
        question: 'What does CVSan’s grant require?',
        answer: (
          <p>
            Three quotes from its Qualified Contractor List, a CVSan repair
            permit, work completed within 90 days, and a paid-in-full invoice
            for reimbursement. Confirm the current cap with CVSan directly.
          </p>
        ),
      },
    ],
  },

  /* --------------------------------------------------------- Escondido -- */
  [id('loc-sd-escondido')]: {
    hero: {
      eyebrow: 'Escondido',
      title: 'Sewer inspection and cleaning in Escondido',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Escondido properties,
          where the municipal code is unusually explicit about what the owner is
          responsible for.
        </p>
      ),
    },
    body: (
      <>
        <h2>The code states it directly</h2>
        <p>
          Escondido&rsquo;s municipal code, at §22-165, places responsibility on
          the property owner for all maintenance, repair, replacement, cleaning,
          and removal of blockages in the sewer lateral. The city&rsquo;s
          responsibility is limited to damage that it or its contractors
          directly caused.
        </p>
        <p>
          That is more explicit than most jurisdictions manage, and it removes
          the ambiguity that often surrounds who handles a blockage. Clearing a
          clog is the owner&rsquo;s, not the city&rsquo;s.
        </p>

        <h2>No assistance programme</h2>
        <p>
          We found no lateral repair assistance programme in Escondido. Unlike
          Carlsbad and Chula Vista, there appears to be no grant to offset the
          cost, which puts the full expense on the property owner.
        </p>
        <p>
          Where no programme exists, the value of knowing what is actually wrong
          before committing to a remedy goes up rather than down. The difference
          between a line that will respond to cleaning and one that needs
          replacing is the difference between two very different invoices.
        </p>

        <h2>Suburban expansion stock</h2>
        <p>
          Escondido&rsquo;s housing is largely 1970s and 1980s suburban
          expansion, with a modest older share. That span crosses the transition
          toward PVC, so the age of a house is a weak predictor of what its
          lateral is made of or what condition it is in.
        </p>
      </>
    ),
    servicePageIds: [id('sl-escondido-cleaning')],
    faq: [
      {
        question: 'Does Escondido clear blockages in my lateral?',
        answer: (
          <p>
            No. Municipal code §22-165 places maintenance, repair, replacement,
            cleaning, and blockage removal on the property owner. The city is
            responsible only for damage it or its contractors caused.
          </p>
        ),
      },
    ],
  },

  /* --------------------------------------------------------- Oceanside -- */
  [id('loc-sd-oceanside')]: {
    hero: {
      eyebrow: 'Oceanside',
      title: 'Sewer inspection and cleaning in Oceanside',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Oceanside
          properties — coastal and suburban housing across a wide span of
          construction eras.
        </p>
      ),
    },
    body: (
      <>
        <h2>Sewer service in Oceanside</h2>
        <p>
          Sewer service in Oceanside is provided by the City of Oceanside Water
          Utilities Department.
        </p>
        <p>
          As in most San Diego County jurisdictions, sewer laterals are
          generally the property owner&rsquo;s responsibility. We have not
          located a specific published Oceanside statement setting out the exact
          boundary, so rather than restate a neighbouring city&rsquo;s rule as
          though it were Oceanside&rsquo;s, we would point you to Water
          Utilities directly for the detail that applies to your property.
        </p>
        <p>
          We also found no lateral repair assistance programme here — unlike
          Carlsbad and Chula Vista, which do have one. Worth confirming for
          yourself before assuming either way.
        </p>

        <h2>Coastal conditions</h2>
        <p>
          Oceanside&rsquo;s housing is predominantly 1970s and 1980s growth
          continuing into the 1990s, with a smaller older share. On lines of
          that period, ground movement and settlement are more often behind
          recurring problems than material decay — bellies holding water,
          joints pulled apart, damage from later work on the property.
        </p>
        <p>
          Those produce the same symptom as an old failing line, and they are
          not distinguishable from the fixtures. The camera is what separates
          them.
        </p>
      </>
    ),
    servicePageIds: [id('sl-oceanside-cleaning')],
    faq: [
      {
        question: 'Is my lateral my responsibility in Oceanside?',
        answer: (
          <p>
            Sewer laterals are generally the property owner&rsquo;s
            responsibility across San Diego County. We would rather send you to
            Oceanside Water Utilities for the specific boundary than restate
            another city&rsquo;s rule as though it were Oceanside&rsquo;s.
          </p>
        ),
      },
    ],
  },

  /* -------------------------------------------------------- San Marcos -- */
  [id('loc-sd-san-marcos')]: {
    hero: {
      eyebrow: 'San Marcos',
      title: 'Sewer inspection and cleaning in San Marcos',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for San Marcos
          properties, where sewer service comes from a water district rather
          than the city.
        </p>
      ),
    },
    body: (
      <>
        <h2>Vallecitos Water District, not the City</h2>
        <p>
          Sewer service in San Marcos is provided by the Vallecitos Water
          District — an independent special district that also serves parts of
          Carlsbad, Escondido, and Vista.
        </p>
        <p>
          It is a genuine distinction rather than an administrative footnote.
          Questions about your sewer service go to the district, and city-level
          searching will not necessarily surface the rules that govern your
          line.
        </p>
        <p>
          The district&rsquo;s position on responsibility is straightforward:
          lines installed to service private properties are the property
          owner&rsquo;s responsibility, and require periodic maintenance by the
          homeowner.
        </p>

        <h2>No assistance programme found</h2>
        <p>
          We found no lateral repair assistance programme covering San Marcos.
          The cost of a lateral problem here appears to fall entirely on the
          property owner.
        </p>

        <h2>New housing, different failure modes</h2>
        <p>
          San Marcos has among the newest housing in the region, dominated by
          growth from the 1990s onward. Most laterals here will be PVC rather
          than clay, cast iron, or bituminized fibre.
        </p>
        <p>
          That removes the material failure modes that dominate older
          areas — but not the ones caused by ground movement. On newer lines the
          recurring findings are bellies that hold water, joints opened by
          settlement, and damage from landscaping or later construction. A belly
          produces exactly the repeating slow-drainage pattern people associate
          with an old pipe, from an entirely different cause.
        </p>
        <p>
          &ldquo;It is a newer house, the sewer will be fine&rdquo; is a
          reasonable assumption and frequently a wrong one.
        </p>
      </>
    ),
    servicePageIds: [id('sl-san-marcos-camera')],
    faq: [
      {
        question: 'Who provides sewer service in San Marcos?',
        answer: (
          <p>
            The Vallecitos Water District, an independent special district that
            also serves parts of Carlsbad, Escondido, and Vista — not the city
            itself.
          </p>
        ),
      },
      {
        question: 'My house is new. Do I need an inspection?',
        answer: (
          <p>
            Newer PVC pipe removes material decay as a failure mode but not
            ground movement. Bellies, settlement-opened joints, and damage from
            later work produce the same recurring symptoms and are common on
            newer lines.
          </p>
        ),
      },
    ],
  },

  /* ----------------------------------------------------- Mission Valley -- */
  [id('loc-sd-mission-valley')]: {
    hero: {
      eyebrow: 'Mission Valley',
      title: 'Sewer and drain service in Mission Valley',
      intro: (
        <p>
          Camera inspection, diagnostics, and high-pressure cleaning for
          Mission Valley&rsquo;s commercial, hospitality, and mixed-use
          properties.
        </p>
      ),
    },
    body: (
      <>
        <h2>A commercial district, not a residential neighbourhood</h2>
        <p>
          Mission Valley is a commercial and mixed-use district within the City
          of San Diego rather than a separate municipality or a residential
          suburb. Its sewer lines mostly serve hotels, restaurants, retail,
          offices, and multifamily buildings rather than single-family homes.
        </p>
        <p>
          That changes what tends to go wrong. Food-service and high-volume
          lines accumulate grease and solids on the pipe wall at a rate
          residential lines do not, and a failure interrupts trading or
          displaces occupants rather than inconveniencing a household.
        </p>

        <h2>City of San Diego rules apply</h2>
        <p>
          Because Mission Valley sits within the City of San Diego, the
          City&rsquo;s policy governs: the property owner owns the entire
          lateral from building to main, and there is no reimbursement for
          plumbing expenses.
        </p>
        <p>
          For a commercial property that carries a sharper edge. The full cost
          of a lateral failure sits with the owner, alongside whatever the
          disruption costs the operation on top of it.
        </p>

        <h2>Planned rather than reactive</h2>
        <p>
          Where lines carry grease or continuous volume, the useful pattern is
          usually to establish condition, clean on an interval the evidence
          supports, and re-inspect — rather than to respond to backups as they
          happen.
        </p>
        <p>
          Not every line needs that. Which ones do is a question inspection
          answers, and putting a line on a schedule its condition does not
          justify is the sort of recommendation we exist to avoid making.
        </p>

        <h2>Working around operations</h2>
        <p>
          Access on an occupied commercial site involves trading hours, tenants,
          service corridors, and other contractors. That is a planning
          constraint to work around rather than an afterthought.
        </p>
      </>
    ),
    servicePageIds: [id('sl-mission-valley-hydro')],
    faq: [
      {
        question: 'Is Mission Valley a separate city?',
        answer: (
          <p>
            No. It is a commercial and mixed-use district within the City of San
            Diego, so the City&rsquo;s sewer policy applies — including full
            owner responsibility for the lateral and no reimbursement.
          </p>
        ),
      },
      {
        question: 'How often should a restaurant line be cleaned?',
        answer: (
          <p>
            It depends on volume, what enters the line, and its condition rather
            than a standard interval. Establishing the rate of accumulation for
            a specific line is more useful than applying a default to it.
          </p>
        ),
      },
    ],
  },
}
