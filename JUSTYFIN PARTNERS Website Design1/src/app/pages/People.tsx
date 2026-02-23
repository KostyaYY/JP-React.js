import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data/mockData';
import { motion } from 'motion/react';

export function People() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              {t('Наша команда', 'Our People')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              {t(
                'Експерти, які поєднують юридичну майстерність з глибоким розумінням бізнесу',
                'Experts who combine legal excellence with deep business understanding'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'ukr' ? member.position.ukr : member.position.eng}
                </p>
                <p className="text-sm text-gray-500">
                  {language === 'ukr' ? member.bio.ukr : member.bio.eng}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}