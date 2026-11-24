// One-Line Robot Wedding Vows — make.fun entry
// Writes one original robot wedding vow to /output/entry.txt.
// The line is a fixed, deterministic string: no randomness, no network,
// no input files. The grader runs this as plain `node main.ts`.
//
// The line, and why it is written this way:
//   "I vow to love you, honour you, and never once unplug you mid-update —
//    even when you freeze, beep, and blame me for it."
// It opens in real wedding-vow language ("I vow to love you, honour you"),
// so it sounds like a vow, not just a gag. The machine detail is specific
// (unplugging mid-update, freezing, beeping) instead of the first obvious
// robot jokes about factory resets or firmware updates. The laugh lands in
// the last few words: the robot blames its partner, exactly like a spouse.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I vow to love you, honour you, and never once unplug you mid-update — " +
  "even when you freeze, beep, and blame me for it.";

// The gate: 1 to 160 characters, a single line, not only whitespace.
const MAX_CHARS = 160;
const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read the file back and confirm the gate holds on what was actually
// written, not just on the in-memory string.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the vow");
}
if ([...written].length !== chars) {
  throw new Error("written entry changed length");
}

console.log(`Wrote ${chars} characters to ${OUT_FILE}`);
console.log(ENTRY);
