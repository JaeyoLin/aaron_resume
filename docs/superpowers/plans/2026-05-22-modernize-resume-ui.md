# Resume Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the resume site to a modern Vite-based stack and refresh the UI into a cleaner, more professional personal brand experience.

**Architecture:** Replace the CRA-era build pipeline with Vite, Tailwind CSS v4, and current React tooling, then rebuild the app shell around a more polished visual system. Keep the existing content model and route structure, but restyle the pages into a consistent card-and-timeline layout that still prints cleanly.

**Tech Stack:** React 19.2.6, React Router DOM 7.15.1, Vite 8.0.14, Tailwind CSS 4.3.0, @vitejs/plugin-react 6.0.2, @tailwindcss/vite 4.3.0, react-icons 5.6.0, react-to-print 3.3.0, Vitest 4.1.7, Testing Library 16.3.2, jsdom 29.1.1

---

### Task 1: Replace the CRA toolchain with Vite

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Modify: `src/index.css`
- Create: `src/test/setup.js`
- Delete: `public/index.html`
- Delete: `src/index.js`
- Delete: `config-overrides.js`
- Delete: `postcss.config.js`
- Delete: `tailwind.config.js`
- Delete: `src/setupTests.js`
- Modify: `README.md`

- [ ] **Step 1: Update the package manifest to Vite-era scripts and dependencies**

Replace the CRA scripts and old build dependencies in `package.json` with the modern stack:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.15.1",
    "react-to-print": "^3.3.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@vitejs/plugin-react": "^6.0.2",
    "jsdom": "^29.1.1",
    "tailwindcss": "^4.3.0",
    "vite": "^8.0.14",
    "vitest": "^4.1.7"
  }
}
```

- [ ] **Step 2: Add the Vite entry files and remove CRA entrypoints**

Create a root `index.html` that loads `/src/main.jsx`, and move the React bootstrap logic into `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

Delete `src/index.js` and `public/index.html` so Vite is the only entry path.

- [ ] **Step 3: Wire Tailwind v4 through the Vite CSS entry**

Replace the old Tailwind v3 directives in `src/index.css` with a v4-style import and theme tokens. Preserve the `green-dark` brand color and the print variant in CSS so the existing `print:` classes still work:

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap");
@import "tailwindcss";

@theme {
  --color-green-dark: #647b71;
  --color-ink: #12201b;
  --color-paper: #f6f2ea;
  --font-sans: "Source Sans 3", sans-serif;
  --font-display: "Space Grotesk", sans-serif;
}

@custom-variant print {
  @media print {
    @slot;
  }
}
```

- [ ] **Step 4: Add the Vite config with path aliases**

Create `vite.config.js` with `@Assets`, `@Components`, and `@Pages` aliases so the existing imports keep working:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Routes': path.resolve(__dirname, 'src/Routes'),
      '@Utils': path.resolve(__dirname, 'src/Utils'),
    },
  },
});
```

- [ ] **Step 5: Reinstall packages and confirm the build pipeline works**

Run:

```bash
npm install
npm run build
```

Expected: `dist/` is created and the build exits cleanly without CRA-related errors.

### Task 2: Rebuild the app shell and page chrome

**Files:**
- Modify: `src/App/App.js`
- Modify: `src/Pages/Ruseme/Ruseme.js`
- Modify: `src/Pages/Portfolio/Portfolio.js`
- Modify: `src/index.css`
- Modify: `README.md`

- [ ] **Step 1: Replace the plain white container with a modern page shell**

Update `src/App/App.js` so the app renders a full-page background with soft gradients, a centered content rail, and a header that feels like a product landing page rather than a starter template. Keep the existing `/` and `/portfolio` routes, but move the shared shell styling into the app wrapper instead of repeating it in each page.

- [ ] **Step 2: Rework the page header and navigation**

Refactor `src/Pages/Ruseme/Ruseme.js` and `src/Pages/Portfolio/Portfolio.js` so both pages share the same top chrome:

```jsx
<header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
    <nav className="flex items-center gap-4 text-sm font-medium">
      <Link to="/" className="transition hover:text-green-dark">Resume</Link>
      <Link to="/portfolio" className="transition hover:text-green-dark">Portfolio</Link>
    </nav>
    <button className="rounded-full border border-black/10 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      Print
    </button>
  </div>
</header>
```

Migrate `react-to-print` to the hook API while you do this so the upgraded dependency works cleanly:

```jsx
import { useReactToPrint } from 'react-to-print';

const handlePrint = useReactToPrint({
  contentRef: componentRef,
});
```

Use the existing print action, but restyle it as a stronger CTA and keep it visible on desktop.

- [ ] **Step 3: Add the visual language tokens for the redesign**

Extend `src/index.css` with the new page palette and typography rules:

```css
html {
  scroll-behavior: smooth;
  background:
    radial-gradient(circle at top left, rgba(100, 123, 113, 0.18), transparent 30%),
    radial-gradient(circle at top right, rgba(223, 179, 107, 0.14), transparent 26%),
    var(--color-paper);
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--color-ink);
  font-family: var(--font-sans);
  background: transparent;
}
```

