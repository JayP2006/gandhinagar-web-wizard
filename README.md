# Jaykumar — The Digital Architect

React 18 + TypeScript + Vite + Tailwind portfolio. Real procedural React Three Fiber hero, GSAP/ScrollTrigger reveals, interactive expertise explorer, editorial projects, achievements, education, light/dark themes and EmailJS contact.

## Run locally
Install Node.js, then run `npm install` and `npm run dev`. Vite prints the local address. `npm run lint` runs the existing linter. The Lovable preview automatically checks compilation and TypeScript.

## Public contact configuration
Copy `.env.example` to `.env.local` and fill in the existing EmailJS **public** service ID, template ID and public key. Template parameters: `name`, `email`, `message`, `time`. The existing public configuration is preserved in this workspace. Set these three VITE_EMAILJS variables in your deployment environment too. Never use private credentials in VITE variables. Without configuration, the form is disabled and direct email remains available. Delivery success is shown only for an EmailJS HTTP 200 response.

## Resume status
The supplied brief is authoritative for current professional information. Existing `public/ResumeFinal.pdf` and `public/jayResume.pdf` were inspected; both contradict the updated education and achievements. Download buttons intentionally say **Previous resume** and use the real ResumeFinal.pdf. Supply the updated PDF before relabeling the download; no resume was fabricated.

## Project verification
The existing public `JayP2006/Bharat-Skill-Exchange` repository describes BharatSkill Connect and lists JayP2006 as a contributor; that confirmed URL is used instead of the unconfirmed `bharatskill-connect` URL. Churn is a research case study, not a live dashboard. Its visualization shows only supplied metrics. The exchange preview is a feature journey, not a fabricated screenshot or interactive application. ShrinkX uses the existing real screenshot and supplied live URL. Legacy source URLs are preserved from the existing portfolio; no unavailable demos are rendered.

## Accessibility and lifecycle
GSAP animations are context-scoped and reverted on unmount. Reduced-motion preferences disable page animation and replace WebGL with a static code motif. Unsupported WebGL gets a CSS monogram sculpture. WebGL caps pixel ratio and stops rendering offscreen or in a hidden tab. Canvas is dynamically imported. Sections remain normal-scrolling and keyboard-accessible.

## Facts validation
Run `bun test src/data/portfolio.test.ts`. The tests lock user-supplied education, churn evaluation and competition values independently of presentation.
