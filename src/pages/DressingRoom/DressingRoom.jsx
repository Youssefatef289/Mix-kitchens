import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import ImageModal from '../../components/ImageModal/ImageModal'
import PageHero from '../../components/PageHero/PageHero'
import dressingRoomData from '../../data/dressingRoom.json'
import styles from './DressingRoom.module.css'

const DressingRoomPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleImageClick = (item, index) => {
    setSelectedIndex(index)
    setSelectedImage({
      image: item.image,
      title: item.title,
    })
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    if (selectedIndex < dressingRoomData.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedImage({
        image: dressingRoomData[nextIndex].image,
        title: dressingRoomData[nextIndex].title,
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedImage({
        image: dressingRoomData[prevIndex].image,
        title: dressingRoomData[prevIndex].title,
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
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <PageHero
        title={t.dressingRoom.title}
        description={t.dressingRoom.subtitle}
      />
      <div className={styles.dressingRoomPage}>
        {/* Description Section */}
        <section className={styles.descriptionSection}>
          <div className={styles.container}>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.dressingRoom.description}
            </motion.p>
          </div>
        </section>

        {/* Dressing Room Section */}
        <section className={styles.dressingRoomSection}>
          <div className={styles.container}>
            {/* Dressing Room Grid */}
            <motion.div
              className={styles.dressingRoomGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {dressingRoomData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.dressingRoomCard}
                  variants={itemVariants}
                  layout
                >
                  <div 
                    className={styles.dressingRoomImageWrapper}
                    onClick={() => handleImageClick(item, index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.dressingRoomImage}
                      loading="lazy"
                    />
                    <div className={styles.dressingRoomOverlay}>
                      <div className={styles.dressingRoomIcon}>
                        <FaEye />
                      </div>
                    </div>
                  </div>
                  <div className={styles.dressingRoomInfo}>
                    <h3 className={styles.dressingRoomTitle}>{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Image Modal */}
        <ImageModal
          image={selectedImage?.image}
          title={selectedImage?.title}
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex < dressingRoomData.length - 1}
          hasPrev={selectedIndex > 0}
        />
      </div>
    </>
  )
}

export default DressingRoomPage

