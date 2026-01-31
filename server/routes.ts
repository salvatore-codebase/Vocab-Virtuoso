import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.words.random.path, async (req, res) => {
    try {
      const params = api.words.random.input.parse(req.query);
      const word = await storage.getRandomWord(params);
      
      if (!word) {
        return res.status(404).json({ message: "No words found for these criteria" });
      }
      
      res.json(word);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.words.list.path, async (req, res) => {
    const words = await storage.getAllWords();
    res.json(words);
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getAllWords();
  if (existing.length > 0) return;

  const seedWords = [
    // English Easy
    { text: "CAT", language: "en", translation: "Gatto", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" },
    { text: "DOG", language: "en", translation: "Cane", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400" },
    { text: "SUN", language: "en", translation: "Sole", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1534234057639-50c55f750b32?w=400" },
    { text: "BOOK", language: "en", translation: "Libro", category: "Objects", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400" },
    
    // English Medium
    { text: "BICYCLE", language: "en", translation: "Bicicletta", category: "Transport", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" },
    { text: "COMPUTER", language: "en", translation: "Computer", category: "Tech", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" },
    { text: "GARDEN", language: "en", translation: "Giardino", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },

    // English Hard
    { text: "PHILOSOPHY", language: "en", translation: "Filosofia", category: "Concepts", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1516962082635-c8b5947a1704?w=400" },
    { text: "ORCHESTRA", language: "en", translation: "Orchestra", category: "Music", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1465847899078-b29dedca4029?w=400" },

    // Italian Easy
    { text: "GATTO", language: "it", translation: "Cat", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" },
    { text: "CANE", language: "it", translation: "Dog", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400" },
    { text: "SOLE", language: "it", translation: "Sun", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1534234057639-50c55f750b32?w=400" },

    // Italian Medium
    { text: "BICICLETTA", language: "it", translation: "Bicycle", category: "Transport", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" },
    { text: "SPIAGGIA", language: "it", translation: "Beach", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },

    // Italian Hard
    { text: "ARCHITETTURA", language: "it", translation: "Architecture", category: "Concepts", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400" },
    { text: "MERAVIGLIOSO", language: "it", translation: "Wonderful", category: "Adjectives", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400" },
  ];

  for (const word of seedWords) {
    await storage.createWord(word);
  }
}
