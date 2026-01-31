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
    <div className="relative w-24 h-52 animate-sway origin-top" style={{ transformOrigin: "50% -15px" }}>
      <AnimatePresence>
        {/* HEAD - increased from w-12 h-12 to w-16 h-16 */}
        {parts.head && (
          <motion.div
            key="head"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-slate-800 z-20 shadow-sm flex items-center justify-center bg-[#f5d0b0]"
          >
            {/* Face */}
            <div className="flex gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
            <div className="absolute bottom-3 w-4 h-1 bg-slate-800 rounded-full opacity-60" />
          </motion.div>
        )}

        {/* HAT (Accessory 1) - increased size */}
        {parts.hat && (
          <motion.div
            key="hat"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute -top-5 left-1/2 -translate-x-1/2 z-30"
          >
             <div className="w-20 h-4 bg-slate-800 rounded-full" />
             <div className="w-14 h-9 bg-slate-800 -mt-2 mx-auto rounded-t-lg" />
          </motion.div>
        )}

        {/* SCARF (Accessory 2) - increased size */}
        {parts.scarf && (
          <motion.div
            key="scarf"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[52px] left-1/2 -translate-x-1/2 z-20 w-16 h-8"
          >
            <div className="w-full h-4 bg-red-500 rounded-full absolute top-0" />
            <div className="w-4 h-10 bg-red-500 rounded-b-md absolute right-2 top-2 rotate-12" />
          </motion.div>
        )}

        {/* BODY - increased from w-9 h-[60px] to w-12 h-[80px] */}
        {parts.body && (
          <motion.div
            key="body"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[58px] left-1/2 -translate-x-1/2 w-12 h-[80px] bg-blue-500 border-4 border-slate-800 rounded-b-xl z-10"
          />
        )}

        {/* LEFT ARM - increased from w-9 h-3 to w-12 h-4 */}
        {parts.lArm && (
          <motion.div
            key="lArm"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[68px] left-0 w-12 h-4 bg-[#f5d0b0] border-4 border-slate-800 rounded-full origin-right -z-10"
          />
        )}

        {/* RIGHT ARM - increased from w-9 h-3 to w-12 h-4 */}
        {parts.rArm && (
          <motion.div
            key="rArm"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[68px] right-0 w-12 h-4 bg-[#f5d0b0] border-4 border-slate-800 rounded-full origin-left -z-10"
          />
        )}

        {/* LEFT LEG - increased from w-3 h-[45px] to w-4 h-[55px] */}
        {parts.lLeg && (
          <motion.div
            key="lLeg"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[130px] left-[calc(50%-1.2rem)] w-4 h-[55px] bg-slate-700 border-x-4 border-b-4 border-slate-800 rounded-b-full origin-top -rotate-12"
          />
        )}

        {/* RIGHT LEG - increased from w-3 h-[45px] to w-4 h-[55px] */}
        {parts.rLeg && (
          <motion.div
            key="rLeg"
            variants={fallVariants}
            initial="initial"
            exit="exit"
            className="absolute top-[130px] right-[calc(50%-1.2rem)] w-4 h-[55px] bg-slate-700 border-x-4 border-b-4 border-slate-800 rounded-b-full origin-top rotate-12"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
