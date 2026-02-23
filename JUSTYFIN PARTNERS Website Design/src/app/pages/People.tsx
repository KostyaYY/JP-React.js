import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data/mockData';
import { motion } from 'motion/react';
import styles from './People.module.css';

export function People() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.peoplePage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              {t('Наша команда', 'Our People')}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                'Експерти, які поєднують юридичну майстерність з глибоким розумінням бізнесу',
                'Experts who combine legal excellence with deep business understanding'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.teamMember}
              >
                <div className={styles.memberImageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>
                  {language === 'ukr' ? member.position.ukr : member.position.eng}
                </p>
                <p className={styles.memberBio}>
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