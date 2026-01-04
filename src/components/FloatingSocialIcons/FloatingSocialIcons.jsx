import React, { useState } from 'react'
import { 
  FaPhoneAlt,
  FaComments,
  FaTimes
} from 'react-icons/fa'
import { 
  SiFacebook,
  SiWhatsapp
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
          href="https://wa.me/2001008705606" 
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
      </div>
    </div>
  )
}

export default FloatingSocialIcons
