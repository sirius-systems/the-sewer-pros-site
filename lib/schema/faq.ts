/**
 * FAQPage node — 15 §57-58, DEC-089.
 *
 * Authority: docs/15-schema-entity-strategy.md §57-58, §67
 *            docs/22-decisions-change-log.md DEC-089
 *
 * ===========================================================================
 * ⚠ SCHEMA TEXT IS DERIVED FROM THE VISIBLE JSX, NOT COPIED FROM IT
 * ===========================================================================
 * DEC-089 requires `acceptedAnswer.text` to match the rendered answer
 * character for character. A build-time comparison of two hand-authored
 * copies would satisfy that on the day it was written and rot the first
 * time someone edits one side; so there is no second copy.
 *
 * `FaqContent.answer` is the SAME `ReactNode` `FaqSection` renders.
 * This module reads the text out of it. Divergence is not checked here
 * because it cannot be expressed: there is one string, read from one
 * place, and changing the visible copy changes the markup in the same
 * edit.
 *
 * That matters most for the homepage's same-day answer, whose hedged
 * wording DEC-088 approved as VISIBLE copy. Markup asserting a
 * different availability claim than the page shows is precisely the
 * failure 15 §67 forbids.
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS DELIBERATELY REFUSES TO DO
 * ---------------------------------------------------------------------------
 * Answers containing a custom React component throw rather than
 * silently extracting whatever happens to sit in `props.children`. A
 * component may render text that is nowhere in its children — a link
 * label pulled from the page registry, for instance — and quietly
 * dropping it would put markup and page out of step in exactly the way
 * this file exists to prevent. Plain elements and fragments are safe
 * because their text IS their children.
 *
 * If an FAQ answer on a schema-emitting page needs a component, extend
 * this extractor deliberately; do not widen the guard.
 */

import { Fragment, isValidElement, type ReactNode } from 'react'

import type { AnswerNode, FaqContent, FaqPageNode, QuestionNode } from '@/types'

interface WithChildren {
  children?: ReactNode
}

function childrenOf(node: ReactNode): ReactNode {
  if (!isValidElement(node)) return undefined
  return (node.props as WithChildren).children
}

/**
 * Text of an inline node — everything that is not a block boundary.
 *
 * `context` names the question, so a thrown error identifies which
 * entry needs attention rather than just reporting that one does.
 */
function inlineText(node: ReactNode, context: string): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return ''
  }
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) {
    return node.map((child) => inlineText(child, context)).join('')
  }

  if (isValidElement(node)) {
    const { type } = node
    if (typeof type !== 'string' && type !== Fragment) {
      throw new Error(
        `FAQ answer for "${context}" contains a React component. ` +
          `FAQPage schema text is derived from the visible JSX (15 §67, ` +
          `DEC-089), and a component may render text that is not in its ` +
          `children, which would put markup and page out of step. Use ` +
          `plain elements, or extend lib/schema/faq.ts deliberately.`,
      )
    }
    return inlineText(childrenOf(node), context)
  }

  throw new Error(
    `FAQ answer for "${context}" contains a node this extractor cannot ` +
      `read as text (15 §67, DEC-089).`,
  )
}

/**
 * Collapses whitespace the way a browser does.
 *
 * JSX already folds a wrapped source line into a single space, so this
 * is belt-and-braces for answers assembled from several children. The
 * result is the string a reader sees, which is what 15 §67 compares.
 */
function normalize(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/** Paragraph-level text blocks, in reading order. */
function blocks(node: ReactNode, context: string): string[] {
  if (Array.isArray(node)) {
    return node.flatMap((child) => blocks(child, context))
  }

  if (isValidElement(node)) {
    const { type } = node
    if (type === Fragment) return blocks(childrenOf(node), context)
    if (type === 'p') return [inlineText(childrenOf(node), context)]
  }

  const text = inlineText(node, context)
  return normalize(text) === '' ? [] : [text]
}

/**
 * The visible text of one answer.
 *
 * Paragraphs are joined with a blank line: the break is real visible
 * structure, and running two paragraphs together with a single space
 * would assert a sentence adjacency the page does not show.
 */
export function faqAnswerText(answer: ReactNode, question: string): string {
  const paragraphs = blocks(answer, question)
    .map(normalize)
    .filter((text) => text !== '')

  if (paragraphs.length === 0) {
    throw new Error(
      `FAQ answer for "${question}" produced no text. An FAQPage entry ` +
        `with an empty answer asserts a question the page does not ` +
        `answer (15 §57).`,
    )
  }

  return paragraphs.join('\n\n')
}

/**
 * The `FAQPage` node for a page whose FAQ has been approved for it.
 *
 * Returns undefined for an empty FAQ rather than an empty `mainEntity`
 * — 15 §102 prefers omission to an empty structure, and every other
 * builder in this layer behaves the same way.
 */
export function faqPageNode(
  faqs: readonly FaqContent[] | undefined,
  id: string,
  url: string,
  name: string,
  websiteRef: { '@id': string },
): FaqPageNode | undefined {
  if (faqs === undefined || faqs.length === 0) return undefined

  const mainEntity: QuestionNode[] = faqs.map((entry) => {
    const acceptedAnswer: AnswerNode = {
      '@type': 'Answer',
      text: faqAnswerText(entry.answer, entry.question),
    }
    return {
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer,
    }
  })

  return {
    '@type': 'FAQPage',
    '@id': id,
    name,
    url,
    isPartOf: websiteRef,
    mainEntity,
  }
}
