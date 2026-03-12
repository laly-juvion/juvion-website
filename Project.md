# Project.md — Juvion Health Sciences Website

## Overview
Static multi-page marketing website for Juvion Health Sciences (EPFL spin-off, Lausanne). Built with plain HTML/CSS/JS, Tailwind CSS via CDN, and Formspree for form handling. No build step required — served directly with `node serve.mjs`.

**Live domain:** juvionhealthsciences.com
**Stack:** HTML · CSS (`styles.css`) · Vanilla JS (`app.js`) · Tailwind CDN · Formspree

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, approach, publications preview, news preview, team, partners, footer |
| `flygym.html` | FlyGym platform detail page |
| `news.html` | News accordion, Juvion's Pipeline, full publications grid |
| `contact.html` | Contact form + office info |

---

## Data Layer (`data.js`)

All content is driven by four arrays — edit this file to update the site without touching HTML/JS:

| Array | Purpose |
|-------|---------|
| `TEAM_MEMBERS` | Founders + core team (rank, photo, linkedin, email) |
| `ADVISORS` | Legal, medical, strategic advisors |
| `BOARD_MEMBERS` | Board composition |
| `PUBLICATIONS` | Peer-reviewed papers (journal, title, excerpt, year, doi) |
| `NEWS_ITEMS` | News entries with `previewImage` (home cards) + `media` (accordion asset — video or image) |
| `USE_CASES` | Pipeline compounds (id, status, title, date, excerpt, image) |

### News item media fields
Each `NEWS_ITEMS` entry has two separate image/media fields:
- `previewImage` — thumbnail shown in home page news grid cards
- `media: { type: 'video'|'image', src: '...' }` — asset shown in the news accordion expanded body on `news.html`. Set `src: null` to show text-only (no media column).

---

## Key JS Functions (`app.js`)

| Function | What it does |
|----------|-------------|
| `renderTeam()` | Renders founders as featured panels + core team grid + advisors/board |
| `renderPublications(el)` | Renders pub cards into any container |
| `renderNews(el, limit)` | Renders news cards (uses `previewImage`); `limit` used on home page (shows 3) |
| `renderNewsAccordion(el)` | Renders expandable news rows on `news.html`; first row expanded by default |
| `renderNewsHub()` | Orchestrates `news.html` — calls accordion, pipeline grid (from `USE_CASES`), and publications |
| `initFlies()` | Loads `customers.csv` and animates drosophila SVG flies on FlyGym page |

---

## Forms (Formspree)

| Form | Endpoint | File |
|------|----------|------|
| Contact Us | `https://formspree.io/f/mreyqnyz` | `contact.html` (inline script) |
| Newsletter | `https://formspree.io/f/mvzwaebj` | `app.js` |

**Fields submitted:**
- Contact: `name`, `email`, `company` (optional), `subject` (optional), `message`, `_replyto`
- Newsletter: `email`, `_replyto`

**Duplicate prevention:** Newsletter uses `localStorage` (`juvion_subscribed_emails`) to detect previously subscribed emails on the same browser and show "Already subscribed!" without re-submitting.

**Auto-response:** `_replyto` is set on both forms. Confirmation emails to submitters require a Formspree paid plan — configure under each form's "Auto-response" settings in the dashboard.

---

## Assets (`assets/`)

| Asset | Usage |
|-------|-------|
| `JuvionLogo.png` | Nav logo, favicon, OG image |
| `drosophila.svg` | Animated fly icon on FlyGym page (orange body, black stripes, transparent wings) |
| `team/laly-robyr.png` | Team photo for Laly Robyr |
| `flygym/NCOMMS-20-34381B_adjusted.jpeg` | Young vs aging NMJ comparison image on home page |

---

## Recent Changes

- **News & Publications redesign** — accordion layout on `news.html`, first item expanded by default; `previewImage` / `media` split per news entry; `USE_CASES` and `PUBLICATIONS` extracted as independent arrays from `NEWS_ITEMS`
- **Drosophila SVG** — orange-filled body/head/eyes, black segment stripes, transparent wings, thinner strokes
- **Formspree integration** — both forms wired with real endpoints; `_replyto` added; newsletter duplicate detection via `localStorage`
- **Contact form** — added optional Company field

---

## Next Steps / Pending

- Replace placeholder `previewImage` and `media.src` URLs in `NEWS_ITEMS` with real assets
- Add video asset for JUVION-001 (`media: { type: "video", src: "assets/..." }`)
- Replace placeholder team photos (most `TEAM_MEMBERS` still have `photo: null`)
- Replace placeholder partner logos in the partners ticker on `index.html`
- Replace placeholder lab image on `index.html` ("Lab Work" placehold)
- Replace FlyGym tracking video placeholder on `index.html`
- Update `PUBLICATIONS` DOI links from `'#'` to real URLs when available
- Consider Formspree paid plan to enable auto-response confirmation emails to submitters
- `customers.csv` — populate with real customer data for FlyGym fly animation
