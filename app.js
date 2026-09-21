const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Power In The Numbers robots.txt
app.get("/robots.txt", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send(`User-agent: *
Allow: /

Sitemap: https://powerinthenumbers.ai/sitemap.xml
`);
});

// Power In The Numbers sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.set("Content-Type", "application/xml; charset=utf-8");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://powerinthenumbers.ai/</loc>
  </url>
  <url>
    <loc>https://powerinthenumbers.ai/contact</loc>
  </url>
  <url>
    <loc>https://powerinthenumbers.ai/partnership</loc>
  </url>
</urlset>`);
});

app.listen(PORT, () => {
  console.log("Power In The Numbers server running on port " + PORT);
});
