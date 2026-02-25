import { useParams, Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/mockData';
import { Icons } from '../components/Icons';
import styles from './ServiceDetail.module.css';

export function ServiceDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();

  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <p>{t('Послугу не знайдено', 'Service not found')}</p>
        <Link to="/">{t('Назад на головну', 'Back to home')}</Link>
      </div>
    );
  }

  const serviceName = language === 'ukr' ? service.ukr : service.eng;

  // Mock content for services
  const serviceDescription = {
    ukr: `Наша команда має глибокий досвід у сфері ${service.ukr.toLowerCase()}. Ми надаємо комплексні юридичні рішення, які допомагають нашим клієнтам досягати їхніх бізнес-цілей.`,
    eng: `Our team has deep experience in ${service.eng.toLowerCase()}. We provide comprehensive legal solutions that help our clients achieve their business goals.`
  };

  const benefits = [
    {
      ukr: 'Експертний підхід',
      eng: 'Expert Approach'
    },
    {
      ukr: 'Індивідуальні рішення',
      eng: 'Tailored Solutions'
    },
    {
      ukr: 'Комплексна підтримка',
      eng: 'Comprehensive Support'
    },
    {
      ukr: 'Міжнародний досвід',
      eng: 'International Experience'
    }
  ];

  return (
    <div className={styles.servicePage}>
      {/* Back Button */}
      <section className={styles.backSection}>
        <div className={styles.backContainer}>
          <Link to="/?menu=open" className={styles.backLink}>
            <Icons.ArrowLeft size={20} />
            {t('Всі послуги', 'All services')}
          </Link>
        </div>
      </section>

      {/* Service Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{serviceName}</h1>
            <p className={styles.heroDescription}>
              {language === 'ukr' ? serviceDescription.ukr : serviceDescription.eng}
            </p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>
                {t('Опис послуги', 'Service Description')}
              </h2>
              <div className={styles.textContent}>
                <p>
                  {t(
                    `Ми пропонуємо повний спектр послуг у галузі ${service.ukr.toLowerCase()}, включаючи консультування, супровід угод та вирішення спорів. Наша команда експертів має багаторічний досвід роботи з провідними компаніями різних галузей.`,
                    `We offer a full range of services in ${service.eng.toLowerCase()}, including advisory, transaction support and dispute resolution. Our team of experts has many years of experience working with leading companies across various industries.`
                  )}
                </p>
                <p>
                  {t(
                    'Ми розуміємо специфіку вашого бізнесу та пропонуємо рішення, які відповідають вашим конкретним потребам. Наш підхід базується на поєднанні юридичної експертизи та комерційного розуміння.',
                    'We understand the specifics of your business and offer solutions that meet your specific needs. Our approach is based on combining legal expertise with commercial understanding.'
                  )}
                </p>
              </div>

              <h2 className={styles.sectionTitle}>
                {t('Переваги співпраці', 'Benefits of Working with Us')}
              </h2>
              <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <Icons.CheckCircle size={24} />
                    </div>
                    <div className={styles.benefitText}>
                      {language === 'ukr' ? benefit.ukr : benefit.eng}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.contactCard}>
                <h3 className={styles.contactCardTitle}>
                  {t('Потрібна консультація?', 'Need advice?')}
                </h3>
                <p className={styles.contactCardText}>
                  {t(
                    'Зв\'яжіться з нами, щоб обговорити ваш проєкт',
                    'Contact us to discuss your project'
                  )}
                </p>
                <Link to="/contact" className={styles.contactButton}>
                  {t('Зв\'яжіться з нами', 'Contact us')}
                  <Icons.ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
