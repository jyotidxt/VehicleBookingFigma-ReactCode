import React from 'react';
import { ArrowLeft, Search } from "lucide-react";

export default function GeoFence() {
  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden text-white flex flex-col">
      
      {/* Map Area */}
      <div className="absolute inset-0 z-0 bg-gray-800">
        <div className="w-full h-full flex items-center justify-center opacity-30 bg-gray-700">
          <p className="text-gray-400">Map View</p>
        </div>
        
        {/* Header */}
        <div className="absolute top-6 left-6 flex items-center gap-4">
          <button className="p-2 bg-black/50 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Geo Fence</h1>
        </div>

        {/* The Fence Circle (SVG Overlay) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-yellow-500 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <div className="text-yellow-500 text-2xl font-bold">+</div>
          </div>
        </div>
      </div>

      {/* Scrollable Bottom Panel */}
      <div className="absolute bottom-6 w-full px-4 z-10">
        <div className="bg-black/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[30vh]">
          
          {/* Select Radius Slider */}
          <div className="mb-8">
            <label className="block text-sm mb-4">Select Radius</label>
            <input 
              type="range" 
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white" 
            />
          </div>

          {/* Search Location */}
          <div className="flex items-center bg-gray-900 border border-gray-700 px-4 py-3 rounded-2xl gap-2">
            <Search className="text-gray-500" size={20} />
            <input 
              className="bg-transparent w-full focus:outline-none text-sm" 
              placeholder="Search for the location" 
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}