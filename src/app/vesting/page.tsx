"use client";
import PageHeader from "@/components/globalComponents/PageHeading";
import React, { useEffect } from "react";
import {page} from "@/components/cls";
import FilterDropdown from "@/components/globalComponents/FilterDropdown";
import { Star, FlaskConical, Users, Flag, Wand2 } from "lucide-react";

interface Asset {
  asset: string;
  date: string;
  total: number;
  unlocked: string;
  availableToClaim: string;
  claimed: number;
}

const assetData: Asset[] = [
  {
    asset: "GoldCoin",
    date: "2025.01.01",
    total: 1000,
    unlocked: "26%",
    availableToClaim: "26 000",
    claimed: 0,
  },
  {
    asset: "GoldCoin",
    date: "2025.01.01",
    total: 1000,
    unlocked: "26%",
    availableToClaim: "26 000",
    claimed: 0,
  },
  {
    asset: "GoldCoin",
    date: "2025.01.01",
    total: 1000,
    unlocked: "26%",
    availableToClaim: "26 000",
    claimed: 0,
  },
];



export default function CliffPage() {

  const[vestings, setVestings] = useState();

  const handleClaim = (item: Asset) => {
    alert(`Claimed for ${item.asset}!`);
  };

  const handleCliffInfo = (item: Asset) => {
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
        {/* Filter Cards Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-8">
          <div className="flex max-w-[1200px] flex-col md:flex-row gap-3 w-full">
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
                  placeholder="Search assets"
                  className="outline-none text-sm text-gray-700 w-full placeholder-gray-700"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <button className="rounded-full bg-gray-800 text-white px-5 py-2">Search</button>
            </div>
          </div>
        </div>
        {/* Asset Count & Sorting */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-gray-800">{filteredAssets.length} Vesting Assets</span>
        </div>
      </div>
      {/* Asset List */}
      <div className="w-full mt-4 flex flex-col divide-y divide-gray-200 bg-white">
        {filteredAssets.length === 0 && (
          <div className="text-center text-gray-400 py-10">No vesting assets found.</div>
        )}
        {filteredAssets.map((item: Asset, i: number) => (
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