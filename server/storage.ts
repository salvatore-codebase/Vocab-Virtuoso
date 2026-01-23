import { db } from "./db";
import { words, type Word, type InsertWord, type WordQueryParams } from "@shared/schema";
import { eq, and, sql } from "drizzle-orm";

export interface IStorage {
  getRandomWord(params: WordQueryParams): Promise<Word | undefined>;
  getAllWords(): Promise<Word[]>;
  createWord(word: InsertWord): Promise<Word>;
}

export class DatabaseStorage implements IStorage {
  async getRandomWord(params: WordQueryParams): Promise<Word | undefined> {
    const result = await db
      .select()
      .from(words)
      .where(
        and(
          eq(words.language, params.language),
          eq(words.difficulty, params.difficulty)
        )
      )
      .orderBy(sql`RANDOM()`)
      .limit(1);
    
    return result[0];
  }

  async getAllWords(): Promise<Word[]> {
    return await db.select().from(words);
  }

  async createWord(insertWord: InsertWord): Promise<Word> {
    const [word] = await db.insert(words).values(insertWord).returning();
    return word;
  }
}

export const storage = new DatabaseStorage();
