# Commercial Advertising — Homepage redesign (drop-in code)

This is the full homepage from the design, as React components that match your
existing Next.js repo. Same file paths, your existing design tokens, your Next
fonts. ~5 minutes to apply.

## Page structure (new)
Hero → Trusted by (client logos) → About → What We Do (services + work gallery) → Footer
The old separate **Work** and **Clients** sections were merged in, so they're gone.

---

## 1. Add the styles
Open `src/app/site.css`, scroll to the bottom, and paste in the ENTIRE contents of
`src/app/site-additions.css` (from this folder).
It adds: 3 process-colour tokens, smooth scrolling, the keyframes, and the hover
classes the components use. Your existing CSS is untouched.

(You can delete `site-additions.css` after pasting — or keep it as a file and add
`import "./site-additions.css";` to `src/app/layout.tsx`. Either works.)

## 2. Replace the page
Overwrite `src/app/page.tsx` with the one in this folder.

## 3. Add / replace the components  (folder: src/components/site/)
Copy these in (overwrite where they already exist):
- `navbar.tsx`        (replaces yours — links trimmed to About / Services / Contact)
- `hero.tsx`          (replaces yours — the Specimen Wall hero)
- `about.tsx`         (replaces yours — photo left, text right)
- `trusted-by.tsx`    (NEW — the scrolling client-logo strip)
- `what-we-do.tsx`    (NEW — services grid + "Things we've made" gallery)
- `footer.tsx`        (replaces yours — Email/Call buttons, logo, back-to-top)

## 4. Delete the now-unused files (optional but tidy)
These are no longer imported by `page.tsx`:
- `src/components/site/marquee.tsx`
- `src/components/site/services.tsx`
- `src/components/site/work.tsx`
- `src/components/site/clients.tsx`
- `src/components/site/scroll-reveal.tsx`  (the redesign doesn't use scroll-reveal)

## 5. Run
```
npm run dev
```
Open http://localhost:3000 — your homepage is now the redesign.

---

## Notes
- **Assets:** everything points to files you already have in `/public`
  (`/assets/logo.png`, `/assets/C3.jpg`, the work photos, the client logos `A.png`…`H.png`,
  and `/gen/splash_cyan.png`, `/gen/splash_yellow.png`). Nothing new to add.
- **No new packages.** These components don't need framer-motion or lucide; they use
  inline SVG + CSS. (You can keep those packages or remove them if nothing else uses them.)
- **Fonts/colours:** components read your existing tokens — `var(--font-display)`
  (Fraunces), `var(--font-body)` (Manrope), `var(--paper)`, `var(--ink)`, `var(--red)`, etc.
- **The About photo** (`/assets/C3.jpg`) is a placeholder you can swap for a real
  team/studio shot anytime — just change the `backgroundImage` URL in `about.tsx`.
- **Client logos** are shown grayscale; for full colour, remove
  `filter: "grayscale(1)"` in `trusted-by.tsx`.

## Company name font (Gotham)
The hero title "Commercial Advertising" uses `font-family: 'Gotham', 'Montserrat', sans-serif`.
- **Gotham is a licensed font** — it is not on Google Fonts. To show real Gotham, host the
  font files in your project and declare them, e.g. in `src/app/globals.css`:
  ```css
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham-Bold.woff2") format("woff2");
    font-weight: 700;
    font-display: swap;
  }
  ```
  (drop `Gotham-Bold.woff2` into `public/fonts/`). Once present, the title renders in Gotham.
- Until you add Gotham, it falls back to **Montserrat**. To load Montserrat, either add it via
  `next/font/google` in `layout.tsx`, or add this to the `<head>`:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
  ```
  If you skip both, it falls back to the system sans-serif (still bold, just not Gotham/Montserrat).

## Deploy
Commit and push as usual — since the live site runs on GitHub Pages
(`castletechsolution.github.io/CommercialAdvertising`), pushing to your deploy
branch updates the live homepage.
