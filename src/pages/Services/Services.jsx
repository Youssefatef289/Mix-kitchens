import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaHome, 
  FaTree, 
  FaStar, 
  FaPalette, 
  FaTools, 
  FaBolt 
} from 'react-icons/fa'
import PageHero from '../../components/PageHero/PageHero'
import servicesData from '../../data/services.json'
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

const ServicesPage = () => {
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
    <>
      <PageHero
        title="خدماتنا"
        description="نقدم مجموعة شاملة من الخدمات لتحويل منزلك إلى مساحة فاخرة وأنيقة"
      />
      <div className={styles.servicesPage}>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
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

          {/* CTA Section */}
          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>جاهز لبدء مشروعك؟</h2>
            <p className={styles.ctaDescription}>
              تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              تواصل معنا الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ServicesPage

