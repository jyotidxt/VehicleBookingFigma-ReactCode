import { Bell, MapPin, Car, ShieldCheck, HelpCircle, CarFront, AlertTriangle, FileText, ChevronRight, TrendingDown, Gauge, Fuel, Clock } from "lucide-react";

export default function WelcomeDashboard() {
  return (
    <div className="h-full bg-gray-950 p-4 overflow-hidden flex justify-center">
      <div className="w-full max-w-md flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="flex items-center justify-between mb-6 shrink-0 text-white">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full border-4 border-yellow-500 bg-gray-200" />
            <p className="text-lg">Welcome!<br /><span className="font-bold">Alfredo Curtis</span></p>
          </div>
          <Bell className="h-6 w-6" />
        </div>

        <div className="rounded-xl bg-gray-900 p-4 mb-6 shrink-0 text-white">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="flex items-center gap-1"><MapPin size={16} /> Live GPS</span>
            <span className="text-yellow-500 font-semibold cursor-pointer">See All</span>
          </div>
          <div className="relative h-32 flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50">
            <Car className="h-12 w-12 mt-2 text-yellow-500" />
            <Car className="ml-10 mt-5"></Car>
            <Car className="ml-20 mt-8"></Car>
          </div>
        </div>

        <div className="rounded-xl bg-gray-800 p-4 space-y-4 mb-6 text-white">
          <div className="flex justify-between font-bold">
            <span className="flex items-center gap-2 "><CarFront className="text-yellow-500" size={25} /> Vehicle Status</span>
            <span>MH14KA3239 ^ </span>
          </div>

          <div className="space-y-3">
            <StatSection title="Journey" leftLabel="Distance Travelled" leftVal="0.0km" rightLabel="Time Duration" rightVal="0m 0s" />
            <StatSection title="Speed" leftLabel="Current Speed" leftVal="0.0km/hr" rightLabel="Top Speed" rightVal="0.0km/hr" />
            <StatSection title="Fuel" leftLabel="Fuel Consumed" leftVal="0.0L" rightLabel="Fuel Cost" rightVal="RS 0.0" />
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-700">
            <MenuIcon icon={<ShieldCheck />} label="Warranty" />
            <MenuIcon icon={<HelpCircle />} label="Support" />
            <MenuIcon icon={<AlertTriangle />} label="SOS" />
            <MenuIcon icon={<FileText />} label="Docs" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatSection({ title, leftLabel, leftVal, rightLabel, rightVal }) {
  return (
    <div className="bg-black p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-sm">{title}</span>
        <ChevronRight size={18} className="text-gray-400" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400">{leftLabel}</span>
          <span className="font-bold text-sm">{leftVal}</span>
          <span className="text-[9px] text-red-400 flex items-center"><TrendingDown size={8} /> 0.0% vs prev</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-gray-400">{rightLabel}</span>
          <span className="font-bold text-sm">{rightVal}</span>
          <span className="text-[9px] text-red-400 flex items-center"><TrendingDown size={8} /> 0.0% vs prev</span>
        </div>
      </div>
    </div>
  );
}

function MenuIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 text-[10px] text-gray-400 text-yellow-500 mb-5">
      <div className="p-2 bg-gray-900 rounded-lg">{icon}</div>
      {label}
    </div>
  );
}