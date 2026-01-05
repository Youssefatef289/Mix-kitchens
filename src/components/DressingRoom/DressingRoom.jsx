import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './DressingRoom.module.css'

const DressingRoom = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const { language } = useLanguage()
  const t = translations[language]

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <section id="dressing-room" className={styles.dressingRoom}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>{t.dressingRoom.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.dressingRoom.subtitle}
          </p>
        </motion.div>

        <motion.div
          className={styles.videoArticleContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Article Section */}
          <div className={styles.articleWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className={styles.articleTitle}>{t.dressingRoom.articleTitle}</h3>
              <div className={styles.articleContent}>
                <p>{t.dressingRoom.articleP1}</p>
                <p>{t.dressingRoom.articleP2}</p>
                <p>{t.dressingRoom.articleP3}</p>
                <p>{t.dressingRoom.articleP4}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link to="/dressing-room" className={styles.viewMoreButton}>
                  {t.dressingRoom.viewMore}
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Section */}
          <div className={styles.videoWrapper}>
            <motion.div
              className={styles.videoCard}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.videoThumbnail}>
                <video
                  ref={videoRef}
                  src="/image/Videos/Dreessing Room.mp4"
                  className={styles.thumbnailVideo}
                  muted={false}
                  playsInline
                  controls={isPlaying}
                  preload="metadata"
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div 
                    className={styles.playOverlay}
                    onClick={handlePlayPause}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.playButton}>
                      <FaPlay />
                    </div>
                    <h3 className={styles.videoTitle}>{t.dressingRoom.videoTitle}</h3>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DressingRoom

