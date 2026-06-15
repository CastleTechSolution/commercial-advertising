// Convert homepage PNGs to optimized WebP at display size.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const KB = (p) => Math.round(statSync(p).size / 1024);

// [path-without-ext, maxWidth]
const jobs = [
  ["public/gen/about", 1100],
  ["public/gen/splash_cyan", 700],
  ["public/gen/splash_yellow", 700],
  ["public/gen/pr_card", 1000],
  ["public/gen/pr_flyer", 1000],
  ["public/gen/pr_brochure", 1000],
  ["public/gen/gb_labcoat", 1000],
  ["public/gen/gb_cafeteria", 1000],
  ["public/gen/gb_construction", 1000],
  ["public/gen/ad_billboard", 1000],
  ["public/gen/ad_signage", 1000],
  ["public/gen/ad_digital", 1000],
  ["public/assets/logo", 200],
  ...["A", "D", "Z", "G", "T", "P", "I", "H"].map((n) => [`public/assets/${n}`, 320]),
];

let before = 0;
let after = 0;
for (const [base, width] of jobs) {
  const src = join(root, `${base}.png`);
  const out = join(root, `${base}.webp`);
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(out);
  const b = KB(src);
  const a = KB(out);
  before += b;
  after += a;
  console.log(`${base.split("/").pop()}: ${b}KB png -> ${a}KB webp`);
}
console.log(`\nTOTAL: ${before}KB -> ${after}KB (${Math.round((1 - after / before) * 100)}% smaller)`);
