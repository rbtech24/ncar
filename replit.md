# replit.md

## Overview

This is a full-stack React application for a college sports recruiting platform called "NCAR". The application is built with a modern tech stack including React (frontend), Express.js (backend), PostgreSQL (database), and uses Drizzle ORM for database operations. The platform aims to connect student-athletes with college coaches and recruiting opportunities.

## Recent Changes

- **January 2025**: Successfully redesigned homepage with SportsRecruits-inspired aesthetic
  - Replaced blue gradient hero with clean white background and functional profile mockup
  - Updated all sections to use solid colors with strategic white space
  - Implemented modern card layouts with subtle hover effects
  - Created step-by-step process visualization with connecting arrows
  - Applied consistent color scheme: brand-primary (#18386b), brand-secondary (#2ec37b), brand-accent (#ff7f32)
  - User confirmed design is "aloot better" than previous iterations
  - Updated platform branding from "RecruitCore" to "NCAR" throughout all sections
  - Integrated NCAR Sports logo in header and footer with proper sizing
  - Added sports-themed background images to audience selection cards

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Clean, professional SportsRecruits-inspired aesthetic with solid colors only (no gradients), strategic white space, and functional focus over flashy graphics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js (ES modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Client**: Neon Database serverless client
- **Session Management**: Built-in session handling with connect-pg-simple
- **API Structure**: RESTful API with /api prefix

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Drizzle Kit for database migrations stored in `./migrations`
- **Connection**: Environment variable `DATABASE_URL` for database connection

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer with links and social media
- **Page Sections**: Hero, Audience Selection, Features, Statistics, How It Works, CTA
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Backend Components
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **User Management**: User creation and retrieval with username/password authentication
- **Route Registration**: Centralized route handling in `server/routes.ts`
- **Development Tools**: Vite integration for hot module replacement in development

### Shared Components
- **Schema Definitions**: User schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Drizzle-Zod integration for runtime type validation

## Data Flow

1. **User Registration/Authentication**: Users create accounts with username/password
2. **Profile Management**: Student-athletes, coaches, and staff create detailed profiles
3. **Matching System**: Platform connects athletes with suitable college programs
4. **Communication**: Direct messaging between athletes and coaches
5. **Event Management**: Organization of recruiting events and showcases

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database client
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI primitives for React
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist routing for React

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **eslint**: Code linting and formatting
- **drizzle-kit**: Database migrations and introspection

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution and Vite dev server
- **Production**: Compiled JavaScript with optimized static assets
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production Deployment
- **Server**: Node.js application serving both API and static files
- **Database**: PostgreSQL database (configured for Neon serverless)
- **Assets**: Static files served from `dist/public`
- **Environment**: Production environment variables for database and other services

### Development Workflow
- **Hot Reloading**: Vite provides instant updates during development
- **Type Checking**: TypeScript compilation ensures type safety
- **Database Development**: In-memory storage for rapid development iteration
- **Error Handling**: Runtime error overlay for debugging

The application follows a modern full-stack architecture with emphasis on type safety, developer experience, and scalable design patterns. The platform is designed to handle the complex requirements of college sports recruiting while maintaining a clean, user-friendly interface.