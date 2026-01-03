import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Contact.module.css'

const ContactPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t.contact.email,
      value: 'info@mix.com',
      link: 'mailto:info@mix.com',
    },
    {
      icon: FaPhone,
      title: t.contact.phone,
      value: '+966 50 123 4567',
      link: 'tel:+966501234567',
    },
    {
      icon: FaMapMarkerAlt,
      title: t.contact.address,
      value: t.contact.addressValue,
      link: '#',
    },
    {
      icon: FaClock,
      title: t.contact.workingHours,
      value: t.contact.workingHoursValue,
      link: '#',
    },
  ]

  const socialIcons = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/yourpage', name: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/yourpage', name: 'Instagram' },
    { icon: FaTwitter, href: 'https://www.twitter.com/yourpage', name: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/yourpage', name: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/966501234567', name: 'WhatsApp' },
  ]

  return (
    <>
      <PageHero
        title={t.contact.title}
        description={t.contact.subtitle2}
      />
      <div className={styles.contactPage}>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            {/* Contact Info */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.infoTitle}>{t.contact.contactInfo}</h2>
              <p className={styles.infoDescription}>
                {t.contact.contactInfoDescription}
              </p>

              <div className={styles.infoItems}>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      className={styles.infoItem}
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={styles.infoIcon}>
                        <IconComponent />
                      </div>
                      <div className={styles.infoContent}>
                        <h3>{info.title}</h3>
                        <p>{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Media */}
              <div className={styles.socialMedia}>
                <h3>{t.contact.followUs}</h3>
                <div className={styles.socialIcons}>
                  {socialIcons.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.name}
                      >
                        <IconComponent />
                      </motion.a>
                    )
                  })}
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
              <h2 className={styles.formTitle}>{t.contact.sendMessage}</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t.contact.nameFull} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.nameFullPlaceholder}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">{t.contact.email} *</label>
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
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">{t.contact.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.phonePlaceholder}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t.contact.message} *</label>
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
    </div>
    </>
  )
}

export default ContactPage

