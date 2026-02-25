import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './HeroSection.module.css';

const slogans = [
  { ukr: 'СТВОРЮЄМО ПЕРЕВАГУ ДЛЯ БІЗНЕСУ', eng: 'CREATING ADVANTAGE FOR BUSINESS' },
  { ukr: 'ЮРИДИЧНА ЕКСПЕРТИЗА. БІЗНЕС-МИСЛЕННЯ. РЕЗУЛЬТАТ.', eng: 'LEGAL EXPERTISE. COMMERCIAL THINKING. RESULTS.' },
  { ukr: 'ПОРУЧ З ВАМИ НА КОЖНОМУ ЕТАПІ', eng: 'WITH YOU AT EVERY STAGE' },
  { ukr: 'ДІЄМО ШВИДКО. МИСЛИМО СТРАТЕГІЧНО.', eng: 'ACTING FAST. THINKING STRATEGICALLY.' },
  { ukr: 'РОЗУМІЄМО БІЗНЕС — ЗАХИЩАЄМО ЙОГО ІНТЕРЕСИ', eng: 'UNDERSTANDING BUSINESS — PROTECTING ITS INTERESTS' },
  { ukr: 'МІЖНАРОДНА ЕКСПЕРТИЗА. ЛОКАЛЬНЕ РІШЕННЯ.', eng: 'GLOBAL EXPERTISE. LOCAL SOLUTIONS.' }
];

export function HeroSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [introPhase, setIntroPhase] = useState<'initial' | 'name' | 'complete'>('initial');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Check if this is the first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedJustyfin');
    if (!hasVisited) {
      setShowIntro(true);
      
      // Animation timeline
      const nameTimer = setTimeout(() => {
        setIntroPhase('name');
      }, 1500);

      const completeTimer = setTimeout(() => {
        setIntroPhase('complete');
        sessionStorage.setItem('hasVisitedJustyfin', 'true');
        setShowIntro(false);
      }, 5500);

      return () => {
        clearTimeout(nameTimer);
        clearTimeout(completeTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (!showIntro) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % slogans.length);
          setIsTransitioning(false);
        }, 400);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [showIntro]);

  if (showIntro) {
    return (
      <section className={styles.hero}>
        {/* Animated Background */}
        <div className={styles.introBackground}>
          {/* Blue block - starts from left */}
          <div 
            className={`${styles.colorBlockBlue} ${
              introPhase === 'initial' 
                ? styles.phaseInitial 
                : introPhase === 'complete' 
                ? styles.phaseComplete 
                : ''
            }`}
          />
          
          {/* Beige block - starts from right */}
          <div 
            className={`${styles.colorBlockBeige} ${
              introPhase === 'initial' 
                ? styles.phaseInitial 
                : introPhase === 'complete' 
                ? styles.phaseComplete 
                : ''
            }`}
          />
        </div>

        {/* Company Name */}
        <div className={styles.content}>
          {introPhase !== 'initial' && (
            <div className={`${styles.introContent} ${styles.introContentVisible}`}>
              <h1 className={styles.introCompanyName}>
                JUSTYFIN PARTNERS
              </h1>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-in-an-office-4631-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 
            className={`${styles.heading} ${isTransitioning ? styles.headingExit : styles.headingEnter}`}
          >
            {language === 'ukr' ? slogans[currentIndex].ukr : slogans[currentIndex].eng}
          </h1>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {slogans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 400);
                }}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                aria-label={`Go to slogan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorInner}>
          <div className={styles.scrollIndicatorDot} />
        </div>
      </div>
    </section>
  );
}
