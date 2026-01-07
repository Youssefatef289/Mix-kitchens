# دليل النشر على Vercel وإعداد SEO

## الخطوات المطلوبة:

### 1. ✅ رفع على Vercel

#### الطريقة الأولى: عبر GitHub (موصى بها)
1. تأكد من أن جميع التغييرات موجودة على GitHub
2. اذهب إلى [Vercel](https://vercel.com)
3. سجل الدخول بحساب GitHub
4. اضغط على "Add New Project"
5. اختر المستودع `Mix-kitchens`
6. Vercel سيكتشف الإعدادات تلقائياً:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. اضغط "Deploy"
8. بعد النشر، ستحصل على رابط مثل: `https://mix-kitchens.vercel.app`

#### الطريقة الثانية: عبر Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

### 2. ✅ Google Search Console

1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. اضغط "Add Property"
3. اختر "URL prefix"
4. أدخل رابط موقعك: `https://mix-kitchens.vercel.app`
5. اختر طريقة التحقق:
   - **HTML file**: قم بتحميل ملف التحقق من Google وضعه في `public/`
   - **HTML tag**: أضف meta tag في `index.html`
   - **Domain**: أضف TXT record في DNS

### 3. ✅ Request Indexing

بعد التحقق من الموقع في Google Search Console:

1. اذهب إلى "URL Inspection" في Google Search Console
2. أدخل URL الصفحة الرئيسية: `https://mix-kitchens.vercel.app`
3. اضغط "Request Indexing"
4. كرر العملية للصفحات المهمة:
   - `/about`
   - `/services`
   - `/projects`
   - `/dressing-room`
   - `/tv-room`
   - `/contact`

### 4. ✅ Sitemap + SEO (تم إعداده)

#### الملفات المضافة:
- ✅ `public/sitemap.xml` - خريطة الموقع
- ✅ `public/robots.txt` - إرشادات لمحركات البحث
- ✅ `src/components/SEO/SEO.jsx` - مكون SEO ديناميكي
- ✅ `vercel.json` - إعدادات Vercel
- ✅ `index.html` - Meta tags محسّنة

#### إرسال Sitemap إلى Google:
1. في Google Search Console، اذهب إلى "Sitemaps"
2. أدخل: `https://mix-kitchens.vercel.app/sitemap.xml`
3. اضغط "Submit"

### 5. تحسينات SEO الإضافية:

#### Meta Tags المضافة:
- ✅ Title و Description ديناميكية لكل صفحة
- ✅ Open Graph tags للشبكات الاجتماعية
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Alternate languages (ar/en)

#### Structured Data (اختياري):
يمكن إضافة JSON-LD للبيانات المنظمة:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mix Kitchens",
  "description": "شركة رائدة في تصميم وتنفيذ المطابخ الفاخرة",
  "telephone": "01008705606",
  "email": "ahmeddreda1994@gmail.com"
}
```

### 6. التحقق من SEO:

استخدم الأدوات التالية:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

### 7. تحديث Sitemap:

عند إضافة صفحات جديدة، قم بتحديث `public/sitemap.xml` يدوياً أو استخدم أداة لإنشائه تلقائياً.

---

## ملاحظات مهمة:

1. **تأكد من تحديث URL في sitemap.xml** بعد الحصول على رابط Vercel الفعلي
2. **أضف Google Analytics** (اختياري) لتتبع الزوار
3. **راقب Google Search Console** بانتظام للأخطاء والتحسينات
4. **حدث Sitemap** عند إضافة محتوى جديد

