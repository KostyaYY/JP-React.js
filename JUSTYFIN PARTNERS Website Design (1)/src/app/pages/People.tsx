import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data/mockData';
import styles from './People.module.css';

export function People() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.peoplePage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {t('Наша команда', 'Our People')}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                'Експерти, які поєднують юридичну майстерність з глибоким розумінням бізнесу',
                'Experts who combine legal excellence with deep business understanding'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`${styles.teamCard} ${styles.fadeIn}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.memberImage}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.memberPhoto}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>
                    {member.name}
                  </h3>
                  <p className={styles.memberPosition}>
                    {language === 'ukr' ? member.position.ukr : member.position.eng}
                  </p>
                  <p className={styles.memberBio}>
                    {language === 'ukr' ? member.bio.ukr : member.bio.eng}
                  </p>
                  <div className={styles.memberExpertise}>
                    <h4 className={styles.expertiseTitle}>
                      {t('Експертиза', 'Expertise')}
                    </h4>
                    <ul className={styles.expertiseList}>
                      {(language === 'ukr' ? member.expertise.ukr : member.expertise.eng).map((item, idx) => (
                        <li key={idx} className={styles.expertiseItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}