import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('Сторінку не знайдено', 'Page not found')}
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
        >
          {t('ПОВЕРНУТИСЯ НА ГОЛОВНУ', 'BACK TO HOME')}
        </Link>
      </div>
    </div>
  );
}
