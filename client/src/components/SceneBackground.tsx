import { ReactNode } from 'react';
import { BACKGROUNDS, ThemeId } from "@/hooks/use-game";

interface SceneBackgroundProps {
  themeId: ThemeId;
  children: ReactNode;
}

function CityScene() {
  return (
    <>
      {/* Sky with sun */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.6)]" />
      
      {/* Buildings silhouette */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Building 1 */}
        <div className="absolute bottom-0 left-[5%] w-20 h-48 bg-slate-700 rounded-t-lg">
          <div className="grid grid-cols-3 gap-1 p-2 pt-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-3 h-4 bg-yellow-200/80 rounded-sm" />
            ))}
          </div>
        </div>
        {/* Building 2 */}
        <div className="absolute bottom-0 left-[15%] w-28 h-64 bg-slate-600 rounded-t-md">
          <div className="grid grid-cols-4 gap-1 p-2 pt-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`w-3 h-4 rounded-sm ${Math.random() > 0.3 ? 'bg-yellow-100/70' : 'bg-slate-800'}`} />
            ))}
          </div>
        </div>
        {/* Building 3 */}
        <div className="absolute bottom-0 left-[30%] w-16 h-40 bg-slate-800 rounded-t-lg">
          <div className="grid grid-cols-2 gap-1 p-2 pt-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-4 h-5 bg-cyan-200/60 rounded-sm" />
            ))}
          </div>
        </div>
        {/* Building 4 */}
        <div className="absolute bottom-0 right-[25%] w-24 h-56 bg-slate-700 rounded-t-md">
          <div className="grid grid-cols-3 gap-1 p-2 pt-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className={`w-4 h-5 rounded-sm ${Math.random() > 0.4 ? 'bg-orange-100/60' : 'bg-slate-900'}`} />
            ))}
          </div>
        </div>
        {/* Building 5 */}
        <div className="absolute bottom-0 right-[5%] w-20 h-36 bg-slate-600 rounded-t-lg">
          <div className="grid grid-cols-3 gap-1 p-2 pt-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-3 h-4 bg-yellow-50/50 rounded-sm" />
            ))}
          </div>
        </div>
        
        {/* Sidewalk */}
        <div className="absolute bottom-0 w-full h-12 bg-gray-400" />
        <div className="absolute bottom-12 w-full h-2 bg-gray-500" />
        
        {/* Road */}
        <div className="absolute bottom-14 w-full h-16 bg-gray-700">
          <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-yellow-400/60" />
        </div>
      </div>
      
      {/* Walking people */}
      <div className="absolute bottom-14 animate-walk-right" style={{ animationDelay: '0s' }}>
        <div className="w-6 h-10 flex flex-col items-center">
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-5 h-6 bg-blue-500 rounded-t-md" />
        </div>
      </div>
      <div className="absolute bottom-14 animate-walk-left" style={{ animationDelay: '3s' }}>
        <div className="w-6 h-10 flex flex-col items-center">
          <div className="w-4 h-4 bg-amber-100 rounded-full" />
          <div className="w-5 h-6 bg-red-400 rounded-t-md" />
        </div>
      </div>
      <div className="absolute bottom-14 animate-walk-right" style={{ animationDelay: '7s' }}>
        <div className="w-6 h-10 flex flex-col items-center">
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-5 h-6 bg-green-500 rounded-t-md" />
        </div>
      </div>
      
      {/* Cars on road */}
      <div className="absolute bottom-[72px] animate-drive-right" style={{ animationDelay: '0s' }}>
        <div className="w-16 h-6 bg-red-500 rounded-md relative">
          <div className="absolute top-0 left-2 w-5 h-3 bg-red-600 rounded-t-md" />
          <div className="absolute bottom-0 left-1 w-3 h-3 bg-gray-800 rounded-full" />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-gray-800 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-[72px] animate-drive-right" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-5 bg-blue-600 rounded-md relative">
          <div className="absolute top-0 left-2 w-4 h-2 bg-blue-700 rounded-t-md" />
          <div className="absolute bottom-0 left-1 w-2 h-2 bg-gray-800 rounded-full" />
          <div className="absolute bottom-0 right-1 w-2 h-2 bg-gray-800 rounded-full" />
        </div>
      </div>
      
      {/* Clouds */}
      <div className="absolute top-16 left-[10%] w-24 h-8 bg-white/70 rounded-full blur-sm animate-drift-slow" />
      <div className="absolute top-24 right-[20%] w-32 h-10 bg-white/60 rounded-full blur-sm animate-drift-medium" />
    </>
  );
}

