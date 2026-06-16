import { Outlet, useLocation, useNavigate } from 'react-router';
import { routeOrder, footerPages } from '../config/routes';
import { NavItems } from '../config/NavItems'; 
import NavItem from './NavItem';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const goNext = () => {
    const idx = routeOrder.indexOf(location.pathname);
    if (idx !== -1 && idx < routeOrder.length - 1) navigate(routeOrder[idx + 1]);
  };

  const goPrev = () => {
    const idx = routeOrder.indexOf(location.pathname);
    if (idx > 0) navigate(routeOrder[idx - 1]);
  };

  // CHECK: If current path is in footerPages array ?
  const showFooter = footerPages.includes(location.pathname);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">
      
      {/* Click Zones left and right edge of screen*/}
      <div className="absolute inset-0 z-50 flex pointer-events-none">
        <div className="w-1/6 h-full pointer-events-auto cursor-pointer" onClick={goPrev} />
        <div className="w-4/6 h-full" />
        <div className="w-1/6 h-full pointer-events-auto cursor-pointer" onClick={goNext} />
      </div>

      {/* Main Content */}
  <main className="h-screen w-full flex flex-col justify-center">
  <Outlet />
</main>
     
     {/* footer icons */}
      {showFooter && (
        <footer className="absolute bottom-0 w-full z-50 bg-black border-t-2  flex justify-around p-2">
          {NavItems.map((item) => (
            <NavItem 
              key={item.path}
              path={item.path}
              icon={item.icon}
              active={location.pathname === item.path}
            />
          ))}
        </footer>
      )}
    </div>
  );
}