/**
 * Metadata inventory of the static export: title, description, canonical, robots,
 * Open Graph, Twitter card and H1 for every page. Used by scripts/audit-meta.mjs
 * and scripts/verify-meta.mjs.
 */
import fs from 'node:fs'
import { walkOut, urlOf, pageType, decode } from './link-graph.mjs'

const tag = (head, re) => decode((head.match(re) || [])[1] ?? '')
const metaContent = (head, attr, name) => {
  const m = head.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`)) || head.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`))
  return decode(m ? m[1] : '')
}

export function readMeta(root = 'out') {
  const pages = {}
  for (const f of walkOut(root)) {
    const url = urlOf(root, f)
    if (url === '/_not-found/' || url === '/404/') continue
    const html = fs.readFileSync(f, 'utf8')
    const head = html.slice(0, html.indexOf('</head>'))
    const body = html.slice(html.indexOf('<body'))
    const h1 = decode(((body.match(/<h1[\s\S]*?<\/h1>/) || [''])[0]).replace(/<!-- -->/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
    pages[url] = {
      url,
      type: pageType(url),
      title: tag(head, /<title>([\s\S]*?)<\/title>/),
      description: metaContent(head, 'name', 'description'),
      canonical: tag(head, /<link rel="canonical" href="([^"]*)"/),
      robots: metaContent(head, 'name', 'robots'),
      ogTitle: metaContent(head, 'property', 'og:title'),
      ogDescription: metaContent(head, 'property', 'og:description'),
      ogImage: metaContent(head, 'property', 'og:image'),
      ogUrl: metaContent(head, 'property', 'og:url'),
      ogType: metaContent(head, 'property', 'og:type'),
      twitterCard: metaContent(head, 'name', 'twitter:card'),
      twitterTitle: metaContent(head, 'name', 'twitter:title'),
      twitterDescription: metaContent(head, 'name', 'twitter:description'),
      h1,
    }
  }
  return pages
}
