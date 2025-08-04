"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Star, FlaskConical, Users, Flag, Wand2 } from "lucide-react";
import PageHeader from "@/components/globalComponents/PageHeading";
import FilterDropdown from "@/components/globalComponents/FilterDropdown";
import { page } from "@/components/cls";
import { apiUrl } from "@/components/utils";
// import Dropdown from "@/components/Dropdown";

import useMarketplaceStore from "@/stores/marketplace"


const filterCategories = [
  { label: "All Assets", description: "Everything, past & present" },
  { label: "Featured", description: "Premier assets with potential", icon: Star },
  { label: "Getting Started", description: "Approachable investment fundamentals", icon: Flag },
  { label: "Research", description: "Scientific and scholarly asset analysis", icon: FlaskConical },
  { label: "Community", description: "Curated by fellow Econody users", icon: Users },
  { label: "Playground", description: "Fun practice assets", icon: Wand2 },
];



export default function MarketplaceUI() 
{

  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All Assets");
  const [search, setSearch] = useState("");

  const { assets, fetchAssets  }  = useMarketplaceStore();

  useEffect(() => { 
    if(assets.length==0) {
       fetchAssets();
    }
  }, []);

  // const filteredItems = assets.filter((item) => {
  //   const matchesSearch =
  //     item?.title?.toLowerCase().includes(search.toLowerCase()) ||
  //     item?.category?.toLowerCase().includes(search.toLowerCase()) ||
  //     (item?.tags && item?.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())));

  //   const matchesCategory = item?.category === "All" || true;
  //   if (activeFilter === "All Assets") return matchesSearch && matchesCategory;
  //   if (activeFilter === "Featured") return matchesSearch && item?.progress >= 70;
  //   if (activeFilter === "Getting Started") return matchesSearch && parseFloat(item?.apr) < 10;
  //   if (activeFilter === "Research") return matchesSearch && item?.category === "REAL ESTATE";
  //   if (activeFilter === "Community") return matchesSearch && item?.investors > 50;
  //   if (activeFilter === "Playground") return matchesSearch && item?.category === "CRYPTO COIN";
  //   return matchesSearch;
  // });






  return (
    <div className={page}>
      <PageHeader
        title="Marketplace"
        description="Discover, invest, and manage your digital and real-world assets on Econody. Browse a curated selection of real estate, precious metals, crypto, and more."
        imageSrc="/images/heroImg.png"
        imageAlt="Marketplace illustration"
        imageHeight={150}
        imageWidth={150}
      />

      {/* <Dropdown
          label="Actions"
          options={[
            { label: 'Edit', onClick: () => alert('Edit clicked') },
            { label: 'Delete', onClick: () => alert('Delete clicked') },
            { label: 'View', onClick: () => alert('View clicked') },
          ]}
      /> */}


      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-8">
        <div className="flex flex-col max-w-[1200px] md:flex-row gap-3 w-full">
          <FilterDropdown options={filterCategories} value={activeFilter} onChange={setActiveFilter} />
          <div className="flex w-full justify-between gap-2">
            <div className="flex items-center flex-1 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 17.65A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-1.35 7.15z" />
              </svg>
              <input
                type="text"
                placeholder="Search assets"
                className="outline-none flex-1 text-sm text-gray-700 w-full placeholder-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="rounded-full bg-gray-800 text-white px-5 py-2">Search</button>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap gap-4 justify-center lg:justify-start flex-1">
        {Array.isArray(assets) && assets.map((item) => (
          <div
            key={item?.id}
            className="bg-white rounded-xl p-[2px] overflow-hidden shadow-md h-fit border border-gray-200 cursor-pointer"
            style={{ width: 270 }}
            onClick={() => router.push(`/property-details?asset_id=${item?.id}`)}
          >
            <img src={apiUrl+"/uploads/"+item?.thumbnail} alt={item?.title} width={300} height={200} className="w-full m-auto h-40 rounded-xl rounded-b-none object-cover" />
            <div className="p-4 flex flex-col justify-between h-full">
              <h3 className="text-md font-semibold text-gray-900">{item?.asset_name}</h3>
              <p className="text-xs h-8 text-gray-600">{item?.title.slice(0, 72)}</p>
              <div className="flex py-1">
              <p className="text-xs mt-1 text-gray-600">{item?.category}</p>
              <p className="flex-1"></p>
              <p className="text-[12px] text-gray-600 space-x-1">
                  {Array.isArray(item?.tags?.split(",")) && item?.tags?.split(",").map((tag) => (
                    <span key={tag} className="text-blue-500">
                      {tag}
                    </span>
                  ))}
              </p>
            </div>

            <p className="text-xs mt-1 text-gray-600">Valuation: {item?.valuation}</p>

            <div className="flex py-2">
              <p className="text-xs text-gray-600">{item?.investors} Investors</p>
              <p className="flex-1"></p>
              <p className="text-xs text-gray-600">{item?.apr}% APR</p>
            </div>

              <div className="mt-2">
                
                <div className="relative border border-1 border-green-400 w-full bg-gray-100 rounded-full h-4 mt-1">
                  <div className="absolute left-0 h-4 bg-[#00bf63] rounded-full" style={{ width: `${item?.progress}%` }}></div>
                  <div className="absolute right-2 top-[50%] translate-y-[-50%] text-[10px] text-gray-700 font-medium">
                    {item?.progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}