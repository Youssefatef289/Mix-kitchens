# 🚀 Production Build Guide

## Quick Start

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Build Output

After running `npm run build`, you'll get an optimized `dist/` folder containing:

- ✅ Minified JavaScript (no console.log)
- ✅ Minified CSS
- ✅ Optimized images
- ✅ Code splitting for better caching
- ✅ No source maps (production-ready)
- ✅ Relative paths (works on any domain)

## 📤 Deploy to Apache (Hostinger)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to server:**
   - Upload ALL contents from `dist/` folder
   - Upload to `public_html/` (or your domain root)
   - **Important:** Include `.htaccess` file!

3. **File structure on server:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess          ← Important for routing!
   ├── assets/
   │   ├── js/
   │   ├── css/
   │   ├── images/
   │   └── fonts/
   ├── image/             ← Public images
   ├── robots.txt
   └── sitemap.xml
   ```

## ✅ Production Optimizations

### 1. Code Splitting
- React vendor bundle separated
- Framer Motion in separate chunk
- React Icons in separate chunk
- Better caching and faster loads

### 2. Asset Optimization
- Images optimized automatically
- Fonts optimized
- CSS minified
- JavaScript minified and tree-shaken

### 3. Build Features
- ✅ No source maps (smaller size)
- ✅ No console.log (cleaner code)
- ✅ Minified code (faster loading)
- ✅ Relative paths (works anywhere)

### 4. Apache Configuration
- ✅ `.htaccess` handles React Router
- ✅ Gzip compression enabled
- ✅ Browser caching configured
- ✅ Security headers added

## 🔧 Configuration Files

### `vite.config.js`
- Production build settings
- Code splitting configuration
- Asset optimization
- Source maps disabled

### `.htaccess`
- React Router support
- Compression (Gzip)
- Browser caching
- Security headers

## 📝 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run build:prod` - Explicit production build

## ⚠️ Important Notes

1. **Always upload `.htaccess`** - Required for routing to work
2. **Use relative paths** - Already configured (`base: './'`)
3. **No backend needed** - Fully static site
4. **Update sitemap.xml** - Change domain URLs before deploying

## 🔍 Troubleshooting

### Routes return 404
→ Ensure `.htaccess` is uploaded and in root directory

### Images not loading
→ Check that `image/` folder is uploaded from `public/`

### White screen
→ Check browser console for errors
→ Verify all `assets/` files uploaded correctly

---

**Your site is production-ready! 🎉**

