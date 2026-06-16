import { LockKeyhole } from 'lucide-react';
import CustomButton from '../components/CustomButton';
export default function OtpVerify() {
  return (
    <div className="flex flex-col w-full min-h-screen p-8">
      
      {/* HEADER: Same Anchor Position as Login */}
      <div className="flex flex-col items-center  pt-25">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-900 border-4 border-gray-800 mb-8">
          <LockKeyhole className="h-16 w-16 text-blue-600" />
        </div>
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold text-white">OTP Verify</h2>
          <p className="mt-2 text-gray-400">Verify using OTP</p>
        </div>
      </div>

      {/* BOTTOM CONTENT: Expands to fit OTP inputs */}
      <div className="flex-grow flex flex-col justify-start w-full max-w-sm mx-auto items-center">
        <p className="text-gray-500 mb-8 text-center">
          Verify the 4-digit OTP sent to mobile no. 7478984364
        </p>
        <div className="flex justify-center gap-4 mb-10">
          {[1, 2, 3, 4].map((i) => (
            <input key={i} type="text" maxLength="1" className="w-16 h-16 rounded-2xl text-center text-2xl font-bold bg-gray-900 border border-gray-800 text-white focus:border-blue-600 focus:outline-none" />
          ))}
        </div>
    
     <CustomButton>
          Verify OTP
        </CustomButton>
      </div>

    </div>
  );
}