import { useParams, Link, Navigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/mockData';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export function NewsArticle() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-8 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={16} />
            {t('Назад до новин', 'Back to news')}
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-xs tracking-widest text-gray-500 mb-4 block">
                {article.category}
              </span>
              <p className="text-sm text-gray-500 mb-6">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              {language === 'ukr' ? article.title.ukr : article.title.eng}
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
              </p>

              <div className="text-gray-700 leading-relaxed space-y-4">
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
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-8">
            {t('Інші статті', 'Related articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles
              .filter(a => a.id !== id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}`}
                  className="block bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs tracking-widest text-gray-500 mb-3">
                    {new Date(relatedArticle.date).toLocaleDateString(
                      language === 'ukr' ? 'uk-UA' : 'en-GB',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }
                    )}
                  </p>
                  <h3 className="text-lg font-light mb-2">
                    {language === 'ukr' ? relatedArticle.title.ukr : relatedArticle.title.eng}
                  </h3>
                  <p className="text-sm text-gray-600">
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
