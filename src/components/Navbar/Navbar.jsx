import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './Navbar.module.css'

const Navbar = ({ isTransparent = false, hasHero = false }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.contact, path: '/contact' },
  ]

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    navigate(path)
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // تحديد نوع Navbar بناءً على وجود Hero
  const getNavbarClass = () => {
    if (hasHero && !isScrolled) {
      return styles.navbarTransparent
    }
    return styles.navbarSolid
  }

  const navbarClass = getNavbarClass()

  return (
    <motion.nav
      className={`${styles.navbar} ${navbarClass} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src="/image/logo-removebg-preview.png"
            alt="Mix"
            className={styles.logoImg}
          />
          <span className={styles.logoText}></span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={styles.navLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle Button */}
        <motion.button
          onClick={toggleLanguage}
          className={styles.languageButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle language"
        >
          {language === 'ar' ? 'EN' : 'AR'}
        </motion.button>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          onClick={(e) => handleLinkClick(e, '/contact')}
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.nav.cta}
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={styles.mobileMenu}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={styles.mobileNavLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className={styles.mobileLanguageButton}
            >
              {language === 'ar' ? 'English / EN' : 'العربية / AR'}
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className={styles.mobileCtaButton}
            >
              {t.nav.cta}
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
