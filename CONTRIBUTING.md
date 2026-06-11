# Contributing

Thanks for your interest in improving this portfolio. While this is a personal
project, suggestions and fixes are welcome.

## Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run lint     # lint and type-check
npm run build    # production build
```

## Workflow

1. Open an issue describing the bug or enhancement before starting work.
2. Create a branch from `main` using the pattern:
   - `feat/<short-description>` for features
   - `fix/<short-description>` for bug fixes
   - `docs/<short-description>` for documentation
   - `chore/<short-description>` for maintenance
3. Make your changes and ensure `npm run lint` and `npm run build` pass.
4. Open a merge request against `main` with a clear description of what and why.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add photography lightbox
fix: prevent cursor flicker on touch devices
docs: update setup instructions
chore: bump three to 0.185
```

## Code Style

- TypeScript strict typing; avoid `any`
- Functional React components with hooks
- Tailwind CSS utilities; shared design tokens live in `src/index.css` under `@theme`
- Keep components small; content/data belongs in `src/data/`, not in JSX
- Respect accessibility: semantic HTML, focus states, `prefers-reduced-motion`

## Reporting Issues

Use the [issue tracker](https://gitlab.com/rraku04-flame/port-v5/-/issues) and
include reproduction steps, expected vs. actual behavior, and browser/OS details.
