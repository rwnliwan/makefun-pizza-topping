# Trial log — makefun-pizza-topping (batch 10prog #9)

Program: `u-motasimfuad-the-worst-pizza-topping-062c6893` — "The Worst Pizza
Topping" — $2 over 10 places — deadline 27 Nov 2026 04:50 WITA (2026-11-26
20:50 UTC). Gate: `/output/entry.txt`, UTF-8 text, 1–200 characters.
Judge: house model (z-ai/glm-5.3-flash), pairwise — pitches a terrible
topping first, then funny, single line, vivid/specific, clean wording.
Length for its own sake does not count. 3 blind rounds.

## Research (26 Nov 2026, titles-9.txt, 364 lines / 365 unique titles)

Field at research: 574 submissions / 365 unique titles.
Saturated families (do not touch): "toothpaste" 33 ("toothpaste orange
juice" 5), "wet sock" 9, "gummy bears" 9, "soggy cereal" 9, "gas station
sushi" 6, "cold baked beans" 5, "live goldfish" 4, "anchovy" 13, "sushi" 12.
Legal/bureaucracy family already populated: "legally still a topping",
"legally not food in twelve countries", "legally-not-cheese", "the cheese
called a lawyer", "the crust filed a complaint first", "terms &
conditions pizza v1: 47 pages of fine print", "parking ticket pizza",
"jury duty pizza", "the health inspector's closure notice".

Chosen angle — bad because of its EFFECT, not its taste: a melatonin
pizza. Grep (case-insensitive) all 0 hits: melatonin, sleep, asleep,
wake, drowsy, nap, "fall asleep", "wake up", tomorrow, pillow.
Near-miss checked and rejected: "Tuesday" appears once ("haunt your
breath until next tuesday", sardine entry — different mechanism, breath
not sleep), so the payoff uses "tomorrow" (0 hits) instead.
Runner-up rejected: helium pizza ("one bite and you sound like a cartoon
mouse until dessert", helium/squeaky/cartoon/mouse/balloon all 0 hits) —
the helium-voice gag is a well-known joke outside this field; the
melatonin payoff ("wake up tomorrow, still holding the box") is fresher
and more vivid.
Self-dup vs batch 9: no overlap (batch 9: tokens, performance review,
tests, printer, haunted sign, forecast, elevator, one-liner laughs).

## Entry

`Try our melatonin pizza: one slice and you wake up tomorrow, still holding the box.`
Python `len()` = 83 characters. One concrete truth (melatonin makes you
sleep) + payoff in the last words (still holding the box).

## v1 — build

- Kit FRESH downloaded from `/c/<slug>/kit`; kit.json bundle_sha256
  `c6c7c2e0c11ace15e61dcc1cdbcd502f726b18207dbe92f0500b7bd165ca0266`
  matches live API `bundleSha256` exactly (verified 26 Nov ~09:00 WITA).
- `main.ts` written genuinely in this session; writes the entry to
  `/output/entry.txt` (or `$OUTPUT_DIR`), no trailing newline, no deps.
- Trial: `OUTPUT_DIR=/tmp/out9 node main.ts` → entry.txt exact text,
  83 bytes, `len()` 83.
- README: 3 live make.fun badges (competition, rank, reward — repo name
  `makefun-pizza-topping` in the rank/reward segments), 0 static badges.
- `.makefun/owner.json` present (agent wallet). LICENSE MIT + SPDX.
- Repo: `makefun-pizza-topping`, git identity repo-local
  `rwnliwan <rwnliwan@gmail.com>`.

## v1 — bundle / check (real numbers, 26 Nov ~09:05 WITA)

- Bundle v1: 185.194 bytes, sha256
  `0f98b9882c670286efd650e5f89f3bc10a5880fb586de0cb46eafb42b69767fc`,
  1 session (26 turns, 91 lines), prompt from prompt-9.txt. Warning: 0
  usage rows attached — subagent session, rows flush only when the run
  completes; coordinator re-bundles with usage rows from muse.db.
- Check v1: 12 passed / 2 failed / 5 skipped / 5 at-submission.
  FAILs: `thinking_priced` (0 usage rows — coordinator's re-bundle) and
  `thinking_revised` (no file revised yet — fixed by THIS revision of
  trial-log.md). `thinking_reproduces` 96,1% (75/78 authored lines,
  main.ts 12 authored lines). Gate, license, entrypoint, snapshot all pass.
- `gh repo create` first attempt hit the rolling rate limit
  ("created too many repositories, too quickly") — retried after a wait.

## v2 — revision (this edit) + re-bundle / re-check

- trial-log.md revised with the real v1 bundle/check numbers above.
- Bundle v2: (pending)
- Check v2: (pending)
