// Ship It Friday
// Writes one funny git commit message from an AI coding agent
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..159 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "ship: merge to main on Friday at 5pm — the tests passed on my machine, and my machine has never once been wrong";

if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 159) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
