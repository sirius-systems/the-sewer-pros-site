# The Sewer Pros — Master Location Registry

**Document:** `07-master-location-registry.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Canonical Geographic Authority
**Document Role:** Geographic entity, market relationship, location eligibility, and geographic normalization source of truth
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV
**Canonical Geographic Records:** 579

---

# 1. Purpose

This document defines the canonical geographic taxonomy for The Sewer Pros website.

It establishes:

* primary markets
* canonical location names
* location slugs
* canonical location URLs
* geographic types
* parent market relationships
* submarket clusters
* location priority
* service-matrix eligibility
* audience-matrix eligibility
* commercial-matrix eligibility
* aliases
* operational validation requirements
* research-only geographies
* manual-review geographies

This registry should answer:

> **What geographic entities exist within The Sewer Pros SEO opportunity model, how are they normalized, and how may they participate in downstream page architecture?**

---

# 2. Critical Geographic Governance Rule

A geographic record existing in this registry does **not** automatically authorize a page.

The governing model is:

```text
Geographic Research
↓
Master Location Registry
↓
Service / Audience / Commercial Opportunity Matrices
↓
Strategic Evaluation
↓
04-master-page-build-list.md
↓
Approved Route
```

The location registry answers:

> What geographic opportunities exist?

The Master Page Build List answers:

> Which geographic pages are actually authorized?

These are intentionally separate systems.

---

# 3. Registry Summary

| Market        | Total Records | Tier 1 / Market | Phase 2 | Phase 3 | Review / Hold |
| ------------- | ------------: | --------------: | ------: | ------: | ------------: |
| St. Louis, MO |           218 |              43 |     142 |      18 |            15 |
| San Diego, CA |           222 |              34 |     154 |      23 |            11 |
| Las Vegas, NV |           139 |              25 |      85 |      10 |            19 |
| **Total**     |       **579** |                 |         |         |               |

The registry represents the full geographic research universe.

It does not represent 579 pages to publish.

---

# 4. Market IDs

The initial canonical market IDs are:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

Canonical market URLs:

```text
/st-louis-mo/
/san-diego-ca/
/las-vegas-nv/
```

Market IDs should remain stable internal identifiers.

---

# 5. Geographic Status Model

| Status               | Meaning                                                             |
| -------------------- | ------------------------------------------------------------------- |
| `launch`             | Canonical market hub                                                |
| `launch_candidate`   | Strong Tier 1 location opportunity                                  |
| `phase_2_candidate`  | Valid geographic opportunity retained for expansion                 |
| `phase_3_validation` | Extended territory requiring service/dispatch validation            |
| `research_only`      | Weak standalone page intent, landmark, corridor, or research entity |
| `manual_review`      | Geography, naming, alias, or entity requires verification           |

A `launch_candidate` is **not automatically a launch page**.

Only `04-master-page-build-list.md` grants that authorization.

---

# 6. Matrix Eligibility Model

Each geographic entity may have separate eligibility for:

* service + location
* audience + location
* commercial + location

Values:

| Value         | Meaning                                                           |
| ------------- | ----------------------------------------------------------------- |
| `full`        | Strong candidate for applicable primary matrices                  |
| `selective`   | Only high-value, differentiated combinations should be considered |
| `conditional` | Requires operational or demand validation                         |
| `hold`        | Do not generate matrix pages by default                           |

---

# 7. Location Type Model

Potential location types include:

```text
market_hub
primary_city
independent_city_hub
municipality_or_community
city_or_major_community
major_community
community_or_neighborhood
san_diego_community_or_neighborhood
neighborhood_or_master_planned_community
county
county_or_submarket_cluster
submarket_cluster
commercial_or_mixed_use_district
community_or_extended_area
extended_service_area
landmark_or_corridor
manual_review
```

These types describe geographic function.

They do not independently determine page publication.

---

# 8. Canonical URL Rules

## Market

```text
/{market}/
```

## Standard Location

```text
/{market}/{location}/
```

## St. Louis City Neighborhood

```text
/st-louis-mo/st-louis-city/{neighborhood}/
```

## Service + Location

```text
/{canonical-location-path}/{service}/
```

## Audience + Location

```text
/{canonical-location-path}/for/{audience}/
```

## Commercial + Location

```text
/{canonical-location-path}/commercial/{service}/
```

Do not use flattened local keyword URLs such as:

```text
/san-diego-ca/sewer-camera-inspection-carlsbad/
```

Canonical:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

---

# 9. Canonical Path Principle

The complete canonical pathname is more authoritative than independently reconstructing a route from a location name.

Example:

```text
St. Louis City
/st-louis-mo/st-louis-city/
```

A neighborhood such as Soulard becomes:

```text
/st-louis-mo/st-louis-city/soulard/
```

not:

```text
/st-louis-mo/soulard/
```

unless the registry is intentionally changed.

---

# 10. Normalization Decisions

The following known normalization decisions are authoritative:

```text
bridgton
→ bridgeton
```

```text
river-view
→ riverview
```

```text
saint-charles-county
→ st-charles-county
```

```text
untincorporated-west-county
→ unincorporated-west-county
```

```text
ranch-santa-fe
→ rancho-santa-fe
```

```text
ranch-bernardo-business-park
→ rancho-bernardo-business-park
```

Duplicate source occurrences should be merged into one canonical geographic entity.

Original source variants should remain available as aliases where useful.

---

# 11. Alias Rule

Aliases help preserve:

* historical research
* common terminology
* spelling variants
* previous slugs
* alternate geographic names

Aliases do not create independent geographic entities.

Example:

```text
bridgton
→ Bridgeton
```

Canonical:

```text
/st-louis-mo/bridgeton/
```

---

# 12. Physical Location vs Service Area

A website geographic page does not necessarily represent:

* an office
* a storefront
* a physical business location
* a Google Business Profile

The registry must distinguish:

```text
Service Area Geography
```

from:

```text
Physical Business Location
```

Do not generate LocalBusiness entities for every location record.

---

# 13. Current GBP Context

Current known Google Business Profile status:

| Market    | GBP Status                |
| --------- | ------------------------- |
| St. Louis | Existing GBP              |
| San Diego | No current GBP identified |
| Las Vegas | No current GBP identified |

The geographic architecture may contain San Diego and Las Vegas market pages without implying that local GBPs or storefronts currently exist.

---

# 14. Geographic Record Model

A machine-readable location record should support fields comparable to:

```ts
export interface LocationRecord {
  locationId: string
  marketId: string
  name: string
  slug: string
  canonicalUrl: string
  locationType: string
  parentLocationId?: string
  cluster?: string
  launchTier: string
  indexStatus:
    | 'launch'
    | 'launch_candidate'
    | 'phase_2_candidate'
    | 'phase_3_validation'
    | 'research_only'
    | 'manual_review'
  priorityTags: string[]
  serviceMatrix:
    | 'full'
    | 'selective'
    | 'conditional'
    | 'hold'
  audienceMatrix:
    | 'full'
    | 'selective'
    | 'conditional'
    | 'hold'
  commercialMatrix:
    | 'full'
    | 'selective'
    | 'conditional'
    | 'hold'
  validationStatus: string
  aliases?: string[]
  notes?: string
}
```

---

# 15. Machine-Readable Registry

The complete 579-record dataset is maintained in a machine-readable companion file.

**Current location:**

```text
data/locations/master-location-registry.json
```

A typed TypeScript wrapper may later be added alongside it:

```text
data/locations/master-location-registry.ts
```

If added, it should derive from the JSON rather than duplicating the 579 records.

The machine-readable registry should preserve, where available:

* source sections
* original research source
* source line references
* aliases
* normalization history
* market
* location type
* launch tier
* validation status
* matrix eligibility
* priority tags
* notes

This Markdown document is the human-readable governance and planning layer.

---

# 16. St. Louis Market

**Market ID:** `st-louis-mo`

**Canonical URL:**

```text
/st-louis-mo/
```

## Geographic Strategy

The St. Louis architecture includes:

* St. Louis City
* St. Louis County municipalities
* North County
* Central County
* West County
* South County
* Jefferson County
* St. Charles County
* commercial districts
* St. Louis City neighborhoods
* extended service territories

St. Louis contains the largest and most structurally complex geographic hierarchy in the project.

---

# 17. St. Louis Market Hub

| Name          | Canonical URL   | Type         | Service Matrix | Audience Matrix | Commercial Matrix |
| ------------- | --------------- | ------------ | -------------- | --------------- | ----------------- |
| St. Louis, MO | `/st-louis-mo/` | `market_hub` | full           | selective       | selective         |

The market hub is approved separately in the Master Page Build List.

---

# 18. St. Louis Tier 1 Geographic Registry

These are the strongest geographic opportunities in the St. Louis registry.

**Important:** Tier 1 means high-priority candidate, not automatic launch authorization.

| Location         | Canonical URL                    | Cluster                         |
| ---------------- | -------------------------------- | ------------------------------- |
| Arnold           | `/st-louis-mo/arnold/`           | South County / Jefferson County |
| Ballwin          | `/st-louis-mo/ballwin/`          | West County                     |
| Black Jack       | `/st-louis-mo/black-jack/`       | North County                    |
| Brentwood        | `/st-louis-mo/brentwood/`        | Central County                  |
| Bridgeton        | `/st-louis-mo/bridgeton/`        | North County                    |
| Chesterfield     | `/st-louis-mo/chesterfield/`     | West County                     |
| Clayton          | `/st-louis-mo/clayton/`          | Central County                  |
| Cottleville      | `/st-louis-mo/cottleville/`      | St. Charles County              |
| Crestwood        | `/st-louis-mo/crestwood/`        | West County                     |
| Creve Coeur      | `/st-louis-mo/creve-coeur/`      | St. Louis Metro                 |
| Des Peres        | `/st-louis-mo/des-peres/`        | West County                     |
| Eureka           | `/st-louis-mo/eureka/`           | West County                     |
| Fenton           | `/st-louis-mo/fenton/`           | West County                     |
| Ferguson         | `/st-louis-mo/ferguson/`         | Central County                  |
| Festus           | `/st-louis-mo/festus/`           | South County / Jefferson County |
| Florissant       | `/st-louis-mo/florissant/`       | North County                    |
| Frontenac        | `/st-louis-mo/frontenac/`        | West County                     |
| Hazelwood        | `/st-louis-mo/hazelwood/`        | North County                    |
| High Ridge       | `/st-louis-mo/high-ridge/`       | South County / Jefferson County |
| Imperial         | `/st-louis-mo/imperial/`         | South County / Jefferson County |
| Kirkwood         | `/st-louis-mo/kirkwood/`         | Central County                  |
| Ladue            | `/st-louis-mo/ladue/`            | West County                     |
| Lake St. Louis   | `/st-louis-mo/lake-st-louis/`    | St. Charles County              |
| Manchester       | `/st-louis-mo/manchester/`       | West County                     |
| Maplewood        | `/st-louis-mo/maplewood/`        | Central County                  |
| Maryland Heights | `/st-louis-mo/maryland-heights/` | North County                    |
| O'Fallon, MO     | `/st-louis-mo/ofallon-mo/`       | St. Charles County              |
| Olivette         | `/st-louis-mo/olivette/`         | Central County                  |
| Overland         | `/st-louis-mo/overland/`         | Central County                  |
| Richmond Heights | `/st-louis-mo/richmond-heights/` | Central County                  |
| Rock Hill        | `/st-louis-mo/rock-hill/`        | Central County                  |
| St. Ann          | `/st-louis-mo/st-ann/`           | Central County                  |
| St. Charles      | `/st-louis-mo/st-charles/`       | St. Charles County              |
| St. Louis City   | `/st-louis-mo/st-louis-city/`    | St. Louis City                  |
| St. Peters       | `/st-louis-mo/st-peters/`        | St. Charles County              |
| Sunset Hills     | `/st-louis-mo/sunset-hills/`     | West County                     |
| Town and Country | `/st-louis-mo/town-and-country/` | West County                     |
| University City  | `/st-louis-mo/university-city/`  | Central County                  |
| Valley Park      | `/st-louis-mo/valley-park/`      | West County                     |
| Webster Groves   | `/st-louis-mo/webster-groves/`   | Central County                  |
| Wentzville       | `/st-louis-mo/wentzville/`       | St. Charles County              |
| Wildwood         | `/st-louis-mo/wildwood/`         | West County                     |

Default Tier 1 service-matrix eligibility:

```text
full
```

Audience and commercial combinations remain selective.

---

# 19. St. Louis Launch-Authorized Locations

The Master Page Build List currently authorizes these location pages for initial launch:

```text
/st-louis-mo/st-louis-city/
/st-louis-mo/chesterfield/
/st-louis-mo/ballwin/
/st-louis-mo/florissant/
/st-louis-mo/st-charles/
```

All remaining Tier 1 St. Louis records remain candidates until explicitly promoted in:

`04-master-page-build-list.md`

---

# 20. St. Louis Phase 2 — Municipality / Submarket Registry

The following normalized Phase 2 opportunities remain available for staged expansion:

```text
Affton
Avondale
Bel Nor
Bel Ridge
Bellefontaine Neighbors
Berkeley
Beverly Hills Mo
Breckenridge Hills
Byrnes Mill
Calverton Park
Charlack
Chesterfield Valley
Clarkson Valley
Concord
Cool Valley
Country Club Hills
Crystal City
Crystal Lake Park
Dardenne Prairie
Dellwood
Earth City
Edmundson
Ellisville
Flordell Hills
Glasgow Village
Glendale
Grantwood Village
Green Park
Greendale
Hanley Hills
Harvester
Herculaneum
Hillsdale
Historic St. Charles
Huntleigh
Jefferson County, MO
Jennings
Kimmswick
Kinloch
Lakeshire
Lemay
Mackenzie
Marlborough
Mehlville
Moline Acres
Normandy
North County
Northwoods
Oakland Mo
Oakville
Old Town Florissant
Pacific Mo
Pagedale
Pasadena Hills
Pasadena Park
Pevely
Pine Lawn
Riverview
Sappington
Shrewsbury
Spanish Lake
St. Charles County
St. John
St. Louis County
St. Paul, MO
Twin Oaks
Unincorporated West County
University City Loop
Velda City
Velda Village Hills
Vinita Park
Vinita Terrace
Warson Woods
Weldon Spring Heights
Weldon Spring
Wellston
West County
Westwood
Wilbur Park
Woodson Terrace
```

Default status:

```text
phase_2_candidate
```

Default matrix behavior:

```text
selective
```

---

# 21. St. Louis City Neighborhood Registry

The following normalized St. Louis City neighborhood or district entities are retained as Phase 2 opportunities:

```text
Academy
Baden
Benton Park West
Benton Park
Bevo Mill
Boulevard Heights
Carondelet
Carr Square
Central West End
Cheltenham
Clifton Heights
Columbus Square
Compton Heights
Cortex
DeBaliviere Place
Dogtown
Downtown St. Louis
Downtown West
Dutchtown
Ellendale
Fairground
Fontainebleau
Forest Park Southeast
Fox Park
Holly Hills
Hyde Park
Jeff-Vander-Lou
Kings Oak
Kingsway East
Kingsway West
Lafayette Square
Lindenwood Park
Marine Villa
Mark Twain / I-70 Industrial
Midtown
Mount Pleasant
North Hampton
North Point
North Riverfront
Northampton
Old North St. Louis
Patch
Penrose
Princeton Heights
Shaw
Skinker-DeBaliviere
Soulard
Southampton
Southwest Garden
St. Louis Hills Estates
St. Louis Hills
The Grove
The Hill
Tiffany
Tower Grove East
Tower Grove South
Tyler Place
Visitation Park
Walnut Park East
Walnut Park West
West Cabanne Place
West End
```

Canonical pattern:

```text
/st-louis-mo/st-louis-city/{neighborhood}/
```

These pages require substantially stronger differentiation and demand evidence than primary-city pages.

Do not mass-publish the neighborhood inventory.

---

# 22. St. Louis Commercial / Mixed-Use Entities

Commercially relevant St. Louis research entities include:

```text
Chesterfield Valley
Earth City
Historic St. Charles
Cortex
Downtown St. Louis
Downtown West
Mark Twain / I-70 Industrial
Midtown
The Grove
University City Loop
West County
North County
```

Commercial tagging does not automatically authorize a general location page or commercial service matrix.

Commercial combinations remain selective.

---

# 23. St. Louis Phase 3 / Operational Validation

Extended service-area records:

```text
Augusta
Barnhart
Cedar Hill Lakes
Cedar Hill
De Soto
Defiance
Flint Hill
Foristell
Hillsboro
House Springs
Josephville
New Melle
Olympian Village
Orchard Farm
Parkdale
Peaceful Village
Portage Des Sioux
West Alton
```

Status:

```text
phase_3_validation
```

Default matrix eligibility:

```text
conditional
```

Before promotion, validate:

* actual service coverage
* dispatch practicality
* service availability
* customer demand
* content differentiation

---

# 24. St. Louis Research-Only Targets

```text
Bablers Park
Creve Coeur Lake
Lemay Ferry
Tower Grove Park
```

These are retained because they may have:

* contextual value
* commercial value
* geographic research value

They are not default residential location hubs.

---

# 25. St. Louis Manual Review Queue

```text
Bellerive
Chesterfield Grove
Grover
Old Jamestown
Peruque
Downtown East
Downtown Loft District
Mcdermott
Neighborhoods Near North Riverfront
Ope
Volet
```

Status:

```text
manual_review
```

Do not publish until geographic identity and naming are verified.

---

# 26. San Diego Market

**Market ID:** `san-diego-ca`

**Canonical URL:**

```text
/san-diego-ca/
```

## Geographic Strategy

San Diego should not be treated as only the City of San Diego.

The geographic model includes:

* City of San Diego
* North County coastal
* North County inland
* South Bay
* East County
* urban core
* coastal communities
* I-15 corridor
* commercial districts
* unincorporated / extended territory

North County is particularly important to the market architecture.

---

# 27. San Diego Market Hub

| Name          | Canonical URL    | Type         | Service Matrix | Audience Matrix | Commercial Matrix |
| ------------- | ---------------- | ------------ | -------------- | --------------- | ----------------- |
| San Diego, CA | `/san-diego-ca/` | `market_hub` | full           | selective       | selective         |

---

# 28. San Diego Tier 1 Geographic Registry

| Location           | Canonical URL                       | Cluster                           |
| ------------------ | ----------------------------------- | --------------------------------- |
| Bonita             | `/san-diego-ca/bonita/`             | South Bay                         |
| Carlsbad           | `/san-diego-ca/carlsbad/`           | North County Coastal              |
| Carmel Valley      | `/san-diego-ca/carmel-valley/`      | City of San Diego / I-15 Corridor |
| Chula Vista        | `/san-diego-ca/chula-vista/`        | South Bay                         |
| Coronado           | `/san-diego-ca/coronado/`           | South Bay                         |
| Del Mar            | `/san-diego-ca/del-mar/`            | North County Coastal              |
| El Cajon           | `/san-diego-ca/el-cajon/`           | East County                       |
| Encinitas          | `/san-diego-ca/encinitas/`          | North County Coastal              |
| Escondido          | `/san-diego-ca/escondido/`          | North County Inland               |
| Fallbrook          | `/san-diego-ca/fallbrook/`          | North County Inland               |
| Hillcrest          | `/san-diego-ca/hillcrest/`          | Urban Core / Uptown               |
| Imperial Beach     | `/san-diego-ca/imperial-beach/`     | South Bay                         |
| La Jolla           | `/san-diego-ca/la-jolla/`           | Coastal                           |
| La Mesa            | `/san-diego-ca/la-mesa/`            | East County                       |
| Lakeside           | `/san-diego-ca/lakeside/`           | East County                       |
| Lemon Grove        | `/san-diego-ca/lemon-grove/`        | East County                       |
| Mira Mesa          | `/san-diego-ca/mira-mesa/`          | I-15 Corridor                     |
| Mission Valley     | `/san-diego-ca/mission-valley/`     | Commercial / Mixed Use            |
| National City      | `/san-diego-ca/national-city/`      | South Bay                         |
| North Park         | `/san-diego-ca/north-park/`         | Urban Core / Uptown               |
| Oceanside          | `/san-diego-ca/oceanside/`          | North County Coastal              |
| Pacific Beach      | `/san-diego-ca/pacific-beach/`      | Coastal                           |
| Poway              | `/san-diego-ca/poway/`              | North County Inland               |
| Rancho Bernardo    | `/san-diego-ca/rancho-bernardo/`    | I-15 Corridor                     |
| Rancho Peñasquitos | `/san-diego-ca/rancho-penasquitos/` | I-15 Corridor                     |
| Rancho Santa Fe    | `/san-diego-ca/rancho-santa-fe/`    | North County Coastal              |
| San Diego          | `/san-diego-ca/san-diego/`          | San Diego Metro                   |
| San Marcos         | `/san-diego-ca/san-marcos/`         | North County Inland               |
| Santee             | `/san-diego-ca/santee/`             | East County                       |
| Scripps Ranch      | `/san-diego-ca/scripps-ranch/`      | I-15 Corridor                     |
| Solana Beach       | `/san-diego-ca/solana-beach/`       | North County Coastal              |
| Spring Valley      | `/san-diego-ca/spring-valley/`      | East County                       |
| Vista              | `/san-diego-ca/vista/`              | North County Inland               |

---

# 29. San Diego Launch-Authorized Locations

Initial authorized location pages:

```text
/san-diego-ca/san-diego/
/san-diego-ca/san-marcos/
/san-diego-ca/carlsbad/
/san-diego-ca/escondido/
/san-diego-ca/oceanside/
/san-diego-ca/chula-vista/
/san-diego-ca/mission-valley/
```

Mission Valley is authorized as a **commercial/mixed-use district**, not as a residential city page. Its `service_matrix` remains `selective` while its `commercial_matrix` is `full`, so it should not be treated as a template for broad residential service + location expansion.

See `22-decisions-change-log.md` → **DEC-065**.

All other Tier 1 locations remain candidates until promoted in the Master Page Build List.

---

# 30. San Diego Phase 2 Registry

Normalized Phase 2 opportunities include:

```text
4S Ranch
Allied Gardens
Aviara
Bankers Hill
Barrio Logan
Bay Ho
Bay Park
Bird Rock
Birdland
Black Mountain Ranch
Bonita Long Canyon
Bressi Ranch
Broadway Heights
Cardiff-by-the-Sea
Carlsbad South
Carlsbad Village
Carmel Mountain Ranch
Casa De Oro
Chollas View
City Heights
Clairemont Mesa
Clairemont
Colina Del Sol
College Area
Columbia District
Coronado Village
Cortez Hill
Crown Point
Del Cerro
Del Mar Heights
Del Mar Mesa
Discovery Hills
Downtown Chula Vista
Downtown Escondido
Downtown San Diego
East County
East Otay Mesa
East Village
Eastlake Greens
Eastlake Vistas
Eastlake
Eggers Highlands
El Cerrito
Emerald Hills
Encanto
Eucalyptus Hills
Fairbanks Ranch
Fashion Valley
Fire Mountain
Fletcher Hills
Gaslamp Quarter
Golden Hill
Golden Triangle
Granite Hills
Grantville
Harmony Grove
Hidden Meadows
Horton Plaza
Jesmond Dene
Kearny Mesa
Kensington
La Costa
La Jolla Farms
La Jolla Shores
La Jolla Village
La Mesa Village
Lake San Marcos
Leucadia
Liberty Station
Lincoln Park
Linda Vista
Little Italy
Logan Heights
Marina District
Middletown
Midway District
Millenia
Miramar Ranch North
Miramar
Mission Bay
Mission Beach
Mission Hills
Mission Valley East
Mission Valley West
Mount Helix
Mount Hope
Mountain View
Murphy Canyon
Navajo
Nestor
New Encinitas
Normal Heights
North Clairemont
North County
North Pacific Beach
Oak Park
Ocean Beach
Oceanside Harbor
Old Creek Ranch
Old Encinitas
Old Poway
Old Town
Olivenhain
Otay Mesa Industrial
Otay Mesa-Nestor
Otay Mesa West
Otay Mesa
Otay Ranch
Pacific Highlands Ranch
Pacific Highway
Palm City
Paradise Hills
Point Loma
Rancho Bernardo Business Park
Rancho Del Rey
Rancho San Diego
Rolando Village
Rolando
Sabre Springs
San Carlos
San Elijo Hills
San Ysidro
Serra Mesa
Shadowridge
Shelltown
Shelter Island
Sherman Heights
Silver Strand
Skyline
Sorrento Mesa
Sorrento Valley
South Bay
South Oceanside
South Park
South San Diego
Southcrest
Stockton
Sunbow
Sunset Cliffs
Talmadge
Terra Nova
Tierrasanta
Tijuana River Valley
Torrey Highlands
Torrey Hills
Torrey Pines
University City
University Heights
Uptown San Diego
UTC
Valencia Park
West Chula Vista
Winter Gardens
Wooded Area
```

Status:

```text
phase_2_candidate
```

Default matrices:

```text
selective
```

unless the machine-readable registry specifies stronger commercial eligibility.

---

# 31. San Diego Strategic Submarket Clusters

Important strategic geographic groupings include:

```text
North County
South Bay
East County
City of San Diego
```

These may function as:

* research clusters
* navigation groupings
* internal-link relationships
* content-planning parents

A submarket cluster is not automatically a standalone indexable page.

---

# 32. San Diego Commercial / Mixed-Use Opportunities

Important commercially tagged areas include:

```text
Mission Valley
National City
Chula Vista
Bonita
Coronado
Imperial Beach
Carlsbad Village
Columbia District
Downtown Chula Vista
Downtown Escondido
Downtown San Diego
East Otay Mesa
East Village
Fashion Valley
Gaslamp Quarter
Golden Triangle
Horton Plaza
Kearny Mesa
Liberty Station
Marina District
Midway District
Miramar
Oceanside Harbor
Otay Mesa Industrial
Otay Mesa West
Otay Mesa
Pacific Highway
Sorrento Mesa
Sorrento Valley
University City
UTC
```

Commercial-location pages remain selectively authorized.

---

# 33. San Diego Phase 3 / Operational Validation

```text
Alpine
Bonsall
Borrego Springs
Boulevard
Campo
Crest
De Luz
Descanso
Dulzura
Harbison Canyon
High Valley
Jacumba Hot Springs
Jamul
Julian
Pala
Pauma Valley
Pine Valley
Potrero
Rainbow
Ramona
Rincon
San Pasqual
Valley Center
```

Status:

```text
phase_3_validation
```

Default matrices:

```text
conditional
```

---

# 34. San Diego Manual Review Queue

```text
Buena
East San Diego
Imperial Beach Military
La Presita
Memorial
Paradise Valley
Rancho Del Lago
Richland
San Elijo
Vallecitos
Warmlands
```

No public page should be generated until the geography or naming is verified.

---

# 35. San Diego Normalization Notes

Canonical normalization includes:

```text
ranch-santa-fe
→ rancho-santa-fe
```

and:

```text
ranch-bernardo-business-park
→ rancho-bernardo-business-park
```

Canonical pathnames should remain stable after approval.

---

# 36. Las Vegas Market

**Market ID:** `las-vegas-nv`

**Canonical URL:**

```text
/las-vegas-nv/
```

## Critical Market Gate

Las Vegas is part of the approved site architecture.

However, operational service availability remains subject to validation.

A geographic record may be strategically valid even when customer-facing service publication remains gated.

---

# 37. Las Vegas Market Hub

| Name          | Canonical URL    | Type         | Service Matrix | Audience Matrix | Commercial Matrix |
| ------------- | ---------------- | ------------ | -------------- | --------------- | ----------------- |
| Las Vegas, NV | `/las-vegas-nv/` | `market_hub` | full           | selective       | selective         |

The Master Page Build List currently marks this market as:

```text
launch_pending_validation
```

for indexation purposes.

---

# 38. Las Vegas Tier 1 Geographic Registry

| Location           | Canonical URL                       | Cluster                        |
| ------------------ | ----------------------------------- | ------------------------------ |
| Aliante            | `/las-vegas-nv/aliante/`            | North Las Vegas                |
| Boulder City       | `/las-vegas-nv/boulder-city/`       | Outer Coverage                 |
| Centennial Hills   | `/las-vegas-nv/centennial-hills/`   | City of Las Vegas              |
| Downtown Las Vegas | `/las-vegas-nv/downtown-las-vegas/` | City of Las Vegas / Commercial |
| Enterprise         | `/las-vegas-nv/enterprise/`         | Unincorporated Valley          |
| Green Valley       | `/las-vegas-nv/green-valley/`       | Henderson                      |
| Henderson          | `/las-vegas-nv/henderson/`          | Henderson                      |
| Las Vegas Strip    | `/las-vegas-nv/las-vegas-strip/`    | Paradise / Resort Corridor     |
| Las Vegas          | `/las-vegas-nv/las-vegas/`          | Las Vegas Metro                |
| Mountain's Edge    | `/las-vegas-nv/mountain-s-edge/`    | Enterprise / Southwest         |
| North Las Vegas    | `/las-vegas-nv/north-las-vegas/`    | North Las Vegas                |
| Paradise           | `/las-vegas-nv/paradise/`           | Unincorporated Valley          |
| Peccole Ranch      | `/las-vegas-nv/peccole-ranch/`      | Enterprise / Southwest         |
| Providence         | `/las-vegas-nv/providence/`         | City of Las Vegas              |
| Skye Canyon        | `/las-vegas-nv/skye-canyon/`        | City of Las Vegas              |
| Southern Highlands | `/las-vegas-nv/southern-highlands/` | Enterprise / Southwest         |
| Spring Valley      | `/las-vegas-nv/spring-valley/`      | Unincorporated Valley          |
| Summerlin South    | `/las-vegas-nv/summerlin-south/`    | City of Las Vegas              |
| Summerlin West     | `/las-vegas-nv/summerlin-west/`     | City of Las Vegas              |
| Summerlin          | `/las-vegas-nv/summerlin/`          | Northwest / Summerlin          |
| Sunrise Manor      | `/las-vegas-nv/sunrise-manor/`      | Unincorporated Valley          |
| The Lakes          | `/las-vegas-nv/the-lakes/`          | Enterprise / Southwest         |
| Whitney            | `/las-vegas-nv/whitney/`            | Unincorporated Valley          |
| Winchester         | `/las-vegas-nv/winchester/`         | Unincorporated Valley          |

---

# 39. Las Vegas Launch-Authorized Locations

Current initial build records:

```text
/las-vegas-nv/las-vegas/
/las-vegas-nv/henderson/
/las-vegas-nv/north-las-vegas/
/las-vegas-nv/summerlin/
```

Current page status:

```text
launch_pending_validation
```

These pages may be built for preview and QA but should not be treated as indexable production service pages until operational validation is complete.

---

# 40. Las Vegas Phase 2 Registry

```text
Angel Park
Anthem Country Club
Anthem
Apex Industrial Park
Arts District
Black Mountain
Cadence
Canyon Gate
Charleston Heights
Cheyenne
Chinatown
Civic Center
Craig Ranch
Desert Breeze
Desert Inn
Desert Shores
Downtown Summerlin
East Tropicana
Eldorado
Elkhorn Springs
Flamingo Corridor
Foothills Ranch
Fort Apache
Fox Hill
Fremont East
Green Valley North
Green Valley Ranch
Green Valley South
Henderson Industrial
Historic Westside
Inspirada
Iron Mountain Ranch
Lake Las Vegas
Las Vegas Country Club
Las Vegas Valley
Lone Mountain
Los Prados
MacDonald Highlands
MacDonald Ranch
Medical District
Mission Hills
Monaco
North Las Vegas Industrial
North Valley
Painted Desert
Paradise Road
Queensridge
Rancho Charleston
Rancho Oakey
Red Rock Country Club
Redpoint
Rhodes Ranch
Ridgebrook
Sands Avenue
Seven Hills
Shadow Creek
Silverado Ranch
Silverstone Ranch
Skye View
South Las Vegas Boulevard
Southeast Las Vegas
Southern Highlands Golf Club
Southwest Industrial
Southwest Las Vegas
Southwest Ridge
Sterling Ridge
Stonebridge
Summerlin North
Sun City Aliante
Sun City Summerlin
The Arbors
The Crossing
The Gardens
The Hills
The Paseos
The Trails
The Vistas
The Willows
Tiburon
Tropicana Corridor
Tule Springs
Valley View
Valley Vista
Water Street District
West Sahara
```

Status:

```text
phase_2_candidate
```

Default matrices are selective.

---

# 41. Las Vegas Commercial Priority Entities

Commercially significant geographic entities include:

```text
Downtown Las Vegas
Las Vegas Strip
Apex Industrial Park
Arts District
Chinatown
Civic Center
Downtown Summerlin
East Tropicana
Flamingo Corridor
Fremont East
Henderson Industrial
Las Vegas Country Club
Medical District
North Las Vegas Industrial
Paradise Road
Sands Avenue
South Las Vegas Boulevard
Southeast Las Vegas
Southwest Industrial
Southwest Las Vegas
Tropicana Corridor
Water Street District
West Sahara
```

Commercial architecture should particularly evaluate:

* hospitality
* restaurants
* retail
* multifamily
* office
* industrial
* property management

once operational coverage is confirmed.

---

# 42. Las Vegas Phase 3 / Operational Validation

```text
Blue Diamond
Goodsprings
Indian Springs
Jean
Laughlin
Mesquite
Mount Charleston
Red Rock
Sandy Valley
Searchlight
```

Status:

```text
phase_3_validation
```

Default matrix eligibility:

```text
conditional
```

---

# 43. Las Vegas Research-Only Targets

```text
Airport Area
Allegiant Stadium Area
Blue Diamond Road
Exploration Peak Park
Harry Reid International Airport Area
Hoover Dam Area
Lake Mead
Las Vegas Convention Center
Las Vegas Motor Speedway
Las Vegas Wash
Nellis Air Force Base
Nellis
Rae Road
Railroad Pass
South Point
Town Square
UNLV
Windmill
```

These are not default residential landing-page targets.

Some may have future commercial or contextual value.

---

# 44. Las Vegas Manual Review Queue

```text
Virginia Street
```

Status:

```text
manual_review
```

Do not publish without verifying the intended geographic entity.

---

# 45. Submarket Cluster Rule

Some registry records function primarily as organizational concepts.

Examples:

```text
North County
South Bay
East County
West County
North County — St. Louis
Las Vegas Valley
```

These may support:

* navigation
* research grouping
* internal linking
* analytics
* future hubs

Their presence in the registry does not necessarily mean they should become standalone SEO landing pages.

---

# 46. Commercial District Rule

Commercial and mixed-use districts may have different matrix eligibility than residential locations.

Example:

```text
Mission Valley
```

may be:

```text
service matrix = selective
commercial matrix = full
```

This is intentional.

A commercial district does not need broad residential service-location expansion to be strategically valuable.

---

# 47. Landmark and Corridor Rule

Locations such as:

* airports
* stadium districts
* parks
* convention areas
* roads
* corridors
* resort landmarks

must not automatically become generic local-service pages.

Potential valid uses include:

* commercial targeting
* internal research
* local context
* future campaign pages

They require explicit strategic evaluation.

---

# 48. Neighborhood Publishing Rule

Neighborhood-level pages require a higher publication threshold than city-level pages.

Before approving a neighborhood page, evaluate:

1. actual search demand
2. geographic distinctness
3. customer demand
4. serviceability
5. content differentiation
6. internal-link value
7. conversion opportunity
8. overlap with parent city page

Do not publish hundreds of neighborhood variations simply because the registry contains them.

---

# 49. County and Submarket Page Rule

County and broad submarket entities should be reviewed for intent overlap.

For example:

```text
/st-louis-mo/
```

```text
/st-louis-mo/st-louis-county/
```

```text
/st-louis-mo/west-county/
```

may serve different intents, but those differences must be meaningful before all receive standalone indexable pages.

---

# 50. Market Hub vs Same-Named City

The registry intentionally distinguishes:

```text
/san-diego-ca/
```

from:

```text
/san-diego-ca/san-diego/
```

and:

```text
/las-vegas-nv/
```

from:

```text
/las-vegas-nv/las-vegas/
```

The first represents the broader operating market.

The second represents the specific city search entity.

These should remain separate only while their intent and content remain meaningfully distinct.

---

# 51. Location Priority Tags

Useful priority tags may include:

```text
launch_priority
residential
real_estate
property_management
commercial
hospitality
restaurants
extended_service_area
```

These tags describe strategic relevance.

They do not authorize pages.

---

# 52. Audience Matrix Logic

Locations tagged for:

```text
residential
real_estate
```

may be stronger candidates for:

* home buyers
* home sellers
* real estate agents
* home inspectors

Locations tagged:

```text
property_management
commercial
```

may be stronger candidates for:

* property managers
* HOAs
* commercial owners
* facility managers

The audience matrix will formalize these relationships separately.

---

# 53. Commercial Matrix Logic

Commercial page opportunities should prioritize geographies with:

* business density
* restaurant concentration
* multifamily
* office properties
* retail
* hospitality
* industrial
* property-management activity

A large residential location does not automatically justify a full commercial matrix.

---

# 54. Service Matrix Logic

A location marked:

```text
full
```

means it is eligible to participate broadly in service-opportunity analysis once service availability is confirmed.

It does **not** mean:

```text
Build every service page here.
```

A `full` location may still receive only one or two approved service pages initially.

---

# 55. Matrix Relationship Example

Example:

```text
Carlsbad
location matrix = full
```

and:

```text
Sewer Camera Inspection
service matrix = full
```

may produce a valid opportunity:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

But publication still requires:

```text
04-master-page-build-list.md
```

approval.

---

# 56. Extended Service Area Rule

Records with:

```text
phase_3_validation
```

must remain excluded from production matrix generation until dispatch/service-area coverage is confirmed.

Do not rely on geographic proximity alone.

A location being near the market does not prove that the business serves it.

---

# 57. Research Preservation Principle

Questionable or lower-priority locations should not necessarily be deleted.

Retaining them as:

```text
research_only
```

or:

```text
manual_review
```

preserves research without polluting production architecture.

This allows later reevaluation without repeating discovery work.

---

# 58. Geographic Deletion Rule

Do not remove a canonical location record solely because it is not currently approved for a page.

Remove or merge a geographic record only when:

* it is a duplicate
* it is demonstrably incorrect
* it is an alias of another canonical entity
* the research itself is invalid

Publishing status and registry membership are separate decisions.

---

# 59. Canonical Location IDs

Machine-readable records should use stable internal IDs.

Recommended conceptual format:

```text
loc-stl-chesterfield
loc-sd-carlsbad
loc-lv-henderson
```

IDs should remain stable even if a display name or slug later changes.

---

# 60. Geographic Alias Handling

Aliases should resolve to one canonical entity.

Example:

```text
river-view
→
Riverview
→
/st-louis-mo/riverview/
```

Do not maintain two canonical URLs for aliases.

---

# 61. Geographic Collision Validation

The data layer should detect:

* duplicate canonical URLs
* duplicate IDs
* duplicate slugs within the same parent path
* incompatible parent-market assignments
* canonical/alias collisions
* market-specific service-route collisions

Invalid geography should fail validation.

---

# 62. Cross-Market Name Duplication

The same visible location name may exist in different markets.

Example:

```text
Spring Valley
```

may exist in more than one geographic market.

This is acceptable because canonical identity includes:

* stable ID
* market relationship
* canonical path

Do not treat visible name alone as a globally unique key.

---

# 63. Geographic Routing Source

Page components should consume:

```text
location.canonicalUrl
```

or equivalent approved page path.

Do not independently create URLs from:

```ts
location.name.toLowerCase()
```

because registry normalization may differ from generic slugification.

---

# 64. Geographic Metadata

Location records may eventually support verified metadata such as:

* county
* city
* state
* postal context
* latitude/longitude
* parent municipality
* service cluster
* property characteristics
* market-specific research

These fields should only be added when useful.

Do not overload the registry with data that belongs to page content research.

---

# 65. Local Content Differentiation

A location becoming an approved page does not mean the location record alone provides enough content.

Location content may require research into:

* housing stock
* sewer infrastructure
* common property types
* tree/root conditions
* commercial districts
* real estate activity
* municipal sewer responsibility
* local lateral programs
* geography-specific customer concerns

Do not fabricate these facts from the location name.

---

# 66. Municipal Program Relationships

St. Louis municipal sewer lateral content requires separate program validation.

A location existing in this registry does not imply:

* The Sewer Pros is approved by that municipality
* a sewer lateral program exists there
* a report is required
* the company can submit reports there

Those facts must be verified independently.

---

# 67. Current Launch Geography Summary

## St. Louis

Approved launch location pages:

```text
St. Louis City
Chesterfield
Ballwin
Florissant
St. Charles
```

## San Diego

Approved launch location pages:

```text
San Diego
San Marcos
Carlsbad
Escondido
Oceanside
Chula Vista
Mission Valley (commercial/mixed-use district)
```

## Las Vegas

Initial build / validation pages:

```text
Las Vegas
Henderson
North Las Vegas
Summerlin
```

Las Vegas pages remain behind the operational activation gate.

---

# 68. Registry vs Launch Count

The geographic research universe contains:

```text
579 locations
```

The initial page build uses only:

```text
16 location pages
```

This difference is intentional.

The remaining records create a long-term local SEO roadmap rather than unfinished launch work.

---

# 69. Expansion Prioritization

Post-launch geographic expansion should consider:

1. Google Search Console impressions
2. existing rankings
3. leads by city
4. calls by geography
5. customer address/service data
6. real estate referrals
7. commercial opportunities
8. GBP performance
9. competitor gaps
10. service profitability
11. operational coverage
12. ability to create differentiated content

Do not expand simply by proceeding alphabetically through the registry.

---

# 70. Market-Specific Expansion Order

## St. Louis

Generally prioritize:

```text
Remaining Tier 1 municipalities
↓
High-value county/submarket opportunities
↓
Commercial districts
↓
Selected St. Louis City neighborhoods
↓
Phase 2 municipalities
↓
Validated extended territory
```

## San Diego

Generally prioritize:

```text
Remaining Tier 1 cities
↓
North County
↓
Major City of San Diego communities
↓
South Bay / East County
↓
Commercial districts
↓
Selected neighborhoods
↓
Validated extended territory
```

## Las Vegas

After operational validation:

```text
Core cities
↓
Major communities
↓
Commercial / resort districts
↓
Master-planned communities
↓
Commercial corridors
↓
Validated outer territory
```

---

# 71. Machine-Readable Registry Is Not Route Authorization

Even when the JSON contains:

```json
{
  "index_status": "launch_candidate",
  "service_matrix": "full"
}
```

the application must not interpret that as:

```text
Generate the route.
```

The production chain remains:

```text
Location Registry
↓
Matrix
↓
Master Page Build List
↓
Approved Page Registry
↓
Route
```

---

# 72. `generateStaticParams()` Guardrail

Never do:

```ts
return locations.map((location) => ({
  market: location.market,
  location: location.slug,
}))
```

against the complete 579-record registry.

Correct concept:

```ts
return approvedLocationPages.map((page) => ({
  market: page.marketSlug,
  segments: page.routeSegments,
}))
```

The approved page inventory controls route generation.

---

# 73. Research-Only Routes Must 404

A research record may possess a conceptual canonical path in the registry for normalization purposes.

That does **not** mean the route should resolve publicly.

Example:

```text
/las-vegas-nv/allegiant-stadium-area/
```

may exist as a research entity.

If it has not been approved in:

`04-master-page-build-list.md`

the production website should return:

```text
404
```

rather than generating generic local content.

---

# 74. Geographic Indexation Rule

A location can enter the XML sitemap only when:

```text
Page exists in Master Page Build List
+
status permits production
+
indexable = true
+
content is complete
+
operational coverage is verified
```

Registry membership alone is insufficient.

---

# 75. Location Removal and Redirects

If an indexed location page is later:

* merged
* renamed
* retired
* consolidated

the migration process must evaluate:

* traffic
* backlinks
* conversions
* destination relevance

before creating the appropriate redirect.

Do not silently change location slugs.

---

# 76. Future Market Addition

Adding a future market requires:

1. approved market decision
2. market ID
3. market canonical URL
4. business/operational validation
5. location research
6. normalized geographic registry
7. matrix generation
8. page prioritization
9. Master Page Build List approval

The current three-market architecture should not need to be redesigned.

---

# 77. Source Provenance

The normalized registry was built from project-specific geography research for:

```text
St. Louis
San Diego
Las Vegas
```

The machine-readable companion should preserve source provenance for every record wherever available.

Research provenance should not be discarded during repository conversion.

---

# 78. Data Quality Rule

Before modifying a canonical geographic record, determine whether the proposed change is:

* a correction
* an alias
* a slug change
* a hierarchy change
* a market reassignment
* a status change
* a matrix change

Material changes should be recorded in:

`22-decisions-change-log.md`

---

# 79. Critical Location Registry Rules

### Rule 1

The registry contains 579 normalized geographic records.

### Rule 2

St. Louis contains 218 records.

### Rule 3

San Diego contains 222 records.

### Rule 4

Las Vegas contains 139 records.

### Rule 5

Registry membership does not authorize a page.

### Rule 6

Tier 1 status does not independently authorize launch.

### Rule 7

The Master Page Build List controls publication.

### Rule 8

Service, audience, and commercial matrix eligibility are independent fields.

### Rule 9

Research-only locations must not automatically generate routes.

### Rule 10

Manual-review locations require verification.

### Rule 11

Phase 3 areas require operational coverage validation.

### Rule 12

Neighborhood pages require stronger differentiation than primary-city pages.

### Rule 13

Commercial districts may favor commercial matrices over residential matrices.

### Rule 14

Landmarks and road corridors are not default residential location hubs.

### Rule 15

Aliases resolve to canonical locations rather than creating duplicate pages.

### Rule 16

Physical business locations and service areas must remain conceptually separate.

### Rule 17

Do not fabricate GBPs or offices from local landing pages.

### Rule 18

Las Vegas remains behind operational service validation.

### Rule 19

Canonical location paths must remain stable once indexed.

### Rule 20

The complete registry must never directly power `generateStaticParams()`.

---

# 80. Final Geographic Principle

The Sewer Pros geographic architecture should scale through **structured local relevance**, not mass page generation.

The project contains:

```text
579 normalized geographic opportunities
```

but only a strategically approved subset should ever become indexed URLs.

The governing model is:

```text
Real Operating Market
↓
Canonical Geography
↓
Service / Audience / Commercial Relevance
↓
Search + Conversion Opportunity
↓
Strategic Approval
↓
Unique Local Content
↓
Published Page
```

not:

```text
Location Name
↓
Insert City Into Template
↓
Publish
```

The geographic registry exists to provide The Sewer Pros with a deep, reusable local-search opportunity model while protecting the site from:

* thin location pages
* doorway-page patterns
* index bloat
* geographic duplication
* invented local presence
* unsupported service-area claims

**The registry models the geographic universe.
The Master Page Build List decides what becomes a website page.**
