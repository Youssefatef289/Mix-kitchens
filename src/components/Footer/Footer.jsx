import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaHeart
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './Footer.module.css'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const quickLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.contact, path: '/contact' },
  ]

  const socialMedia = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/yourpage' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/yourpage' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://www.twitter.com/yourpage' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/yourpage' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/966501234567' },
  ]

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.logo}>
              <img
                src="/image/logo-removebg-preview.png"
                alt="Mix"
                className={styles.logoImg}
              />
              <span className={styles.logoText}></span>
            </div>
            <p className={styles.companyDescription}>
              {t.footer.companyDescription}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.footerTitle}>{t.footer.quickLinks}</h3>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.footerTitle}>{t.footer.contactInfo}</h3>
            <ul className={styles.contactInfo}>
              <li>
                <span className={styles.contactIcon}>
                  <FaEnvelope />
                </span>
                <span>info@mix.com</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FaPhone />
                </span>
                <span>+966 50 123 4567</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </span>
                <span>المملكة العربية السعودية</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.footerTitle}>{t.footer.followUs}</h3>
            <div className={styles.socialMedia}>
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            © {currentYear} Mix. {t.footer.rights}.
          </p>
          <p className={styles.madeWith}>
            {t.footer.madeWith} <FaHeart style={{ color: '#E91E63', display: 'inline' }} /> {t.footer.madeWith2}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

