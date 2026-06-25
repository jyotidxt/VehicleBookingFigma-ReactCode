import React from 'react';
import { ArrowLeft, Calendar, UploadCloud, Router } from 'lucide-react';
import CustomButton from '../components/CustomButton';

export default function AddVehicles() {
  return (
    <div className="h-screen w-full bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 shrink-0">
        <ArrowLeft size={24} />
        <h1 className="text-xl font-bold">Add Vehicles</h1>
      </div>

  
      <div className="flex-1 overflow-y-auto px-6 pb-24 [&::-webkit-scrollbar]:hidden">
        <div className="space-y-6">
          <InputField label="Vehicle Name" placeholder="Enter name" />
          <InputField label="Vehicle number" placeholder="Enter number" />
          
          <div className="flex flex-col gap-2">
            <label className="text-sm">Vehicle Type</label>
            <select className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl focus:outline-none">
              <option>Select Type</option>
            </select>
          </div>

          <DateInputField label="Pollution Cert. Expiry Date" />
          <DateInputField label="Vehicle RC Expiry Date" />

          <div className="flex flex-col gap-2">
            <label className="text-sm">Vehicle Image</label>
            <div className="border-2 border-dashed border-gray-700 bg-gray-900 rounded-xl p-8 flex flex-col items-center justify-center gap-2 text-gray-400">
              <UploadCloud size={32} />
              <p className="text-sm">Click to upload from device</p>
              <p className="text-xs text-gray-600">Support file: .jpg, .png</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex items-center gap-2 mb-4 text-yellow-500">
              <Router size={20} />
              <span className="font-bold">Connect GPS Device</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm">Select GPS Device</label>
              <div className="flex gap-2">
                <select className="flex-1 bg-gray-900 border border-gray-800 p-4 rounded-xl focus:outline-none">
                  <option>Select to connect</option>
                </select>
                <button className="bg-gray-800 px-4 rounded-xl font-medium">+ Add New</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
       <CustomButton>Done</CustomButton>
      </div>
    </div>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <input className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl focus:outline-none" placeholder={placeholder} />
    </div>
  );
}

function DateInputField({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <div className="relative">
        <input type="date" className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl focus:outline-none appearance-none" />
        <Calendar className="absolute right-4 top-4 text-yellow-600" size={20} />
      </div>
    </div>
  );
}