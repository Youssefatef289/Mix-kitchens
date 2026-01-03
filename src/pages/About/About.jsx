import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaStar, 
  FaTools,
  FaTrophy,
  FaPalette,
  FaDollarSign,
  FaHandshake,
  FaShieldAlt
} from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import PageHero from '../../components/PageHero/PageHero'
import styles from './About.module.css'

// Map emoji icons to real icons
const iconMap = {
  '🏆': FaTrophy,
  '⭐': FaStar,
  '🎨': FaPalette,
  '💰': FaDollarSign,
  '🤝': FaHandshake,
  '🛡️': FaShieldAlt,
}

const AboutPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const stats = [
    { number: '15+', label: t.about.stats.years, icon: FaCalendarAlt },
    { number: '500+', label: t.about.stats.projects, icon: FaCheckCircle },
    { number: '98%', label: t.about.stats.satisfaction, icon: FaStar },
    { number: '24/7', label: t.about.stats.support, icon: FaTools },
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
    <>
      <PageHero
        title={t.about.title}
        description={t.about.description1.split('.')[0] + '.'}
      />
      <div className={styles.aboutPage}>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          {/* About Text */}
          <motion.div
            className={styles.aboutSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className={styles.textContent} variants={itemVariants}>
              <h2 className={styles.sectionTitle}>{t.about.story}</h2>
              <p className={styles.description}>
                {t.about.description1}
              </p>
              <p className={styles.description}>
                {t.about.description2}
              </p>
              <p className={styles.description}>
                {t.about.description3}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className={styles.statsGrid}
              variants={containerVariants}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className={styles.statCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={styles.statIcon}>
                      <IconComponent />
                    </div>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className={styles.featuresSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h2 className={styles.sectionTitle}>{t.about.features}</h2>
            <div className={styles.featuresGrid}>
              {t.whyChooseUs.features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || FaStar
                return (
                  <motion.div
                    key={feature.id}
                    className={styles.featureCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={styles.featureIcon}>
                      <IconComponent />
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AboutPage

