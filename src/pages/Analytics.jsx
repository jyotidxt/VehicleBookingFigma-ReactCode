import React from 'react';
import { ArrowLeft, CarFront, SlidersHorizontal, Gauge, Battery, Zap, Droplets, CircleGauge, TrendingUp, TrendingDown } from "lucide-react";

export default function Analytics() {
  return (
    <div className="h-screen bg-black text-white p-4 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="text-xl font-bold">Analytics</h1>
      </div>

    
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-10">
        <div className="flex items-center justify-between bg-gray-900 p-3 rounded-2xl mb-6">
          <CarFront size={42} className="text-yellow-500" />
          <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">WB70GT1215</div>
          <div className="text-[10px] text-gray-400 text-right">
            IMEI NUMBER<br/><span className="text-white font-bold">12354GHT12458</span>
          </div>
        </div>

      
        <div className="flex gap-2 mb-6 items-center">
          {["Today", "7 Days", "30 Days"].map((t) => (
            <button key={t} className={`px-5 py-2 rounded-full text-sm ${t === "Today" ? "bg-gray-200 text-black" : "bg-gray-900"}`}>{t}</button>
          ))}
          <button className="bg-gray-900 p-3 rounded-full ml-auto"><SlidersHorizontal size={20} /></button>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="relative w-36 h-36 flex items-center justify-center">
             
             <svg className="w-full h-full transform -rotate-90">
                <circle cx="72" cy="72" r="60" stroke="#1f2937" strokeWidth="12" fill="transparent" />
                <circle cx="72" cy="72" r="60" stroke="#c0ff00" strokeWidth="12" fill="transparent" strokeDasharray="280" strokeDashoffset="80" strokeLinecap="round" />
             </svg>
             <div className="absolute text-center">
                <p className="text-[10px] text-gray-400">TOTAL</p>
                <p className="text-xl font-bold">1000</p>
                <p className="text-xs">KM</p>
             </div>
          </div>
          
          <div className="flex-1 bg-gray-900 rounded-3xl p-4 flex flex-col justify-center">
            <div className="flex items-center gap-1 text-red-500 mb-1"><Zap size={16}/> <span className="text-[10px] font-bold">OVER SPEED</span></div>
            <div className="text-xl font-bold">06 <span className="text-sm font-normal">TIMES</span></div>
            <button className="bg-blue-600 mt-3 py-2 px-4 rounded-xl text-xs font-bold w-fit">Details ↗</button>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-2 gap-4">
          <DetailCard icon={<Gauge size={20} className="text-green-500"/>} title="AVG SPEED" val="54 Km/hr" />
          <DetailCard icon={<Gauge size={20} className="text-blue-500"/>} title="MAX SPEED" val="102 Km/hr" />
          <DetailCard icon={<Battery className="text-red-500" />} title="Battery" val="10%" status="Need to be Charged" statusColor="text-red-500" />
          <DetailCard icon={<Zap className="text-green-500" />} title="Air Filter" val="" status="In good Condition" statusColor="text-green-500" />
          <DetailCard icon={<Droplets className="text-green-500" />} title="Engine Oil" val="" status="In good Condition" statusColor="text-green-500" />
          <DetailCard icon={<CircleGauge className="text-red-500" />} title="Tyre Replace" val="" status="Need to be Changed" statusColor="text-red-500" />
        </div>
      </div>
    </div>
  );
}

function DetailCard({ icon, title, val, status, statusColor }) {
  return (
    <div className="bg-gray-900 p-4 rounded-3xl h-32 flex flex-col justify-between">
      <div>
        <div className="mb-2">{icon}</div>
        <p className="font-bold text-xs">{title} {val}</p>
      </div>
      {status && (
        <p className={`text-[9px] flex items-center gap-1 ${statusColor}`}>
          {statusColor.includes('red') ? <TrendingDown size={20}/> : <TrendingUp size={20}/>} {status}
        </p>
      )}
    </div>
  );
}