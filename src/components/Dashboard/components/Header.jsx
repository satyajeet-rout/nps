import React from 'react';
import { FiSearch, FiSun, FiBell, FiMessageSquare, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="h-16 px-6 bg-legally-purple flex items-center justify-between fixed top-0 right-0 left-64 z-10">
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
        <input
          type="text"
          className="w-full h-10 pl-10 pr-3 py-2 rounded-md bg-legally-dark/50 border border-legally-purple text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-legally-gold"
          placeholder="Search clients, cases, documents..."
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-legally-dark">
          <FiSun size={20} />
        </button>
        <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-legally-dark">
          <FiBell size={20} />
        </button>
        <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-legally-dark">
          <FiMessageSquare size={20} />
        </button>
        <button className="h-10 px-4 py-2 flex items-center gap-2 rounded-md text-white hover:bg-legally-dark">
          <FiUser size={20} />
          <span>My Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Header;