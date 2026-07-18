# Connect with Writer — Full Site (Marketing + Dashboard + Auth)

Next.js (App Router) conversion of the original static site, now with a working
dashboard and real authentication (Firebase Auth + Google sign-in + email OTP).

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # then fill in real values — see "Setup" below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Important:** this project won't build or run at all until `.env.local` has real
Firebase values in it (the client SDK validates its config at load time). Follow
the Setup steps below first.

## Setup

### 1. Create a Firebase project
1. Go to [console.firebase.google.com](https://console.firebase.google.com) → Create a project (free "Spark" plan is enough to start).
2. **Authentication** → Sign-in method → enable **Email/Password** and **Google**.
3. **Firestore Database** → Create database → start in production mode (any region).
4. **Project Settings → General → Your apps** → add a Web app → copy the config values into `.env.local` as `NEXT_PUBLIC_FIREBASE_*`.
5. **Project Settings → Service Accounts** → Generate new private key → downloads a JSON file. Copy `project_id` → `FIREBASE_PROJECT_ID`, `client_email` → `FIREBASE_CLIENT_EMAIL`, and `private_key` → `FIREBASE_PRIVATE_KEY` (keep the quotes and `\n`s exactly as they appear in the JSON).

### 2. Create a Resend account (for OTP emails)
1. Go to [resend.com](https://resend.com) → sign up free (3,000 emails/month free tier).
2. **API Keys** → create one → copy into `.env.local` as `RESEND_API_KEY`.
3. `EMAIL_FROM` can stay as the default `onboarding@resend.dev` for testing — Resend lets you send from that address without verifying a domain. Once you own a domain, verify it in Resend and switch `EMAIL_FROM` to your own address for production.

### 3. Restart the dev server
Env changes require a restart: stop `npm run dev` and run it again.

## How auth works

- **Signup** (`/signup`): creates the Firebase Auth account, then sends a 6-digit
  code to the person's email (`/verify?purpose=signup`). Entering the correct
  code marks the account verified and logs them in.
- **Login** (`/login`): checks email/password against Firebase, then — as a 2FA
  step — sends a fresh 6-digit code (`/verify?purpose=login`) before creating
  the session.
- **Google sign-in**: skips the OTP step entirely (Google already verified the
  email), and logs the person straight in.
- **Sessions**: stored as an httpOnly cookie (`session`), created via Firebase's
  `createSessionCookie`. Dashboard routes are protected two ways — `proxy.js`
  (Next.js 16's replacement for `middleware.js`, which now runs on the Node.js
  runtime so it can fully verify the cookie) redirects unauthenticated visitors
  before the page ever renders, and the `(dashboard)` layout re-checks
  server-side as a second line of defense.
- **OTP codes** live in Firestore (`otps` collection), expire after 10 minutes,
  and allow 5 attempts before requiring a fresh code.

## Project Structure

```
app/
  (marketing)/          Public site — see Phase 1 notes below
  (dashboard)/           Logged-in app — protected by proxy.js + layout auth check
    layout.js              Verifies session, renders AppShell (sidebar/topbar)
    dashboard/, my-content/, team/, ai-tool/, all-tools/, api-keys/,
    ai-book-writer/, usage/, account-settings/
  (auth)/                Login/signup/verify — no sidebar, centered card layout
    login/, signup/, verify/
  api/auth/               send-otp, verify-otp, session (Google), logout
  dashboard-globals.css  App-shell + auth-screen styles (Playfair Display + Lato,
                          separate from the marketing site's Fraunces + Inter —
                          this matches the original design, which used different
                          fonts for the two sections)
  robots.js, sitemap.js  SEO routes

components/
  dashboard/             AppSidebar, AppTopbar, AppShell, TeamTable, ToolsExplorer,
                          OutlineBuilder, ApiKeyBox, CopyButton + CopyToastProvider,
                          SettingsForm (the "Saved ✓" pattern), AccountInfoForm,
                          PasswordForm
  auth/                  AuthShell, GoogleButton, PasswordInput, OtpCodeInput

lib/
  firebase/client.js      Firebase client SDK (browser)
  firebase/admin.js       Firebase Admin SDK (server-only, lazy-initialized)
  session.js              Session cookie create/verify/clear
  otp.js                  OTP generate/verify against Firestore
  mailer.js                Nodemailer → Resend, sends the OTP email

proxy.js                 Route protection (Next.js 16's middleware replacement)
```

## What's real vs. still a demo

**Real:** account creation, login, Google sign-in, OTP email verification and
2FA, session management, route protection, password change.

**Still demo/placeholder** (matching the original static mockup's behavior,
ready for you to wire up to real data later): the AI writing tools don't call
a real AI model yet, usage/billing numbers are hardcoded, the WordPress
"Connect" button doesn't do anything yet, and Account Settings' name/email
save doesn't persist anywhere (it only updates local state — add a Firestore
write there when you're ready).

## Fixes & upgrades made along the way

A few things in the original static mockup were either broken or non-functional
— fixed as part of the conversion rather than faithfully reproduced:
- Sidebar nav links that pointed at the wrong pages (All Tools, Team, Billing,
  API all pointed at the same page in the original)
- The account dropdown in the sidebar didn't open anything — now has a working
  menu with Account Settings + Log Out
- The All Tools search/filter, Team invite/remove, and API key copy/reveal
  buttons are now fully functional (the JS behavior was already well-specified
  in the original — this just wires it into React state)

## Loading animation

A branded book-icon loader (`components/PageLoader.jsx`) shows on the very
first paint of the site — it draws itself in, then gently pulses — and fades
out once the page has finished loading. The same animated mark also powers
Next.js's native `loading.js` files for each section, which show
automatically during navigation:
- **Marketing/auth pages**: full-screen, since the whole page is changing
- **Dashboard pages**: scoped to just the content area — the sidebar and
  topbar stay visible and only the page content shows the loader, since
  they don't need to reload when you click between dashboard sections

## Phase 1 (marketing site) recap

See the original Phase 1 notes for the marketing site's structure. Two things
changed there since:
- The "Market Your Book" hero image now tilts toward the cursor (`TiltCard`)
- The portfolio sliders ("Our Portfolio", "Recent Launches", etc.) now
  auto-scroll continuously and pause on hover, instead of requiring manual
  arrow clicks
- The two overlapping books in the "Publishing Isn't the Finish Line" section
  separate on hover
- The testimonial carousel auto-advances every ~1s, pausing on hover
