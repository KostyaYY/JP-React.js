import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import styles from './Legal.module.css';

export function CookiePolicy() {
  const { t } = useLanguage();

  return (
    <div className={styles.legalPage}>
      <section className={styles.legalSection}>
        <div className={styles.legalContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.legalTitle}>
              {t('Політика cookies', 'Cookie Policy')}
            </h1>

            <div className={styles.legalContent}>
              <p className={styles.lastUpdated}>
                {t('Останнє оновлення: 13 лютого 2026', 'Last updated: February 13, 2026')}
              </p>

              <section className={styles.legalSection}>
                <h2 className={styles.legalSectionTitle}>
                  {t('1. Що таке cookies', '1. What are Cookies')}
                </h2>
                <p>
                  {t(
                    'Cookies — це невеликі текстові файли, які зберігаються на вашому пристрої при відвідуванні веб-сайту. Вони допомагають веб-сайту запам\'ятовувати інформацію про ваш візит.',
                    'Cookies are small text files that are stored on your device when you visit a website. They help the website remember information about your visit.'
                  )}
                </p>
              </section>

              <section className={styles.legalSection}>
                <h2 className={styles.legalSectionTitle}>
                  {t('2. Типи cookies', '2. Types of Cookies')}
                </h2>
                <p>
                  {t(
                    'Ми використовуємо наступні типи cookies: необхідні cookies (для функціонування сайту), аналітичні cookies (для покращення роботи сайту), функціональні cookies (для запам\'ятовування ваших налаштувань).',
                    'We use the following types of cookies: essential cookies (for site functionality), analytics cookies (to improve site performance), functional cookies (to remember your preferences).'
                  )}
                </p>
              </section>

              <section className={styles.legalSection}>
                <h2 className={styles.legalSectionTitle}>
                  {t('3. Управління cookies', '3. Managing Cookies')}
                </h2>
                <p>
                  {t(
                    'Ви можете контролювати та/або видаляти cookies за бажанням через налаштування вашого браузера. Однак, деякі функції сайту можуть не працювати належним чином без cookies.',
                    'You can control and/or delete cookies as you wish through your browser settings. However, some site features may not work properly without cookies.'
                  )}
                </p>
              </section>

              <section className={styles.legalSection}>
                <h2 className={styles.legalSectionTitle}>
                  {t('4. Контакти', '4. Contact')}
                </h2>
                <p>
                  {t(
                    'Якщо у вас є питання щодо використання cookies, будь ласка, зв\'яжіться з нами: info@justyfin.com',
                    'If you have any questions about the use of cookies, please contact us: info@justyfin.com'
                  )}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}