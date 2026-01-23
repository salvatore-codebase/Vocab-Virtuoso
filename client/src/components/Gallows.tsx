import { motion } from "framer-motion";

interface GallowsProps {
  className?: string;
}

export function Gallows({ className = "" }: GallowsProps) {
  return (
    <div className={`relative w-64 h-96 ${className}`}>
      {/* Base */}
      <div className="absolute bottom-0 left-0 w-full h-8 wood-texture rounded-lg shadow-xl" />
      
      {/* Vertical Post */}
      <div className="absolute bottom-0 left-8 w-6 h-full wood-texture rounded-t-lg shadow-lg" />
      
      {/* Top Beam */}
      <div className="absolute top-4 left-6 w-48 h-6 wood-texture rounded-r-lg shadow-lg" />
      
      {/* Angled Support */}
      <div className="absolute top-10 left-8 w-16 h-4 wood-texture origin-left -rotate-45 rounded-sm" />
      
      {/* Rope */}
      <motion.div 
        className="absolute top-8 left-48 w-1 h-16 bg-amber-800/80 origin-top animate-sway"
        style={{ transformOrigin: "top center" }}
      >
        {/* Noose Loop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 border-4 border-amber-800/80 rounded-full translate-y-full" />
      </motion.div>
    </div>
  );
}
