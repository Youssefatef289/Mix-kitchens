import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import styles from './PageHero.module.css'

const PageHero = ({ title, description, backgroundImage }) => {
  const bgImage = backgroundImage || '/image/hero (1).jpeg'

  return (
    <>
      <Navbar hasHero={true} />
      <section className={styles.pageHero}>
        {/* Background Image with Overlay */}
        <div className={styles.heroBackground}>
          <img
            src={bgImage}
            alt={title}
            className={styles.heroImage}
          />
          <div className={styles.overlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </section>
    </>
  )
}

export default PageHero

