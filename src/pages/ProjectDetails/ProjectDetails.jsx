import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowLeft, FaPhone, FaEye } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'
import PageHero from '../../components/PageHero/PageHero'
import ImageModal from '../../components/ImageModal/ImageModal'
import projectsData from '../../data/projects.json'
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mainImageIndex, setMainImageIndex] = useState(0)
  
  const project = projectsData.find(p => p.id === parseInt(id))
  
  // Get all images for this project (use images array if available, otherwise use single image)
  const projectImages = project?.images && project.images.length > 0 
    ? [project.image, ...project.images] 
    : project?.image 
      ? [project.image] 
      : []
  
  // Main displayed image
  const mainImage = projectImages[mainImageIndex] || projectImages[0]
  
  // Get related projects (same category, excluding current)
  const relatedProjects = projectsData
    .filter(p => p.category === project?.category && p.id !== project?.id)
    .slice(0, 3)

  const handleImageClick = (image, index) => {
    setSelectedIndex(index)
    setSelectedImage({
      image: image,
      title: project?.title || '',
    })
  }

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    if (selectedIndex < projectImages.length - 1) {
      const nextIndex = selectedIndex + 1
      setSelectedIndex(nextIndex)
      setSelectedImage({
        image: projectImages[nextIndex],
        title: project?.title || '',
      })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1
      setSelectedIndex(prevIndex)
      setSelectedImage({
        image: projectImages[prevIndex],
        title: project?.title || '',
      })
    }
  }

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>{t.projects.notFound || 'المشروع غير موجود'}</h2>
        <Link to="/projects" className={styles.backButton}>
          {t.projects.backToProjects || 'العودة إلى المشاريع'}
        </Link>
      </div>
    )
  }

  const getCategoryName = (category) => {
    const categories = {
      aluminum: t.projects.aluminum,
      wooden: t.projects.wooden,
      interior: t.projects.interior,
    }
    return categories[category] || category
  }

  return (
    <>
      <PageHero
        title={project.title}
        description={getCategoryName(project.category)}
      />
      <div className={styles.projectDetailsPage}>
        {/* Main Content Section: Image + Info Side by Side */}
        <section className={styles.mainContentSection}>
          <div className={styles.container}>
            <div className={styles.mainContentWrapper}>
              {/* Main Image */}
              {projectImages.length > 0 && (
                <motion.div
                  key={mainImageIndex}
                  className={styles.mainImageWrapper}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={mainImage}
                    alt={project.title}
                    className={styles.mainImage}
                    onClick={() => handleImageClick(mainImage, mainImageIndex)}
                    style={{ cursor: 'pointer' }}
                  />
                </motion.div>
              )}

              {/* Project Info */}
              <motion.div
                className={styles.projectInfo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.projectHeader}>
                  <h1 className={styles.projectTitle}>{project.title}</h1>
                  <span className={styles.projectCategory}>
                    {getCategoryName(project.category)}
                  </span>
                </div>

                <div className={styles.projectDescription}>
                  <p>
                    {t.projects.detailsDescription || 'هذا المشروع يمثل مثالاً رائعاً على جودة أعمالنا وإبداعنا في تصميم وتنفيذ المطابخ الفاخرة. تم تنفيذ هذا المشروع بأعلى معايير الجودة والأناقة.'}
                  </p>
                </div>

                {project.materials && (
                  <div className={styles.projectMaterials}>
                    <h3>{t.projects.materials || 'المواد المستخدمة'}</h3>
                    <p className={styles.materialsText}>
                      {project.materials}
                    </p>
                  </div>
                )}

                <div className={styles.projectFeatures}>
                  <h3>{t.projects.features || 'مميزات المشروع'}</h3>
                  <ul>
                    <li>{t.projects.feature1 || 'تصميم عصري وأنيق'}</li>
                    <li>{t.projects.feature2 || 'مواد عالية الجودة'}</li>
                    <li>{t.projects.feature3 || 'تنفيذ احترافي'}</li>
                    <li>{t.projects.feature4 || 'ضمان شامل'}</li>
                  </ul>
                </div>

                <motion.a
                  href="tel:01008705606"
                  className={styles.contactButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone /> {t.nav.ctaWithPhone}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        {projectImages.length > 1 && (
          <section className={styles.gallerySection}>
            <div className={styles.container}>
              <motion.div
                className={styles.galleryGrid}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {projectImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`${styles.galleryItem} ${mainImageIndex === index ? styles.activeThumbnail : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className={styles.galleryImage}
                    />
                    <div className={styles.galleryOverlay}>
                      <FaEye className={styles.galleryIcon} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <motion.h2
                className={styles.relatedTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.projects.relatedProjects || 'مشاريع ذات صلة'}
              </motion.h2>
              <div className={styles.relatedGrid}>
                {relatedProjects.map((relatedProject) => (
                  <motion.div
                    key={relatedProject.id}
                    className={styles.relatedCard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Link to={`/projects/${relatedProject.id}`}>
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className={styles.relatedImage}
                      />
                      <div className={styles.relatedInfo}>
                        <h3>{relatedProject.title}</h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          <motion.button
            onClick={() => navigate('/projects')}
            className={styles.navButton}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowRight /> {t.projects.backToProjects || 'العودة إلى المشاريع'}
          </motion.button>
        </div>

        {/* Image Modal */}
        <ImageModal
          image={selectedImage?.image}
          title={selectedImage?.title}
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex < projectImages.length - 1}
          hasPrev={selectedIndex > 0}
        />
      </div>
    </>
  )
}

export default ProjectDetails

