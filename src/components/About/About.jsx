import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './About.module.css'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const stats = [
    { number: '15+', label: t.about.stats.years },
    { number: '500+', label: t.about.stats.projects },
    { number: '98%', label: t.about.stats.satisfaction },
    { number: '24/7', label: t.about.stats.support },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className={styles.textContent} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            <p className={styles.description}>
              {t.about.description1}
            </p>
            <p className={styles.description}>
              {t.about.description2}
            </p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

