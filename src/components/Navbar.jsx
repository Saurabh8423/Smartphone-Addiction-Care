import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinkCustom = ({ to, children, onClick }) => {
  const loc = useLocation();
  const active = loc.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block text-xl transition-all duration-300
        ${
          active
            ? "text-pink-400 font-semibold scale-110"
            : "text-white/90 hover:text-pink-300"
        }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <header
      className={`
        sticky top-0 z-50 backdrop-blur-md py-2
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 shadow-xl shadow-black/20"
            : "bg-white/5 shadow-md shadow-black/10"
        }
      `}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between min-h-[60px]">
        {/* Logo + Heading */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden 
              bg-gradient-to-br from-[#ffdd99] to-pink-300 
              flex items-center justify-center shadow-lg shadow-pink-500/20
          "
          >
            <img
              src="/logo-main.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1
            className="text-lg sm:text-xl md:text-2xl font-semibold 
             bg-gradient-to-r from-[#FFD60A] to-[#ff6bcb] 
             bg-clip-text text-transparent"
          >
            Smartphone Addiction Care
          </h1>
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggle}
          className="md:hidden text-white p-2 rounded-lg bg-white/10 
            backdrop-blur-md hover:bg-white/20 transition active:scale-90 
            shadow-lg shadow-[#ff6bcb]/30"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLinkCustom to="/">Home</NavLinkCustom>
          <NavLinkCustom to="/addiction">Addiction Scale</NavLinkCustom>
          <NavLinkCustom to="/strategies">Strategies</NavLinkCustom>
          <NavLinkCustom to="/contact">Contact</NavLinkCustom>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <div
            className={`
        fixed top-28 right-0 h-[calc(500%-7rem)] w-[150vw] max-w-[400px]
        bg-[#050A1F]/95 border-l border-white/10 
        backdrop-blur-2xl shadow-2xl shadow-black/40 z-[999]
        flex flex-col items-center justify-center
        transition-transform duration-300 ease-out
      `}
          >
            {/* Centered Links */}
            <div className="flex flex-col gap-8 items-center text-center">
              <NavLinkCustom to="/" onClick={toggle}>
                Home
              </NavLinkCustom>
              <NavLinkCustom to="/addiction" onClick={toggle}>
                Addiction Scale
              </NavLinkCustom>
              <NavLinkCustom to="/strategies" onClick={toggle}>
                Strategies
              </NavLinkCustom>
              <NavLinkCustom to="/contact" onClick={toggle}>
                Contact
              </NavLinkCustom>
            </div>
          </div>

          {/* Background Blur When Open */}
          <div
            onClick={toggle}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          ></div>
        </>
      )}

      {/* Background Blur When Open */}
      {open && (
        <div
          onClick={toggle}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        ></div>
      )}
    </header>
  );
}
