# Master Location Registry

**Project:** The Sewer Pros multi-market website rebuild  
**Version:** 1.0  
**Markets:** St. Louis, MO · San Diego, CA · Las Vegas, NV

## Purpose

This registry is the normalized geographic source of truth for location hubs and all downstream service + location, audience + location, and commercial + location matrices. It intentionally separates **candidate geography** from **publishable/indexable pages** so the project can model the full opportunity without automatically creating thin local pages.

## Canonical URL rules

```text
/{market}/
/{market}/{location}/
/st-louis-mo/st-louis-city/{neighborhood}/
/{market}/{location}/{service}/
/{market}/{location}/for/{audience}/
/{market}/{location}/commercial/{service}/
```

**Hard rule:** flat service-location slugs such as `/san-diego-ca/sewer-camera-inspection-carlsbad/` and `/st-louis-mo/hydro-jetting-chesterfield/` are not canonical in this registry.

## Registry status model

| Status | Meaning |
|---|---|
| `launch` | market hub; canonical launch page |
| `launch_candidate` | Tier 1 source target; intended for launch after operational/content validation |
| `phase_2_candidate` | valid candidate retained in registry for staged expansion |
| `phase_3_validation` | outer/extended territory; dispatch/service coverage must be confirmed first |
| `research_only` | landmark/corridor or weak standalone-location intent; do not auto-publish |
| `manual_review` | source term, alias, or geography needs verification before use |

## Matrix eligibility model

| Value | Meaning |
|---|---|
| `full` | eligible for the primary matrix once service availability is confirmed |
| `selective` | create only high-value combinations with distinct intent/content |
| `conditional` | hold until service coverage and demand are validated |
| `hold` | do not generate matrix pages by default |

## Registry summary

| Market | Total canonical records | Tier 1 / launch | Phase 2 | Phase 3 | Review / hold |
|---|---:|---:|---:|---:|---:|
| St. Louis, MO | 218 | 43 | 142 | 18 | 15 |
| San Diego, CA | 222 | 34 | 154 | 23 | 11 |
| Las Vegas, NV | 139 | 25 | 85 | 10 | 19 |
| **Total** | **579** |  |  |  |  |

## Normalization decisions

- `bridgton` → `bridgeton` (the St. Louis source explicitly flags the typo).
- `river-view` → `riverview`.
- `saint-charles-county` → `st-charles-county`.
- `untincorporated-west-county` → `unincorporated-west-county`.
- `ranch-santa-fe` → `rancho-santa-fe`.
- `ranch-bernardo-business-park` → `rancho-bernardo-business-park`.
- Duplicate source occurrences are merged into one canonical record; original sections remain in `source_sections`.
- Landmarks, roads, airports, convention/stadium areas, parks, and similar terms are retained as research targets but are not automatically treated as residential location hubs.
- Outer territories are retained as Phase 3 candidates and require operational dispatch/service-area validation before publication.

# St. Louis, MO

## Market hub

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| St. Louis, MO | `/st-louis-mo/` | market_hub | — | launch_priority | full | selective | selective | market_confirmed_by_project_scope |

## Tier 1 launch candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Arnold | `/st-louis-mo/arnold/` | municipality_or_community | South County / Jefferson County | launch_priority, residential, property_management | full | selective | selective | candidate_from_source_research |
| Ballwin | `/st-louis-mo/ballwin/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Black Jack | `/st-louis-mo/black-jack/` | municipality_or_community | North County | launch_priority, residential, property_management, commercial | full | selective | selective | candidate_from_source_research |
| Brentwood | `/st-louis-mo/brentwood/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Bridgeton | `/st-louis-mo/bridgeton/` | municipality_or_community | North County | launch_priority, residential, property_management, commercial | full | selective | selective | candidate_from_source_research; aliases: bridgton |
| Chesterfield | `/st-louis-mo/chesterfield/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Clayton | `/st-louis-mo/clayton/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Cottleville | `/st-louis-mo/cottleville/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Crestwood | `/st-louis-mo/crestwood/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Creve Coeur | `/st-louis-mo/creve-coeur/` | municipality_or_community | St. Louis metro | launch_priority | full | selective | selective | candidate_from_source_research |
| Des Peres | `/st-louis-mo/des-peres/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Eureka | `/st-louis-mo/eureka/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Fenton | `/st-louis-mo/fenton/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Ferguson | `/st-louis-mo/ferguson/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Festus | `/st-louis-mo/festus/` | municipality_or_community | South County / Jefferson County | launch_priority, residential, property_management | full | selective | selective | candidate_from_source_research |
| Florissant | `/st-louis-mo/florissant/` | municipality_or_community | North County | launch_priority, residential, property_management, commercial | full | selective | selective | candidate_from_source_research |
| Frontenac | `/st-louis-mo/frontenac/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Hazelwood | `/st-louis-mo/hazelwood/` | municipality_or_community | North County | launch_priority, residential, property_management, commercial | full | selective | selective | candidate_from_source_research |
| High Ridge | `/st-louis-mo/high-ridge/` | municipality_or_community | South County / Jefferson County | launch_priority, residential, property_management | full | selective | selective | candidate_from_source_research |
| Imperial | `/st-louis-mo/imperial/` | municipality_or_community | South County / Jefferson County | launch_priority, residential, property_management | full | selective | selective | candidate_from_source_research |
| Kirkwood | `/st-louis-mo/kirkwood/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Ladue | `/st-louis-mo/ladue/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Lake St. Louis | `/st-louis-mo/lake-st-louis/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Manchester | `/st-louis-mo/manchester/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Maplewood | `/st-louis-mo/maplewood/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Maryland Heights | `/st-louis-mo/maryland-heights/` | municipality_or_community | North County | launch_priority, residential, property_management, commercial | full | selective | selective | candidate_from_source_research |
| O'Fallon, MO | `/st-louis-mo/ofallon-mo/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Olivette | `/st-louis-mo/olivette/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Overland | `/st-louis-mo/overland/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Richmond Heights | `/st-louis-mo/richmond-heights/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Rock Hill | `/st-louis-mo/rock-hill/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| St. Ann | `/st-louis-mo/st-ann/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| St. Charles | `/st-louis-mo/st-charles/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| St. Louis City | `/st-louis-mo/st-louis-city/` | independent_city_hub | St. Louis City | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| St. Peters | `/st-louis-mo/st-peters/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Sunset Hills | `/st-louis-mo/sunset-hills/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Town and Country | `/st-louis-mo/town-and-country/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| University City | `/st-louis-mo/university-city/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Valley Park | `/st-louis-mo/valley-park/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Webster Groves | `/st-louis-mo/webster-groves/` | municipality_or_community | Central County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Wentzville | `/st-louis-mo/wentzville/` | municipality_or_community | St. Charles County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Wildwood | `/st-louis-mo/wildwood/` | municipality_or_community | West County | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |

