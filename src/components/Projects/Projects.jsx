import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import ImageModal from '../ImageModal/ImageModal'
import projectsData from '../../data/projects.json'
import styles from './Projects.module.css'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Category cards for homepage
  const categoryCards = [
    {
      id: 'kitchens',
      title: t.projects.kitchens || 'المطابخ',
      image: '/image/Kitchen pictures/kitchen/kitchen (1).jpg',
      link: '/projects',
      description: t.projects.kitchensDescription || 'استكشف مجموعتنا المتنوعة من المطابخ الفاخرة'
    },
    {
      id: 'dressing-room',
      title: t.projects.dressingRoom || 'الدريسنج روم',
      image: '/image/Dreessing Room/Dressing Room (1).jpeg',
      link: '/dressing-room',
      description: t.projects.dressingRoomDescription || 'تصاميم أنيقة للدريسنج روم'
    },
    {
      id: 'tv-room',
      title: t.projects.tvRoom || 'مكتبات التلفزيون',
      image: '/image/Tv room design/tv room design modern (1).jpeg',
      link: '/tv-room',
      description: t.projects.tvRoomDescription || 'تصاميم عصرية لمكتبات التلفزيون'
    },
    {
      id: 'shoe-store',
      title: language === 'ar' ? 'محل أحذية فاخر' : 'Luxury Shoe Store',
      image: '/image/Shoe store/Shoe store (1).jpg',
      link: '/projects/12',
      description: language === 'ar' ? 'تصاميم فاخرة لمحلات الأحذية' : 'Luxury shoe store designs'
    }
  ]

  const handleCardClick = (link) => {
    // Navigation will be handled by Link component
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
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categoryCards.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.projectCard}
              variants={itemVariants}
            >
              <Link to={card.link} onClick={() => handleCardClick(card.link)}>
                <div 
                  className={styles.projectImageWrapper}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectIcon}>
                      <FaEye />
                    </div>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{card.title}</h3>
                  <p className={styles.projectDescription}>{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className={styles.viewMoreContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/projects" className={styles.viewMoreButton}>
            {t.projects.viewMore}
          </Link>
        </motion.div>
      </div>

    </section>
  )
}

export default Projects

