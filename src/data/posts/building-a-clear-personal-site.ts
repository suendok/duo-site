import type { MockPost } from './types';

export const buildingAClearPersonalSite: MockPost = {
  slug: 'building-a-clear-personal-site',
  title: 'Building a Clear Personal Site Before Adding Complexity',
  summary:
    'Why a personal website should feel calm, credible, and easy to navigate before it grows into a larger publishing system.',
  date: '2026-03-18',
  readingTime: '4 min read',
  tags: ['Website', 'Writing', 'Structure'],
  sections: [
    {
      paragraphs: [
        'A personal website does not need to begin as a product. It needs to introduce a person well, make a few important paths obvious, and create enough trust that a visitor wants to keep reading.',
        'That is why I am starting with a static structure first. A stable frame makes later decisions easier, whether that means adding case studies, more formal essays, or a richer archive.',
      ],
    },
    {
      heading: 'The job of the first version',
      paragraphs: [
        'The earliest version of a site should answer a small set of questions clearly: who are you, what do you work on, where can someone learn more, and how should they contact you.',
      ],
      bullets: [
        'Keep the navigation obvious.',
        'Make each page serve one purpose well.',
        'Prefer clarity over novelty in the information structure.',
      ],
    },
  ],
};
