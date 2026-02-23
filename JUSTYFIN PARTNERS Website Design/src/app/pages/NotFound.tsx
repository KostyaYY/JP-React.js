import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import styles from './NotFound.module.css';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.notFoundDescription}>
          {t('Сторінку не знайдено', 'Page not found')}
        </p>
        <Link
          to="/"
          className={styles.notFoundButton}
        >
          {t('ПОВЕРНУТИСЯ НА ГОЛОВНУ', 'BACK TO HOME')}
        </Link>
      </div>
    </div>
  );
}