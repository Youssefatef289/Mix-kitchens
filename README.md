# موقع أناقيد - مطابخ فاخرة وتشطيبات داخلية

موقع احترافي مبني بـ React و Vite لتقديم خدمات المطابخ الفاخرة والتشطيبات الداخلية.

## المميزات

- ✅ تصميم عصري وفاخر بألوان أنيقة (أسود، ذهبي، أبيض)
- ✅ Responsive بالكامل لجميع الأجهزة
- ✅ أنيميشن ناعمة باستخدام Framer Motion
- ✅ Smooth Scroll Navigation
- ✅ كود منظم وقابل للتطوير
- ✅ CSS Modules للأنماط

## هيكل الموقع

1. **Navbar** - شريط تنقل ثابت مع Logo وروابط وزر CTA
2. **Hero Section** - قسم رئيسي بصور كبيرة وعناوين جذابة
3. **About Section** - قسم تعريف بالشركة مع إحصائيات
4. **Services Section** - عرض الخدمات في كروت أنيقة
5. **Projects Section** - معرض المشاريع مع فلترة
6. **Why Choose Us** - مميزات الشركة
7. **Contact Section** - نموذج تواصل
8. **Footer** - تذييل مع روابط ووسائل التواصل

## التثبيت والتشغيل

### المتطلبات

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التشغيل

1. تثبيت المكتبات:
```bash
npm install
```

2. تشغيل المشروع في وضع التطوير:
```bash
npm run dev
```

3. بناء المشروع للإنتاج:
```bash
npm run build
```

4. معاينة النسخة المبنية:
```bash
npm run preview
```

## هيكل المشروع

```
├── src/
│   ├── components/          # المكونات
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Projects/
│   │   ├── WhyChooseUs/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/               # ملفات البيانات
│   │   ├── services.json
│   │   ├── projects.json
│   │   └── features.json
│   ├── styles/             # الأنماط العامة
│   │   └── globals.css
│   ├── App.jsx            # الملف الرئيسي
│   └── main.jsx           # نقطة الدخول
├── public/
│   └── image/             # الصور (يجب نقل مجلد image هنا)
├── fonts/                 # الخطوط
├── package.json
├── vite.config.js
└── index.html
```

## ملاحظات مهمة

1. **الصور**: **مهم جداً** - يجب نقل أو نسخ مجلد `image` من جذر المشروع إلى مجلد `public`:
   - انقل المجلد من: `Mix-Project/image/`
   - إلى: `Mix-Project/public/image/`
   - هذا ضروري لكي تعمل الصور بشكل صحيح في الموقع

2. **الخطوط**: الخطوط موجودة في مجلد `fonts` ويتم تحميلها في `globals.css`.

3. **البيانات**: يمكنك تعديل محتوى الخدمات والمشاريع من ملفات JSON في `src/data/`.

4. **الألوان**: يمكنك تعديل الألوان من متغيرات CSS في `src/styles/globals.css`.

## التقنيات المستخدمة

- **React 18** - مكتبة JavaScript للواجهات
- **Vite** - أداة بناء سريعة
- **Framer Motion** - مكتبة الأنيميشن
- **CSS Modules** - للأنماط المعزولة

## التخصيص

### تغيير الألوان

قم بتعديل متغيرات CSS في `src/styles/globals.css`:

```css
--color-primary: #1a1a1a;
--color-secondary: #d4af37;
--color-accent: #c9a961;
```

### إضافة محتوى جديد

- **الخدمات**: عدّل `src/data/services.json`
- **المشاريع**: عدّل `src/data/projects.json`
- **المميزات**: عدّل `src/data/features.json`

## الدعم

لأي استفسارات أو مشاكل، يرجى التواصل معنا.

---

صُنع بـ ❤️ لموقع أناقيد

