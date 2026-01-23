import { motion } from "framer-motion";

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guessedLetters: Set<string>;
  disabled: boolean;
}

const KEYS = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split("")
];

export function Keyboard({ onGuess, guessedLetters, disabled }: KeyboardProps) {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-3xl mx-auto p-4">
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 md:gap-2">
          {row.map((key) => {
            const isGuessed = guessedLetters.has(key.toLowerCase());
            
            return (
              <motion.button
                key={key}
                whileHover={!disabled && !isGuessed ? { scale: 1.1, y: -2 } : {}}
                whileTap={!disabled && !isGuessed ? { scale: 0.95 } : {}}
                onClick={() => !isGuessed && !disabled && onGuess(key.toLowerCase())}
                disabled={disabled || isGuessed}
                className={`
                  w-8 h-10 md:w-12 md:h-14 rounded-lg font-bold text-sm md:text-lg shadow-sm
                  transition-colors duration-200
                  ${isGuessed 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-inner'
                    : 'bg-white text-slate-700 hover:bg-primary hover:text-white border-b-4 border-slate-200 active:border-b-0 active:translate-y-1'
                  }
                `}
              >
                {key}
              </motion.button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
