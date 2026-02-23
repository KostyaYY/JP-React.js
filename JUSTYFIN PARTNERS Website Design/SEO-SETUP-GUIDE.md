# Google Analytics & Search Console Setup Guide for JUSTYFIN PARTNERS

## Google Analytics Setup

1. **Create Google Analytics Account**
   - Go to: https://analytics.google.com/
   - Click "Start measuring"
   - Fill in Account details
   - Choose "Web" as property type
   - Enter website URL: https://justyfin.com

2. **Get Measurement ID**
   - Format: G-XXXXXXXXXX
   - Add this to your website

3. **Add GA4 Code**
   Add the following code to `/index.html` in the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

---

## Google Search Console Setup

1. **Add Property**
   - Go to: https://search.google.com/search-console
   - Click "Add Property"
   - Choose "URL prefix" option
   - Enter: https://justyfin.com

2. **Verify Ownership**

   **Method 1: HTML file upload (Recommended)**
   - Download verification file from Google Search Console
   - Upload to `/public/` folder
   - Click "Verify"

   **Method 2: Meta tag**
   - Add this to `<head>` in `/index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE">
   ```

3. **Submit Sitemap**
   - After verification, go to "Sitemaps" in the left menu
   - Submit: https://justyfin.com/sitemap.xml

4. **Request Indexing**
   - Go to "URL Inspection" tool
   - Enter your homepage URL
   - Click "Request Indexing"

---

## Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add site: https://justyfin.com
3. Verify using meta tag:
```html
<meta name="msvalidate.01" content="YOUR_VERIFICATION_CODE">
```
4. Submit sitemap: https://justyfin.com/sitemap.xml

---

## Yandex Webmaster

1. Go to: https://webmaster.yandex.com/
2. Add site: https://justyfin.com
3. Verify using meta tag:
```html
<meta name="yandex-verification" content="YOUR_VERIFICATION_CODE">
```
4. Submit sitemap: https://justyfin.com/sitemap.xml

---

## Additional SEO Tools

### Google My Business (Important for Local SEO)
1. Create listing at: https://business.google.com/
2. Add business information:
   - Name: JUSTYFIN PARTNERS
   - Category: Law Firm / Legal Services
   - Address: 126 East Ferry Road, Dept 6515, London, E14 9FP, UK
   - Phone: +44-20-XXXX-XXXX
   - Website: https://justyfin.com

### Schema.org Markup
Already implemented in the website via StructuredData component:
- Organization Schema ✅
- LegalService Schema ✅
- WebSite Schema ✅
- BreadcrumbList Schema ✅

### Open Graph Images
Create the following images and place in `/public/`:
- `og-image.jpg` (1200x630px) - For social media sharing
- `logo.png` (512x512px) - Company logo
- `apple-touch-icon.png` (180x180px) - For iOS devices
- `favicon.svg` - Website favicon

---

## Monitoring & Maintenance

### Weekly Tasks:
- Check Google Search Console for errors
- Monitor search rankings
- Review Analytics traffic data

### Monthly Tasks:
- Update sitemap.xml if new pages added
- Check for broken links
- Review and update meta descriptions
- Monitor page load speeds

### SEO Checklist:
✅ robots.txt created
✅ sitemap.xml created
✅ Meta tags implemented
✅ Open Graph tags added
✅ Structured data (JSON-LD) added
✅ Canonical URLs set
✅ Alt tags for images (when added)
✅ Mobile-responsive design
✅ Fast loading times
✅ HTTPS (required for production)
✅ Clean URL structure
✅ Internal linking
✅ Multi-language support (hreflang)

---

## Important Notes:

1. **HTTPS Required**: Ensure the site is served over HTTPS in production
2. **Performance**: Optimize images and enable gzip compression
3. **Mobile-First**: Site is already responsive
4. **Content Updates**: Regularly publish news articles for fresh content
5. **Backlinks**: Build quality backlinks from reputable legal directories

---

## Legal Directories to Submit:

- Chambers and Partners
- Legal 500
- Martindale-Hubbell
- Avvo
- FindLaw
- Justia
- Best Lawyers

---

## Contact for SEO Support:
For questions about SEO implementation, contact the development team.
