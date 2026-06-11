# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-06-11

### Added
- Reduced-motion support (hook + CSS) for shader background, sphere, cursor, and animations
- Deep-linkable smooth-scroll section navigation
- Lazy-loaded Three.js visuals with gradient fallback and error boundary
- Typed content data layer under `src/data/`
- ESLint flat config + Prettier tooling
- GitLab CI/CD with Pages deployment
- SEO meta tags, Open Graph/Twitter cards, SVG favicon
- Self-hosted fonts via Fontsource; lucide-react icons replace Material Symbols
- Accessibility: skip link, focus-visible styles, aria-current nav, labeled form fields

## [1.0.0] - 2026-06-11

### Added
- Initial portfolio: hero with Three.js wireframe sphere, WebGL shader background,
  experience timeline, skills orbit, bento project grid, photography masonry,
  achievements, and contact sections
- Custom cursor, scroll progress bar, back-to-top button, glassmorphism design system
- LICENSE, CHANGELOG, CONTRIBUTING project documentation

### Changed
- Rebranded project as Rakesh's own portfolio (`aether-portfolio`)
- Rewrote README with tech stack, setup, and project structure

### Removed
- All Google AI Studio scaffolding (`metadata.json`, `.env.example`, `assets/.aistudio/`)
- Unused dependencies: `@google/genai`, `dotenv`, `express`, `tsx`, `esbuild`
- AI Studio `DISABLE_HMR` workaround in `vite.config.ts`
