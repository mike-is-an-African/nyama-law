# Nyama Law Chambers — Website v4

**Mobile-first, optimized for fast loading on mobile networks.**

## What changed from v3

1. **Mobile-first rebuild.** Base CSS targets mobile (single column, 1.25rem padding, 44px touch targets, 16px form inputs to prevent iOS zoom). Larger breakpoints add desktop layout via min-width media queries.
2. **New hero image.** Blue front-door photograph replaces the library books on the home page — speaks directly to property law, matches the teal/navy palette.
3. **Performance.** Page sizes dropped from 500KB–1.5MB to 9–27KB. Images extracted to external files in `assets/images/` so they cache across all pages. Shared CSS (`assets/style.css`) and JS (`assets/main.js`) cache once and serve every page.

## File structure

```
nyama-site-v4/
├── index.html, departments.html, factsheet.html, about.html, contact.html
├── terms.html, privacy.html, complaints.html, diversity.html
├── 6 article pages (*-zimbabwe.html)
├── sitemap.xml, robots.txt
└── assets/
    ├── style.css   ← shared (cached)
    ├── main.js     ← shared (cached)
    └── images/     ← 14 images, all external (cached)
```

## Performance characteristics

- **First page load:** ~30KB HTML + 30KB CSS + 1KB JS + only the images that page references
- **Subsequent pages:** ~20KB HTML — CSS/JS/images served from browser cache
- **Hero image preloaded** via `<link rel="preload">` and `fetchpriority="high"` for fast LCP
- **All other images** use `loading="lazy"` and `decoding="async"`
- **Google Fonts** loaded with `font-display: swap` for instant text rendering
- **Reduced motion** honored via `@media (prefers-reduced-motion: reduce)`

## Mobile features

- Hamburger menu with full-screen overlay
- All buttons and links ≥ 44px touch targets
- Form inputs use 16px font-size (prevents iOS zoom-on-focus)
- Sticky department nav scrolls horizontally on mobile
- Fact sheet tabs scroll horizontally on mobile
- Hero stacks vertically; splits 54/46 on desktop (≥960px)
- Single-column grids by default; 2-column at ≥640px; 3-column at ≥960px

## Brand details preserved

- Address: 4 Bates Street, Milton Park, Harare
- Phones: +263 772 357 028 / 719 357 028 / 77 587 9942 / 864 427 990
- Email: nyamalawchambers@gmail.com / lawrencenyama@gmail.com
- Founded: 2016 — Principal Attorney: Lawrence Nyama
- Voice: "We cater and provide solutions to the problems of the people." / "The law is not to intimidate, but to protect and serve."

## Deployment

Drop the entire `nyama-site-v4/` directory onto any web host (Netlify, Vercel, Hostinger, cPanel — all work). No build step required. After deployment:

1. Update `<link rel="canonical">` URLs if hosting under a different domain
2. Submit `sitemap.xml` to Google Search Console
3. Set up Google Business Profile for local search
4. Register the social handles referenced in the footer

## Browser support

Modern browsers (Chrome, Safari, Firefox, Edge — all current versions). Graceful degradation on older browsers: animations stop, layout still works.
