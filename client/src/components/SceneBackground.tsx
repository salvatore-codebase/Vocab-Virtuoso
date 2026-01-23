import { ReactNode } from 'react';
import { BACKGROUNDS, ThemeId } from "@/hooks/use-game";

interface SceneBackgroundProps {
  themeId: ThemeId;
  children: ReactNode;
}

export function SceneBackground({ themeId, children }: SceneBackgroundProps) {
  const theme = BACKGROUNDS.find(b => b.id === themeId) || BACKGROUNDS[0];

  return (
    <div className={`min-h-screen w-full relative overflow-hidden bg-gradient-to-b ${theme.gradient} transition-colors duration-1000`}>
      {/* Dynamic Scenery Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {themeId === 'city' && (
          <>
            <div className="absolute bottom-0 w-full h-48 bg-slate-800/10 backdrop-blur-[1px] clip-path-skyline" />
            <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-100 rounded-full blur-xl opacity-60 animate-pulse" />
          </>
        )}
        
        {themeId === 'beach' && (
          <>
            <div className="absolute bottom-0 w-full h-32 bg-yellow-200/80" />
            <div className="absolute bottom-0 w-full h-24 bg-blue-400/30 animate-wave" />
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full shadow-[0_0_40px_rgba(253,224,71,0.6)]" />
          </>
        )}
        
        {themeId === 'space' && (
          <>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </>
        )}

        {/* Common Cloud Layer */}
        {themeId !== 'space' && (
           <div className="absolute top-10 left-0 w-full opacity-60">
             <div className="absolute top-4 left-10 w-24 h-8 bg-white/40 rounded-full blur-md animate-drift-slow" />
             <div className="absolute top-12 right-20 w-32 h-10 bg-white/30 rounded-full blur-md animate-drift-medium" />
           </div>
        )}
      </div>

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
