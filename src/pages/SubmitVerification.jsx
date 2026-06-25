import CustomButton from '../components/CustomButton';
import { Check } from 'lucide-react';

export default function SubmitVerfication() {
    return (
        <div className="h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-white">
            <div className="flex flex-col items-center text-center gap-6 w-full max-w-sm">
                <div className="w-34 h-34 bg-green-500 rounded-full flex items-center mt-40 justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-4">
                    <Check className="w-12 h-12 text-white stroke-[3]" />
                </div>
                <div className="space-y-1">
                    <p className="text-gray-400 text-lg uppercase tracking-wider">Successfully</p>
                    <h1 className="text-4xl
                    text-white">Submitted for Verification</h1>
                </div>

                <div className="w-full mt-15">
                    <CustomButton className="w-full py-4 text-lg">Next</CustomButton>
                </div>
            </div>
        </div>
    );
}