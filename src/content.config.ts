import { defineCollection } from 'astro:content';
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Custom loader that properly handles markdown frontmatter
function markdownLoader() {
  return {
    name: "markdown-loader",
    load: async ({ config, store, parseData, renderMarkdown, logger }) => {
      let postsDirPath: string;
      
      // Get the posts directory path
      if (typeof config.root === 'string') {
        postsDirPath = path.join(config.root, 'src', 'content', 'posts');
      } else {
        postsDirPath = path.join(fileURLToPath(config.root), 'src', 'content', 'posts');
      }
      
      logger.info(`Posts dir: ${postsDirPath}`);

      store.clear();

      if (!fs.existsSync(postsDirPath)) {
        logger.warn(`Posts directory not found: ${postsDirPath}. Loading an empty posts collection.`);
        return;
      }

      const files = fs.readdirSync(postsDirPath).filter((f) => f.endsWith('.md'));

      for (const file of files) {
        const filePath = path.join(postsDirPath, file);
        logger.info(`Reading file: ${filePath}`);
        
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        logger.info(`Raw file length: ${rawContent.length}`);
        
        const parsed = matter(rawContent);
        logger.info(`Matter result - title: ${parsed.data.title}`);

        const id = path.basename(file, '.md');

        const parsedData = await parseData({
          id,
          data: {
            title: String(parsed.data.title || ''),
            date: new Date(String(parsed.data.date || '')),
            description: String(parsed.data.description || ''),
          },
        });

        const rendered = await renderMarkdown(parsed.content, {
          fileURL: new URL(`src/content/posts/${file}`, config.root),
        });

        store.set({
          id,
          data: parsedData,
          body: parsed.content,
          filePath: `src/content/posts/${file}`,
          rendered,
        });
      }
    },
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
    }),
  } satisfies Loader;
}

const posts = defineCollection({
  loader: markdownLoader(),
});

export const collections = { posts };