function BeachScene() {
  return (
    <>
      {/* Sun */}
      <div className="absolute top-8 right-16 w-24 h-24 bg-yellow-400 rounded-full shadow-[0_0_80px_rgba(253,224,71,0.7)]" />
      
      {/* Ocean */}
      <div className="absolute bottom-32 w-full h-40 bg-gradient-to-b from-cyan-400 to-blue-500">
        {/* Waves */}
        <div className="absolute bottom-0 w-[200%] h-8 bg-blue-300/60 rounded-t-full animate-wave" />
        <div className="absolute bottom-2 w-[200%] h-6 bg-cyan-200/50 rounded-t-full animate-wave" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-4 w-[200%] h-4 bg-white/30 rounded-t-full animate-wave" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Beach sand */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-yellow-200 to-yellow-300" />
      
      {/* Beach ball */}
      <div className="absolute bottom-20 left-[20%] animate-beachball">
        <div className="w-10 h-10 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-red-500" />
          <div className="absolute top-0 left-0 w-1/2 h-full bg-white" />
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-500" />
          <div className="absolute inset-0 rounded-full border-2 border-white/30" />
        </div>
      </div>
      
      {/* Sand crabs */}
      <div className="absolute bottom-8 left-[30%] animate-crab" style={{ animationDelay: '0s' }}>
        <div className="w-6 h-3 bg-orange-400 rounded-full relative">
          <div className="absolute -top-1 -left-2 w-2 h-1 bg-orange-500 rounded-full rotate-45" />
          <div className="absolute -top-1 -right-2 w-2 h-1 bg-orange-500 rounded-full -rotate-45" />
          <div className="absolute top-0 left-1 w-1 h-1 bg-black rounded-full" />
          <div className="absolute top-0 right-1 w-1 h-1 bg-black rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-12 right-[25%] animate-crab" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-2 bg-orange-300 rounded-full relative">
          <div className="absolute -top-1 -left-1.5 w-1.5 h-1 bg-orange-400 rounded-full rotate-45" />
          <div className="absolute -top-1 -right-1.5 w-1.5 h-1 bg-orange-400 rounded-full -rotate-45" />
        </div>
      </div>
      
      {/* Seagulls */}
      <div className="absolute top-20 animate-seagull" style={{ animationDelay: '0s' }}>
        <div className="text-2xl">🐦</div>
      </div>
      <div className="absolute top-32 animate-seagull" style={{ animationDelay: '4s' }}>
        <div className="text-xl">🐦</div>
      </div>
      <div className="absolute top-16 animate-seagull" style={{ animationDelay: '8s' }}>
        <div className="text-lg">🐦</div>
      </div>
      
      {/* Palm tree */}
      <div className="absolute bottom-32 left-[8%]">
        <div className="w-4 h-24 bg-gradient-to-r from-amber-700 to-amber-600 rounded-sm" />
        <div className="absolute -top-8 -left-6 w-16 h-8 bg-green-600 rounded-full rotate-[-30deg]" />
        <div className="absolute -top-6 left-0 w-14 h-7 bg-green-500 rounded-full rotate-[20deg]" />
        <div className="absolute -top-10 -right-4 w-12 h-6 bg-green-700 rounded-full rotate-[40deg]" />
      </div>
      
      {/* Clouds */}
      <div className="absolute top-12 left-[20%] w-20 h-6 bg-white/80 rounded-full blur-sm animate-drift-slow" />
      <div className="absolute top-20 right-[30%] w-28 h-8 bg-white/70 rounded-full blur-sm animate-drift-medium" />
    </>
  );
}

