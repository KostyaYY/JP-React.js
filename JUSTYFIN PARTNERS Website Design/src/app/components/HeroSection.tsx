import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
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
          <motion.div
            className={styles.colorBlockBlue}
            initial={{ x: '-100%', width: '50%' }}
            animate={
              introPhase === 'initial'
                ? { x: '0%', width: '50%' }
                : introPhase === 'name'
                ? { x: '0%', width: '50%' }
                : { x: '100%', width: '50%' }
            }
            transition={{
              duration: introPhase === 'initial' ? 1.5 : introPhase === 'name' ? 0 : 1,
              ease: 'easeInOut'
            }}
          />
          
          {/* Beige block - starts from right */}
          <motion.div
            className={styles.colorBlockBeige}
            initial={{ x: '100%', width: '50%' }}
            animate={
              introPhase === 'initial'
                ? { x: '50%', width: '50%' }
                : introPhase === 'name'
                ? { x: '50%', width: '50%' }
                : { x: '-100%', width: '50%' }
            }
            transition={{
              duration: introPhase === 'initial' ? 1.5 : introPhase === 'name' ? 0 : 1,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Company Name */}
        <div className={styles.content}>
          <AnimatePresence>
            {introPhase !== 'initial' && (
              <motion.div
                className={styles.introContent}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <motion.h1
                  className={styles.introCompanyName}
                  initial={{ letterSpacing: '0.2em' }}
                  animate={{ letterSpacing: '0.05em' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  JUSTYFIN PARTNERS
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
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
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className={styles.heading}
            >
              {language === 'ukr' ? slogans[currentIndex].ukr : slogans[currentIndex].eng}
            </motion.h1>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {slogans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                aria-label={`Go to slogan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollIndicatorInner}>
          <div className={styles.scrollIndicatorDot} />
        </div>
      </motion.div>
    </section>
  );
}