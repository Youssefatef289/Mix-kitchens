import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import Videos from '../../components/Videos/Videos'
import PageHero from '../../components/PageHero/PageHero'
import kitchenProjectsData from '../../data/kitchenProjects.json'
import styles from './Projects.module.css'

const ProjectsPage = () => {
  const { language } = useLanguage()
  const t = translations[language]

  // Display only kitchen projects
  const projects = kitchenProjectsData

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
        title={t.projects.kitchens || 'المطابخ'}
        description={t.projects.kitchensDescription || 'استكشف مجموعتنا المتنوعة من المطابخ الفاخرة'}
      />
      <div className={styles.projectsPage}>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          {/* Projects Grid */}
          <motion.div
            className={styles.projectsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
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

          {projects.length === 0 && (
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