## Phase 2 candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Affton | `/st-louis-mo/affton/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Avondale | `/st-louis-mo/avondale/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bel Nor | `/st-louis-mo/bel-nor/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bel Ridge | `/st-louis-mo/bel-ridge/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bellefontaine Neighbors | `/st-louis-mo/bellefontaine-neighbors/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Berkeley | `/st-louis-mo/berkeley/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Beverly Hills Mo | `/st-louis-mo/beverly-hills-mo/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Breckenridge Hills | `/st-louis-mo/breckenridge-hills/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Byrnes Mill | `/st-louis-mo/byrnes-mill/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Calverton Park | `/st-louis-mo/calverton-park/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Charlack | `/st-louis-mo/charlack/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Chesterfield Valley | `/st-louis-mo/chesterfield-valley/` | commercial_or_mixed_use_district | West County | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Clarkson Valley | `/st-louis-mo/clarkson-valley/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Concord | `/st-louis-mo/concord/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Cool Valley | `/st-louis-mo/cool-valley/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Country Club Hills | `/st-louis-mo/country-club-hills/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Crystal City | `/st-louis-mo/crystal-city/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Crystal Lake Park | `/st-louis-mo/crystal-lake-park/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Dardenne Prairie | `/st-louis-mo/dardenne-prairie/` | municipality_or_community | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Dellwood | `/st-louis-mo/dellwood/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Earth City | `/st-louis-mo/earth-city/` | commercial_or_mixed_use_district | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Edmundson | `/st-louis-mo/edmundson/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Ellisville | `/st-louis-mo/ellisville/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Flordell Hills | `/st-louis-mo/flordell-hills/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Glasgow Village | `/st-louis-mo/glasgow-village/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Glendale | `/st-louis-mo/glendale/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Grantwood Village | `/st-louis-mo/grantwood-village/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Green Park | `/st-louis-mo/green-park/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Greendale | `/st-louis-mo/greendale/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Hanley Hills | `/st-louis-mo/hanley-hills/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Harvester | `/st-louis-mo/harvester/` | municipality_or_community | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Herculaneum | `/st-louis-mo/herculaneum/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Hillsdale | `/st-louis-mo/hillsdale/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Historic St. Charles | `/st-louis-mo/historic-st-charles/` | commercial_or_mixed_use_district | St. Charles County | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Huntleigh | `/st-louis-mo/huntleigh/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Jefferson County, MO | `/st-louis-mo/jefferson-county-mo/` | county_or_submarket_cluster | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Jennings | `/st-louis-mo/jennings/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Kimmswick | `/st-louis-mo/kimmswick/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Kinloch | `/st-louis-mo/kinloch/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Lakeshire | `/st-louis-mo/lakeshire/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Lemay | `/st-louis-mo/lemay/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Mackenzie | `/st-louis-mo/mackenzie/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Marlborough | `/st-louis-mo/marlborough/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mehlville | `/st-louis-mo/mehlville/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Moline Acres | `/st-louis-mo/moline-acres/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Normandy | `/st-louis-mo/normandy/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North County | `/st-louis-mo/north-county/` | county_or_submarket_cluster | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Northwoods | `/st-louis-mo/northwoods/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Oakland Mo | `/st-louis-mo/oakland-mo/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Oakville | `/st-louis-mo/oakville/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Old Town Florissant | `/st-louis-mo/old-town-florissant/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Pacific Mo | `/st-louis-mo/pacific-mo/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Pagedale | `/st-louis-mo/pagedale/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Pasadena Hills | `/st-louis-mo/pasadena-hills/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Pasadena Park | `/st-louis-mo/pasadena-park/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Pevely | `/st-louis-mo/pevely/` | municipality_or_community | South County / Jefferson County | residential, property_management | selective | selective | selective | candidate_from_source_research |
| Pine Lawn | `/st-louis-mo/pine-lawn/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| Riverview | `/st-louis-mo/riverview/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research; aliases: river-view |
| Sappington | `/st-louis-mo/sappington/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shrewsbury | `/st-louis-mo/shrewsbury/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Spanish Lake | `/st-louis-mo/spanish-lake/` | municipality_or_community | North County | residential, property_management, commercial | selective | selective | selective | candidate_from_source_research |
| St. Charles County | `/st-louis-mo/st-charles-county/` | county_or_submarket_cluster | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research; aliases: saint-charles-county |
| St. John | `/st-louis-mo/st-john/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Academy | `/st-louis-mo/st-louis-city/academy/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Baden | `/st-louis-mo/st-louis-city/baden/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Benton Park West | `/st-louis-mo/st-louis-city/benton-park-west/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Benton Park | `/st-louis-mo/st-louis-city/benton-park/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bevo Mill | `/st-louis-mo/st-louis-city/bevo-mill/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Boulevard Heights | `/st-louis-mo/st-louis-city/boulevard-heights/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Carondelet | `/st-louis-mo/st-louis-city/carondelet/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Carr Square | `/st-louis-mo/st-louis-city/carr-square/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Central West End | `/st-louis-mo/st-louis-city/central-west-end/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Cheltenham | `/st-louis-mo/st-louis-city/cheltenham/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Clifton Heights | `/st-louis-mo/st-louis-city/clifton-heights/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Columbus Square | `/st-louis-mo/st-louis-city/columbus-square/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Compton Heights | `/st-louis-mo/st-louis-city/compton-heights/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Cortex | `/st-louis-mo/st-louis-city/cortex/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| DeBaliviere Place | `/st-louis-mo/st-louis-city/debaliviere-place/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Dogtown | `/st-louis-mo/st-louis-city/dogtown/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Downtown St. Louis | `/st-louis-mo/st-louis-city/downtown-st-louis/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Downtown West | `/st-louis-mo/st-louis-city/downtown-west/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Dutchtown | `/st-louis-mo/st-louis-city/dutchtown/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Ellendale | `/st-louis-mo/st-louis-city/ellendale/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fairground | `/st-louis-mo/st-louis-city/fairground/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fontainebleau | `/st-louis-mo/st-louis-city/fontainebleau/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Forest Park Southeast | `/st-louis-mo/st-louis-city/forest-park-southeast/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fox Park | `/st-louis-mo/st-louis-city/fox-park/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Holly Hills | `/st-louis-mo/st-louis-city/holly-hills/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Hyde Park | `/st-louis-mo/st-louis-city/hyde-park/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Jeff-Vander-Lou | `/st-louis-mo/st-louis-city/jeff-vanderlou/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Kings Oak | `/st-louis-mo/st-louis-city/kings-oak/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Kingsway East | `/st-louis-mo/st-louis-city/kingsway-east/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Kingsway West | `/st-louis-mo/st-louis-city/kingsway-west/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Lafayette Square | `/st-louis-mo/st-louis-city/lafayette-square/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Lindenwood Park | `/st-louis-mo/st-louis-city/lindenwood-park/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Marine Villa | `/st-louis-mo/st-louis-city/marine-villa/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mark Twain / I-70 Industrial | `/st-louis-mo/st-louis-city/mark-twain-i-70-industrial/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Midtown | `/st-louis-mo/st-louis-city/midtown/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Mount Pleasant | `/st-louis-mo/st-louis-city/mount-pleasant/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North Hampton | `/st-louis-mo/st-louis-city/north-hampton/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North Point | `/st-louis-mo/st-louis-city/north-point/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North Riverfront | `/st-louis-mo/st-louis-city/north-riverfront/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Northampton | `/st-louis-mo/st-louis-city/northampton/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Old North St. Louis | `/st-louis-mo/st-louis-city/old-north-st-louis/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Patch | `/st-louis-mo/st-louis-city/patch/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Penrose | `/st-louis-mo/st-louis-city/penrose/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Princeton Heights | `/st-louis-mo/st-louis-city/princeton-heights/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shaw | `/st-louis-mo/st-louis-city/shaw/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Skinker-DeBaliviere | `/st-louis-mo/st-louis-city/skinker-debaliviere/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Soulard | `/st-louis-mo/st-louis-city/soulard/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Southampton | `/st-louis-mo/st-louis-city/southampton/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Southwest Garden | `/st-louis-mo/st-louis-city/southwest-garden/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| St. Louis Hills Estates | `/st-louis-mo/st-louis-city/st-louis-hills-estates/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| St. Louis Hills | `/st-louis-mo/st-louis-city/st-louis-hills/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Grove | `/st-louis-mo/st-louis-city/the-grove/` | commercial_or_mixed_use_district | St. Louis City | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| The Hill | `/st-louis-mo/st-louis-city/the-hill/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tiffany | `/st-louis-mo/st-louis-city/tiffany/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tower Grove East | `/st-louis-mo/st-louis-city/tower-grove-east/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tower Grove South | `/st-louis-mo/st-louis-city/tower-grove-south/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tyler Place | `/st-louis-mo/st-louis-city/tyler-place/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Visitation Park | `/st-louis-mo/st-louis-city/visitation-park/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Walnut Park East | `/st-louis-mo/st-louis-city/walnut-park-east/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Walnut Park West | `/st-louis-mo/st-louis-city/walnut-park-west/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| West Cabanne Place | `/st-louis-mo/st-louis-city/west-cabanne-place/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| West End | `/st-louis-mo/st-louis-city/west-end/` | st_louis_city_neighborhood | St. Louis City | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| St. Louis County | `/st-louis-mo/st-louis-county/` | county | — | — | selective | selective | selective | candidate_from_source_research; St. Louis County service footprint stated in source narrative. |
| St. Paul, MO | `/st-louis-mo/st-paul-mo/` | municipality_or_community | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Twin Oaks | `/st-louis-mo/twin-oaks/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Unincorporated West County | `/st-louis-mo/unincorporated-west-county/` | county_or_submarket_cluster | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research; aliases: untincorporated-west-county; Normalized aliases: untincorporated-west-county |
| University City Loop | `/st-louis-mo/university-city-loop/` | commercial_or_mixed_use_district | Central County | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Velda City | `/st-louis-mo/velda-city/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Velda Village Hills | `/st-louis-mo/velda-village-hills/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Vinita Park | `/st-louis-mo/vinita-park/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Vinita Terrace | `/st-louis-mo/vinita-terrace/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Warson Woods | `/st-louis-mo/warson-woods/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Weldon Spring Heights | `/st-louis-mo/weldon-spring-heights/` | municipality_or_community | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Weldon Spring | `/st-louis-mo/weldon-spring/` | municipality_or_community | St. Charles County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Wellston | `/st-louis-mo/wellston/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| West County | `/st-louis-mo/west-county/` | county_or_submarket_cluster | West County | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Westwood | `/st-louis-mo/westwood/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Wilbur Park | `/st-louis-mo/wilbur-park/` | municipality_or_community | West County | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Woodson Terrace | `/st-louis-mo/woodson-terrace/` | municipality_or_community | Central County | residential, real_estate | selective | selective | selective | candidate_from_source_research |

## Phase 3 / operational validation

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Augusta | `/st-louis-mo/augusta/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Barnhart | `/st-louis-mo/barnhart/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Cedar Hill Lakes | `/st-louis-mo/cedar-hill-lakes/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Cedar Hill | `/st-louis-mo/cedar-hill/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| De Soto | `/st-louis-mo/de-soto/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Defiance | `/st-louis-mo/defiance/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Flint Hill | `/st-louis-mo/flint-hill/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Foristell | `/st-louis-mo/foristell/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Hillsboro | `/st-louis-mo/hillsboro/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| House Springs | `/st-louis-mo/house-springs/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Josephville | `/st-louis-mo/josephville/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| New Melle | `/st-louis-mo/new-melle/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Olympian Village | `/st-louis-mo/olympian-village/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Orchard Farm | `/st-louis-mo/orchard-farm/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Parkdale | `/st-louis-mo/parkdale/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Peaceful Village | `/st-louis-mo/peaceful-village/` | extended_service_area | South County / Jefferson County | residential, property_management, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Portage Des Sioux | `/st-louis-mo/portage-des-sioux/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| West Alton | `/st-louis-mo/west-alton/` | extended_service_area | St. Charles County | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |

## Research-only / corridor / landmark targets

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Bablers Park | `/st-louis-mo/bablers-park/` | landmark_or_corridor | West County | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Creve Coeur Lake | `/st-louis-mo/creve-coeur-lake/` | landmark_or_corridor | North County | residential, property_management, commercial | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Lemay Ferry | `/st-louis-mo/st-louis-city/lemay-ferry/` | landmark_or_corridor | St. Louis City | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Tower Grove Park | `/st-louis-mo/st-louis-city/tower-grove-park/` | landmark_or_corridor | St. Louis City | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |

## Manual review queue

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Bellerive | `/st-louis-mo/bellerive/` | manual_review | North County | residential, property_management, commercial | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Chesterfield Grove | `/st-louis-mo/chesterfield-grove/` | manual_review | West County | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Grover | `/st-louis-mo/grover/` | manual_review | West County | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Old Jamestown | `/st-louis-mo/old-jamestown/` | manual_review | St. Charles County | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Peruque | `/st-louis-mo/peruque/` | manual_review | St. Charles County | residential, real_estate, extended_service_area | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Downtown East | `/st-louis-mo/st-louis-city/downtown-east/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Downtown Loft District | `/st-louis-mo/st-louis-city/downtown-loft-district/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Mcdermott | `/st-louis-mo/st-louis-city/mcdermott/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Neighborhoods Near North Riverfront | `/st-louis-mo/st-louis-city/neighborhoods-near-north-riverfront/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Ope | `/st-louis-mo/st-louis-city/ope/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Volet | `/st-louis-mo/st-louis-city/volet/` | manual_review | St. Louis City | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |

