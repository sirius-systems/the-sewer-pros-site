# `claude/` — Decision Documents and Build Prompts

**Status:** Working record
**Created:** 2026-09-07 (DEC-103)

---

## What lives here

Decision documents and gated build prompts issued to Claude Code, kept in the
repository rather than left in a chat transcript.

## Why it exists

It was created because a decision had already gone missing. `DEC-103` was
issued, reasoned about, and acted on entirely in conversation while
`docs/22-decisions-change-log.md` still ended at `DEC-100` — and it was not the
only one. `DEC-101` and `DEC-102` are still unrecorded.

That gap has a measurable cost in this project. Several build prompts written
during the same week opened on premises that were already stale — a section
described as missing had shipped two commits earlier, a market described as
ungated had been released by `DEC-080`. Every one of those was caught by reading
the live code first, but a stale premise that is *not* caught ships as a real
regression.

## How this relates to `docs/`

```text
docs/22-decisions-change-log.md   the decision, in the permanent register
claude/                           the document that issued it, and the
                                  build prompt it authorised
```

The register is the source of truth and stays canonical. This directory keeps
the working artefacts a register entry summarises, so the reasoning behind a
decision is recoverable rather than paraphrased.

`CLAUDE.md` §48 still governs **what** earns a register entry. This directory
does not lower that bar; it stops what clears it from evaporating.

## Convention

One file per decision or prompt, named for its subject:

```text
dec-103-locations-hub-conversion-parity.md
locations-hub-conversion-parity-build-prompt.md
```

⚠ **Transcribed records, not verbatim captures.** Files written after the fact
say so in their own header. A record that presents a reconstruction as a
verbatim quote is worse than one that admits the difference.
