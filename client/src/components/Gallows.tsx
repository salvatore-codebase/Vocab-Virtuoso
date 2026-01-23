import { motion } from "framer-motion";

interface GallowsProps {
  className?: string;
}

export function Gallows({ className = "" }: GallowsProps) {
  return (
    <div className={`relative w-48 h-72 ${className} scale-75 origin-top-left`}>
      {/* Base */}
      <div className="absolute bottom-0 left-0 w-full h-6 wood-texture rounded-lg shadow-xl" />
      
      {/* Vertical Post */}
      <div className="absolute bottom-0 left-6 w-5 h-full wood-texture rounded-t-lg shadow-lg" />
      
      {/* Top Beam */}
      <div className="absolute top-4 left-4 w-36 h-5 wood-texture rounded-r-lg shadow-lg" />
      
      {/* Angled Support */}
      <div className="absolute top-8 left-6 w-12 h-3 wood-texture origin-left -rotate-45 rounded-sm" />
      
      {/* Rope */}
      <motion.div 
        className="absolute top-6 left-36 w-0.5 h-12 bg-amber-800/80 origin-top animate-sway"
        style={{ transformOrigin: "top center" }}
      >
        {/* Noose Loop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-5 border-[3px] border-amber-800/80 rounded-full translate-y-full" />
      </motion.div>
    </div>
  );
}
