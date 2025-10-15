# Doney Biju · Portfolio (Static, secure)

Deploy on Cloudflare Pages for free with HTTPS, CDN, and security headers.

## Quick start
1) Edit your contact links in `index.html` (Email, LinkedIn, GitHub).
2) Update `projects.json` with real links and details.
3) Optional: add `CV.pdf` to the root.
4) Replace `YOUR-DOMAIN.example` in `index.html`, `robots.txt`, `sitemap.xml`, `.well-known/security.txt`.

## Deploy to Cloudflare Pages
- Create a new Pages project from this folder or link the GitHub repo.
- Build command: **none**
- Output directory: **/** (root)
- Custom headers are set via `_headers` in this repo.

## Notes
- CSP is strict (`default-src 'self'`). Do not add external scripts/fonts unless you adjust the CSP in `_headers`.
- All assets are local to keep privacy and performance strong.
