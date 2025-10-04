import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 md:px-16 h-16">
        {/* Logo */}
        <button
          className="text-xl font-bold text-gray-800"
          onClick={handleClick}
        >
          LOGO
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-8 text-lg font-medium text-gray-800">
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map(
            (item, idx) => (
              <Link
                key={idx}
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start gap-4 px-6 py-6 text-gray-800 font-medium text-lg">
            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="w-full transition duration-200 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)} // close menu after click
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
