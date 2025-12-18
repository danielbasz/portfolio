# Daniel Porto Portfolio

A professional portfolio website showcasing Daniel's journey as a Full Stack Developer and Multimedia Specialist.

**Live Site:** [danielbasz.github.io/portfolio](https://danielbasz.github.io/portfolio)

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** SCSS Modules + CSS Variables
- **Deployment:** GitHub Pages (static export)

## Features

- Responsive design across all devices
- Hero section with video background
- Experience section showcasing work history
- Education section with credentials
- Contact form (Formspree integration)
- Gradient-styled UI elements

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run type-check

# Lint
npm run lint

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.scss        # Global styles
├── components/
│   ├── Hero/               # Hero section with video
│   ├── Section/            # Reusable section component
│   ├── sections/           # Page sections (Work, Education)
│   ├── ExperienceCard/     # Experience card component
│   ├── Footer/             # Footer with social links
│   └── ui/                 # UI components (Container, ContactModal)
├── hooks/                  # Custom React hooks
├── lib/                    # Data and utilities
│   └── data.ts             # Portfolio content data
├── models/                 # TypeScript interfaces
├── styles/                 # SCSS modules and variables
└── config/                 # Site configuration
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

Manual build for static export:
```bash
npm run build
```

Output is generated in the `./out` directory.

## License

MIT
