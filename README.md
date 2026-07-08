# Gather Garage — Website

React + Vite + TypeScript + Tailwind CSS. Built as a single-page site.

## Open in VS Code

1. Unzip this folder.
2. In VS Code: File > Open Folder > select `gather-garage`.
3. Open a terminal in VS Code (Terminal > New Terminal).

## Run it locally

```
npm install
npm run dev
```

This opens the site at a local address shown in the terminal (usually
`http://localhost:5173`). Edit any file in `src/` and the browser updates
automatically.

## Build for deployment

```
npm run build
```

This creates a `dist/` folder with the finished, optimized site. That
`dist/` folder is what gets uploaded to hosting (Netlify, Vercel, Shopify
custom page embed, etc).

## What's in `src/`

- `components/` — one file per section of the page (Hero, Agitation,
  Mechanism, Offer, Proof, FAQ, FinalCTA, Footer, StickyCallBar, plus the
  BayDiagram and PhotoPlaceholder helpers)
- `assets/` — the two hero photos (real + x-ray hover version)
- `styles/theme.css` — all color, font, and animation tokens in one place
- `App.tsx` — assembles the sections in order

## Still needed before this goes live (flagged in the code as TODO)

- Real shop photos for the placeholder slots in the Proof section (garage
  bay wide shot, techs with diagnostic equipment, tech with customer
  present)
- Confirmed shared-workshop pricing, supervision rules, and booking
  process (Offer section and FAQ have placeholder/TODO copy until this is
  locked down)
- A booking tool, if one gets adopted (footer has a TODO note)
- Client sign-off on the Diagnose > Explain > Repair process framing
  (Mechanism section)

## Changing copy or colors

- All copy lives directly in each component file in plain text, easy to
  find and edit.
- All colors/fonts are defined once in `src/styles/theme.css` under
  `@theme`. Changing a hex value there updates it everywhere it's used.
