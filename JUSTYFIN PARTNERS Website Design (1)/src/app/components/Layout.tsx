import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { StructuredData } from './StructuredData';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import styles from './Layout.module.css';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.layoutWrapper}>
      <StructuredData />
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}