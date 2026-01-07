import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import Videos from '../../components/Videos/Videos'
import PageHero from '../../components/PageHero/PageHero'
import projectsData from '../../data/projects.json'
import kitchenProjectsData from '../../data/kitchenProjects.json'
import styles from './Projects.module.css'

const ProjectsPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: t.projects.all },
    { id: 'kitchen', name: t.projects.kitchens || 'المطابخ' },
    { id: 'aluminum', name: t.projects.aluminum },
    { id: 'wooden', name: t.projects.wooden },
    { id: 'interior', name: t.projects.interior },
  ]

  // Combine kitchen projects with regular projects
  const allProjects = filter === 'kitchen' 
    ? kitchenProjectsData 
    : projectsData

  const filteredProjects =
    filter === 'all'
      ? [...kitchenProjectsData, ...projectsData]
      : filter === 'kitchen'
      ? kitchenProjectsData
      : allProjects.filter((project) => project.category === filter)


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
                  <Link to={`/projects/${project.id}`}>
                    <div 
                      className={styles.projectImageWrapper}
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
                  </Link>
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
    </div>
    </>
  )
}

export default ProjectsPage

