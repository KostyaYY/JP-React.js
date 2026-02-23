import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/mockData';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import styles from './NewsInsights.module.css';

export function NewsInsights() {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Pagination calculations
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              {t('Новини та аналітика', 'News & Insights')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              {t(
                'Останні новини, аналітика та думки наших експертів',
                'Latest news, insights and expert opinions'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-8">
            {currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.newsCard}
              >
                <Link
                  to={`/news/${article.id}`}
                  className="group block"
                >
                  <article className={`bg-white border border-gray-200 p-8 md:p-12 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${styles.newsCardContent}`}>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                      <div className="flex-shrink-0 md:w-48">
                        <span className="text-xs tracking-widest text-gray-500 block mb-2">
                          {article.category}
                        </span>
                        <p className="text-xs tracking-widest text-gray-500">
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
                      <div className="flex-grow">
                        <h3 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-[#7f9ca8] transition-colors">
                          {language === 'ukr' ? article.title.ukr : article.title.eng}
                        </h3>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">
                          {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
                        </p>
                        <span className="text-sm tracking-wide inline-flex items-center gap-2 group-hover:gap-3 transition-all text-[#7f9ca8]">
                          {t('Читати далі', 'Read more')}
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 hover:border-gray-900 disabled:opacity-30 disabled:hover:border-gray-300 disabled:cursor-not-allowed transition-colors"
                aria-label={t('Попередня сторінка', 'Previous page')}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border transition-colors ${
                      currentPage === page
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-300 hover:border-gray-900 disabled:opacity-30 disabled:hover:border-gray-300 disabled:cursor-not-allowed transition-colors"
                aria-label={t('Наступна сторінка', 'Next page')}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}