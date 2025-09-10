# Quin Consulting — Static Site

This is a lightweight, responsive static website for Quin Consulting.

Preview locally:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

Visit `http://127.0.0.1:5173`.

Deploy options:
- GitHub Pages, Netlify, or Vercel (static).

## Deploy on GitHub Pages (with Namecheap)

1) Push this folder to a GitHub repo (root contains `index.html`).

2) In the repo: Settings → Pages
- Source: `main` branch, `/ (root)`
- Custom domain: `quin.cc`
- Enforce HTTPS: enabled (turn on after DNS is set)

3) DNS at Namecheap (Domain List → Manage → Advanced DNS)
- Apex `@` A records → GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Optional IPv6 AAAA records (recommended):
  - 2606:50c0:8000::153
  - 2606:50c0:8001::153
  - 2606:50c0:8002::153
  - 2606:50c0:8003::153
- `www` CNAME → your GitHub Pages host (shown in GitHub, often `<username>.github.io`)

4) Wait 5–30 minutes for DNS, then re-check GitHub Pages → Enforce HTTPS.

Notes
- `CNAME` file is included with `quin.cc` so the domain stays pinned across deploys.
- Keep MX records intact so email for `@quin.cc` continues to work.

Domain: `quin.cc`
- Set A record to your host’s IPv4 and AAAA for IPv6 if provided.
- Add `www` CNAME to `quin.cc` if you want `www`.
- Ensure HTTPS via your host (Netlify/Vercel auto, GitHub Pages via Enforce HTTPS).

SEO/meta:
- `index.html` includes canonical `https://quin.cc`, Open Graph, and theme color.

Contact form:
- The form is not wired. To use Formspree, set the form `action` to your endpoint:
  ```html
  <form id="contact-form" method="post" action="https://formspree.io/f/yourid">
  ```

Brand colors:
- Red `#e51737`, Navy `#0d1b2a` (see `css/styles.css`).

Favicon & logo:
- SVGs in `assets/`. Replace with your final brand as needed.
