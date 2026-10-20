# Creatures Great and Small

Last updated: 20 October 2026.

This is Steve Kirsten’s sculpture portfolio, including the Railway People made from reclaimed Knysna railway hardware.

## Hosting

- Public address: https://creatures-great-and-small.vercel.app
- The former creaturesgreatandsmall.shop domain has expired. Do not use it in links or canonical metadata.
- GitHub main is connected to the existing Vercel project and triggers production deployment.
- Vercel serves the `out` directory as plain static files (`framework: null`). No Next.js server is deployed.
- Node 22 is configured for Vercel builds.

## Design

- White gallery space, forest green #173c32, mist #f1f4f1, sage #e3ebd5, muted text #5a6b63.
- Locally hosted Bricolage Grotesque display typography and DM Sans body typography.
- The original sculpture photographs are the visual focus: a large interactive hero, a filterable gallery, material story, maker portrait, and direct email contact.
- Motion includes coordinated hero entrances, pointer response, a moving craft ribbon, scroll reveals, a rotating railway screw, gallery transitions, and a native modal viewer. Respect reduced motion and the persistent pause control.
- Every original gallery ID 1–28 remains supported. Never reorder those IDs.
- Avoid fabricated claims, testimonials, pricing, availability, market schedules, or social accounts. The known contact address is stavroskirsten@gmail.com.

## Development and validation

Use Node 22 and `npm ci`.

- `npm run dev`: prepare local image sizes and start Next development.
- `npm run type-check`: required before committing.
- `npm run build`: prepare responsive WebP files, export static HTML, externalize hydration scripts, and verify static/security invariants.
- `npm start`: serve the exact export with production security headers for QA.
- `npm run test:e2e`: desktop and mobile browser tests, including Axe accessibility checks. Install Chromium with `npx playwright install chromium` first.
- Set TEST_BASE_URL to test a deployed site with the same browser checks.

The project has no database, server-side form, API route, middleware, server action, analytics beacon, or remote social widget. Collection data is in src/lib/collection.ts. Original photographs remain in public/images; build output contains only compressed versions.

## Security and cost controls

The user explicitly asked to reduce the risk of bots causing Vercel charges.

- Keep `output: 'export'` and `images.unoptimized: true` in next.config.js.
- Keep Vercel `framework: null` and `outputDirectory: out`. Do not deploy a server runtime.
- Resize and compress images during the build. Never introduce /_next/image or a dynamic image service.
- No third-party scripts or fonts. The previous Elfsight widget and placeholder Instagram links have been removed.
- The strict production CSP allows scripts only from this origin, without unsafe-inline or unsafe-eval. Inline style permission is used for animation and React style attributes.
- scripts/finalize-static.mjs moves deterministic Next hydration scripts into content-hashed external files before deployment. Verify this with real browsers after framework updates.
- vercel.json sets CSP, frame protection, content-type protection, referrer policy, permissions policy, HSTS, and asset caching.
- npm overrides patch the build-time PostCSS and Sharp dependencies. Keep npm audit clean when updating.
- Static CDN requests and bandwidth can still be billed on a paid Vercel plan. Static export is not a spending cap or bot blocker.
- Account firewall and Spend Management require authenticated Vercel access. The saved CLI token was expired during this task; a connection was requested. Do not claim bot rules or automatic pausing are enabled without reading and verifying those settings.
- Vercel’s automatic spending pause can affect all projects on a team. Confirm scope and threshold with the owner before changing team-wide billing behavior.

## Verification status

Local production build, static/security invariant checks, TypeScript checking, and all four Playwright desktop/mobile tests passed. Axe reported no violations on the homepage, modal, story pages, or sculpture detail page. Browser tests confirmed no external requests or JavaScript errors and no horizontal overflow at 320, 375, 390, 768, 1024, and 1440 pixels. npm installation audit: zero known vulnerabilities. Live deployment verification is the remaining step.
