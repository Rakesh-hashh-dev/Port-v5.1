# Aether Digital Craftsmanship

Personal portfolio of **Rakesh** - a high-performance portfolio bridging strategic rigor and digital craftsmanship.

Built with React 19, TypeScript, Vite 6, Tailwind CSS 4, and Three.js, featuring a WebGL shader background, smooth section transitions, and a custom cursor experience.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **3D / Visuals:** Three.js, custom GLSL shaders
- **Animation:** Motion
- **Icons:** Lucide React

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Lint and type-check
npm run lint

# Production build
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── backgrounds/   # ShaderBackground, ThreeSphere
│   ├── layout/        # Navbar, Footer, ScrollProgress, CustomCursor, BackToTop
│   └── sections/      # Hero, Experience, Skills, Projects, Photography, Contact
├── data/              # Typed content (site, experience, skills, projects, photos)
├── hooks/             # useIntersectionObserver, useScrollSpy, useReducedMotion
├── App.tsx
├── main.tsx
└── index.css
```

## License

© Rakesh. All rights reserved.
