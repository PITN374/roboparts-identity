const fs = require('fs');
const path = require('path');

// Target the explicit Next.js public directory on GoDaddy
const publicDir = path.join(__dirname, 'public');

// 1. Create Sitemap File Payload
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
   <url>
      <loc>https://powerinthenumbers.ai</loc>
      <lastmod>2026-09-19</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://pitn.ai</loc>
      <lastmod>2026-09-19</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>`;

// 2. Create Robots File Payload
const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: https://powerinthenumbers.ai`;

try {
  if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log('SEO Injection Completed Successfully!');
} catch (err) {
  console.error('Injection Failed:', err);
}
