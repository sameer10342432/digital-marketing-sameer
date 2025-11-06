import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export function renderMarkdown(text: string): string {
  const rawHtml = marked(text) as string;
  const sanitizedHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br',
      'strong', 'em', 'u', 's', 'b', 'i',
      'ul', 'ol', 'li',
      'a', 'img',
      'code', 'pre',
      'blockquote',
      'hr'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'target', 'rel', 'id'],
  });
  
  return sanitizedHtml;
}