# San Diego, CA

## Market hub

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| San Diego, CA | `/san-diego-ca/` | market_hub | — | launch_priority | full | selective | selective | market_confirmed_by_project_scope |

## Tier 1 launch candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Bonita | `/san-diego-ca/bonita/` | city_or_major_community | South Bay | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| Carlsbad | `/san-diego-ca/carlsbad/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Carmel Valley | `/san-diego-ca/carmel-valley/` | city_or_major_community | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Chula Vista | `/san-diego-ca/chula-vista/` | city_or_major_community | South Bay | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| Coronado | `/san-diego-ca/coronado/` | city_or_major_community | South Bay | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| Del Mar | `/san-diego-ca/del-mar/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| El Cajon | `/san-diego-ca/el-cajon/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Encinitas | `/san-diego-ca/encinitas/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Escondido | `/san-diego-ca/escondido/` | city_or_major_community | North County / North County inland | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Fallbrook | `/san-diego-ca/fallbrook/` | city_or_major_community | North County / North County inland | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Hillcrest | `/san-diego-ca/hillcrest/` | city_or_major_community | City of San Diego / Urban core and Uptown | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Imperial Beach | `/san-diego-ca/imperial-beach/` | city_or_major_community | South Bay | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| La Jolla | `/san-diego-ca/la-jolla/` | city_or_major_community | City of San Diego / Coastal and peninsula communities | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| La Mesa | `/san-diego-ca/la-mesa/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Lakeside | `/san-diego-ca/lakeside/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Lemon Grove | `/san-diego-ca/lemon-grove/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Mira Mesa | `/san-diego-ca/mira-mesa/` | city_or_major_community | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Mission Valley | `/san-diego-ca/mission-valley/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate, commercial | selective | selective | full | candidate_from_source_research |
| National City | `/san-diego-ca/national-city/` | city_or_major_community | South Bay | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| North Park | `/san-diego-ca/north-park/` | city_or_major_community | City of San Diego / Urban core and Uptown | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Oceanside | `/san-diego-ca/oceanside/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Pacific Beach | `/san-diego-ca/pacific-beach/` | city_or_major_community | City of San Diego / Coastal and peninsula communities | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Poway | `/san-diego-ca/poway/` | city_or_major_community | North County / North County inland | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Rancho Bernardo | `/san-diego-ca/rancho-bernardo/` | city_or_major_community | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Rancho Peñasquitos | `/san-diego-ca/rancho-penasquitos/` | city_or_major_community | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Rancho Santa Fe | `/san-diego-ca/rancho-santa-fe/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research; aliases: ranch-santa-fe |
| San Diego | `/san-diego-ca/san-diego/` | city_or_major_community | San Diego metro | launch_priority | full | selective | selective | candidate_from_source_research |
| San Marcos | `/san-diego-ca/san-marcos/` | city_or_major_community | North County / North County inland | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Santee | `/san-diego-ca/santee/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Scripps Ranch | `/san-diego-ca/scripps-ranch/` | city_or_major_community | City of San Diego / Central, north inland, and I-15 corridor | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Solana Beach | `/san-diego-ca/solana-beach/` | city_or_major_community | North County / North County coastal | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Spring Valley | `/san-diego-ca/spring-valley/` | city_or_major_community | East County | launch_priority | full | selective | selective | candidate_from_source_research |
| Vista | `/san-diego-ca/vista/` | city_or_major_community | North County / North County inland | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |

## Phase 2 candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| 4S Ranch | `/san-diego-ca/4s-ranch/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Allied Gardens | `/san-diego-ca/allied-gardens/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Aviara | `/san-diego-ca/aviara/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bankers Hill | `/san-diego-ca/bankers-hill/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Barrio Logan | `/san-diego-ca/barrio-logan/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bay Ho | `/san-diego-ca/bay-ho/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bay Park | `/san-diego-ca/bay-park/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bird Rock | `/san-diego-ca/bird-rock/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Birdland | `/san-diego-ca/birdland/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Black Mountain Ranch | `/san-diego-ca/black-mountain-ranch/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Bonita Long Canyon | `/san-diego-ca/bonita-long-canyon/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Bressi Ranch | `/san-diego-ca/bressi-ranch/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Broadway Heights | `/san-diego-ca/broadway-heights/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Cardiff-by-the-Sea | `/san-diego-ca/cardiff-by-the-sea/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Carlsbad South | `/san-diego-ca/carlsbad-south/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Carlsbad Village | `/san-diego-ca/carlsbad-village/` | commercial_or_mixed_use_district | North County / North County coastal | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Carmel Mountain Ranch | `/san-diego-ca/carmel-mountain-ranch/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Casa De Oro | `/san-diego-ca/casa-de-oro/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Chollas View | `/san-diego-ca/chollas-view/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| City Heights | `/san-diego-ca/city-heights/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Clairemont Mesa | `/san-diego-ca/clairemont-mesa/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Clairemont | `/san-diego-ca/clairemont/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Colina Del Sol | `/san-diego-ca/colina-del-sol/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| College Area | `/san-diego-ca/college-area/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Columbia District | `/san-diego-ca/columbia-district/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Coronado Village | `/san-diego-ca/coronado-village/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Cortez Hill | `/san-diego-ca/cortez-hill/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Crown Point | `/san-diego-ca/crown-point/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Del Cerro | `/san-diego-ca/del-cerro/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Del Mar Heights | `/san-diego-ca/del-mar-heights/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Del Mar Mesa | `/san-diego-ca/del-mar-mesa/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Discovery Hills | `/san-diego-ca/discovery-hills/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Downtown Chula Vista | `/san-diego-ca/downtown-chula-vista/` | commercial_or_mixed_use_district | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Downtown Escondido | `/san-diego-ca/downtown-escondido/` | commercial_or_mixed_use_district | North County / North County inland | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Downtown San Diego | `/san-diego-ca/downtown-san-diego/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| East County | `/san-diego-ca/east-county/` | submarket_cluster | San Diego metro | — | selective | selective | selective | candidate_from_source_research; Strategic cluster in source; registry/navigation parent. |
| East Otay Mesa | `/san-diego-ca/east-otay-mesa/` | commercial_or_mixed_use_district | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| East Village | `/san-diego-ca/east-village/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Eastlake Greens | `/san-diego-ca/eastlake-greens/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Eastlake Vistas | `/san-diego-ca/eastlake-vistas/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Eastlake | `/san-diego-ca/eastlake/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Eggers Highlands | `/san-diego-ca/eggers-highlands/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| El Cerrito | `/san-diego-ca/el-cerrito/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Emerald Hills | `/san-diego-ca/emerald-hills/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Encanto | `/san-diego-ca/encanto/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Eucalyptus Hills | `/san-diego-ca/eucalyptus-hills/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Fairbanks Ranch | `/san-diego-ca/fairbanks-ranch/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fashion Valley | `/san-diego-ca/fashion-valley/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Fire Mountain | `/san-diego-ca/fire-mountain/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fletcher Hills | `/san-diego-ca/fletcher-hills/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Gaslamp Quarter | `/san-diego-ca/gaslamp-quarter/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Golden Hill | `/san-diego-ca/golden-hill/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Golden Triangle | `/san-diego-ca/golden-triangle/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Granite Hills | `/san-diego-ca/granite-hills/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Grantville | `/san-diego-ca/grantville/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Harmony Grove | `/san-diego-ca/harmony-grove/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Hidden Meadows | `/san-diego-ca/hidden-meadows/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Horton Plaza | `/san-diego-ca/horton-plaza/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Jesmond Dene | `/san-diego-ca/jesmond-dene/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Kearny Mesa | `/san-diego-ca/kearny-mesa/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Kensington | `/san-diego-ca/kensington/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| La Costa | `/san-diego-ca/la-costa/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| La Jolla Farms | `/san-diego-ca/la-jolla-farms/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| La Jolla Shores | `/san-diego-ca/la-jolla-shores/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| La Jolla Village | `/san-diego-ca/la-jolla-village/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| La Mesa Village | `/san-diego-ca/la-mesa-village/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Lake San Marcos | `/san-diego-ca/lake-san-marcos/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Leucadia | `/san-diego-ca/leucadia/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Liberty Station | `/san-diego-ca/liberty-station/` | commercial_or_mixed_use_district | City of San Diego / Coastal and peninsula communities | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Lincoln Park | `/san-diego-ca/lincoln-park/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Linda Vista | `/san-diego-ca/linda-vista/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Little Italy | `/san-diego-ca/little-italy/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Logan Heights | `/san-diego-ca/logan-heights/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Marina District | `/san-diego-ca/marina-district/` | commercial_or_mixed_use_district | City of San Diego / Urban core and Uptown | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Middletown | `/san-diego-ca/middletown/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Midway District | `/san-diego-ca/midway-district/` | commercial_or_mixed_use_district | City of San Diego / Coastal and peninsula communities | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Millenia | `/san-diego-ca/millenia/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Miramar Ranch North | `/san-diego-ca/miramar-ranch-north/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Miramar | `/san-diego-ca/miramar/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Mission Bay | `/san-diego-ca/mission-bay/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mission Beach | `/san-diego-ca/mission-beach/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mission Hills | `/san-diego-ca/mission-hills/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mission Valley East | `/san-diego-ca/mission-valley-east/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mission Valley West | `/san-diego-ca/mission-valley-west/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mount Helix | `/san-diego-ca/mount-helix/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Mount Hope | `/san-diego-ca/mount-hope/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Mountain View | `/san-diego-ca/mountain-view/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Murphy Canyon | `/san-diego-ca/murphy-canyon/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Navajo | `/san-diego-ca/navajo/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Nestor | `/san-diego-ca/nestor/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| New Encinitas | `/san-diego-ca/new-encinitas/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Normal Heights | `/san-diego-ca/normal-heights/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North Clairemont | `/san-diego-ca/north-clairemont/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North County | `/san-diego-ca/north-county/` | submarket_cluster | San Diego metro | — | selective | selective | selective | candidate_from_source_research; Strategic cluster in source; useful as registry parent, not automatically an indexable location page. |
| North Pacific Beach | `/san-diego-ca/north-pacific-beach/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Oak Park | `/san-diego-ca/oak-park/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Ocean Beach | `/san-diego-ca/ocean-beach/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Oceanside Harbor | `/san-diego-ca/oceanside-harbor/` | commercial_or_mixed_use_district | North County / North County coastal | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Old Creek Ranch | `/san-diego-ca/old-creek-ranch/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Old Encinitas | `/san-diego-ca/old-encinitas/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Old Poway | `/san-diego-ca/old-poway/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Old Town | `/san-diego-ca/old-town/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Olivenhain | `/san-diego-ca/olivenhain/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Otay Mesa Industrial | `/san-diego-ca/otay-mesa-industrial/` | commercial_or_mixed_use_district | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Otay Mesa-Nestor | `/san-diego-ca/otay-mesa-nestor/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Otay Mesa West | `/san-diego-ca/otay-mesa-west/` | commercial_or_mixed_use_district | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Otay Mesa | `/san-diego-ca/otay-mesa/` | commercial_or_mixed_use_district | City of San Diego / South San Diego communities | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Otay Ranch | `/san-diego-ca/otay-ranch/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Pacific Highlands Ranch | `/san-diego-ca/pacific-highlands-ranch/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Pacific Highway | `/san-diego-ca/pacific-highway/` | commercial_or_mixed_use_district | City of San Diego / Coastal and peninsula communities | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Palm City | `/san-diego-ca/palm-city/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Paradise Hills | `/san-diego-ca/paradise-hills/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Point Loma | `/san-diego-ca/point-loma/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Rancho Bernardo Business Park | `/san-diego-ca/rancho-bernardo-business-park/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research; aliases: ranch-bernardo-business-park; Normalized aliases: ranch-bernardo-business-park |
| Rancho Del Rey | `/san-diego-ca/rancho-del-rey/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Rancho San Diego | `/san-diego-ca/rancho-san-diego/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Rolando Village | `/san-diego-ca/rolando-village/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Rolando | `/san-diego-ca/rolando/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sabre Springs | `/san-diego-ca/sabre-springs/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| San Carlos | `/san-diego-ca/san-carlos/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| San Elijo Hills | `/san-diego-ca/san-elijo-hills/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| San Ysidro | `/san-diego-ca/san-ysidro/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Serra Mesa | `/san-diego-ca/serra-mesa/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shadowridge | `/san-diego-ca/shadowridge/` | community_or_neighborhood | North County / North County inland | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shelltown | `/san-diego-ca/shelltown/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shelter Island | `/san-diego-ca/shelter-island/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sherman Heights | `/san-diego-ca/sherman-heights/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Silver Strand | `/san-diego-ca/silver-strand/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Skyline | `/san-diego-ca/skyline/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sorrento Mesa | `/san-diego-ca/sorrento-mesa/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Sorrento Valley | `/san-diego-ca/sorrento-valley/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| South Bay | `/san-diego-ca/south-bay/` | submarket_cluster | San Diego metro | — | selective | selective | selective | candidate_from_source_research; Strategic cluster in source; registry/navigation parent. |
| South Oceanside | `/san-diego-ca/south-oceanside/` | community_or_neighborhood | North County / North County coastal | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| South Park | `/san-diego-ca/south-park/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| South San Diego | `/san-diego-ca/south-san-diego/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Southcrest | `/san-diego-ca/southcrest/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Stockton | `/san-diego-ca/stockton/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sunbow | `/san-diego-ca/sunbow/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Sunset Cliffs | `/san-diego-ca/sunset-cliffs/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Talmadge | `/san-diego-ca/talmadge/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Terra Nova | `/san-diego-ca/terra-nova/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Tierrasanta | `/san-diego-ca/tierrasanta/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tijuana River Valley | `/san-diego-ca/tijuana-river-valley/` | san_diego_community_or_neighborhood | City of San Diego / South San Diego communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Torrey Highlands | `/san-diego-ca/torrey-highlands/` | san_diego_community_or_neighborhood | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Torrey Hills | `/san-diego-ca/torrey-hills/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Torrey Pines | `/san-diego-ca/torrey-pines/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| University City | `/san-diego-ca/university-city/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| University Heights | `/san-diego-ca/university-heights/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Uptown San Diego | `/san-diego-ca/uptown-san-diego/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| UTC | `/san-diego-ca/utc/` | commercial_or_mixed_use_district | City of San Diego / Central, north inland, and I-15 corridor | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Valencia Park | `/san-diego-ca/valencia-park/` | san_diego_community_or_neighborhood | City of San Diego / Urban core and Uptown | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| West Chula Vista | `/san-diego-ca/west-chula-vista/` | community_or_neighborhood | South Bay | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Winter Gardens | `/san-diego-ca/winter-gardens/` | community_or_extended_area | East County | — | selective | selective | selective | candidate_from_source_research |
| Wooded Area | `/san-diego-ca/wooded-area/` | san_diego_community_or_neighborhood | City of San Diego / Coastal and peninsula communities | residential, real_estate | selective | selective | selective | candidate_from_source_research |

## Phase 3 / operational validation

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Alpine | `/san-diego-ca/alpine/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Bonsall | `/san-diego-ca/bonsall/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Borrego Springs | `/san-diego-ca/borrego-springs/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Boulevard | `/san-diego-ca/boulevard/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Campo | `/san-diego-ca/campo/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Crest | `/san-diego-ca/crest/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| De Luz | `/san-diego-ca/de-luz/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Descanso | `/san-diego-ca/descanso/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Dulzura | `/san-diego-ca/dulzura/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Harbison Canyon | `/san-diego-ca/harbison-canyon/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| High Valley | `/san-diego-ca/high-valley/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Jacumba Hot Springs | `/san-diego-ca/jacumba-hot-springs/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Jamul | `/san-diego-ca/jamul/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Julian | `/san-diego-ca/julian/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Pala | `/san-diego-ca/pala/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Pauma Valley | `/san-diego-ca/pauma-valley/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Pine Valley | `/san-diego-ca/pine-valley/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Potrero | `/san-diego-ca/potrero/` | extended_service_area | East County | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Rainbow | `/san-diego-ca/rainbow/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Ramona | `/san-diego-ca/ramona/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Rincon | `/san-diego-ca/rincon/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| San Pasqual | `/san-diego-ca/san-pasqual/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Valley Center | `/san-diego-ca/valley-center/` | extended_service_area | North County / North County inland | residential, real_estate, extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |

