import { MapPin, Star, Navigation, ArrowLeft } from "lucide-react";

export default function VehicleTracking() {
  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden font-sans">
      
      {/* MAP AREA (Background) */}
      <div className="absolute inset-0 bg-gray-800">
        
        <div className="w-full h-full opacity-50" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white">
          <ArrowLeft className="w-6 h-6" />
          <div className="bg-black/50 px-4 py-2 rounded-full flex items-center gap-2 text-sm">
            <Navigation size={16} /> Mumbai, TX ▾
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS SECTION */}
      <div className="absolute bottom-6 left-0 right-0 flex gap-4 px-4 overflow-x-auto scrollbar-hide">
        
        {/* Card Component */}
        {[1, 2].map((i) => (
          <div key={i} className="min-w-[320px] bg-black p-4 rounded-3xl flex gap-4 text-white">
            {/* Left Image */}
            <div className="w-24 h-24 bg-blue-600 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="https://tse1.mm.bing.net/th/id/OIP.KjNZJPV2uJbndZP6i5_pvgHaEp?pid=Api&h=220&P=0" alt="Truck" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Info */}
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-xl font-bold text-yellow-400">MH14KA3239</h2>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={14} /> Little Stacy Park
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span className="text-[10px]">🕒</span> 12:00 am - 10:00 pm
              </div>
              
              <div className="flex gap-2 mt-2">
                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xs font-bold flex items-center gap-1">
                  <Star size={10} fill="black" /> 3.9
                </span>
                <span className="bg-gray-800 px-2 py-0.5 rounded-md text-xs flex items-center gap-1">
                  <Navigation size={10} /> 100 mt
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}