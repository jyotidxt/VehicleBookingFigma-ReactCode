// Reusable component (ICON) to render individual navigation links with active state styling.

import { NavLink } from 'react-router';

export default function NavItem({ path, icon: Icon, active }) {
  return (
    <NavLink to={path} className="relative flex flex-col items-center justify-center p-3">

      {active && (
        <div className="absolute top-0 w-8 h-1 bg-yellow-400 rounded-full transition-all" />
      )}
      
      <Icon className={`w-6 h-6 ${active ? 'bg-red-200' : 'text-gray-500'}`} />
    </NavLink>
  );
}