"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUpUI() {
  const router = useRouter();
  return (
    <div className="m-auto pb-10 container md:max-h-screen relative overflow-hidden ">
      

      <div className=" mx-auto  px-4 md:px-10 flex flex-col relative z-10">
        <h1 className="text-4xl font-bold text-[#2f5597] mb-4">Sign Up</h1>
        {/* Main content - Two column layout */}
        <div className=" flex justify-between w-full m-auto flex-col lg:m-0 sm:flex-wrap lg:flex-row gap-5">
          {/* Left Column */}
          <div className="">
            {/* Wallet Section */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-black mb-2">
                Wallet
              </label>
              <input
                type="text"
                placeholder="Sign Message with Web3"
                className="w-full lg:w-[250px] px-4 py-3 border-[2px] border-[#5a92c5] text-sm placeholder:text-black font-medium text-center rounded-lg bg-white text-gray-700"
              />
              <div className="mt-2">
                <p className="text-sm text-black font-mono break-all">
                  0x384iuiweoweroiweiwadfiewurwoie
                </p>
                <p className="text-sm text-gray-800 mt-1">
                  This transaction will not charge any gas fee
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Login with Google"
                className="w-full lg:w-[250px] px-4 py-3 text-sm border-[2px] border-[#5a92c5] font-medium placeholder:text-black text-center rounded-lg bg-white text-gray-800"
              />
            </div>

            
          </div>

          <div>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-black mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Name From Google"
                readOnly
                className="w-full lg:w-[250px] px-4 py-3 border-[2px] border-[#5a92c5] placeholder:text-black text-sm font-medium rounded-lg bg-white text-gray-800"
              />
            </div>

            {/* Location Field */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-black mb-2">
                Location
              </label>
              <div className="relative">
                <select className="w-full lg:w-[250px] px-4 py-3 text-sm border-[2px] border-[#5a92c5] rounded-lg text-center bg-white text-black appearance-none cursor-pointer">
                  <option value="">Pick Location</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Home Address */}
            <div className="mb-6 w-full lg:mt-7">
              <label className="block text-base font-semibold text-black mb-2">
                Home Address
              </label>
              <p className="text-gray-800 text-sm">
                Baramati, Pune District, Maharashtra, India
              </p>
            </div>

            {/* Date of Birth */}
            <div className="mb-8 lg:mt-7">
              <label className="block text-base font-semibold text-black mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Pick a Date"
                  className="w-full lg:w-[250px] px-4 py-2 border-[2px] border-[#5a92c5] placeholder:text-black text-center rounded-lg bg-white text-gray-800 text-base cursor-pointer"
                />
              </div>
            </div>

            
          </div>

          {/* Profile Image Section */}
          <div className="lg:min-w-[250px] lg:mt-7">
              <h3 className="text-base font-semibold text-black mb-2">
                Profile Image
              </h3>
              <div className="w-20 h-20 rounded-full overflow-hidden border-[2px] border-[#5a92c5]">
                <Image
                  src="/images/dummy-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
            </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-end lg:mr-44">
              <button
                onClick={() => router.push("/profile")}
                className="bg-[#00b050] hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
              >
                Register
              </button>
            </div>
      </div>
    </div>
  );
}
