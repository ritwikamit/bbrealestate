<div align="center">

# 🏛️ Baba Baidyanath Real Estate Private Limited

**Official Corporate Portal & Architectural Documentation**

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployment%20Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-yellow.svg?style=for-the-badge)](#disclaimer)

<p align="center">
  A state-of-the-art, high-performance web platform and engineering documentation suite for <b>Baba Baidyanath Real Estate Private Limited</b>, engineered with modern frontend standards, responsive typography, interactive land calculation tools, and compliance disclosures.
</p>

[Explore Web App](#-web-application-features) • [Quick Start](#-quick-start) • [Architecture](#-monorepo-structure) • [Documentation](#-project-documentation) • [Deployment](#-deployment-to-vercel)

---

</div>

## 📌 Executive Summary & Corporate Profile

**Baba Baidyanath Real Estate Private Limited** is an active, unlisted Indian private company incorporated under the Companies Act, 2013, registered with the Registrar of Companies (ROC), Patna.

| Entity Attribute | Official Corporate Detail |
| :--- | :--- |
| **Legal Entity Name** | Baba Baidyanath Real Estate Private Limited |
| **Corporate Identification Number (CIN)** | `U68100BR2024PTC072121` |
| **Registration Number** | `072121` |
| **Date of Incorporation** | 7 November 2024 |
| **Company Category / Sub-Category** | Company limited by shares / Indian Non-Government Company |
| **Registrar of Companies** | ROC Patna |
| **Authorized Capital** | ₹1,00,000 (INR One Lakh) |
| **Paid-up Capital** | ₹1,00,000 (INR One Lakh) |
| **Corporate Office Address** | Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad-Bihar-824101, Bihar |
| **Registered Office (MCA)** | C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India |
| **Directors** | Kundan Kumar Singh & Vikas Kumar Singh |
| **Primary Industry Activity** | Real estate activities with own or leased property (Class 68100) |

> [!NOTE]  
> All corporate credentials published across this application are verified against public filings (Ministry of Corporate Affairs / Falcon eBiz / Tofler / ZaubaCorp). Fabricated projects, unverified pricing, and unauthorized claims are strictly prohibited by the project charter.

---

## ✨ Web Application Features

The frontend application (`baba-baidyanath-real-estate/`) delivers a rich, luxury-tier aesthetic tailored for high-trust real estate interactions:

- 🎨 **Dynamic Canvas & Backdrop**: Interactive canvas grid background animations and staggered hero typography.
- 📐 **Land & EMI Calculator Suite**:
  - **Regional Land Conversion**: Convert square feet to Kattha, Bigha, and Dhur with regional Bihar conversion factors.
  - **EMI & Mortgage Estimator**: Real-time monthly payment calculation, total interest breakdown, and amortization schedule.
- 📋 **Verified Project Showcase**: Filterable portfolio architecture ready for verified residential, commercial, and plotting projects.
- 🛡️ **Interactive Enquiry Engine**: Modal enquiry form with validation, lead categorization, and optional direct WhatsApp connectivity.
- 🔠 **Typography & Theme Switcher**: On-the-fly font pairing switcher (Inter, Outfit, Playfair Display) with persistent preferences.
- 📱 **Adaptive Omnichannel Navigation**: Desktop glassmorphism navbar and mobile-optimized bottom navigation dock.
- ⚖️ **Compliance & Transparency**: Built-in statutory pages for Privacy Policy, Terms of Service, and Real Estate Regulatory Disclaimers.

---

## 📂 Monorepo Structure

```text
├── 01-PRD.md                     # Product Requirements Document & Corporate Specification
├── 02-TRD.md                     # Technical Requirements & Architectural Roadmap
├── 03-DESIGN-DOC.md              # Design System, Typography & Component Contracts
├── 04-SECURITY.md                # Security Posture, Data Hygiene & Compliance Standards
├── 05-BUG-FIXES-QA.md            # QA Checklist, Verification Matrix & Audit Log
├── README.md                     # Monorepo Master Documentation (This file)
├── package.json                  # Root runner script configuration for CI/CD
├── vercel.json                   # Automated deployment orchestration for Vercel
├── .npmrc                        # Legacy peer dependency flags for CI build stability
├── .gitignore                    # Git exclusions for dependencies and build artifacts
│
└── baba-baidyanath-real-estate/  # Core Web Application (Vite + React 19)
    ├── index.html                # Application entry HTML with SEO meta tags
    ├── package.json              # Frontend dependencies and build pipeline
    ├── vite.config.ts            # Vite 8 build & bundler configuration
    ├── tsconfig.json             # TypeScript compiler settings
    ├── vercel.json               # SPA routing rewrite rule
    ├── .npmrc                    # Package manager config
    │
    ├── src/
    │   ├── App.tsx               # Primary application layout & route orchestration
    │   ├── main.tsx              # React DOM 19 root bootstrap
    │   ├── index.css             # Design tokens, Tailwind CSS 4, and utility classes
    │   ├── types/                # TypeScript interfaces (Company, Project, Enquiry)
    │   ├── data/                 # Canonical data sources (company, projects, FAQs)
    │   └── components/
    │       ├── canvas/           # Canvas grid animations
    │       ├── common/           # Company logo, back-to-top, SVG icons
    │       ├── company/          # About page, corporate facts bar, FAQ accordion
    │       ├── contact/          # Contact page, location details & interactive map
    │       ├── enquiry/          # Modal lead forms & validation
    │       ├── hero/             # Hero banner, artwork backdrop, staggered typography
    │       ├── legal/            # Privacy Policy, Terms of Use, Regulatory Disclaimers
    │       ├── loading/          # Screen loading states & skeletons
    │       ├── location/         # Regional office & location breakdown
    │       ├── navigation/       # Navbar, Mobile Bottom Dock, Footer, Font Switcher
    │       ├── projects/         # Featured listings & project filters
    │       ├── services/         # Capabilities & service breakdown
    │       ├── testimonials/     # Client voices & trust indicators
    │       └── tools/            # Land unit converter & EMI loan calculator
    │
    └── public/                   # Static media, SVG brandmarks & favicon assets
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or later (Node.js v20+ LTS recommended)
- **Package Manager**: `npm` (v10+), `pnpm`, or `bun`

### 1. Clone the Repository
```bash
git clone https://github.com/ritwikamit/bbrealestate.git
cd bbrealestate
```

### 2. Install Dependencies
Navigate to the web app directory and install dependencies:
```bash
cd baba-baidyanath-real-estate
npm install --legacy-peer-deps
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live application.

### 4. Build for Production
```bash
npm run build
```
Optimized assets will be output to `baba-baidyanath-real-estate/dist/`.

---

## 🚢 Deployment to Vercel

This repository is pre-configured with zero-configuration automated CI/CD for [Vercel](https://vercel.com):

### Automatic Git Push Deployments
When changes are pushed to branch `main`, Vercel automatically triggers a build and publishes the changes.

### Configuration Details
- **Root Orchestration**: [`vercel.json`](./vercel.json) executes:
  ```json
  {
    "buildCommand": "cd baba-baidyanath-real-estate && npm install --legacy-peer-deps && npm run build",
    "outputDirectory": "baba-baidyanath-real-estate/dist"
  }
  ```
- **SPA Client Routing**: Ensures dynamic client-side routes rewrite to `/index.html` without 404 errors.
- **Dependency Guard**: `.npmrc` with `legacy-peer-deps=true` ensures reliable installation in cloud containers.

> [!TIP]
> If importing the project into Vercel manually, you can leave the **Root Directory** as `./` or set it to `baba-baidyanath-real-estate`. Both setups are supported out of the box.

---

## 📖 Project Documentation

Detailed specifications and architectural contracts are maintained directly in the repository:

1. 📄 [**01-PRD.md**](./01-PRD.md) — Product Requirements Document, verified corporate profile, stakeholder personas, and roadmap.
2. ⚙️ [**02-TRD.md**](./02-TRD.md) — Technical Requirements Document, technology stack decisions, data structures, and database expansion plan.
3. 🎨 [**03-DESIGN-DOC.md**](./03-DESIGN-DOC.md) — Design system, color palettes, typography scale, responsive breakpoints, and animations.
4. 🔒 [**04-SECURITY.md**](./04-SECURITY.md) — Security standards, client-side input sanitization, rate-limiting, and privacy compliance.
5. 🧪 [**05-BUG-FIXES-QA.md**](./05-BUG-FIXES-QA.md) — QA test matrix, responsive viewport checklists, cross-browser compatibility, and bug remediation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Bundler & Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling & CSS** | [Tailwind CSS 4](https://tailwindcss.com/), CSS Custom Variables |
| **Motion & Micro-interactions** | [Framer Motion](https://www.framer.com/motion/) / Motion 12 |
| **Icons & Brand Assets** | [Lucide React](https://lucide.dev/), Custom Inline SVGs |
| **Deployment Platform** | [Vercel](https://vercel.com/) |

---

## ⚖️ Disclaimer

Information regarding Baba Baidyanath Real Estate Private Limited is derived from public corporate registry records (ROC Patna, Ministry of Corporate Affairs). This website is a corporate platform and does not constitute financial, investment, or real estate advisory services. Any upcoming projects will be listed in accordance with applicable RERA (Real Estate Regulatory Authority) regulations.

---

<div align="center">
  <sub>© 2026 Baba Baidyanath Real Estate Private Limited. All rights reserved.</sub>
</div>
