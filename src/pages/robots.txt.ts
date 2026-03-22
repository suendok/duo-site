import { SITE } from '../consts';
import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) =>
  SITE.maintenance.enabled
    ? `User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
