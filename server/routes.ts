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
    // ============ ENGLISH WORDS ============
    // EASY (3-4 letters)
    { text: "CAT", language: "en", translation: "Gatto", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" },
    { text: "DOG", language: "en", translation: "Cane", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400" },
    { text: "SUN", language: "en", translation: "Sole", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1534234057639-50c55f750b32?w=400" },
    { text: "BOOK", language: "en", translation: "Libro", category: "Objects", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400" },
    { text: "FISH", language: "en", translation: "Pesce", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400" },
    { text: "BIRD", language: "en", translation: "Uccello", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400" },
    { text: "BALL", language: "en", translation: "Palla", category: "Sports", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { text: "TREE", language: "en", translation: "Albero", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400" },
    { text: "MOON", language: "en", translation: "Luna", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400" },
    { text: "STAR", language: "en", translation: "Stella", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400" },
    
    // MEDIUM (5-7 letters)
    { text: "BICYCLE", language: "en", translation: "Bicicletta", category: "Transport", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" },
    { text: "PIZZA", language: "en", translation: "Pizza", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
    { text: "GARDEN", language: "en", translation: "Giardino", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
    { text: "GUITAR", language: "en", translation: "Chitarra", category: "Music", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400" },
    { text: "COFFEE", language: "en", translation: "Caffe", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" },
    { text: "SOCCER", language: "en", translation: "Calcio", category: "Sports", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400" },
    { text: "TENNIS", language: "en", translation: "Tennis", category: "Sports", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400" },
    { text: "RABBIT", language: "en", translation: "Coniglio", category: "Animals", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400" },
    { text: "CHEESE", language: "en", translation: "Formaggio", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400" },
    { text: "BANANA", language: "en", translation: "Banana", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
    
    // HARD (8+ letters)
    { text: "ORCHESTRA", language: "en", translation: "Orchestra", category: "Music", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1465847899078-b29dedca4029?w=400" },
    { text: "BUTTERFLY", language: "en", translation: "Farfalla", category: "Animals", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1559715541-d4bab2c591d0?w=400" },
    { text: "CHOCOLATE", language: "en", translation: "Cioccolato", category: "Food", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400" },
    { text: "BASKETBALL", language: "en", translation: "Pallacanestro", category: "Sports", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400" },
    { text: "STRAWBERRY", language: "en", translation: "Fragola", category: "Food", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400" },

    // ============ ITALIAN WORDS ============
    // EASY (3-4 letters)
    { text: "GATTO", language: "it", translation: "Cat", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" },
    { text: "CANE", language: "it", translation: "Dog", category: "Animals", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400" },
    { text: "SOLE", language: "it", translation: "Sun", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1534234057639-50c55f750b32?w=400" },
    { text: "LUNA", language: "it", translation: "Moon", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400" },
    { text: "MARE", language: "it", translation: "Sea", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
    { text: "ROSA", language: "it", translation: "Rose", category: "Nature", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400" },
    { text: "PANE", language: "it", translation: "Bread", category: "Food", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { text: "VINO", language: "it", translation: "Wine", category: "Food", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400" },
    { text: "UOVO", language: "it", translation: "Egg", category: "Food", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400" },
    { text: "MELA", language: "it", translation: "Apple", category: "Food", difficulty: "easy", imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2uj40?w=400" },
    
    // MEDIUM (5-7 letters)
    { text: "PIZZA", language: "it", translation: "Pizza", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
    { text: "GELATO", language: "it", translation: "Ice Cream", category: "Food", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68a?w=400" },
    { text: "CAVALLO", language: "it", translation: "Horse", category: "Animals", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400" },
    { text: "SPIAGGIA", language: "it", translation: "Beach", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
    { text: "CITTA", language: "it", translation: "City", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
    { text: "CALCIO", language: "it", translation: "Soccer", category: "Sports", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400" },
    { text: "MUSEO", language: "it", translation: "Museum", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400" },
    { text: "CHIESA", language: "it", translation: "Church", category: "Places", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400" },
    { text: "TRENO", language: "it", translation: "Train", category: "Transport", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400" },
    { text: "AEREO", language: "it", translation: "Airplane", category: "Transport", difficulty: "medium", imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400" },
    
    // HARD (8+ letters)
    { text: "ARCHITETTURA", language: "it", translation: "Architecture", category: "Concepts", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400" },
    { text: "RISTORANTE", language: "it", translation: "Restaurant", category: "Places", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400" },
    { text: "BIBLIOTECA", language: "it", translation: "Library", category: "Places", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" },
    { text: "CIOCCOLATO", language: "it", translation: "Chocolate", category: "Food", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400" },
    { text: "ELEFANTE", language: "it", translation: "Elephant", category: "Animals", difficulty: "hard", imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400" },
  ];

  for (const word of seedWords) {
    await storage.createWord(word);
  }
}
