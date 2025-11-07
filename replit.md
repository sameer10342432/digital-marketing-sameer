# Digital Marketing Portfolio - Full Stack Application

## Overview
This is a full-stack digital marketing portfolio application built with:
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Backend**: Express.js + TypeScript
- **Database**: SQLite (via Drizzle ORM)
- **Authentication**: Express Session with Passport.js

## Recent Changes (November 7, 2025)
### Vercel to Replit Migration
The project was successfully migrated from Vercel to Replit with the following updates:
- ✅ Server now binds to `0.0.0.0:5000` in both development and production
- ✅ Session secret moved to `SESSION_SECRET` environment variable
- ✅ Production validation added to prevent deployment without required secrets
- ✅ Development workflow configured for automatic startup
- ✅ Deployment configuration set for autoscale deployment

### Bug Fixes and Improvements (November 7, 2025)
- ✅ Fixed portfolio and blog deletion errors (SQLite `.changes` vs `.rowCount`)
- ✅ Added image upload functionality for service icons
- ✅ Improved blog Rich Text Editor with better heading functionality
- ✅ Fixed portfolio schema: added `technologies` field and `projectUrl` for consistency
- ✅ Portfolio links now display correctly on portfolio page
- ✅ Portfolio detail pages created - clicking portfolios shows full content
- ✅ Updated CaseStudy component to display real portfolio data from database

### Services Pages Implementation (November 7, 2025)
- ✅ Created "All Services" overview page (`/all-services`) listing all 10 digital marketing services
- ✅ Created 6 new service pages:
  - Digital Marketing Agency (`/services/digital-marketing-agency`)
  - Digital Marketing Services (`/services/digital-marketing-services`)
  - SEO Services (`/services/seo-services`)
  - Web Design Services (`/services/web-design-services`)
  - Search Engine Marketing (`/services/search-engine-marketing`)
  - Online Marketing Agency (`/services/online-marketing-agency`)
- ✅ Updated 4 existing service pages with contact forms:
  - SEO Optimization, PPC Campaigns, Social Media Marketing, Email Marketing, Content Strategy
- ✅ Implemented ServiceContactForm component using proper React Query mutation pattern
  - Uses useMutation from TanStack Query
  - Uses apiRequest for API calls (consistent with admin panel patterns)
  - Uses React Hook Form with zodResolver for validation
  - Submissions properly stored and displayed in admin panel
- ✅ Added SEO meta titles and descriptions to all service pages
- ✅ Updated Header and Footer navigation to include "All Services" link

## Environment Variables Required

### Required in Production
- **SESSION_SECRET**: Secret key for session encryption (app will fail to start without this in production)

### Optional
- **PORT**: Server port (defaults to 5000)
- **ALLOWED_ORIGINS**: Comma-separated list of allowed CORS origins
- **NODE_ENV**: Environment (development/production)

## Project Architecture

### Directory Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── hooks/         # Custom React hooks
│   └── public/            # Static assets
├── server/                # Backend Express server
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── db.ts             # Database configuration
│   ├── storage.ts        # File storage handling
│   └── vite.ts           # Vite dev server integration
├── shared/               # Shared TypeScript types/schemas
└── public/uploads/       # User-uploaded files

```

## Running Locally
The development workflow is configured to run automatically on Replit:
- Development server starts on port 5000
- Vite HMR (Hot Module Replacement) enabled
- Express API and frontend served together

## Deployment
Configured for Replit autoscale deployment:
- **Build**: `npm run build`
- **Start**: `npm start`
- Ensure `SESSION_SECRET` is set in Replit Secrets before deploying

## Security Best Practices
- Session secrets are stored in environment variables
- Production deployment requires SESSION_SECRET to be explicitly set
- CORS configured with specific allowed origins
- Secure cookies enabled in production mode

## Database
Uses SQLite with Drizzle ORM:
- Database file: `sqlite.db`
- Schema defined in: `shared/schema.ts`
- Migrations: Use `npm run db:push` to sync schema changes
