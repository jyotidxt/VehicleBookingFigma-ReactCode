import { NavLink } from 'react-router';

export default function NavItem({ path, icon: Icon, active }) {
  return (
    <NavLink 
      to={path} 
      className="flex flex-col items-center p-2 transition-all duration-300"
    >
      
      <div className={`pt-2`}>
        <Icon className={`w-6 h-6 ${active ? 'text-yellow-500' : 'text-gray-500'}`} />
      </div>
    </NavLink>
  );
}