## Manual review queue

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Buena | `/san-diego-ca/buena/` | manual_review | North County / North County inland | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| East San Diego | `/san-diego-ca/east-san-diego/` | manual_review | City of San Diego / South San Diego communities | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Imperial Beach Military | `/san-diego-ca/imperial-beach-military/` | manual_review | South Bay | residential, real_estate, commercial | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| La Presita | `/san-diego-ca/la-presita/` | manual_review | East County | — | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Memorial | `/san-diego-ca/memorial/` | manual_review | City of San Diego / South San Diego communities | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Paradise Valley | `/san-diego-ca/paradise-valley/` | manual_review | South Bay | residential, real_estate, commercial | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Rancho Del Lago | `/san-diego-ca/rancho-del-lago/` | manual_review | North County / North County coastal | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Richland | `/san-diego-ca/richland/` | manual_review | North County / North County inland | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| San Elijo | `/san-diego-ca/san-elijo/` | manual_review | North County / North County coastal | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Vallecitos | `/san-diego-ca/vallecitos/` | manual_review | North County / North County coastal | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |
| Warmlands | `/san-diego-ca/warmlands/` | manual_review | North County / North County inland | residential, real_estate | hold | hold | hold | geography_or_naming_review_required; manual verification required |

# Las Vegas, NV