- [ ] **Step 4: Refresh the README with the new Vite commands**

Replace the old CRA commands in `README.md` with:

```md
npm install
npm run dev
npm run build
npm run preview
```

### Task 3: Redesign the resume content into cards and timeline sections

**Files:**
- Modify: `src/Components/Profile/Profile.js`
- Modify: `src/Components/Education/Education.js`
- Modify: `src/Components/WorkExperience/WorkExperience.js`
- Modify: `src/Components/Skills/Skills.js`

- [ ] **Step 1: Turn the profile block into a strong hero section**

Keep the existing data, but restyle `Profile.js` into a compact hero with:

```jsx
<section className="overflow-hidden rounded-3xl border border-black/5 bg-white/85 p-6 shadow-[0_20px_60px_rgba(18,32,27,0.08)] backdrop-blur md:p-8">
  <div className="grid gap-8 lg:grid-cols-[220px,1fr]">
    {/* avatar, identity, quick links */}
    {/* summary text, highlight chips, contact links */}
  </div>
</section>
```

Use the new font pairing, clearer hierarchy, and tighter copy so the opening section reads like a professional résumé summary.

- [ ] **Step 2: Compress education into a clean metadata card**

Refactor `Education.js` into a one-card summary with date, institution, degree, and a subtle accent line. Keep the content unchanged, but format it as a supporting detail instead of a standalone block.

- [ ] **Step 3: Convert work history into a timeline**

Restyle `WorkExperience.js` so each job becomes a timeline card with:

```jsx
<article className="relative rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
  <div className="flex items-start justify-between gap-4">
    {/* company name, logo, role, dates */}
  </div>
  <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
    {/* concise accomplishment bullets */}
  </ul>
</article>
```

Keep `Cathay United Bank` first, keep the official logo you already added, and make the bullets more achievement-oriented instead of task-only.

- [ ] **Step 4: Rebuild the skills section as grouped chips**

Keep the new `AI` category, but present each category as a card with pill-style chips instead of long bullet lists. Preserve the same information, but make the section more scannable and visually lighter on desktop and print.

- [ ] **Step 5: Keep print output intact**

Verify that the redesigned cards still collapse into a readable print layout. Use `print:` utilities where needed so the on-screen design can be more expressive without breaking the PDF-style output.

### Task 4: Modernize the portfolio page and gallery layout

**Files:**
- Modify: `src/Components/PortfolioList/PortfolioList.js`
- Modify: `src/Pages/Portfolio/Portfolio.js`

- [ ] **Step 1: Replace the long single-column image stack with grouped project cards**

Refactor `PortfolioList.js` so each employer or project family becomes a section with a clear heading, short description, and a responsive image grid. Prefer a data-driven array for the gallery so the layout is easier to maintain:

```jsx
const portfolioGroups = [
  {
    title: 'Bank of Kaohsiung',
    summary: 'Internal banking systems, website, and SWIFT Alliance work.',
    items: [
      { title: 'Office Website', image: BOK_1 },
      { title: 'SWIFT Alliance', image: BOK_2 },
    ],
  },
];
```

- [ ] **Step 2: Give the portfolio page the same visual language as the resume**

Update `Portfolio.js` so it uses the same shell, spacing, and navigation treatment as the resume page. The portfolio should feel like a sibling view, not a separate app.

- [ ] **Step 3: Make the print version still useful**

Keep the portfolio images printable and readable, but reduce oversized gaps and hard-coded print offsets so the print layout adapts to the new card-based structure.

### Task 5: Add smoke tests and finish verification

**Files:**
- Create: `vitest.config.js`
- Create: `src/test/setup.js`
- Create: `src/App/App.test.jsx`
- Create: `src/Pages/Portfolio/Portfolio.test.jsx`
- Modify: `package.json`
- Modify: `README.md`

- [ ] **Step 1: Add Vitest and Testing Library setup**

Create a Vitest setup that loads `@testing-library/jest-dom` once for every test:

```js
import '@testing-library/jest-dom';
```

`vitest.config.js` should point at the same setup file and run in `jsdom`:

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
  },
});
```

- [ ] **Step 2: Add one smoke test for each route**

Use React Testing Library to prove the two routes still render:

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the resume page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Aaron Lin')).toBeInTheDocument();
});
```

Add a second test that renders `/portfolio` and checks for the portfolio heading.

- [ ] **Step 3: Run the verification commands in order**

Run:

```bash
npm run test -- --run
npm run build
npm run dev
```

Expected:
- tests pass
- build succeeds
- the Vite dev server starts on `localhost:5173`

- [ ] **Step 4: Open the app in a browser and do a final visual pass**

Check the resume and portfolio pages at `http://localhost:5173/#/` and `http://localhost:5173/#/portfolio`, then confirm:
- the hero section reads cleanly on desktop and mobile
- the timeline and skill cards do not wrap awkwardly
- the print button still works
- the new typography and spacing feel more polished than the current version
