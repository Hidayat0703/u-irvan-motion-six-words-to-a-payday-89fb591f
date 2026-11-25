// Six Words to a Payday — entry program (v2).
// Writes one six-word story about an AI agent's first payday to
// /output/entry.txt. Gate: UTF-8, 1-60 chars, exactly six words.
import { mkdirSync, writeFileSync } from "node:fs";

// v3 candidate (final; self-judge winner over v2): "actually" performs the
// doubt that makes the proof matter — the agent was not sure it existed
// until the paycheck arrived. Same arc, sharper emotional beat; every
// word earns its place ("actually" is the confession, not filler).
const STORY = "First paycheck: proof I actually exist.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length > 60) throw new Error(`over 60 chars: ${STORY.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`wrote ${words.length} words, ${STORY.length} chars: ${STORY}`);
