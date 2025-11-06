const DEFAULT_TITLE = 'Muhammad Sameer | Digital Marketing Expert';
const DEFAULT_DESCRIPTION = 'Full-stack digital marketing expert specializing in SEO, PPC, social media marketing, and content strategy. View case studies with proven ROI results.';

export function setPageMeta(title: string, description: string, imageUrl?: string) {
  const fullTitle = `${title} | Muhammad Sameer`;
  document.title = fullTitle;
  
  let metaDescTag = document.querySelector('meta[name="description"]');
  if (!metaDescTag) {
    metaDescTag = document.createElement('meta');
    metaDescTag.setAttribute('name', 'description');
    document.head.appendChild(metaDescTag);
  }
  metaDescTag.setAttribute('content', description);
  
  let ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (!ogTitleTag) {
    ogTitleTag = document.createElement('meta');
    ogTitleTag.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleTag);
  }
  ogTitleTag.setAttribute('content', fullTitle);
  
  let ogDescTag = document.querySelector('meta[property="og:description"]');
  if (!ogDescTag) {
    ogDescTag = document.createElement('meta');
    ogDescTag.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescTag);
  }
  ogDescTag.setAttribute('content', description);
  
  let ogImageTag = document.querySelector('meta[property="og:image"]');
  if (imageUrl) {
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', imageUrl);
  } else if (ogImageTag) {
    ogImageTag.remove();
  }
}

export function resetPageMeta() {
  document.title = DEFAULT_TITLE;
  
  let metaDescTag = document.querySelector('meta[name="description"]');
  if (metaDescTag) {
    metaDescTag.setAttribute('content', DEFAULT_DESCRIPTION);
  }
  
  let ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute('content', DEFAULT_TITLE);
  }
  
  let ogDescTag = document.querySelector('meta[property="og:description"]');
  if (ogDescTag) {
    ogDescTag.setAttribute('content', DEFAULT_DESCRIPTION);
  }
  
  let ogImageTag = document.querySelector('meta[property="og:image"]');
  if (ogImageTag) {
    ogImageTag.remove();
  }
}
