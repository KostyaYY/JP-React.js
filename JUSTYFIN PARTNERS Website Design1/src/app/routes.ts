import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { People } from './pages/People';
import { NewsInsights } from './pages/NewsInsights';
import { NewsArticle } from './pages/NewsArticle';
import { Contact } from './pages/Contact';
import { ServiceDetail } from './pages/ServiceDetail';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { TermsOfUse } from './pages/legal/TermsOfUse';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'people', Component: People },
      { path: 'news', Component: NewsInsights },
      { path: 'news/:id', Component: NewsArticle },
      { path: 'contact', Component: Contact },
      { path: 'services/:id', Component: ServiceDetail },
      { path: 'legal/privacy', Component: PrivacyPolicy },
      { path: 'legal/cookies', Component: CookiePolicy },
      { path: 'legal/terms', Component: TermsOfUse },
      { path: '*', Component: NotFound },
    ],
  },
]);