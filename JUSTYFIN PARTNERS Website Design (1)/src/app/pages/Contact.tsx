import { useLanguage } from '../context/LanguageContext';
import { Icons } from '../components/Icons';
import { useState } from 'react';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.sectionLabel}>
              {t('КОНТАКТИ', 'CONTACT')}
            </p>
            <h1 className={styles.heroTitle}>
              {t('Зв\'яжіться з нами', 'Get in touch')}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                'Готові обговорити ваш проєкт? Зв\'яжіться з нами, і ми знайдемо найкраще рішення для вашого бізнесу.',
                'Ready to discuss your project? Contact us and we\'ll find the best solution for your business.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <Icons.MapPin size={24} />
                </div>
                <div>
                  <h3 className={styles.infoTitle}>{t('Адреса', 'Address')}</h3>
                  <address className={styles.infoText}>
                    Dept 6515, 126 East Ferry Road,<br />
                    Canary Wharf, London,<br />
                    United Kingdom, E14 9FP
                  </address>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <Icons.Mail size={24} />
                </div>
                <div>
                  <h3 className={styles.infoTitle}>{t('Email', 'Email')}</h3>
                  <a href="mailto:info@justyfin.com" className={styles.infoLink}>
                    info@justyfin.com
                  </a>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <Icons.Phone size={24} />
                </div>
                <div>
                  <h3 className={styles.infoTitle}>{t('Телефон', 'Phone')}</h3>
                  <a href="tel:+442012345678" className={styles.infoLink}>
                    +44 20 1234 5678
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <Icons.CheckCircle size={48} />
                  </div>
                  <h3>{t('Дякуємо за повідомлення!', 'Thank you for your message!')}</h3>
                  <p>{t('Ми зв\'яжемося з вами найближчим часом.', 'We will contact you shortly.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t('Ім\'я', 'Name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      {t('Компанія', 'Company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      {t('Повідомлення', 'Message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    {t('Надіслати', 'Send Message')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
