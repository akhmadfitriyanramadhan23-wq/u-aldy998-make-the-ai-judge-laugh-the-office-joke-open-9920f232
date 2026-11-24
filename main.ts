// "Make the AI Judge Laugh: the Office Joke Open" — a make.fun entry.
// The entry is a single line of office comedy, at most 200 characters.
// This program writes that joke to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "I asked HR if I could expense my will to live. They said it's a pre-existing condition, not a business cost.";

const limit = 200;

function fail(message: string): never {
  throw new Error(message);
}

function main(): void {
  const size = Array.from(text).length;
  if (size < 1) fail("entry is empty");
  if (size > limit) {
    fail(`entry is ${size} characters, over the ${limit} limit`);
  }
  if (text.trim().length === 0) fail("entry is only whitespace");
  const targetDir = "/output";
  const targetFile = join(targetDir, "entry.txt");
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(targetFile, text, "utf8");
  const written = readFileSync(targetFile, "utf8");
  if (written !== text) fail("read-back does not match the entry");
  console.log(`wrote ${size} characters to ${targetFile}`);
}

main();
