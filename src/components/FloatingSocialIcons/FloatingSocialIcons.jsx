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
import styles from './FloatingSocialIcons.module.css'

const FloatingSocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false)

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

        <button 
          className={styles.consultationButton}
        >
          <FaPhoneAlt /> استشارة مجانية
        </button>

        <a 
          href="tel:+966501234567" 
          className={`${styles.socialLink} ${styles.phoneColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اتصل بنا"
        >
          <FaPhoneAlt />
        </a>

        <a 
          href="https://wa.me/966501234567" 
          className={`${styles.socialLink} ${styles.whatsappColor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
        >
          <SiWhatsapp />
        </a>

        <a 
          href="https://www.facebook.com/yourpage" 
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
