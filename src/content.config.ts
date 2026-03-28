import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  publishDate: z.date(),
  draft: z.boolean().default(false),
});

const news = defineCollection({
  schema: baseSchema.extend({
    category: z.string().default('お知らせ'),
  }),
});

const columns = defineCollection({
  schema: baseSchema.extend({
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  schema: baseSchema.extend({
    clientType: z.string().optional(),
    serviceSummary: z.string().optional(),
  }),
});

export const collections = {
  news,
  columns,
  'case-studies': caseStudies,
};
