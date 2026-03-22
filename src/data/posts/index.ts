import { buildingAClearPersonalSite } from './building-a-clear-personal-site';
import { notesOnFinanceResearchWorkflows } from './notes-on-finance-research-workflows';
import { whatAWorkingNotebookShouldFeelLike } from './what-a-working-notebook-should-feel-like';
import { whyWritingImprovesAnalyticalThinking } from './why-writing-improves-analytical-thinking';

import type { MockPost } from './types';

export type { MockPost, MockPostSection } from './types';

// How to publish a new post:
// 1. Copy `src/data/posts/_template.ts` into a new file in this folder.
// 2. Rename the exported constant and fill in the post content.
// 3. Import that file here.
// 4. Add the imported post object to the `posts` array below.
export const posts: MockPost[] = [
  buildingAClearPersonalSite,
  notesOnFinanceResearchWorkflows,
  whyWritingImprovesAnalyticalThinking,
  whatAWorkingNotebookShouldFeelLike,
].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

export const getPostBySlug = (slug: string) =>
  posts.find((post) => post.slug === slug);
