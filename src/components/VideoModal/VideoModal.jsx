import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa'
import styles from './VideoModal.module.css'

const VideoModal = ({ video, title, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
      // Auto play video when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked, handle silently
        })
      }
    } else {
      document.body.style.overflow = 'unset'
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isOpen, onClose])

  if (!isOpen || !video) return null

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

            {/* Video */}
            <motion.div
              className={styles.videoContainer}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <video
                ref={videoRef}
                src={video}
                className={styles.modalVideo}
                controls
                autoPlay
                loop
                playsInline
              >
                المتصفح الخاص بك لا يدعم تشغيل الفيديو.
              </video>
              {title && <h3 className={styles.videoTitle}>{title}</h3>}
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
                aria-label="الفيديو السابق"
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
                aria-label="الفيديو التالي"
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

export default VideoModal

