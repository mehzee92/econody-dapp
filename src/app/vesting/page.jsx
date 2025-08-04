"use client";
import PageHeader from "@/components/globalComponents/PageHeading";
import React, { useEffect } from "react";
import {page} from "@/components/cls";
import useVestingsStore from "@/stores/vestingStore";



export default function CliffPage() {


  const { vestings, fetchVestings  }  = useVestingsStore();

  useEffect(() => { 
    if(vestings.length==0) {
       fetchVestings();  
    }
  }, []);  



  const handleClaim = (item) => {
    alert(`Claimed for ${item.asset}!`);
  };

  const handleCliffInfo = (item) => {
    alert(`Cliff information for ${item.asset}`);
  };




  return (
    <div className={page}>
      {/* Header */}
      <div className="w-full flex flex-col  ">
        <PageHeader
          title="Vesting"
          description="Track your vesting assets, monitor unlock schedules, and claim your available tokens. Stay informed about your vesting progress and upcoming releases."
          imageSrc="/images/heroImg.png"
          imageAlt="Assets illustration"
          imageHeight={150}
          imageWidth={150}
        />
      </div>
      {/* Asset List */}
      <div className="w-full mt-4 flex flex-col divide-y divide-gray-200 bg-white">
        {vestings.length === 0 && (
          <div className="text-center text-gray-400 py-10">No vesting assets found.</div>
        )}

        {Array.isArray(vestings) && vestings.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center py-5 gap-4">
            {/* Thumbnail */}
            <div className="flex-shrink-0">
              <img
                src="/images/building1.jpg"
                alt={item.asset + ' thumbnail'}
                className="w-14 h-14 rounded-lg object-cover border border-gray-200 bg-gray-100"
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 w-full">
              <div className="font-bold text-lg text-gray-900 leading-tight">{item.asset}</div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
                <span>Date: <span className="font-semibold text-gray-900">{item.date}</span></span>
                <span className="text-gray-400">·</span>
                <span>Total: {item.total}</span>
                <span className="text-gray-400">·</span>
                <span>Unlocked: {item.unlocked}</span>
                <span className="text-gray-400">·</span>
                <span>Available to claim: {item.availableToClaim}</span>
                <span className="text-gray-400">·</span>
                <span>Claimed: {item.claimed}</span>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-end gap-2 min-w-[220px] w-full sm:w-auto">
              <button
                className="bg-[#7f7f7f] hover:bg-gray-500 text-white px-4 py-1 rounded-full text-xs font-medium transition-colors w-full sm:w-auto"
                onClick={() => handleCliffInfo(item)}
              >
                CLIFF INFORMATION
              </button>
              <button
                className="bg-[#00b050] hover:bg-green-600 text-white px-4 py-1 rounded-full text-xs font-medium transition-colors w-full sm:w-auto"
                onClick={() => handleClaim(item)}
              >
                CLAIM
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}