// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. You can still override this with SITE_URL if needed.
const rawSite = process.env.SITE_URL || 'https://sunduo.me';

const site =
  rawSite.startsWith('http://') || rawSite.startsWith('https://')
    ? rawSite
    : `https://${rawSite}`;

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
});
