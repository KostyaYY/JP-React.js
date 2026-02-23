import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import styles from './About.module.css';

export function About() {
  const { t } = useLanguage();

  const advantages = [
    {
      title: {
        ukr: 'Непохитна орієнтація на клієнта',
        eng: 'Strong client focus'
      },
      description: {
        ukr: 'У кожному проєкті ми діємо з повним розумінням пріоритетів клієнта та важливості його завдань. Використовуючи наш досвід, експертизу та ресурси, працюємо швидко, злагоджено й результативно, допомагаючи досягати поставлених бізнес-цілей.',
        eng: 'In every project, we work with a full understanding of our clients\' priorities and the importance of their objectives. Leveraging our experience, expertise, and resources, we act quickly, in a coordinated manner, and with a strong results-oriented mindset to help achieve business goals.'
      }
    },
    {
      title: {
        ukr: 'Неперервна якість',
        eng: 'Consistent quality'
      },
      description: {
        ukr: 'Ми поєднуємо глибоку експертизу та широку професійну базу, щоб вирішувати юридичні та бізнес-завдання з точністю, чіткістю та системністю.',
        eng: 'We combine deep expertise with a broad professional base to address legal and business challenges with precision, clarity, and structure.'
      }
    },
    {
      title: {
        ukr: 'Справжнє партнерство',
        eng: 'True partnership'
      },
      description: {
        ukr: 'Ми глибоко занурюємося у специфіку вашого бізнесу, його цілі та стратегію, щоб наші рекомендації відповідали не лише юридичним потребам, а й сприяли стабільному розвитку та успіху компанії. Ми працюємо як єдина команда, поєднуючи експертизу та зусилля, щоб забезпечити стабільну, якісну та системну підтримку кожному клієнту.',
        eng: 'We immerse ourselves in the specifics of your business, its goals, and strategy to ensure our recommendations meet not only legal needs but also contribute to sustainable development and long-term success. We work as one team, combining expertise and efforts to provide reliable, high-quality, and systematic support to every client.'
      }
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.sectionLabel}>
              {t('ПРО НАС', 'ABOUT US')}
            </p>
            <h1 className={styles.heroTitle}>
              {t('Ми змінюємо уявлення про юридичні послуги', 'We\'re a different kind of law firm')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.overviewContainer}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewColumn}>
              <h2>
                {t('ПРО КОМПАНІЮ', 'OVERVIEW')}
              </h2>
              <div className={styles.textContent}>
                <p>
                  {t(
                    'Ми — сучасна юридична фірма, що мислить стратегічно та працює на випередження, надаючи комплексні правові рішення для підприємців, інвесторів і компаній різних галузей.',
                    'We are a modern, forward-thinking law firm delivering comprehensive legal solutions for entrepreneurs, investors, and businesses across industries.'
                  )}
                </p>
                <p>
                  {t(
                    'Наш підхід поєднує інноваційність і надійність: ми використовуємо креативне мислення разом із юридичною точністю, щоб створювати ефективні, практичні та бізнес-орієнтовані рішення для розвитку, захисту й масштабування вашої діяльності.',
                    'Our approach combines innovation with reliability — blending creative thinking and legal precision to develop effective, practical, and business-oriented solutions that support the growth, protection, and scaling of your operations.'
                  )}
                </p>
              </div>
            </div>

            <div className={styles.overviewColumn}>
              <div className={styles.textContent}>
                <p>
                  {t(
                    'Ми об\'єднуємо провідних юридичних фахівців у ключових юрисдикціях, щоб супроводжувати стратегічні угоди та підтримувати бізнес-ініціативи, що мають критичне значення для наших клієнтів. Досвід роботи на перетині комерційних, фінансових і правових інновацій дозволяє нам досягати результатів, які сприяють стабільному довгостроковому розвитку бізнесу.',
                    'We bring together leading legal professionals across key jurisdictions to support strategic transactions and business initiatives that are critical to our clients. Our experience at the intersection of commercial, financial, and legal innovation enables us to deliver results that support stable, long-term business growth.'
                  )}
                </p>
                <p>
                  {t(
                    'Наш підхід ґрунтується на безкомпромісній якості, культурі співпраці та чітких цінностях, що визначають наші рішення, стиль роботи й відповідальність перед клієнтами.',
                    'Our approach is built on uncompromising quality, a culture of collaboration, and clear values that guide our decisions, working style, and responsibility to clients.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className={styles.advantagesSection}>
        <div className={styles.advantagesContainer}>
          <div className={styles.advantagesHeader}>
            <h2>
              {t('ПЕРЕВАГИ JUSTYFIN PARTNERS', 'JUSTYFIN PARTNERS — ADVANTAGES')}
            </h2>
          </div>

          <div className={styles.advantagesGrid}>
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.advantageCard}
              >
                <h3 className={styles.advantageTitle}>
                  {t(advantage.title.ukr, advantage.title.eng)}
                </h3>
                <p className={styles.advantageDescription}>
                  {t(advantage.description.ukr, advantage.description.eng)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className={styles.closingSection}>
        <div className={styles.closingContainer}>
          <div className={styles.closingInner}>
            <h2 className={styles.closingTitle}>
              {t(
                'Компанія, що формує успіх своїх клієнтів',
                'A company with the power to shape our clients\' fortunes'
              )}
            </h2>
            <div className={styles.closingContent}>
              <p>
                {t(
                  'Наш досвід і експертиза дозволяють нам бути партнером, який впливає на розвиток і результати бізнесу клієнтів завдяки глибокому розумінню бізнесу, стратегічному підходу та ефективним рішенням.',
                  'Our experience and expertise allow us to be a partner that supports business growth and results through a deep understanding of our clients\' needs, a strategic approach, and effective solutions.'
                )}
              </p>
              <p>
                {t(
                  'Ми — ваш надійний партнер, завжди поруч, де б ви не працювали.',
                  'We are your trusted partner, always by your side wherever you operate.'
                )}
              </p>
              <p>
                {t(
                  'Ми поєднуємо професійні знання з комерційним баченням, щоб допомогти бізнесу зростати, трансформуватися та розвиватися.',
                  'We combine professional knowledge with commercial insight to help businesses grow, transform, and move forward.'
                )}
              </p>
              <p>
                {t(
                  'Ми працюємо в галузях і регіонах, які важливі саме для вас. Діємо як єдина команда, передбачаємо потреби та швидко реагуємо.',
                  'We work in the industries and regions that matter most to you. Acting as one team, we anticipate needs and respond quickly.'
                )}
              </p>
              <p className={styles.closingHighlight}>
                {t(
                  'Саме так ми створюємо вашу конкурентну перевагу.',
                  'This is how we create your competitive advantage.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}