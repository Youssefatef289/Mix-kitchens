import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './Navbar.module.css'

const Navbar = ({ isTransparent = false, hasHero = false }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
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
    { name: t.nav.home, path: '/', hash: '#home' },
    { name: t.nav.about, path: '/', hash: '#about' },
    { name: t.nav.services, path: '/', hash: '#services' },
  ]

  const projectsDropdownItems = [
    { name: t.nav.kitchens, path: '/', hash: '#projects' },
    { name: t.nav.dressingRoom, path: '/', hash: '#dressing-room' },
    { name: t.nav.tvRoom, path: '/', hash: '#projects' },
  ]

  const handleLinkClick = (e, path, hash = null) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (hash) {
          const element = document.querySelector(hash)
          if (element) {
            const offset = 80 // Navbar height offset
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 300)
    } else {
      // We're already on home page, just scroll
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offset = 80 // Navbar height offset
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 50)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
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
                to={link.path + (link.hash || '')}
                onClick={(e) => handleLinkClick(e, link.path, link.hash)}
                className={styles.navLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Projects Dropdown */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
          >
            <span className={styles.navLink}>
              {language === 'ar' ? (
                <>
                  <span className={styles.dropdownArrow}>▼</span>
                  {t.nav.projects}
                </>
              ) : (
                <>
                  {t.nav.projects}
                  <span className={styles.dropdownArrow}>▼</span>
                </>
              )}
            </span>
            {isProjectsDropdownOpen && (
              <motion.ul
                className={styles.dropdown}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {projectsDropdownItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path + (item.hash || '')}
                      onClick={(e) => {
                        handleLinkClick(e, item.path, item.hash)
                        setIsProjectsDropdownOpen(false)
                      }}
                      className={styles.dropdownLink}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          {/* Contact Link */}
          <li>
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/contact')
                setIsMobileMenuOpen(false)
                window.scrollTo(0, 0)
              }}
              className={styles.navLink}
            >
              {t.nav.contact}
            </Link>
          </li>
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
          href="tel:01008705606"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.nav.ctaWithPhone}
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
                to={link.path + (link.hash || '')}
                onClick={(e) => handleLinkClick(e, link.path, link.hash)}
                className={styles.mobileNavLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Mobile Projects Dropdown */}
          <li className={styles.mobileDropdownContainer}>
            <button
              className={styles.mobileDropdownButton}
              onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
            >
              {t.nav.projects}
              <span className={isProjectsDropdownOpen ? styles.dropdownArrowOpen : styles.dropdownArrow}>▼</span>
            </button>
            {isProjectsDropdownOpen && (
              <motion.ul
                className={styles.mobileDropdown}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {projectsDropdownItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path + (item.hash || '')}
                      onClick={(e) => {
                        handleLinkClick(e, item.path, item.hash)
                        setIsProjectsDropdownOpen(false)
                      }}
                      className={styles.mobileDropdownLink}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          {/* Mobile Contact Link */}
          <li>
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/contact')
                setIsMobileMenuOpen(false)
                window.scrollTo(0, 0)
              }}
              className={styles.mobileNavLink}
            >
              {t.nav.contact}
            </Link>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className={styles.mobileLanguageButton}
            >
              {language === 'ar' ? 'English / EN' : 'العربية / AR'}
            </button>
          </li>
          <li>
            <a
              href="tel:01008705606"
              className={styles.mobileCtaButton}
            >
              {t.nav.ctaWithPhone}
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
