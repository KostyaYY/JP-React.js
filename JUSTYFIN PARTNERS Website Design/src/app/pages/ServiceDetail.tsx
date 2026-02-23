import { useParams, Link, Navigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/mockData';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import styles from './ServiceDetail.module.css';

export function ServiceDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/?menu=open" replace />;
  }

  const serviceName = language === 'ukr' ? service.ukr : service.eng;

  return (
    <div className={styles.serviceDetailPage}>
      {/* Back Button */}
      <section className={styles.backSection}>
        <div className={styles.backContainer}>
          <Link
            to="/?menu=open"
            className={styles.backLink}
          >
            <ArrowLeft size={16} />
            {t('Назад до меню', 'Back to menu')}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              {serviceName}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                'Експертні рішення, адаптовані під ваші потреби',
                'Expert solutions tailored to your needs'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            <div>
              <h2 className={styles.sectionTitle}>
                {t('ОГЛЯД ПОСЛУГИ', 'SERVICE OVERVIEW')}
              </h2>
              <div className={styles.textContent}>
                <p>
                  {t(
                    `Наша команда спеціалізується на наданні послуг у сфері "${serviceName}" та має багаторічний досвід роботи з клієнтами різних галузей.`,
                    `Our team specializes in providing "${serviceName}" services and has many years of experience working with clients from various industries.`
                  )}
                </p>
                <p>
                  {t(
                    'Ми розуміємо, що кожен клієнт унікальний, тому розробляємо індивідуальні рішення, які відповідають конкретним бізнес-цілям та викликам.',
                    'We understand that each client is unique, so we develop individual solutions that meet specific business goals and challenges.'
                  )}
                </p>
                <p>
                  {t(
                    'Наш підхід базується на поєднанні глибокої юридичної експертизи з практичним розумінням бізнесу, що дозволяє нам забезпечувати оптимальні результати для наших клієнтів.',
                    'Our approach is based on combining deep legal expertise with practical business understanding, enabling us to deliver optimal results for our clients.'
                  )}
                </p>
              </div>
            </div>

            <div>
              <h2 className={styles.sectionTitle}>
                {t('ЩО МИ ПРОПОНУЄМО', 'WHAT WE OFFER')}
              </h2>
              <div className={styles.offeringsList}>
                {[
                  t('Комплексний аналіз та консультування', 'Comprehensive analysis and advisory'),
                  t('Підготовка необхідної документації', 'Preparation of required documentation'),
                  t('Супровід на всіх етапах процесу', 'Support at all stages of the process'),
                  t('Взаємодія з регуляторами та іншими сторонами', 'Interaction with regulators and other parties'),
                  t('Постійна підтримка після завершення проекту', 'Ongoing support after project completion')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.offeringItem}
                  >
                    <CheckCircle className={styles.offeringIcon} size={20} />
                    <p className={styles.offeringText}>{item}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className={styles.ctaButton}
              >
                {t('ОБГОВОРИТИ ПРОЕКТ', 'DISCUSS YOUR PROJECT')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          <h2 className={styles.whyChooseTitle}>
            {t('Чому обирають нас', 'Why choose us')}
          </h2>
          <div className={styles.whyChooseGrid}>
            {[
              {
                title: t('Експертиза', 'Expertise'),
                desc: t('Багаторічний досвід та глибокі знання', 'Years of experience and deep knowledge')
              },
              {
                title: t('Результат', 'Results'),
                desc: t('Орієнтація на досягнення бізнес-цілей', 'Focus on achieving business goals')
              },
              {
                title: t('Підтримка', 'Support'),
                desc: t('Постійна доступність та супровід', 'Constant availability and support')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.whyChooseCard}
              >
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}