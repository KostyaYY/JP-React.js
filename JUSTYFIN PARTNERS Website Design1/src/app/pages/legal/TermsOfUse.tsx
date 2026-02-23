import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';

export function TermsOfUse() {
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
              {t('Умови використання', 'Terms of Use')}
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                {t('Останнє оновлення: 13 лютого 2026', 'Last updated: February 13, 2026')}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('1. Прийняття умов', '1. Acceptance of Terms')}
                </h2>
                <p>
                  {t(
                    'Використовуючи цей веб-сайт, ви погоджуєтесь з цими умовами використання. Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш веб-сайт.',
                    'By using this website, you agree to these terms of use. If you disagree with any part of these terms, please do not use our website.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('2. Інтелектуальна власність', '2. Intellectual Property')}
                </h2>
                <p>
                  {t(
                    'Весь контент на цьому веб-сайті, включаючи текст, графіку, логотипи та зображення, є власністю JUSTYFIN PARTNERS або використовується з дозволу. Несанкціоноване використання будь-якого контенту заборонено.',
                    'All content on this website, including text, graphics, logos and images, is the property of JUSTYFIN PARTNERS or used with permission. Unauthorized use of any content is prohibited.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('3. Обмеження відповідальності', '3. Limitation of Liability')}
                </h2>
                <p>
                  {t(
                    'Інформація на цьому веб-сайті надається "як є" без будь-яких гарантій. JUSTYFIN PARTNERS не несе відповідальності за будь-які збитки, що виникли внаслідок використання або неможливості використання цього веб-сайту.',
                    'Information on this website is provided "as is" without any warranties. JUSTYFIN PARTNERS is not liable for any damages arising from the use or inability to use this website.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('4. Застосовне право', '4. Governing Law')}
                </h2>
                <p>
                  {t(
                    'Ці умови регулюються законодавством Великої Британії. Будь-які спори підлягають виключній юрисдикції судів Англії та Уельсу.',
                    'These terms are governed by the laws of the United Kingdom. Any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('5. Зміни умов', '5. Changes to Terms')}
                </h2>
                <p>
                  {t(
                    'Ми залишаємо за собою право змінювати ці умови в будь-який час. Будь ласка, регулярно переглядайте цю сторінку для ознайомлення з поточними умовами.',
                    'We reserve the right to change these terms at any time. Please review this page regularly to stay informed of current terms.'
                  )}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-light text-gray-900 mt-8">
                  {t('6. Контакти', '6. Contact')}
                </h2>
                <p>
                  {t(
                    'Якщо у вас є питання щодо цих умов, будь ласка, зв\'яжіться з нами: info@justyfin.com',
                    'If you have any questions about these terms, please contact us: info@justyfin.com'
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
