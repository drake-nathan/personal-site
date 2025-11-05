# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site is a single-page application featuring a profile card with social links and a resume download.

## Development Commands

### Package Manager

This project uses **Bun** as the package manager (as indicated by `bun.lock` and `.nvmrc`).

### Common Commands

- `bun dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `bun run build` - Build production application
- `bun start` - Start production server
- `bun run lint` - Run ESLint with cache
- `bun run lint:fix` - Fix ESLint errors with cache
- `bun run format` - Format code with Prettier (with cache)
- `bun run format:check` - Check code formatting with Prettier (with cache)

## Tech Stack & Key Dependencies

### Core Framework

- **Next.js 16** with App Router (src/app directory)
- **React 19** with RSC (React Server Components) enabled
- **TypeScript** with strict mode

### Styling

- **Tailwind CSS 4** with PostCSS plugin (`@tailwindcss/postcss`)
- **shadcn/ui** components (New York style, neutral base color)
- Custom dark mode theme with OKLCH color space
- Roboto Mono font from Google Fonts

### UI Components

- **shadcn/ui** configured in `components.json` with:
  - Component path: `@/components`
  - UI path: `@/components/ui`
  - Utils path: `@/lib/utils`
  - Icon library: `lucide-react`
  - RSC enabled
  - CSS variables for theming

### Code Quality

- **js-style-kit** package provides both ESLint and Prettier configurations
- ESLint configured for Next.js framework with TypeScript support (`tsconfig.eslint.json`)
- Prettier configured with Tailwind CSS plugin pointing to `src/app/globals.css`

### Analytics

- **@vercel/analytics** for site analytics

## Project Structure

### Source Directory (`src/`)

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Analytics, metadata, and font setup
  - `page.tsx` - Home page with profile card
  - `globals.css` - Tailwind CSS configuration and theme variables
  - `favicon.ico` - Site favicon
  - `[talk-name]/page.tsx` - Talk pages (e.g., `convex/page.tsx`)
- `components/` - Shared components
  - `link-card.tsx` - Reusable link tree card component
  - `ui/` - shadcn/ui components (button, card, etc.)
- `lib/utils.ts` - Utility functions including `cn()` for className merging

### Public Directory

- `public/Headshot.png` - Profile image
- `public/nathan-drake-resume.pdf` - Resume PDF

### Path Aliases

TypeScript is configured with path alias `@/*` mapping to `./src/*`

## Architecture Notes

### Styling System

The site uses Tailwind CSS 4's new `@theme inline` syntax in `globals.css` for theme configuration. CSS variables are defined separately for light and dark modes using OKLCH color space. The dark mode is set via the `dark` class on the root `<html>` element in layout.tsx.

### Component Patterns

- Uses `cn()` utility from `src/lib/utils.ts` for conditional className merging
- shadcn/ui components are server components by default (RSC enabled)
- Lucide React icons are used throughout

### Font Configuration

Roboto Mono is configured as a CSS variable (`--font-roboto-mono`) in the root layout and applied globally via Tailwind's font-mono class.

### Type Safety

The project uses strict TypeScript with:

- `strict: true` in tsconfig.json
- Separate `tsconfig.eslint.json` for ESLint type checking
- Module resolution set to "bundler"

### Link Tree Pattern

The site functions as a personal link tree. The `LinkCard` component (`src/components/link-card.tsx`) provides a reusable pattern for displaying collections of links:

- Accepts optional `header` prop for custom content (title, description, profile image, etc.)
- Accepts `links` array with `{ href, icon, label }` structure
- Accepts optional `footer` prop for custom footer content
- Home page (`src/app/page.tsx`) uses this pattern with full profile information
- Talk pages (e.g., `src/app/convex/page.tsx`) use this pattern without profile photo, just title and links

## Creating New Talk Pages

To add a new talk page (e.g., for a meetup presentation), create a new route folder under `src/app/` and follow this pattern:

```typescript
// src/app/[talk-name]/page.tsx
import { BookOpen, Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { LinkCard } from "@/components/link-card";

const TalkPage = () => {
  const links = [
    {
      href: "https://example.com/slides",
      icon: BookOpen,
      label: "Slides",
    },
    {
      href: "https://github.com/username/demo",
      icon: Code,
      label: "Demo Code",
    },
    {
      href: "https://example.com/docs",
      icon: ExternalLink,
      label: "Documentation",
    },
  ];

  return (
    <LinkCard
      header={
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Talk Title</h1>
          <p className="max-w-sm text-balance text-muted-foreground">
            Brief description of the talk
          </p>
        </div>
      }
      links={links}
      footer={
        <footer className="mt-8 text-sm text-muted-foreground">
          <Link className="transition-colors hover:text-foreground" href="/">
            ← Back to home
          </Link>
        </footer>
      }
    />
  );
};

export default TalkPage;
```

**Note**: If using deprecated Lucide icons (like `Github`), add `/* eslint-disable @typescript-eslint/no-deprecated */` at the top of the file.
