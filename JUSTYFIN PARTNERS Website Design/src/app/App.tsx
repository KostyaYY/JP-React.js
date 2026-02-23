import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';
import { useEffect } from 'react';

export default function App() {
  // Prevent MetaMask auto-connect
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      // Disable MetaMask auto-refresh
      window.ethereum.autoRefreshOnNetworkChange = false;
    }
  }, []);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}