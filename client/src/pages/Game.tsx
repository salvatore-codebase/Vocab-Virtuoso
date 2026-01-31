import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useRandomWord, ThemeId } from "@/hooks/use-game";
import { SceneBackground } from "@/components/SceneBackground";
import { Gallows } from "@/components/Gallows";
import { WordDisplay } from "@/components/WordDisplay";
import { Keyboard } from "@/components/Keyboard";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, RefreshCw, Trophy, Skull } from "lucide-react";
import { Link } from "wouter";

export default function Game() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  
  const lang = (searchParams.get("lang") || "it") as "en" | "it";
  const diff = (searchParams.get("diff") || "medium") as "easy" | "medium" | "hard";
  const theme = (searchParams.get("theme") || "beach") as ThemeId;

  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [livesLost, setLivesLost] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

  const { data: wordData, isLoading, refetch } = useRandomWord({
    language: lang,
    difficulty: diff
  }, true);

  // Difficulty settings
  const MAX_LIVES = diff === "easy" ? 8 : diff === "medium" ? 6 : 4;

  const handleGuess = (letter: string) => {
    if (gameStatus !== "playing" || !wordData) return;
    
    setGuessedLetters(prev => {
      const newSet = new Set(prev);
      newSet.add(letter);
      return newSet;
    });

    if (!wordData.text.toLowerCase().includes(letter)) {
      setLivesLost(prev => prev + 1);
    }
  };

  // Check win/loss
  useEffect(() => {
    if (!wordData) return;

    const wordLetters = wordData.text.toLowerCase().split('').filter(c => c !== ' ');
    const isWin = wordLetters.every(l => guessedLetters.has(l));
    const isLoss = livesLost >= MAX_LIVES;

    if (isWin && gameStatus !== "won") {
      setGameStatus("won");
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#3b82f6']
      });
    } else if (isLoss && gameStatus !== "lost") {
      setGameStatus("lost");
    }
  }, [guessedLetters, livesLost, wordData, gameStatus, MAX_LIVES]);

  const handleRestart = () => {
    setGuessedLetters(new Set());
    setLivesLost(0);
    setGameStatus("playing");
    refetch();
  };

  if (isLoading || !wordData) {
    return (
      <SceneBackground themeId={theme}>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-white" />
        </div>
      </SceneBackground>
    );
  }

  return (
    <SceneBackground themeId={theme}>
      <div className="h-screen w-full flex flex-col items-center relative p-2 overflow-hidden">
        
        {/* Header */}
        <header className="w-full max-w-6xl flex justify-between items-center z-10 mb-2 shrink-0">
          <Link href="/" className="inline-flex items-center gap-2 text-white font-bold bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Link>
          <div className="flex gap-2">
             <div className="px-3 py-1.5 bg-white/90 backdrop-blur rounded-full font-bold shadow-sm text-primary text-sm">
               Lives: {MAX_LIVES - livesLost}
             </div>
             <div className="px-3 py-1.5 bg-white/90 backdrop-blur rounded-full font-bold shadow-sm text-slate-700 capitalize text-sm">
               {diff} Mode
             </div>
          </div>
        </header>

        {/* Main Game Area */}
        <div className="flex flex-row items-start justify-between w-full max-w-7xl flex-1 px-4 relative min-h-0 pt-6">
          
          {/* Left: Gallows Area - character is now integrated inside Gallows component */}
          <div className="relative flex-shrink-0 z-10">
            <Gallows 
              livesLost={livesLost}
              maxLives={MAX_LIVES}
              difficulty={diff}
            />
          </div>

          {/* Right: Clue Card & Word */}
          <div className="flex flex-col items-center w-full max-w-sm z-10 pt-2 shrink-0">
            
            {/* Clue Card */}
            <motion.div 
              initial={{ rotate: 1, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              className="w-full paper-texture p-3 rounded-sm shadow-[2px_2px_10px_rgba(0,0,0,0.1)] border border-slate-200 transform rotate-1 mb-4"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-video max-h-32 bg-slate-100 rounded-sm overflow-hidden border-2 border-white shadow-inner relative group">
                  <img 
                    src={wordData.imageUrl} 
                    alt="Clue" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Translation Clue</span>
                  <h2 className="text-lg font-display font-bold text-slate-800 leading-tight">{wordData.translation}</h2>
                  <span className="inline-block mt-0.5 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-[10px] font-bold uppercase tracking-wide">
                    {wordData.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Word Display */}
            <div className="scale-90 origin-top">
              <WordDisplay 
                word={wordData.text} 
                guessedLetters={guessedLetters} 
                revealed={gameStatus !== "playing"} 
              />
            </div>
          </div>
        </div>

        {/* Bottom: Keyboard */}
        <div className="w-full max-w-4xl z-20 pb-4 mt-auto shrink-0 px-4">
          <div className="scale-90 lg:scale-100 origin-bottom">
            <Keyboard 
              onGuess={handleGuess} 
              guessedLetters={guessedLetters} 
              disabled={gameStatus !== "playing"} 
            />
          </div>
        </div>

        {/* Game Over Modal */}
        <AnimatePresence>
          {gameStatus !== "playing" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl text-center"
              >
                {gameStatus === "won" ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                      <Trophy className="w-10 h-10 text-yellow-600" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-slate-800">You Won!</h2>
                    <p className="text-slate-500 text-lg">You saved the stickman!</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <Skull className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-slate-800">Game Over</h2>
                    <p className="text-slate-500 text-lg">The word was <span className="font-bold text-slate-900">{wordData.text}</span></p>
                  </div>
                )}
                
                <div className="mt-8 flex gap-4">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full h-12 rounded-xl border-2">
                      Menu
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleRestart}
                    className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" /> Play Again
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </SceneBackground>
  );
}
