import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';
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
    <div className={styles.contact}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              {t('Контакти', 'Contact')}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Зв'яжіться з нами, щоб обговорити, як ми можемо допомогти вашому бізнесу",
                'Get in touch to discuss how we can help your business'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Information */}
            <div>
              <h2 className={styles.sectionTitle}>
                {t('Наші контакти', 'Our contacts')}
              </h2>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <MapPin className={styles.infoIcon} size={24} />
                  <div className={styles.infoContent}>
                    <h3>{t('Адреса', 'Address')}</h3>
                    <address>
                      Dept 6515, 126 East Ferry Road,<br />
                      Canary Wharf, London,<br />
                      United Kingdom, E14 9FP
                    </address>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Phone className={styles.infoIcon} size={24} />
                  <div className={styles.infoContent}>
                    <h3>{t('Телефон', 'Phone')}</h3>
                    <a href="tel:+442012345678">+44 20 1234 5678</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Mail className={styles.infoIcon} size={24} />
                  <div className={styles.infoContent}>
                    <h3>{t('Електронна пошта', 'Email')}</h3>
                    <a href="mailto:info@justyfin.com">info@justyfin.com</a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6254825932773!2d-0.015832784223794383!3d51.50944097963444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602ba82d3f039%3A0x3a6f8f7e1c4c7e3e!2s126%20East%20Ferry%20Rd%2C%20London%20E14%209FP%2C%20UK!5e0!3m2!1sen!2sua!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('Карта розташування', 'Location map')}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className={styles.sectionTitle}>
                {t('Контактна форма', 'Contact Form')}
              </h2>
              <p className={styles.formDescription}>
                {t(
                  "Якщо ви бажаєте зв'язатися з нами, будь ласка, заповніть цю форму.",
                  'If you would like to get in touch, please complete this form.'
                )}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.successMessage}
                >
                  <p>
                    {t(
                      "Дякуємо! Ваше повідомлення надіслано. Ми зв'яжемося з вами найближчим часом.",
                      'Thank you! Your message has been sent. We will contact you soon.'
                    )}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t("Ім'я *", 'Name *')}
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
                      {t('Email *', 'Email *')}
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
                      {t('Повідомлення *', 'Message *')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    {t('НАДІСЛАТИ', 'SEND MESSAGE')}
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