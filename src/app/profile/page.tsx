"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProfilePage() {
    return (
        <div className="min-h-screen pb-10 m-auto relative overflow-hidden px-4  lg:px-10">
    
            {/* Main Content Container */}
            <div className="relative z-10 mx-auto   pt-4">
                <div className=" p-4 md:p-6  ">
                    <div className="flex flex-col-reverse lg:flex-row items-start gap-4 lg:gap-16">

                 

                        {/* left Section - Profile Details */}
                        <div className="flex-1 space-y-4 w-full">
                          
                            <h1 className='text-3xl text-black font-extrabold'>Jane-doe</h1>


                            {/* Profile Information Cards */}
                            <div className="space-y-6">
                                {/* Wallet */}
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 mt-1">
                                        {/* Wallet Icon */}
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                                            <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="17" cy="12" r="1" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                            Wallet: 0x1234...abcd
                                        </p>
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 mt-1">
                                        {/* Name Icon */}
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                            Name: Jane Doe
                                        </p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 mt-1">
                                        {/* Email Icon */}
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                            Email: Jane@example.com
                                        </p>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 mt-1">
                                        {/* Location Icon */}
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                            Location: Tokyo, Japan
                                        </p>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 mt-1">
                                        {/* Address Icon */}
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                                            <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                            Address: 123 Main St, Tokyo, Japan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                               {/* right Section - Profile Image and Basic Info */}
                        <div className="flex flex-col items-center justify-center w-full lg:w-fit space-y-6 lg:min-w-[300px]">
                            {/* Profile Image with Yellow Border */}
                            <div className="relative  flex justify-center w-full md:w-fit">
                                <div
                                    className="w-48 h-48 md:w-60 border border-red-500 bg-red-400 md:h-60 rounded-full p-1"
                                    style={{
                                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                                    }}
                                >
                                    <div className="w-full h-full rounded-full p-2 bg-gray-100 flex flex-col items-center justify-center overflow-hidden">

                                        <Image
                                            src={"/images/dummy-image.jpg"}
                                            alt='profile image'
                                            width={300}
                                            height={300}
                                            className='w-[110%] rounded-full  h-auto'
                                        />
                                    </div>
                                        <h1 className='text-3xl text-gray-800 mt-10 w-full text-center font-bold'>User: 324354</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* Achievement Badge */}
                    <div className="mt-6">
                        <div className="flex items-center gap-4">
                            {/* Golden Badge Icon */}
                            <div className="w-12 h-12 flex-shrink-0">
                                <svg viewBox="0 0 48 48" className="w-full h-full">
                                    {/* Outer ring */}
                                    <circle cx="24" cy="24" r="20" fill="none" stroke="#FFD700" strokeWidth="2" />
                                    {/* Inner pattern - hexagonal flower */}
                                    <g fill="#FFD700" opacity="0.8">
                                        <circle cx="24" cy="24" r="3" />
                                        <circle cx="24" cy="14" r="2.5" />
                                        <circle cx="24" cy="34" r="2.5" />
                                        <circle cx="16" cy="19" r="2.5" />
                                        <circle cx="32" cy="29" r="2.5" />
                                        <circle cx="16" cy="29" r="2.5" />
                                        <circle cx="32" cy="19" r="2.5" />
                                    </g>
                                    {/* Connecting lines */}
                                    <g stroke="#FFD700" strokeWidth="1.5" opacity="0.6">
                                        <line x1="24" y1="24" x2="24" y2="14" />
                                        <line x1="24" y1="24" x2="24" y2="34" />
                                        <line x1="24" y1="24" x2="16" y2="19" />
                                        <line x1="24" y1="24" x2="32" y2="29" />
                                        <line x1="24" y1="24" x2="16" y2="29" />
                                        <line x1="24" y1="24" x2="32" y2="19" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    Competitions Grandmaster
                                </h3>
                                <p className="text-sm text-gray-600">
                                    2 of 203,191
                                </p>
                            </div>
                        </div>
                           <Link href={"/transactions"} className='mt-10 text-blue-800 text-xl pt-20'>Transitions</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Adjustments */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .backdrop-blur-sm {
                        background: rgba(255, 255, 255, 0.98);
                    }
                }
            `}</style>
        </div>
    );
}