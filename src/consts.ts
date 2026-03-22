// Maintenance mode is on by default right now.
// To reopen the site, set `SITE_MAINTENANCE_MODE=false` in Cloudflare Pages
// and trigger a new deployment.
const maintenanceFlag = import.meta.env.SITE_MAINTENANCE_MODE;
const maintenanceEnabled = maintenanceFlag ? maintenanceFlag === 'true' : true;

export const SITE = {
  name: 'Duo Sun',
  url: 'https://sunduo.me',
  title: 'Duo Sun | Economics, Finance, Research, and Writing',
  tagline: 'Economics, finance, research, and writing',
  description:
    'Official website of Duo Sun, an economics student in the UK sharing background, CV, writing, and contact details.',
  email: 'sunduowork@outlook.com',
  studyEmail: 'sunduostudy@outlook.com',
  personalEmail: 'sunduopersonal@outlook.com',
  phoneDisplay: '+44 07529 919197',
  phoneHref: 'tel:+447529919197',
  location: 'United Kingdom',
  githubUrl: 'https://github.com/suendok',
  githubLabel: 'github.com/suendok',
  themeColor: '#17324d',
  cvPdfPath: '/duo-sun-cv.pdf',
  cvLastUpdated: '22 March 2026',
  maintenance: {
    enabled: maintenanceEnabled,
    title: 'Site Under Maintenance',
    message:
      'sunduo.me is temporarily unavailable while updates are in progress. Please check back soon.',
    note:
      'All sections are temporarily hidden during maintenance to avoid showing incomplete content.',
  },
};
