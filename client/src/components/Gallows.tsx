import { motion } from "framer-motion";

interface GallowsProps {
  className?: string;
}

export function Gallows({ className = "" }: GallowsProps) {
  return (
    <div className={`relative w-64 h-96 ${className}`}>
      {/* Base - thick wooden plank */}
      <div 
        className="absolute bottom-0 left-0 w-full h-8 rounded-lg shadow-xl"
        style={{
          background: "linear-gradient(180deg, #8B4513 0%, #654321 50%, #5D4037 100%)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.4)"
        }}
      >
        {/* Wood grain lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1 left-2 w-16 h-0.5 bg-amber-900/50 rounded-full" />
          <div className="absolute top-3 left-8 w-24 h-0.5 bg-amber-900/50 rounded-full" />
          <div className="absolute top-5 left-4 w-20 h-0.5 bg-amber-900/50 rounded-full" />
        </div>
      </div>
      
      {/* Vertical Post - tall wooden beam */}
      <div 
        className="absolute bottom-6 left-8 w-8 rounded-t-md shadow-lg"
        style={{
          height: "calc(100% - 24px)",
          background: "linear-gradient(90deg, #654321 0%, #8B4513 30%, #A0522D 50%, #8B4513 70%, #654321 100%)",
          boxShadow: "inset 2px 0 4px rgba(255,255,255,0.15), inset -2px 0 4px rgba(0,0,0,0.3), 4px 0 8px rgba(0,0,0,0.3)"
        }}
      >
        {/* Wood grain vertical */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-1 w-0.5 h-32 bg-amber-950 rounded-full" />
          <div className="absolute top-20 left-3 w-0.5 h-40 bg-amber-950 rounded-full" />
          <div className="absolute top-4 left-5 w-0.5 h-28 bg-amber-950 rounded-full" />
        </div>
        {/* Knot */}
        <div className="absolute top-1/3 left-2 w-3 h-4 bg-amber-950/40 rounded-full" />
      </div>
      
      {/* Top Beam - horizontal wooden beam */}
      <div 
        className="absolute top-2 left-6 w-44 h-6 rounded-r-md shadow-lg"
        style={{
          background: "linear-gradient(180deg, #A0522D 0%, #8B4513 40%, #654321 100%)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3)"
        }}
      >
        {/* Wood grain horizontal */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1 left-4 w-20 h-0.5 bg-amber-950 rounded-full" />
          <div className="absolute top-3 left-8 w-28 h-0.5 bg-amber-950 rounded-full" />
        </div>
      </div>
      
      {/* Angled Support Brace */}
      <div 
        className="absolute top-6 left-10 w-16 h-4 origin-left -rotate-45 rounded-sm"
        style={{
          background: "linear-gradient(180deg, #8B4513 0%, #654321 100%)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)"
        }}
      />
      
      {/* ROPE - thicker and more visible */}
      <motion.div 
        className="absolute top-6 origin-top"
        style={{ 
          left: "176px",
          transformOrigin: "top center" 
        }}
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {/* Main rope - thick braided look */}
        <div 
          className="w-3 h-16 rounded-sm"
          style={{
            background: "linear-gradient(90deg, #8B6914 0%, #D4A84B 30%, #C4983B 50%, #B8922F 70%, #8B6914 100%)",
            boxShadow: "inset 1px 0 2px rgba(255,255,255,0.3), inset -1px 0 2px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          {/* Rope texture lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-3 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-5 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-7 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-9 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-11 left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
            <div className="absolute top-[52px] left-0.5 w-2 h-1 border-b border-amber-700/40 rounded-full" />
          </div>
        </div>
        
        {/* Noose Loop - larger and more visible */}
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-10 rounded-full translate-y-full"
          style={{
            border: "4px solid transparent",
            borderImage: "linear-gradient(180deg, #D4A84B 0%, #8B6914 100%) 1",
            background: "transparent"
          }}
        />
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-10 rounded-full translate-y-full border-4"
          style={{
            borderColor: "#B8922F",
            boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.2), 1px 1px 3px rgba(0,0,0,0.3)"
          }}
        />
      </motion.div>
    </div>
  );
}
