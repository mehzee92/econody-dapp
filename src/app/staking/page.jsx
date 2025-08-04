"use client";
import { useEffect } from "react";
import Image from "next/image";
import PageHeader from "@/components/globalComponents/PageHeading";
import {page} from "@/components/cls";
import useStakingsStore from "@/stores/stakingStore";
import { apiUrl } from "@/components/utils";


export default function StakingPage() {


  const { stakes, fetchStakings } = useStakingsStore();

  useEffect(() => { 
    if(stakes.length==0) {
       fetchStakings();  
    }
  }, []);  

  const handleClaim = (stake) => {
    alert(`Claimed reward for ${stake.asset_metadata.asset_name}!`);
  };

  return (
    <div className={page}>
      <div className="w-full flex flex-col ">
        <PageHeader
          title="Staking"
          description="View and manage your staked assets, track your rewards, and claim your earnings. Stay up-to-date with your staking performance and maximize your returns in one place."
          imageSrc="/images/heroImg.png"
          imageAlt="Staking illustration"
          imageHeight={150}
          imageWidth={150}
        />


      <div className="w-full mt-4 flex flex-col divide-y divide-gray-200 bg-white">
        {stakes.length === 0 && (
          <div className="text-center text-gray-700 py-10">No stakes found.</div>
        )}
        {stakes.map((stake, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center py-5 gap-4">
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100">
              <img 
                  src={apiUrl+"/uploads/"+stake.asset_metadata.thumbnail} 
                  alt={stake.asset_metadata.asset_name} 
                  style={{width:"64px", height:"64px"}}
                  className="object-cover w-full h-full" />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 w-full">
              <div className="font-bold text-lg text-gray-900 leading-tight">{stake.asset_metadata.asset_name}</div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
                <span>Amount: <span className="font-semibold text-gray-900">{stake.staked_amount}</span></span>
                <span className="text-gray-700">·</span>
                <span>Stake Start Date: {stake.staking_start}</span>
                <span className="text-gray-700">·</span>
                <span>Stake End Date: {stake.staking_end}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-1">
                <span className="font-semibold text-gray-700">Expected Reward : {stake.expected_reward}</span>
              </div>
            </div>
            {/* Claim/Progress */}
            <div className="flex flex-col items-end gap-2 min-w-[120px] w-full sm:w-auto">
              {stake.claimable ? (
                <button
                  className="rounded-full bg-gray-800 transition-colors text-xs sm:text-sm md:text-base px-5 text-white w-full sm:w-[80%] py-1 font-bold"
                  onClick={() => handleClaim(stake)}
                >
                  Claim
                </button>
              ) : (
                <div className="w-full sm:w-[80%] h-6 border-[2px] border-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-600 to-green-300"
                    style={{ width: "66.6667%" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
