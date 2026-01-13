import React, { useState } from 'react'
import { 
  FaPhoneAlt,
  FaComments,
  FaTimes
} from 'react-icons/fa'
import { 
  SiFacebook,
  SiWhatsapp,
  SiInstagram,
  SiTiktok
} from 'react-icons/si'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './FloatingSocialIcons.module.css'

const FloatingSocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainDiv}>
        <div 
          className={`${styles.mainButton} ${isOpen ? styles.open : ''} ${styles.wave}`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaComments />}
        </div>

        <a 
          href="tel:01008705606" 
          className={styles.consultationButton}
        >
          <FaPhoneAlt /> {t.nav.ctaWithPhone}
        </a>

        <a 
          href="tel:01008705606" 
          className={`${styles.socialLink} ${styles.phoneColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اتصل بنا"
        >
          <FaPhoneAlt />
        </a>

        <a 
          href="https://wa.me/201070881743" 
          className={`${styles.socialLink} ${styles.whatsappColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
        >
          <SiWhatsapp />
        </a>

        <a 
          href="https://www.facebook.com/share/14SyQYXurmS/?mibextid=wwXIfr" 
          className={`${styles.socialLink} ${styles.messengerColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="فيسبوك"
        >
          <SiFacebook />
        </a>

        <a 
          href="https://www.instagram.com/mix25hurg?igsh=MTMxc3RpM3M4MzU1cw==" 
          className={`${styles.socialLink} ${styles.instagramColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="إنستجرام"
        >
          <SiInstagram />
        </a>

        <a 
          href="https://www.tiktok.com/@mix.kitchen?_r=1&_t=ZS-932XGy9JxsS" 
          className={`${styles.socialLink} ${styles.tiktokColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تيك توك"
        >
          <SiTiktok />
        </a>
      </div>
    </div>
  )
}

export default FloatingSocialIcons
