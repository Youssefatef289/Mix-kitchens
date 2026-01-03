# إعداد الخطوط - CoconNextArabic

## خطوات إعداد الخطوط:

تم تحديث الكود لاستخدام خط **CoconNextArabic**. يجب نقل ملفات الخطوط إلى المجلد الصحيح.

### الخطوات:

1. **تأكد من وجود مجلد `public/fonts`**
   - إذا لم يكن موجوداً، قم بإنشائه

2. **انسخ ملفات الخطوط:**
   - انسخ `CoconNextArabic-Regular.otf` من `fonts/` إلى `public/fonts/`
   - انسخ `CoconNextArabic-Bold.otf` من `fonts/` إلى `public/fonts/`

### الأوامر (PowerShell):
```powershell
# إنشاء المجلد إذا لم يكن موجوداً
New-Item -ItemType Directory -Force -Path "public\fonts"

# نسخ ملفات الخطوط
Copy-Item "fonts\CoconNextArabic-Regular.otf" "public\fonts\" -Force
Copy-Item "fonts\CoconNextArabic-Bold.otf" "public\fonts\" -Force
```

### الأوامر (CMD):
```cmd
mkdir public\fonts
copy fonts\CoconNextArabic-Regular.otf public\fonts\
copy fonts\CoconNextArabic-Bold.otf public\fonts\
```

### التحقق:
بعد النسخ، تأكد من وجود:
- ✅ `public/fonts/CoconNextArabic-Regular.otf`
- ✅ `public/fonts/CoconNextArabic-Bold.otf`

### ملاحظات:
- الخط تم تحديثه في جميع أنحاء الموقع
- يتم استخدام `CoconNextArabic-Regular` للنصوص العادية
- يتم استخدام `CoconNextArabic-Bold` للنصوص السميكة والعناوين

---

بعد النسخ، قم بإعادة تشغيل المشروع:
```bash
npm run dev
```

