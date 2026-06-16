import CustomButton from '../components/CustomButton';

export default function AgentDetails() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black p-8">
      
      {/* HEADER: Sirf Heading */}
      <div className="flex flex-col items-center pt-16 mb-12">
        <h2 className="text-3xl font-bold text-white">Agent Details</h2>
        <p className="mt-2 text-gray-400">Fill in the agent information</p>
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col w-full max-w-sm mx-auto gap-6">
        
        {/* Agent ID */}
        <div className="flex flex-col text-left">
          <label className="mb-2 text-sm font-medium text-gray-500">Agent ID</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-800 bg-gray-900 p-5 text-white outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Agent ID"
          />
        </div>

        {/* Agent Name */}
        <div className="flex flex-col text-left">
          <label className="mb-2 text-sm font-medium text-gray-500">Agent Name</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-gray-800 bg-gray-900 p-5 text-white outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Agent Name"
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <CustomButton>
            Save Details
          </CustomButton>
        </div>

      </div>
    </div>
  );
}