import { useNavigate, useLocation } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: '/gallery/portraits', label: 'Portraits' },
    { path: '/gallery/landscapes', label: 'Landscapes' },
    { path: '/gallery/urbanscapes', label: 'Urban' },
    { path: '/gallery/architecture', label: 'Architecture' },
    { path: '/gallery/street', label: 'Street' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="px-8 py-4 flex justify-between items-center ml-[10%] mr-[10%]">
        <h1 
          className="text-2xl font-light tracking-wider cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => navigate('/')}
        >
          IB Photography
        </h1>

        <nav className="flex gap-6">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => navigate(route.path)}
              className={`text-sm font-light tracking-wider hover:text-gray-600 transition-colors
                ${location.pathname === route.path ? 'text-gray-900 border-b border-gray-900' : 'text-gray-500'}`}
            >
              {route.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};