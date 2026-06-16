import { LogOut } from 'lucide-react';
import CustomButton from '../components/CustomButton';
export default function Login() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-25 px-2">
      
      {/* HEADER*/}
      <div className="flex flex-col items-center pt-8">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-900 border-4 border-gray-800 mb-8">
          <LogOut className="h-16 w-16 text-blue-600" />
        </div>
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Login</h2>
          <p className=" mt-1 text-sm text-gray-400">Enter your mobile no. below!</p>
        </div>
      </div>

      {/* BOTTOM CONTENT*/}
      <div className="flex-grow flex flex-col justify-start w-full max-w-sm mx-auto gap-6">
        <div className="flex flex-col text-left">
          <label className="mb-2 text-sm font-medium text-gray-500">Mobile Number</label>
          <input
            type="number"
            className="w-full  rounded-2xl border border-gray-800 bg-gray-900 p-5 text-white outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter 10-digit no."
          />
        </div>
        <CustomButton>
          Send OTP
        </CustomButton>
      </div>

    </div>
  );
}