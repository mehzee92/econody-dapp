"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import PageHeader from "@/components/globalComponents/PageHeading";
import AppModal from "@/components/globalComponents/AppModal";
import { page } from "@/components/cls";
import { apiUrl } from "@/components/utils";
import useMyAssetsStore from "@/stores/my-assets"




export default function AssetsCards() 
{
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const cardsRowRef = useRef<HTMLDivElement>(null);
	// const[search, setSearch] = useState("");
	const { assets, error, fetchAssets } = useMyAssetsStore();


	useEffect(()=>{
		if(assets.length==0) {
			fetchAssets("");
		}
	}, [])
	

	const assetDetails = {
		name: "GoldCoin",
		balance: 1000,
		price: "$12.00",
	};

	// Carousel scroll handlers for cards row
	const scrollCardsRow = (dir: "left" | "right") => {
		if (cardsRowRef.current) {
			const scrollAmount = 300; // px, adjust as needed
			cardsRowRef.current.scrollBy({
				left: dir === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};


	return (<div className={page}>
		<PageHeader
			title="Assets"
			description="Manage, track, and grow your digital and real-world asset portfolio. Browse your holdings, view performance, and take action on your investments in one place."
			imageSrc="/images/heroImg.png"
			imageAlt="Assets illustration"
			imageHeight={150}
			imageWidth={150}
		/>

		<div className="text-red-700">{error}</div>


		{/* Filter Cards Row & Search Bar (Marketplace style) */}
		{/* <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-8">
			<div className="flex max-w-[1200px] gap-3 w-full">
				<div className="flex items-center max-w-4xl flex-1 border w-full border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
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

		</div> */}



		{/* Asset Cards Carousel/Grid (unchanged) */}
		<div className="flex">
			<div
				ref={cardsRowRef}
				className="w-screen -mx-4 md:mx-0 md:w-full flex flex-nowrap md:flex-wrap md:gap-4 overflow-x-auto md:overflow-x-visible scrollbar-hide pb-2 snap-x snap-mandatory"
			>
				{Array.isArray(assets) && assets.map((asset, idx) => (
					<div
						key={idx}
						className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 cursor-pointer flex-shrink-0 w-[90vw] max-w-xs mx-auto snap-center md:w-[260px] md:mx-0"
						onClick={() => router.push("/property-details?asset_id="+asset.asset_id)}
					>
						<img

							src={apiUrl+"/uploads/"+asset.asset_metadata.thumbnail}
							alt={asset.asset_metadata.name}
							style={{width:"300px", height:"200px"}}
							className="w-full m-[2px] rounded-xl rounded-b-none h-44 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-md font-semibold text-gray-900">{asset.asset_metadata.name}</h3>
							<div className="text-xs text-gray-500 space-x-2 mb-1">
								<span>{asset.asset_metadata.category}</span>
							</div>
							<p className="text-xs text-gray-600">Tokens Owned: {Math.round(asset.amount_held*1000)/1000}</p>
							<p className="text-xs text-gray-600">Value: ${Math.round(asset.amount_held*1000*0.00121)/1000}</p>
							<div className="flex gap-2 pt-2">
								<button className="flex-1 bg-gray-400 text-white text-xs py-1 rounded-full hover:bg-gray-500 transition-colors">
									ALL INFO
								</button>
								<button
									className="flex-1 bg-red-600 text-white text-xs py-1 rounded-full hover:bg-red-700 transition-colors"
									onClick={(e) => {
										e.stopPropagation();
										setShowModal(true);
									}}
								>
									SELL
								</button>
							</div>
							<button
								onClick={() => router.push("/property-details")}
								className="mt-2 w-full bg-[#d1cdc6] text-gray-800 py-1 rounded-lg text-xs font-medium hover:opacity-90"
							>
								GO TO ASSET PAGE
							</button>
						</div>
					</div>
				))}
			</div>
		</div>

		
		{/* Carousel buttons for small screens only */}
		<div className="flex justify-center gap-4 mt-2 md:hidden">
			<button
				aria-label="Scroll left"
				className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
				onClick={() => scrollCardsRow("left")}
				type="button"
			>
				<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
			</button>
			<button
				aria-label="Scroll right"
				className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
				onClick={() => scrollCardsRow("right")}
				type="button"
			>
				<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
			</button>
		</div>

		<AppModal open={showModal} onClose={() => setShowModal(false)}>
			<h2 className="text-3xl font-sans text-black font-bold">Sell Asset</h2>
			<div className="mb-4">
				<div className="text-sm text-gray-700 font-semibold">Asset: <span className="font-bold">{assetDetails.name}</span></div>
				<div className="text-sm text-gray-700">Balance: {assetDetails.balance}</div>
				<div className="text-sm text-gray-700">Current Price: {assetDetails.price}</div>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault();
					// handle form submit here
					setShowModal(false);
					alert('Sell order submitted!');
				}}
				className="flex flex-col gap-3"
			>
				<label className="text-sm font-medium text-gray-700">
					Amount
					<input
						type="number"
						min="1"
						max={assetDetails.balance}
						required
						className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
					/>
				</label>
				<label className="text-sm font-medium text-gray-700">
					Price per unit
					<input
						type="number"
						min="0.01"
						step="0.01"
						required
						className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
					/>
				</label>
				<button
					type="submit"
					className="bg-gray-800 text-white rounded-full py-2 font-semibold hover:bg-gray-700 transition-colors mt-2"
				>
					Submit Sell Order
				</button>
			</form>
		</AppModal>
	</div>
	);
}
