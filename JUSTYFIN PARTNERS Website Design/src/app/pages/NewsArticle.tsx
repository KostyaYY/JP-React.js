import { useParams, Link, Navigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/mockData';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import styles from './NewsArticle.module.css';

export function NewsArticle() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className={styles.newsArticlePage}>
      {/* Back Button */}
      <section className={styles.backSection}>
        <div className={styles.backContainer}>
          <Link
            to="/news"
            className={styles.backLink}
          >
            <ArrowLeft size={16} />
            {t('Назад до новин', 'Back to news')}
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className={styles.articleSection}>
        <div className={styles.articleContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>
                {article.category}
              </span>
              <p className={styles.articleDate}>
                {new Date(article.date).toLocaleDateString(
                  language === 'ukr' ? 'uk-UA' : 'en-GB',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </p>
            </div>

            <h1 className={styles.articleTitle}>
              {language === 'ukr' ? article.title.ukr : article.title.eng}
            </h1>

            <div className={styles.articleContent}>
              <p className={styles.articleExcerpt}>
                {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
              </p>

              <div className={styles.articleBody}>
                {(language === 'ukr' ? article.content.ukr : article.content.eng)
                  .split('\n')
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <h2 className={styles.relatedTitle}>
            {t('Інші статті', 'Related articles')}
          </h2>
          <div className={styles.relatedGrid}>
            {newsArticles
              .filter(a => a.id !== id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}`}
                  className={styles.relatedCard}
                >
                  <p className={styles.relatedCardDate}>
                    {new Date(relatedArticle.date).toLocaleDateString(
                      language === 'ukr' ? 'uk-UA' : 'en-GB',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }
                    )}
                  </p>
                  <h3 className={styles.relatedCardTitle}>
                    {language === 'ukr' ? relatedArticle.title.ukr : relatedArticle.title.eng}
                  </h3>
                  <p className={styles.relatedCardExcerpt}>
                    {language === 'ukr' ? relatedArticle.excerpt.ukr : relatedArticle.excerpt.eng}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}