import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import testimonialsData from '../../data/testimonials.json'
import styles from './Testimonials.module.css'

const Testimonials = ({ showMultiple = false }) => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  // Show 1 testimonial on home page, 3 on other pages
  const getVisibleTestimonials = () => {
    const count = showMultiple ? 3 : 1
    const visible = []
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonialsData.length
      visible.push(testimonialsData[index])
    }
    return visible
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    )
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  const slideTransition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 },
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>{t.testimonials.title}</h2>
        </motion.div>

        <div className={styles.testimonialsWrapper}>
          {/* Navigation Buttons */}
          <button 
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className={`${styles.testimonialsGrid} ${!showMultiple ? styles.singleCard : ''}`}>
            <AnimatePresence mode="wait" custom={direction}>
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={showMultiple ? `${currentIndex}-${idx}` : currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className={styles.testimonialCard}
                >
                  <div className={styles.quoteMark}>"</div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.divider}></div>
                  <div className={styles.testimonialFooter}>
                    {testimonial.image && (
                      <div className={styles.customerImage}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <p className={styles.customerName}>{testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button 
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`${t.testimonials.goToImage} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
