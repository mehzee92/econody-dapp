'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  'TOKENIZATOR',
  'MARKETPLACE',
  'OFFERINGS',
  'FEE MANAGEMENT',
  'WALLET MANAGEMENT',
  'API MANAGEMENT',
  'REVENUE DISTR.',
  'OVERVIEW',
  'CUSTOMIZE DESIGN',
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Map nav items to their corresponding routes
  const navRoutes: Record<string, string> = {
    'TOKENIZATOR': '/admin',
    'MARKETPLACE': '/admin/marketplace',
    'OFFERINGS': '/admin/offerings',
    'FEE MANAGEMENT': '/admin/fee-management',
    'WALLET MANAGEMENT': '/admin/wallet-management',
    'API MANAGEMENT': '/admin/api-management',
    'REVENUE DISTR.': '/admin/revenue-distr',
    'OVERVIEW': '/admin/overview',
    'CUSTOMIZE DESIGN': '/admin/customize-design',
  };

  return (
    <>
      {/* Drawer Toggle Button for small screens */}
      <button
        className="sm:hidden fixed top-3 right-4 z-50 bg-white  p-2 shadow-md"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open sidebar menu"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay for drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-60"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Sidebar Drawer for small screens */}
      <aside
        className={`fixed top-0 left-0 h-full mt-1 w-64 bg-white  z-70 transform transition-transform duration-300 sm:static sm:translate-x-0 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} sm:min-h-screen px-5`}
      >
        {/* Close button for drawer */}
        <div className="sm:hidden flex justify-end p-2">
          <button
            className="text-gray-700 text-2xl font-bold"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close sidebar menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col w-64 gap-2 py-5 pr-10 md:pr-5 pb-20 md:border-r border-gray-700">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setDrawerOpen(false);
                router.push(navRoutes[item]);
              }}
              className={`w-full text-gray-700 text-left text-sm font-medium px-4 py-2 border border-gray-700 rounded-lg transition-colors ${
                pathname === navRoutes[item] ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
