# Anwesh Digajerla — Portfolio

A responsive personal portfolio built with React and Vite. It includes profile, about, professional experience, skills, education, projects, and contact sections.

## Requirements

- Node.js 20.x or 22 or newer
- npm

## Run locally

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

The production build is generated in `dist/`. Do not commit `dist/` or `node_modules/`; both are excluded in `.gitignore`.

## Project layout

- `src/` — React application
- `public/photos/` — portfolio images, icons, and CV (copied into production builds by Vite)
- `style.css` — responsive site styling
- `index.html` — Vite HTML entry point

## Before publishing

Review the project and social links in `src/App.jsx`, confirm the CV and image assets in `photos/` are the intended versions, and update any placeholder project links.
