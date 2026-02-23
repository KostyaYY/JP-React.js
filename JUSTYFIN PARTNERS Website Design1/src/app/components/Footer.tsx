import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>JUSTYFIN PARTNERS</h3>
            <p className={styles.footerDescription}>
              {t('Юридична експертиза. Бізнес-мислення. Результат.', 'Legal expertise. Commercial thinking. Results.')}
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>{t('НАВІГАЦІЯ', 'NAVIGATION')}</h4>
            <ul className={styles.footerNav}>
              <li className={styles.footerNavItem}>
                <Link to="/about" className={styles.footerLink}>{t('Про нас', 'About')}</Link>
              </li>
              <li className={styles.footerNavItem}>
                <Link to="/people" className={styles.footerLink}>{t('Команда', 'People')}</Link>
              </li>
              <li className={styles.footerNavItem}>
                <Link to="/services" className={styles.footerLink}>{t('Послуги', 'Services')}</Link>
              </li>
              <li className={styles.footerNavItem}>
                <Link to="/news" className={styles.footerLink}>{t('Новини', 'News')}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>{t('ПОСЛУГИ', 'SERVICES')}</h4>
            <ul className={styles.footerNav}>
              <li className={styles.footerNavItem}>
                <Link to="/services/corporate" className={styles.footerLink}>
                  {t('Корпоративне право', 'Corporate')}
                </Link>
              </li>
              <li className={styles.footerNavItem}>
                <Link to="/services/financial-regulation" className={styles.footerLink}>
                  {t('Фінансове регулювання', 'Financial Regulation')}
                </Link>
              </li>
              <li className={styles.footerNavItem}>
                <Link to="/services/fintech-lawyer" className={styles.footerLink}>
                  {t('Fintech-юрист', 'Fintech lawyer')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>{t('КОНТАКТИ', 'CONTACT')}</h4>
            <address className={styles.footerAddress}>
              <p>Dept 6515, 126 East Ferry Road,</p>
              <p>Canary Wharf, London,</p>
              <p>United Kingdom, E14 9FP</p>
              <p style={{ marginTop: '1rem' }}>
                <a href="mailto:info@justyfin.com">info@justyfin.com</a>
              </p>
              <p>
                <a href="tel:+442012345678">+44 20 1234 5678</a>
              </p>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2026 JUSTYFIN PARTNERS. {t('Всі права захищені.', 'All rights reserved.')}
          </p>
          <div className={styles.footerBottomLinks}>
            <Link to="/legal/privacy">
              {t('Конфіденційність', 'Privacy')}
            </Link>
            <Link to="/legal/cookies">
              {t('Cookies', 'Cookies')}
            </Link>
            <Link to="/legal/terms">
              {t('Умови', 'Terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}