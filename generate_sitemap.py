import re
import datetime

# Domain
domain = "https://muhammadsameer.online"

# Input file
app_tsx_path = "client/src/App.tsx"
# Output file
sitemap_path = "public/sitemap.xml"

# Regex to find routes
route_pattern = re.compile(r'<Route path="([^"]+)"')

routes = []
try:
    with open(app_tsx_path, "r", encoding="utf-8") as f:
        content = f.read()
        matches = route_pattern.findall(content)
        for match in matches:
            # Skip admin and dynamic routes for now, or handle them
            if "/admin" in match:
                continue
            if "/:id" in match or "/:slug" in match:
                continue
            
            routes.append(match)
except FileNotFoundError:
    print(f"Error: {app_tsx_path} not found.")
    exit(1)

# Generate XML
xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for route in routes:
    url = domain + (route if route != "/" else "")
    xml_content += '  <url>\n'
    xml_content += f'    <loc>{url}</loc>\n'
    xml_content += f'    <lastmod>{datetime.date.today().isoformat()}</lastmod>\n'
    xml_content += '    <changefreq>weekly</changefreq>\n'
    xml_content += '    <priority>0.8</priority>\n'
    xml_content += '  </url>\n'

xml_content += '</urlset>'

# Write to file
try:
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(xml_content)
    print(f"Sitemap generated at {sitemap_path} with {len(routes)} URLs.")
except Exception as e:
    print(f"Error writing sitemap: {e}")
