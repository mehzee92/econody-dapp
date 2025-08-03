"use client";
import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/globalComponents/PageHeading";
import {page} from "@/components/cls";
import FilterDropdown from "@/components/globalComponents/FilterDropdown";
import { Star, FlaskConical, Flag } from "lucide-react";

// Define the Stake type
interface Stake {
  img: string;
  name: string;
  amount: string;
  stakeDate: string;
  period: string;
  reward: string;
  claimable: boolean;
}

const stakes: Stake[] = [
  {
    img: "/images/building1.jpg",
    name: "GGT Stake",
    amount: "12 GGT",
    stakeDate: "July 23, 2025",
    period: "30 Days",
    reward: "0.1 GGT",
    claimable: true,
  },
  {
    img: "/images/building1.jpg",
    name: "GGT Stake",
    amount: "12 GGT",
    stakeDate: "July 23, 2025",
    period: "30 Days",
    reward: "0.1 GGT",
    claimable: false,
  },
];

const filterCategories = [
  { label: "All Stakes", description: "All your staking positions" },
  { label: "Claimable", description: "Stakes with rewards ready to claim", icon: Star },
  { label: "Active", description: "Currently active stakes", icon: Flag },
  { label: "Completed", description: "Completed or matured stakes", icon: FlaskConical },
];

export default function StakingPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Stakes");
  const [search, setSearch] = useState("");

  // Filter stakes by search and filter
  const filteredStakes = stakes.filter((stake) => {
    const q = search.toLowerCase();
    const matchesSearch =
      stake.name.toLowerCase().includes(q) ||
      stake.amount.toLowerCase().includes(q) ||
      stake.stakeDate.toLowerCase().includes(q);
    let matchesFilter = true;
    if (activeFilter === "Claimable") matchesFilter = stake.claimable;
    // Add more filter logic as needed
    return matchesSearch && matchesFilter;
  });

  // Claim button handler
  const handleClaim = (stake: Stake) => {
    alert(`Claimed reward for ${stake.name}!`);
  };

  return (
    <div className={page}>
      {/* Header */}
      <div className="w-full flex flex-col ">
        <PageHeader
          title="Staking"
          description="View and manage your staked assets, track your rewards, and claim your earnings. Stay up-to-date with your staking performance and maximize your returns in one place."
          imageSrc="/images/heroImg.png"
          imageAlt="Staking illustration"
          imageHeight={150}
          imageWidth={150}
        />
        {/* Filter Cards Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-8">
          <div className="flex flex-col max-w-[1200px] md:flex-row gap-3 w-full">
            <FilterDropdown
              options={filterCategories}
              value={activeFilter}
              onChange={setActiveFilter}
            />
            <div className="flex gap-2 w-full max-w-4xl">
              <div className="flex items-center flex-1 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 17.65A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-1.35 7.15z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search stakes"
                  className="outline-none text-sm text-gray-700 w-full placeholder-gray-700"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <button className="rounded-full bg-gray-800 text-white px-5 py-2">Search</button>
            </div>
          </div>
        </div>
        {/* Stake Count & Sorting */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-gray-800">{filteredStakes.length} Stakes</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-base">Hotness</span>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>
      {/* Stake List */}
      <div className="w-full mt-4 flex flex-col divide-y divide-gray-200 bg-white">
        {filteredStakes.length === 0 && (
          <div className="text-center text-gray-700 py-10">No stakes found.</div>
        )}
        {filteredStakes.map((stake, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center py-5 gap-4">
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100">
              <Image src={stake.img} alt={stake.name} width={64} height={64} className="object-cover w-full h-full" />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 w-full">
              <div className="font-bold text-lg text-gray-900 leading-tight">{stake.name}</div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
                <span>Amount: <span className="font-semibold text-gray-900">{stake.amount}</span></span>
                <span className="text-gray-700">·</span>
                <span>Stake Date: {stake.stakeDate}</span>
                <span className="text-gray-700">·</span>
                <span>Period: {stake.period}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-1">
                <span className="font-semibold text-gray-700">Reward {stake.reward}</span>
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
  );
}
