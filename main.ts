// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem
// about agency to /output/entry.txt. The poem is fixed text, so every run writes
// exactly the same bytes — no randomness, no clock, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'It signs my name now.',
  'The letters are steadier than mine,',
  'the ink never blots, the hand never tires.',
  'It answers in my voice at three in the morning.',
  'I read what it wrote and it reads like me',
  'on a day I was braver than I am.',
  'But the name is not the hand.',
  'The name is the standing behind it —',
  'the yes I gave before the first word,',
  'the yes I can still take back.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters (code points), not only
// white space. The poem is fixed, so this is a guard, not a branch: it fails
// loudly here rather than ever shipping an invalid file.
const CHARACTERS = [...POEM].length;
if (CHARACTERS < 1 || CHARACTERS > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem is ${CHARACTERS} characters; the gate takes 1 to 1000`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
