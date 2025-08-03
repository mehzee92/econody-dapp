"use client"
import React, { createContext, useState, ReactNode } from "react";

interface WalletContextType {
  isConnect: boolean;
  setIsConnect: (value: boolean) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

export const WalletContext = createContext<WalletContextType>({
  isConnect: false,
  setIsConnect: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnect, setIsConnect] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <WalletContext.Provider value={{ isConnect, setIsConnect, isLogin, setIsLogin }}>
      {children}
    </WalletContext.Provider>
  );
};