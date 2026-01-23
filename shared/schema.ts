import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const words = pgTable("words", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),          // The word to guess
  language: text("language").notNull(),  // 'en' or 'it'
  translation: text("translation").notNull(), // The meaning/hint
  category: text("category").notNull(),   // e.g., 'animals', 'food', 'places'
  difficulty: text("difficulty").notNull(), // 'easy', 'medium', 'hard'
  imageUrl: text("image_url").notNull(),  // URL to illustration
});

export const insertWordSchema = createInsertSchema(words).omit({ id: true });

export type Word = typeof words.$inferSelect;
export type InsertWord = z.infer<typeof insertWordSchema>;

export type WordResponse = Word;

// Query params for fetching a word
export const wordQuerySchema = z.object({
  language: z.enum(['en', 'it']),
  difficulty: z.enum(['easy', 'medium', 'hard']),
});

export type WordQueryParams = z.infer<typeof wordQuerySchema>;
