import React from 'react';
import { 
  Car, Share2, HelpCircle, CreditCard, Bell, LogOut, 
  Settings, Pencil, ChevronRight 
} from "lucide-react";

export default function Profile() {
  const menuItems = [
    { icon: <Car size={24} />, label: "Vehicle", color: "bg-yellow-400" },
    { icon: <Share2 size={24} />, label: "Share App", color: "bg-yellow-400" },
    { icon: <HelpCircle size={24} />, label: "Help & support", color: "bg-yellow-400" },
    { icon: <CreditCard size={24} />, label: "Manage Subscription", color: "bg-yellow-400" },
    { icon: <Bell size={24} />, label: "Alert", color: "bg-pink-300" },
    { icon: <LogOut size={24} />, label: "Sign out", color: "bg-yellow-400" },
  ];

  return (
  
    <div className="h-screen bg-black text-white overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="p-6">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center mt-8 mb-10">
          <h1 className="text-xl font-medium mb-8">Profile</h1>
          
          <div className="relative flex items-center justify-between w-full max-w-sm px-6">
            <Pencil size={24} className="text-gray-400 cursor-pointer" />
            
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <Settings size={24} className="text-gray-400 cursor-pointer" />
          </div>

          <h2 className="text-2xl font-bold mt-4">Alfredo Curtis</h2>
          <p className="text-gray-400">@alfredo_curtis</p>
        </div>

        {/* Menu List */}
        <div className="space-y-4 max-w-md mx-auto pb-10">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between bg-gray-900 p-4 rounded-2xl cursor-pointer hover:bg-gray-800 transition"
            >
              <div className="flex items-center gap-4">
                <div className={`${item.color} p-3 rounded-xl text-black`}>
                  {item.icon}
                </div>
                <span className="font-semibold text-lg">{item.label}</span>
              </div>
              <ChevronRight className="text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}