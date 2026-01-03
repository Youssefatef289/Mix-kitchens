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

  // Show only first 3 projects
  const displayedProjects = projectsData.slice(0, 3)

  const handleImageClick = (project, index) => {
    setSelectedIndex(index)
    setSelectedImage({
      image: project.image,
      title: project.title,
    })
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    if (selectedIndex < displayedProjects.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedImage({
        image: displayedProjects[nextIndex].image,
        title: displayedProjects[nextIndex].title,
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedImage({
        image: displayedProjects[prevIndex].image,
        title: displayedProjects[prevIndex].title,
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

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
            >
              <div 
                className={styles.projectImageWrapper}
                onClick={() => handleImageClick(project, index)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
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
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
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

      {/* Image Modal */}
      <ImageModal
        image={selectedImage?.image}
        title={selectedImage?.title}
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={selectedIndex < displayedProjects.length - 1}
        hasPrev={selectedIndex > 0}
      />
    </section>
  )
}

export default Projects

