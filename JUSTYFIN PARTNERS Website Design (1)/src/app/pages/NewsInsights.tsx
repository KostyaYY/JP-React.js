import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/mockData';
import { Link } from 'react-router';
import { Icons } from '../components/Icons';
import { useState } from 'react';
import styles from './NewsInsights.module.css';

export function NewsInsights() {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

  return (
    <div className={styles.newsInsightsPage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {t('Новини та аналітика', 'News & Insights')}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                'Останні новини законодавства, аналіз змін та експертна думка',
                'Latest legal news, analysis of changes and expert opinion'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesContainer}>
          <div className={styles.articlesGrid}>
            {currentArticles.map((article, index) => (
              <div
                key={article.id}
                className={`${styles.newsCard} ${styles.fadeIn}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={`/news/${article.id}`}
                  className={styles.newsCardLink}
                >
                  <article className={styles.newsCardContent}>
                    <div className={styles.newsCardInner}>
                      <div className={styles.newsCardMeta}>
                        <span className={styles.newsCategory}>
                          {article.category}
                        </span>
                        <p className={styles.newsDate}>
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
                      <div className={styles.newsCardBody}>
                        <h3 className={styles.newsTitle}>
                          {language === 'ukr' ? article.title.ukr : article.title.eng}
                        </h3>
                        <p className={styles.newsExcerpt}>
                          {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
                        </p>
                        <span className={styles.readMore}>
                          {t('Читати далі', 'Read more')}
                          <Icons.ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.paginationButton}
                aria-label="Previous page"
              >
                <Icons.ChevronLeft size={20} />
              </button>

              <div className={styles.paginationNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${styles.paginationNumber} ${page === currentPage ? styles.active : ''}`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
                aria-label="Next page"
              >
                <Icons.ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
