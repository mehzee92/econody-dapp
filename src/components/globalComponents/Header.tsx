"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";


export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Demo: replace with your auth logic
  const user = {
    name: "Jane Doe",
    email: "jane.doe@email.com",
    avatar: "/images/dummy-image.jpg",
  };

  const navItems = [
  
    { label: "Marketplace", href: "/marketplace" },
    { label: "My Assets", href: "/my-asset" },
    { label: "Vestings", href: "/vesting" },
    { label: "Staking", href: "/staking" },
  ];

  return (
    <header className="py-4 shadow-sm px-5">
      <div className="mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Econody Logo"
            width={28}
            height={28}
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl Font1 font-extrabold tracking-wide text-gray-900">
            ECONODY
          </span>
        </Link>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base md:text-lg text-gray-700 hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Search + Auth (Desktop) */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 text-sm rounded-full border border-gray-300 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
          </div>

          {/* Sign In */}
          <button
            className="text-sm font-medium text-gray-700 hover:text-black transition hidden md:block"
            onClick={() => setShowSignInModal(true)}
          >
            Sign In
          </button>

          {/* Register Button or Avatar */}
          {!isLoggedIn ? (
            <button
             
              onClick={() => { setDrawerOpen(false); setShowSignUpModal(true); }}
              className="text-sm font-semibold text-white bg-black px-5 py-2 rounded-full hover:bg-gray-900 transition hidden md:block"
            >
              Register
            </button>
          ) : (
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-400 transition focus:outline-none"
              onClick={() => setProfileSidebarOpen(true)}
              aria-label="Open profile sidebar"
            >
              <Image
                src={user.avatar}
                alt="User Avatar"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover"
              />
            </button>
          )}

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${drawerOpen ? "visible" : "invisible"}`}
        style={{ pointerEvents: drawerOpen ? "auto" : "none" }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black opacity-30 transition-opacity duration-300`}
          onClick={() => setDrawerOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-4 shadow-sm ">
            <Link href={"/"} className="flex items-center py-[6px] space-x-2">
              <Image
                src="/images/logo.png"
                alt="Econody Logo"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="text-lg Font1 font-bold tracking-wide text-gray-900">ECONODY</span>
            </Link>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 py-4 flex-1">
          {isLoggedIn && 
              <>
                <Link href={"/profile"} onClick={() => setDrawerOpen(false)} className="flex border-b border-gray-300 pb-4 items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-base text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </Link>
               
              </>}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-black transition"
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className=" opacity-20 mt-1" />
          </nav>
          {/* Bottom Buttons: Profile/Logout or Sign In/Register */}
          <div className="px-6 pb-6 flex flex-col gap-2">
            {isLoggedIn ? (
              <>
                
                <button
                  className="w-full text-center border border-gray-800 text-gray-800 rounded-full py-2 font-semibold hover:bg-gray-300 transition-colors"
                  onClick={() => { setDrawerOpen(false); setIsLoggedIn(false); }}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-base font-semibold text-center border text-gray-800 rounded-full px-4 py-2 transition"
                  onClick={() => { setDrawerOpen(false); setShowSignInModal(true); }}
                >
                  Sign In
                </button>
                <button
                  className="text-base font-semibold text-center text-white bg-black rounded-full px-4 py-2 hover:bg-gray-900 transition"
                  onClick={() => { setDrawerOpen(false); setShowSignUpModal(true); }}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Profile Sidebar (Right) */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${profileSidebarOpen ? "visible" : "invisible"}`}
        style={{ pointerEvents: profileSidebarOpen ? "auto" : "none" }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black opacity-70 transition-opacity duration-300 ${profileSidebarOpen ? "opacity-70" : "opacity-0"}`}
          onClick={() => setProfileSidebarOpen(false)}
        />
        {/* Sidebar Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${profileSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
            <div className="flex items-center gap-3">
              <Image
                src={user.avatar}
                alt="User Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => setProfileSidebarOpen(false)}
              aria-label="Close profile sidebar"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-6 flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-700">Membership: <span className="font-semibold text-gray-900">Standard</span></div>
              <div className="text-sm text-gray-700 mt-1">Joined: <span className="font-semibold text-gray-900">Jan 2024</span></div>
            </div>
            <Link
              href="/profile"
              className="w-full text-center bg-gray-800 text-white rounded-full py-2 font-semibold hover:bg-gray-700 transition-colors"
              onClick={() => setProfileSidebarOpen(false)}
            >
              View Full Profile
            </Link>
            <button
              className="w-full text-center bg-gray-200 text-gray-800 rounded-full py-2 font-semibold hover:bg-gray-300 transition-colors"
              onClick={() => { setProfileSidebarOpen(false); setIsLoggedIn(false); }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Signin Modal */}
      <SigninModal open={showSignInModal} onClose={() => setShowSignInModal(false)} />
      {/* Signup Modal */}
      <SignupModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </header>
  );
}
