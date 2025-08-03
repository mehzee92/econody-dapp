import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-gray-700 w-full border-t border-gray-200 py-5 body-font ">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-700" href="/">
           
            <h2 className="footer-heading text-lg md:text-xl Font1 font-bold tracking-wide">ECONODY</h2>
          </Link>

          <div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/>
              </svg>
            </Link>
          </div>
          </div>


          <div className="flex gap-4 items-center text-[14px] ">
            <Link href="/faqs" className="hover:text-blue-400 transition-colors">FAQs</Link>
            <Link href="/terms-of-use" className="hover:text-blue-400 transition-colors">Terms of Use</Link>
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          </div>


          <p className=" text-gray-700 text-[14px] flex items-center  gap-2">
          <span className="text-2xl">©</span> 2025 Econody. All rights reserved.
        </p>


        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
