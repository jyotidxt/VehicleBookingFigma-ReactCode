import { ArrowLeft } from "lucide-react";
import CustomButton from '../components/CustomButton';

export default function DeviceDetails() {
  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-md flex flex-col gap-6">
        
        {/* HEADER */}
        <div className="flex items-center gap-19 h-20 bg-gray-800 p-4 rounded-lg shadow-md">
          <ArrowLeft className="text-white w-6 h-6 cursor-pointer hover:text-gray-300" />
          <h1 className="text-xl font-bold text-white">Device Details</h1>
        </div>

        {/* DEVICE INFO CARD */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-white space-y-3">
          <DetailRow label="Device Id" value="BXK458632" />
          <DetailRow label="Device Name" value="Dev Router 001" />
          <DetailRow label="Device Type" value="Router" />
          <DetailRow label="Serial No." value="BXK458632" />
          <DetailRow label="Model No." value="GHD156L" />
          <DetailRow label="Installed" value="13/01/2026" />
          <DetailRow label="Last Active" value="24/02/2026" />
        </div>

        {/* PAYMENT DETAILS CARD */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-white">
          <h2 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Payment Details</h2>
          <div className="space-y-2 text-sm">
            <PaymentRow label="Yearly Subscription" value="RS. 2000" />
            <PaymentRow label="Discount" value="RS. -1001" isDiscount />
            <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-700 mt-2">
              <span>Total Cost</span>
              <span>RS. 999</span>
            </div>
          </div>
        </div>
<CustomButton>
          Pay Now
        </CustomButton>
      </div>
    </div>
  );
}

// Helper components for cleaner code
function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between ">
      <span className="text-gray-400">{label}:</span>
      <span className="font-medium text-gray-100">{value}</span>
    </div>
  );
}

function PaymentRow({ label, value, isDiscount = false }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-300">{label}</span>
      <span className={isDiscount ? "text-green-400" : "text-gray-100"}>
        {value}
      </span>
    </div>
  );
}