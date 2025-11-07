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
