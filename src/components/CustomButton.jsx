export default function CustomButton({ children, onClick, className = "" }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg cursor-pointer hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200${className}`}
    >
      {children}
    </button>
  );
}