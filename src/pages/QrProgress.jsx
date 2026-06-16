import CustomButton from "../components/CustomButton";
import { ArrowLeft } from "lucide-react";
export default function QrProgress(){
    return (
 <div className="flex flex-col w-full min-h-screen p-8">
      
      {/* HEADER*/}
      <div className="flex items-center mb-12">
        <ArrowLeft className="text-white w-6 h-6 mr-4 cursor-pointer" />
        <h1 className="text-2xl font-bold text-white">Scan device QR</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center flex-grow w-full max-w-sm mx-auto">
        <p className="text-gray-400 pt-10 text-center mb-10 px-4">
         Align the QR code with in the frame to scan the device details
        </p>

        {/* QR Image Container */}
        <div className=" p-6 mb-10">
          <img 
            className="h-60 rounded-2xl object-cover" 
            src="src\assets\qrframe.jpeg" 
          />
              <p className="text-gray-400 text-center mt-5 text-xl mb-10 px-4">
        Scanning on Progress...
        </p>

        </div>
      </div> 
    </div>
    )
}