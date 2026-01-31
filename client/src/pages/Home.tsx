import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { SceneBackground } from "@/components/SceneBackground";
import { ThemeId, BACKGROUNDS } from "@/hooks/use-game";
import { Button } from "@/components/ui/button";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Languages, Play } from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "it">("en");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [theme, setTheme] = useState<ThemeId>("beach");
  const [location, setLocation] = useLocation();

  const handleStart = () => {
    setLocation(`/game?lang=${language}&diff=${difficulty}&theme=${theme}`);
  };

  return (
    <SceneBackground themeId={theme}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <motion.h1 
              className="text-6xl md:text-7xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] stroke-black"
              style={{ textShadow: "4px 4px 0px #3b82f6" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              Hangman
            </motion.h1>
            <p className="text-xl text-white font-medium mt-2 drop-shadow-md">
              Learn a language, save the stickman!
            </p>
          </div>

          <Card className="backdrop-blur-xl bg-white/90 border-white/40 shadow-2xl rounded-3xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
            <CardContent className="p-6 space-y-6">
              
              {/* Language Selector */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-primary" /> Target Language
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`
                      p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                      ${language === "en" 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                      }
                    `}
                  >
                    <span className="text-3xl">🇬🇧</span>
                    <span className="font-bold">English</span>
                  </button>
                  <button
                    onClick={() => setLanguage("it")}
                    className={`
                      p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                      ${language === "it" 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                      }
                    `}
                  >
                    <span className="text-3xl">🇮🇹</span>
                    <span className="font-bold">Italian</span>
                  </button>
                </div>
              </div>

              {/* Difficulty Selector */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-secondary" /> Difficulty
                </label>
                <Select value={difficulty} onValueChange={(v: any) => setDifficulty(v)}>
                  <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-white">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-slate-200 shadow-lg">
                    <SelectItem value="easy">Easy (8 Lives + Hints)</SelectItem>
                    <SelectItem value="medium">Medium (6 Lives)</SelectItem>
                    <SelectItem value="hard">Hard (4 Lives)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Theme Selector */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" /> Location
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {BACKGROUNDS.map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => setTheme(bg.id)}
                      className={`
                        flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden relative
                        ${theme === bg.id ? 'border-primary ring-2 ring-primary/30' : 'border-transparent opacity-70 hover:opacity-100'}
                      `}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${bg.gradient}`} />
                      {theme === bg.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleStart}
                className="w-full h-14 text-xl rounded-xl bg-gradient-to-r from-primary to-violet-500 hover:to-violet-600 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="mr-2 w-6 h-6 fill-current" /> Start Adventure
              </Button>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SceneBackground>
  );
}
