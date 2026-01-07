import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'

const SEO = () => {
  const location = useLocation()
  const { language } = useLanguage()
  const t = translations[language]
  const baseUrl = 'https://mix-kitchens.vercel.app'

  useEffect(() => {
    const updateMetaTags = () => {
      const path = location.pathname
      let title = 'Mix - المطابخ الفاخرة والتشطيبات الداخلية'
      let description = 'شركة Mix رائدة في تصميم وتنفيذ المطابخ الفاخرة والتشطيبات الداخلية. نوفر مطابخ ألمنيوم و خشبية، دريسنج روم، ومكتبات تلفزيون بأعلى معايير الجودة.'
      let keywords = 'مطابخ فاخرة, مطابخ ألمنيوم, مطابخ خشبية, تشطيبات داخلية, دريسنج روم, مكتبات تلفزيون'

      // Update based on current page
      if (path === '/about') {
        title = language === 'ar' ? 'من نحن - Mix' : 'About Us - Mix'
        description = language === 'ar' 
          ? 'تعرف على شركة Mix ورسالتنا في تصميم وتنفيذ المطابخ الفاخرة والتشطيبات الداخلية'
          : 'Learn about Mix and our mission in designing and implementing luxurious kitchens and interior finishes'
      } else if (path === '/services') {
        title = language === 'ar' ? 'خدماتنا - Mix' : 'Our Services - Mix'
        description = language === 'ar'
          ? 'استكشف خدماتنا الشاملة في المطابخ الفاخرة والتشطيبات الداخلية'
          : 'Explore our comprehensive services in luxurious kitchens and interior finishes'
      } else if (path === '/projects' || path.startsWith('/projects/')) {
        title = language === 'ar' ? 'مشاريعنا - Mix' : 'Our Projects - Mix'
        description = language === 'ar'
          ? 'اكتشف مجموعة من أعمالنا المميزة في المطابخ الفاخرة والتشطيبات الداخلية'
          : 'Discover our distinguished works in luxurious kitchens and interior finishes'
      } else if (path === '/dressing-room') {
        title = language === 'ar' ? 'الدريسنج روم - Mix' : 'Dressing Room - Mix'
        description = language === 'ar'
          ? 'اكتشف تصاميم الدريسنج روم الفاخرة المصممة بعناية فائقة'
          : 'Discover luxurious dressing room designs carefully crafted'
      } else if (path === '/tv-room') {
        title = language === 'ar' ? 'مكتبات التلفزيون - Mix' : 'TV Libraries - Mix'
        description = language === 'ar'
          ? 'تصاميم عصرية لمكتبات التلفزيون بأعلى معايير الجودة'
          : 'Modern TV library designs with the highest quality standards'
      } else if (path === '/contact') {
        title = language === 'ar' ? 'تواصل معنا - Mix' : 'Contact Us - Mix'
        description = language === 'ar'
          ? 'تواصل معنا للحصول على استشارة مجانية حول مطبخك المثالي. الهاتف: 01008705606'
          : 'Contact us for a free consultation about your ideal kitchen. Phone: 01008705606'
      }

      // Update title
      document.title = title

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)

      // Update Open Graph tags
      const updateOGTag = (property, content) => {
        let tag = document.querySelector(`meta[property="${property}"]`)
        if (!tag) {
          tag = document.createElement('meta')
          tag.setAttribute('property', property)
          document.head.appendChild(tag)
        }
        tag.setAttribute('content', content)
      }

      updateOGTag('og:title', title)
      updateOGTag('og:description', description)
      updateOGTag('og:url', `${baseUrl}${path}`)

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `${baseUrl}${path}`)
    }

    updateMetaTags()
  }, [location.pathname, language])

  return null
}

export default SEO

