import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import ImageModal from '../../components/ImageModal/ImageModal'
import PageHero from '../../components/PageHero/PageHero'
import tvRoomData from '../../data/tvRoom.json'
import styles from './TvRoom.module.css'

const TvRoomPage = () => {
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
    if (selectedIndex < tvRoomData.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedImage({
        image: tvRoomData[nextIndex].image,
        title: tvRoomData[nextIndex].title,
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedImage({
        image: tvRoomData[prevIndex].image,
        title: tvRoomData[prevIndex].title,
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
        title={t.projects.tvRoom || 'مكتبات التلفزيون'}
        description={t.projects.tvRoomDescription || 'تصاميم عصرية لمكتبات التلفزيون'}
      />
      <div className={styles.tvRoomPage}>
        {/* Description Section */}
        <section className={styles.descriptionSection}>
          <div className={styles.container}>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.projects.tvRoomDescription || 'اكتشف مجموعتنا المتنوعة من مكتبات التلفزيون المصممة بعناية فائقة لتوفير مساحة تخزين أنيقة وعصرية. من التصاميم الكلاسيكية إلى العصرية، نضمن لك تجربة فريدة تجمع بين الجمال والوظيفية.'}
            </motion.p>
          </div>
        </section>

        {/* TV Room Section */}
        <section className={styles.tvRoomSection}>
          <div className={styles.container}>
            {/* TV Room Grid */}
            <motion.div
              className={styles.tvRoomGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {tvRoomData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.tvRoomCard}
                  variants={itemVariants}
                  layout
                >
                  <div 
                    className={styles.tvRoomImageWrapper}
                    onClick={() => handleImageClick(item, index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.tvRoomImage}
                      loading="lazy"
                    />
                    <div className={styles.tvRoomOverlay}>
                      <div className={styles.tvRoomIcon}>
                        <FaEye />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tvRoomInfo}>
                    <h3 className={styles.tvRoomTitle}>{item.title}</h3>
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
          hasNext={selectedIndex < tvRoomData.length - 1}
          hasPrev={selectedIndex > 0}
        />
      </div>
    </>
  )
}

export default TvRoomPage

