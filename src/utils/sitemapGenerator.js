// Sitemap Generator Utility
// This utility can be used to generate dynamic sitemaps

const BASE_URL = 'https://obradeadulam.org';

// Define all routes with their metadata
export const ROUTES = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: '2025-01-27'
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-27'
  },
  {
    path: '/prayer',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2025-01-27'
  },
  {
    path: '/visit',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2025-01-27'
  },
  {
    path: '/donate',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-27'
  },
  {
    path: '/events',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: '2025-01-27'
  },
  {
    path: '/events/visita-apostolica-2025',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-27'
  }
];

// Generate sitemap XML
export const generateSitemapXML = () => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlFooter = '</urlset>';

  const urlEntries = ROUTES.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  return `${xmlHeader}\n\n${urlEntries}\n\n${xmlFooter}`;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin or private areas (if any exist in the future)
# Disallow: /admin/
# Disallow: /private/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Crawl delay (optional - helps with server load)
Crawl-delay: 1`;
};

// Update last modified date for a specific route
export const updateLastModified = (path, date = new Date().toISOString().split('T')[0]) => {
  const route = ROUTES.find(r => r.path === path);
  if (route) {
    route.lastmod = date;
  }
};

// Get all routes for other utilities
export const getAllRoutes = () => ROUTES; 