# 🚀 Apache Deployment Guide for React SPA

## 📍 Where to Place .htaccess File

### **Location: `public_html/` Root Directory**

The `.htaccess` file **MUST** be placed in your website's root directory:

```
public_html/
├── .htaccess          ← PLACE HERE (root directory)
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
├── image/
├── robots.txt
└── sitemap.xml
```

### **Important Notes:**

1. **Root Directory Only**: The `.htaccess` file must be in the **root** of your website (usually `public_html/` or `www/` or `htdocs/`)

2. **File Name**: The file must be named exactly `.htaccess` (with the dot at the beginning, no extension)

3. **Overwriting Existing Rules**: 
   - If you already have a `.htaccess` file, **back it up first**
   - You can merge rules, but the React Router rules must be at the top
   - If you have conflicting rules, the React Router rules should take precedence

4. **File Permissions**: 
   - Set permissions to `644` (readable by web server)
   - The file should be readable by Apache

---

## 📤 Upload Instructions

### **Method 1: FTP/SFTP Client (FileZilla, WinSCP, etc.)**

1. Connect to your hosting via FTP
2. Navigate to `public_html/` (or your domain root)
3. Upload `.htaccess` file
4. **Important**: Make sure the file is named `.htaccess` (not `.htaccess.txt`)

### **Method 2: cPanel File Manager**

1. Log in to cPanel
2. Open "File Manager"
3. Navigate to `public_html/`
4. Click "Upload" and select `.htaccess`
5. **Important**: In File Manager, you may need to:
   - Enable "Show Hidden Files" (dotfiles)
   - Rename the file to `.htaccess` if it uploaded as `.htaccess.txt`

### **Method 3: SSH/Command Line**

```bash
# Upload via SCP
scp public/.htaccess username@yourdomain.com:/home/username/public_html/

# Or via SSH
ssh username@yourdomain.com
cd public_html
# Then upload the file content
```

---

## ✅ Verification Steps

After uploading `.htaccess`:

1. **Test Homepage**: Visit `https://yourdomain.com/` - should load normally

2. **Test React Routes**: 
   - Visit `https://yourdomain.com/about` - should load (not 404)
   - Visit `https://yourdomain.com/projects` - should load (not 404)
   - Visit `https://yourdomain.com/contact` - should load (not 404)

3. **Test Refresh**: 
   - Navigate to `/about` page
   - Press F5 or refresh browser
   - Should stay on `/about` (not redirect to homepage)

4. **Test Static Assets**:
   - Check that images load: `https://yourdomain.com/image/logo.png`
   - Check that CSS/JS load: `https://yourdomain.com/assets/css/index.css`

5. **Check Browser Console**: 
   - Open DevTools (F12)
   - Check for 404 errors
   - Should see no routing-related errors

---

## 🔧 How .htaccess Works for React Router

### **The Key Rule:**

```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**What this does:**
1. Checks if the requested file exists (`!-f`)
2. Checks if the requested directory exists (`!-d`)
3. If neither exists, redirects to `index.html`
4. React Router then handles the routing client-side

**Why this works:**
- When you visit `/about`, Apache doesn't find a file called `about`
- So it serves `index.html` instead
- React Router sees the URL `/about` and renders the correct component
- No 404 errors! ✅

---

## 🛠️ Troubleshooting

### **Problem: Still getting 404 errors**

**Solutions:**
1. Verify `.htaccess` is in root directory (not in a subfolder)
2. Check file name is exactly `.htaccess` (not `.htaccess.txt`)
3. Verify `mod_rewrite` is enabled on your server (contact hosting support)
4. Check file permissions (should be 644)
5. Check Apache error logs for specific errors

### **Problem: Static assets (images, CSS, JS) not loading**

**Solutions:**
1. Check that the `RewriteCond` rules exclude static assets:
   ```apache
   RewriteCond %{REQUEST_URI} !^/assets/
   RewriteCond %{REQUEST_URI} !^/image/
   ```
2. Verify file paths in your code use relative paths (`./image/...`)
3. Check browser console for 404 errors on specific files

### **Problem: Infinite redirect loop**

**Solutions:**
1. Check that `RewriteBase /` is set correctly
2. Verify `[L]` flag is present (stops processing)
3. Check for conflicting rules in existing `.htaccess`

### **Problem: mod_rewrite not working**

**Solutions:**
1. Contact your hosting provider to enable `mod_rewrite`
2. Most shared hosting (Hostinger, etc.) has it enabled by default
3. Check if you can use `.htaccess` files (some hosts restrict this)

---

## 📋 Pre-Deployment Checklist

Before deploying:

- [ ] `.htaccess` file is in `public/` folder (for build)
- [ ] `.htaccess` will be copied to `dist/` during build
- [ ] Test build locally: `npm run build`
- [ ] Verify `.htaccess` is in `dist/` folder after build
- [ ] Upload entire `dist/` folder contents to `public_html/`
- [ ] Verify `.htaccess` is in `public_html/` root on server
- [ ] Test all routes work (home, about, projects, contact, etc.)
- [ ] Test page refresh on each route
- [ ] Verify static assets load correctly
- [ ] Check browser console for errors

---

## 🔒 Security Considerations

The provided `.htaccess` includes:

✅ **Security Headers:**
- X-Frame-Options (prevents clickjacking)
- X-XSS-Protection (XSS protection)
- X-Content-Type-Options (prevents MIME sniffing)
- Referrer-Policy (controls referrer information)

✅ **File Access Control:**
- Disables directory browsing
- Protects hidden files
- Allows `.htaccess` file access

---

## 📝 Additional Notes

### **For Hostinger Specifically:**

1. **File Manager**: 
   - Log in to hPanel
   - Go to "File Manager"
   - Navigate to `public_html/`
   - Upload `.htaccess`

2. **mod_rewrite**: 
   - Enabled by default on Hostinger
   - No action needed

3. **File Permissions**: 
   - Usually set automatically
   - If issues, set to 644

### **Merging with Existing .htaccess:**

If you have existing rules (e.g., for WordPress, PHP, etc.):

1. **Backup first**: Copy existing `.htaccess` to `.htaccess.backup`
2. **Add React Router rules at the top** (before other rules)
3. **Test thoroughly** after merging

Example merge:
```apache
# React Router rules (add these first)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Your existing rules below
# ... existing rules ...
```

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ All React routes load without 404 errors
2. ✅ Page refresh works on any route
3. ✅ Static assets (images, CSS, JS) load correctly
4. ✅ No errors in browser console
5. ✅ Fast page loads (compression working)
6. ✅ Security headers present (check in DevTools > Network > Headers)

---

**Your React SPA is now ready for Apache hosting! 🎉**

