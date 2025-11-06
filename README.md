# 🎨 Digital Marketing Portfolio - Muhammad Sameer

Full-stack digital marketing portfolio website with admin CMS, blog system, portfolio showcase, and free marketing tools.

![Made with React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue)

---

## ✨ Features

- 🎨 Modern, responsive design with dark mode support
- 📝 Blog system with markdown editor & SEO optimization
- 💼 Portfolio showcase with case studies
- 🛠️ 10 Free digital marketing tools (ROI calculator, UTM builder, etc.)
- 👨‍💼 Admin dashboard for content management
- 💬 AI-powered chatbot assistant (100% local, no API needed)
- 📱 WhatsApp integration for direct contact
- 🔒 Secure authentication & session management
- 📧 Email subscription system
- 🚀 Optimized for Vercel deployment

---

## 🚀 Quick Start (Localhost)

### Prerequisites

- Node.js 20+ ([Download](https://nodejs.org))
- PostgreSQL database ([Free Neon account](https://neon.tech))
- Git

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy the example file and edit it:

```bash
cp .env.example .env
```

Edit `.env` and add your database URL from Neon:

```env
DATABASE_URL=postgresql://user:pass@host.neon.tech/db?sslmode=require
NODE_ENV=development
PORT=5000
SESSION_SECRET=your-random-secret-key
ALLOWED_ORIGINS=http://localhost:5000,http://localhost:5173
```

### 3. Setup Database

Push the database schema:

```bash
npm run db:push
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser!

---

## 📚 Detailed Guides

### For Local Development
📖 **Complete localhost setup guide:** [`LOCALHOST_SETUP_GUIDE.md`](./LOCALHOST_SETUP_GUIDE.md)
- Step-by-step installation
- Database setup
- Admin user creation
- Development workflow
- Testing checklist

### For Production Deployment
🚀 **Vercel deployment guide (Urdu/Hindi):** [`VERCEL_DEPLOYMENT_GUIDE.md`](./VERCEL_DEPLOYMENT_GUIDE.md)
- Vercel configuration
- Environment variables
- Database migration
- Custom domain setup
- Troubleshooting

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5000) |
| `npm run build` | Build for production |
| `npm run start` | Run production build locally |
| `npm run check` | Check TypeScript errors |
| `npm run db:push` | Update database schema |
| `npm run db:studio` | Open database UI |

---

## 📁 Project Structure

```
project/
├── client/              # Frontend React app
│   ├── src/
│   │   ├── pages/      # All pages (Home, About, Services, etc.)
│   │   ├── components/ # Reusable UI components
│   │   └── lib/        # Utilities & helpers
├── server/              # Backend Express server
│   ├── index.ts        # Main server file
│   ├── routes.ts       # API routes
│   ├── db.ts           # Database connection
│   └── storage.ts      # Database operations (CRUD)
├── shared/              # Shared types between frontend/backend
│   └── schema.ts       # Database schema + Zod validation
├── public/
│   └── uploads/        # User uploaded images (gitignored)
├── .env.example        # Environment variables template
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies & scripts
```

---

## 🔐 Admin Access

### Create Admin User

1. Start the database UI:
   ```bash
   npm run db:studio
   ```

2. Open [https://local.drizzle.studio](https://local.drizzle.studio)

3. Go to `users` table → Add new row:
   - `id`: `admin-001` (or any unique string)
   - `username`: `admin`
   - `password`: `your-secure-password`
   - `role`: `admin`

4. Save and login at [http://localhost:5000/admin](http://localhost:5000/admin)

---

## 🧪 Testing Before Deployment

Run these commands to ensure everything works:

```bash
# 1. Check TypeScript errors
npm run check

# 2. Build for production
npm run build

# 3. Test production build locally
npm run start

# 4. Visit http://localhost:5000 and test all features
```

### Checklist:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Blog posts display properly
- [ ] Portfolio items show up
- [ ] Free tools are functional
- [ ] Admin login works
- [ ] Forms submit successfully
- [ ] Images upload and display
- [ ] Chatbot responds
- [ ] No console errors

---

## 📦 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **TanStack Query** - Data fetching & caching
- **Wouter** - Routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Neon PostgreSQL** - Database (serverless)
- **Multer** - File uploads

### Deployment
- **Vercel** - Hosting & serverless functions
- **GitHub** - Version control

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (see `.env.example`)
   - Deploy!

3. **Post-deployment:**
   - Update `ALLOWED_ORIGINS` with your Vercel URL
   - Run database migrations
   - Test all features

📖 **Complete deployment guide:** [`VERCEL_DEPLOYMENT_GUIDE.md`](./VERCEL_DEPLOYMENT_GUIDE.md)

---

## 🔒 Security

- ✅ CORS configured for production
- ✅ Session-based authentication
- ✅ Input validation with Zod
- ✅ SQL injection protection (Drizzle ORM)
- ✅ XSS protection headers
- ✅ Environment variables for secrets
- ✅ `.env` gitignored

---

## 🐛 Common Issues

### Port 5000 Already in Use

```bash
# Change port in .env file
PORT=3000
```

### Database Connection Failed

- Check `DATABASE_URL` in `.env`
- Verify Neon database is running
- Use **pooled connection** string (not direct)

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### More help?
Check [`LOCALHOST_SETUP_GUIDE.md`](./LOCALHOST_SETUP_GUIDE.md) for detailed troubleshooting.

---

## 📊 Performance

- ⚡ **Frontend**: ~342 KB gzipped
- ⚡ **Backend**: ~24 KB bundled
- ⚡ **First Paint**: < 2 seconds
- ⚡ **Lighthouse Score**: 90+

---

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Report bugs via GitHub Issues
- Suggest improvements
- Fork for your own use

---

## 📞 Support

For questions or issues:
- 📖 Read the guides: [`LOCALHOST_SETUP_GUIDE.md`](./LOCALHOST_SETUP_GUIDE.md)
- 🚀 Deployment help: [`VERCEL_DEPLOYMENT_GUIDE.md`](./VERCEL_DEPLOYMENT_GUIDE.md)
- 💬 Create a GitHub Issue

---

## 🎉 Acknowledgments

Built with modern web technologies and best practices. Optimized for both development and production environments.

**Ready to deploy?** Follow the guides above and get your portfolio live in minutes! 🚀

---

Made with ❤️ by Muhammad Sameer