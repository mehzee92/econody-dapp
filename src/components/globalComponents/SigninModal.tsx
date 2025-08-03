import React, { useState } from "react";
import Image from "next/image";
import AppModal from "@/components/globalComponents/AppModal";

interface SigninModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SigninModal({ open, onClose }: SigninModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AppModal open={open} onClose={onClose} maxWidth=" max-w-[300px]">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 mt-2">Sign in</h2>
      <form className="w-full flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.88 3.549A9 9 0 113.55 16.88" /></svg>
          </span>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.32-2.69A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.043 5.306M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 transition-colors text-base mt-2"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-xs">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-gray-800 font-medium hover:bg-gray-50 transition">
        <Image src="/images/Google-G.webp" alt="Google" width={20} height={20} />
        Sign up with Google
      </button>
    </AppModal>
  );
}