function ForestScene() {
  return (
    <>
      {/* Sun peeking through */}
      <div className="absolute top-4 right-[30%] w-16 h-16 bg-yellow-200 rounded-full blur-xl opacity-60" />
      
      {/* Trees - layered for depth */}
      <div className="absolute bottom-0 w-full">
        {/* Background trees */}
        <div className="absolute bottom-20 left-[5%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-transparent border-b-green-900/80" />
        <div className="absolute bottom-20 left-[15%] w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-transparent border-b-green-800/70" />
        <div className="absolute bottom-20 right-[10%] w-0 h-0 border-l-[35px] border-r-[35px] border-b-[70px] border-transparent border-b-green-900/80" />
        <div className="absolute bottom-20 right-[25%] w-0 h-0 border-l-[28px] border-r-[28px] border-b-[55px] border-transparent border-b-green-800/70" />
        
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-green-900 to-green-800" />
        
        {/* Foreground trees */}
        <div className="absolute bottom-20 left-[25%]">
          <div className="w-6 h-16 bg-amber-800 mx-auto" />
          <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[80px] border-transparent border-b-green-700 -mt-4" />
        </div>
        <div className="absolute bottom-20 right-[35%]">
          <div className="w-5 h-14 bg-amber-700 mx-auto" />
          <div className="w-0 h-0 border-l-[35px] border-r-[35px] border-b-[70px] border-transparent border-b-green-600 -mt-4" />
        </div>
      </div>
      
      {/* Fireflies */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-firefly"
          style={{
            top: `${30 + Math.random() * 40}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Falling leaves */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full animate-leaf"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 10}s`,
            backgroundColor: ['#f59e0b', '#ef4444', '#eab308', '#f97316'][Math.floor(Math.random() * 4)],
          }}
        />
      ))}
      
      {/* Mushrooms */}
      <div className="absolute bottom-8 left-[40%]">
        <div className="w-4 h-3 bg-red-500 rounded-t-full relative">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-0.5 right-1 w-0.5 h-0.5 bg-white rounded-full" />
        </div>
        <div className="w-2 h-3 bg-amber-100 mx-auto" />
      </div>
      <div className="absolute bottom-6 right-[30%]">
        <div className="w-3 h-2 bg-red-400 rounded-t-full relative">
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full" />
        </div>
        <div className="w-1.5 h-2 bg-amber-50 mx-auto" />
      </div>
    </>
  );
}

