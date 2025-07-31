# SEO Setup Documentation

## Overview
This website has been optimized for search engines with comprehensive meta tags, sitemaps, and robots.txt files.

## Files Created/Updated

### 1. `public/robots.txt`
- Allows all search engines to crawl the site
- References the sitemap location
- Includes specific directives for major search engines
- Includes crawl delay to prevent server overload

### 2. `public/sitemap.xml`
- Lists all pages with their metadata
- Includes last modified dates, change frequency, and priority
- Helps search engines discover and index all pages

### 3. `public/index.html`
- Updated with comprehensive meta tags
- Includes Open Graph and Twitter Card tags
- Proper language specification (Spanish)
- Canonical URL and sitemap reference

### 4. Dynamic Meta Tags
All pages now include React Helmet with:
- Unique titles for each page
- Descriptive meta descriptions
- Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing
- Proper keywords for each page

## SEO Features Implemented

### Meta Tags
- ✅ **Title tags** - Unique, descriptive titles
- ✅ **Meta descriptions** - Compelling, keyword-rich descriptions
- ✅ **Keywords** - Relevant keywords for each page
- ✅ **Author** - Church attribution

### Open Graph (Facebook)
- ✅ **og:title** - Page titles for social sharing
- ✅ **og:description** - Descriptions for social sharing
- ✅ **og:image** - Images for social sharing
- ✅ **og:url** - Canonical URLs
- ✅ **og:type** - Content type specification
- ✅ **og:locale** - Spanish locale

### Twitter Cards
- ✅ **twitter:card** - Large image cards
- ✅ **twitter:title** - Titles for Twitter sharing
- ✅ **twitter:description** - Descriptions for Twitter sharing
- ✅ **twitter:image** - Images for Twitter sharing

### Additional SEO
- ✅ **Canonical URLs** - Prevents duplicate content issues
- ✅ **Robots meta** - Search engine indexing instructions
- ✅ **Language specification** - Spanish language for better SEO
- ✅ **Theme color** - Brand color for mobile browsers

## Pages with SEO Optimization

1. **Homepage (`/`)**
   - Title: "Obra de Adulam - Iglesia Bautista en Richmond, CA"
   - Priority: 1.0 (highest)

2. **About Page (`/about`)**
   - Title: "Acerca de Obra de Adulam - Nuestras Creencias y Misión"
   - Priority: 0.8

3. **Prayer Request Page (`/prayer`)**
   - Title: "Peticiones de Oración - Envía tu Petición en Línea"
   - Priority: 0.9

4. **Visit Us Page (`/visit`)**
   - Title: "Visítanos - Obra de Adulam"
   - Priority: 0.9

5. **Donate Page (`/donate`)**
   - Title: "Donar - Apoya Nuestra Misión"
   - Priority: 0.8

6. **Events List Page (`/events`)**
   - Title: "Eventos - Próximos Eventos de la Iglesia"
   - Priority: 0.8

7. **Event Details Page (`/events/:slug`)**
   - Dynamic title based on event
   - Priority: 0.7

## Maintenance

### Updating Sitemap
To update the sitemap with current dates:
```bash
npm run update-sitemap
```

### Adding New Pages
1. Add the new route to `src/utils/sitemapGenerator.js`
2. Add React Helmet meta tags to the new page component
3. Run `npm run update-sitemap` to regenerate sitemap

### Updating Meta Tags
Edit the Helmet component in each page component to update:
- Page title
- Meta description
- Keywords
- Open Graph tags
- Twitter Card tags

## Search Engine Submission

After deployment, submit the sitemap to search engines:

### Google Search Console
1. Add property: `https://obradeadulam.org`
2. Submit sitemap: `https://obradeadulam.org/sitemap.xml`

### Bing Webmaster Tools
1. Add site: `https://obradeadulam.org`
2. Submit sitemap: `https://obradeadulam.org/sitemap.xml`

### Other Search Engines
- Yandex Webmaster
- Baidu Webmaster Tools
- DuckDuckGo (no submission needed)

## Performance Monitoring

Monitor SEO performance using:
- Google Search Console
- Google Analytics
- PageSpeed Insights
- Mobile-Friendly Test

## Best Practices

1. **Keep content fresh** - Update pages regularly
2. **Monitor performance** - Check Core Web Vitals
3. **Update sitemap** - Run update script monthly
4. **Check for broken links** - Regular link audits
5. **Optimize images** - Use proper alt tags and compression
6. **Mobile-first** - Ensure mobile optimization

## Technical Notes

- All meta tags are dynamically generated using React Helmet
- Sitemap is static but can be regenerated using the utility script
- Robots.txt allows all crawlers with a 1-second delay
- Canonical URLs prevent duplicate content issues
- Open Graph tags optimize social media sharing
- Twitter Cards optimize Twitter sharing

---

**Last Updated**: January 27, 2025
**Status**: ✅ Complete and optimized 