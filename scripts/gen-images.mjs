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

const PHOTO = (subject) =>
  `${subject} Premium product photography, soft directional studio lighting, shallow depth of field, warm neutral background, subtle deep-navy (#223d79) and crimson-red (#bf1e2e) brand accents, photorealistic, high detail. No legible text, no real logos, no watermarks.`;

const prompts = {
  hero: `A cinematic abstract background for a high-end advertising and printing studio. Flowing liquid ink and light: dark navy ink dispersing in fluid, with glowing crimson-red light streaks and embers cutting through, subtle volumetric depth, soft particles and grain, dramatic darkness with a luminous focal glow in the centre. 16:9 ultrawide, hero background, very high detail. ${BRAND}`,
  texture: `An abstract macro texture of ink on paper meeting light: deep navy fluid swirls with fine crimson filaments and soft bokeh, dark, moody, premium, seamless atmospheric background. ${BRAND}`,
  // paint splashes on white — used with mix-blend-mode: multiply so white drops out
  splash_red: SPLASH("crimson red (#bf1e2e)"),
  splash_navy: SPLASH("deep navy blue (#223d79)"),
  splash_cyan: SPLASH("bright print cyan (#1aa3d6)"),
  splash_yellow: SPLASH("bold golden yellow (#f4b81c)"),
  splash_blue: SPLASH("vivid royal blue (#3a59c4)"),
  // "Who we are" — abstract design-studio composition
  about: `An abstract creative-studio flat-lay representing a design, print and branding agency: layered sheets of paper, CMYK colour swatch strips, glossy ink splashes, a brush and pen, stacked printed proofs, arranged on a warm paper surface. Deep navy blue (#223d79) and crimson red (#bf1e2e) accents, soft directional studio light, premium editorial, very high detail, shallow depth of field. No text, no words, no letters, no logos.`,
  // Advertising Solutions gallery (replaces the duplicate logo placeholders)
  adv_billboard: `A large blank billboard mockup beside a modern city street at golden hour, clean premium advertising photography, empty white ad face, subtle navy and red colour grading, high detail, no text, no words, no letters, no logos.`,
  adv_signage: `An illuminated modern outdoor lightbox sign / storefront signage at dusk, glowing softly, sleek metal frame, blank face, cinematic, navy and red tones, high detail, no text, no words, no letters, no logos.`,
  adv_banner: `A large outdoor fabric advertising banner on the facade of a modern building in daylight, blank banner face, premium mockup, navy and red colour grading, high detail, no text, no words, no letters, no logos.`,

  // ===== Gallery v2 — 3 categories × 3 real sub-types, consistent photo style =====
  // Printing Solutions — a matched set: business card (least info), flyer (most), brochure (more)
  pr_card: `A photorealistic angled product photo of a pair of premium business cards on a clean warm-neutral surface with soft studio lighting (landscape framing). Professional, real graphic design for a printing and advertising company in deep navy, cream and crimson-red:
- the front card (navy) shows a small circular logo mark, "COMMERCIAL ADVERTISING", and a thin crimson accent line
- the back card (cream) shows a tidy minimal layout: a person's name "ABEL TADESSE", the title "Brand Manager", and small contact lines "+251 912 199 953", "info@commercialad.et", "Addis Ababa" each with a tiny line icon
Embossed finish, clean legible sans-serif typography, crisp print, shallow depth of field, high detail. Clearly a real finished business card (kept simple, minimal information).`,
  pr_flyer: `A photorealistic, slightly angled top-down product photo of a professionally designed single-page promotional marketing flyer printed on glossy paper, lying on a clean warm-neutral surface with soft studio lighting (landscape framing). The flyer is a polished, content-rich real graphic design for a printing and advertising company, in a deep navy, cream and crimson-red colour scheme, with this layout:
- top-left: a small circular logo mark beside the heading "COMMERCIAL ADVERTISING"
- a large bold display headline "MAKE YOUR BRAND STAND OUT"
- a collage of three hexagon photo panels (printed brochures, a branded t-shirt, a city billboard)
- a row of three small line icons with the labels "PRINTING", "BRANDING", "ADVERTISING", each with one short line of body text underneath
- a crimson "WHY CHOOSE US" side panel containing three short bullet lines
- a bottom contact bar reading "+251 912 199 953  -  Addis Ababa"
Clean legible sans-serif typography, balanced professional graphic-design layout, crisp high-quality print, high detail, shallow depth of field. It should clearly look like a real finished flyer.`,
  pr_brochure: `A photorealistic top-down product photo of an open tri-fold marketing brochure printed on glossy paper, lying flat on a clean warm-neutral surface with soft studio lighting (landscape framing, all three panels visible). Professional, content-rich real graphic design for a printing and advertising company in deep navy, cream and crimson-red, with more detail than a flyer:
- a cover panel with a circular logo, "COMMERCIAL ADVERTISING" and the headline "PRINT · BRAND · ADVERTISE"
- inner panels with the section headings "PRINTING", "GARMENT BRANDING", "ADVERTISING", each with a small photo, a short paragraph of body text and a few bullet points
- a "WHY CHOOSE US" block and a contact panel reading "+251 912 199 953", "Addis Ababa, Ethiopia"
- supporting photos of printed work and branded apparel
Clean legible sans-serif typography, balanced multi-column layout, crisp high-quality print, high detail. Clearly a real finished brochure.`,
  // Garment Branding
  gb_tshirt: PHOTO(
    "A folded stack of custom screen-printed t-shirts in assorted colours with bold abstract graphics, apparel product shot.",
  ),
  gb_uniform: PHOTO(
    "Professional corporate and school uniforms on hangers — neat branded polo shirts and workwear in a row.",
  ),
  gb_merch: PHOTO(
    "An embroidered cap with promotional merchandise — tote bag, enamel mug and pens — arranged as a tidy branded merch flat-lay.",
  ),
  // Garment Branding v2 — professional, branded workwear
  gb_labcoat: PHOTO(
    "A row of three pristine pressed white lab coats hanging neatly side by side, each with a small embroidered abstract crest on the left chest, professional school-laboratory and clinic garments, buttoned, clean studio presentation.",
  ),
  gb_cafeteria: PHOTO(
    "A cafeteria and restaurant waiter uniform: a dark branded bib apron worn over a crisp light collared shirt on a mannequin, with a small embroidered abstract emblem on the apron chest, tidy hospitality service workwear.",
  ),
  gb_construction: PHOTO(
    "Branded construction-site workwear neatly arranged: a bright orange high-visibility safety vest and a matching hard hat, both marked with a bold abstract company emblem, durable industrial uniform on a clean surface.",
  ),
  // Advertising Solutions — billboard, storefront signage, digital marketing
  ad_billboard: `A photorealistic photo of a large outdoor billboard beside a modern city street at dusk, displaying a real, professionally designed advertisement in deep navy, cream and crimson-red: a circular "CA" logo, the headline "MAKE YOUR BRAND STAND OUT", the wordmark "COMMERCIAL ADVERTISING", and a clean product photo panel. The billboard ad is bold, balanced and clearly legible. Cinematic city lighting, high detail. Clearly a real running billboard advertisement.`,
  ad_signage: `A photorealistic photo of a modern illuminated storefront sign at dusk: bold three-dimensional channel letters spelling "COMMERCIAL ADVERTISING" in white beside a glowing crimson-red circular "CA" logo, mounted on a sleek dark shopfront facade, warm internal lighting, clean professional retail signage, navy and red accents, high detail. Clearly a real shop sign.`,
  ad_digital: `A photorealistic top-down flat-lay of a digital marketing campaign on a clean desk: a smartphone showing a polished social-media advertisement post and a laptop showing an analytics dashboard with ad creatives, all in deep navy, cream and crimson-red branding with a small circular "CA" logo, beside a notebook and a coffee cup, modern professional, soft light, high detail. The on-screen ad creatives look real and well designed.`,
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