## Market hub

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Las Vegas, NV | `/las-vegas-nv/` | market_hub | — | launch_priority | full | selective | selective | market_confirmed_by_project_scope |

## Tier 1 launch candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Aliante | `/las-vegas-nv/aliante/` | major_community | North Las Vegas | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| Boulder City | `/las-vegas-nv/boulder-city/` | primary_city | Boulder City / Outer Coverage | launch_priority | full | selective | selective | candidate_from_source_research |
| Centennial Hills | `/las-vegas-nv/centennial-hills/` | major_community | City of Las Vegas | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Downtown Las Vegas | `/las-vegas-nv/downtown-las-vegas/` | commercial_or_mixed_use_district | City of Las Vegas | launch_priority, residential, real_estate, commercial | selective | selective | full | candidate_from_source_research |
| Enterprise | `/las-vegas-nv/enterprise/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |
| Green Valley | `/las-vegas-nv/green-valley/` | major_community | Henderson | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Henderson | `/las-vegas-nv/henderson/` | primary_city | Henderson | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Las Vegas Strip | `/las-vegas-nv/las-vegas-strip/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | launch_priority, commercial, hospitality, restaurants | selective | selective | full | candidate_from_source_research |
| Las Vegas | `/las-vegas-nv/las-vegas/` | primary_city | Las Vegas metro | launch_priority | full | selective | selective | candidate_from_source_research |
| Mountain's Edge | `/las-vegas-nv/mountain-s-edge/` | major_community | Enterprise / Southwest | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| North Las Vegas | `/las-vegas-nv/north-las-vegas/` | primary_city | North Las Vegas | launch_priority, residential, real_estate, commercial | full | selective | selective | candidate_from_source_research |
| Paradise | `/las-vegas-nv/paradise/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |
| Peccole Ranch | `/las-vegas-nv/peccole-ranch/` | major_community | Enterprise / Southwest | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Providence | `/las-vegas-nv/providence/` | major_community | City of Las Vegas | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Skye Canyon | `/las-vegas-nv/skye-canyon/` | major_community | City of Las Vegas | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Southern Highlands | `/las-vegas-nv/southern-highlands/` | major_community | Enterprise / Southwest | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Spring Valley | `/las-vegas-nv/spring-valley/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |
| Summerlin South | `/las-vegas-nv/summerlin-south/` | major_community | City of Las Vegas | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Summerlin West | `/las-vegas-nv/summerlin-west/` | major_community | City of Las Vegas | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Summerlin | `/las-vegas-nv/summerlin/` | major_community | Northwest / Summerlin | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Sunrise Manor | `/las-vegas-nv/sunrise-manor/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |
| The Lakes | `/las-vegas-nv/the-lakes/` | major_community | Enterprise / Southwest | launch_priority, residential, real_estate | full | selective | selective | candidate_from_source_research |
| Whitney | `/las-vegas-nv/whitney/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |
| Winchester | `/las-vegas-nv/winchester/` | major_community | Unincorporated valley | launch_priority | full | selective | selective | candidate_from_source_research |

