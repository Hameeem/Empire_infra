# Empire Construction and Infrastructure — Official Corporate Website

[![Website Status](https://img.shields.io/badge/Status-Production%20Ready-10B981?style=for-the-badge)](https://www.empireinfra.in)
[![Deployment](https://img.shields.io/badge/Host-GitHub%20Pages-10243A?style=for-the-badge&logo=github)](https://pages.github.com)
[![Location](https://img.shields.io/badge/Location-Jammu%20%26%20Kashmir%2C%20India-F28C28?style=for-the-badge)](https://www.empireinfra.in)

A production-ready corporate website built for **Empire Construction and Infrastructure**, a construction, civil engineering, and infrastructure development company based in Jammu & Kashmir, India.

---

## 1. Company Overview

- **Company Name:** Empire Construction and Infrastructure
- **Headquarters / Operations:** Jammu & Kashmir, India
- **Industry:** Civil Engineering, Highway Development, Bridge Construction, Road Works & Government Contracting
- **Official Email:** [sarmad@empireinfra.in](mailto:sarmad@empireinfra.in)
- **Planned Domain:** [www.empireinfra.in](https://www.empireinfra.in)

---

## 2. Key Architecture & Features

- **Multi-Page Architecture:**
  - `index.html` — Homepage with full-width hero, corporate profile, core services overview, equipment highlight, featured projects, and contact CTA.
  - `about.html` — About Us page with company introduction, 4 approach blocks (Quality, Reliability, Commitment, Development), corporate objective, and regional focus.
  - `services.html` — Detailed catalogue covering Highway Construction, Road Construction, Building Construction, Bridge Construction, Government Infrastructure, and Civil Contracting.
  - `machinery.html` — Comprehensive heavy equipment showcase covering Asphalt Pavers, Motor Graders, Vibratory Rollers, Soil Compactors, Excavators, Batching Plants, and Tippers.
  - `projects.html` — Filterable project portfolio (All | Ongoing | Recent | Completed) with interactive modal detail view.
  - `contact.html` — Contact coordinates and interactive inquiry form pre-configured for `sarmad@empireinfra.in`.
  - `404.html` — Custom error page for seamless GitHub Pages routing.
- **Technology Stack:** Pure HTML5, Modern CSS3 (Grid & Flexbox), Vanilla JavaScript (no heavy frameworks or runtime dependencies).
- **Zero Cost Deployment:** 100% compatible with GitHub Pages with free HTTPS and custom domain mapping.
- **Responsive & Accessible:** Fully responsive across mobile, tablet, laptop, and ultra-wide displays.

---

## 3. Brand Identity & Design System

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary** | Deep Navy Blue | `#10243A` | Navigation, headers, authority accents |
| **Secondary** | Pure White | `#FFFFFF` | Card surfaces, typography contrast |
| **Accent** | Construction Orange | `#F28C28` | CTAs, focus indicators, highlights |
| **Supporting** | Steel Grey | `#64748B` | Body copy, borders, muted details |
| **Background** | Clean Off-White | `#F7F9FC` | Page body background |

**Typography:**
- Headings: `Montserrat` (bold, industrial, high authority)
- Body: `Inter` (neutral, crisp, readable)

---

## 4. Directory Structure

```text
empire-infra-website/
├── index.html                  # Homepage
├── about.html                  # About Us
├── services.html               # Service Catalogue
├── machinery.html              # Heavy Equipment & Machinery Fleet
├── projects.html               # Projects & Portfolio
├── contact.html                # Contact Us & Inquiry Form
├── 404.html                    # 404 Error Handler
├── CNAME                       # Domain routing (www.empireinfra.in)
├── robots.txt                  # Search engine crawlers policy
├── sitemap.xml                 # XML Sitemap for SEO
├── README.md                   # System documentation
└── assets/
    ├── css/
    │   └── style.css           # Modular corporate styling & media queries
    ├── js/
    │   ├── main.js             # Sticky nav, drawer, modals, form validation
    │   └── projects-data.js    # Decoupled project portfolio dataset
    └── images/
        ├── logo/               # Vector logos (primary, light, favicon)
        ├── hero/               # Hero background imagery
        ├── services/           # Service illustrations & photos
        ├── machinery/          # Equipment photos & vector graphics
        └── projects/           # Project photos & layout artwork
```

---

## 5. How to Deploy to GitHub Pages (Step-by-Step)

### Option A: Via GitHub Desktop or Web Interface
1. Create a new repository on GitHub named `empire-infra-website` (or `empireinfra.github.io`).
2. Upload all files from this directory into the root of the repository.
3. In GitHub, navigate to **Settings** > **Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Set branch to `main` (or `master`) and folder to `/ (root)`, then click **Save**.
6. Your website will be live in ~60 seconds at `https://<your-username>.github.io/empire-infra-website/`.

### Option B: Custom Domain Configuration (`www.empireinfra.in`)
The repository includes a `CNAME` file containing:
```
www.empireinfra.in
```
In your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.):
1. **CNAME Record:**
   - Host / Name: `www`
   - Target / Points to: `<your-username>.github.io`
2. **A Records (Apex redirect for empireinfra.in):**
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. In GitHub Repository **Settings** > **Pages**, ensure **Enforce HTTPS** is checked.

---

## 6. How to Replace the Company Logo

The website uses responsive vector SVG logos:
- `assets/images/logo/logo-primary.svg` (for light navbar)
- `assets/images/logo/logo-light.svg` (for dark footer)
- `assets/images/logo/favicon.svg` (browser tab icon)

**To update with your exact original logo:**
1. Drop your official logo file into `assets/images/logo/` (e.g. `logo.png` or `logo.svg`).
2. The navbar and footer image tags already specify explicit heights (`height="48"`) with `object-fit: contain`, so your logo will automatically maintain its exact proportions without distortion.

---

## 7. How to Add or Edit Projects

Project records are separated from HTML in `assets/js/projects-data.js`.
To add a new project, simply append an entry to the `PROJECTS_DATA` array:

```javascript
{
  id: "proj-7",
  title: "New Project Name",
  category: "ongoing", // "ongoing" | "recent" | "completed"
  categoryLabel: "Road Construction",
  location: "Jammu & Kashmir, India",
  status: "Ongoing",
  statusCode: "ongoing",
  completionDate: "Target 2027",
  image: "assets/images/projects/your-photo.jpg",
  gallery: ["assets/images/projects/your-photo.jpg"],
  shortDesc: "Summary description for the portfolio card.",
  fullDesc: "Detailed engineering scope for the detail modal.",
  keyComponents: [
    "Formation cutting and earthworks",
    "Sub-base and base course execution",
    "Bituminous surfacing and drainage"
  ],
  isSample: false // Set to false for genuine company projects
}
```

---

## 8. Official Contact & Inquiries

- **Official Email:** [sarmad@empireinfra.in](mailto:sarmad@empireinfra.in)
- **Headquarters:** Jammu & Kashmir, India
- **Planned Domain:** [www.empireinfra.in](https://www.empireinfra.in)
