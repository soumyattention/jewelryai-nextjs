# Deployment Guide - Jewelry AI Next.js

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Navigate to the project
cd "/Users/soumyamahato/JewelryAI New/jewelryai-nextjs"

# Login to Vercel (if not already)
vercel login

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Auto-Deploy

1. **Push to GitHub**:
```bash
cd "/Users/soumyamahato/JewelryAI New/jewelryai-nextjs"
git init
git add .
git commit -m "Initial Next.js migration with complete SEO"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jewelryai-nextjs.git
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

## ⚙️ Environment Variables

**✅ GOOD NEWS: No environment variables needed!**

Your site:
- Uses **ImageKit** for images (URLs hardcoded in gallery-data.ts)
- Does **not use** Cloudinary or Neon Database
- Google Analytics is already configured in the code
- Everything works out of the box!

### If You Add New Features Later:
Only add environment variables if you add new external services in the future.

## 📦 Build Configuration

Vercel will automatically use these settings:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

## 🔧 Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Visit https://jewelryai.app
- [ ] Check all pages load correctly:
  - https://jewelryai.app/
  - https://jewelryai.app/gallery
  - https://jewelryai.app/privacy
- [ ] Test mobile responsiveness
- [ ] Verify gallery images/videos load

### 2. SEO Files
- [ ] Check robots.txt: https://jewelryai.app/robots.txt
- [ ] Check sitemap: https://jewelryai.app/sitemap.xml
- [ ] Check manifest: https://jewelryai.app/manifest.webmanifest

### 3. Google Search Console
- [ ] Add property at https://search.google.com/search-console
- [ ] Verify ownership (meta tag method)
- [ ] Update verification code in `src/app/layout.tsx` line 52:
  ```typescript
  verification: {
    google: 'your-actual-verification-code',
  },
  ```
- [ ] Submit sitemap
- [ ] Request indexing for main pages

### 4. Analytics Verification
- [ ] Open https://jewelryai.app
- [ ] Open browser DevTools → Network tab
- [ ] Verify gtag requests are firing
- [ ] Check real-time visitors in GA4 dashboard

### 5. Performance Testing
- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ score
- [ ] Run Lighthouse audit in Chrome DevTools
  - Performance: 90+
  - SEO: 95+
  - Accessibility: 90+
  - Best Practices: 95+

### 6. Social Media Preview
- [ ] Test Open Graph with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Cards: https://cards-dev.twitter.com/validator
- [ ] Verify og-image.jpg displays correctly

### 7. Schema Markup Validation
- [ ] Test with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Verify Organization schema
- [ ] Verify FAQ schema
- [ ] Check for errors

## 🌐 Domain Configuration

### Custom Domain Setup (jewelryai.app)

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add domain: `jewelryai.app`
   - Add www subdomain: `www.jewelryai.app`

2. **DNS Configuration** (in your domain registrar):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Vercel automatically provisions SSL
   - Wait 24-48 hours for propagation

### Redirect Configuration
Add to `next.config.ts`:
```typescript
async redirects() {
  return [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ]
},
```

## 📊 Monitoring Setup

### 1. Vercel Analytics (Built-in)
- Automatically enabled
- View in Vercel Dashboard → Analytics
- Tracks Core Web Vitals

### 2. Google Analytics 4
- Already configured (G-XJGBLKR2TN)
- Dashboard: https://analytics.google.com/

### 3. Error Tracking (Optional)
Consider adding Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## 🔄 CI/CD Pipeline

Vercel automatically deploys:
- **Production**: Deploys from `main` branch to https://jewelryai.app
- **Preview**: Deploys from pull requests to unique URLs
- **Development**: Local development with `npm run dev`

### Branch Strategy:
```
main (production) → https://jewelryai.app
develop (staging) → https://develop-jewelryai.vercel.app
feature/* → Preview URLs
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear Next.js cache locally
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

### Images Not Loading
- Verify image paths in `/public/` folder
- Check Next.js image configuration in `next.config.ts`
- Ensure remote image domains are whitelisted

### 404 Errors
- Check file structure in `/src/app/`
- Ensure page.tsx exists in route folders
- Verify routes match URL structure

## 📈 Performance Optimization

### Already Implemented:
- ✅ Static generation for all pages
- ✅ Automatic code splitting
- ✅ Image lazy loading
- ✅ Google Analytics with afterInteractive strategy

### Future Optimizations:
- [ ] Implement `next/image` for all images
- [ ] Add CDN for static assets
- [ ] Enable compression (Vercel does this automatically)
- [ ] Implement service worker for offline support

## 🔐 Security Headers

Add to `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ]
},
```

## 📱 Progressive Web App (PWA)

Current implementation:
- ✅ manifest.webmanifest configured
- ✅ Theme colors set
- ✅ Icons configured

To make it a full PWA, add service worker (optional):
```bash
npm install next-pwa
```

## 📞 Support

### Resources:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Next.js Discord: https://discord.gg/nextjs

### Common Commands:
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server locally
npm run start

# Type checking
npm run lint

# Deploy to Vercel
vercel --prod
```

---

**Status**: ✅ Ready for Production Deployment
**Framework**: Next.js 16.0.1
**Node Version**: 18.x or higher
**Package Manager**: npm