## Phase 2 candidates

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Angel Park | `/las-vegas-nv/angel-park/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Anthem Country Club | `/las-vegas-nv/anthem-country-club/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Anthem | `/las-vegas-nv/anthem/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Apex Industrial Park | `/las-vegas-nv/apex-industrial-park/` | commercial_or_mixed_use_district | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Arts District | `/las-vegas-nv/arts-district/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Black Mountain | `/las-vegas-nv/black-mountain/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Cadence | `/las-vegas-nv/cadence/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Canyon Gate | `/las-vegas-nv/canyon-gate/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Charleston Heights | `/las-vegas-nv/charleston-heights/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Cheyenne | `/las-vegas-nv/cheyenne/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Chinatown | `/las-vegas-nv/chinatown/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Civic Center | `/las-vegas-nv/civic-center/` | commercial_or_mixed_use_district | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Craig Ranch | `/las-vegas-nv/craig-ranch/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Desert Breeze | `/las-vegas-nv/desert-breeze/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Desert Inn | `/las-vegas-nv/desert-inn/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Desert Shores | `/las-vegas-nv/desert-shores/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Downtown Summerlin | `/las-vegas-nv/downtown-summerlin/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| East Tropicana | `/las-vegas-nv/east-tropicana/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Eldorado | `/las-vegas-nv/eldorado/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Elkhorn Springs | `/las-vegas-nv/elkhorn-springs/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Flamingo Corridor | `/las-vegas-nv/flamingo-corridor/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Foothills Ranch | `/las-vegas-nv/foothills-ranch/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fort Apache | `/las-vegas-nv/fort-apache/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fox Hill | `/las-vegas-nv/fox-hill/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Fremont East | `/las-vegas-nv/fremont-east/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Green Valley North | `/las-vegas-nv/green-valley-north/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Green Valley Ranch | `/las-vegas-nv/green-valley-ranch/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Green Valley South | `/las-vegas-nv/green-valley-south/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Henderson Industrial | `/las-vegas-nv/henderson-industrial/` | commercial_or_mixed_use_district | Henderson | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Historic Westside | `/las-vegas-nv/historic-westside/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Inspirada | `/las-vegas-nv/inspirada/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Iron Mountain Ranch | `/las-vegas-nv/iron-mountain-ranch/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Lake Las Vegas | `/las-vegas-nv/lake-las-vegas/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Las Vegas Country Club | `/las-vegas-nv/las-vegas-country-club/` | neighborhood_or_master_planned_community | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Las Vegas Valley | `/las-vegas-nv/las-vegas-valley/` | submarket_cluster | — | — | selective | selective | selective | candidate_from_source_research; Metro service-area concept; registry/navigation parent, not a duplicate metro homepage. |
| Lone Mountain | `/las-vegas-nv/lone-mountain/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Los Prados | `/las-vegas-nv/los-prados/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| MacDonald Highlands | `/las-vegas-nv/macdonald-highlands/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| MacDonald Ranch | `/las-vegas-nv/macdonald-ranch/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Medical District | `/las-vegas-nv/medical-district/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Mission Hills | `/las-vegas-nv/mission-hills/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Monaco | `/las-vegas-nv/monaco/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| North Las Vegas Industrial | `/las-vegas-nv/north-las-vegas-industrial/` | commercial_or_mixed_use_district | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| North Valley | `/las-vegas-nv/north-valley/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Painted Desert | `/las-vegas-nv/painted-desert/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Paradise Road | `/las-vegas-nv/paradise-road/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Queensridge | `/las-vegas-nv/queensridge/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Rancho Charleston | `/las-vegas-nv/rancho-charleston/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Rancho Oakey | `/las-vegas-nv/rancho-oakey/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Red Rock Country Club | `/las-vegas-nv/red-rock-country-club/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Redpoint | `/las-vegas-nv/redpoint/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Rhodes Ranch | `/las-vegas-nv/rhodes-ranch/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Ridgebrook | `/las-vegas-nv/ridgebrook/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sands Avenue | `/las-vegas-nv/sands-avenue/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Seven Hills | `/las-vegas-nv/seven-hills/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Shadow Creek | `/las-vegas-nv/shadow-creek/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Silverado Ranch | `/las-vegas-nv/silverado-ranch/` | major_community | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Silverstone Ranch | `/las-vegas-nv/silverstone-ranch/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Skye View | `/las-vegas-nv/skye-view/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| South Las Vegas Boulevard | `/las-vegas-nv/south-las-vegas-boulevard/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Southeast Las Vegas | `/las-vegas-nv/southeast-las-vegas/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Southern Highlands Golf Club | `/las-vegas-nv/southern-highlands-golf-club/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Southwest Industrial | `/las-vegas-nv/southwest-industrial/` | commercial_or_mixed_use_district | Enterprise / Southwest | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Southwest Las Vegas | `/las-vegas-nv/southwest-las-vegas/` | commercial_or_mixed_use_district | Enterprise / Southwest | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Southwest Ridge | `/las-vegas-nv/southwest-ridge/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sterling Ridge | `/las-vegas-nv/sterling-ridge/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Stonebridge | `/las-vegas-nv/stonebridge/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Summerlin North | `/las-vegas-nv/summerlin-north/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Sun City Aliante | `/las-vegas-nv/sun-city-aliante/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Sun City Summerlin | `/las-vegas-nv/sun-city-summerlin/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Arbors | `/las-vegas-nv/the-arbors/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Crossing | `/las-vegas-nv/the-crossing/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Gardens | `/las-vegas-nv/the-gardens/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Hills | `/las-vegas-nv/the-hills/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Paseos | `/las-vegas-nv/the-paseos/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Trails | `/las-vegas-nv/the-trails/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Vistas | `/las-vegas-nv/the-vistas/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| The Willows | `/las-vegas-nv/the-willows/` | neighborhood_or_master_planned_community | Northwest / Summerlin | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tiburon | `/las-vegas-nv/tiburon/` | neighborhood_or_master_planned_community | Enterprise / Southwest | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Tropicana Corridor | `/las-vegas-nv/tropicana-corridor/` | commercial_or_mixed_use_district | Paradise / Resort Corridor | commercial, hospitality, restaurants | selective | selective | selective | candidate_from_source_research |
| Tule Springs | `/las-vegas-nv/tule-springs/` | neighborhood_or_master_planned_community | City of Las Vegas | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Valley View | `/las-vegas-nv/valley-view/` | neighborhood_or_master_planned_community | Henderson | residential, real_estate | selective | selective | selective | candidate_from_source_research |
| Valley Vista | `/las-vegas-nv/valley-vista/` | neighborhood_or_master_planned_community | North Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| Water Street District | `/las-vegas-nv/water-street-district/` | commercial_or_mixed_use_district | Henderson | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |
| West Sahara | `/las-vegas-nv/west-sahara/` | commercial_or_mixed_use_district | City of Las Vegas | residential, real_estate, commercial | selective | selective | selective | candidate_from_source_research |

