import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaTree, 
  FaStar, 
  FaPalette, 
  FaTools, 
  FaBolt 
} from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './Services.module.css'

// Map emoji icons to real icons
const iconMap = {
  '🏠': FaHome,
  '🌳': FaTree,
  '✨': FaStar,
  '🎨': FaPalette,
  '🔧': FaTools,
  '⚡': FaBolt,
}

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const servicesData = t.services.items
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>{t.services.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || FaHome
            return (
              <motion.div
                key={service.id}
                className={styles.serviceCard}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className={styles.serviceIcon}>
                  <IconComponent />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <div className={styles.serviceHoverEffect}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

