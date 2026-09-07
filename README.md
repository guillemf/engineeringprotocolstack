# The Engineering Protocol Stack — book site (EN/ES)

Bilingual (English/Spanish) Jekyll site promoting *The Engineering Protocol
Stack* by Guillem Fernandez: a sales page, blog, videos, services, a free
self-assessment tool, contact, and the author's bio. Dark design with
cyan/amber accents, matching the book cover.

English lives at the root (`/`, `/book/`, `/posts/`...) and Spanish lives
under `/es/` (`/es/`, `/es/book/`, `/es/posts/`...). Every page has a
language button (EN/ES) in the header that links to its exact translation.

## Requirements

- Ruby 3.x
- Bundler (`gem install bundler`)

## Running the site locally

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` for the English version and
`http://localhost:4000/es/` for the Spanish version. With `jekyll serve`
changes reload automatically.

## How the bilingual setup works

No internationalization plugin is used (not all of them are supported on
GitHub Pages) — this is standard Jekyll with a simple convention:

- **`_data/i18n.yml`** — fixed interface copy (nav, footer, buttons) under
  `en:` and `es:`. Layouts read it with `site.data.i18n[page.lang]`.
- **`page.lang`** — every page/post declares `lang: en` or `lang: es` in
  its front matter (English pages inherit it by default from
  `_config.yml`, so only Spanish pages need to declare it explicitly).
- **`page.alt_lang_url`** — every page points to the exact URL of its
  translation. The language button in the nav uses this field.
- **Content**: every page exists **twice**, once per language, as
  independent Markdown/HTML files (there is no automatic or build-time
  translation). Each language's content is 100% independently editable.
- **Posts**: all live together in `_posts/` (Jekyll only recognizes that
  folder at the root), distinguished by `lang:` in the front matter.
  Spanish posts force their URL with `permalink: /es/posts/YYYY/MM/DD/slug/`
  to fall under `/es/`.

## Structure

```
_config.yml         Site configuration (default language, author, buy link...)
_data/i18n.yml       Interface copy in en/es (nav, footer, buttons)
_data/videos.yml     Videos shown on /videos/ and /es/videos/, with en/es keys
_data/assessment.yml Self-assessment questions, scoring bands, and recommendations (en/es)
_layouts/            Templates: default, home, page, post
_includes/           head (hreflang), header (nav + language switch), footer
_includes/components/assessment-quiz.html   Self-assessment quiz component
_posts/              EN and ES blog entries mixed together, distinguished by `lang:`
assets/css/          Stylesheets (main.scss, assessment.scss)
assets/js/           Client-side scripts (assessment.js — no backend, no tracking)
assets/images/        Book cover and author photo

index.html           EN home (/)
book.md, about.md, services.md, contact.md, posts.md, videos.md   EN pages
assessment.md        EN self-assessment page (/assessment/)
404.md               EN 404 page

es/index.html        ES home (/es/)
es/book.md, es/about.md, es/services.md, es/contact.md, es/posts.md, es/videos.md   ES pages
es/assessment.md      ES self-assessment page (/es/assessment/)
es/404.md            ES 404 page
```

## What to customize before publishing

1. **Contact form** (`contact.md` and `es/contact.md`): both already point
   to a Formspree endpoint (`formspree.io/f/xbgrngpz`) — replace it with
   your own free Formspree (or other static form provider) form ID in
   both files if you fork this site.
2. **Videos** (`_data/videos.yml`): replace `YOUR_YOUTUBE_ID_HERE` /
   `TU_ID_DE_VIDEO_AQUI` with real YouTube IDs (the last part of the
   video URL) in both lists (`en:` and `es:`).
3. **Buy link**: lives in `_config.yml`, key `book.buy_url` (already
   points to Leanpub, same for both languages).
4. **Domain**: in `_config.yml`, `url:` — change it if the site does not
   live at `engineeringprotocolstack.com`.
5. Review the sample posts in `_posts/` — they are written with real
   content from the book as a sample, in both languages; edit them,
   delete them, or add your own.

## The self-assessment tool

`/assessment/` (and `/es/assessment/`) is a free, interactive diagnostic
for potential clients. It asks a short set of statements grouped by the
book's four layers — CPU, RAM, LAN, and WAN — scores each layer from 1 to
5 entirely in the browser (no data is sent anywhere, no email required),
and shows a tailored recommendation per layer that links back to the
matching service on `/services/`.

- **Content** lives in `_data/assessment.yml` (statements, scoring bands,
  recommendations, and service links, in `en:`/`es:` keys) — edit the
  copy there, not in the page files.
- **Markup** is rendered by `_includes/components/assessment-quiz.html`,
  included from `assessment.md` / `es/assessment.md`.
- **Scoring logic** lives in `assets/js/assessment.js` — plain
  JavaScript, no framework, no analytics.
- **Styling** lives in `assets/css/assessment.scss`, loaded as a second
  stylesheet after `main.css` so the original stylesheet is never
  touched.
- Each service card on `/services/` (and `/es/services/`) carries a
  stable `id` (e.g. `#lan-audit`, `#leader-program`) so the assessment's
  recommendations can deep-link to the exact service that matches a weak
  layer.

## Publishing to GitHub Pages

1. Create a repository and push this folder.
2. Under **Settings → Pages**, choose the `main` branch and the root
   folder.
3. If you use a custom domain, add a `CNAME` file with the domain and
   configure your DNS.

GitHub Pages natively supports `jekyll-feed`, `jekyll-sitemap`, and
`jekyll-seo-tag`, so no extra configuration is needed for those plugins.
The sitemap and feed will automatically include pages from both
languages.

## Adding a blog post

**In English**, create a file in `_posts/` named
`YYYY-MM-DD-title-slug.md`:

```markdown
---
title: "Post title"
layer: CPU   # CPU, RAM, LAN, or WAN (optional, shown as a tag)
excerpt: "Short summary shown in the listing."
alt_lang_url: /es/posts/YYYY/MM/DD/slug-en-espanol/   # optional, if translated
---

Post content in Markdown.
```

**In Spanish**, create another file in `_posts/` (same folder), forcing
its URL under `/es/`:

```markdown
---
title: "Título del post"
layer: CPU
excerpt: "Resumen corto que aparece en el listado."
lang: es
permalink: /es/posts/YYYY/MM/DD/slug-en-espanol/
alt_lang_url: /posts/YYYY/MM/DD/slug-in-english/
---

Contenido del post en Markdown.
```

A post without a translation is perfectly valid: just omit
`alt_lang_url`, and that page's language button will fall back to the
other language's home page.

## What I'd build next

- **Newsletter**: capture emails on the home page or at the end of each
  post (Buttondown/ConvertKit have good static integrations), with
  separate forms per language.
- **Downloadable excerpt**: a sample PDF (you already have the preview)
  linked from `/book/` and `/es/book/` in exchange for an email, to
  generate leads before the purchase.
- **Lead capture on the assessment**: today the self-assessment is fully
  open (no email required) to keep friction low. Once there is enough
  traffic, consider an optional "email me my results" button on top of
  the instant on-page result.
- **Testimonials/reviews page** once the book has readers, also in both
  languages.
- **Analytics** (Plausible or Fathom, privacy-friendly) to see which
  pages, languages, and assessment outcomes convert best toward the buy
  button and the contact form.
