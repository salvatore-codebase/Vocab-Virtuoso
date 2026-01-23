import { motion } from "framer-motion";

interface WordDisplayProps {
  word: string;
  guessedLetters: Set<string>;
  revealed: boolean;
}

export function WordDisplay({ word, guessedLetters, revealed }: WordDisplayProps) {
  const letters = word.split('');

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-8">
      {letters.map((letter, index) => {
        const isGuessed = guessedLetters.has(letter.toLowerCase());
        const isSpace = letter === ' ';
        const show = isGuessed || revealed || isSpace;

        if (isSpace) return <div key={index} className="w-4 md:w-8" />;

        return (
          <div 
            key={index}
            className={`
              relative w-10 h-14 md:w-14 md:h-20 
              flex items-center justify-center 
              text-2xl md:text-4xl font-display font-bold
              bg-white/90 shadow-sm rounded-lg border-b-4 
              transition-all duration-300
              ${show 
                ? 'border-primary text-primary -translate-y-1' 
                : 'border-slate-300 bg-slate-100/50'
              }
            `}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
            >
              {letter.toUpperCase()}
            </motion.span>
            
            {!show && (
              <div className="absolute bottom-2 w-8 h-1 bg-slate-300 rounded-full" />
            )}
          </div>
        );
      })}
    </div>
  );
}
