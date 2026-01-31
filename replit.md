# Hangman Language Learning Game

## Overview

A playful, animated Hangman game designed for language learning. Players guess words in English or Italian while a stickman character loses body parts with each wrong guess. The app features dynamic themed backgrounds, difficulty levels, and celebratory confetti effects when winning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React** with TypeScript as the UI framework
- **Wouter** for lightweight client-side routing (Home and Game pages)
- **Framer Motion** for smooth animations on the hangman character and game elements
- **TanStack Query** for server state management and API calls
- **Tailwind CSS** with custom design tokens for styling
- **shadcn/ui** component library built on Radix UI primitives

### Backend Architecture
- **Express.js** server running on Node.js
- RESTful API endpoints defined in `shared/routes.ts` with Zod validation
- Database storage layer abstracted through `IStorage` interface in `server/storage.ts`
- Vite dev server integration for hot module replacement during development

### Data Storage
- **PostgreSQL** database via `pg` driver
- **Drizzle ORM** for type-safe database queries and schema management
- Schema defined in `shared/schema.ts` with words table containing: text, language, translation, category, difficulty, and imageUrl
- Database migrations managed through `drizzle-kit push`

### Shared Code Pattern
- The `shared/` directory contains code used by both frontend and backend
- `shared/schema.ts` - Database schema and Zod validation schemas
- `shared/routes.ts` - API route definitions with type-safe input/output schemas

### Build System
- **Vite** for frontend bundling with React plugin
- **esbuild** for server bundling in production
- Custom build script in `script/build.ts` that bundles both client and server

### Game Logic
- Three difficulty levels affecting lives: Easy (8), Medium (6), Hard (4)
- Language support for English and Italian words
- Themed backgrounds selectable from six options (city, beach, forest, wild-west, snow, space)
- Hangman character built with CSS/SVG elements, animated with Framer Motion

## External Dependencies

### Database
- **PostgreSQL** - Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle ORM** - Database toolkit for schema management and queries

### UI Libraries
- **Radix UI** - Headless component primitives (dialog, select, tabs, toast, etc.)
- **shadcn/ui** - Pre-built component library configured in `components.json`
- **Framer Motion** - Animation library for character and UI transitions
- **canvas-confetti** - Celebration effects on game win

### Fonts
- **Google Fonts** - Fredoka (display) and Nunito (body) fonts loaded via CDN

### Development Tools
- **Replit Vite plugins** - Runtime error overlay, cartographer, and dev banner for Replit environment