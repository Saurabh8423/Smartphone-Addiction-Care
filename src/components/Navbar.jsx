import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const loc = useLocation();
  const active = loc.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-all ${
        active
          ? "text-pink-400 font-semibold"
          : "text-white/90 hover:text-pink-300"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-white/5 py-4 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* ---- Logo + Title ---- */}
        <div className="flex items-center gap-3">
          {/* Logo Circle */}
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-[#beb58e] to-pink-300 flex items-center justify-center shadow-lg shadow-pink-500/20">
            <img
              src="/logo-main.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title with linear gradient */}
          <div>
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#FFD60A] to-[#ff6bcb] bg-clip-text text-transparent">
              Smartphone Addiction Care
            </h1>
          </div>
        </div>

        {/* ---- Navigation ---- */}
        <nav className="hidden md:flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addiction">Addiction Scale</NavLink>
          <NavLink to="/strategies">Strategies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
