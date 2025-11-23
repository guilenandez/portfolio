# Portfolio Website

## Overview

This is a modern developer portfolio website built with Next.js, inspired by Brittany Chiang's v4 design. The application features a single-page scrolling layout showcasing professional experience, projects, skills, and contact information. It uses a dark mode aesthetic with a teal-green accent color (#64ffda) and implements a clean, minimalist design pattern popular in developer portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Runtime**
- **Next.js 14+** with App Router architecture for server-side rendering and optimal performance
- **React 18+** for component-based UI development
- **TypeScript** for type safety across the application

**UI Component System**
- **Shadcn/ui** as the foundational component library (Radix UI primitives + Tailwind CSS)
- Components follow the "New York" style variant with custom theming
- Design system based on Brittany Chiang v4 aesthetic with monospace fonts (SF Mono, Fira Code) for headings and Inter for body text

**Styling Approach**
- **Tailwind CSS** for utility-first styling with custom design tokens
- CSS custom properties for theming (light/dark mode support built-in)
- Color palette: Dark navy backgrounds (HSL: 220 15% 8-11%), teal-green accents (HSL: 167 70% 70%)
- Responsive design with mobile-first approach

**Page Structure**
- Single-page application with smooth scrolling sections:
  - Hero/Introduction
  - About Me
  - Experience (tabbed interface)
  - Projects (featured works with "show more" functionality)
  - Contact
  - Footer
- Fixed navigation sidebar (desktop) with numbered section links
- Mobile hamburger menu overlay

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API data fetching
- Custom query client configuration with credential-based requests
- Client-side state managed through React hooks

**Animation & Interactions**
- **Framer Motion** for smooth animations and transitions
- Embla Carousel for project showcases
- Smooth scroll behavior for navigation

### Backend Architecture

**Database Layer**
- **Drizzle ORM** configured for PostgreSQL database interactions
- Schema definition uses Drizzle's type-safe query builder
- Database migrations managed through Drizzle Kit (output to `/migrations` directory)
- Connection via `@neondatabase/serverless` driver for serverless PostgreSQL deployments

**Data Models**
- User schema with UUID primary keys, username/password fields
- Zod validation schemas generated from Drizzle schemas for runtime type checking
- In-memory storage fallback implementation (`MemStorage` class) for development/testing

**API Architecture**
- Custom API request utility functions with credential support
- Centralized error handling for HTTP responses
- Query functions support configurable 401 (unauthorized) behavior

### External Dependencies

**Core Framework Dependencies**
- `next` - Next.js framework for React applications
- `react` & `react-dom` - React library for UI components
- `typescript` - Type safety and developer experience

**Database & ORM**
- `drizzle-orm` - TypeScript ORM for type-safe database queries
- `drizzle-zod` - Zod schema generation from Drizzle schemas
- `@neondatabase/serverless` - Serverless PostgreSQL client
- `drizzle-kit` - Database migration tooling

**UI Component Libraries**
- `@radix-ui/*` - Headless UI primitives (accordion, dialog, dropdown, navigation, etc.)
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Type-safe variant API for components
- `clsx` & `tailwind-merge` - Conditional className utilities

**Form Handling & Validation**
- `react-hook-form` - Performant form management
- `@hookform/resolvers` - Validation resolver integration
- `zod` - Schema validation library

**Data Fetching & State**
- `@tanstack/react-query` - Server state management and caching

**Animation & Interaction**
- `framer-motion` - Animation library for React
- `embla-carousel-react` - Carousel/slider component

**Utilities**
- `date-fns` - Date manipulation library
- `cmdk` - Command menu component
- `input-otp` - OTP input handling
- `lucide-react` - Icon library

**Development Environment**
- Environment variables required: `DATABASE_URL` for PostgreSQL connection
- Dev server runs on port 5000
- Build process includes TypeScript type checking