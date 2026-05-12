# Adisorn Parama Portfolio

Professional portfolio website for **Adisorn Parama** (`DarkTouiZ`), a Computer Engineering student focused on embedded systems, FPGA/HDL, applied machine learning, geospatial dashboards, and practical software products.

Live site: [adisxrn.vercel.app](https://adisxrn.vercel.app/)

## Overview

This portfolio presents selected projects, technical focus areas, tools, and contact links in a clean single-page layout. The site is built to feel direct and professional: fast to scan, easy to navigate, and focused on engineering work rather than decoration.

## Highlights

- Responsive single-page portfolio built with Next.js App Router.
- Professional hero section with profile photo and clear positioning.
- Project cards linking to selected GitHub repositories.
- Stack sections for software, data, GIS, hardware, and digital systems.
- Contact links for email, GitHub, LinkedIn, and Kaggle.
- Centralized portfolio content in `component/portfolio-data.ts` for easier updates.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **UI:** React, Tailwind CSS
- **Deployment:** Vercel
- **Runtime:** Node.js 24.x

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
```

## Project Structure

```text
.
├── component/
│   ├── navbar.tsx
│   └── portfolio-data.ts
├── public/
│   └── adisorn-super-ai.jpeg
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
└── tailwind.config.ts
```

## Updating Content

Most portfolio content lives in:

```text
component/portfolio-data.ts
```

Update that file to change the profile summary, project list, technology stack, contact links, or displayed photo path.

## Deployment

The site is deployed on Vercel. The project is configured for Node.js `24.x`, which matches the current Vercel runtime requirement.

Every push to the `master` branch triggers a production deployment.
