import React from 'react';
import { Search, FileText } from 'lucide-react';

export default function ReportList() {
  const reports = [
    { id: 1, title: "Device Monitoring Report" },
    { id: 2, title: "Distance Travelled in different speed range" },
    { id: 3, title: "Distance Travelled in different speed range" },
    { id: 4, title: "Distance Travelled in different speed range" },
    { id: 5, title: "Device Health Report" }
  ];

  return (
    <div className="h-screen bg-black text-white p-6 flex flex-col">
      <h1 className="text-xl font-bold text-center mb-6">Report list</h1>
      
      <div className="flex items-center bg-gray-900 border border-gray-800 px-4 py-3 rounded-xl mb-6">
        <Search className="text-gray-500 mr-3" size={20} />
        <input className="bg-transparent w-full focus:outline-none" placeholder="Search report" />
      </div>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden space-y-4 pb-6">
        {reports.map((r) => (
          <div key={r.id} className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="text-yellow-500 shrink-0" />
              <h2 className="font-bold text-sm leading-tight">{r.title}</h2>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-[10px] text-gray-400">Last generated on : 01:56 PM, 07 Feb 2025</p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-xs font-bold">Generate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}