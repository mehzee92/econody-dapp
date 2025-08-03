"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { WalletContext } from "@/context/WalletContext";
import SignupModal from "@/components/globalComponents/SignupModal";
import PageHeader from "@/components/globalComponents/PageHeading";
import { RiRegisteredLine } from "react-icons/ri";

export default function HomePage() {
  const router = useRouter();
  const { setIsConnect } = useContext(WalletContext);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="pb-10 w-full px-4 md:px-10 ">
      <div className=" w-full ">

        {/* Left Side: Content */}
        <div className="space-y-2 w-full flex">
          <PageHeader
            title="Invest, Connect, and Grow
              with the Leading Digital Asset Community"
            description="Join thousands of investors and enthusiasts to discover, discuss, and invest in top real estate, crypto, and precious metal opportunities. Access exclusive deals, track your portfolio, and connect with a vibrant, forward-thinking community."
            imageSrc="/images/heroImg.png"
            imageAlt="Marketplace illustration"
            imageHeight={300}
            imageWidth={300}

          />
        </div>


      </div>



      <div className="flex flex-wrap w-full md:justify-start justify-center  gap-4">
        <button
          className="flex items-center text-gray-800 gap-2 px-5 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          onClick={() => {
            setIsConnect(true);
            router.push("#");
          }}
        >
          <Image src="/images/Google-G.webp" alt="Google" width={20} height={20} />
          Register with Google
        </button>




        <button
          onClick={() => {
            setIsConnect(true);
            setShowSignupModal(true);
          }}
          className="text-sm shadow px-5 py-3 border border-gray-300 font-medium rounded-full text-gray-800"
        >
          {/* Email Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M3 7l9 6 9-6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Register with Email
        </button>

        <button
          onClick={() => {
            setIsConnect(true);
            setShowSignupModal(true);
          }}
          className="text-sm shadow px-5  border border-gray-300 py-3 font-medium rounded-full text-gray-800">
          <RiRegisteredLine className="inline mr-2 h-5 w-5" />
          Register you Asset
        </button>

        
      </div>

      <SignupModal open={showSignupModal} onClose={() => setShowSignupModal(false)} />


    </div>
  );
}
