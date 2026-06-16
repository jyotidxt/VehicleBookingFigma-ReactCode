import { Outlet, useLocation, useNavigate } from 'react-router';
import { navItems } from '../config/NavItems';
import NavItem from './NavItem';

const routeOrder = ['/','/logo' ,'/login','/logo', '/vehicle', '/reports', '/profile'];
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const goNext = () => {
    const currentIndex = routeOrder.indexOf(location.pathname);
    if (currentIndex < routeOrder.length - 1) {
      navigate(routeOrder[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    const currentIndex = routeOrder.indexOf(location.pathname);
    if (currentIndex > 0) {
      navigate(routeOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-white text-black overflow-hidden">
      
      {/* Click Zones - Poori screen cover kar rahe hain */}
      <div className="absolute inset-0 z-40 flex pointer-events-none">
        <div className="w-1/4 h-full pointer-events-auto cursor-pointer" onClick={goPrev} />
        <div className="w-1/2 h-full" />
        <div className="w-1/4 h-full pointer-events-auto cursor-pointer" onClick={goNext} />
      </div>

      {/* Page Content */}
      <main className="flex-grow z-0 overflow-y-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="z-50 bg-white border-t border-gray-300 flex justify-around p-2">
        {navItems.map((item) => (
          <NavItem 
            key={item.path}
            path={item.path}
            label={item.label}
            icon={item.icon}
            active={location.pathname === item.path}
          />
        ))}
      </footer>
    </div>
  );
}