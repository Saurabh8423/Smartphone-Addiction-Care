import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Get the current location object using useLocation hook
  const location = useLocation();

  // Determine if the current route matches the given path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent">
      <h2 className='flex items-center justify-center py-5 font-semibold text-3xl'> Smartphone Addiction Care</h2>
    
      <div className="flex items-center justify-center py-2">
        <div className="flex flex-shrink-0 items-center">
          {/* You can place a logo or branding element here */}
        </div>
        
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className={`block px-4 py-2 no-underline outline-none hover:no-underline ${isActive('/') ? 'text-pink-600' : 'text-white'}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 no-underline outline-none hover:no-underline ${isActive('/addiction') ? 'text-pink-600' : 'text-white'}`}
              to="/addiction"
            >
              Addiction Scale
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 no-underline outline-none hover:no-underline ${isActive('/strategies') ? 'text-pink-600' : 'text-white'}`}
              to="/strategies"
            >
              Strategies to Reduce Use
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 no-underline outline-none hover:no-underline ${isActive('/contact') ? 'text-pink-600' : 'text-white'}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
