import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import VideoModal from '../VideoModal/VideoModal'
import styles from './Videos.module.css'

const Videos = ({ showAll = false }) => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const { language } = useLanguage()
  const t = translations[language]

  const allVideos = [
    {
      id: 1,
      title: `${t.videos.videoTitle} - 1`,
      src: '/image/Videos/Videos (1).mp4',
      thumbnail: '/image/Videos/Videos (1).mp4',
    },
    {
      id: 2,
      title: `${t.videos.videoTitle} - 2`,
      src: '/image/Videos/Videos (2).mp4',
      thumbnail: '/image/Videos/Videos (2).mp4',
    },
    {
      id: 3,
      title: `${t.videos.videoTitle} - 3`,
      src: '/image/Videos/Videos (3).mp4',
      thumbnail: '/image/Videos/Videos (3).mp4',
    },
    {
      id: 4,
      title: `${t.videos.videoTitle} - 4`,
      src: '/image/Videos/Videos (4).mp4',
      thumbnail: '/image/Videos/Videos (4).mp4',
    },
    {
      id: 5,
      title: `${t.videos.videoTitle} - 5`,
      src: '/image/Videos/Videos (5).mp4',
      thumbnail: '/image/Videos/Videos (5).mp4',
    },
    {
      id: 6,
      title: `${t.videos.videoTitle} - 6`,
      src: '/image/Videos/Videos (6).mp4',
      thumbnail: '/image/Videos/Videos (6).mp4',
    },
    {
      id: 7,
      title: `${t.videos.videoTitle} - 7`,
      src: '/image/Videos/Videos (7).mp4',
      thumbnail: '/image/Videos/Videos (7).mp4',
    },
    {
      id: 8,
      title: `${t.videos.videoTitle} - 8`,
      src: '/image/Videos/Videos (8).mp4',
      thumbnail: '/image/Videos/Videos (8).mp4',
    },
    {
      id: 9,
      title: `${t.videos.videoTitle} - 9`,
      src: '/image/Videos/Videos (9).mp4',
      thumbnail: '/image/Videos/Videos (9).mp4',
    },
  ]

  // Show only video 8 on home page, otherwise show all videos
  const video8 = allVideos.find(v => v.id === 8)
  const videos = showAll ? allVideos : []

  const handleVideoClick = (video, index) => {
    setSelectedIndex(index)
    setSelectedVideo({
      video: video.src,
      title: video.title,
    })
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
  }

  const handleNext = () => {
    if (selectedIndex < videos.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedVideo({
        video: videos[nextIndex].src,
        title: videos[nextIndex].title,
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedVideo({
        video: videos[prevIndex].src,
        title: videos[prevIndex].title,
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

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

  // Home page layout: single video with article
  if (!showAll && video8) {
    return (
      <section id="videos" className={styles.videos}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>{t.videos.title}</h2>
          </motion.div>

          <motion.div
            className={styles.videoArticleContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.videoWrapper}>
              <motion.div
                className={styles.videoCard}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.videoThumbnail}>
                  <video
                    ref={videoRef}
                    src={video8.src}
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
                      <h3 className={styles.videoTitle}>{video8.title}</h3>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <div className={styles.articleWrapper}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className={styles.articleTitle}>{t.videos.articleTitle}</h3>
                <div className={styles.articleContent}>
                  <p>{t.videos.articleP1}</p>
                  <p>{t.videos.articleP2}</p>
                  <p>{t.videos.articleP3}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link to="/projects" className={styles.viewMoreButton}>
                    {t.videos.viewMore}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Projects page layout: all videos grid
  return (
    <section id="videos" className={styles.videos}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>{t.videos.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.videos.subtitle}
          </p>
        </motion.div>

        <motion.div
          className={styles.videosGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className={styles.videoCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleVideoClick(video, index)}
            >
              <div className={styles.videoThumbnail}>
                <video
                  src={video.src}
                  className={styles.thumbnailVideo}
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className={styles.playOverlay}>
                  <div className={styles.playButton}>
                    <FaPlay />
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo?.video}
        title={selectedVideo?.title}
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={selectedIndex < videos.length - 1}
        hasPrev={selectedIndex > 0}
      />
    </section>
  )
}

export default Videos

