const fs = require('fs');
const path = require('path');

const domain = "https://muhammadsameer.online";
const appTsxPath = path.join(__dirname, "client/src/App.tsx");
const sitemapPath = path.join(__dirname, "public/sitemap.xml");

const routePattern = /<Route path="([^"]+)"/g;

try {
    const content = fs.readFileSync(appTsxPath, "utf-8");
    let match;
    const routes = [];

    while ((match = routePattern.exec(content)) !== null) {
        const route = match[1];
        if (route.includes("/admin")) continue;
        if (route.includes("/:id") || route.includes("/:slug")) continue;
        routes.push(route);
    }

    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    const today = new Date().toISOString().split('T')[0];

    routes.forEach(route => {
        const url = domain + (route === "/" ? "" : route);
        xmlContent += '  <url>\n';
        xmlContent += `    <loc>${url}</loc>\n`;
        xmlContent += `    <lastmod>${today}</lastmod>\n`;
        xmlContent += '    <changefreq>weekly</changefreq>\n';
        xmlContent += '    <priority>0.8</priority>\n';
        xmlContent += '  </url>\n';
    });

    xmlContent += '</urlset>';

    fs.writeFileSync(sitemapPath, xmlContent);
    console.log(`Sitemap generated at ${sitemapPath} with ${routes.length} URLs.`);

} catch (err) {
    console.error("Error:", err);
}
