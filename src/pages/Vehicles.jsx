import React from 'react';
import { Search, SlidersHorizontal, Flame, Gauge, Battery, ArrowUpRight } from "lucide-react";

export default function Vehicles() {
  const filters = ["All", "Moving", "Stopped", "Low GPS", "Offline"];
  
  return (
    // 1. Root container takes full screen height and prevents page-level scrolling
    <div className="h-screen bg-gray-950 p-4 text-white flex flex-col overflow-hidden">
      
      {/* Header (Shrink-0 keeps this at the top) */}
      <div className="flex justify-between items-center mb-6 shrink-0">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <button className="bg-gray-800 px-4 py-2 rounded-lg font-bold text-yellow-400">+ ADD</button>
      </div>

      {/* Search & Filter (Shrink-0 keeps this fixed) */}
      <div className="flex gap-2 mb-6 shrink-0">
        <div className="flex-grow flex items-center bg-gray-900 border border-gray-800 px-4 py-3 rounded-xl gap-2">
          <Search size={20} className="text-gray-500" />
          <input className="bg-transparent w-full focus:outline-none text-sm" placeholder="Search vehicle number" />
        </div>
        <button className="bg-gray-900 border border-gray-800 p-3 rounded-xl"><SlidersHorizontal size={20} /></button>
      </div>

      {/* Categories (Shrink-0 keeps this fixed) */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 shrink-0 scrollbar-hide">
        {filters.map((f, i) => (
          <div key={f} className={`px-5 py-3 rounded-xl min-w-[90px] text-center ${i === 0 ? 'bg-blue-600' : 'bg-gray-900'}`}>
            <p className="text-xs text-gray-400">{f}</p>
            <p className="font-bold text-sm">{i === 0 ? "15" : "0" + i}</p>
          </div>
        ))}
      </div>

      {/* 2. Scrollable Vehicle List (flex-grow + overflow-y-auto enables internal scroll) */}
      <div className="flex-grow overflow-y-auto pb-4 space-y-4 [&::-webkit-scrollbar]:hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="text-yellow-500 mt-1"><Flame size={20} /></div>
                <div>
                  <h2 className="font-bold text-base">MH14KA3239 • CAR</h2>
                  <p className="text-red-400 text-xs">Stopped since 42 mins</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400">Today's Odo</p>
                <p className="text-yellow-500 font-bold text-xs">28.11 Km</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 mb-1">Last date received at : 01:56 PM, 12 Feb 2025</p>
            <p className="text-xs text-gray-500 mb-4">AH 47, Lilavati Greens, Talegaon Dabhade, Maharastra 410506, India</p>

            <div className="bg-black/40 rounded-lg p-2 flex justify-between text-[10px] mb-4 text-gray-400">
              <span>Licensed Purchased on - 18 Feb 2025</span>
              <span>Expire on - 18 Feb 2027</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1 text-[10px] text-gray-400"><Flame size={16}/>ON</div>
                <div className="flex flex-col items-center gap-1 text-[10px] text-gray-400"><Gauge size={16}/>0 km/hr</div>
                <div className="flex flex-col items-center gap-1 text-[10px] text-gray-400"><Battery size={16}/>78%</div>
              </div>
              <button className="bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-1 text-xs font-bold">
                Control <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}