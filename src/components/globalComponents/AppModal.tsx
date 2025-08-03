import React from "react";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

export default function AppModal({ open, onClose, children, className = "", maxWidth = "max-w-md" }: AppModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="bg-black absolute opacity-70 w-screen h-screen" />
      <div className="absolute inset-0" onClick={onClose} />
      <div className={`relative bg-white rounded-2xl shadow-xl p-8 w-full ${maxWidth} mx-auto flex flex-col items-center ${className}`}>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
