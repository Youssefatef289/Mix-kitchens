import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import Navbar from '../Navbar/Navbar'
import styles from './Hero.module.css'

const Hero = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '/image/hero (1).jpeg',
    '/image/hero (2).jpeg',
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToContact = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  }

  const imageTransition = {
    opacity: { duration: 1.5, ease: 'easeInOut' },
    scale: { duration: 1.5, ease: 'easeInOut' },
  }

  return (
    <>
      <Navbar hasHero={true} />
      <section id="home" className={styles.hero}>
        {/* Background Image with Overlay */}
        <div className={styles.heroBackground}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="مطابخ فاخرة"
              className={styles.heroImage}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={imageTransition}
            />
          </AnimatePresence>
          <div className={styles.overlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.title}
              <span className={styles.highlight}>{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className={styles.heroButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.btnPrimary}
              </motion.button>
              <motion.button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => {
                  navigate('/projects')
                  window.scrollTo(0, 0)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.btnSecondary}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className={styles.scrollIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span></span>
          </motion.div>
        </div>

        {/* Slider Dots */}
        <div className={styles.sliderDots}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
