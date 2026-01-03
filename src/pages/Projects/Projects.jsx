import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import ImageModal from '../../components/ImageModal/ImageModal'
import Videos from '../../components/Videos/Videos'
import PageHero from '../../components/PageHero/PageHero'
import projectsData from '../../data/projects.json'
import styles from './Projects.module.css'

const ProjectsPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const categories = [
    { id: 'all', name: t.projects.all },
    { id: 'aluminum', name: t.projects.aluminum },
    { id: 'wooden', name: t.projects.wooden },
    { id: 'interior', name: t.projects.interior },
  ]

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter)

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
    if (selectedIndex < filteredProjects.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedImage({
        image: filteredProjects[nextIndex].image,
        title: filteredProjects[nextIndex].title,
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedImage({
        image: filteredProjects[prevIndex].image,
        title: filteredProjects[prevIndex].title,
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
        title={t.projects.title}
        description={t.projects.subtitle2}
      />
      <div className={styles.projectsPage}>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          {/* Filter Buttons */}
          <motion.div
            className={styles.filterButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  filter === category.id ? styles.active : ''
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.projectsGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={filter}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={styles.projectCard}
                  variants={itemVariants}
                  layout
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
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className={styles.noProjects}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>{t.projects.noProjects}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Videos Section */}
      <Videos showAll={true} />

      {/* Image Modal */}
      <ImageModal
        image={selectedImage?.image}
        title={selectedImage?.title}
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={selectedIndex < filteredProjects.length - 1}
        hasPrev={selectedIndex > 0}
      />
    </div>
    </>
  )
}

export default ProjectsPage

