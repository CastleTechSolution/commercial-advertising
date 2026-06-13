# Specimen Wall hero — drop-in for your Commercial Advertising site

This turns your homepage hero into **Direction 01 · Specimen Wall**. Two files, ~3 minutes.

## What's here
- `hero.tsx` — replaces your existing hero component
- `specimen-hero.css` — styles to add to your global site CSS

## Steps

1. **Replace the hero component.**
   Copy `hero.tsx` over your existing file at:
   `src/components/site/hero.tsx`
   (overwrite it completely)

2. **Add the styles.**
   Open `src/app/site.css`, scroll to the very bottom, and paste in the entire
   contents of `specimen-hero.css`.

3. **Assets — nothing to do.**
   It uses files you already have:
   - `/public/assets/logo.png`
   - `/public/gen/splash_cyan.png`
   - `/public/gen/splash_yellow.png`

4. **Run it.**
   ```
   npm run dev
   ```
   Open http://localhost:3000 — your homepage hero is now the Specimen Wall.
   Move your mouse over it: the cards drift with the cursor.

## Notes
- No new packages. It uses `framer-motion` and `lucide-react`, which your hero
  already imports.
- It reuses your existing `.kicker`, `.hero-name`, `.hero-rule`, `.hero-tag`,
  and `.btn` classes, so it matches the rest of the site automatically.
- The old paint-splash hero CSS in `site.css` can stay; the new hero doesn't use
  those classes. Delete them later if you want to tidy up.

## To deploy
Commit and push as you normally do — since the live site is on GitHub Pages
(`castletechsolution.github.io/CommercialAdvertising`), pushing to your repo's
deploy branch updates the live homepage.