function WildWestScene() {
  return (
    <>
      {/* Dusty sun */}
      <div className="absolute top-8 right-20 w-20 h-20 bg-orange-300 rounded-full blur-md opacity-80" />
      
      {/* Desert ground */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-amber-600 to-amber-400" />
      
      {/* Distant mountains */}
      <div className="absolute bottom-24 left-0 w-full">
        <div className="absolute bottom-0 left-[10%] w-0 h-0 border-l-[60px] border-r-[60px] border-b-[40px] border-transparent border-b-amber-700/60" />
        <div className="absolute bottom-0 left-[30%] w-0 h-0 border-l-[80px] border-r-[80px] border-b-[50px] border-transparent border-b-amber-800/50" />
        <div className="absolute bottom-0 right-[20%] w-0 h-0 border-l-[70px] border-r-[70px] border-b-[45px] border-transparent border-b-amber-700/55" />
      </div>
      
      {/* Saloon building */}
      <div className="absolute bottom-24 left-[15%]">
        <div className="w-28 h-20 bg-amber-800 relative">
          <div className="absolute -top-6 left-0 w-full h-8 bg-amber-900 border-t-4 border-amber-950" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-amber-200 font-bold">SALOON</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-amber-950 rounded-t-md" />
          <div className="absolute top-6 left-2 w-4 h-5 bg-amber-300/40" />
          <div className="absolute top-6 right-2 w-4 h-5 bg-amber-300/40" />
        </div>
      </div>
      
      {/* Water tower */}
      <div className="absolute bottom-24 right-[20%]">
        <div className="w-3 h-16 bg-amber-800 mx-auto" />
        <div className="w-12 h-10 bg-amber-700 rounded-md -mt-1 relative">
          <div className="absolute top-1 left-1 w-10 h-1 bg-amber-900" />
          <div className="absolute top-3 left-1 w-10 h-1 bg-amber-900" />
          <div className="absolute top-5 left-1 w-10 h-1 bg-amber-900" />
        </div>
      </div>
      
      {/* Cacti */}
      <div className="absolute bottom-24 left-[50%]">
        <div className="w-4 h-12 bg-green-700 rounded-t-full relative">
          <div className="absolute top-2 -left-3 w-3 h-6 bg-green-600 rounded-t-full rounded-bl-full" />
          <div className="absolute top-4 -right-3 w-3 h-5 bg-green-600 rounded-t-full rounded-br-full" />
        </div>
      </div>
      <div className="absolute bottom-24 right-[40%]">
        <div className="w-3 h-8 bg-green-600 rounded-t-full" />
      </div>
      
      {/* Tumbleweeds */}
      <div className="absolute bottom-28 animate-tumbleweed" style={{ animationDelay: '0s' }}>
        <div className="w-8 h-8 rounded-full border-4 border-amber-700 opacity-70" />
      </div>
      <div className="absolute bottom-32 animate-tumbleweed" style={{ animationDelay: '5s' }}>
        <div className="w-6 h-6 rounded-full border-3 border-amber-600 opacity-60" />
      </div>
      
      {/* Sandstorm dust */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-sandstorm" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/15 to-transparent animate-sandstorm" style={{ animationDelay: '4s' }} />
      
      {/* Dust particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-amber-300/50 rounded-full animate-drift-medium"
          style={{
            top: `${40 + Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
}

function SnowScene() {
  return (
    <>
      {/* Pale winter sun */}
      <div className="absolute top-10 right-24 w-16 h-16 bg-yellow-100 rounded-full blur-lg opacity-70" />
      
      {/* Snowy ground */}
      <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-white to-blue-50" />
      
      {/* Snow hills */}
      <div className="absolute bottom-20 left-0 w-40 h-20 bg-white rounded-t-full" />
      <div className="absolute bottom-16 left-32 w-48 h-24 bg-blue-50 rounded-t-full" />
      <div className="absolute bottom-18 right-10 w-36 h-18 bg-white rounded-t-full" />
      
      {/* Pine trees */}
      <div className="absolute bottom-28 left-[20%]">
        <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-transparent border-b-green-800" />
        <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-transparent border-b-green-700 -mt-3" />
        <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-transparent border-b-green-800 -mt-3" />
        <div className="w-3 h-6 bg-amber-800 mx-auto" />
        {/* Snow on tree */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-full" />
      </div>
      <div className="absolute bottom-28 right-[25%]">
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-green-700" />
        <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[25px] border-transparent border-b-green-800 -mt-2" />
        <div className="w-2 h-4 bg-amber-700 mx-auto" />
      </div>
      
      {/* Snowman */}
      <div className="absolute bottom-28 left-[45%]">
        <div className="w-8 h-8 bg-white rounded-full border border-blue-100 relative">
          <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full" />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-1 bg-orange-500 rounded-sm" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full border border-blue-100 -mt-2 mx-auto relative">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
        </div>
        <div className="w-12 h-12 bg-white rounded-full border border-blue-100 -mt-2 mx-auto" />
        {/* Hat */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="w-10 h-2 bg-black rounded-sm" />
          <div className="w-6 h-4 bg-black mx-auto -mt-0.5" />
        </div>
      </div>
      
      {/* Falling snowflakes */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-snowfall opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Light clouds */}
      <div className="absolute top-8 left-[15%] w-24 h-8 bg-white/60 rounded-full blur-sm animate-drift-slow" />
      <div className="absolute top-16 right-[25%] w-32 h-10 bg-blue-100/50 rounded-full blur-sm animate-drift-medium" />
    </>
  );
}

function SpaceScene() {
  return (
    <>
      {/* Stars - twinkling */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Larger stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-twinkle blur-[1px]"
          style={{
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Moon */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]">
        <div className="absolute top-3 left-4 w-4 h-4 bg-gray-400/50 rounded-full" />
        <div className="absolute top-8 right-3 w-3 h-3 bg-gray-400/40 rounded-full" />
        <div className="absolute bottom-4 left-6 w-2 h-2 bg-gray-400/30 rounded-full" />
      </div>
      
      {/* Planet - Saturn-like */}
      <div className="absolute top-[30%] left-[15%]">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-3 border-2 border-amber-300/60 rounded-full -rotate-12" />
        </div>
      </div>
      
      {/* Small planet */}
      <div className="absolute bottom-[35%] right-[12%]">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-planet-rotate" />
      </div>
      
      {/* Shooting stars */}
      <div className="absolute top-[20%] left-[60%] animate-shooting-star" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white,-10px_0_20px_white,-20px_0_30px_rgba(255,255,255,0.5)]" />
      </div>
      <div className="absolute top-[40%] left-[30%] animate-shooting-star" style={{ animationDelay: '5s', animationDuration: '2.5s' }}>
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white,-8px_0_16px_white,-16px_0_24px_rgba(255,255,255,0.4)]" />
      </div>
      
      {/* Nebula glow */}
      <div className="absolute top-[50%] right-[40%] w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-[30%] left-[50%] w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
      
      {/* Cosmic dust */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
    </>
  );
}

export function SceneBackground({ themeId, children }: SceneBackgroundProps) {
  const theme = BACKGROUNDS.find(b => b.id === themeId) || BACKGROUNDS[0];

  return (
    <div className={`min-h-screen w-full relative overflow-hidden bg-gradient-to-b ${theme.gradient} transition-colors duration-1000`}>
      {/* Dynamic Scenery Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {themeId === 'city' && <CityScene />}
        {themeId === 'beach' && <BeachScene />}
        {themeId === 'forest' && <ForestScene />}
        {themeId === 'wild-west' && <WildWestScene />}
        {themeId === 'snow' && <SnowScene />}
        {themeId === 'space' && <SpaceScene />}
      </div>

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
