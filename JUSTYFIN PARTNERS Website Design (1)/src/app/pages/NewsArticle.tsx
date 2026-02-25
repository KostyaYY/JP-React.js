import { useParams, Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/mockData';
import { Icons } from '../components/Icons';
import styles from './NewsArticle.module.css';

export function NewsArticle() {
  const { id } = useParams();
  const { t, language } = useLanguage();

  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <p>{t('Стаття не знайдена', 'Article not found')}</p>
        <Link to="/news">{t('Назад до новин', 'Back to news')}</Link>
      </div>
    );
  }

  return (
    <div className={styles.articlePage}>
      {/* Back Button */}
      <section className={styles.backSection}>
        <div className={styles.backContainer}>
          <Link to="/news" className={styles.backLink}>
            <Icons.ArrowLeft size={20} />
            {t('Назад до новин', 'Back to news')}
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
              <div className={styles.articleMeta}>
                <span className={styles.articleCategory}>
                  {article.category}
                </span>
                <time className={styles.articleDate}>
                  {new Date(article.date).toLocaleDateString(
                    language === 'ukr' ? 'uk-UA' : 'en-GB',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}
                </time>
              </div>
              <h1 className={styles.articleTitle}>
                {language === 'ukr' ? article.title.ukr : article.title.eng}
              </h1>
              <p className={styles.articleExcerpt}>
                {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className={styles.articleBody}>
          <div className={styles.bodyContainer}>
            <div className={styles.bodyContent}>
              <p>
                {language === 'ukr' ? article.content.ukr : article.content.eng}
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                {t('Потрібна консультація?', 'Need advice?')}
              </h2>
              <p className={styles.ctaDescription}>
                {t(
                  'Наші експерти готові відповісти на ваші запитання',
                  'Our experts are ready to answer your questions'
                )}
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                {t('Зв\'яжіться з нами', 'Contact us')}
                <Icons.ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
