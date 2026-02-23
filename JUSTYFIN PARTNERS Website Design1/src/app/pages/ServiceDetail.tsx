import { useParams, Link, Navigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/mockData';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function ServiceDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/?menu=open" replace />;
  }

  const serviceName = language === 'ukr' ? service.ukr : service.eng;

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-8 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <Link
            to="/?menu=open"
            className="inline-flex items-center gap-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={16} />
            {t('Назад до меню', 'Back to menu')}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              {serviceName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              {t(
                'Експертні рішення, адаптовані під ваші потреби',
                'Expert solutions tailored to your needs'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm tracking-widest text-gray-500 mb-4">
                {t('ОГЛЯД ПОСЛУГИ', 'SERVICE OVERVIEW')}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t(
                    `Наша команда спеціалізується на наданні послуг у сфері "${serviceName}" та має багаторічний досвід роботи з клієнтами різних галузей.`,
                    `Our team specializes in providing "${serviceName}" services and has many years of experience working with clients from various industries.`
                  )}
                </p>
                <p>
                  {t(
                    'Ми розуміємо, що кожен клієнт унікальний, тому розробляємо індивідуальні рішення, які відповідають конкретним бізнес-цілям та викликам.',
                    'We understand that each client is unique, so we develop individual solutions that meet specific business goals and challenges.'
                  )}
                </p>
                <p>
                  {t(
                    'Наш підхід базується на поєднанні глибокої юридичної експертизи з практичним розумінням бізнесу, що дозволяє нам забезпечувати оптимальні результати для наших клієнтів.',
                    'Our approach is based on combining deep legal expertise with practical business understanding, enabling us to deliver optimal results for our clients.'
                  )}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm tracking-widest text-gray-500 mb-4">
                {t('ЩО МИ ПРОПОНУЄМО', 'WHAT WE OFFER')}
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  t('Комплексний аналіз та консультування', 'Comprehensive analysis and advisory'),
                  t('Підготовка необхідної документації', 'Preparation of required documentation'),
                  t('Супровід на всіх етапах процесу', 'Support at all stages of the process'),
                  t('Взаємодія з регуляторами та іншими сторонами', 'Interaction with regulators and other parties'),
                  t('Постійна підтримка після завершення проекту', 'Ongoing support after project completion')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                {t('ОБГОВОРИТИ ПРОЕКТ', 'DISCUSS YOUR PROJECT')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            {t('Чому обирають нас', 'Why choose us')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('Експертиза', 'Expertise'),
                desc: t('Багаторічний досвід та глибокі знання', 'Years of experience and deep knowledge')
              },
              {
                title: t('Результат', 'Results'),
                desc: t('Орієнтація на досягнення бізнес-цілей', 'Focus on achieving business goals')
              },
              {
                title: t('Підтримка', 'Support'),
                desc: t('Постійна доступність та супровід', 'Constant availability and support')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}