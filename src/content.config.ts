import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  publishDate: z.date(),
  updatedDate: z.date().optional(),
  draft: z.boolean().default(false),
});

const cases = defineCollection({
  schema: baseSchema.extend({
    clientType: z.string(),
    issues: z.array(z.string()).default([]),
    supportDetails: z.array(z.string()).default([]),
    resultSummary: z.string(),
  }),
});

const columns = defineCollection({
  schema: baseSchema.extend({
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
  }),
});

export const collections = {
  cases,
  columns,
};
