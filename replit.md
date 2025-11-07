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
- ✅ Created "All Services" overview page (`/all-services`) listing all 59 digital marketing services
- ✅ Created 59 comprehensive service pages with SEO optimization:
  - **Core Services**:
    - Digital Marketing Agency (`/services/digital-marketing-agency`)
    - Digital Marketing Services (`/services/digital-marketing-services`)
    - SEO Services (`/services/seo-services`)
    - SEO Optimization (`/services/seo-optimization`)
  - **Paid Advertising**:
    - Google Ads Management (`/services/google-ads-management`)
    - Facebook Advertising (`/services/facebook-advertising`)
    - PPC Campaigns (`/services/ppc-campaigns`)
    - LinkedIn Advertising (`/services/linkedin-advertising`)
    - PPC Management Services (`/services/ppc-management-services`)
    - Remarketing Campaigns (`/services/remarketing-campaigns`)
    - Digital Advertising Agency (`/services/digital-advertising-agency`)
  - **Local & Specialized SEO**:
    - Local SEO Services (`/services/local-seo`)
    - Link Building Services (`/services/link-building`)
    - SEO Company USA (`/services/seo-company-usa`)
    - Best SEO Agency (`/services/best-seo-agency`)
  - **Content & Social**:
    - Social Media Marketing (`/services/social-media-marketing`)
    - Content Strategy (`/services/content-strategy`)
    - Email Marketing (`/services/email-marketing`)
    - Influencer Marketing (`/services/influencer-marketing`)
    - Video Marketing (`/services/video-marketing`)
    - Instagram Marketing (`/services/instagram-marketing`)
    - YouTube Marketing (`/services/youtube-marketing`)
    - Mobile Marketing (`/services/mobile-marketing`)
  - **E-commerce & Conversion**:
    - E-commerce Marketing (`/services/ecommerce-marketing`)
    - Conversion Rate Optimization (`/services/conversion-optimization`)
    - Affiliate Marketing (`/services/affiliate-marketing`)
  - **Design & SEM**:
    - Web Design Services (`/services/web-design-services`)
    - Search Engine Marketing (`/services/search-engine-marketing`)
    - Online Marketing Agency (`/services/online-marketing-agency`)
    - Landing Page Design (`/services/landing-page-design`)
    - Website Optimization (`/services/website-optimization`)
  - **Full Service Agencies**:
    - Full Service Digital Agency (`/services/full-service-digital-agency`)
    - Digital Marketing Agency USA (`/services/digital-marketing-agency-usa`)
  - **Reputation & Brand Management**:
    - Online Reputation Management (`/services/online-reputation-management`)
  - **Web Development & Design**:
    - Web Development Agency (`/services/web-development-agency`)
    - Branding Agency (`/services/branding-agency`)
  - **Business-Specific Marketing**:
    - Digital Marketing for Small Business (`/services/digital-marketing-small-business`)
    - Local Digital Marketing (`/services/local-digital-marketing`)
    - SEO for Startups (`/services/seo-for-startups`)
    - PPC for E-commerce (`/services/ppc-for-ecommerce`)
  - **Specialized Services**:
    - Digital Marketing Expert (`/services/digital-marketing-expert`)
    - SEO Audit Services (`/services/seo-audit-services`)
    - Keyword Research Services (`/services/keyword-research-services`)
    - Backlink Building (`/services/backlink-building`)
  - **Technical SEO Services**:
    - On-Page SEO (`/services/on-page-seo`)
    - Off-Page SEO (`/services/off-page-seo`)
    - Technical SEO (`/services/technical-seo`)
    - Google My Business Optimization (`/services/google-my-business-optimization`)
  - **Lead Generation & Packages**:
    - Online Lead Generation (`/services/online-lead-generation`)
    - Digital Marketing Packages (`/services/digital-marketing-packages`)
    - Monthly SEO Services (`/services/monthly-seo-services`)
  - **Growth & Performance Marketing**:
    - Performance Marketing (`/services/performance-marketing`)
    - Growth Marketing Agency (`/services/growth-marketing-agency`)
  - **Industry-Specific Marketing**:
    - SaaS Marketing Agency (`/services/saas-marketing-agency`)
    - B2B Digital Marketing (`/services/b2b-digital-marketing`)
    - B2C Marketing Services (`/services/b2c-marketing-services`)
  - **Company-Size Specific**:
    - Startup Marketing Agency (`/services/startup-marketing-agency`)
    - Enterprise SEO Services (`/services/enterprise-seo-services`)
    - White Label SEO (`/services/white-label-seo`)
- ✅ All service pages include:
  - ServiceContactForm component that sends inquiries to admin panel (`/admin/contacts`)
  - Unique SEO meta titles and descriptions optimized for search engines
  - Consistent structure: hero section, features, process, results, and CTA
  - Professional design with icons, stats, and compelling copy
- ✅ Implemented ServiceContactForm component using proper React Query mutation pattern
  - Uses useMutation from TanStack Query
  - Uses apiRequest for API calls (consistent with admin panel patterns)
  - Uses React Hook Form with zodResolver for validation
  - Submissions properly stored and displayed in admin panel
- ✅ Updated AllServices page to display all 59 services with unique icons and descriptions
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
