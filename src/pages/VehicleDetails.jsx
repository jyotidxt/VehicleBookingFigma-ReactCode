import React from 'react';
import { ArrowLeft, MapPin, Battery, Key, Gauge, ShieldCheck, HelpCircle, AlertTriangle, FileText, History, Satellite, BrainCircuit, Lock } from "lucide-react";

export default function VehicleDetails() {
  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden text-white flex flex-col">
      
     
      <div className="absolute inset-0 bg-gray-800 z-0">
        <div className="w-full h-full flex items-center justify-center opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          <p className="text-gray-400">Map View Placeholder</p>
        </div>
    
        <button className="absolute top-6 left-6 p-2 bg-black/50 rounded-full hover:bg-black/70 transition">
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Bottom Panel  */}
      <div className="absolute bottom-0 w-full bg-gray-950 rounded-t-3xl p-6 shadow-2xl z-10 max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        
        {/* Top Info  */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          <InfoItem label="Number" value="OD05A4256" />
          <InfoItem label="Status" value="In Use" />
          <InfoItem label="Last Check" value="Aug 20, 2022" />
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          <StatusCard color="bg-orange-500" icon={<Gauge size={20} />} val="99,002" label="Distance" />
          <StatusCard color="bg-blue-500" icon={<Battery size={20} />} val="98%" label="Battery" />
          <StatusCard color="bg-green-500" icon={<Key size={20} />} val="ON" label="Engine" />
          <StatusCard color="bg-pink-500" icon={<MapPin size={20} />} val="Patia" label="Location" />
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center text-yellow-500">
          <ActionItem icon={<ShieldCheck />} label="Device" />
          <ActionItem icon={<AlertTriangle />} label="Parking" />
          <ActionItem icon={<Gauge />} label="Geofence" />
          <ActionItem icon={<FileText />} label="Analytics" />
          <ActionItem icon={<Lock />} label="Engine lock" />
          <ActionItem icon={<BrainCircuit />} label="AI health" />
          <ActionItem icon={<Satellite />} label="Satellite" />
          <ActionItem icon={<History />} label="History" />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-[10px] mb-1">{label}</p>
      <p className="font-bold text-sm">{value}</p>
    </div>
  );
}

function StatusCard({ color, icon, val, label }) {
  return (
    <div className="bg-gray-900 p-2 rounded-2xl flex flex-col items-center gap-1">
      <div className={`${color} p-2 rounded-full text-white`}>{icon}</div>
      <div className="text-center">
        <p className="font-bold text-xs">{val}</p>
        <p className="text-[9px] text-gray-400">{label}</p>
      </div>
    </div>
  );
}

function ActionItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 text-[10px]">
      <div className="text-yellow-500">{icon}</div>
      <p>{label}</p>
    </div>
  );
}