import { ArrowLeft, Calendar } from 'lucide-react';

export default function GenerateReport() {
  return (
    <div className="h-screen bg-black text-white flex flex-col ">
      <div className="flex items-center p-6 shrink-0">
        <ArrowLeft size={24} />
        <h1 className="text-xl font-bold flex-1 text-center pr-6">Generate Report</h1>
      </div>

      <div className="flex-1 mt-10 overflow-y-auto px-6  [&::-webkit-scrollbar]:hidden space-y-6">
        <DateInput label="Date Range" placeholder="From date" />
        <DateInput placeholder="Till date" />
        
        <SelectInput label="Sub User Name" />
        <SelectInput label="Vehicle Group Name" />
        <SelectInput label="Vehicle Number" />
      </div>

      <div className="p-6 flex gap-4 shrink-0 border-t border-gray-900">
        <button className="flex-1 border border-gray-700 py-4 rounded-xl font-bold">Cancel</button>
        <button className="flex-1 bg-blue-600 py-4 rounded-xl font-bold">Generate Report</button>
      </div>
    </div>
  );
}

function DateInput({ label, placeholder }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm">{label}</label>}
      <div className="relative bg-gray-900 p-10 rounded-xl border border-gray-800 flex justify-between items-center">
        <span className="text-gray-500">{placeholder || "Select Date"}</span>
        <Calendar className="text-yellow-600" size={20} />
      </div>
    </div>
  );
}

function SelectInput({ label }) {
  return (
    <div className="space-y-2">
      <label className="text-sm">{label}</label>
      <select className="w-full bg-gray-900 p-4 rounded-xl border border-gray-800 focus:outline-none">
        <option>Select</option>
      </select>
    </div>
  );
}