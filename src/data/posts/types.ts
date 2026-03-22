export type MockPostSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type MockPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
  sections: MockPostSection[];
};
