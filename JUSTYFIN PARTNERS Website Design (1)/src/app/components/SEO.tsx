import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://justyfin.com/og-image.jpg',
  type = 'website' 
}: SEOProps) {
  const location = useLocation();
  const { language } = useLanguage();
  
  const defaultTitles = {
    ukr: 'JUSTYFIN PARTNERS - Юридична фірма | Бізнес-орієнтовані рішення',
    eng: 'JUSTYFIN PARTNERS - Law Firm | Business-Oriented Solutions'
  };

  const defaultDescriptions = {
    ukr: 'JUSTYFIN PARTNERS - сучасна юридична фірма, що надає комплексні правові рішення для підприємців, інвесторів і компаній. Експертиза, результат, справжнє партнерство.',
    eng: 'JUSTYFIN PARTNERS - a modern law firm delivering comprehensive legal solutions for entrepreneurs, investors, and businesses. Expertise, results, true partnership.'
  };

  const defaultKeywords = {
    ukr: 'юридична фірма, адвокат, юридичні послуги, бізнес-консультації, корпоративне право, комерційне право, міжнародне право, юридична допомога, правові послуги, JUSTYFIN PARTNERS',
    eng: 'law firm, lawyer, legal services, business consulting, corporate law, commercial law, international law, legal assistance, legal services, JUSTYFIN PARTNERS'
  };

  const pageTitle = title || defaultTitles[language];
  const pageDescription = description || defaultDescriptions[language];
  const pageKeywords = keywords || defaultKeywords[language];
  const canonicalUrl = `https://justyfin.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', pageKeywords);
    updateMetaTag('author', 'JUSTYFIN PARTNERS');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', language === 'ukr' ? 'Ukrainian' : 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'JUSTYFIN PARTNERS', true);
    updateMetaTag('og:locale', language === 'ukr' ? 'uk_UA' : 'en_GB', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', image);

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update alternate language links
    const updateAlternateLink = (lang: string, href: string) => {
      let element = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'alternate');
        element.setAttribute('hreflang', lang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    updateAlternateLink('uk', `https://justyfin.com${location.pathname}?lang=ukr`);
    updateAlternateLink('en', `https://justyfin.com${location.pathname}?lang=eng`);
    updateAlternateLink('x-default', `https://justyfin.com${location.pathname}`);

  }, [pageTitle, pageDescription, pageKeywords, canonicalUrl, image, type, language, location.pathname]);

  return null;
}
