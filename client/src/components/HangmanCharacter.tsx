import { motion, AnimatePresence } from "framer-motion";

interface HangmanCharacterProps {
  livesLost: number;
  maxLives: number;
  difficulty: "easy" | "medium" | "hard";
}

export function HangmanCharacter({ livesLost, maxLives, difficulty }: HangmanCharacterProps) {
  const getVisibleParts = () => {
    // Reverse logic: Part is visible if it hasn't fallen off yet
    if (difficulty === "easy") {
       return {
         hat: livesLost < 1,
         scarf: livesLost < 2,
         head: livesLost < 3,
         body: livesLost < 4,
         lArm: livesLost < 5,
         rArm: livesLost < 6,
         lLeg: livesLost < 7,
         rLeg: livesLost < 8,
       };
    } else if (difficulty === "medium") {
      return {
         head: livesLost < 1,
         body: livesLost < 2,
         lArm: livesLost < 3,
         rArm: livesLost < 4,
         lLeg: livesLost < 5,
         rLeg: livesLost < 6,
         hat: false, scarf: false
      };
    } else {
      return {
         head: livesLost < 1,
         body: livesLost < 2,
         lArm: livesLost < 3,
         rArm: livesLost < 3,
         lLeg: livesLost < 4,
         rLeg: livesLost < 4,
         hat: false, scarf: false
      };
    }
  };

  const parts = getVisibleParts();

  const fallVariants = {
    initial: { scale: 1, opacity: 1, y: 0, rotate: 0 },
    exit: { 
      y: 500, 
      rotate: [0, 45, 90], 
      opacity: 0,
      transition: { duration: 1, ease: "easeIn" } 
    }
  };

  return (
    <div className="relative w-full h-full animate-sway origin-top scale-110" style={{ transformOrigin: "50% -15px" }}>
      <AnimatePresence>
        {/* HEAD */}
        {parts.head && (
          <motion.div
            key="head"
            variants={fallVariants}
            initial="initial"
            exit="exit"
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
            key="hat"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
          >
             <div className="w-16 h-3 bg-slate-800 rounded-full" />
             <div className="w-10 h-7 bg-slate-800 -mt-1.5 mx-auto rounded-t-lg" />
          </motion.div>
        )}

        {/* SCARF (Accessory 2) */}
        {parts.scarf && (
          <motion.div
            key="scarf"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-9 left-1/2 -translate-x-1/2 z-20 w-12 h-6"
          >
            <div className="w-full h-3 bg-red-500 rounded-full absolute top-0" />
            <div className="w-3 h-8 bg-red-500 rounded-b-md absolute right-1.5 top-1.5 rotate-12" />
          </motion.div>
        )}

        {/* BODY */}
        {parts.body && (
          <motion.div
            key="body"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-11 left-1/2 -translate-x-1/2 w-9 h-[60px] bg-blue-500 border-[3px] border-slate-800 rounded-b-xl z-10"
          />
        )}

        {/* LEFT ARM */}
        {parts.lArm && (
          <motion.div
            key="lArm"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-13 left-1 w-9 h-3 bg-[#f5d0b0] border-[3px] border-slate-800 rounded-full origin-right -z-10"
          />
        )}

        {/* RIGHT ARM */}
        {parts.rArm && (
          <motion.div
            key="rArm"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-13 right-1 w-9 h-3 bg-[#f5d0b0] border-[3px] border-slate-800 rounded-full origin-left -z-10"
          />
        )}

        {/* LEFT LEG */}
        {parts.lLeg && (
          <motion.div
            key="lLeg"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[100px] left-[calc(50%-1.1rem)] w-3 h-[45px] bg-slate-700 border-x-[3px] border-b-[3px] border-slate-800 rounded-b-full origin-top -rotate-12"
          />
        )}

        {/* RIGHT LEG */}
        {parts.rLeg && (
          <motion.div
            key="rLeg"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[100px] right-[calc(50%-1.1rem)] w-3 h-[45px] bg-slate-700 border-x-[3px] border-b-[3px] border-slate-800 rounded-b-full origin-top rotate-12"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
