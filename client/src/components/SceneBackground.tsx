import { ReactNode, useMemo } from 'react';
import { BACKGROUNDS, ThemeId } from "@/hooks/use-game";

interface SceneBackgroundProps {
  themeId: ThemeId;
  children: ReactNode;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function CityScene() {
  const windowLights = useMemo(() => ({
    building2: Array.from({ length: 20 }).map((_, i) => seededRandom(i + 100) > 0.3),
    building4: Array.from({ length: 15 }).map((_, i) => seededRandom(i + 200) > 0.4),
  }), []);

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
            {windowLights.building2.map((isLit, i) => (
              <div key={i} className={`w-3 h-4 rounded-sm ${isLit ? 'bg-yellow-100/70' : 'bg-slate-800'}`} />
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
            {windowLights.building4.map((isLit, i) => (
              <div key={i} className={`w-4 h-5 rounded-sm ${isLit ? 'bg-orange-100/60' : 'bg-slate-900'}`} />
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

function Seagull({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.7 : 1;
  return (
    <div style={{ transform: `scale(${scale})` }} className="relative w-8 h-4">
      {/* Body */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-2 bg-white rounded-full" />
      {/* Head */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
      {/* Beak */}
      <div className="absolute top-1/2 right-[-3px] -translate-y-1/2 w-0 h-0 border-t-[2px] border-b-[2px] border-l-[4px] border-transparent border-l-orange-400" />
      {/* Left wing */}
      <div className="absolute top-0 left-1 w-3 h-1.5 bg-gray-600 rounded-t-full origin-bottom animate-[wing-flap_0.5s_ease-in-out_infinite]" />
      {/* Right wing */}
      <div className="absolute top-0 left-4 w-3 h-1.5 bg-gray-600 rounded-t-full origin-bottom animate-[wing-flap_0.5s_ease-in-out_infinite_0.1s]" />
    </div>
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
      
      {/* Seagulls - CSS based */}
      <div className="absolute top-20 animate-seagull" style={{ animationDelay: '0s' }}>
        <Seagull size="lg" />
      </div>
      <div className="absolute top-32 animate-seagull" style={{ animationDelay: '4s' }}>
        <Seagull size="md" />
      </div>
      <div className="absolute top-16 animate-seagull" style={{ animationDelay: '8s' }}>
        <Seagull size="sm" />
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
  const fireflies = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      top: 30 + seededRandom(i * 10) * 40,
      left: 10 + seededRandom(i * 20) * 80,
      delay: seededRandom(i * 30) * 4,
    })), []);

  const leaves = useMemo(() => 
    Array.from({ length: 6 }).map((_, i) => ({
      left: 10 + seededRandom(i * 50) * 80,
      delay: seededRandom(i * 60) * 10,
      color: ['#f59e0b', '#ef4444', '#eab308', '#f97316'][Math.floor(seededRandom(i * 70) * 4)],
    })), []);

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
      {fireflies.map((ff, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-firefly"
          style={{
            top: `${ff.top}%`,
            left: `${ff.left}%`,
            animationDelay: `${ff.delay}s`,
          }}
        />
      ))}
      
      {/* Falling leaves */}
      {leaves.map((leaf, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full animate-leaf"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            backgroundColor: leaf.color,
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
  const dustParticles = useMemo(() =>
    Array.from({ length: 8 }).map((_, i) => ({
      top: 40 + seededRandom(i * 15) * 30,
      left: seededRandom(i * 25) * 100,
      delay: seededRandom(i * 35) * 5,
    })), []);

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
        <div className="w-6 h-6 rounded-full border-[3px] border-amber-600 opacity-60" />
      </div>
      
      {/* Sandstorm dust */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-sandstorm" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/15 to-transparent animate-sandstorm" style={{ animationDelay: '4s' }} />
      
      {/* Dust particles */}
      {dustParticles.map((dp, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-amber-300/50 rounded-full animate-drift-medium"
          style={{
            top: `${dp.top}%`,
            left: `${dp.left}%`,
            animationDelay: `${dp.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function SnowScene() {
  const snowflakes = useMemo(() =>
    Array.from({ length: 25 }).map((_, i) => ({
      left: seededRandom(i * 5) * 100,
      delay: seededRandom(i * 8) * 8,
      duration: 6 + seededRandom(i * 12) * 4,
    })), []);

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
      {snowflakes.map((sf, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-snowfall opacity-80"
          style={{
            left: `${sf.left}%`,
            animationDelay: `${sf.delay}s`,
            animationDuration: `${sf.duration}s`,
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
  const stars = useMemo(() =>
    Array.from({ length: 40 }).map((_, i) => ({
      top: seededRandom(i * 3) * 80,
      left: seededRandom(i * 7) * 100,
      delay: seededRandom(i * 11) * 3,
    })), []);

  const largeStars = useMemo(() =>
    Array.from({ length: 8 }).map((_, i) => ({
      top: seededRandom(i * 13) * 70,
      left: seededRandom(i * 17) * 100,
      delay: seededRandom(i * 19) * 2,
    })), []);

  return (
    <>
      {/* Stars - twinkling */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Larger stars */}
      {largeStars.map((star, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-twinkle blur-[1px]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
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
