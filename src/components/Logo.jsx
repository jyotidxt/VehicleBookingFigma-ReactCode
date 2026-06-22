import logo from '../assests/logo.jpeg'
export default function Logo() {
  return (
  
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <img 
            className=" h-45 rounded-2xl object-cover" 
            src={logo} 
            alt="Logo" 
          />
          <h1 className="text-4xl text-white mt-5 font-bold">Envorobo</h1>
          <p className="text-gray-600">GPS NAVIGATOR</p>
        </div>
      </div>
 
  );
}