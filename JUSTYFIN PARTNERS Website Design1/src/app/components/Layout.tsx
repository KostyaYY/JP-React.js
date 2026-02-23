import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}