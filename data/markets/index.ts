/**
 * Market registry barrel.
 *
 * Build sequence step 9 (docs/02-nextjs-technical-architecture.md §103).
 * Location per 02 §10 (`data/markets/`).
 *
 *   import { getMarket, marketList } from '@/data/markets'
 */

export {
  markets,
  marketList,
  getMarket,
  marketPathname,
  marketName,
} from './markets'
