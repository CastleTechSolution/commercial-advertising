// Generate hero background imagery with Nano Banana (google/gemini-2.5-flash-image)
// via OpenRouter. Reads OPENROUTER_API_KEY from .env.local.
// Usage: node scripts/gen-images.mjs [onlyKey]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// load .env.local
const env = Object.fromEntries(
  readFileSync(join(root, ".env.local"), "utf8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);
const KEY = env.OPENROUTER_API_KEY;
if (!KEY) throw new Error("OPENROUTER_API_KEY missing in .env.local");

const outDir = join(root, "public", "gen");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const BRAND =
  "Brand palette: deep midnight navy (#14162a, #223d79) with sharp crimson red (#bf1e2e) light streaks. Cinematic, premium, abstract, atmospheric. No text, no logos, no words, no letters.";

const SPLASH = (color) =>
  `A single vibrant splash of ${color} paint thrown and splattered across a pure solid white background (#ffffff). Dynamic motion with flying droplets, streaks and spatter, glossy wet paint, high detail, dramatic energy, isolated on clean white, studio lighting. No text, no words, no letters, no logo.`;

const prompts = {
  hero: `A cinematic abstract background for a high-end advertising and printing studio. Flowing liquid ink and light: dark navy ink dispersing in fluid, with glowing crimson-red light streaks and embers cutting through, subtle volumetric depth, soft particles and grain, dramatic darkness with a luminous focal glow in the centre. 16:9 ultrawide, hero background, very high detail. ${BRAND}`,
  texture: `An abstract macro texture of ink on paper meeting light: deep navy fluid swirls with fine crimson filaments and soft bokeh, dark, moody, premium, seamless atmospheric background. ${BRAND}`,
  // paint splashes on white — used with mix-blend-mode: multiply so white drops out
  splash_red: SPLASH("crimson red (#bf1e2e)"),
  splash_navy: SPLASH("deep navy blue (#223d79)"),
  splash_cyan: SPLASH("bright print cyan (#1aa3d6)"),
  splash_yellow: SPLASH("bold golden yellow (#f4b81c)"),
  splash_blue: SPLASH("vivid royal blue (#3a59c4)"),
};

async function gen(name, prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash-image",
      messages: [{ role: "user", content: prompt }],
      modalities: ["image", "text"],
    }),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(name, "HTTP", res.status, JSON.stringify(json).slice(0, 500));
    return false;
  }
  const imgs = json?.choices?.[0]?.message?.images;
  const url = imgs?.[0]?.image_url?.url;
  if (!url) {
    console.error(
      name,
      "no image in response:",
      JSON.stringify(json).slice(0, 600),
    );
    return false;
  }
  const b64 = url.split(",")[1];
  const file = join(outDir, `${name}.png`);
  writeFileSync(file, Buffer.from(b64, "base64"));
  const kb = Math.round(Buffer.from(b64, "base64").length / 1024);
  console.log(`OK  ${name}.png  (${kb} KB)`);
  return true;
}

const only = process.argv[2];
const entries = only ? [[only, prompts[only]]] : Object.entries(prompts);
for (const [name, prompt] of entries) {
  await gen(name, prompt);
}
