// Authoritative Global XML Sitemap Path Handler
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
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
   <url>
      <loc>https://roboparts.ai</loc>
      <lastmod>2026-09-19</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
   </url>
</urlset>`);
});

// Authoritative Robots Crawl Rule Path Handler
app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send("User-agent: *\nAllow: /\n\nSitemap: https://powerinthenumbers.ai");
});
