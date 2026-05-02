# CyberWatch — Cybersecurity Threat Intelligence Dashboard

A dark-themed, production-quality cybersecurity awareness dashboard built as a capstone React project.

## Features

| Page | Description |
|------|-------------|
| **Dashboard** | Live threat stats, weekly trend charts, attack vector breakdown, recent alerts |
| **Breach Checker** | Check any email against known data breach databases (HIBP-compatible) |
| **IP Reputation** | Lookup any IP for geolocation, threat score, proxy/VPN detection |
| **CVE Feed** | Browse NIST NVD vulnerabilities with search, severity filters, and pagination |
| **Password Audit** | Locally analyze password strength, entropy, and estimated crack time |
| **Settings** | Toggle dark mode, view API status and tech stack info |

## Tech Stack

- **Frontend:** React 18 + Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router v6 (with lazy loading + Suspense)
- **Styling:** Tailwind CSS v3 (dark mode, custom colors)
- **Charts:** Recharts (AreaChart, PieChart, RadialBarChart)
- **HTTP:** Axios
- **Advanced:** Error Boundary, debounced search, pagination, memoization

## APIs Used

- [NIST NVD CVE API v2.0](https://nvd.nist.gov/developers) — Free, no key needed
- [ip-api.com](https://ip-api.com) — Free, CORS-friendly
- [HaveIBeenPwned](https://haveibeenpwned.com/API/v3) — Falls back to realistic mock data without a key

## Setup

```bash
# 1. Open the cyberwatch folder in VS Code

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

## Deployment (Vercel/Netlify)

```bash
npm run build
# Upload the dist/ folder or connect your GitHub repo
```

## Project Structure

```
cyberwatch/
├── src/
│   ├── components/
│   │   ├── layout/        # Sidebar, Topbar
│   │   └── ui/            # ErrorBoundary
│   ├── hooks/
│   │   └── useDebounce.js # Custom debounce hook
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── BreachChecker/
│   │   ├── IPLookup/
│   │   ├── ThreatFeed/
│   │   ├── PasswordAudit/
│   │   └── Settings/
│   ├── store/
│   │   ├── store.js
│   │   └── slices/        # uiSlice, breachSlice, ipSlice, threatFeedSlice
│   ├── utils/
│   │   └── passwordStrength.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```
