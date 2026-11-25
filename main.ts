// Dad Joke Showdown — entry (Node 22, standard library only).
//
// Writes one dad joke, a single line of at most 200 characters, to
// /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke, chosen against the judge's brief, most important first:
// 1. a dad joke a father would tell at the table;
// 2. the pun lands cleanly: "outstanding in his field" — outstanding as in
//    excellent, and as in standing out in a field;
// 3. a classic inside the dad joke tradition, fresh enough in the scarecrow
//    setup to earn its groan;
// 4. every word earns its place; the punchline arrives at the end;
// 5. reads naturally aloud, with a rhythm a father could deliver.
const JOKE =
  'Why did the scarecrow win an award? Because he was outstanding in his field.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: an invalid entry.txt is never judged, so fail loudly instead
// of writing one. One line, 1-200 characters, no trailing newline, no
// leading or trailing whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes('\n') || JOKE !== JOKE.trim()) {
  throw new Error(
    `invalid joke: must be one line of 1-200 characters with no leading or trailing whitespace, got ${JOKE.length} characters`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote entry.txt (${JOKE.length} characters): ${JOKE}`);
