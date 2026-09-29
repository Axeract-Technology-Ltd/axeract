# axeract

Website for **Axeract Technology Ltd**: [axeract.ai](https://axeract.ai).

Next.js 16 (App Router) · Tailwind CSS v4 · GSAP + Lenis · deployed on Netlify.

## Develop

```bash
pnpm install
pnpm dev
```

Checks: `pnpm typecheck` and `pnpm lint`. Production build: `pnpm build`.

## Environment variables

See `.env.example`. Set real values in Netlify → Environment variables (never commit them):

- `SMTP_PASS`: Microsoft 365 password for the contact form email sender
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 ID (enables the cookie banner + analytics)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console token
