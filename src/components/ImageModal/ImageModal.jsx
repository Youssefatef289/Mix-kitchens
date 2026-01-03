import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import styles from './ImageModal.module.css'

const ImageModal = ({ image, title, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className={styles.closeButton}
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="إغلاق"
            >
              <FaTimes />
            </motion.button>

            {/* Image */}
            <motion.div
              className={styles.imageContainer}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img src={image} alt={title} className={styles.modalImage} />
              {title && <h3 className={styles.imageTitle}>{title}</h3>}
            </motion.div>

            {/* Navigation Buttons */}
            {hasPrev && (
              <motion.button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onPrev()
                }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="الصورة السابقة"
              >
                <FaChevronRight />
              </motion.button>
            )}

            {hasNext && (
              <motion.button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onNext()
                }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="الصورة التالية"
              >
                <FaChevronLeft />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageModal

