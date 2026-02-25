import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function StructuredData() {
  const { language } = useLanguage();

  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      'name': 'JUSTYFIN PARTNERS',
      'alternateName': 'Justyfin Partners Law Firm',
      'url': 'https://justyfin.com',
      'logo': 'https://justyfin.com/logo.png',
      'description': language === 'ukr' 
        ? 'Сучасна юридична фірма, що надає комплексні правові рішення для підприємців, інвесторів і компаній'
        : 'A modern law firm delivering comprehensive legal solutions for entrepreneurs, investors, and businesses',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '126 East Ferry Road, Dept 6515',
        'addressLocality': 'London',
        'addressRegion': 'Canary Wharf',
        'postalCode': 'E14 9FP',
        'addressCountry': 'GB'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+44-20-XXXX-XXXX',
        'email': 'info@justyfin.com',
        'contactType': 'Customer Service',
        'availableLanguage': ['Ukrainian', 'English']
      },
      'sameAs': [
        'https://www.linkedin.com/company/justyfin-partners',
        'https://twitter.com/justyfinpartners'
      ],
      'priceRange': '$$$',
      'areaServed': {
        '@type': 'Country',
        'name': ['Ukraine', 'United Kingdom', 'European Union']
      }
    };

    // Attorney Schema
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'JUSTYFIN PARTNERS',
      'image': 'https://justyfin.com/og-image.jpg',
      'priceRange': '$$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '126 East Ferry Road, Dept 6515',
        'addressLocality': 'London',
        'addressRegion': 'Canary Wharf',
        'postalCode': 'E14 9FP',
        'addressCountry': 'GB'
      },
      'telephone': '+44-20-XXXX-XXXX'
    };

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'JUSTYFIN PARTNERS',
      'url': 'https://justyfin.com',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://justyfin.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    // Breadcrumb Schema (will be added dynamically per page)
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://justyfin.com'
        }
      ]
    };

    // Create or update script tags
    const updateOrCreateScript = (id: string, schema: object) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    updateOrCreateScript('organization-schema', organizationSchema);
    updateOrCreateScript('professional-service-schema', professionalServiceSchema);
    updateOrCreateScript('website-schema', websiteSchema);
    updateOrCreateScript('breadcrumb-schema', breadcrumbSchema);

    return () => {
      // Cleanup if needed
    };
  }, [language]);

  return null;
}
