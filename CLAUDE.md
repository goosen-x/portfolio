# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start development server with Turbopack at http://localhost:3000
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint for code quality checks
```

## Database Setup

This project uses **Neon PostgreSQL** (via Vercel Postgres) for blog data storage.

### Setup Steps:
1. **Create Vercel Postgres database** in your Vercel dashboard
2. **Copy environment variables** from Vercel to your `.env.local`
3. **Run database schema** in Neon Console (SQL Editor):
   ```sql
   -- Copy and run the contents of lib/db/schema.sql
   ```
4. **Migrate existing posts** (optional):
   ```bash
   npx tsx lib/scripts/migrate-posts.ts
   ```

The database includes tables for `blog_posts`, `authors`, `tags`, and their relationships. See `lib/db/schema.sql` for full schema details.

## Architecture Overview

This is a modern Next.js 15 portfolio website with internationalization support for English and Russian. The project uses the App Router architecture with TypeScript, Tailwind CSS v4, and React 19.

### Key Architectural Decisions

1. **Internationalization First**: All routes are prefixed with locale (`/[locale]/`). The middleware uses `next-intl` for automatic locale detection and routing. Supported locales are defined in `/i18n/routing.ts` (currently `en` and `ru`). Messages are stored in `/messages/{locale}.json`.

2. **Route Groups Organization**:
   - `/app/[locale]/(main)/` - Homepage and primary landing pages
   - `/app/[locale]/(other)/` - Secondary pages like blog, activities, contact, settings
   - Route groups don't affect URL structure but help organize related pages

3. **Component Organization**:
   - `/components/homepage/` - Feature sections (SectionMain, SectionTechStack, SectionExperience, SectionProjects, SectionBlog, SectionContact, ContactSection)
   - `/components/global/` - Reusable components shared across pages
   - `/components/ui/` - Shadcn/ui design system components (Radix UI based)
   - `/components/blog/` - Blog-specific components
   - `/components/layout/` - Layout components (Header, Footer, etc.)
   - `/components/widgets/` - Standalone widget components
   - Each component folder typically has an `index.ts` barrel export

4. **3D Visualizations**: The project uses React Three Fiber (`@react-three/fiber`) and Three.js for interactive 3D elements. Key libraries:
   - `cobe` - Interactive globe visualizations
   - `three-globe` - Additional globe features
   - `@react-three/drei` - Helper components for R3F

5. **Styling Strategy**:
   - Tailwind CSS v4 (latest) for utility-first styling
   - `tailwindcss-animate` for animations
   - CSS variables for design tokens
   - Dark mode support via `next-themes`
   - `framer-motion` for advanced animations

6. **Blog System**:
   - Blog posts stored in Neon PostgreSQL
   - Support for markdown content with syntax highlighting via `prismjs` and `highlight.js`
   - Markdown processing pipeline: `gray-matter` → `remark` → `rehype` → HTML
   - Blog utilities in `/lib/db/blog.ts`

7. **Form Handling**: React Hook Form with Zod validation for type-safe forms.

### Important Patterns

- **Server Components by Default**: Leverage Next.js App Router's server components where possible
- **Locale-Aware Components**: Always consider internationalization when modifying components. Use `next-intl` navigation utilities from `/i18n/routing.ts`
- **Type Safety**: Full TypeScript coverage - avoid `any` types
- **Component Exports**: Use barrel exports (index.ts) for cleaner imports
- **Database Queries**: Use safe query wrappers from `/lib/db/safe-query.ts` for error handling

### Key Files to Understand

- `/middleware.ts` - Handles internationalization routing via `next-intl`
- `/i18n/routing.ts` - Defines supported locales and creates locale-aware navigation utilities
- `/app/[locale]/layout.tsx` - Root layout with providers, fonts, and i18n setup
- `/lib/db/` - Database connection, schema, and blog utilities
- `/lib/config/` - Configuration files (features, environment)
- `/components/homepage/` - Main portfolio sections architecture

### Testing & Quality

Currently no test suite is configured. Use `npm run lint` to ensure code quality before committing changes.