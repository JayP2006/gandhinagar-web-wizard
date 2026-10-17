# Architecture rules
- Preserve React 18, Vite, React Router and Tailwind; the redesign must remain compatible with the existing application.
- Keep professional facts in src/data/portfolio.ts and test concrete numerical rules there, so presentation changes cannot silently alter verified values.
- Use GSAP context-scoped motion for page choreography and a lazy React Three Fiber scene for the procedural artifact; cleanup and reduced-motion behavior are mandatory.
- Email delivery uses the existing EmailJS service with browser-safe public configuration in environment variables; only confirmed service success may produce delivery feedback.
- Keep old resume downloads explicitly marked as previous versions until a matching updated PDF is supplied.
