import { ArrowLeft } from "lucide-react";
import CustomButton from '../components/CustomButton';

export default function Payment() {
    return (
        <div className="h-screen bg-gray-950 p-4 md:p-8 flex justify-center overflow-hidden">
            <div className="w-full max-w-md flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                <div className="flex items-center gap-4 p-4 mb-6 bg-gray-800 rounded-lg shadow-md shrink-0">
                    <ArrowLeft className="text-white w-6 h-6 cursor-pointer" />
                    <h1 className="text-xl font-bold text-white">Payment</h1>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-white flex flex-col gap-5 shrink-0 mb-8">

                    <div className="flex items-center gap-3">
                        <ArrowLeft className="text-blue-500 w-6 h-6" />
                        <h1 className="text-xl font-bold">Razorpay</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-gray-300">Payment Method</p>
                        <div className="border border-dashed border-gray-600 p-4 rounded-lg flex justify-around items-center text-2xl bg-gray-800/50">
                            <span>💳</span>
                            <span>🏦</span>
                            <span>📱</span>
                            <span>🅿️</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <InputField label="Name on Card" placeholder="John Doe" />
                        <InputField label="Card no." placeholder="0000 0000 0000 0000" type="number" />
                        <InputField label="Card Expiration" type="date" />
                        <InputField label="Card Security Code" placeholder="Enter code" type="text" />

                        <div className="mt-4">
                            <CustomButton className="w-full">Continue</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, placeholder, type = "text" }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}