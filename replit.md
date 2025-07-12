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
  - **Registration Forms Completed**: Created comprehensive registration forms for all user types
    - Parent registration form with detailed contact and student information
    - Athlete registration form with 4-step process including personal, athletic, academic, and recruiting information
    - Coach registration form with 3-step process covering personal, institution, and recruiting details
    - Connected forms to specific buttons: "Parents Start Here", "Athletes Start Here", "Start Your Profile"
    - Added "Start Your Journey Today" button to mobile navigation menu
    - Implemented proper form validation using Zod schemas and react-hook-form
    - Created backend API routes for all registration endpoints with proper error handling
  - **Athlete Profile Page Redesign**: Completely rebuilt athlete profile to match authentic SportsRecruits interface
    - Based design on actual SportsRecruits PDF examples provided by user
    - Implemented three-column layout: athlete sidebar, activity feed, verification sidebar
    - Added social media-style recruitment activity feed with college coach messages
    - Integrated video highlights with play buttons and engagement metrics
    - Created authentic college recruitment interaction interface
    - Added profile completion progress tracking and verification system
    - Implemented upgrade promotion section matching SportsRecruits style
    - Fixed all syntax errors and import issues for proper functionality
  - **Coach Profile Page**: Created comprehensive coach profile page with professional recruiting platform interface
    - Implemented tabbed navigation system (Overview, Recruiting, Team Info, Achievements)
    - Added coach statistics dashboard with recruiting metrics and performance data
    - Created recruiting targets section with current prospect tracking
    - Integrated team information display with contact details and program highlights
    - Added quick action sidebar with messaging, visit scheduling, and external links
    - Designed achievement showcase with career accomplishments and awards
    - Added coach profile to main navigation menu for easy access
    - Used authentic recruiting data structure matching real college coaching profiles
  - **AI Tools Integration**: Added comprehensive AI-powered recruiting tools to coach dashboard
    - Natural language athlete search with intelligent filtering and smart suggestions
    - AI insights dashboard with recommendations, alerts, and recruiting trends
    - Automated video analysis tools for highlight generation and player comparisons
    - Recruitment automation with personalized communication and follow-up management
    - Predictive analytics for performance forecasting and roster gap analysis
    - AI roster analysis with position needs assessment and attrition forecasting
    - AI communication assistant with auto-generated emails and compliance checking
    - AI recruiting concierge for natural language queries about prospects and events
  - **Parent Profile Dashboard**: Created comprehensive parent management dashboard
    - Built tabbed interface with Dashboard, Children, Financial Planning, College Comparison, Documents, and Calendar
    - Added multi-child management with individual progress tracking and profile completion status
    - Integrated financial planning tools with college expense breakdown and scholarship opportunity tracking
    - Created college comparison feature with detailed pros/cons analysis and financial impact assessment
    - Implemented document management system for academic transcripts and financial documents
    - Added calendar integration for campus visits and important deadlines
    - Designed responsive layout with proper text wrapping and mobile-friendly navigation
    - Included urgent notifications system and quick action sidebar for parent efficiency
  - **College Profile Page**: Built comprehensive college showcase and information portal
    - Created tabbed interface with Overview, Athletics, Academics, Campus Life, Financial Aid, and Admissions
    - Added detailed athletics program information with coaching staff, facilities, and scholarship data
    - Integrated academic program showcase with rankings, graduation rates, and employment statistics
    - Built campus life section with housing, dining, activities, and student support services
    - Included comprehensive financial aid information with tuition breakdown and scholarship opportunities
    - Added admissions requirements, important dates, and contact information
    - Featured student testimonials, recent news, and authentic college data throughout
    - Designed responsive layout with proper banner display and mobile-friendly navigation
  - **Messaging & Communication Hub**: Built comprehensive internal messaging system for all user types
    - Created unified messages page with conversation management and real-time messaging interface
    - Added video call and phone call scheduling with compliance monitoring integration
    - Implemented conversation filtering by user type (coaches, athletes, parents) with search functionality
    - Built compliance monitoring system with automatic message review and flagging
    - Added schedule call modal with compliance guidelines and pre-call checklists
    - Integrated compliance monitor dashboard with activity tracking and rule management
    - Created message attachment support and file sharing capabilities
    - Designed responsive messaging interface with proper conversation threading
    - Added online status indicators and message read receipts for enhanced communication

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