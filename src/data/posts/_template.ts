import type { MockPost } from './types';

// New post guide:
// 1. Copy this file and rename it, for example `my-new-post.ts`.
// 2. Rename `newPostTemplate` to a unique export name.
// 3. Fill in the metadata and sections below.
// 4. Import the new file in `src/data/posts/index.ts` and add it to the array.
export const newPostTemplate: MockPost = {
  slug: 'your-post-slug',
  title: 'Your Post Title',
  summary: 'A short summary that appears on the posts list page.',
  date: '2026-03-22',
  readingTime: '4 min read',
  tags: ['Tag One', 'Tag Two', 'Tag Three'],
  sections: [
    {
      paragraphs: [
        'Start with an opening paragraph that introduces the main idea clearly.',
        'Add a second paragraph to develop the argument or context.',
      ],
    },
    {
      heading: 'Optional section heading',
      paragraphs: [
        'Use another section when the post needs a new idea, example, or transition.',
      ],
      bullets: [
        'Optional bullet point one.',
        'Optional bullet point two.',
      ],
    },
  ],
};
