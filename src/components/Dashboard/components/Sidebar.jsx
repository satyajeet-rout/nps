import React from 'react';
import { FiHome, FiUsers, FiFileText, FiFolder, FiMessageSquare, FiPieChart, FiBell, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const navItems = [
    { href: '/', icon: FiHome, label: 'Home', active: true },
    { href: '/clients', icon: FiUsers, label: 'Clients' },
    { href: '/cases', icon: FiFileText, label: 'Cases', premium: true },
    { href: '/documents', icon: FiFolder, label: 'Documents' },
    { href: '/messages', icon: FiMessageSquare, label: 'Messages' },
    { href: '/analytics', icon: FiPieChart, label: 'Analytics' },
  ];

  const bottomItems = [
    { href: '/notifications', icon: FiBell, label: 'Notifications' },
    { href: '/settings', icon: FiSettings, label: 'Settings' },
    { href: '#', icon: FiLogOut, label: 'Logout' },
  ];

  return (
    <div className="h-screen text-white w-64 bg-legally-purple flex flex-col fixed left-0 top-0">
      <div className="p-4">
        <a href="/" className="flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="M7 21h10"></path>
            <path d="M12 3v18"></path>
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
          </svg>
          <span className="text-2xl font-bold">Legally AI</span>
        </a>
      </div>
      <nav className="mt-6 px-2 flex-1 flex flex-col">
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                item.active
                  ? 'bg-sidebar-accent text-sidebar-foreground'
                  : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              } relative overflow-hidden`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {item.premium && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-legally-gold text-legally-purple text-xs px-2 py-0.5 rounded-full font-medium">
                  Premium
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="mt-auto mb-4 space-y-1">
          {bottomItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-md text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground cursor-pointer"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;