import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AdminHeader() {
  return (
   <div className=" flex justify-between py-5 px-5 shadow-sm  items-center w-full ">
        <Link href="/" className="flex items-center  sm:justify-start space-x-2">
          <Image
            src="/images/logo.png"
            alt="Econody Logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="text-xl Font1 font-bold tracking-wide text-gray-900">
            ECONODY
          </span>
        </Link>
        <div>
          <button className='font-bold hidden md:block'>Log out</button>
        </div>
      </div>
  )
}

export default AdminHeader
