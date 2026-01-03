import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiWhatsapp, 
  FaPhoneAlt, 
  SiFacebook, 
  SiInstagram 
} from 'react-icons'
import styles from './FloatingIcons.module.css'

const FloatingIcons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const icons = [
    {
      id: 'whatsapp',
      name: 'واتساب',
      icon: SiWhatsapp,
      link: 'https://wa.me/966501234567',
      color: '#25D366',
    },
    {
      id: 'phone',
      name: 'الهاتف',
      icon: FaPhoneAlt,
      link: 'tel:+966501234567',
      color: '#4CAF50',
    },
    {
      id: 'facebook',
      name: 'فيسبوك',
      icon: SiFacebook,
      link: 'https://www.facebook.com',
      color: '#1877F2',
    },
    {
      id: 'instagram',
      name: 'إنستجرام',
      icon: SiInstagram,
      link: 'https://www.instagram.com',
      color: '#E4405F',
    },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.floatingIcons}>
      {/* Main Toggle Button */}
      <motion.button
        className={styles.mainButton}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.plusIcon}>+</span>
      </motion.button>

      {/* Icons Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.iconsMenu}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {icons.map((icon, index) => {
              const IconComponent = icon.icon
              return (
                <motion.a
                  key={icon.id}
                  href={icon.link}
                  target={icon.link.startsWith('http') ? '_blank' : '_self'}
                  rel={icon.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={styles.iconButton}
                  style={{ '--icon-color': icon.color }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.15, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  title={icon.name}
                >
                  <span className={styles.icon}><IconComponent /></span>
                  <span className={styles.tooltip}>{icon.name}</span>
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingIcons

