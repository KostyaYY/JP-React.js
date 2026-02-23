import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';

export function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              {t('Політика конфіденційності', 'Privacy Policy')}
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                {t('Останнє оновлення: 13 лютого 2026', 'Last updated: February 13, 2026')}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('1. Вступ', '1. Introduction')}
                </h2>
                <p>
                  {t(
                    'JUSTYFIN PARTNERS ("ми", "нас", "наш") зобов\'язується захищати конфіденційність наших клієнтів та відвідувачів веб-сайту. Ця політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію.',
                    'JUSTYFIN PARTNERS ("we", "us", "our") is committed to protecting the privacy of our clients and website visitors. This privacy policy describes how we collect, use and protect your personal information.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('2. Інформація, яку ми збираємо', '2. Information We Collect')}
                </h2>
                <p>
                  {t(
                    'Ми можемо збирати наступну інформацію: ім\'я, контактну інформацію (електронна адреса, телефон), інформацію про компанію, та іншу інформацію, яку ви добровільно надаєте нам через контактні форми або під час спілкування.',
                    'We may collect the following information: name, contact information (email, phone), company information, and other information you voluntarily provide to us through contact forms or during communication.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('3. Використання інформації', '3. Use of Information')}
                </h2>
                <p>
                  {t(
                    'Ми використовуємо вашу інформацію для: надання юридичних послуг, відповіді на ваші запити, покращення наших послуг, надсилання інформаційних матеріалів (за вашою згодою).',
                    'We use your information to: provide legal services, respond to your inquiries, improve our services, send informational materials (with your consent).'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('4. Захист даних', '4. Data Protection')}
                </h2>
                <p>
                  {t(
                    'Ми вживаємо відповідних технічних та організаційних заходів для захисту вашої особистої інформації від несанкціонованого доступу, втрати або зміни.',
                    'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss or alteration.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('5. Ваші права', '5. Your Rights')}
                </h2>
                <p>
                  {t(
                    'Ви маєте право на доступ до своїх даних, їх виправлення, видалення, та обмеження обробки. Для реалізації цих прав, будь ласка, зв\'яжіться з нами.',
                    'You have the right to access, correct, delete, and restrict the processing of your data. To exercise these rights, please contact us.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('6. Контакти', '6. Contact')}
                </h2>
                <p>
                  {t(
                    'Якщо у вас є питання щодо цієї політики конфіденційності, будь ласка, зв\'яжіться з нами: info@justyfin.com',
                    'If you have any questions about this privacy policy, please contact us: info@justyfin.com'
                  )}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}