"use client"
import { useContext } from "react";
import Link from "next/link";
import { WalletContext } from "@/context/WalletContext";

export default function LoginUI() {

  const { setIsLogin } = useContext(WalletContext);
  return (
    <div className=" md:max-h-screen px-5 md:px-10  overflow-hidden relative m-auto">
     

      <div className=" mx-auto flex flex-col relative z-10">
        

        {/* Main content */}
        <div className="flex-1 flex flex-col text-center">
          {/* Sign In Title */}
          <h1 className="text-4xl font-bold text-[#2f5597] mb-6">
            Sign In
          </h1>

          {/* Description */}
          <p className="text-gray-800  text-xl mb-7  leading-relaxed">
            To reach your assets and Marketplace you need to login with Google or Login Web3
          </p>

        

          {/* Web3 Login Description */}
          <p className="text-gray-800 text-xl mb-12 ">
            You have to sign a message which will not charge any gas fee
          </p>

          
          {/* Google Login Button */}
          <div className="mb-4">
            <button onClick={() => setIsLogin(true)} className="rounded-full bg-blue-500 transition-colors text-xl px-5 py-3 text-white w-[250px] font-bold">
              Sign in with Google
            </button>
          </div>

          {/* Google Login Description */}
          <p className="text-gray-800 text-xl">
            You don&apos;t need to remember your username or password
          </p>

          {/* Sign Up Link */}
          <div className="mt-4">
            <span className="text-gray-800 text-base">Don&apos;t have an account? </span>
            <Link href="/signup" className="text-blue-600 hover:underline text-base font-semibold">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}