# دليل رفع المشروع على Vercel

## الخطوات:

### 1. إعداد Git (إذا لم يكن مُعداً)
```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

### 2. إضافة الملفات وعمل Commit
```bash
git add .
git commit -m "Complete website with all features"
```

### 3. رفع المشروع على GitHub (اختياري)
```bash
# إنشاء مستودع جديد على GitHub ثم:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### 4. رفع المشروع على Vercel

#### الطريقة الأولى: من خلال Vercel Dashboard
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول أو أنشئ حساب
3. اضغط على "Add New Project"
4. اختر "Import Git Repository" (إذا رفعت على GitHub)
   - أو اختر "Upload" لرفع الملفات مباشرة
5. Vercel سيكتشف تلقائياً:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. اضغط على "Deploy"

#### الطريقة الثانية: من خلال Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# رفع المشروع
vercel

# للإنتاج
vercel --prod
```

### 5. إعدادات Vercel المطلوبة

تم إنشاء ملف `vercel.json` مع الإعدادات التالية:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite
- Rewrites: جميع المسارات تعيد إلى `index.html` (لـ React Router)

### 6. متغيرات البيئة (إن وجدت)
إذا كان لديك متغيرات بيئة، أضفها من:
- Vercel Dashboard → Project Settings → Environment Variables

### 7. التحقق من النشر
بعد النشر، ستحصل على رابط مثل:
`https://your-project.vercel.app`

---

## ملاحظات مهمة:

1. **تأكد من وجود جميع الملفات المطلوبة:**
   - ✅ `package.json`
   - ✅ `vite.config.js`
   - ✅ `vercel.json`
   - ✅ جميع الملفات في `src/`
   - ✅ جميع الملفات في `public/`

2. **تأكد من أن مجلد `public/image` يحتوي على جميع الصور**

3. **التحقق من Build محلياً:**
   ```bash
   npm run build
   npm run preview
   ```

4. **إذا واجهت مشاكل:**
   - تحقق من Console في Vercel Dashboard
   - تأكد من أن جميع dependencies مثبتة
   - تحقق من أن Build Command يعمل محلياً

---

## الملفات المضافة/المحدثة:

- ✅ `vercel.json` - إعدادات Vercel
- ✅ جميع المكونات محدثة
- ✅ نظام الترجمة كامل
- ✅ Hero Slider
- ✅ Testimonials Slider
- ✅ جميع الأزرار بنمط موحد

