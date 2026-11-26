// Entry program for "The Worst Pizza Topping" (make.fun).
// Writes one funny line, under 200 characters, pitching a terrible
// pizza topping, to /output/entry.txt.
//
// The pitch: a melatonin pizza. The topping is not terrible because of
// how it tastes — it is terrible because of what it does to you. One
// slice and the evening is over before it started.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Try our melatonin pizza: one slice and you wake up tomorrow, still holding the box.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
