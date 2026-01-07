# Production Build Instructions for Apache Hosting

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Access to Apache hosting (Hostinger, etc.)

---

## 🔧 Build Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Production Build

```bash
npm run build
```

This will:
- ✅ Remove all `console.log` statements
- ✅ Disable source maps
- ✅ Minify and optimize code
- ✅ Split code into optimized chunks
- ✅ Generate production-ready files in `dist/` folder

### 3. Verify Build Output

After building, check the `dist/` folder:
```
dist/
├── index.html
├── assets/
│   ├── js/
│   │   ├── index-[hash].js
│   │   ├── react-vendor-[hash].js
│   │   └── framer-motion-[hash].js
│   ├── css/
│   │   └── index-[hash].css
│   ├── images/
│   └── fonts/
├── image/          (public assets)
├── robots.txt
└── sitemap.xml
```

### 4. Test Build Locally (Optional)

```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## 📤 Upload to Apache Hosting

### For Hostinger / Traditional Apache:

1. **Connect via FTP/SFTP** to your hosting
2. **Navigate to public_html** (or your domain's root directory)
3. **Upload ALL contents** from the `dist/` folder:
   - Upload `index.html` to root
   - Upload `assets/` folder
   - Upload `image/` folder (from public)
   - Upload `robots.txt` and `sitemap.xml`
   - Upload `.htaccess` file (important for routing!)

4. **Verify file structure** on server:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   ├── image/
   ├── robots.txt
   └── sitemap.xml
   ```

5. **Set permissions** (if needed):
   - Files: 644
   - Folders: 755

---

## ⚙️ Configuration Files

### `.htaccess` (Already included)
- Handles React Router routing
- Enables compression (Gzip)
- Sets browser caching
- Adds security headers

### `vite.config.js` (Optimized)
- Production build settings
- Code splitting
- Asset optimization
- Source maps disabled

---

## ✅ Post-Deployment Checklist

- [ ] All files uploaded to server
- [ ] `.htaccess` file is in root directory
- [ ] Website loads correctly
- [ ] All routes work (try navigating to `/about`, `/projects`, etc.)
- [ ] Images load correctly
- [ ] No 404 errors in browser console
- [ ] Mobile responsive works
- [ ] Language switching works
- [ ] Forms work (contact form)
- [ ] Check `robots.txt` and `sitemap.xml` are accessible

---

## 🔍 Troubleshooting

### Issue: 404 errors on routes
**Solution:** Ensure `.htaccess` file is uploaded and in root directory

### Issue: Images not loading
**Solution:** 
- Check that `image/` folder is uploaded
- Verify paths in code use relative paths (`./image/...`)

### Issue: White screen
**Solution:**
- Check browser console for errors
- Verify all `assets/` files uploaded
- Check file permissions

### Issue: Slow loading
**Solution:**
- Verify `.htaccess` compression is enabled
- Check browser caching headers
- Optimize images if needed

---

## 📊 Build Optimization Features

✅ **Code Splitting:**
- React vendor bundle separated
- Framer Motion in separate chunk
- React Icons in separate chunk

✅ **Asset Optimization:**
- Images optimized
- Fonts optimized
- CSS minified
- JavaScript minified and tree-shaken

✅ **Production Features:**
- No source maps
- No console.log
- Minified code
- Optimized bundle size

---

## 🔄 Updating the Site

When you make changes:

1. Make changes in your code
2. Run `npm run build`
3. Upload new files from `dist/` folder
4. Clear browser cache (Ctrl+F5) to see changes

---

## 📝 Notes

- The build uses **relative paths** (`./`) for compatibility with Apache
- All assets are hashed for cache busting
- `.htaccess` handles all routing automatically
- No backend required - fully static site

---

## 🚀 Performance Tips

1. **Enable Gzip** on server (handled by `.htaccess`)
2. **Use CDN** for static assets (optional)
3. **Optimize images** before uploading
4. **Monitor** with Google PageSpeed Insights

---

**Your site is now production-ready! 🎉**

