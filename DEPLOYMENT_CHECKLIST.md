# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### Files & Structure
- [x] `index.html` - Main portfolio file
- [x] `api/contact.js` - Serverless contact form
- [x] `vercel.json` - Vercel configuration
- [x] `package.json` - Dependencies and metadata
- [x] `.gitignore` - Excludes sensitive files
- [x] `README.md` - Project documentation
- [x] `.env.example` - Environment variables template

### Dependencies
- [x] Updated to `nodemailer@8.0.2` (security fix)
- [x] No security vulnerabilities
- [x] Production-only dependencies

### Code Quality
- [x] Contact form background animation matches hero section
- [x] All image paths are correct and files exist
- [x] Environment variables configured for email
- [x] CORS headers properly set
- [x] Error handling in contact form

### Security
- [x] Email credentials use environment variables
- [x] No hardcoded sensitive data
- [x] Proper input validation
- [x] CORS configured correctly

## 🔧 Vercel Setup Steps

1. **Connect Repository**
   - Import project from Git repository
   - Select the `selva-portfolio-main` folder as root

2. **Environment Variables**
   Set these in Vercel Dashboard → Settings → Environment Variables:
   ```
   EMAIL_USER=selvakumar0954@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

3. **Build Settings**
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: npm install

4. **Domain Configuration**
   - Custom domain (optional)
   - HTTPS enabled by default

## 🧪 Testing After Deployment

- [ ] Homepage loads correctly
- [ ] All animations work (hero & contact backgrounds)
- [ ] All images display properly
- [ ] Navigation links work
- [ ] Contact form submits successfully
- [ ] Email notifications received
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

## 📱 Performance Checks

- [ ] Page load speed < 3 seconds
- [ ] Three.js animations run smoothly
- [ ] Images optimized and loading
- [ ] No console errors
- [ ] Lighthouse score > 90

## 🎯 Final Steps

1. Test contact form with real email
2. Check all project links work
3. Verify mobile responsiveness
4. Test on different browsers
5. Share portfolio URL!

---

**Ready for deployment! 🚀**