## Phase 3 / operational validation

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Blue Diamond | `/las-vegas-nv/blue-diamond/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Goodsprings | `/las-vegas-nv/goodsprings/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Indian Springs | `/las-vegas-nv/indian-springs/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Jean | `/las-vegas-nv/jean/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Laughlin | `/las-vegas-nv/laughlin/` | extended_service_area | Boulder City / Outer Coverage | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Mesquite | `/las-vegas-nv/mesquite/` | extended_service_area | Boulder City / Outer Coverage | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Mount Charleston | `/las-vegas-nv/mount-charleston/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Red Rock | `/las-vegas-nv/red-rock/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Sandy Valley | `/las-vegas-nv/sandy-valley/` | extended_service_area | Unincorporated valley | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |
| Searchlight | `/las-vegas-nv/searchlight/` | extended_service_area | Boulder City / Outer Coverage | extended_service_area | conditional | conditional | conditional | operational_coverage_required; coverage confirmation required |

## Research-only / corridor / landmark targets

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Airport Area | `/las-vegas-nv/airport-area/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Allegiant Stadium Area | `/las-vegas-nv/allegiant-stadium-area/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Blue Diamond Road | `/las-vegas-nv/blue-diamond-road/` | landmark_or_corridor | Enterprise / Southwest | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Exploration Peak Park | `/las-vegas-nv/exploration-peak-park/` | landmark_or_corridor | Enterprise / Southwest | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Harry Reid International Airport Area | `/las-vegas-nv/harry-reid-international-airport-area/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Hoover Dam Area | `/las-vegas-nv/hoover-dam-area/` | landmark_or_corridor | Boulder City / Outer Coverage | — | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Lake Mead | `/las-vegas-nv/lake-mead/` | landmark_or_corridor | Boulder City / Outer Coverage | — | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Las Vegas Convention Center | `/las-vegas-nv/las-vegas-convention-center/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Las Vegas Motor Speedway | `/las-vegas-nv/las-vegas-motor-speedway/` | landmark_or_corridor | North Las Vegas | residential, real_estate, commercial | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Las Vegas Wash | `/las-vegas-nv/las-vegas-wash/` | landmark_or_corridor | Henderson | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Nellis Air Force Base | `/las-vegas-nv/nellis-air-force-base/` | landmark_or_corridor | North Las Vegas | residential, real_estate, commercial | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Nellis | `/las-vegas-nv/nellis/` | landmark_or_corridor | North Las Vegas | residential, real_estate, commercial | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Rae Road | `/las-vegas-nv/rae-road/` | landmark_or_corridor | Enterprise / Southwest | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Railroad Pass | `/las-vegas-nv/railroad-pass/` | landmark_or_corridor | Henderson | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| South Point | `/las-vegas-nv/south-point/` | landmark_or_corridor | Enterprise / Southwest | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Town Square | `/las-vegas-nv/town-square/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| UNLV | `/las-vegas-nv/unlv/` | landmark_or_corridor | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |
| Windmill | `/las-vegas-nv/windmill/` | landmark_or_corridor | Enterprise / Southwest | residential, real_estate | hold | hold | selective | intent_and_page_value_review_required; not a default residential hub |

## Manual review queue

| Name | Canonical URL | Type | Cluster | Priority tags | Service matrix | Audience matrix | Commercial matrix | Validation / notes |
|---|---|---|---|---|---|---|---|---|
| Virginia Street | `/las-vegas-nv/virginia-street/` | manual_review | Paradise / Resort Corridor | commercial, hospitality, restaurants | hold | hold | hold | geography_or_naming_review_required; manual verification required |

# Manual-review policy

Records in `manual_review`, `research_only`, or `phase_3_validation` remain in the master data set so no research is lost. They must not be used to generate indexable matrix pages until the stated validation is complete.

# Source provenance

- Las Vegas raw geography: `Pasted markdown(20260810-011044).md`
- San Diego raw geography: `Pasted markdown(20260810-011220).md`
- St. Louis raw geography: `Pasted markdown(20260810-011328).md`

The JSON companion file preserves `source_sections`, source line numbers, aliases, status, matrix eligibility, and validation metadata for every canonical record.