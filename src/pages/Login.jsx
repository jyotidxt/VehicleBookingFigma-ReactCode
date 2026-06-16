
import { Link } from 'react-router';
import { LogIn } from 'lucide-react';
export default function Logo() {
  return (
    <Link to="/login" className="block h-screen w-full">
  <div className="flex h-full w-full flex-col items-center justify-center bg-gray-50 p-4">
    
    {/* Card Container */}
    <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
      
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <LogIn className="h-12 w-12 text-blue-800" />
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="text-gray-500">Enter your mobile number below!</p>
      </div>

      {/* Form Section */}
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col text-left">
          <label className="mb-1 text-sm font-medium text-gray-700">Number</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Mobile No."
          />
        </div>
        
        {/* Button is now part of the clickable area */}
        <button className="w-full rounded-lg bg-blue-800 p-3 font-semibold text-white transition-colors hover:bg-blue-900">
          Send OTP
        </button>
      </div>
      
    </div>
  </div>
</Link>
  );
}