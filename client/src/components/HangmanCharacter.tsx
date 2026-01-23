import { motion, AnimatePresence } from "framer-motion";

interface HangmanCharacterProps {
  livesLost: number;
  maxLives: number;
  difficulty: "easy" | "medium" | "hard";
}

export function HangmanCharacter({ livesLost, maxLives, difficulty }: HangmanCharacterProps) {
  // Define parts based on difficulty
  // Easy (8): Head, Body, L-Arm, R-Arm, L-Leg, R-Leg, Hat, Scarf
  // Medium (6): Head, Body, L-Arm, R-Arm, L-Leg, R-Leg
  // Hard (4): Start with no limbs (or 4 parts remaining logic) -> We draw Head, Body, Arms, Legs normally but game ends faster?
  // Re-reading logic: Hard starts with NO arms or NO legs. Let's make it simpler:
  // We map 'livesLost' to specific visible parts. 
  
  // Let's create a visibility map. 
  // If livesLost >= 1, show part 1.
  
  const getVisibleParts = () => {
    // Determine order of appearance based on difficulty
    // Easy: Hat -> Scarf -> Head -> Body -> LA -> RA -> LL -> RL (Total 8)
    // Medium: Head -> Body -> LA -> RA -> LL -> RL (Total 6)
    // Hard: Head -> Body -> LegsTogether -> ArmsTogether (Total 4) -- OR simpler mapping
    
    // Mapping livesLost to parts shown
    if (difficulty === "easy") {
       return {
         hat: livesLost >= 1,
         scarf: livesLost >= 2,
         head: livesLost >= 3,
         body: livesLost >= 4,
         lArm: livesLost >= 5,
         rArm: livesLost >= 6,
         lLeg: livesLost >= 7,
         rLeg: livesLost >= 8,
       };
    } else if (difficulty === "medium") {
      return {
         head: livesLost >= 1,
         body: livesLost >= 2,
         lArm: livesLost >= 3,
         rArm: livesLost >= 4,
         lLeg: livesLost >= 5,
         rLeg: livesLost >= 6,
         hat: false, scarf: false
      };
    } else {
      // Hard mode (4 lives)
      return {
         head: livesLost >= 1,
         body: livesLost >= 2,
         // Both arms at once
         lArm: livesLost >= 3,
         rArm: livesLost >= 3,
         // Both legs at once
         lLeg: livesLost >= 4,
         rLeg: livesLost >= 4,
         hat: false, scarf: false
      };
    }
  };

  const parts = getVisibleParts();

  return (
    <div className="relative w-full h-full animate-sway origin-top scale-75" style={{ transformOrigin: "50% -15px" }}>
      <AnimatePresence>
        {/* HEAD */}
        {parts.head && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-skin-300 rounded-full border-[3px] border-slate-800 z-20 shadow-sm flex items-center justify-center bg-[#f5d0b0]"
          >
            {/* Face */}
            <div className="flex gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>
            <div className="absolute bottom-2 w-3 h-0.5 bg-slate-800 rounded-full opacity-60" />
          </motion.div>
        )}

        {/* HAT (Accessory 1) */}
        {parts.hat && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
          >
             <div className="w-16 h-3 bg-slate-800 rounded-full" />
             <div className="w-10 h-7 bg-slate-800 -mt-1.5 mx-auto rounded-t-lg" />
          </motion.div>
        )}

        {/* SCARF (Accessory 2) */}
        {parts.scarf && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-9 left-1/2 -translate-x-1/2 z-20 w-12 h-6"
          >
            <div className="w-full h-3 bg-red-500 rounded-full absolute top-0" />
            <div className="w-3 h-8 bg-red-500 rounded-b-md absolute right-1.5 top-1.5 rotate-12" />
          </motion.div>
        )}

        {/* BODY */}
        {parts.body && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 60, opacity: 1 }}
            className="absolute top-11 left-1/2 -translate-x-1/2 w-9 bg-blue-500 border-[3px] border-slate-800 rounded-b-xl z-10"
          />
        )}

        {/* LEFT ARM */}
        {parts.lArm && (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 30, opacity: 1 }}
            className="absolute top-13 left-1 w-9 h-3 bg-[#f5d0b0] border-[3px] border-slate-800 rounded-full origin-right -z-10"
          />
        )}

        {/* RIGHT ARM */}
        {parts.rArm && (
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: -30, opacity: 1 }}
            className="absolute top-13 right-1 w-9 h-3 bg-[#f5d0b0] border-[3px] border-slate-800 rounded-full origin-left -z-10"
          />
        )}

        {/* LEFT LEG */}
        {parts.lLeg && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 45 }}
            className="absolute top-[100px] left-[calc(50%-1.1rem)] w-3 bg-slate-700 border-x-[3px] border-b-[3px] border-slate-800 rounded-b-full origin-top -rotate-12"
          />
        )}

        {/* RIGHT LEG */}
        {parts.rLeg && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 45 }}
            className="absolute top-[100px] right-[calc(50%-1.1rem)] w-3 bg-slate-700 border-x-[3px] border-b-[3px] border-slate-800 rounded-b-full origin-top rotate-12"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
