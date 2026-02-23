import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Header.module.css';
import { services } from '../data/mockData';
import { useSearchParams, useNavigate } from 'react-router';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check if menu should be opened from URL parameter
  useEffect(() => {
    if (searchParams.get('menu') === 'open') {
      setMenuOpen(true);
      // Remove the menu parameter from URL
      navigate('/', { replace: true });
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuItems = [
    { path: '/about', label: { ukr: 'Про нас', eng: 'About' } },
    { path: '/people', label: { ukr: 'Команда', eng: 'People' } },
    { path: '/news', label: { ukr: 'Новини та аналітика', eng: 'News & Insights' } },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.logo}>
              JUSTYFIN PARTNERS
            </Link>

            <div className={styles.headerActions}>
              <Link to="/contact" className={styles.contactLink}>
                {t('КОНТАКТИ', 'CONTACT')}
              </Link>

              <div className={styles.langSwitcher}>
                <button
                  onClick={() => setLanguage('ukr')}
                  className={`${styles.langButton} ${language === 'ukr' ? styles.active : styles.inactive}`}
                >
                  UKR
                </button>
                <span className={styles.langSeparator}>/</span>
                <button
                  onClick={() => setLanguage('eng')}
                  className={`${styles.langButton} ${language === 'eng' ? styles.active : styles.inactive}`}
                >
                  ENG
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.menuButton}
                aria-label="Toggle menu"
              >
                <span className={styles.menuButtonText}>{t('МЕНЮ', 'MENU')}</span>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.menuOverlay}
          >
            <div className={styles.menuContent}>
              <div className={styles.menuContainer}>
                <div className={styles.menuGrid}>
                  <div>
                    <div className={styles.menuSection}>
                      <h3 className={styles.menuSectionTitle}>
                        {t('НАВІГАЦІЯ', 'NAVIGATION')}
                      </h3>
                      <ul className={styles.menuNav}>
                        {menuItems.map((item, index) => (
                          <motion.li
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={styles.menuNavItem}
                          >
                            <Link
                              to={item.path}
                              className={styles.menuNavLink}
                              onClick={() => setMenuOpen(false)}
                            >
                              {language === 'ukr' ? item.label.ukr : item.label.eng}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className={styles.menuSection}
                    >
                      <h3 className={styles.menuSectionTitle}>
                        {t('ПОСЛУГИ', 'SERVICES')}
                      </h3>
                      <ul className={styles.menuServicesNav}>
                        {services.map((service, index) => (
                          <motion.li
                            key={service.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.03 }}
                            className={styles.menuServiceItem}
                          >
                            <Link
                              to={`/services/${service.id}`}
                              className={styles.menuServiceLink}
                              onClick={() => setMenuOpen(false)}
                            >
                              {language === 'ukr' ? service.ukr : service.eng}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}