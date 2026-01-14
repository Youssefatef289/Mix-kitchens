import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaTrophy,
  FaStar,
  FaPalette,
  FaDollarSign,
  FaHandshake,
  FaShieldAlt
} from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './WhyChooseUs.module.css'

// Map emoji icons to real icons
const iconMap = {
  '🏆': FaTrophy,
  '⭐': FaStar,
  '🎨': FaPalette,
  '💰': FaDollarSign,
  '🤝': FaHandshake,
  '🛡️': FaShieldAlt,
}

const WhyChooseUs = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const featuresData = t.whyChooseUs.features
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="why-choose-us" className={styles.whyChooseUs}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className={styles.sectionTitle}>{t.whyChooseUs.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.whyChooseUs.subtitle}
          </p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature) => {
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
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

