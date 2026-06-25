import { ArrowLeft } from "lucide-react";
import CustomButton from '../components/CustomButton';

export default function KycDetails() {
    return (
        <div className="h-full bg-gray-950 p-10 flex justify-center">
            <div className="w-full max-w-md flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                <div className="flex items-center gap-4 p-4 mb-6 bg-gray-800 rounded-lg shadow-md shrink-0 text-white">
                    <ArrowLeft className="w-6 h-6 cursor-pointer" />
                    <h1 className="text-xl font-bold ml-25">KYC Details</h1>
                </div>

                <div className="flex flex-col gap-5 text-white pt-8">
                    <InputField label="Full Name" placeholder="John Doe" />
                    <InputField label="Email ID" placeholder="john@example.com" />
                    <InputField label="Address" placeholder="123 Street, City" />
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300">Document Proof</label>
                        <div className="w-full h-32 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-gray-400 transition-colors">
                            <span>Upload Document</span>
                            <span className="text-xs mt-1">(PDF, JPG, PNG)</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <CustomButton className="w-full">Next</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, placeholder }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}