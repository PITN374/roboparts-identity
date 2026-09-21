const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /

Sitemap: https://powerinthenumbers.ai/sitemap.xml
`);
});

// Serve sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://powerinthenumbers.ai/</loc>
  </url>
</urlset>`);
});

// Basic health check
app.get("/", (req, res) => {
  res.send("Power In The Numbers");
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
