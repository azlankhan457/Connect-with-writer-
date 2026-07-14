# Book Writing — Marketing Site (Phase 1)

This is the public marketing site converted from the original static HTML pages into a Next.js
(App Router) project. This is **Phase 1** of the full project — the dashboard/app pages
(login, signup, AI tool, etc.) and the backend (Firebase auth, Google sign-in, OTP emails) come
in Phase 2.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Project Structure

```
app/
  layout.js                 Root layout — fonts, icon sprite, metadata
  globals.css                All design tokens + shared styles (colors, buttons, cards, etc.)
  robots.js / sitemap.js     SEO routes (replace the old static robots.txt / sitemap.html)
  (marketing)/                Route group — every public page shares SiteHeader + SiteFooter
    layout.js                  Wraps pages with header/footer + the scroll-reveal observer
    page.js                    Homepage (/)
    about-us/, services/, book-writing/, book-editing/, proofreading/,
    book-publishing/, childrens-book-publication/, childrens-book-illustration/,
    book-cover-design/, book-marketing/, case-studies/, contact/,
    privacy-policy/, terms-of-service/, sitemap/
                                One folder per route, matching the original page URLs

components/
  SiteHeader.jsx, SiteFooter.jsx     Shared nav + footer (used on every page)
  IconSprite.jsx                     The icon set, rendered once in the root layout
  RevealObserver.jsx                 Makes any element with class="reveal" fade in on scroll
  PortfolioSlider.jsx, ReviewsSlider.jsx   Reusable sliders, fed with page-specific data
  FaqAccordion.jsx, FaqGrid.jsx      Two FAQ styles used across the site
  ContactForm.jsx                    The short contact form at the bottom of every service page
  MultiStepContactForm.jsx           The 3-step form on the dedicated /contact page
  CaseStudyGrid.jsx                  Case studies grid with **working** genre filters
                                      (the original filter buttons were decorative — these
                                      actually filter now)
```

## Notes

- **Fonts**: uses `next/font/google` (Fraunces + Inter) — these download automatically on
  `npm run dev` / `npm run build` as long as you have a normal internet connection. No API key
  needed.
- **Forms**: all forms currently simulate submission client-side (matching the original static
  site's behavior) — no emails actually send yet. Wiring these up to real email delivery is part
  of Phase 2's backend work.
- **Styling**: one shared `app/globals.css` holds the whole design system, plus a small
  "page-specific additions" section at the bottom for styles only used on About/Case
  Studies/Contact (timelines, team cards, multi-step form, etc.).
- **Design system stays 1:1 with the original** — same color tokens, spacing, fonts — nothing
  was restyled, only rebuilt as React components.

## Coming in Phase 2

- Dashboard pages (login, signup, dashboard, AI tool, team, usage, API, account settings)
- Firebase Authentication (email/password + Google sign-in)
- Nodemailer + Resend for OTP emails (signup verification + login 2FA)
