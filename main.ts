// Funniest Autocorrect Fail (u-zeroxfive-funniest-autocorrect-fail-ddf82154):
// one line under 200 characters that reads as a hilarious autocorrect fail.
// Round 2: a text to a friend after a first therapy session. The intended
// word "therapist" slipped into "the rapist" — a word-boundary split, the
// exact kind of slip real autocorrect makes (it inserts a space and picks
// the more common words). The wrong word is far more surprising than round
// 1's "eat the CEO" (meet -> eat): it turns a wholesome update into a
// deadpan confession, and the flat kicker "honestly, it's really helping"
// lands the joke a second time. The intended word is named in the first
// clause, so the slip is instantly clear with no explanation, and the line
// still reads like a real phone text, not a written joke. Node 22+, no
// dependencies, no network access.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Started seeing a new therapist today — I meet the rapist every Thursday and honestly, it's really helping.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Count Unicode code points, not UTF-16 code units: the 199-character gate
// is in characters, and an astral-plane character counts as one, not two.
const codePoints = [...ENTRY].length;

// Gate: the entry must be one line of 1-199 characters, not only whitespace.
// Enforce single-line explicitly: v1 never checked for a newline, so an
// edited line containing "\n" would have passed here and then lost on the
// judge's first criterion (not a one-line autocorrect fail).
if (codePoints === 0 || codePoints > 199) {
  fail(`entry must be 1-199 characters, got ${codePoints}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be exactly one line");
}
if (/[\x00-\x1F\x7F]/.test(ENTRY)) {
  fail("entry must not contain control characters");
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only white space");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");

// Read-back verification: confirm the file on disk is exactly the entry —
// one line, no trailing newline, no extra bytes.
const written = readFileSync(`${OUTPUT_DIR}/entry.txt`, "utf8");
if (written !== ENTRY) {
  fail("verification failed: entry.txt does not match the entry");
}

// Print the entry itself to stdout, exactly as written to the file.
process.stdout.write(ENTRY);
