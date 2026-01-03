import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import styles from './Contact.module.css'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (no real backend)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.contact.subtitle2}
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>{t.contact.contactInfo}</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div>
                <h4>{t.contact.email}</h4>
                <p>info@mix.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <div>
                <h4>{t.contact.phone}</h4>
                <p>+966 50 123 4567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>{t.contact.address}</h4>
                <p>{t.contact.addressValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FaClock />
              </div>
              <div>
                <h4>{t.contact.workingHours}</h4>
                <p>{t.contact.workingHoursValue}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? t.contact.sending : t.contact.sendMessageBtn}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t.contact.successFull}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

