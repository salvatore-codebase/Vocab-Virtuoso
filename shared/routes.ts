import { z } from 'zod';
import { insertWordSchema, words, wordQuerySchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  words: {
    random: {
      method: 'GET' as const,
      path: '/api/words/random',
      input: wordQuerySchema,
      responses: {
        200: z.custom<typeof words.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/words',
      responses: {
        200: z.array(z.custom<typeof words.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type WordResponse = z.infer<typeof api.words.random.responses[200]>;
